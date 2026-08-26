import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ activePage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownTimeoutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navTo = (page, sectionId) => {
    setMobileOpen(false)
    setDropdownOpen(false)
    if (onNavigate) {
      onNavigate(page, sectionId)
    }
  }

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setDropdownOpen(true)
  }

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false)
    }, 180)
  }

  const overviewSections = [
    {
      group: 'Core Architecture',
      items: [
        {
          id: 'about',
          title: 'About Qolve Lab',
          desc: 'Technical product lab & white-label software engineering',
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          ),
        },
        {
          id: 'services',
          title: 'Services & Solutions',
          desc: 'Turnkey helpdesk, knowledge base & branded client hubs',
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          ),
        },
        {
          id: 'capabilities',
          title: 'Platform Capabilities',
          desc: 'Deep dive into CNAME routing, AI grounding & mail pipeline',
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          ),
        },
        {
          id: 'expertise',
          title: 'Telemetry & Systems',
          desc: 'Live edge latency, Stalwart IMAP & AWS SES relay stats',
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          ),
        },
      ],
    },
    {
      group: 'Commercial & Community',
      items: [
        {
          id: 'pricing',
          title: 'Transparent Pricing',
          desc: 'Starter, Growth & Enterprise SLA tiers with zero hidden fees',
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
          ),
        },
        {
          id: 'testimonials',
          title: 'Client Reviews',
          desc: 'Partner endorsements and live operational metrics',
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          ),
        },
        {
          id: 'blog',
          title: 'Engineering Insights',
          desc: 'Deep dives on white-label architectures and AI triage',
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          ),
        },
        {
          id: 'contact',
          title: 'Contact Lab',
          desc: 'Request custom domain deployment or pilot access',
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          ),
        },
      ],
    },
  ]

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

      {/* Main glass navigation bar */}
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

              {/* Desktop Nav Links - Clean Top-Level Dock with Dropdown */}
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
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      padding: '0.3rem 0.5rem',
                      borderRadius: '9999px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.06), 0 8px 24px rgba(0, 0, 0, 0.4)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    {/* 1. Main Page / Overview with Stylized Dropdown */}
                    <div
                      onMouseEnter={handleMouseEnterDropdown}
                      onMouseLeave={handleMouseLeaveDropdown}
                      style={{ position: 'relative' }}
                    >
                      <button
                        onClick={() => navTo('home')}
                        className="nav_links"
                        style={{
                          position: 'relative',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          background: activePage === 'home' || dropdownOpen
                            ? 'rgba(214, 253, 112, 0.12)'
                            : 'transparent',
                          borderRadius: '9999px',
                          padding: '0.42rem 0.95rem',
                          border: activePage === 'home' || dropdownOpen
                            ? '1px solid rgba(214, 253, 112, 0.35)'
                            : '1px solid transparent',
                          cursor: 'pointer',
                          color: activePage === 'home' || dropdownOpen ? '#d6fd70' : 'rgba(255, 255, 255, 0.75)',
                          fontWeight: activePage === 'home' ? 700 : 500,
                          fontSize: '0.875rem',
                          letterSpacing: '-0.01em',
                          transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                          outline: 'none',
                          textShadow: activePage === 'home' ? '0 0 12px rgba(214, 253, 112, 0.4)' : 'none',
                        }}
                      >
                        <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: '0.625rem', color: activePage === 'home' ? '#d6fd70' : 'rgba(255, 255, 255, 0.35)' }}>
                          01
                        </span>
                        <span>Overview</span>
                        
                        {/* Animated Micro Chevron */}
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          style={{
                            transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.25s ease',
                            opacity: 0.75,
                          }}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>

                      {/* Stylized Frosted Glass Dropdown Menu */}
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                              position: 'absolute',
                              top: 'calc(100% + 0.65rem)',
                              left: '-1rem',
                              width: '36rem',
                              background: 'rgba(14, 14, 16, 0.97)',
                              backdropFilter: 'blur(32px) saturate(200%)',
                              WebkitBackdropFilter: 'blur(32px) saturate(200%)',
                              border: '1px solid rgba(255, 255, 255, 0.09)',
                              borderRadius: '1rem',
                              padding: '1.25rem',
                              boxShadow: '0 24px 64px -12px rgba(0, 0, 0, 0.95), 0 0 1px 1px rgba(214, 253, 112, 0.25)',
                              zIndex: 150,
                            }}
                          >
                            {/* Hairline top gradient */}
                            <div
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: '15%',
                                right: '15%',
                                height: '1px',
                                background: 'linear-gradient(90deg, transparent 0%, rgba(214, 253, 112, 0.6) 50%, transparent 100%)',
                              }}
                            />

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                              {overviewSections.map((grp, gIdx) => (
                                <div key={gIdx} style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                                  <div
                                    style={{
                                      fontFamily: 'Geist Mono, monospace',
                                      fontSize: '0.625rem',
                                      color: '#d6fd70',
                                      letterSpacing: '0.08em',
                                      textTransform: 'uppercase',
                                      fontWeight: 700,
                                      paddingLeft: '0.5rem',
                                      marginBottom: '0.2rem',
                                    }}
                                  >
                                    // {grp.group}
                                  </div>

                                  {grp.items.map((sec) => (
                                    <button
                                      key={sec.id}
                                      onClick={() => navTo('home', sec.id)}
                                      style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.65rem',
                                        padding: '0.55rem 0.65rem',
                                        background: 'rgba(255, 255, 255, 0.02)',
                                        border: '1px solid rgba(255, 255, 255, 0.04)',
                                        borderRadius: '0.6rem',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        transition: 'all 0.2s ease',
                                      }}
                                      onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(214, 253, 112, 0.08)'
                                        e.currentTarget.style.borderColor = 'rgba(214, 253, 112, 0.3)'
                                        e.currentTarget.style.transform = 'translateY(-1px)'
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.04)'
                                        e.currentTarget.style.transform = 'translateY(0)'
                                      }}
                                    >
                                      <div
                                        style={{
                                          width: '1.75rem',
                                          height: '1.75rem',
                                          borderRadius: '0.4rem',
                                          background: 'rgba(255, 255, 255, 0.05)',
                                          color: '#d6fd70',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          flexShrink: 0,
                                          marginTop: '0.1rem',
                                        }}
                                      >
                                        {sec.icon}
                                      </div>
                                      <div>
                                        <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
                                          {sec.title}
                                        </div>
                                        <div style={{ fontSize: '0.6875rem', color: 'rgba(255, 255, 255, 0.45)', lineHeight: 1.35, marginTop: '0.2rem' }}>
                                          {sec.desc}
                                        </div>
                                      </div>
                                    </button>
                                  ))}
                                </div>
                              ))}
                            </div>

                            {/* Dropdown Bottom Banner */}
                            <div
                              style={{
                                marginTop: '1rem',
                                paddingTop: '0.75rem',
                                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingLeft: '0.5rem',
                                paddingRight: '0.5rem',
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#d6fd70', boxShadow: '0 0 8px #d6fd70' }} />
                                <span style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.65)', fontFamily: 'Geist Mono, monospace' }}>
                                  Quelp Support Platform • Production Ready
                                </span>
                              </div>
                              <button
                                onClick={() => navTo('products')}
                                style={{
                                  background: 'none',
                                  border: 'none',
                                  color: '#d6fd70',
                                  fontSize: '0.75rem',
                                  fontWeight: 700,
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.25rem',
                                }}
                              >
                                <span>Launch Showcase</span>
                                <span>→</span>
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* 2. Quelp Platform (Dedicated Page) */}
                    <button
                      onClick={() => navTo('products')}
                      className="nav_links"
                      style={{
                        position: 'relative',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        background: activePage === 'products'
                          ? 'rgba(214, 253, 112, 0.12)'
                          : 'transparent',
                        borderRadius: '9999px',
                        padding: '0.42rem 0.95rem',
                        border: activePage === 'products'
                          ? '1px solid rgba(214, 253, 112, 0.35)'
                          : '1px solid transparent',
                        cursor: 'pointer',
                        color: activePage === 'products' ? '#d6fd70' : 'rgba(255, 255, 255, 0.75)',
                        fontWeight: activePage === 'products' ? 700 : 500,
                        fontSize: '0.875rem',
                        letterSpacing: '-0.01em',
                        transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                        outline: 'none',
                        textShadow: activePage === 'products' ? '0 0 12px rgba(214, 253, 112, 0.4)' : 'none',
                      }}
                      onMouseEnter={(e) => {
                        if (activePage !== 'products') e.currentTarget.style.color = '#ffffff'
                      }}
                      onMouseLeave={(e) => {
                        if (activePage !== 'products') e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'
                      }}
                    >
                      <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: '0.625rem', color: activePage === 'products' ? '#d6fd70' : 'rgba(255, 255, 255, 0.35)' }}>
                        02
                      </span>
                      <span>Quelp Platform</span>
                      <span
                        style={{
                          fontSize: '0.55rem',
                          fontFamily: 'Geist Mono, monospace',
                          fontWeight: 700,
                          color: activePage === 'products' ? '#0f0f0f' : '#d6fd70',
                          background: activePage === 'products' ? '#d6fd70' : 'rgba(214, 253, 112, 0.16)',
                          border: activePage === 'products' ? 'none' : '1px solid rgba(214, 253, 112, 0.3)',
                          padding: '0.1rem 0.35rem',
                          borderRadius: '9999px',
                          letterSpacing: '0.04em',
                        }}
                      >
                        PROD
                      </span>
                    </button>

                    {/* 3. Qolve Team (Dedicated Page) */}
                    <button
                      onClick={() => navTo('team')}
                      className="nav_links"
                      style={{
                        position: 'relative',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        background: activePage === 'team'
                          ? 'rgba(214, 253, 112, 0.12)'
                          : 'transparent',
                        borderRadius: '9999px',
                        padding: '0.42rem 0.95rem',
                        border: activePage === 'team'
                          ? '1px solid rgba(214, 253, 112, 0.35)'
                          : '1px solid transparent',
                        cursor: 'pointer',
                        color: activePage === 'team' ? '#d6fd70' : 'rgba(255, 255, 255, 0.75)',
                        fontWeight: activePage === 'team' ? 700 : 500,
                        fontSize: '0.875rem',
                        letterSpacing: '-0.01em',
                        transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                        outline: 'none',
                        textShadow: activePage === 'team' ? '0 0 12px rgba(214, 253, 112, 0.4)' : 'none',
                      }}
                      onMouseEnter={(e) => {
                        if (activePage !== 'team') e.currentTarget.style.color = '#ffffff'
                      }}
                      onMouseLeave={(e) => {
                        if (activePage !== 'team') e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'
                      }}
                    >
                      <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: '0.625rem', color: activePage === 'team' ? '#d6fd70' : 'rgba(255, 255, 255, 0.35)' }}>
                        03
                      </span>
                      <span>Qolve Team</span>
                    </button>
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
              borderBottom: '1px solid rgba(214, 253, 112, 0.25)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.9)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
              backdropFilter: 'blur(24px)',
            }}
          >
            <div
              style={{
                fontFamily: 'Geist Mono, monospace',
                fontSize: '0.625rem',
                color: 'rgba(255, 255, 255, 0.4)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.4rem',
                paddingLeft: '0.5rem',
              }}
            >
              // Primary Systems
            </div>

            <button
              onClick={() => navTo('products')}
              className="mobile-nav-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 0.85rem',
                background: activePage === 'products' ? 'rgba(214, 253, 112, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                border: activePage === 'products' ? '1px solid rgba(214, 253, 112, 0.35)' : '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '0.5rem',
                color: activePage === 'products' ? '#d6fd70' : '#ffffff',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: '0.7rem', color: '#d6fd70' }}>01</span>
                <span>Quelp Platform (App)</span>
              </div>
              <span style={{ fontSize: '0.6rem', fontFamily: 'Geist Mono, monospace', color: '#0f0f0f', background: '#d6fd70', padding: '0.15rem 0.45rem', borderRadius: '9999px', fontWeight: 800 }}>PROD</span>
            </button>

            <button
              onClick={() => navTo('team')}
              className="mobile-nav-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 0.85rem',
                background: activePage === 'team' ? 'rgba(214, 253, 112, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                border: activePage === 'team' ? '1px solid rgba(214, 253, 112, 0.35)' : '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '0.5rem',
                color: activePage === 'team' ? '#d6fd70' : '#ffffff',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: '0.7rem', color: '#d6fd70' }}>02</span>
                <span>Qolve Team Roster</span>
              </div>
              <span style={{ color: '#d6fd70', fontSize: '0.85rem' }}>→</span>
            </button>

            <div
              style={{
                fontFamily: 'Geist Mono, monospace',
                fontSize: '0.625rem',
                color: 'rgba(255, 255, 255, 0.4)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginTop: '0.6rem',
                marginBottom: '0.2rem',
                paddingLeft: '0.5rem',
              }}
            >
              // Overview Sections
            </div>

            {[
              { label: 'About Qolve Lab', id: 'about' },
              { label: 'Services & Solutions', id: 'services' },
              { label: 'Platform Capabilities', id: 'capabilities' },
              { label: 'Telemetry & Systems', id: 'expertise' },
              { label: 'Transparent Pricing', id: 'pricing' },
              { label: 'Client Reviews', id: 'testimonials' },
              { label: 'Engineering Insights', id: 'blog' },
              { label: 'Contact Lab', id: 'contact' },
            ].map((sec, idx) => (
              <button
                key={sec.id}
                onClick={() => navTo('home', sec.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.6rem 0.75rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                  borderRadius: '0.45rem',
                  color: '#ffffff',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span>{sec.label}</span>
                <span style={{ color: '#d6fd70', fontSize: '0.75rem' }}>↗</span>
              </button>
            ))}

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
