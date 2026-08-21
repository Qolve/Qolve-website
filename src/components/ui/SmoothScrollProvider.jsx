import { useEffect, useRef, useState, useCallback } from 'react'

const SECTIONS = [
  { id: 'home', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'expertise', label: 'Platform' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'blog', label: 'Insights' },
  { id: 'contact', label: 'Contact' },
]

export default function SmoothScrollProvider({ children }) {
  const [activeSection, setActiveSection] = useState('home')
  const [isHoveredNav, setIsHoveredNav] = useState(false)
  const isTransitioningRef = useRef(false)
  const activeIndexRef = useRef(0)
  const touchStartYRef = useRef(0)
  const animFrameIdRef = useRef(null)

  const getSectionElements = useCallback(() => {
    return SECTIONS.map((sec) => document.getElementById(sec.id)).filter(Boolean)
  }, [])

  const getClosestIndex = useCallback(() => {
    const sections = getSectionElements()
    if (!sections.length) return 0
    const scrollY = window.scrollY
    let closestIndex = 0
    let minDistance = Infinity

    sections.forEach((sec, idx) => {
      const distance = Math.abs(sec.offsetTop - scrollY)
      if (distance < minDistance) {
        minDistance = distance
        closestIndex = idx
      }
    })
    return closestIndex
  }, [getSectionElements])

  const smoothGlideTo = useCallback((targetIndex) => {
    const sections = getSectionElements()
    if (!sections.length || targetIndex < 0 || targetIndex >= sections.length) return

    const targetEl = sections[targetIndex]
    if (!targetEl) return

    isTransitioningRef.current = true
    activeIndexRef.current = targetIndex
    setActiveSection(SECTIONS[targetIndex]?.id || 'home')

    if (animFrameIdRef.current) {
      cancelAnimationFrame(animFrameIdRef.current)
    }

    const startY = window.scrollY
    const endY = targetEl.offsetTop
    const distance = endY - startY
    const duration = 850 // Smooth 850ms glide duration
    let startTime = null

    // Quartic Ease-Out curve for ultra-smooth momentum and landing
    const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4)

    function step(currentTime) {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = easeOutQuart(progress)

      window.scrollTo(0, startY + distance * ease)

      if (progress < 1) {
        animFrameIdRef.current = requestAnimationFrame(step)
      } else {
        window.scrollTo(0, endY)
        // Brief cooldown to prevent accidental over-scrolls
        setTimeout(() => {
          isTransitioningRef.current = false
        }, 180)
      }
    }

    animFrameIdRef.current = requestAnimationFrame(step)
  }, [getSectionElements])

  useEffect(() => {
    // 1. Instant Wheel Interceptor: prevents partial micro-adjustments and glides smoothly
    const handleWheel = (e) => {
      e.preventDefault()

      if (isTransitioningRef.current) return
      if (Math.abs(e.deltaY) < 3) return

      const currentIndex = getClosestIndex()

      if (e.deltaY > 0 && currentIndex < SECTIONS.length - 1) {
        smoothGlideTo(currentIndex + 1)
      } else if (e.deltaY < 0 && currentIndex > 0) {
        smoothGlideTo(currentIndex - 1)
      }
    }

    // 2. Touch Navigation for mobile/touchpads
    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e) => {
      if (isTransitioningRef.current) return
      const touchEndY = e.changedTouches[0].clientY
      const deltaY = touchStartYRef.current - touchEndY

      if (Math.abs(deltaY) > 40) {
        const currentIndex = getClosestIndex()
        if (deltaY > 0 && currentIndex < SECTIONS.length - 1) {
          smoothGlideTo(currentIndex + 1)
        } else if (deltaY < 0 && currentIndex > 0) {
          smoothGlideTo(currentIndex - 1)
        }
      }
    }

    // 3. Keyboard Arrow & Page Navigation
    const handleKeyDown = (e) => {
      if (isTransitioningRef.current) return
      const currentIndex = getClosestIndex()

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        if (currentIndex < SECTIONS.length - 1) {
          e.preventDefault()
          smoothGlideTo(currentIndex + 1)
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (currentIndex > 0) {
          e.preventDefault()
          smoothGlideTo(currentIndex - 1)
        }
      }
    }

    // 4. Track active section when scrolling finishes
    const handleScroll = () => {
      if (!isTransitioningRef.current) {
        const currentIndex = getClosestIndex()
        setActiveSection(SECTIONS[currentIndex]?.id || 'home')
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [getClosestIndex, smoothGlideTo])

  const handleHudClick = (id) => {
    const index = SECTIONS.findIndex((s) => s.id === id)
    if (index !== -1) {
      smoothGlideTo(index)
    }
  }

  return (
    <>
      {children}

      {/* Floating Section Snap HUD */}
      <div
        className="fixed-section-hud"
        onMouseEnter={() => setIsHoveredNav(true)}
        onMouseLeave={() => setIsHoveredNav(false)}
        style={{
          position: 'fixed',
          right: '1.75rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 90,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '0.85rem',
          pointerEvents: 'auto',
        }}
      >
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id
          return (
            <button
              key={sec.id}
              onClick={() => handleHudClick(sec.id)}
              aria-label={`Scroll to ${sec.label}`}
              style={{
                background: 'none',
                border: 'none',
                padding: '0.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                outline: 'none',
              }}
            >
              {/* Tooltip text shown on hover or when active */}
              <span
                className="hud-label"
                style={{
                  color: isActive ? '#d6fd70' : 'rgba(255, 255, 255, 0.5)',
                  fontSize: '0.75rem',
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  opacity: isHoveredNav || isActive ? 1 : 0,
                  transform: isHoveredNav || isActive ? 'translateX(0)' : 'translateX(8px)',
                  transition: 'all 0.25s ease',
                  background: isActive ? 'rgba(15, 15, 15, 0.85)' : 'rgba(0, 0, 0, 0.6)',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '9999px',
                  border: isActive ? '1px solid rgba(214, 253, 112, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {sec.label}
              </span>

              {/* Indicator Dot / Pill */}
              <div
                style={{
                  width: isActive ? '8px' : '6px',
                  height: isActive ? '24px' : '6px',
                  borderRadius: '9999px',
                  background: isActive ? '#d6fd70' : 'rgba(255, 255, 255, 0.25)',
                  boxShadow: isActive ? '0 0 12px rgba(214, 253, 112, 0.7)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
            </button>
          )
        })}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .fixed-section-hud {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}
