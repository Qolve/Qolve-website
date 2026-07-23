import { useState, useRef, useEffect } from 'react'

// 8 Tailored Cards for Qolve Support Platform 3D Ring
const CAROUSEL_ITEMS = [
  {
    title: 'Omnichannel Helpdesk',
    badge: 'Core Feature',
    desc: 'Unified ticket inbox consolidating email, live web chat & customer support portal streams.',
    imgSrc: '/images/helpdesk_inbox_ui_1784657456203.jpg',
    snippetTag: 'Live Inbox',
    snippetText: 'Multi-channel ticket queue & customer context',
  },
  {
    title: '100% White-Label Suite',
    badge: 'Core Feature',
    desc: 'Custom CNAME domain mapping, color palette customization & branded portal experience.',
    imgSrc: '/images/whitelabel_branding_ui_1784657470405.jpg',
    snippetTag: 'White-Label Domain',
    snippetText: 'Custom CNAME domain & theme styling',
  },
  {
    title: 'Permafix AI Assistant',
    badge: 'Coming Soon',
    desc: 'Grounded knowledge base matching, ticket classification & automated draft replies.',
    imgSrc: '/images/permafix_ai_ui_1784657484270.jpg',
    snippetTag: 'Coming Soon • In Development',
    snippetText: 'Grounded AI ticket suggestion engine',
  },
  {
    title: 'Resilient Mail Relay',
    badge: 'Core Feature',
    desc: 'Dedicated email server container + outbound relay for verified deliverability.',
    imgSrc: '/images/mail_relay_ui_1784657498874.jpg',
    snippetTag: 'Email Ingestion',
    snippetText: 'SPF, DKIM & DMARC deliverability suite',
  },
  {
    title: 'Real-Time SLA Engine',
    badge: 'Coming Soon',
    desc: 'Live response countdown timers, priority escalation rules & breach alerts.',
    imgSrc: '/images/sla_engine_ui_1784657513405.jpg',
    snippetTag: 'Coming Soon • Planned',
    snippetText: 'Custom SLA countdowns & escalation rules',
  },
  {
    title: 'CSAT & Queue Analytics',
    badge: 'Coming Soon',
    desc: 'Customer satisfaction scoring, resolution time trends & team performance reports.',
    imgSrc: '/images/csat_analytics_ui_1784657527955.jpg',
    snippetTag: 'Coming Soon • Planned',
    snippetText: 'Queue analytics & satisfaction tracking',
  },
  {
    title: 'RBAC & Multi-Tenancy',
    badge: 'Core Feature',
    desc: 'Isolated tenant workspaces, role-based access control & secure authentication.',
    imgSrc: '/images/rbac_security_ui_1784657541898.jpg',
    snippetTag: 'Workspace Security',
    snippetText: 'Tenant data isolation & role permissions',
  },
  {
    title: 'Webhooks & Developer API',
    badge: 'Coming Soon',
    desc: 'Signed webhook events, REST API endpoints & custom integration triggers.',
    imgSrc: '/images/webhooks_api_ui_1784657557989.jpg',
    snippetTag: 'Coming Soon • Planned',
    snippetText: 'Developer API access & webhook events',
  },
]

