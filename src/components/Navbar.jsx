import { useState, useEffect } from 'react'

export default function Navbar({ activePage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15)
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
      className="navbar fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled 
          ? 'rgba(13, 15, 14, 0.85)' 
          : 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '0.9rem 0',
      }}
    >
      <div className="padding-global is-navbar">
        <div className="container-large" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="navbar_content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Logo - Qolve Original Brand Mark */}
            <button
              onClick={() => navTo('home')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <div style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '0.4rem',
                background: '#d6fd70',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                color: '#0f0f0f',
                fontSize: '1.1rem'
              }}>
                Q
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '1.2rem', fontWeight: 700, color: '#e2e3e0', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  qolve
                </span>
                <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#adcebd', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Whitelabel Solutions
                </span>
              </div>
            </button>


            {/* Desktop Navigation Links */}
            <div className="nav_wrap" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {[
                { label: 'Platform', action: () => navTo('products'), active: activePage === 'products' },
                { label: 'Architecture', action: () => navTo('home', 'roadmap'), active: false },
                { label: 'Team', action: () => navTo('team'), active: activePage === 'team' },
                { label: 'Heritage', action: () => navTo('home', 'about'), active: false },
                { label: 'Pricing', action: () => navTo('home', 'pricing'), active: false },
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={item.action}
                  style={{
                    background: item.active ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                    border: 'none',
                    borderRadius: '0.5rem',
                    padding: '0.45rem 0.95rem',
                    cursor: 'pointer',
                    color: item.active ? '#e2e3e0' : '#c1c8c3',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    letterSpacing: '0em',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!item.active) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'
                      e.currentTarget.style.color = '#e2e3e0'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!item.active) {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = '#c1c8c3'
                    }
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right Action button & Mobile Toggle */}
            <div className="nav_buttons-wrap" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={() => navTo('products')}
                style={{
                  padding: '0.55rem 1.35rem',
                  fontSize: '0.875rem',
                  background: '#2d4b3e',
                  color: '#adcebd',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '9999px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.color = '#e2e3e0'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#2d4b3e'
                  e.currentTarget.style.color = '#adcebd'
                }}
              >
                Inquire
              </button>

              {/* Hamburger (mobile) */}
              <button
                className="menu-button"
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }}
              >
                <div className="nav-button_component">
                  <div className="nav-button_line is-first" style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none', background: '#adcebd' }} />
                  <div className="nav-button_line is-second" style={{ opacity: mobileOpen ? 0 : 1, background: '#adcebd' }} />
                  <div className="nav-button_line is-third" style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none', background: '#adcebd' }} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(5, 18, 11, 0.96)',
          backdropFilter: 'blur(32px)',
          padding: '1.25rem 2.5rem 1.75rem',
          borderBottom: '1px solid rgba(255,255,255,0.15)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem',
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
              style={{ display: 'block', padding: '0.75rem 0.5rem', textAlign: 'left', background: 'none', border: 'none', width: '100%', cursor: 'pointer', color: '#f8fafc', fontWeight: 600 }}
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



