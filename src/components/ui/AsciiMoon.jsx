import { useEffect, useRef } from 'react'

// High-Detail Lunar Surface Map (Maria '1', Bright Crater Rims '2', Crater Centers '3', Rugged Highlands '4')
const LUNAR_MAP = [
  "   444444444444444444444444444444444444444444444444444444   ", // 90°N North Polar Highlands
  "  44444444444444444444444444444444444444444444444444444444  ", // 80°N
  " 444444444444444444444444444444444444444444444444444444444 ", // 75°N
  "4444444444444441111111111111111444444444444444444444444444", // 65°N - Mare Frigoris & Plato Crater
  "44444444111111111111111111111111111111444444444444444444444", // 55°N - Mare Imbrium North & Sinus Iridum
  "44444411111111111111111111111111111111111444423244444444444", // 45°N - Archimedes / Aristillus
  "44444111111111111111111111111111111111111144444444444444444", // 35°N - Mare Serenitatis / Oceanus Procellarum
  "44441111111111111111111111111111111111111111444411111144444", // 25°N - Mare Crisium & Mare Tranquillitatis
  "44441111111111111111111111111111111111111111144111111114444", // 15°N - Copernicus Crater System (232)
  "44441111111111111232111111111111111111111111144111111114444", // 5°N  - Copernicus / Kepler Crater Rims
  "44444111111111111111111111111111111111111111144411111144444", // 0°   - Equator & Sinus Medii
  "44444111111111111111111111111111111111111111444444444444444", // 5°S  - Mare Cognitum
  "44444411111111111111111111111111111111111144444444444444444", // 15°S - Mare Nubium & Mare Nectaris
  "44444441111111111111111111111111111111144444444444444444444", // 25°S - Mare Humorum & Bullialdus
  "44444444444444444444444444444444444444444444444444444444444", // 35°S - Deslandres & Pitatus
  "44444444444444444222332224444444444444444444444444444444444", // 43°S - Tycho Crater & Massive Ray System
  "44444444444444442222222222444444444444444444444444444444444", // 55°S - Clavius Crater Basin
  "44444444444444444444444444444444444444444444444444444444444", // 70°S - Southern Highlands
  " 444444444444444444444444444444444444444444444444444444444 ", // 80°S
  "  44444444444444444444444444444444444444444444444444444444  "  // 90°S South Pole
]

const TERMINAL_RAMP = " .:-=+*#%@"

function computeMoonFrame(size, theta) {
  const width = Math.round(size * 2.05)
  const height = size
  const mapH = LUNAR_MAP.length
  const mapW = LUNAR_MAP[0].length

  const cosT = Math.cos(theta)
  const sinT = Math.sin(theta)

  let frame = ''

  for (let y = 0; y < height; y++) {
    let line = ''
    const ny = (y - height / 2) / (height / 2)

    for (let x = 0; x < width; x++) {
      const nx = ((x - width / 2) / (width / 2)) * 1.18
      const distSq = nx * nx + ny * ny

      if (distSq <= 1.0) {
        const nz = Math.sqrt(Math.max(0, 1.0 - distSq))

        // Lunar orbital rotation around Y-axis
        const rx = nx * cosT + nz * sinT
        const ry = ny
        const rz = -nx * sinT + nz * cosT

        const lat = Math.asin(Math.max(-1, Math.min(1, ry)))
        const lon = Math.atan2(rx, rz)

        const u = (lon + Math.PI) / (2 * Math.PI)
        const v = (Math.PI / 2 - lat) / Math.PI

        const mapX = Math.min(mapW - 1, Math.max(0, Math.floor(u * mapW)))
        const mapY = Math.min(mapH - 1, Math.max(0, Math.floor(v * mapH)))

        const feature = LUNAR_MAP[mapY]?.[mapX]

        // Pseudo-procedural micro-crater noise based on spherical coordinates
        const microCrater = Math.sin(lat * 18 + lon * 14) * Math.cos(lat * 12 - lon * 16)
        const craterPerturb = microCrater * 0.18

        // 3D Directional Sunlight with Crater Rim highlights
        const light = (-0.45 * nx + 0.8 * nz - 0.3 * ny + 1.0) / 2.0 + craterPerturb
        const clampedLight = Math.max(0, Math.min(1, light))

        if (feature === '2') {
          // Bright impact crater rim (Tycho / Copernicus ejecta rays)
          line += ['#', '%', '@', '*'][Math.floor(clampedLight * 3.99)]
        } else if (feature === '3') {
          // Deep crater central shadow/hollow
          line += ['.', ':', '-'][Math.floor(clampedLight * 2.99)] || '.'
        } else if (feature === '1') {
          // Dark Basaltic Lunar Maria (Sea of Tranquility / Ocean of Storms)
          const charIdx = Math.floor(clampedLight * 5)
          line += ['.', ':', '-', '=', '+'][charIdx] || ':'
        } else {
          // Rugged Highlands with dense crater topography
          const charIdx = Math.floor(clampedLight * (TERMINAL_RAMP.length - 1))
          line += TERMINAL_RAMP[charIdx] || '#'
        }
      } else {
        line += ' '
      }
    }
    frame += line + '\n'
  }

  return frame
}

