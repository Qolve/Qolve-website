import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import Snap from 'lenis/snap'
import 'lenis/dist/lenis.css'

const SECTIONS = [
  { id: 'home', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'expertise', label: 'Platform' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'blog', label: 'Insights' },
  { id: 'contact', label: 'Contact' },
]

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null)
  const snapRef = useRef(null)
  const [activeSection, setActiveSection] = useState('home')
  const [isHoveredNav, setIsHoveredNav] = useState(false)

  useEffect(() => {
    // 1. Initialize Lenis for buttery smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.5,
    })
    lenisRef.current = lenis

    // 2. Initialize Lenis Snap for fixed viewing positions
    const snap = new Snap(lenis, {
      type: 'proximity',
      distanceThreshold: '35%',
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      debounce: 300,
    })
    snapRef.current = snap

    // Register each major section as a fixed snap viewing position
    const sectionElements = []
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id) || document.querySelector(`section[id="${id}"]`)
      if (el) {
        snap.addElement(el, { align: 'start' })
        sectionElements.push(el)
      }
    })

    // RAF loop
    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Active section intersection tracker for HUD
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0.1,
      }
    )

    sectionElements.forEach((el) => observer.observe(el))

    return () => {
      cancelAnimationFrame(rafId)
      observer.disconnect()
      snap.destroy()
      lenis.destroy()
    }
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el && lenisRef.current) {
      lenisRef.current.scrollTo(el, {
        offset: 0,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
    }
  }

  return (
    <>
      {children}

      {/* Floating Section Snap HUD on Desktop */}
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
              onClick={() => scrollToSection(sec.id)}
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
