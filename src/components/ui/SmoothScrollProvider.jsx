import { useEffect, useRef, useState, useCallback } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

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
  const lenisRef = useRef(null)
  const [activeSection, setActiveSection] = useState('home')
  const [isHoveredNav, setIsHoveredNav] = useState(false)
  const isTransitioningRef = useRef(false)
  const touchStartYRef = useRef(0)
  const lastWheelTimeRef = useRef(0)

  // Smooth Quartic Easing curve: ultra-smooth acceleration and cushioned landing
  const easeQuartic = (t) => 1 - Math.pow(1 - t, 4)

  const getSectionElements = useCallback(() => {
    return SECTIONS.map((sec) => document.getElementById(sec.id)).filter(Boolean)
  }, [])

  const getActiveIndex = useCallback(() => {
    const sections = getSectionElements()
    if (!sections.length) return 0
    const scrollY = window.scrollY + window.innerHeight * 0.35

    for (let i = sections.length - 1; i >= 0; i--) {
      const top = sections[i].offsetTop
      if (scrollY >= top) {
        return i
      }
    }
    return 0
  }, [getSectionElements])

  const scrollToSectionIndex = useCallback((targetIndex) => {
    const sections = getSectionElements()
    if (!sections.length || targetIndex < 0 || targetIndex >= sections.length) return

    const targetEl = sections[targetIndex]
    if (!targetEl || !lenisRef.current) return

    isTransitioningRef.current = true
    setActiveSection(SECTIONS[targetIndex]?.id || 'home')

    lenisRef.current.scrollTo(targetEl, {
      offset: 0,
      duration: 1.0,
      easing: easeQuartic,
      onComplete: () => {
        setTimeout(() => {
          isTransitioningRef.current = false
        }, 150)
      },
    })
  }, [getSectionElements])

  useEffect(() => {
    // 1. Initialize Lenis with smooth lerp physics
    const lenis = new Lenis({
      duration: 1.1,
      easing: easeQuartic,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      infinite: false,
    })
    lenisRef.current = lenis

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // 2. Controlled Wheel Glider: smoothly transitions between fixed sections without stutter
    const handleWheel = (e) => {
      const now = Date.now()
      const delta = e.deltaY

      // Ignore micro-scrolls and active transitions
      if (Math.abs(delta) < 25) return
      if (isTransitioningRef.current) {
        e.preventDefault()
        return
      }

      // Debounce rapid wheel events
      if (now - lastWheelTimeRef.current < 800) {
        e.preventDefault()
        return
      }

      const currentIndex = getActiveIndex()
      const sections = getSectionElements()
      const currentEl = sections[currentIndex]

      if (currentEl) {
        const rect = currentEl.getBoundingClientRect()
        // If current section is taller than viewport and user is scrolling within it
        if (delta > 0 && rect.bottom > window.innerHeight + 100) {
          // Allow natural scroll within tall section
          return
        }
        if (delta < 0 && rect.top < -100) {
          // Allow natural scroll up within tall section
          return
        }
      }

      if (delta > 0 && currentIndex < sections.length - 1) {
        e.preventDefault()
        lastWheelTimeRef.current = now
        scrollToSectionIndex(currentIndex + 1)
      } else if (delta < 0 && currentIndex > 0) {
        e.preventDefault()
        lastWheelTimeRef.current = now
        scrollToSectionIndex(currentIndex - 1)
      }
    }

    // 3. Touch support for mobile / trackpads
    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e) => {
      if (isTransitioningRef.current) return
      const touchEndY = e.changedTouches[0].clientY
      const deltaY = touchStartYRef.current - touchEndY

      if (Math.abs(deltaY) > 60) {
        const currentIndex = getActiveIndex()
        const sections = getSectionElements()
        if (deltaY > 0 && currentIndex < sections.length - 1) {
          scrollToSectionIndex(currentIndex + 1)
        } else if (deltaY < 0 && currentIndex > 0) {
          scrollToSectionIndex(currentIndex - 1)
        }
      }
    }

    // 4. Keyboard navigation (ArrowDown, ArrowUp, PageDown, PageUp)
    const handleKeyDown = (e) => {
      if (isTransitioningRef.current) return
      const currentIndex = getActiveIndex()
      const sections = getSectionElements()

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        if (currentIndex < sections.length - 1) {
          e.preventDefault()
          scrollToSectionIndex(currentIndex + 1)
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (currentIndex > 0) {
          e.preventDefault()
          scrollToSectionIndex(currentIndex - 1)
        }
      }
    }

    // 5. Scroll listener to update active indicator
    const handleScroll = () => {
      if (!isTransitioningRef.current) {
        const currentIndex = getActiveIndex()
        setActiveSection(SECTIONS[currentIndex]?.id || 'home')
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', handleScroll)
      lenis.destroy()
    }
  }, [getActiveIndex, getSectionElements, scrollToSectionIndex])

  const handleHudClick = (id) => {
    const index = SECTIONS.findIndex((s) => s.id === id)
    if (index !== -1) {
      scrollToSectionIndex(index)
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

