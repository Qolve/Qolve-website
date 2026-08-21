import { useEffect, useRef, useState } from 'react'

export default function AsciiEarth({ size = 18 }) {
  const [asciiFrame, setAsciiFrame] = useState('')
  const angleRef = useRef(0)
  const reqRef = useRef(null)

  useEffect(() => {
    const width = Math.round(size * 2.1)
    const height = size
    const chars = ' .:-=+*#%@'
    const landChars = ' .:=+*#%@'

    const render = () => {
      angleRef.current += 0.02
      const theta = angleRef.current
      const cosT = Math.cos(theta)
      const sinT = Math.sin(theta)

      let frame = ''

      for (let y = 0; y < height; y++) {
        let line = ''
        const ny = (y - height / 2) / (height / 2)

        for (let x = 0; x < width; x++) {
          const nx = (x - width / 2) / (width / 2) * 1.15
          const distSq = nx * nx + ny * ny

          if (distSq <= 1.0) {
            const nz = Math.sqrt(Math.max(0, 1.0 - distSq))

            // Rotate around tilted axis
            const rx = nx * cosT + nz * sinT
            const ry = ny * 0.94 - (nx * sinT - nz * cosT) * 0.15
            const rz = -nx * sinT + nz * cosT

            const lat = Math.asin(Math.max(-1, Math.min(1, ry)))
            const lon = Math.atan2(rx, rz)

            // Continent shape generator
            const continentNoise =
              Math.sin(3 * lon) * Math.cos(2 * lat) +
              0.5 * Math.sin(6 * lon + lat) +
              0.3 * Math.cos(9 * lon - 2 * lat) +
              0.2 * Math.sin(12 * lon + 3 * lat)

            // Directional lighting from top-right front
            const light = (0.5 * nx + 0.7 * nz - 0.4 * ny + 1.0) / 2.0
            const clampedLight = Math.max(0, Math.min(1, light))

            if (continentNoise > 0.08) {
              const charIdx = Math.floor(clampedLight * (landChars.length - 1))
              line += landChars[charIdx] || '#'
            } else {
              // Ocean / grid lines
              const isGrid = (Math.abs(lat) % (Math.PI / 6) < 0.08) || (Math.abs(lon) % (Math.PI / 4) < 0.08)
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
  }, [size])

  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem 1.25rem',
        borderRadius: '1rem',
        background: 'rgba(20, 20, 20, 0.75)',
        border: '1px solid rgba(214, 253, 112, 0.25)',
        boxShadow: '0 0 30px rgba(214, 253, 112, 0.1), inset 0 0 20px rgba(0,0,0,0.8)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <pre
        style={{
          margin: 0,
          fontFamily: 'monospace',
          fontSize: '0.65rem',
          lineHeight: '0.68rem',
          color: '#d6fd70',
          letterSpacing: '0.05em',
          userSelect: 'none',
          textShadow: '0 0 8px rgba(214, 253, 112, 0.6)',
        }}
      >
        {asciiFrame}
      </pre>
      <div
        style={{
          marginTop: '0.4rem',
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'rgba(214, 253, 112, 0.8)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
        }}
      >
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#d6fd70', boxShadow: '0 0 6px #d6fd70' }} />
        <span>Live Global Relay Node</span>
      </div>
    </div>
  )
}
