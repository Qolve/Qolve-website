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
      className="navbar"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled 
          ? 'rgba(6, 17, 10, 0.8)' 
          : 'rgba(6, 17, 10, 0.45)',
        backdropFilter: 'blur(40px) saturate(190%) contrast(104%)',
        WebkitBackdropFilter: 'blur(40px) saturate(190%) contrast(104%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
        transition: 'all 0.3s ease',
        padding: '0.75rem 0',
      }}
    >
      <div className="padding-global is-navbar">
        <div className="container-large">
          <div className="navbar_content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Logo - Qolve Original Brand Mark */}
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
                  Whitelabel Solutions
                </span>
              </div>
            </button>


            {/* Desktop macOS Segmented Navigation pill */}
            <div className="nav_wrap" style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '0.3rem 0.4rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <button
                  onClick={() => navTo('home')}
                  style={{
                    background: activePage === 'home' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.35rem 0.9rem',
                    cursor: 'pointer',
                    color: activePage === 'home' ? '#ffffff' : '#94a3b8',
                    fontWeight: 500,
                    fontSize: '0.8125rem',
                    letterSpacing: '-0.01em',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Home
                </button>
                <button
                  onClick={() => navTo('products')}
                  style={{
                    background: activePage === 'products' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.35rem 0.9rem',
                    cursor: 'pointer',
                    color: activePage === 'products' ? '#ffffff' : '#94a3b8',
                    fontWeight: 500,
                    fontSize: '0.8125rem',
                    letterSpacing: '-0.01em',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Platform
                </button>
                <button
                  onClick={() => navTo('home', 'roadmap')}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.35rem 0.9rem',
                    cursor: 'pointer',
                    color: '#94a3b8',
                    fontWeight: 500,
                    fontSize: '0.8125rem',
                    letterSpacing: '-0.01em',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Architecture
                </button>
                <button
                  onClick={() => navTo('team')}
                  style={{
                    background: activePage === 'team' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.35rem 0.9rem',
                    cursor: 'pointer',
                    color: activePage === 'team' ? '#ffffff' : '#94a3b8',
                    fontWeight: 500,
                    fontSize: '0.8125rem',
                    letterSpacing: '-0.01em',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Team
                </button>
                <button
                  onClick={() => navTo('home', 'about')}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.35rem 0.9rem',
                    cursor: 'pointer',
                    color: '#94a3b8',
                    fontWeight: 500,
                    fontSize: '0.8125rem',
                    letterSpacing: '-0.01em',
                    transition: 'all 0.2s ease',
                  }}
                >
                  About
                </button>
                <button
                  onClick={() => navTo('home', 'pricing')}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.35rem 0.9rem',
                    cursor: 'pointer',
                    color: '#94a3b8',
                    fontWeight: 500,
                    fontSize: '0.8125rem',
                    letterSpacing: '-0.01em',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Pricing
                </button>
              </div>
            </div>

            {/* Right macOS Glass Action button & Mobile Toggle */}
            <div className="nav_buttons-wrap" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={() => navTo('products')}
                className="button"
                style={{
                  padding: '0.5rem 1.15rem',
                  fontSize: '0.8125rem',
                  background: 'linear-gradient(180deg, rgba(52, 211, 153, 0.95) 0%, rgba(16, 185, 129, 0.9) 100%)',
                  color: '#021207',
                  border: '1px solid rgba(255,255,255,0.45)',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 6px 18px rgba(16, 185, 129, 0.3), inset 0 1px 0.5px rgba(255,255,255,0.8)',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                Deploy Quelp
              </button>

              {/* Hamburger (mobile) */}
              <button
                className="menu-button"
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }}
              >
                <div className="nav-button_component">
                  <div className="nav-button_line is-first" style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none', background: '#34d399' }} />
                  <div className="nav-button_line is-second" style={{ opacity: mobileOpen ? 0 : 1, background: '#34d399' }} />
                  <div className="nav-button_line is-third" style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none', background: '#34d399' }} />
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



