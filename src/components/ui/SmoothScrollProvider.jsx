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
  const isLockedRef = useRef(false)
  const lockTimerRef = useRef(null)

  // Scroll directly to section by index
  const scrollToSectionIndex = useCallback((index) => {
    const validIdx = Math.max(0, Math.min(SECTIONS.length - 1, index))
    const secId = SECTIONS[validIdx].id
    const targetEl = document.getElementById(secId)
    if (!targetEl) return

    isLockedRef.current = true
    setActiveSection(secId)

    const targetY = targetEl.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: targetY, behavior: 'smooth' })

    if (lockTimerRef.current) clearTimeout(lockTimerRef.current)
    lockTimerRef.current = setTimeout(() => {
      isLockedRef.current = false
    }, 650)
  }, [])

  // Wheel interceptor for desktop locked section jumping
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault()

      if (isLockedRef.current) return
      if (Math.abs(e.deltaY) < 15) return

      const scrollY = window.scrollY
      const offsets = SECTIONS.map(({ id }) => {
        const el = document.getElementById(id)
        return el ? el.getBoundingClientRect().top + window.scrollY : 0
      })

      let currentIdx = 0
      for (let i = 0; i < offsets.length; i++) {
        if (scrollY >= offsets[i] - 120) {
          currentIdx = i
        }
      }

      if (e.deltaY > 0 && currentIdx < SECTIONS.length - 1) {
        scrollToSectionIndex(currentIdx + 1)
      } else if (e.deltaY < 0 && currentIdx > 0) {
        scrollToSectionIndex(currentIdx - 1)
      }
    }

    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (isLockedRef.current) return
      const scrollY = window.scrollY
      const offsets = SECTIONS.map(({ id }) => {
        const el = document.getElementById(id)
        return el ? el.getBoundingClientRect().top + window.scrollY : 0
      })

      let currentIdx = 0
      for (let i = 0; i < offsets.length; i++) {
        if (scrollY >= offsets[i] - 120) {
          currentIdx = i
        }
      }

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        if (currentIdx < SECTIONS.length - 1) {
          e.preventDefault()
          scrollToSectionIndex(currentIdx + 1)
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (currentIdx > 0) {
          e.preventDefault()
          scrollToSectionIndex(currentIdx - 1)
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      if (lockTimerRef.current) clearTimeout(lockTimerRef.current)
    }
  }, [scrollToSectionIndex])

  const handleHudClick = useCallback((id) => {
    const index = SECTIONS.findIndex((s) => s.id === id)
    if (index !== -1) {
      scrollToSectionIndex(index)
    }
  }, [scrollToSectionIndex])

  return (
    <>
      {children}

      {/* Floating Section HUD */}
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
