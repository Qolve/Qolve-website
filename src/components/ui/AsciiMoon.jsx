import { useEffect, useRef, useState } from 'react'

// Clean, expressive terminal density ramp
const TERMINAL_RAMP = "  ..:--==++**##%@"

// Major Lunar Impact Craters with Rims, Depths, and Ejecta Ray Systems
const LUNAR_CRATERS = [
  { lat: -0.72, lon: -0.22, r: 0.18, depth: -0.25, rim: 0.35, rays: true }, // Tycho (South - Massive Ray System)
  { lat: 0.18, lon: -0.35, r: 0.17, depth: -0.22, rim: 0.30, rays: true },  // Copernicus (Center-West)
  { lat: 0.12, lon: -0.65, r: 0.11, depth: -0.16, rim: 0.22, rays: true },  // Kepler (West of Copernicus)
  { lat: 0.40, lon: -0.80, r: 0.10, depth: -0.12, rim: 0.35, rays: false }, // Aristarchus (Brightest spot)
  { lat: 0.85, lon: -0.15, r: 0.13, depth: -0.25, rim: 0.24, rays: false }, // Plato (North - Dark basalt floor)
  { lat: 0.50, lon: -0.07, r: 0.12, depth: -0.18, rim: 0.20, rays: false }, // Archimedes (Mare Imbrium)
  { lat: -0.88, lon: -0.25, r: 0.20, depth: -0.18, rim: 0.22, rays: false },// Clavius (Deep South crater field)
  { lat: -0.30, lon: -0.70, r: 0.14, depth: -0.16, rim: 0.22, rays: false },// Gassendi (Mare Humorum border)
  { lat: -0.15, lon: 0.85, r: 0.15, depth: -0.18, rim: 0.25, rays: false }, // Langrenus (East limb)
  { lat: -0.45, lon: 0.90, r: 0.16, depth: -0.20, rim: 0.24, rays: false }, // Petavius (South-East limb)
  { lat: -0.20, lon: 0.45, r: 0.14, depth: -0.18, rim: 0.25, rays: false }, // Theophilus (Central East)
  { lat: 0.55, lon: 0.50, r: 0.13, depth: -0.15, rim: 0.20, rays: false },  // Posidonius (Serenitatis edge)
]

// Iconic Lunar Maria (Dark volcanic basalt plains)
const LUNAR_MARIA = [
  { lat: 0.20, lon: -0.75, rX: 0.55, rY: 0.60, dark: 0.30 }, // Oceanus Procellarum (Ocean of Storms)
  { lat: 0.55, lon: -0.30, rX: 0.38, rY: 0.35, dark: 0.34 }, // Mare Imbrium (Sea of Rains)
  { lat: 0.45, lon: 0.30, rX: 0.30, rY: 0.30, dark: 0.30 },  // Mare Serenitatis (Sea of Serenity)
  { lat: 0.15, lon: 0.50, rX: 0.35, rY: 0.32, dark: 0.32 },  // Mare Tranquillitatis (Sea of Tranquility)
  { lat: 0.30, lon: 0.95, rX: 0.22, rY: 0.20, dark: 0.36 },  // Mare Crisium (Sea of Crises)
  { lat: -0.35, lon: -0.25, rX: 0.32, rY: 0.30, dark: 0.28 }, // Mare Nubium (Sea of Clouds)
  { lat: -0.40, lon: -0.65, rX: 0.20, rY: 0.20, dark: 0.30 }, // Mare Humorum (Sea of Moisture)
  { lat: -0.25, lon: 0.55, rX: 0.22, rY: 0.22, dark: 0.28 }, // Mare Nectaris (Sea of Nectar)
  { lat: 0.88, lon: 0.00, rX: 0.80, rY: 0.12, dark: 0.25 },  // Mare Frigoris (Northern strip)
]

