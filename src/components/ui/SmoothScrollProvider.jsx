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
  const currentIndexRef = useRef(0)
  const isLockedRef = useRef(false)
  const animFrameRef = useRef(null)
  const touchStartYRef = useRef(0)

  // Get live section DOM elements
  const getSectionElements = useCallback(() => {
    return SECTIONS.map((sec) => document.getElementById(sec.id)).filter(Boolean)
  }, [])

  // Find the currently closest section index
  const getClosestSectionIndex = useCallback(() => {
    const elements = getSectionElements()
    if (!elements.length) return 0
    const scrollY = window.scrollY
    let closestIdx = 0
    let minDiff = Infinity

    elements.forEach((el, idx) => {
      const diff = Math.abs(el.offsetTop - scrollY)
      if (diff < minDiff) {
        minDiff = diff
        closestIdx = idx
      }
    })
    return closestIdx
  }, [getSectionElements])

  // Smooth locked glide to target section
  const lockGlideTo = useCallback((targetIndex) => {
    const elements = getSectionElements()
    if (!elements.length || targetIndex < 0 || targetIndex >= elements.length) return

    const targetEl = elements[targetIndex]
    if (!targetEl) return

    isLockedRef.current = true
    currentIndexRef.current = targetIndex
    setActiveSection(SECTIONS[targetIndex]?.id || 'home')

    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current)
    }

    const startY = window.scrollY
    const endY = targetEl.offsetTop
    const distance = endY - startY
    const duration = 520 // Silky responsive transition
    let startTime = null

    // Smooth cubic bezier easing
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

    function animateScroll(currentTime) {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = easeOutCubic(progress)

      window.scrollTo(0, Math.round(startY + distance * ease))

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animateScroll)
      } else {
        window.scrollTo(0, endY)
        // Keep lock active for brief cooldown to absorb trackpad momentum inertia
        setTimeout(() => {
          isLockedRef.current = false
        }, 220)
      }
    }

    animFrameRef.current = requestAnimationFrame(animateScroll)
  }, [getSectionElements])

  useEffect(() => {
    // 1. Wheel Interceptor for Desktop Section Locking
    const handleWheel = (e) => {
      // Prevent default native loose scrolling
      e.preventDefault()

      if (isLockedRef.current) return
      if (Math.abs(e.deltaY) < 15) return // Ignore sub-threshold jitter

      const currentIdx = getClosestSectionIndex()

      if (e.deltaY > 0 && currentIdx < SECTIONS.length - 1) {
        lockGlideTo(currentIdx + 1)
      } else if (e.deltaY < 0 && currentIdx > 0) {
        lockGlideTo(currentIdx - 1)
      }
    }

    // 2. Keyboard Navigation (Arrow keys, Space, PageUp, PageDown)
    const handleKeyDown = (e) => {
      if (isLockedRef.current) return
      const currentIdx = getClosestSectionIndex()

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        if (currentIdx < SECTIONS.length - 1) {
          e.preventDefault()
          lockGlideTo(currentIdx + 1)
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (currentIdx > 0) {
          e.preventDefault()
          lockGlideTo(currentIdx - 1)
        }
      }
    }

    // 3. Touch Gestures for Tablets
    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e) => {
      if (isLockedRef.current) return
      const touchEndY = e.changedTouches[0].clientY
      const deltaY = touchStartYRef.current - touchEndY

      if (Math.abs(deltaY) > 40) {
        const currentIdx = getClosestSectionIndex()
        if (deltaY > 0 && currentIdx < SECTIONS.length - 1) {
          lockGlideTo(currentIdx + 1)
        } else if (deltaY < 0 && currentIdx > 0) {
          lockGlideTo(currentIdx - 1)
        }
      }
    }

    // 4. Window Resize Re-alignment
    const handleResize = () => {
      if (!isLockedRef.current) {
        const currentIdx = currentIndexRef.current
        const elements = getSectionElements()
        if (elements[currentIdx]) {
          window.scrollTo(0, elements[currentIdx].offsetTop)
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('resize', handleResize)
    }
  }, [getClosestSectionIndex, lockGlideTo, getSectionElements])

  const handleHudClick = useCallback((id) => {
    const index = SECTIONS.findIndex((s) => s.id === id)
    if (index !== -1) {
      lockGlideTo(index)
    }
  }, [lockGlideTo])

  return (
    <>
      {children}

      {/* Floating Section Locked Indicator HUD */}
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
              aria-label={`Lock to ${sec.label}`}
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
