import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function RotatingWords({
  words = ['Intelligent Automation', 'White-Label Branding', 'Zero Friction', 'Enterprise Speed'],
  interval = 2800,
  className = '',
  style = {},
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, interval)
    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        position: 'relative',
        minWidth: '220px',
        textAlign: 'center',
        verticalAlign: 'bottom',
        ...style,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -18, filter: 'blur(8px)' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'inline-block',
            color: '#d6fd70',
            textShadow: '0 0 24px rgba(214, 253, 112, 0.45)',
            fontWeight: 800,
            whiteSpace: 'nowrap',
          }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
