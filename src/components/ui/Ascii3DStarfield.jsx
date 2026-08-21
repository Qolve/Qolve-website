import React, { useEffect, useRef } from 'react'

/**
 * 3D ASCII Starfield based on classic terminal perspective projection
 * (inspired by asciiart.eu/animations/ascii-starfield)
 *
 * Features:
 * - Pure text character buffer rendered via requestAnimationFrame (0 React re-renders)
 * - True 3D perspective projection (X/Z, Y/Z) with character density ramp
 * - Scroll-velocity warp drive: stars streak and accelerate during scroll
 * - Strict geometric exclusionary boundaries around Earth and Moon
 */

const CHARSET_RAMP = ' .:-=+*#%@'
const TRAIL_CHARS = '.·:`'

export default function Ascii3DStarfield({
  variant = 'about',
  opacity = 0.65,
  numStars = 120,
  baseSpeed = 0.4,
  fov = 45,
}) {
  const preRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const pre = preRef.current
    const container = containerRef.current
    if (!pre || !container) return

    let animId
    let isMounted = true
    let width = container.clientWidth || window.innerWidth
    let height = container.clientHeight || window.innerHeight

    // Measure character aspect ratio
    const charW = 7.8
    const charH = 13.5
    let cols = Math.max(20, Math.floor(width / charW))
    let rows = Math.max(15, Math.floor(height / charH))

    // 2D Text buffer
    let buffer = Array.from({ length: rows }, () => new Array(cols).fill(' '))

    // Initialize 3D Stars
    const spawnStar = (randomZ = true) => {
      return {
        x: (Math.random() * 2 - 1) * 1.5,
        y: (Math.random() * 2 - 1) * 0.9,
        z: randomZ ? Math.random() * 3 + 0.2 : 3.0 + Math.random() * 0.5,
      }
    }

    let stars = Array.from({ length: numStars }, () => spawnStar(true))

    // Scroll Velocity Tracking
    let lastScrollY = window.scrollY
    let scrollVelocity = 0
    let lastTime = performance.now()

    const handleScroll = () => {
      const currentY = window.scrollY
      const deltaY = currentY - lastScrollY
      lastScrollY = currentY
      scrollVelocity += deltaY * 0.04
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    const handleResize = () => {
      if (!container) return
      width = container.clientWidth || window.innerWidth
      height = container.clientHeight || window.innerHeight
      cols = Math.max(20, Math.floor(width / charW))
      rows = Math.max(15, Math.floor(height / charH))
      buffer = Array.from({ length: rows }, () => new Array(cols).fill(' '))
    }

    window.addEventListener('resize', handleResize, { passive: true })

    // Precise 5% contour boundary check helper
    const isExcluded = (col, row) => {
      const normX = col / cols
      const normY = row / rows
      // Correct for viewport pixel aspect ratio so exclusion boundary is a perfect circle
      const aspect = (width / height) || 1.77

      if (variant === 'about') {
        // Earth sphere silhouette: center ~ (0.94, 0.50) with tight 5% border
        const dx = (normX - 0.94) * aspect
        const dy = normY - 0.50
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 0.30) return true
      }

      if (variant === 'services') {
        // Moon sphere silhouette: center ~ (0.05, 0.06) with tight 5% border
        const dx = (normX - 0.05) * aspect
        const dy = normY - 0.06
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 0.23) return true
      }

      return false
    }

    // Main 3D Animation Loop
    const renderLoop = (time) => {
      if (!isMounted) return

      const dt = Math.min(0.05, (time - lastTime) / 1000)
      lastTime = time

      // Decay scroll velocity smoothly
      scrollVelocity *= 0.92
      if (Math.abs(scrollVelocity) < 0.001) scrollVelocity = 0

      // Effective speed combines ambient drift + scroll velocity
      // Check if actively scrolling
      const isScrolling = Math.abs(scrollVelocity) > 0.08
      const scrollDir = scrollVelocity > 0 ? 1 : -1

      // Clear buffer
      for (let r = 0; r < rows; r++) {
        buffer[r].fill(' ')
      }

      const halfCols = cols / 2
      const halfRows = rows / 2

      // Update & render stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]

        if (!isScrolling) {
          // 1. IDLE STATE: Normal serene forward 3D drift
          star.z -= dt * baseSpeed
          if (star.z <= 0.15) {
            stars[i] = spawnStar(false)
            continue
          }
        } else {
          // 2. SCROLLING STATE: Freeze Z expansion, move purely vertically (traveling up/down)
          // Parallax vertical movement based on star depth
          star.y -= scrollVelocity * dt * 0.8 * (0.8 / star.z)

          // Wrap around vertical edges seamlessly
          if (star.y > 1.2) star.y = -1.2
          if (star.y < -1.2) star.y = 1.2
        }

        // Perspective projection: screenX = halfCols + (X / Z) * fov
        const screenX = Math.floor(halfCols + (star.x / star.z) * fov)
        const screenY = Math.floor(halfRows + (star.y / star.z) * (fov * (rows / cols)))

        // Character lookup based on depth (closer = denser/larger character)
        const depthFactor = Math.max(0, Math.min(1, (3.2 - star.z) / 3.0))
        const charIdx = Math.min(CHARSET_RAMP.length - 1, Math.floor(depthFactor * CHARSET_RAMP.length))
        const starChar = CHARSET_RAMP[charIdx]

        if (screenX >= 0 && screenX < cols && screenY >= 0 && screenY < rows) {
          if (!isExcluded(screenX, screenY)) {
            buffer[screenY][screenX] = starChar

            // Vertical hyperspace speed trails when traveling vertically
            if (isScrolling) {
              const streakLength = Math.min(6, Math.floor(Math.abs(scrollVelocity) * 2.2))
              const trailDir = scrollDir // trail stretches behind movement direction

              for (let s = 1; s <= streakLength; s++) {
                const trailY = screenY + s * trailDir
                if (trailY >= 0 && trailY < rows && !isExcluded(screenX, trailY)) {
                  if (buffer[trailY][screenX] === ' ') {
                    buffer[trailY][screenX] = s === 1 ? '|' : s <= 3 ? ':' : '.'
                  }
                }
              }
            }
          }
        }
      }

      // Convert 2D buffer to string in a single assignment
      let output = ''
      for (let r = 0; r < rows; r++) {
        output += buffer[r].join('') + '\n'
      }
      pre.textContent = output

      animId = requestAnimationFrame(renderLoop)
    }

    animId = requestAnimationFrame(renderLoop)

    return () => {
      isMounted = false
      cancelAnimationFrame(animId)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [variant, numStars, baseSpeed, fov])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
        userSelect: 'none',
        opacity: opacity,
      }}
    >
      <pre
        ref={preRef}
        style={{
          margin: 0,
          padding: 0,
          fontFamily: '"SF Mono", "Menlo", "Monaco", "Cascadia Code", "Courier New", monospace',
          fontSize: '0.75rem',
          lineHeight: '1.15',
          color: '#000000',
          WebkitFontSmoothing: 'none',
          MozOsxFontSmoothing: 'unset',
          whiteSpace: 'pre',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
}
