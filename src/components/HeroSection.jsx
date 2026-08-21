import { useState, useRef, useEffect } from 'react'

// Curated Dark Forest, Dark Oak & Ferns imagery with macOS glass accents
const CAROUSEL_IMAGES = [
  '/images/dark-oak-ferns-hero.jpg',
  '/images/dark-oak-ferns-glass.jpg',
  '/images/macos-liquid-glass-hero.jpg',
  '/images/macos-glass-pane.jpg',
  '/images/liquid-glass-dewdrop.jpg',
  '/images/eco-card-1.jpg',
  '/images/eco-card-2.jpg',
  '/images/helpdesk_inbox_ui_1784657456203.jpg',
  '/images/permafix_ai_ui_1784657484270.jpg',
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
  const radius = 360

  // Continuous slow auto-rotation (pauses on hover or drag)
  useEffect(() => {
    let animId
    const autoRotate = () => {
      if (!isDraggingRef.current && !isHoveredRef.current) {
        setRotationY((prev) => (prev + 0.045) % 360)
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
        padding: '2.5rem 0',
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
          width: '250px',
          height: '165px',
          margin: '0 auto',
          transformStyle: 'preserve-3d',
          transform: `rotateX(-4deg) rotateY(${rotationY}deg)`,
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
                width: '250px',
                height: '165px',
                left: 0,
                top: 0,
                transformStyle: 'preserve-3d',
                transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                borderRadius: '1rem',
                overflow: 'hidden',
                background: 'rgba(2, 8, 4, 0.6)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
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
                  borderRadius: '1rem',
                }}
              />
              {/* macOS subtle glass reflection */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.14) 0%, transparent 60%)',
                  pointerEvents: 'none',
                  borderRadius: '1rem',
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
          marginTop: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          color: '#64748b',
          fontSize: '0.8125rem',
          fontWeight: 500,
          letterSpacing: '-0.01em',
        }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.03)', padding: '0.35rem 0.85rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
          {hasDragged ? 'Orbiting forest stage' : 'Drag to rotate stage'}
        </span>
      </div>
    </div>
  )
}

export default function HeroSection({ onNavigate }) {
  return (
    <section className="section_hero" id="home" style={{ position: 'relative', overflow: 'hidden', minHeight: '92vh', paddingTop: '4.5rem' }}>
      {/* Moody Dark Oak, Ferns & Water Lillies Backdrop */}
      <img
        src="/images/dark-oak-ferns-hero.jpg"
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
          opacity: 0.38,
          pointerEvents: 'none',
          filter: 'contrast(1.05) brightness(0.85)',
        }}
      />

      {/* Dark atmospheric forest gradient vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 20%, rgba(2, 10, 5, 0.4) 0%, rgba(2, 7, 4, 0.9) 70%, #020603 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Hero text content */}
      <div className="hero_wrap" style={{ position: 'relative', zIndex: 5 }}>
        <div className="padding-global is-hero" style={{ width: '100%' }}>
          <div className="vertical-center">
            {/* macOS Glass Capsule Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.35rem 0.9rem',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                color: '#cbd5e1',
                fontSize: '0.8125rem',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                marginBottom: '1.75rem',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 6px rgba(52,211,153,0.8)' }} />
              <span>Dark Oak &amp; Ferns • macOS Glass Architecture</span>
            </div>

            <h1 className="text-align-center" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', letterSpacing: '-0.035em', lineHeight: 1.06, color: '#ffffff', fontWeight: 700 }}>
              The quiet, white-label <br />
              <span style={{
                background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                support platform for growing teams
              </span>
            </h1>

            <div className="spacer-medium" />

            <div className="max-width-medium" style={{ maxWidth: '42rem' }}>
              <div className="text-base text-align-center" style={{ color: '#94a3b8', fontSize: '1.125rem', lineHeight: 1.6, fontWeight: 400 }}>
                Quelp unifies mail relay, real-time inboxes, and self-service knowledge in an organic, deeply reliable ecosystem engineered with Apple-level minimalism.
              </div>
            </div>

            <div className="spacer-large" />

            <div className="button_wrapper is-hero" style={{ display: 'flex', gap: '0.875rem', alignItems: 'center' }}>
              <button
                onClick={() => onNavigate && onNavigate('products')}
                className="button"
                style={{
                  background: 'linear-gradient(180deg, rgba(52, 211, 153, 0.9) 0%, rgba(16, 185, 129, 0.85) 100%)',
                  color: '#020f06',
                  border: '1px solid rgba(255, 255, 255, 0.35)',
                  padding: '0.75rem 1.65rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(20px)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                Explore Quelp Platform
              </button>

              <button
                onClick={() => onNavigate && onNavigate('home', 'roadmap')}
                className="button-arrow is-black"
                style={{
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  padding: '0.45rem 0.5rem 0.45rem 1.35rem',
                  borderRadius: '9999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  cursor: 'pointer',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                }}
              >
                <span style={{ color: '#f1f5f9', fontWeight: 500, fontSize: '0.9375rem' }}>
                  Architecture
                </span>
                <div
                  className="button_container-arrow is-black"
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z" fill="#f1f5f9" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ height: '1rem' }} />

      {/* Interactive 3D Merry-Go-Round */}
      <MerryGoRound />

      {/* Rating badge */}
      <div className="rating" style={{ position: 'relative', margin: '1.5rem auto 2.5rem', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ color: '#64748b', fontSize: '0.8125rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ color: '#10b981' }}>★ 4.9/5</span>
          <span>satisfaction across 4,900+ growing teams</span>
        </div>
      </div>
    </section>
  )
}


