import { useEffect, useRef, useState } from 'react'

// Accurate 72x36 Equirectangular Real Earth Landmass Matrix
// Longitude: -180° to +180° (Columns 0 to 71) | Latitude: +90° to -90° (Rows 0 to 35)
const WORLD_MAP = [
  "                                                                        ", // 90°N - Arctic
  "                          11111111                                      ", // 85°N - Greenland N
  "               111111    111111111111        111111111111111            ", // 80°N - Ellesmere / Greenland / Severnaya
  "        1111111111111111 111111111111        1111111111111111111111     ", // 75°N - Nunavut / Greenland / N. Siberia
  "    111111111111111111111 11111111           1111111111111111111111111  ", // 70°N - Alaska / N. Canada / Scandinavia / Siberia
  "   1111111111111111111111  11111      11111111111111111111111111111111  ", // 65°N - Alaska / Canada / Iceland / Norway / Russia
  "   11111111111111111111111            11111111111111111111111111111111  ", // 60°N - Canada / Baltic / Russia / Kamchatka
  "   1111111111111111111111         1   111111111111111111111111111111111 ", // 55°N - Canada / UK / Central Europe / Russia / Sakhalin
  "    11111111111111111111         111 1111111111111111111111111111111111 ", // 50°N - USA / UK / France / Germany / Kazakhstan / Russia
  "    11111111111111111111          111111111111111111111111111111111111  ", // 45°N - USA / Mediterranean / Black Sea / Mongolia / N. China / Japan
  "     1111111111111111111           11111111111111111111111111111111111  ", // 40°N - USA / Spain / Italy / Turkey / China / Japan / Korea
  "     111111111111111111            1111111111111111111111111111111111   ", // 35°N - S. USA / Mediterranean / Iran / China / Japan
  "      1111111111111111            111111111111111111111111111111111     ", // 30°N - Mexico / Florida / N. Africa / Middle East / Tibet / E. China
  "       11111111111111            11111111111111111111111111111111      ", // 25°N - Mexico / Cuba / Sahara / Arabia / India / Taiwan
  "        111111111111             11111111111111111111111111111111      ", // 20°N - Mexico / Caribbean / Mauritania / Sudan / India / Myanmar / Philippines
  "         111111111               11111111111111111111111111111111      ", // 15°N - C. America / Sahel / Ethiopia / S. India / Thailand / Philippines
  "          1111111               11111111111111111111111111111111       ", // 10°N - Costa Rica / Nigeria / Somalia / Sri Lanka / Vietnam
  "           111111111111        1111111111111111111111111111111        ", // 5°N - Colombia / Venezuela / Guinea / Congo / Malaysia / Indonesia
  "           11111111111111111   11111111111111111111111111111111       ", // 0° Equator - Ecuador / Amazon / Gabon / Kenya / Sumatra / Borneo
  "            111111111111111111 111111111111111111111111111111111      ", // 5°S - Peru / Brazil / Angola / Tanzania / Java / New Guinea
  "             111111111111111111 1111111111111111111111111111111       ", // 10°S - Peru / Brazil / Angola / Mozambique / Indonesia / N. Australia
  "             11111111111111111   111111111111111111111111111111       ", // 15°S - Bolivia / Brazil / Namibia / Madagascar / N. Australia
  "              111111111111111     1111111111111111111111111111        ", // 20°S - Paraguay / Brazil / Botswana / Madagascar / C. Australia
  "              11111111111111       11111111111111111111111111         ", // 25°S - Chile / Argentina / S. Africa / W. Australia / Queensland
  "               111111111111         11111111111111111111111           ", // 30°S - Chile / Argentina / South Africa / Sydney / S. Australia
  "               111111111111           11111111111111111111             ", // 35°S - Buenos Aires / Cape Town / Melbourne / Adelaide
  "                1111111111               111111111111111111            ", // 40°S - Patagonia / Tasmania / New Zealand
  "                11111111                   1111111111111111            ", // 45°S - S. Chile / S. Argentina / S. Island NZ
  "                 111111                                                ", // 50°S - Tierra del Fuego / Falklands
  "                  1111                                                 ", // 55°S - Cape Horn
  "                                                                        ", // 60°S - Drake Passage / Southern Ocean
  "         1111111111111111111111111111111111111111111111111111111111111 ", // 65°S - Antarctic Peninsula / Coast
  " 11111111111111111111111111111111111111111111111111111111111111111111111", // 70°S - Antarctica
  "111111111111111111111111111111111111111111111111111111111111111111111111", // 75°S - Antarctica Ice Sheet
  "111111111111111111111111111111111111111111111111111111111111111111111111", // 80°S - Antarctica Continent
  "111111111111111111111111111111111111111111111111111111111111111111111111"  // 85°S - South Pole
]

