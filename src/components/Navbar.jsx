import { useState, useEffect } from 'react'

export default function Navbar({ activePage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
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
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(15, 15, 15, 0.88)' : 'rgba(15, 15, 15, 0.7)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.04)',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="padding-global is-navbar">
        <div className="container-large">
          <div className="navbar_content">
            {/* Logo - Qolve Company & Quelp Product */}
            <button
              onClick={() => navTo('home')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
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
                fontSize: '1.25rem',
                boxShadow: '0 0 16px rgba(214, 253, 112, 0.4)',
              }}>
                Q
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  qolve
                </span>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#d6fd70', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Whitelabel Solutions
                </span>
              </div>
            </button>

            {/* Desktop nav links */}
            <div className="nav_wrap">
              <nav className="nav_mobile">
                <div className="navbar_list" style={{ background: 'rgba(255,255,255,0.04)', padding: '0.25rem 0.5rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <button
                    onClick={() => navTo('home')}
                    className="nav_links"
                    style={{
                      background: activePage === 'home' ? 'rgba(214, 253, 112, 0.12)' : 'none',
                      borderRadius: '9999px',
                      padding: '0.35rem 0.85rem',
                      border: activePage === 'home' ? '1px solid rgba(214, 253, 112, 0.3)' : 'none',
                      cursor: 'pointer',
                      color: activePage === 'home' ? '#d6fd70' : '#ffffff',
                      fontWeight: activePage === 'home' ? 600 : 500,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => navTo('products')}
                    className="nav_links"
                    style={{
                      background: activePage === 'products' ? 'rgba(214, 253, 112, 0.12)' : 'none',
                      borderRadius: '9999px',
                      padding: '0.35rem 0.85rem',
                      border: activePage === 'products' ? '1px solid rgba(214, 253, 112, 0.3)' : 'none',
                      cursor: 'pointer',
                      color: activePage === 'products' ? '#d6fd70' : '#ffffff',
                      fontWeight: activePage === 'products' ? 600 : 500,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Quelp Platform
                  </button>
                  <button
                    onClick={() => navTo('home', 'roadmap')}
                    className="nav_links"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.35rem 0.85rem' }}
                  >
                    Architecture
                  </button>
                  <button
                    onClick={() => navTo('team')}
                    className="nav_links"
                    style={{
                      background: activePage === 'team' ? 'rgba(214, 253, 112, 0.12)' : 'none',
                      borderRadius: '9999px',
                      padding: '0.35rem 0.85rem',
                      border: activePage === 'team' ? '1px solid rgba(214, 253, 112, 0.3)' : 'none',
                      cursor: 'pointer',
                      color: activePage === 'team' ? '#d6fd70' : '#ffffff',
                      fontWeight: activePage === 'team' ? 600 : 500,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Qolve Team
                  </button>
                  <button
                    onClick={() => navTo('home', 'about')}
                    className="nav_links"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.35rem 0.85rem' }}
                  >
                    About Qolve
                  </button>
                  <button
                    onClick={() => navTo('home', 'pricing')}
                    className="nav_links"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.35rem 0.85rem' }}
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
                  style={{
                    padding: '0.625rem 1.35rem',
                    fontSize: '0.875rem',
                    background: '#d6fd70',
                    color: '#0f0f0f',
                    border: 'none',
                    borderRadius: '9999px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 0 20px rgba(214, 253, 112, 0.3)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div className="text-button-wrap">
                    <div>Explore Quelp Platform</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Hamburger (mobile) */}
            <button
              className="menu-button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', padding: '0.5rem' }}
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(15,15,15,0.99)',
          padding: '1.25rem 2rem 1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}>
          {[
            { label: 'Home', action: () => navTo('home') },
            { label: 'Quelp Platform', action: () => navTo('products') },
            { label: 'About Qolve', action: () => navTo('home', 'about') },
            { label: 'Services', action: () => navTo('home', 'services') },
            { label: 'Capabilities', action: () => navTo('home', 'capabilities') },
            { label: 'Qolve Team', action: () => navTo('team') },
            { label: 'Pricing', action: () => navTo('home', 'pricing') },
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={item.action}
              className="mobile-nav-link"
              style={{ display: 'block', padding: '0.75rem 0.5rem', textAlign: 'left', background: 'none', border: 'none', width: '100%', cursor: 'pointer', fontSize: '1.05rem', color: '#ffffff', fontWeight: 600 }}
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


