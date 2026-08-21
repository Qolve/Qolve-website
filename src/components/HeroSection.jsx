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
    <header className="relative w-full min-h-[850px] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden" id="home">
      {/* Cinematic Dark Pine Forest Background */}
      <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(13, 15, 14, 0.4) 0%, transparent 40%, rgba(13, 15, 14, 0.8) 80%, #0d0f0e 100%)',
            zIndex: 1,
          }}
        />
        <img
          src="/images/verdant-forest-hero.jpg"
          loading="lazy"
          alt="Dark Pine Forest"
          className="w-full h-full object-cover object-center filter brightness-50"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.42) contrast(1.1)' }}
        />
      </div>

      {/* Floating Glass Hero Card */}
      <div
        className="relative z-20 w-[92%] md:w-[75%] max-w-[820px] glass-panel rounded-2xl p-8 md:p-16 text-center"
        style={{
          borderRadius: '1.5rem',
          margin: '2rem auto 3rem',
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 30px 60px rgba(0,0,0,0.5)',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.3rem 0.85rem',
            borderRadius: '9999px',
            background: 'rgba(45, 75, 62, 0.35)',
            border: '1px solid rgba(173, 206, 189, 0.25)',
            color: '#adcebd',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.75rem',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#adcebd', boxShadow: '0 0 8px rgba(173, 206, 189, 0.8)' }} />
          <span>Architecture of Quiet Support</span>
        </div>

        <h1
          className="text-glow"
          style={{
            fontFamily: 'Hanken Grotesk, sans-serif',
            fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: '-0.035em',
            color: '#e2e3e0',
            marginBottom: '1.5rem',
          }}
        >
          The Architecture <br className="hidden sm:inline" />
          of Quiet Support
        </h1>

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            fontWeight: 400,
            lineHeight: 1.6,
            color: '#c1c8c3',
            maxWidth: '38rem',
            margin: '0 auto 2.5rem',
          }}
        >
          Precision engineering meets raw, untamed efficiency. Deliver high-trust white-label customer support that breathes with your brand.
        </p>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => onNavigate && onNavigate('products')}
            style={{
              background: '#2d4b3e',
              color: '#e2e3e0',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '0.9rem 2rem',
              borderRadius: '0.5rem',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9375rem',
              fontWeight: 500,
              cursor: 'pointer',
              boxShadow: '0 10px 25px -5px rgba(0,0,0,0.4)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#375d4d'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#2d4b3e'
            }}
          >
            Explore Quelp Platform
          </button>

          <button
            onClick={() => onNavigate && onNavigate('home', 'roadmap')}
            className="glass-panel"
            style={{
              padding: '0.9rem 1.8rem',
              borderRadius: '0.5rem',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9375rem',
              fontWeight: 500,
              color: '#e2e3e0',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.85 }}>
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span>View Architecture</span>
          </button>
        </div>
      </div>

      {/* Interactive 3D Merry-Go-Round */}
      <div style={{ width: '100%', position: 'relative', zIndex: 15 }}>
        <MerryGoRound />
      </div>
    </header>
  )
}



