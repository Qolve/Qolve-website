import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

export default function CountUpNumber({
  value,
  duration = 2,
  prefix = '',
  suffix = '',
  className = '',
  style = {},
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let startTime = null
    const target = typeof value === 'string' ? parseFloat(value) : value

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
