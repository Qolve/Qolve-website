import { useEffect, useRef, useState } from 'react'

// Minimalist, elegant terminal density ramp with soft gradations
const TERMINAL_RAMP = "  ..:--==++**##"

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

        // Soft, organic lunar maria (dark plains)
        const maria = Math.sin(lat * 2.5 + lon * 2.0) * 0.5 + Math.cos(lat * 3.2 - lon * 1.6) * 0.5
        const mariaDarkening = maria > 0.25 ? (maria - 0.25) * 0.22 : 0

        // Subtle circular crater depressions
        const dTycho = Math.hypot(lat - (-0.7), lon - (-0.3))
        const dCopernicus = Math.hypot(lat - (0.2), lon - (-0.6))
        const dMareCrisium = Math.hypot(lat - (0.3), lon - (0.6))
        const dPlato = Math.hypot(lat - (0.75), lon - (-0.1))

        let craterFeature = 0
        if (dTycho < 0.24) {
          craterFeature = dTycho < 0.09 ? -0.14 : 0.16
        } else if (dCopernicus < 0.2) {
          craterFeature = dCopernicus < 0.08 ? -0.12 : 0.14
        } else if (dMareCrisium < 0.22) {
          craterFeature = -0.18
        } else if (dPlato < 0.15) {
          craterFeature = -0.14
        }

        // Soft organic micro-texture (subtle, non-grainy)
        const softNoise = (Math.sin(lat * 5 + lon * 4) * Math.cos(lat * 4 - lon * 5)) * 0.04

        // 3D Directional Sunlight with soft curvature
        const light = (-0.35 * nx + 0.85 * nz - 0.25 * ny + 1.0) / 2.0 - mariaDarkening + craterFeature + softNoise
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
  const [frameIdx, setFrameIdx] = useState(0)
  const progressRef = useRef(0)

  useEffect(() => {
    let animId
    let lastTime = performance.now()
    let currentIdx = 0
    const frameAdvanceRate = (speed / (Math.PI * 2)) * NUM_MOON_FRAMES

    const render = (time) => {
      if (document.hidden) {
        animId = requestAnimationFrame(render)
        return
      }

      const dt = Math.min(0.05, (time - lastTime) / 1000)
      lastTime = time

      progressRef.current = (progressRef.current + frameAdvanceRate * (dt * 60)) % NUM_MOON_FRAMES
      const nextIdx = Math.floor(progressRef.current)
      if (nextIdx !== currentIdx) {
        currentIdx = nextIdx
        setFrameIdx(nextIdx)
      }

      animId = requestAnimationFrame(render)
    }

    animId = requestAnimationFrame(render)

    return () => {
      if (animId) cancelAnimationFrame(animId)
    }
  }, [size, speed])

  return (
    <pre
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
      {frames[frameIdx] || frames[0]}
    </pre>
  )
}