function computeMoonFrame(size, theta) {
  const width = Math.round(size * 2.05)
  const height = size

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

        // 1. Calculate Lunar Maria Darkening
        let mariaVal = 0
        for (let m = 0; m < LUNAR_MARIA.length; m++) {
          const mObj = LUNAR_MARIA[m]
          const dLat = (lat - mObj.lat) / mObj.rY
          const dLon = (lon - mObj.lon) / mObj.rX
          const distM = dLat * dLat + dLon * dLon
          if (distM < 1.0) {
            const factor = Math.cos(distM * (Math.PI / 2))
            mariaVal = Math.max(mariaVal, factor * mObj.dark)
          }
        }

        // 2. Calculate Craters and Ejecta Ray Systems
        let craterVal = 0
        for (let c = 0; c < LUNAR_CRATERS.length; c++) {
          const cObj = LUNAR_CRATERS[c]
          const distC = Math.hypot(lat - cObj.lat, lon - cObj.lon) / cObj.r
          if (distC < 1.0) {
            if (distC < 0.60) {
              craterVal += cObj.depth * (1 - distC / 0.60)
            } else {
              const rimFactor = Math.sin(((distC - 0.60) / 0.40) * Math.PI)
              craterVal += cObj.rim * rimFactor
            }
          } else if (cObj.rays && distC < 3.5) {
            const angle = Math.atan2(lat - cObj.lat, lon - cObj.lon)
            const rayNoise = Math.sin(angle * 12) * Math.cos(angle * 8)
            if (rayNoise > 0.40) {
              const fade = (1 - (distC - 1.0) / 2.5)
              craterVal += 0.16 * fade * (rayNoise - 0.40)
            }
          }
        }

        // 3. Subtle micro-crater topography noise
        const micro = (Math.sin(lat * 8 + lon * 7) * Math.cos(lat * 7 - lon * 8)) * 0.04

        // 4. 3D Directional Sunlight
        const light = (-0.35 * nx + 0.85 * nz - 0.25 * ny + 1.0) / 2.0 - mariaVal + craterVal + micro
        const clampedLight = Math.max(0, Math.min(1, light))

        const charIdx = Math.floor(clampedLight * (TERMINAL_RAMP.length - 1))
        line += TERMINAL_RAMP[charIdx] || " "
      } else {
        line += ' '
      }
    }
    frame += line + '\n'
  }

  return frame
}

// 180 Precomputed High-Precision Lunar Rotational Frames (2.0° per step)
const NUM_MOON_FRAMES = 180
const moonFramesCache = new Map()

function getMoonFrames(size) {
  if (moonFramesCache.has(size)) return moonFramesCache.get(size)
  const frames = []
  for (let i = 0; i < NUM_MOON_FRAMES; i++) {
    const theta = (i / NUM_MOON_FRAMES) * Math.PI * 2
    frames.push(computeMoonFrame(size, theta))
  }
  moonFramesCache.set(size, frames)
  return frames
}

export default function AsciiMoon({
  size = 38,
  speed = 0.003,
  color = '#000000',
  fontSize = '0.58vw',
  lineHeight = '0.52vw',
  style = {},
}) {
  const frames = getMoonFrames(size)
  const preRef = useRef(null)
  const progressRef = useRef(0)
  const isIntersectingRef = useRef(true)

  useEffect(() => {
    let animId = null
    let isMounted = true
    let lastTime = performance.now()
    let currentIdx = 0
    const frameAdvanceRate = (speed / (Math.PI * 2)) * NUM_MOON_FRAMES

    if (preRef.current) {
      preRef.current.textContent = frames[0]
    }

    const render = (time) => {
      if (!isMounted) return

      if (isIntersectingRef.current && !document.hidden) {
        const dt = Math.min(0.05, (time - lastTime) / 1000)
        lastTime = time

        progressRef.current = (progressRef.current + frameAdvanceRate * (dt * 60)) % NUM_MOON_FRAMES
        const nextIdx = Math.floor(progressRef.current)
        if (nextIdx !== currentIdx) {
          currentIdx = nextIdx
          if (preRef.current) {
            preRef.current.textContent = frames[nextIdx]
          }
        }
      } else {
        lastTime = time
      }

      animId = requestAnimationFrame(render)
    }

    animId = requestAnimationFrame(render)

    // Viewport intersection observer: pauses when off-screen
    let observer = null
    if (preRef.current && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          isIntersectingRef.current = entries[0].isIntersecting
        },
        { threshold: 0, rootMargin: '300px 0px 300px 0px' }
      )
      observer.observe(preRef.current)
    }

    return () => {
      isMounted = false
      if (animId) cancelAnimationFrame(animId)
      if (observer) observer.disconnect()
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
        ...style,
      }}
    >
      {frames[0]}
    </pre>
  )
}

