import { motion } from 'framer-motion'

export function WordReveal({
  children,
  className = '',
  style = {},
  delay = 0,
  stagger = 0.04,
  as: Component = 'h2',
}) {
  const text = typeof children === 'string' ? children : ''
  if (!text) {
    return <Component className={className} style={style}>{children}</Component>
  }

  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(6px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.55,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={className}
      style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '0.28em', ...style }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          style={{ display: 'inline-block', willChange: 'transform, opacity, filter' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function FadeUp({
  children,
  className = '',
  style = {},
  delay = 0,
  duration = 0.6,
  yOffset = 24,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
