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
 * - Universal desktop support across all pages & sections (Hero, About, Services, Expertise, Pricing, Testimonials, Blog, CTA, Team, Products)
 */

const BASE_CHARS = ['*', '+', '.', "'", 'o', '*', '+', '.', "'", '.']
const GLISTEN_SHAPES = ['.', "'", '+', '*', '+', "'", '.']

// Light theme palettes (dark greys, silvers, slate, charcoal against light background)
const LIGHT_PALETTES = [
  ['#000000', '#334155', '#64748b', '#94a3b8', '#64748b', '#334155', '#000000'],
  ['#000000', '#4b5563', '#9ca3af', '#cbd5e1', '#9ca3af', '#4b5563', '#000000'],
  ['#000000', '#18181b', '#27272a', '#52525b', '#27272a', '#18181b', '#000000'],
  ['#000000', '#1e293b', '#475569', '#64748b', '#475569', '#1e293b', '#000000'],
  ['#000000', '#262626', '#525252', '#737373', '#525252', '#262626', '#000000'],
]

// Dark theme palettes (gleaming silver, platinum, slate, and white against dark background)
const DARK_PALETTES = [
  ['#475569', '#94a3b8', '#cbd5e1', '#f8fafc', '#ffffff', '#cbd5e1', '#475569'],
  ['#52525b', '#a1a1aa', '#e4e4e7', '#f4f4f5', '#ffffff', '#e4e4e7', '#52525b'],
  ['#334155', '#64748b', '#cbd5e1', '#f1f5f9', '#ffffff', '#f1f5f9', '#64748b'],
  ['#3f3f46', '#71717a', '#a1a1aa', '#d4d4d8', '#ffffff', '#d4d4d8', '#3f3f46'],
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
  theme = 'auto', // 'auto', 'light', 'dark'
  opacity = 0.85,
  numStars = 160,
}) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  const isDark =
    theme === 'dark' || (theme === 'auto' && (variant === 'hero' || variant === 'cta'))

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

    const selectedPalettes = isDark ? DARK_PALETTES : LIGHT_PALETTES

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
          const palette = selectedPalettes[Math.floor(Math.random() * selectedPalettes.length)]

          // Ultra-slow celestial breathing: ~35–60 seconds per cycle (0.06 to 0.16 rad/sec)
          const glistenSpeed = 0.06 + Math.random() * 0.10
          const glistenPhase = Math.random() * Math.PI * 2

          list.push({
            origU: u,
            origV: v,
            depth,
            baseChar,
            behavior,
            palette,
            glistenSpeed,
            glistenPhase,
            sizeOffset: (Math.random() - 0.5) * 2,
          })
        }
      }
      return list
    }

    const stars = createDistributedStars()

    let lastScrollY = window.scrollY
    let scrollVelocity = 0
    let lastTime = performance.now()

    const updateStarFonts = () => {
      const resScale = Math.max(0.6, Math.min(2.2, width / 1920))
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]
        const baseFontSize = (9.5 + (star.depth - 1) * 2.2 + star.sizeOffset) * resScale
        const fontSize = Math.max(6, Math.min(22, Math.round(baseFontSize)))
        star.fontStr = `${fontSize}px "Space Mono", monospace, monospace`
      }
    }
    updateStarFonts()

    const handleScroll = () => {
      const currentY = window.scrollY
      const deltaY = currentY - lastScrollY
      lastScrollY = currentY
      scrollVelocity += deltaY * 0.05
      startAnimation()
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
      updateStarFonts()
      startAnimation()
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
        // Moon region: ensure the Moon's entire background is purely clean white
        if (normX < 0.28 && normY < 0.35) return true
        const dx = (normX - 0.04) * aspect
        const dy = normY - 0.05
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 0.28) return true
      }

      return false
    }

    // Animation Render Loop
    const renderLoop = (time) => {
      if (!isMounted) return

      if (document.hidden) {
        animId = null
        return
      }

      const dt = Math.min(0.05, (time - lastTime) / 1000)
      lastTime = time

      // Smooth velocity decay
      scrollVelocity *= 0.88
      if (Math.abs(scrollVelocity) < 0.001) scrollVelocity = 0

      const isScrolling = Math.abs(scrollVelocity) > 0.05
      const scrollDir = Math.sign(scrollVelocity)

      ctx.save()
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, width, height)

      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      const sec = time / 1000
      let activeFont = ''

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]
        const normX = star.origU
        const normY = star.origV

        // Skip rendering if inside planet exclusions
        if (isExcluded(normX, normY)) continue

        const posX = normX * width
        const posY = normY * height

        if (activeFont !== star.fontStr) {
          activeFont = star.fontStr
          ctx.font = activeFont
        }

        if (star.behavior === 'static') {
          // Stationary solid star
          ctx.fillStyle = star.palette[Math.floor(star.palette.length / 2)]
          ctx.fillText(star.baseChar, posX, posY)
        } else {
          // Continuous ultra-slow sine breathing (0 to 1)
          const rawWave = Math.sin(sec * star.glistenSpeed + star.glistenPhase)
          const norm = (rawWave + 1) / 2

          let char = star.baseChar
          let color = star.palette[0]

          // Apply randomized behavior with smooth continuous interpolation
          if (star.behavior === 'shape' || star.behavior === 'both') {
            const shapeIdx = Math.min(GLISTEN_SHAPES.length - 1, Math.floor(norm * GLISTEN_SHAPES.length))
            char = GLISTEN_SHAPES[shapeIdx]
          }

          if (star.behavior === 'color' || star.behavior === 'both') {
            color = interpolatePalette(star.palette, norm)
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
                ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.45)' : 'rgba(0, 0, 0, 0.45)'
                ctx.fillText(trailChar, posX, trailY)
              }
            }
          }
        }
      }

      ctx.restore()
      animId = requestAnimationFrame(renderLoop)
    }

    const startAnimation = () => {
      if (!animId && isMounted && !document.hidden) {
        lastTime = performance.now()
        animId = requestAnimationFrame(renderLoop)
      }
    }

    const stopAnimation = () => {
      if (animId) {
        cancelAnimationFrame(animId)
        animId = null
      }
    }

    // Start immediately on mount
    startAnimation()

    // Page Visibility API
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation()
      } else {
        startAnimation()
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      isMounted = false
      stopAnimation()
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [variant, numStars, isDark])

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

