import { useEffect, useState } from 'react'

// Pure ASCII Glistening Stars Engine
export default function GlisteningStars({ count = 35 }) {
  const [stars, setStars] = useState([])

  useEffect(() => {
    // Pure ASCII star and cosmic dust characters
    const asciiStars = ['*', '+', '.', ':', '^', 'x', '`', '\'', '#']
    const colors = ['#000000', '#1e293b', '#334155', '#475569', '#64748b']

    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 0.65 + Math.random() * 0.6,
      symbol: asciiStars[Math.floor(Math.random() * asciiStars.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: 3 + Math.random() * 4.5,
      delay: Math.random() * 4,
    }))
    setStars(generated)
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
      {stars.map((star) => (
        <span
          key={star.id}
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            fontSize: `${star.size}rem`,
            fontWeight: 800,
            color: star.color,
            animation: `asciiGlisten ${star.duration}s ease-in-out ${star.delay}s infinite alternate`,
            fontFamily: 'Courier, "Courier New", monospace',
            display: 'inline-block',
          }}
        >
          {star.symbol}
        </span>
      ))}
      <style>{`
        @keyframes asciiGlisten {
          0% {
            opacity: 0.08;
            transform: scale(0.65);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
          100% {
            opacity: 0.12;
            transform: scale(0.75);
          }
        }
      `}</style>
    </div>
  )
}