export default function AsciiEarth({ size = 44, speed = 0.005, color = '#d6fd70' }) {
  const [asciiFrame, setAsciiFrame] = useState('')
  const angleRef = useRef(0)
  const reqRef = useRef(null)

  useEffect(() => {
    const width = Math.round(size * 2.1)
    const height = size
    const mapH = WORLD_MAP.length
    const mapW = WORLD_MAP[0].length

    const landChars = ' .:=+*#%@'
    const axialTilt = 0.41 // 23.5 degrees in radians

    const render = () => {
      angleRef.current += speed
      const theta = angleRef.current
      const cosT = Math.cos(theta)
      const sinT = Math.sin(theta)
      const cosTilt = Math.cos(axialTilt)
      const sinTilt = Math.sin(axialTilt)

      let frame = ''

      for (let y = 0; y < height; y++) {
        let line = ''
        const ny = (y - height / 2) / (height / 2)

        for (let x = 0; x < width; x++) {
          const nx = ((x - width / 2) / (width / 2)) * 1.15
          const distSq = nx * nx + ny * ny

          if (distSq <= 1.0) {
            const nz = Math.sqrt(Math.max(0, 1.0 - distSq))

            // Apply Earth's 23.5° axial tilt then Y-axis planetary spin
            // 1. Tilt around Z
            const tx = nx * cosTilt - ny * sinTilt
            const ty = nx * sinTilt + ny * cosTilt
            const tz = nz

            // 2. Rotate around tilted planetary axis (spin)
            const rx = tx * cosT + tz * sinT
            const ry = ty
            const rz = -tx * sinT + tz * cosT

            // Calculate precise latitude [-π/2, π/2] and longitude [-π, π]
            const lat = Math.asin(Math.max(-1, Math.min(1, ry)))
            const lon = Math.atan2(rx, rz)

            // Convert to 1:1 Equirectangular texture map UV coordinates
            const u = (lon + Math.PI) / (2 * Math.PI)
            const v = (Math.PI / 2 - lat) / Math.PI

            const mapX = Math.min(mapW - 1, Math.max(0, Math.floor(u * mapW)))
            const mapY = Math.min(mapH - 1, Math.max(0, Math.floor(v * mapH)))

            const isLand = WORLD_MAP[mapY]?.[mapX] === '1'

            // Directional sun illumination from top-left front
            const light = (-0.35 * nx + 0.85 * nz - 0.3 * ny + 1.0) / 2.0
            const clampedLight = Math.max(0, Math.min(1, light))

            if (isLand) {
              const charIdx = Math.floor(clampedLight * (landChars.length - 1))
              line += landChars[charIdx] || '#'
            } else {
              // Ocean with subtle atmospheric graticule lines
              const isGrid = Math.abs(lat) % (Math.PI / 6) < 0.05 || Math.abs(lon) % (Math.PI / 3) < 0.05
              if (isGrid && clampedLight > 0.3) {
                line += '+'
              } else if (clampedLight > 0.5) {
                line += '.'
              } else {
                line += ' '
              }
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
        fontFamily: 'Courier, monospace',
        fontSize: '0.9rem',
        lineHeight: '0.88rem',
        color: color,
        letterSpacing: '0.03em',
        userSelect: 'none',
        pointerEvents: 'none',
        textShadow: color === '#d6fd70' ? '0 0 16px rgba(214, 253, 112, 0.7), 0 0 4px rgba(0,0,0,0.5)' : 'none',
        whiteSpace: 'pre',
        display: 'block',
      }}
    >
      {asciiFrame}
    </pre>
  )
}
