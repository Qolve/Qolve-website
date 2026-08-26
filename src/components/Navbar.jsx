import { useState, useEffect } from 'react'

export default function Navbar({ activePage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
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

  const navItems = [
    { id: 'products', label: 'Quelp Platform', isPage: true, badge: 'PROD' },
    { id: 'architecture', label: 'Architecture', page: 'home', sectionId: 'capabilities' },
    { id: 'team', label: 'Qolve Team', isPage: true },
    { id: 'pricing', label: 'Pricing', page: 'home', sectionId: 'pricing' },
    { id: 'about', label: 'About', page: 'home', sectionId: 'about' },
  ]

  const isItemActive = (item) => {
    if (item.isPage) {
      return activePage === item.id
    }
    return false
  }

  return (
    <header
      className="navbar-wrapper"
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        width: '100%',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Hairline cyber gradient accent light across top edge */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(214, 253, 112, 0.45) 50%, transparent 100%)',
          opacity: scrolled ? 0.9 : 0.4,
          transition: 'opacity 0.35s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Main glass navigation container */}
      <nav
        className="navbar"
        style={{
          position: 'relative',
          width: '100%',
          background: scrolled
            ? 'rgba(15, 15, 15, 0.92)'
            : 'rgba(15, 15, 15, 0.72)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          borderBottom: scrolled
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: scrolled
            ? '0 12px 36px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.04)'
            : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="padding-global is-navbar" style={{ paddingTop: '0.85rem', paddingBottom: '0.85rem' }}>
          <div className="container-large">
            <div className="navbar_content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
              
              {/* Logo - Qolve Company & Sub-telemetry */}
              <button
                onClick={() => navTo('home')}
                aria-label="Qolve Homepage"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                {/* Cyber Geometric Logo Mark */}
                <div
                  style={{
                    position: 'relative',
                    width: '2.4rem',
                    height: '2.4rem',
                    borderRadius: '0.55rem',
                    background: '#d6fd70',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    color: '#0f0f0f',
                    fontSize: '1.3rem',
                    letterSpacing: '-0.04em',
                    boxShadow: '0 0 20px rgba(214, 253, 112, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.6)',
                    flexShrink: 0,
                  }}
                >
                  Q
                </div>

                {/* Brand Wordmark & Metadata */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <span
                      style={{
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: '#ffffff',
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                      }}
                    >
                      qolve
                    </span>
                    <span
                      style={{
                        fontSize: '0.625rem',
                        fontFamily: 'Geist Mono, monospace',
                        fontWeight: 600,
                        color: 'rgba(255, 255, 255, 0.45)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '0.1rem 0.35rem',
                        borderRadius: '0.25rem',
                        letterSpacing: '0.04em',
                      }}
                    >
                      LABS
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.2rem' }}>
                    <span
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: '#d6fd70',
                        boxShadow: '0 0 6px #d6fd70',
                        display: 'inline-block',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.625rem',
                        fontFamily: 'Geist Mono, monospace',
                        fontWeight: 600,
                        color: '#d6fd70',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        lineHeight: 1,
                      }}
                    >
                      White-Label Systems
                    </span>
                  </div>
                </div>
              </button>

              {/* Desktop Nav Links - Futuristic Island Segmented Capsule */}
              <div className="nav_wrap" style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
                <nav
                  className="nav_mobile"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <div
                    className="navbar_list"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      padding: '0.3rem 0.45rem',
                      borderRadius: '9999px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.06), 0 8px 24px rgba(0, 0, 0, 0.4)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    {navItems.map((item, idx) => {
                      const active = isItemActive(item)
                      const isHovered = hoveredLink === item.id

                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            if (item.isPage) {
                              navTo(item.id)
                            } else {
                              navTo(item.page, item.sectionId)
                            }
                          }}
                          onMouseEnter={() => setHoveredLink(item.id)}
                          onMouseLeave={() => setHoveredLink(null)}
                          className="nav_links"
                          style={{
                            position: 'relative',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            background: active
                              ? 'rgba(214, 253, 112, 0.12)'
                              : isHovered
                              ? 'rgba(255, 255, 255, 0.06)'
                              : 'transparent',
                            borderRadius: '9999px',
                            padding: '0.42rem 0.95rem',
                            border: active
                              ? '1px solid rgba(214, 253, 112, 0.35)'
                              : isHovered
                              ? '1px solid rgba(255, 255, 255, 0.12)'
                              : '1px solid transparent',
                            cursor: 'pointer',
                            color: active ? '#d6fd70' : isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.72)',
                            fontWeight: active ? 700 : 500,
                            fontSize: '0.875rem',
                            letterSpacing: '-0.01em',
                            transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                            outline: 'none',
                            textShadow: active ? '0 0 12px rgba(214, 253, 112, 0.4)' : 'none',
                          }}
                        >
                          {/* Monospace subtle index */}
                          <span
                            style={{
                              fontFamily: 'Geist Mono, monospace',
                              fontSize: '0.625rem',
                              color: active ? '#d6fd70' : 'rgba(255, 255, 255, 0.3)',
                              transition: 'color 0.2s ease',
                            }}
                          >
                            0{idx + 1}
                          </span>

                          <span>{item.label}</span>

                          {/* Optional micro tag for products */}
                          {item.badge && (
                            <span
                              style={{
                                fontSize: '0.55rem',
                                fontFamily: 'Geist Mono, monospace',
                                fontWeight: 700,
                                color: active ? '#0f0f0f' : '#d6fd70',
                                background: active ? '#d6fd70' : 'rgba(214, 253, 112, 0.16)',
                                border: active ? 'none' : '1px solid rgba(214, 253, 112, 0.3)',
                                padding: '0.1rem 0.35rem',
                                borderRadius: '9999px',
                                letterSpacing: '0.04em',
                                marginLeft: '0.15rem',
                              }}
                            >
                              {item.badge}
                            </span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </nav>
              </div>

              {/* Right Action Hub: Telemetry Status + Cyber CTA */}
              <div
                className="nav_buttons-wrap"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                {/* Live Telemetry Ping */}
                <div
                  className="nav-telemetry"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '9999px',
                    background: 'rgba(255, 255, 255, 0.025)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    fontFamily: 'Geist Mono, monospace',
                    fontSize: '0.675rem',
                    color: 'rgba(255, 255, 255, 0.65)',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#d6fd70',
                      boxShadow: '0 0 8px #d6fd70',
                      display: 'inline-block',
                    }}
                  />
                  <span>
                    SYS <strong style={{ color: '#d6fd70', fontWeight: 600 }}>ONLINE</strong>
                  </span>
                </div>

                {/* Primary Cyber Action Button */}
                <button
                  onClick={() => navTo('products')}
                  className="nav-cta-button"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1.15rem',
                    fontSize: '0.8125rem',
                    background: '#d6fd70',
                    color: '#0f0f0f',
                    border: 'none',
                    borderRadius: '9999px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    letterSpacing: '-0.01em',
                    boxShadow: '0 0 20px rgba(214, 253, 112, 0.35)',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px) scale(1.02)'
                    e.currentTarget.style.boxShadow = '0 0 28px rgba(214, 253, 112, 0.55)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(214, 253, 112, 0.35)'
                  }}
                >
                  <span>Explore Quelp</span>
                  <div
                    style={{
                      width: '1.25rem',
                      height: '1.25rem',
                      borderRadius: '50%',
                      background: '#0f0f0f',
                      color: '#d6fd70',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </button>

                {/* Mobile Menu Hamburger Trigger */}
                <button
                  className="menu-button"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Toggle navigation menu"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    display: 'none',
                    padding: '0.55rem',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div className="nav-button_component" style={{ width: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div
                      className="nav-button_line is-first"
                      style={{
                        height: '2px',
                        background: mobileOpen ? '#d6fd70' : '#ffffff',
                        borderRadius: '2px',
                        transition: 'all 0.25s ease',
                        transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
                      }}
                    />
                    <div
                      className="nav-button_line is-second"
                      style={{
                        height: '2px',
                        background: mobileOpen ? '#d6fd70' : '#ffffff',
                        borderRadius: '2px',
                        transition: 'all 0.25s ease',
                        opacity: mobileOpen ? 0 : 1,
                      }}
                    />
                    <div
                      className="nav-button_line is-third"
                      style={{
                        height: '2px',
                        background: mobileOpen ? '#d6fd70' : '#ffffff',
                        borderRadius: '2px',
                        transition: 'all 0.25s ease',
                        transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
                      }}
                    />
                  </div>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div
            style={{
              background: 'rgba(12, 12, 12, 0.98)',
              padding: '1.25rem 1.5rem 1.75rem',
              borderBottom: '1px solid rgba(214, 253, 112, 0.2)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.9)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
              backdropFilter: 'blur(24px)',
            }}
          >
            <div
              style={{
                fontFamily: 'Geist Mono, monospace',
                fontSize: '0.65rem',
                color: 'rgba(255, 255, 255, 0.4)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.4rem',
                paddingLeft: '0.5rem',
              }}
            >
              // Navigation Index
            </div>

            {navItems.map((item, idx) => {
              const active = isItemActive(item)
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.isPage) {
                      navTo(item.id)
                    } else {
                      navTo(item.page, item.sectionId)
                    }
                  }}
                  className="mobile-nav-link"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 0.85rem',
                    textAlign: 'left',
                    background: active ? 'rgba(214, 253, 112, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                    border: active ? '1px solid rgba(214, 253, 112, 0.3)' : '1px solid rgba(255, 255, 255, 0.04)',
                    borderRadius: '0.5rem',
                    width: '100%',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    color: active ? '#d6fd70' : '#ffffff',
                    fontWeight: 600,
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: '0.7rem', color: active ? '#d6fd70' : 'rgba(255, 255, 255, 0.35)' }}>
                      0{idx + 1}
                    </span>
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span
                      style={{
                        fontSize: '0.6rem',
                        fontFamily: 'Geist Mono, monospace',
                        fontWeight: 700,
                        color: '#0f0f0f',
                        background: '#d6fd70',
                        padding: '0.15rem 0.45rem',
                        borderRadius: '9999px',
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              )
            })}

            {/* Mobile Drawer CTA */}
            <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <button
                onClick={() => navTo('products')}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  fontSize: '0.875rem',
                  background: '#d6fd70',
                  color: '#0f0f0f',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  boxShadow: '0 0 16px rgba(214, 253, 112, 0.35)',
                }}
              >
                <span>Launch Quelp Platform</span>
                <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                  <path d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 1024px) {
          .nav_wrap { display: none !important; }
          .nav-telemetry { display: none !important; }
          .menu-button { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
