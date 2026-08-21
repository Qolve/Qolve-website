import { useEffect, useState } from 'react'

// Retro Terminal Phosphor Pixel Starfield (Square bitmap pixels, stepped terminal clock ticks)
export default function GlisteningStars({ count = 45 }) {
  const [pixels, setPixels] = useState([])

  useEffect(() => {
    const shades = ['#000000', '#18181b', '#27272a', '#3f3f46', '#52525b']

    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: [2, 2.5, 3, 3.5, 4][Math.floor(Math.random() * 5)],
      color: shades[Math.floor(Math.random() * shades.length)],
      duration: 2.5 + Math.random() * 4,
      delay: Math.random() * 3,
    }))
    setPixels(generated)
  }, [count])

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
        userSelect: 'none',
      }}
    >
      {pixels.map((pixel) => (
        <div
          key={pixel.id}
          style={{
            position: 'absolute',
            left: `${pixel.x}%`,
            top: `${pixel.y}%`,
            width: `${pixel.size}px`,
            height: `${pixel.size}px`,
            backgroundColor: pixel.color,
            borderRadius: '0px', // Exact square terminal bitmap pixel
            imageRendering: 'pixelated',
            animation: `terminalPixelTick ${pixel.duration}s steps(3, start) ${pixel.delay}s infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes terminalPixelTick {
          0% {
            opacity: 0;
            transform: scale(0.6);
          }
          50% {
            opacity: 0.85;
            transform: scale(1);
          }
          100% {
            opacity: 0.15;
            transform: scale(0.8);
          }
        }
      `}</style>
    </div>
  )
}
