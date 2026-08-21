import { useState, useRef, useEffect } from 'react'

// Liquid Glass & Botanical imagery curated for the 3D carousel
const CAROUSEL_IMAGES = [
  '/images/liquid-glass-hero.jpg',
  '/images/liquid-glass-dewdrop.jpg',
  '/images/eco-hero-canopy.jpg',
  '/images/eco-card-1.jpg',
  '/images/eco-card-2.jpg',
  '/images/eco-card-3.jpg',
  '/images/helpdesk_inbox_ui_1784657456203.jpg',
  '/images/permafix_ai_ui_1784657484270.jpg',
  '/images/whitelabel_branding_ui_1784657470405.jpg',
]

function MerryGoRound() {
  const [rotationY, setRotationY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [hasDragged, setHasDragged] = useState(false)
  const isDraggingRef = useRef(false)
  const isHoveredRef = useRef(false)
  const startXRef = useRef(0)
  const startRotationRef = useRef(0)
  const velocityRef = useRef(0)
  const lastXRef = useRef(0)
  const animFrameRef = useRef(null)

  const numCards = CAROUSEL_IMAGES.length
  const angleStep = 360 / numCards
  const radius = 350

  // Continuous slow auto-rotation (pauses on hover or drag)
  useEffect(() => {
    let animId
    const autoRotate = () => {
      if (!isDraggingRef.current && !isHoveredRef.current) {
        setRotationY((prev) => (prev + 0.06) % 360)
      }
      animId = requestAnimationFrame(autoRotate)
    }
    animId = requestAnimationFrame(autoRotate)
    return () => cancelAnimationFrame(animId)
  }, [])

  const handlePointerDown = (e) => {
    e.preventDefault()
    setIsDragging(true)
    setHasDragged(true)
    isDraggingRef.current = true
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    startXRef.current = clientX
    lastXRef.current = clientX
    startRotationRef.current = rotationY
    velocityRef.current = 0
  }

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const deltaX = clientX - startXRef.current
    const stepDelta = clientX - lastXRef.current
    lastXRef.current = clientX
    velocityRef.current = stepDelta * 0.3
    setRotationY(startRotationRef.current + deltaX * 0.4)
  }

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return
    setIsDragging(false)
    isDraggingRef.current = false

    let currentVel = velocityRef.current
    let currentRot = rotationY
    const decay = () => {
      if (Math.abs(currentVel) > 0.05) {
        currentRot += currentVel
        currentVel *= 0.93
        setRotationY(currentRot)
        animFrameRef.current = requestAnimationFrame(decay)
      }
    }
    animFrameRef.current = requestAnimationFrame(decay)
  }

  useEffect(() => {
    const onUp = () => handlePointerUp()
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
    }
  }, [isDragging, rotationY])

  return (
    <div
      style={{
        width: '100%',
        perspective: '1400px',
        padding: '3rem 0',
        position: 'relative',
        zIndex: 10,
        isolation: 'isolate',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'pan-y',
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
          width: '240px',
          height: '160px',
          margin: '0 auto',
          transformStyle: 'preserve-3d',
          transform: `rotateX(-5deg) rotateY(${rotationY}deg)`,
          transition: isDragging ? 'none' : 'transform 0.05s ease-out',
        }}
      >
        {CAROUSEL_IMAGES.map((src, i) => {
          const itemAngle = i * angleStep
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '240px',
                height: '160px',
                left: 0,
                top: 0,
                transformStyle: 'preserve-3d',
                transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                borderRadius: '1.25rem',
                overflow: 'hidden',
                background: 'rgba(10, 30, 20, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1.5px solid rgba(255, 255, 255, 0.35)',
                boxShadow: '0 20px 50px rgba(0,25,12,0.85), 0 0 25px rgba(52,211,153,0.25), inset 0 1.5px 2px rgba(255,255,255,0.7)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                isolation: 'isolate',
              }}
            >
              <img
                src={src}
                alt=""
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  pointerEvents: 'none',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  WebkitUserDrag: 'none',
                  borderRadius: '1.25rem',
                }}
              />
              {/* Glossy liquid glass specular overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.02) 40%, rgba(52,211,153,0.1) 100%)',
                  pointerEvents: 'none',
                  borderRadius: '1.25rem',
                }}
              />
            </div>
          )
        })}
      </div>

      {/* Drag hint */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '2.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          color: '#a7f3d0',
          fontSize: '0.8125rem',
          fontWeight: 600,
          letterSpacing: '0.04em',
          textShadow: '0 2px 10px rgba(0,20,10,0.8)',
        }}
      >
        <span>{hasDragged ? '💧 Drag sideways to orbit liquid greenhouse' : '✨ Click & drag sideways to rotate liquid glass carousel'}</span>
      </div>
    </div>
  )
}

