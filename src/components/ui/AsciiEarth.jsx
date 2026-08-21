import { useEffect, useRef, useState } from 'react'

export default function AsciiEarth({ size = 44, speed = 0.006, color = '#d6fd70' }) {
  const [asciiFrame, setAsciiFrame] = useState('')
  const angleRef = useRef(0)
  const reqRef = useRef(null)

  useEffect(() => {
    const width = Math.round(size * 2.1)
    const height = size
    const landChars = ' .:=+*#%@'

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
          const nx = ((x - width / 2) / (width / 2)) * 1.15
          const distSq = nx * nx + ny * ny

          if (distSq <= 1.0) {
            const nz = Math.sqrt(Math.max(0, 1.0 - distSq))

            // Rotate around tilted planetary axis
            const rx = nx * cosT + nz * sinT
            const ry = ny * 0.93 - (nx * sinT - nz * cosT) * 0.18
            const rz = -nx * sinT + nz * cosT

            const lat = Math.asin(Math.max(-1, Math.min(1, ry)))
            const lon = Math.atan2(rx, rz)

            // Continent harmonic noise
            const continentNoise =
              Math.sin(3 * lon) * Math.cos(2 * lat) +
              0.5 * Math.sin(6 * lon + lat) +
              0.3 * Math.cos(9 * lon - 2 * lat) +
              0.2 * Math.sin(12 * lon + 3 * lat)

            // Directional light from upper-left
            const light = (-0.4 * nx + 0.8 * nz - 0.3 * ny + 1.0) / 2.0
            const clampedLight = Math.max(0, Math.min(1, light))

            if (continentNoise > 0.08) {
              const charIdx = Math.floor(clampedLight * (landChars.length - 1))
              line += landChars[charIdx] || '#'
            } else {
              // Ocean / lat-long grid coordinates
              const isGrid = Math.abs(lat) % (Math.PI / 6) < 0.07 || Math.abs(lon) % (Math.PI / 4) < 0.07
              if (isGrid && clampedLight > 0.25) {
                line += '+'
              } else if (clampedLight > 0.45) {
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
