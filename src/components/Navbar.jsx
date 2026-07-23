import { useState, useEffect, useRef } from 'react'

export default function Navbar({ activePage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 20)
      // Hide when scrolling down past 80px, show when scrolling up
      if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true)
        setMobileOpen(false)
      } else {
        setHidden(false)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navTo = (page, sectionId) => {
    setMobileOpen(false)
    if (onNavigate) {
      onNavigate(page, sectionId)
    }
  }

  return (
    <nav
      className="navbar"
      style={{
        background: scrolled ? 'rgba(15,15,15,0.97)' : 'rgba(15,15,15,0.85)',
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease',
      }}
    >
      <div className="padding-global is-navbar">
        <div className="container-large">
          <div className="navbar_content">
            {/* Logo - Qolve Company & Quelp Product */}
            <button
              onClick={() => navTo('home')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '0.625rem' }}
            >
              <div style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '0.5rem',
                background: '#d6fd70',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                color: '#0f0f0f',
                fontSize: '1.25rem'
              }}>
                Q
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  qolve
                </span>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#d6fd70', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Building Quelp
                </span>
              </div>
            </button>

            {/* Desktop nav links */}
            <div className="nav_wrap">
              <nav className="nav_mobile">
                <div className="navbar_list">
                  <button
                    onClick={() => navTo('home')}
                    className="nav_links"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: activePage === 'home' ? '#d6fd70' : '#ffffff' }}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => navTo('products')}
                    className="nav_links"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: activePage === 'products' ? '#d6fd70' : '#ffffff' }}
                  >
                    Quelp Platform
                  </button>
                  <button
                    onClick={() => navTo('home', 'roadmap')}
                    className="nav_links"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    Architecture
                  </button>
                  <button
                    onClick={() => navTo('team')}
                    className="nav_links"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: activePage === 'team' ? '#d6fd70' : '#ffffff' }}
                  >
                    Qolve Team
                  </button>
                  <button
                    onClick={() => navTo('home', 'about')}
                    className="nav_links"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    About Qolve
                  </button>
                  <button
                    onClick={() => navTo('home', 'pricing')}
                    className="nav_links"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    Pricing
                  </button>
                </div>
              </nav>
            </div>

            {/* Right buttons */}
            <div className="nav_buttons-wrap">
              <div className="login-wrap">
                <button
                  onClick={() => navTo('products')}
                  className="button"
                  style={{ padding: '0.625rem 1.25rem', fontSize: '0.875rem', background: '#d6fd70', color: '#0f0f0f', border: 'none', borderRadius: '9999px', fontWeight: 600, cursor: 'pointer' }}
                >
                  <div className="text-button-wrap">
                    <div>Explore Quelp Platform</div>
                  </div>
                </button>
              </div>

              {/* Hamburger (mobile) */}
              <button
                className="menu-button"
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }}
              >
                <div className="nav-button_component">
                  <div className="nav-button_line is-first" style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
                  <div className="nav-button_line is-second" style={{ opacity: mobileOpen ? 0 : 1 }} />
                  <div className="nav-button_line is-third" style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(15,15,15,0.99)',
          padding: '1rem 2.5rem 1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem',
        }}>
          {[
            { label: 'Home', action: () => navTo('home') },
            { label: 'Quelp Platform', action: () => navTo('products') },
            { label: 'Architecture', action: () => navTo('home', 'roadmap') },
            { label: 'Qolve Team', action: () => navTo('team') },
            { label: 'About Qolve', action: () => navTo('home', 'about') },
            { label: 'Pricing', action: () => navTo('home', 'pricing') },
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={item.action}
              className="nav_links"
              style={{ display: 'block', padding: '0.75rem 0.5rem', textAlign: 'left', background: 'none', border: 'none', width: '100%', cursor: 'pointer' }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 991px) {
          .nav_wrap { display: none !important; }
          .menu-button { display: block !important; }
        }
      `}</style>
    </nav>
  )
}

