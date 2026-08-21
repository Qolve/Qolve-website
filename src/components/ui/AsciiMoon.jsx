import { useEffect, useRef, useState } from 'react'

// Accurate 60x30 Lunar Surface Matrix (Nearside & Farside Maria/Basalt Plains)
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
  "          11111111111111111111111111111111111               ", // 35°S - South Maria border
  "               2222           222222                        ", // 43°S - Tycho Crater Ray System
  "              222222         22222222                       ", // 55°S - Southern Cratered Highlands
  "                                                            ", // 70°S
  "                                                            "  // 85°S - South Pole
]

const TERMINAL_RAMP = " .:-=+*#%@"

export default function AsciiMoon({
  size = 32,
  speed = 0.003,
  color = '#000000',
  fontSize = 'clamp(6.5px, 0.70vw, 14px)',
  lineHeight = 'clamp(6px, 0.65vw, 13px)',
  style = {},
}) {
  const [asciiFrame, setAsciiFrame] = useState('')
  const angleRef = useRef(0)
  const reqRef = useRef(null)

  useEffect(() => {
    const width = Math.round(size * 2.05)
    const height = size
    const mapH = LUNAR_MAP.length
    const mapW = LUNAR_MAP[0].length

    const render = () => {
      angleRef.current += speed
      const theta = angleRef.current
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

            const light = (-0.45 * nx + 0.8 * nz - 0.3 * ny + 1.0) / 2.0
            const clampedLight = Math.max(0, Math.min(1, light))

            if (feature === '1') {
              // Lunar Maria: darker basalt
              const charIdx = Math.floor(clampedLight * 4)
              line += ['.', ':', '-', '='][charIdx] || ':'
            } else if (feature === '2') {
              // Tycho crater high-albedo rays
              line += '@'
            } else {
              // Highlands
              const charIdx = Math.floor(clampedLight * (TERMINAL_RAMP.length - 1))
              line += TERMINAL_RAMP[charIdx] || '#'
            }
          } else {
            line += ' '
          }
        }
        frame += line + '\n'
      }

      setAsciiFrame(frame)
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
      {asciiFrame}
    </pre>
  )
}
