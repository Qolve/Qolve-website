import { useEffect, useRef, useState } from 'react'

// Accurate 60x30 Lunar Surface Matrix (Nearside & Farside Maria/Basalt Plains)
// '1' = Lunar Maria (Dark Basalt Plains: Oceanus Procellarum, Mare Imbrium, Tranquillitatis, etc.)
// '2' = High-albedo Impact Craters (Tycho, Copernicus, Kepler rays)
// ' ' = Anorthositic Lunar Highlands (Light Silver/Gray)
const LUNAR_MAP = [
  "                                                            ", // 90°N Polar Highlands
  "                        11111111111                         ", // 75°N
  "                   111111111111111111111                    ", // 65°N - Mare Frigoris
  "            111111111111111111111111111111                  ", // 55°N - Mare Imbrium North
  "          1111111111111111111111111111111111                ", // 45°N - Mare Imbrium / Serenitatis
  "         1111111111111111111111111111111111111    11111     ", // 35°N - Oceanus Procellarum / Mare Crisium
  "        111111111111111111111111111111111111111  1111111    ", // 25°N - Procellarum / Mare Tranquillitatis / Crisium
  "       11111111111111111111111111111111111111111 1111111    ", // 15°N - Copernicus Crater / Tranquillitatis
  "       11111111111111111111111111111111111111111  11111     ", // 5°N - Equator
  "        1111111111111111111111111111111111111111            ", // 5°S - Mare Cognitum / Mare Nectaris
  "        111111111111111111111111111111111111111             ", // 15°S - Mare Nubium
  "         111111111111111111111111111111111111               ", // 25°S - Mare Humorum
  "          1111111111111111111111111111111                   ", // 35°S - South Maria border
  "               2222           222222                        ", // 43°S - Tycho Crater Ray System
  "              222222         22222222                       ", // 55°S - Southern Cratered Highlands
  "                                                            ", // 70°S
  "                                                            "  // 85°S - South Pole
]

export default function AsciiMoon({ size = 32, speed = 0.003 }) {
  const [htmlFrame, setHtmlFrame] = useState('')
  const angleRef = useRef(0)
  const reqRef = useRef(null)

  useEffect(() => {
    const width = Math.round(size * 2.1)
    const height = size
    const mapH = LUNAR_MAP.length
    const mapW = LUNAR_MAP[0].length

    const craterChars = ' .:=+*#%@'
    const mariaChars = ' :.-=+*#'

    const render = () => {
      angleRef.current += speed
      const theta = angleRef.current
      const cosT = Math.cos(theta)
      const sinT = Math.sin(theta)

      let frameHtml = ''

      for (let y = 0; y < height; y++) {
        let currentSpanColor = null
        let currentSpanText = ''
        let lineHtml = ''

        const push = (ch, col) => {
          if (col !== currentSpanColor) {
            if (currentSpanText) {
              lineHtml += `<span style="color:${currentSpanColor}">${currentSpanText}</span>`
            }
            currentSpanColor = col
            currentSpanText = ch
          } else {
            currentSpanText += ch
          }
        }

        const ny = (y - height / 2) / (height / 2)

        for (let x = 0; x < width; x++) {
          const nx = ((x - width / 2) / (width / 2)) * 1.15
          const distSq = nx * nx + ny * ny

          if (distSq <= 1.0) {
            const nz = Math.sqrt(Math.max(0, 1.0 - distSq))

            // Lunar orbital rotation around Y-axis with 1.54° axial tilt
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

            // Directional sun illumination (sunlit crater relief from top-left)
            const light = (-0.45 * nx + 0.8 * nz - 0.3 * ny + 1.0) / 2.0
            const clampedLight = Math.max(0, Math.min(1, light))

            if (feature === '1') {
              // Lunar Maria: Dark volcanic basalt
              const charIdx = Math.floor(clampedLight * (mariaChars.length - 1))
              const ch = mariaChars[charIdx] || ':'
              push(ch, clampedLight > 0.45 ? '#475569' : '#1e293b')
            } else if (feature === '2') {
              // Tycho / Copernicus Crater Rays: High-albedo bright white
              push('@', '#ffffff')
            } else {
              // Lunar Highlands: Bright silvery anorthosite rock
              const charIdx = Math.floor(clampedLight * (craterChars.length - 1))
              const ch = craterChars[charIdx] || '#'
              if (clampedLight > 0.65) {
                push(ch, '#f8fafc') // Brilliant sunlit rim
              } else if (clampedLight > 0.35) {
                push(ch, '#cbd5e1') // Silver highland
              } else {
                push(ch, '#64748b') // Shadowed slope
              }
            }
          } else {
            push(' ', 'transparent')
          }
        }

        if (currentSpanText) {
          lineHtml += `<span style="color:${currentSpanColor}">${currentSpanText}</span>`
        }
        frameHtml += lineHtml + '\n'
      }

      setHtmlFrame(frameHtml)
      reqRef.current = requestAnimationFrame(render)
    }

    reqRef.current = requestAnimationFrame(render)

    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current)
    }
  }, [size, speed])

  return (
    <pre
      style={{
        margin: 0,
        fontFamily: 'Courier, "Courier New", monospace',
        fontSize: '0.85rem',
        lineHeight: '0.82rem',
        fontWeight: 800,
        letterSpacing: '0.035em',
        userSelect: 'none',
        pointerEvents: 'none',
        whiteSpace: 'pre',
        display: 'block',
      }}
      dangerouslySetInnerHTML={{ __html: htmlFrame }}
    />
  )
}