export default function AsciiMoon({
  size = 38,
  speed = 0.003,
  color = '#000000',
  fontSize = '0.58vw',
  lineHeight = '0.52vw',
  style = {},
}) {
  const preRef = useRef(null)
  const angleRef = useRef(0)
  const isVisibleRef = useRef(true)

  useEffect(() => {
    let animId = null
    let lastTime = performance.now()
    const targetInterval = 1000 / 30 // Smooth, energy-efficient 30 FPS

    // Initial instant frame render to avoid any blank flicker
    if (preRef.current && !preRef.current.textContent) {
      preRef.current.textContent = computeMoonFrame(size, angleRef.current)
    }

    const render = (now) => {
      if (!isVisibleRef.current || document.hidden) {
        animId = null
        return
      }

      const elapsed = now - lastTime
      if (elapsed >= targetInterval) {
        // Delta-compensated planetary rotation
        const deltaFactor = Math.min(3.0, elapsed / 16.667)
        angleRef.current += speed * deltaFactor
        lastTime = now - (elapsed % targetInterval)

        const frame = computeMoonFrame(size, angleRef.current)
        if (preRef.current) {
          preRef.current.textContent = frame
        }
      }

      animId = requestAnimationFrame(render)
    }

    const startAnimation = () => {
      if (!animId && isVisibleRef.current && !document.hidden) {
        lastTime = performance.now()
        animId = requestAnimationFrame(render)
      }
    }

    const stopAnimation = () => {
      if (animId) {
        cancelAnimationFrame(animId)
        animId = null
      }
    }

    // IntersectionObserver: automatically halt RAF when off-screen
    let observer = null
    if (preRef.current && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]
          isVisibleRef.current = entry.isIntersecting
          if (entry.isIntersecting) {
            startAnimation()
          } else {
            stopAnimation()
          }
        },
        { threshold: 0.01, rootMargin: '100px 0px 100px 0px' }
      )
      observer.observe(preRef.current)
    } else {
      startAnimation()
    }

    // Page Visibility API: pause when tab is minimized or in background
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation()
      } else if (isVisibleRef.current) {
        startAnimation()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      stopAnimation()
      if (observer) observer.disconnect()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [size, speed])

  return (
    <pre
      ref={preRef}
      style={{
        margin: 0,
        fontFamily: '"SF Mono", "Menlo", "Monaco", "Cascadia Code", "Courier New", monospace',
        fontSize,
        lineHeight,
        fontWeight: 700,
        color: color,
        letterSpacing: '0.04em',
        userSelect: 'none',
        pointerEvents: 'none',
        WebkitFontSmoothing: 'none',
        MozOsxFontSmoothing: 'unset',
        textShadow: 'none',
        whiteSpace: 'pre',
        display: 'block',
        contain: 'paint layout size',
        willChange: 'contents',
        ...style,
      }}
    />
  )
}