export default function HeroSection({ onNavigate }) {
  return (
    <section className="section_hero" id="home" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {/* Liquid Glass & Botanical Hero Backdrop Image */}
      <img
        src="/images/liquid-glass-hero.jpg"
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
          opacity: 0.55,
          pointerEvents: 'none',
          filter: 'saturate(1.2) contrast(1.05)',
        }}
      />

      {/* Soft botanical ambient caustics overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 30%, rgba(4, 20, 12, 0.4) 0%, rgba(3, 14, 8, 0.85) 75%, #030e07 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Hero text content */}
      <div className="hero_wrap" style={{ position: 'relative', zIndex: 5 }}>
        <div className="padding-global is-hero" style={{ width: '100%' }}>
          <div className="vertical-center">
            {/* Liquid Dewdrop Pill Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.45rem 1.125rem',
                borderRadius: '9999px',
                background: 'radial-gradient(120% 120% at 30% 0%, rgba(255,255,255,0.3) 0%, rgba(16,185,129,0.2) 60%, rgba(5,46,26,0.5) 100%)',
                border: '1px solid rgba(110, 231, 183, 0.5)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                color: '#6ee7b7',
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                marginBottom: '1.5rem',
                boxShadow: '0 8px 25px rgba(0, 25, 12, 0.5), inset 0 1px 1.5px rgba(255,255,255,0.6)',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 10px #34d399' }} />
              🌿 Liquid Architecture • Eco-Engineered Support Infrastructure
            </div>

            <h1 className="text-align-center" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.75rem)', letterSpacing: '-0.03em', lineHeight: 1.08, color: '#f8fafc', textShadow: '0 4px 25px rgba(0,25,12,0.8)' }}>
              Reinventing Customer Support with <br />
              <span style={{
                background: 'linear-gradient(135deg, #a7f3d0 0%, #34d399 50%, #6ee7b7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Qolve &amp; Fluid Intelligence
              </span>
            </h1>

            <div className="spacer-medium" />

            <div className="max-width-medium" style={{ maxWidth: '44rem' }}>
              <div className="text-base text-align-center" style={{ color: '#cbd5e1', fontSize: '1.125rem', lineHeight: 1.6, textShadow: '0 2px 10px rgba(0,20,10,0.6)' }}>
                Quelp is an organic, white-label customer support ecosystem for growing businesses. Unify email relay, chat inboxes, and self-service knowledge in one fluid, biophilic platform.
              </div>
            </div>

            <div className="spacer-large" />

            <div className="button_wrapper is-hero" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <button
                onClick={() => onNavigate && onNavigate('products')}
                className="button"
                style={{
                  background: 'linear-gradient(135deg, rgba(52, 211, 153, 0.95) 0%, rgba(16, 185, 129, 0.95) 100%)',
                  color: '#03150b',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 15px 35px rgba(16, 185, 129, 0.5), inset 0 1.5px 2px rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(20px)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div className="text-button-wrap">
                  <div>Explore Quelp Platform</div>
                </div>
              </button>

              <button
                onClick={() => onNavigate && onNavigate('home', 'roadmap')}
                className="button-arrow"
                style={{
                  background: 'radial-gradient(120% 120% at 30% 0%, rgba(255,255,255,0.2) 0%, rgba(12,38,24,0.75) 60%, rgba(4,18,11,0.85) 100%)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  padding: '0.5rem 0.6rem 0.5rem 1.5rem',
                  borderRadius: '9999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  cursor: 'pointer',
                  boxShadow: '0 12px 30px rgba(0,20,10,0.5), inset 0 1.5px 2px rgba(255,255,255,0.5)',
                }}
              >
                <span style={{ color: '#f8fafc', fontWeight: 600, fontSize: '0.9375rem' }}>
                  Architecture Pillars
                </span>
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6ee7b7 0%, #10b981 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#03150b',
                    boxShadow: '0 0 15px rgba(52, 211, 153, 0.4)',
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z" fill="#03150b" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ height: '1.5rem' }} />

      {/* Interactive 3D Merry-Go-Round */}
      <MerryGoRound />

      {/* Eco Rating badge */}
      <div className="rating" style={{ position: 'relative', margin: '2rem auto 3rem', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ color: '#a7f3d0', fontSize: '0.875rem', fontWeight: 600, textShadow: '0 2px 8px rgba(0,20,10,0.6)' }}>
          🌿 Rated 4.9/5 by 4,900+ active SaaS teams &amp; operators
        </div>
        <div className="spacer-xsmall" />
        <div className="stars-wrap">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="icon-1x1-small" style={{ color: '#34d399' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M3.88203 13.9987L4.96536 9.31536L1.33203 6.16536L6.13203 5.7487L7.9987 1.33203L9.86536 5.7487L14.6654 6.16536L11.032 9.31536L12.1154 13.9987L7.9987 11.5154L3.88203 13.9987Z" fill="#34d399" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