function MerryGoRound() {
  const [rotationY, setRotationY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [activeItem, setActiveItem] = useState(null)
  const isDraggingRef = useRef(false)
  const isHoveredRef = useRef(false)
  const startXRef = useRef(0)
  const startRotationRef = useRef(0)

  const numCards = 8
  const angleStep = 360 / numCards // 45 degrees per card for 8-card ring
  const radius = 480 // 3D ring radius for 8 orbiting cards

  // Continuous slow rotation loop (80% slower speed, pauses on hover or drag)
  useEffect(() => {
    let animId
    const autoRotate = () => {
      if (!isDraggingRef.current && !isHoveredRef.current && !activeItem) {
        setRotationY((prev) => (prev + 0.05) % 360)
      }
      animId = requestAnimationFrame(autoRotate)
    }
    animId = requestAnimationFrame(autoRotate)
    return () => cancelAnimationFrame(animId)
  }, [activeItem])

  const handlePointerDown = (e) => {
    e.preventDefault()
    setIsDragging(true)
    isDraggingRef.current = true
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    startXRef.current = clientX
    startRotationRef.current = rotationY
  }

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const deltaX = clientX - startXRef.current
    setRotationY(startRotationRef.current + deltaX * 0.4)
  }

  const handlePointerUp = () => {
    setIsDragging(false)
    isDraggingRef.current = false
  }

  useEffect(() => {
    const onUp = () => handlePointerUp()
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
    }
  }, [])

  return (
    <div
      style={{
        width: '100%',
        perspective: '1500px',
        padding: '3.5rem 0 2.5rem',
        position: 'relative',
        zIndex: 10,
        isolation: 'isolate',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'pan-y',
        overflow: 'hidden',
      }}
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onMouseEnter={() => { isHoveredRef.current = true }}
      onMouseLeave={() => { isHoveredRef.current = false }}
    >
      {/* 3D Carousel Stage */}
      <div
        style={{
          position: 'relative',
          width: '280px',
          height: '190px',
          margin: '0 auto',
          transformStyle: 'preserve-3d',
          transform: `rotateX(-7deg) rotateY(${rotationY}deg)`,
          transition: isDragging ? 'none' : 'transform 0.1s linear',
        }}
      >
        {CAROUSEL_ITEMS.map((item, i) => {
          const itemAngle = i * angleStep
          return (
            <div
              key={i}
              onClick={() => setActiveItem(item)}
              style={{
                position: 'absolute',
                width: '280px',
                height: '190px',
                left: 0,
                top: 0,
                transformStyle: 'preserve-3d',
                transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                borderRadius: '1.125rem',
                overflow: 'hidden',
                background: '#ffffff',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                boxShadow: 'none',
                backfaceVisibility: 'visible',
                WebkitBackfaceVisibility: 'visible',
                isolation: 'isolate',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'border-color 0.2s ease, transform 0.2s ease',
              }}
            >
              {/* Card Content Overlay - Clean White & Dark Text */}
              <div style={{ position: 'relative', zIndex: 2, padding: '1.125rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                {/* Header Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    className="geistmono"
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      padding: '0.22rem 0.55rem',
                      borderRadius: '9999px',
                      background: '#0f0f0f',
                      color: '#ffffff',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {item.badge}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0f0f0f' }} />
                    <span className="geistmono" style={{ fontSize: '0.65rem', color: '#666666', fontWeight: 600 }}>LIVE</span>
                  </div>
                </div>

                {/* UI Snippet Box */}
                <div style={{
                  background: '#f5f5f7',
                  border: '1px solid #e2e2e7',
                  borderRadius: '0.5rem',
                  padding: '0.45rem 0.65rem',
                  margin: '0.35rem 0',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.15rem' }}>
                    <span className="geistmono" style={{ fontSize: '0.65rem', color: '#0f0f0f', fontWeight: 700 }}>{item.snippetTag}</span>
                  </div>
                  <div style={{ fontSize: '0.725rem', color: '#333333', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {item.snippetText}
                  </div>
                </div>

                {/* Footer Title & Subtitle */}
                <div>
                  <h4 style={{ color: '#0f0f0f', fontSize: '1rem', fontWeight: 800, margin: '0 0 0.15rem 0', letterSpacing: '-0.01em' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: '#555555', fontSize: '0.725rem', margin: 0, lineHeight: 1.3 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Interactive Item Modal / Detail View */}
      {activeItem && (
        <div
          onClick={() => setActiveItem(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#ffffff',
              border: '1px solid #0f0f0f',
              borderRadius: '1.25rem',
              maxWidth: '560px',
              width: '100%',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: 'none',
              padding: '2rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span className="geistmono" style={{ background: '#0f0f0f', color: '#ffffff', padding: '0.3rem 0.8rem', borderRadius: '9999px', fontWeight: 700, fontSize: '0.75rem' }}>
                {activeItem.badge}
              </span>
              <button onClick={() => setActiveItem(null)} style={{ background: 'none', border: 'none', color: '#0f0f0f', fontSize: '1.75rem', cursor: 'pointer', fontWeight: 700 }}>×</button>
            </div>
            <h3 style={{ color: '#0f0f0f', fontSize: '1.625rem', fontWeight: 800, marginBottom: '0.75rem' }}>{activeItem.title}</h3>
            <p style={{ color: '#444444', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{activeItem.desc}</p>
            <div style={{ background: '#f5f5f7', padding: '1.25rem', borderRadius: '0.875rem', border: '1px solid #e0e0e0' }}>
              <span className="geistmono" style={{ color: '#0f0f0f', fontSize: '0.8125rem', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}>{activeItem.snippetTag}</span>
              <span style={{ color: '#222222', fontSize: '0.9375rem', fontWeight: 500 }}>{activeItem.snippetText}</span>
            </div>
          </div>
        </div>
      )}

      {/* Drag hint badge */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          color: 'rgba(255,255,255,0.85)',
          fontSize: '0.8125rem',
          fontWeight: 600,
          letterSpacing: '0.02em',
        }}
      >
        <span>✨ 8 Platform Capabilities — Solid white cards • Hover to pause • Click for details</span>
      </div>
    </div>
  )
}




export default function HeroSection({ onNavigate }) {
  return (
    <section className="section_hero" id="home">
      {/* Original Aeline Blue Hero Background Image */}
      <img
        src="https://cdn.prod.website-files.com/6929c116366a14507fc8424d/6929d3408e9ff6a515b9eee8_ai-hero%20(1).avif"
        loading="lazy"
        alt=""
        className="img is-hero"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
          opacity: 0.65,
          pointerEvents: 'none',
          filter: 'none',
          mixBlendMode: 'normal',
        }}
      />

      {/* Hero text content - Tailored specifically for Qolve */}
      <div className="hero_wrap">
        <div className="padding-global is-hero" style={{ width: '100%' }}>
          <div className="vertical-center">
            {/* Startup Brand Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.375rem 0.875rem',
                borderRadius: '9999px',
                background: 'rgba(214, 253, 112, 0.12)',
                border: '1px solid rgba(214, 253, 112, 0.3)',
                color: '#d6fd70',
                fontSize: '0.8125rem',
                fontWeight: 600,
                marginBottom: '1.25rem',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#d6fd70' }} />
              Welcome to Qolve
            </div>

            <h1 className="text-align-center">
              Reinventing Customer Support with <br />
              <span className="opacity-73">Qolve &amp; Intelligent Automation</span>
            </h1>

            <div className="spacer-medium" />

            <div className="max-width-medium">
              <div className="text-base text-color-on-primary text-align-center">
                Quelp is a fully branded, lower-cost customer support platform for growing businesses. Unify email, chat, and knowledge base in one intelligent, seamlessly styled platform.
              </div>
            </div>

            <div className="spacer-huge" />

            <div className="button_wrapper is-hero">
              <button
                onClick={() => onNavigate && onNavigate('products')}
                className="button"
                style={{
                  background: 'transparent',
                  color: '#fff',
                  border: '1.5px solid rgba(255,255,255,0.35)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <div className="text-button-wrap">
                  <div>Explore Products</div>
                </div>
              </button>

              <a
                href="#contact"
                className="button-arrow"
                style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', cursor: 'pointer' }}
              >
                <div className="button-arrow_wrap">
                  <div className="button-arrow_text">
                    <div className="text_button" style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.9375rem' }}>
                      Get Started
                    </div>
                  </div>
                  <div
                    className="button_container-arrow"
                    style={{ width: '2.75rem', height: '2.75rem', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f0f0f', flexShrink: 0 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="button-arrow_bg" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer between text and Merry-Go-Round */}
      <div style={{ height: '1.5rem' }} />

      {/* Interactive 3D Merry-Go-Round */}
      <MerryGoRound />

      <div className="_3d_spacer" />

      {/* Rating badge */}
      <div className="rating" style={{ position: 'relative', bottom: 'auto', marginBottom: '2rem', transform: 'none', left: 'auto', zIndex: 10 }}>
        <div className="text-color-on-primary" style={{ fontSize: '0.875rem' }}>
          Rated 4.9/5 by 4.900+ clients
        </div>
        <div className="spacer-xsmall" />
        <div className="stars-wrap">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="icon-1x1-small">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none">
                <path d="M3.88203 13.9987L4.96536 9.31536L1.33203 6.16536L6.13203 5.7487L7.9987 1.33203L9.86536 5.7487L14.6654 6.16536L11.032 9.31536L12.1154 13.9987L7.9987 11.5154L3.88203 13.9987Z" fill="#F1EE46" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
