import React, { useEffect, useRef } from 'react'

/**
 * Ascii3DStarfield - Stationary when idle, Hyper-speed vertical travel on scroll
 *
 * Features:
 * - Beautiful, uniform, non-clumping spatial distribution across the page
 * - Fixed & stationary when the page is at rest
 * - High-speed vertical travel with velocity light streaks (| : .) on scroll
 * - Exact outskirts boundary clipping around Earth and Moon
 */

const CHARS = ['*', '+', '.', "'", 'o', '*', '+', '.', "'", '.']

export default function Ascii3DStarfield({
  variant = 'about',
  opacity = 0.7,
  numStars = 160,
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

    const charW = 7.8
    const charH = 13.5
    let cols = Math.max(20, Math.floor(width / charW))
    let rows = Math.max(15, Math.floor(height / charH))

    let buffer = Array.from({ length: rows }, () => new Array(cols).fill(' '))

    const GLISTEN_RAMP = ['.', "'", '+', '*', '+', "'", '.']

    // Generate balanced, beautifully distributed stars across a grid
    const createDistributedStars = () => {
      const list = []
      const gridX = 16
      const gridY = 10

      for (let gy = 0; gy < gridY; gy++) {
        for (let gx = 0; gx < gridX; gx++) {
          if (list.length >= numStars) break
          // Organic jitter within grid cells to avoid alignment patterns
          const u = (gx + 0.15 + Math.random() * 0.7) / gridX
          const v = (gy + 0.15 + Math.random() * 0.7) / gridY
          const depth = 0.6 + Math.random() * 1.4
          const char = CHARS[Math.floor(Math.random() * CHARS.length)]
          const isGlistening = Math.random() < 0.35
          const glistenSpeed = 1.2 + Math.random() * 2.2
          const glistenPhase = Math.random() * Math.PI * 2

          list.push({
            baseU: u,
            baseV: v,
            currentV: v,
            char,
            depth,
            isGlistening,
            glistenSpeed,
            glistenPhase,
          })
        }
      }
      return list
    }

    let stars = createDistributedStars()

    // Scroll Velocity Tracking
    let lastScrollY = window.scrollY
    let scrollVelocity = 0
    let lastTime = performance.now()

    const handleScroll = () => {
      const currentY = window.scrollY
      const deltaY = currentY - lastScrollY
      lastScrollY = currentY
      scrollVelocity += deltaY * 0.05
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

    // Exact planet outskirts boundary check helper
    const isExcluded = (col, row) => {
      const normX = col / cols
      const normY = row / rows
      const aspect = (width / height) || 1.77

      if (variant === 'about') {
        // Earth sphere silhouette: exact physical outskirts at R = 0.255
        const dx = (normX - 0.95) * aspect
        const dy = normY - 0.50
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 0.255) return true
      }

      if (variant === 'services') {
        // Moon sphere silhouette: exact physical outskirts at R = 0.185
        const dx = (normX - 0.04) * aspect
        const dy = normY - 0.05
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 0.185) return true
      }

      return false
    }

    // Animation Loop
    const renderLoop = (time) => {
      if (!isMounted) return

      const dt = Math.min(0.05, (time - lastTime) / 1000)
      lastTime = time

      // Smooth velocity decay
      scrollVelocity *= 0.88
      if (Math.abs(scrollVelocity) < 0.001) scrollVelocity = 0

      const isScrolling = Math.abs(scrollVelocity) > 0.05
      const scrollDir = scrollVelocity > 0 ? 1 : -1

      // Clear buffer
      for (let r = 0; r < rows; r++) {
        buffer[r].fill(' ')
      }

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]

        if (isScrolling) {
          // In motion: travel vertically with depth parallax
          star.currentV -= scrollVelocity * dt * 0.45 * star.depth
          if (star.currentV < 0) star.currentV += 1
          if (star.currentV > 1) star.currentV -= 1
        } else {
          // Stationary: smoothly ease back to fixed balanced resting coordinate
          star.currentV += (star.baseV - star.currentV) * 0.15
        }

        const screenX = Math.floor(star.baseU * cols)
        const screenY = Math.floor(star.currentV * rows)

        if (screenX >= 0 && screenX < cols && screenY >= 0 && screenY < rows) {
          if (!isExcluded(screenX, screenY)) {
            let renderChar = star.char
            if (star.isGlistening && !isScrolling) {
              const phase = (time * 0.001 * star.glistenSpeed + star.glistenPhase) % (Math.PI * 2)
              const norm = (Math.sin(phase) + 1) / 2
              const idx = Math.min(GLISTEN_RAMP.length - 1, Math.floor(norm * GLISTEN_RAMP.length))
              renderChar = GLISTEN_RAMP[idx]
            }

            buffer[screenY][screenX] = renderChar

            // Vertical hyperspace speed line trails during scroll
            if (isScrolling) {
              const streakLength = Math.min(6, Math.floor(Math.abs(scrollVelocity) * 2.4 * star.depth))
              for (let s = 1; s <= streakLength; s++) {
                const trailY = screenY + s * scrollDir
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
  }, [variant, numStars])

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
