import { useRef } from 'react'

export default function SpotlightCard({
  children,
  className = '',
  style = {},
  spotlightColor = 'rgba(214, 253, 112, 0.12)',
  ...props
}) {
  const divRef = useRef(null)
  const overlayRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!divRef.current || !overlayRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    overlayRef.current.style.background = `radial-gradient(400px circle at ${x}px ${y}px, ${spotlightColor}, transparent 70%)`
  }

  const handleMouseEnter = () => {
    if (overlayRef.current) overlayRef.current.style.opacity = '1'
  }

  const handleMouseLeave = () => {
    if (overlayRef.current) overlayRef.current.style.opacity = '0'
  }

  const handleFocus = () => {
    if (overlayRef.current) overlayRef.current.style.opacity = '1'
  }

  const handleBlur = () => {
    if (overlayRef.current) overlayRef.current.style.opacity = '0'
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`spotlight-card ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease',
        ...style,
      }}
      {...props}
    >
      <div
        ref={overlayRef}
        className="pointer-events-none"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0,
          transition: 'opacity 0.4s ease',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', zIndex: 3, height: '100%' }}>
        {children}
      </div>
    </div>
  )
}

