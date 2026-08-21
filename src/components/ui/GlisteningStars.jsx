import { useEffect, useState } from 'react'

export default function GlisteningStars({ count = 35 }) {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const starSymbols = ['✦', '✧', '⋆', '·', '•', '+', '*']
    const colors = ['#0f172a', '#334155', '#475569', '#64748b', '#94a3b8']

    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 0.6 + Math.random() * 0.75,
      symbol: starSymbols[Math.floor(Math.random() * starSymbols.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: 3 + Math.random() * 4.5,
      delay: Math.random() * 4,
      maxOpacity: 0.35 + Math.random() * 0.45,
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
            color: star.color,
            animation: `glisten ${star.duration}s ease-in-out ${star.delay}s infinite alternate`,
            fontFamily: 'Courier, monospace',
            display: 'inline-block',
          }}
        >
          {star.symbol}
        </span>
      ))}
      <style>{`
        @keyframes glisten {
          0% {
            opacity: 0.1;
            transform: scale(0.7) rotate(0deg);
          }
          50% {
            opacity: 0.85;
            transform: scale(1.15) rotate(15deg);
          }
          100% {
            opacity: 0.15;
            transform: scale(0.8) rotate(-10deg);
          }
        }
      `}</style>
    </div>
  )
}
