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
        background: scrolled 
          ? 'radial-gradient(120% 120% at 50% 0%, rgba(255,255,255,0.12) 0%, rgba(6, 26, 17, 0.85) 60%, rgba(3, 14, 8, 0.95) 100%)' 
          : 'radial-gradient(120% 120% at 50% 0%, rgba(255,255,255,0.18) 0%, rgba(8, 32, 21, 0.65) 60%, rgba(4, 18, 11, 0.75) 100%)',
        backdropFilter: 'blur(32px) saturate(210%)',
        WebkitBackdropFilter: 'blur(32px) saturate(210%)',
        borderBottom: '1px solid rgba(255,255,255,0.18)',
        boxShadow: '0 15px 40px rgba(0,20,10,0.5), inset 0 1px 1.5px rgba(255,255,255,0.4)',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="padding-global is-navbar">
        <div className="container-large">
          <div className="navbar_content">
            {/* Logo - Qolve Company & Liquid Ecosystem */}
            <button
              onClick={() => navTo('home')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <div style={{
                width: '2.35rem',
                height: '2.35rem',
                borderRadius: '0.75rem',
                background: 'radial-gradient(135deg, #6ee7b7 0%, #10b981 50%, #065f46 100%)',
                border: '1.5px solid rgba(255,255,255,0.6)',
                boxShadow: '0 0 20px rgba(52, 211, 153, 0.4), inset 0 1px 1px rgba(255,255,255,0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                color: '#03150b',
                fontSize: '1.15rem'
              }}>
                🌿
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1.3rem', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  qolve
                </span>
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#34d399', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Liquid Eco Systems
                </span>
              </div>
            </button>

            {/* Desktop nav links */}
            <div className="nav_wrap">
              <nav className="nav_mobile">
                <div className="navbar_list" style={{ gap: '1.75rem' }}>
                  <button
                    onClick={() => navTo('home')}
                    className="nav_links"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: activePage === 'home' ? '#34d399' : '#f8fafc', fontWeight: 600, transition: 'color 0.2s' }}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => navTo('products')}
                    className="nav_links"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: activePage === 'products' ? '#34d399' : '#cbd5e1', fontWeight: 600, transition: 'color 0.2s' }}
                  >
                    Quelp Platform
                  </button>
                  <button
                    onClick={() => navTo('home', 'roadmap')}
                    className="nav_links"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#cbd5e1', fontWeight: 600, transition: 'color 0.2s' }}
                  >
                    Architecture
                  </button>
                  <button
                    onClick={() => navTo('team')}
                    className="nav_links"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: activePage === 'team' ? '#34d399' : '#cbd5e1', fontWeight: 600, transition: 'color 0.2s' }}
                  >
                    Qolve Team
                  </button>
                  <button
                    onClick={() => navTo('home', 'about')}
                    className="nav_links"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#cbd5e1', fontWeight: 600, transition: 'color 0.2s' }}
                  >
                    About Qolve
                  </button>
                  <button
                    onClick={() => navTo('home', 'pricing')}
                    className="nav_links"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#cbd5e1', fontWeight: 600, transition: 'color 0.2s' }}
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
                    background: 'linear-gradient(135deg, #6ee7b7 0%, #10b981 100%)',
                    color: '#03150b',
                    border: '1px solid rgba(255,255,255,0.6)',
                    borderRadius: '9999px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4), inset 0 1.5px 2px rgba(255,255,255,0.8)',
                    transition: 'all 0.25s',
                  }}
                >
                  <div className="text-button-wrap">
                    <div>Explore Quelp</div>
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


