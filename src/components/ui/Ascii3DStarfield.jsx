import React, { useEffect, useRef } from 'react'

/**
 * Ascii3DStarfield - Ultra-Slow Celestial Breathing & Gradient Glisten
 *
 * Features:
 * - Ultra-slow, serene glistening cycles (~35–60 seconds per period)
 * - Continuous smooth RGB color gradient interpolation
 * - Randomized behaviors: Shape-morphing, continuous Color blending, Dual morphing, or Solid
 * - Stationary in balanced grid distribution when page is at rest
 * - Hyperspace vertical travel streaks on scroll
 * - Exact outskirts boundary clipping around Earth and Moon
 */

const BASE_CHARS = ['*', '+', '.', "'", 'o', '*', '+', '.', "'", '.']
const GLISTEN_SHAPES = ['.', "'", '+', '*', '+', "'", '.']

const COLOR_PALETTES = [
  // 1. Deep Monochrome / Silver shimmer
  ['#000000', '#334155', '#64748b', '#94a3b8', '#64748b', '#334155', '#000000'],
  // 2. Solar Gold / Amber shimmer
  ['#000000', '#78350f', '#d97706', '#fbbf24', '#d97706', '#78350f', '#000000'],
  // 3. Cyber Lime / Emerald shimmer
  ['#000000', '#14532d', '#65a30d', '#a3e635', '#65a30d', '#14532d', '#000000'],
  // 4. Deep Ice Cyan shimmer
  ['#000000', '#0c4a6e', '#0284c7', '#38bdf8', '#0284c7', '#0c4a6e', '#000000'],
  // 5. Nebula Violet shimmer
  ['#000000', '#581c87', '#9333ea', '#c084fc', '#9333ea', '#581c87', '#000000'],
]

function hexToRgb(hex) {
  const c = parseInt(hex.replace('#', ''), 16)
  return [(c >> 16) & 255, (c >> 8) & 255, c & 255]
}

function interpolatePalette(palette, norm) {
  const count = palette.length - 1
  const scaled = norm * count
  const index = Math.min(count - 1, Math.floor(scaled))
  const frac = scaled - index

  const [r1, g1, b1] = hexToRgb(palette[index])
  const [r2, g2, b2] = hexToRgb(palette[index + 1])

  const r = Math.round(r1 + (r2 - r1) * frac)
  const g = Math.round(g1 + (g2 - g1) * frac)
  const b = Math.round(b1 + (b2 - b1) * frac)

  return `rgb(${r}, ${g}, ${b})`
}

export default function Ascii3DStarfield({
  variant = 'about',
  opacity = 0.85,
  numStars = 160,
}) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId
    let isMounted = true
    let width = container.clientWidth || window.innerWidth
    let height = container.clientHeight || window.innerHeight

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    // Generate balanced, randomized stars with distinct behaviors
    const createDistributedStars = () => {
      const list = []
      const gridX = 16
      const gridY = 10
      const behaviors = ['shape', 'color', 'both', 'static']

      for (let gy = 0; gy < gridY; gy++) {
        for (let gx = 0; gx < gridX; gx++) {
          if (list.length >= numStars) break
          const u = (gx + 0.15 + Math.random() * 0.7) / gridX
          const v = (gy + 0.15 + Math.random() * 0.7) / gridY
          const depth = 0.6 + Math.random() * 1.4
          const baseChar = BASE_CHARS[Math.floor(Math.random() * BASE_CHARS.length)]

          const behavior = behaviors[Math.floor(Math.random() * behaviors.length)]
          const palette = COLOR_PALETTES[Math.floor(Math.random() * COLOR_PALETTES.length)]

          // Ultra-slow celestial breathing: ~35–60 seconds per cycle (0.06 to 0.16 rad/sec)
          const glistenSpeed = 0.06 + Math.random() * 0.10
          const glistenPhase = Math.random() * Math.PI * 2

          list.push({
            baseU: u,
            baseV: v,
            currentV: v,
            baseChar,
            depth,
            behavior,
            palette,
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
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
    }

    window.addEventListener('resize', handleResize, { passive: true })

    // Exact outskirts boundary check
    const isExcluded = (normX, normY) => {
      const aspect = (width / height) || 1.77

      if (variant === 'about') {
        // Earth outskirts silhouette at R = 0.255
        const dx = (normX - 0.95) * aspect
        const dy = normY - 0.50
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 0.255) return true
      }

      if (variant === 'services') {
        // Moon outskirts silhouette at R = 0.185
        const dx = (normX - 0.04) * aspect
        const dy = normY - 0.05
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 0.185) return true
      }

      return false
    }

    // Animation Render Loop
    const renderLoop = (time) => {
      if (!isMounted) return

      const dt = Math.min(0.05, (time - lastTime) / 1000)
      lastTime = time

      // Smooth velocity decay
      scrollVelocity *= 0.88
      if (Math.abs(scrollVelocity) < 0.001) scrollVelocity = 0

      const isScrolling = Math.abs(scrollVelocity) > 0.05
      const scrollDir = scrollVelocity > 0 ? 1 : -1

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()
      ctx.scale(dpr, dpr)

      const fontSize = 12
      ctx.font = `600 ${fontSize}px "SF Mono", "Menlo", "Monaco", "Cascadia Code", monospace`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]

        if (isScrolling) {
          // Hyper-speed vertical travel with depth parallax
          star.currentV -= scrollVelocity * dt * 0.45 * star.depth
          if (star.currentV < 0) star.currentV += 1
          if (star.currentV > 1) star.currentV -= 1
        } else {
          // Stationary resting return
          star.currentV += (star.baseV - star.currentV) * 0.15
        }

        const normX = star.baseU
        const normY = star.currentV

        if (!isExcluded(normX, normY)) {
          const posX = normX * width
          const posY = normY * height

          // Calculate ultra-slow glisten phase [0..1]
          const phase = (time * 0.001 * star.glistenSpeed + star.glistenPhase) % (Math.PI * 2)
          const norm = (Math.sin(phase) + 1) / 2

          let char = star.baseChar
          let color = '#000000'

          if (!isScrolling) {
            // Apply randomized behavior with smooth continuous interpolation
            if (star.behavior === 'shape' || star.behavior === 'both') {
              const shapeIdx = Math.min(GLISTEN_SHAPES.length - 1, Math.floor(norm * GLISTEN_SHAPES.length))
              char = GLISTEN_SHAPES[shapeIdx]
            }

            if (star.behavior === 'color' || star.behavior === 'both') {
              color = interpolatePalette(star.palette, norm)
            }
          }

          // Draw main star glyph
          ctx.fillStyle = color
          ctx.fillText(char, posX, posY)

          // Vertical velocity light streak trails during scroll
          if (isScrolling) {
            const streakLength = Math.min(5, Math.floor(Math.abs(scrollVelocity) * 2.2 * star.depth))
            const stepY = 11 * scrollDir

            for (let s = 1; s <= streakLength; s++) {
              const trailY = posY + s * stepY
              const trailNormY = trailY / height
              if (!isExcluded(normX, trailNormY) && trailY >= 0 && trailY <= height) {
                const trailChar = s === 1 ? '|' : s <= 3 ? ':' : '.'
                ctx.fillStyle = 'rgba(0, 0, 0, 0.45)'
                ctx.fillText(trailChar, posX, trailY)
              }
            }
          }
        }
      }

      ctx.restore()
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
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
}
