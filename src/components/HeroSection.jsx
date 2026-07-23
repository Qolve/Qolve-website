import { useState, useRef, useEffect } from 'react'

// Original card images from Aeline template
const CAROUSEL_IMAGES = [
  'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007e9793bec9aef0bae6_card.avif',
  'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007db9ab99a268357410_card-3.avif',
  'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007d21f950db130e28c9_card-6.avif',
  'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007eb87553c5aa32934f_card-1.avif',
  'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007e27ef20e6e3edd02e_card-4.avif',
  'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007e9468539ba66cdd61_card-7.avif',
  'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007dd38878bbefc784aa_card-8.avif',
  'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007d920bdd6882dc8eb7_card-2.avif',
  'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007d1354bb8698409c38_card-5.avif',
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
  const radius = 340

  // Continuous slow auto-rotation (pauses on hover or drag)
  useEffect(() => {
    let animId
    const autoRotate = () => {
      if (!isDraggingRef.current && !isHoveredRef.current) {
        setRotationY((prev) => (prev + 0.05) % 360)
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
        currentVel *= 0.92
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
        perspective: '1200px',
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
          width: '220px',
          height: '150px',
          margin: '0 auto',
          transformStyle: 'preserve-3d',
          transform: `rotateX(-6deg) rotateY(${rotationY}deg)`,
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
                width: '220px',
                height: '150px',
                left: 0,
                top: 0,
                transformStyle: 'preserve-3d',
                transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                borderRadius: '0.875rem',
                overflow: 'hidden',
                backgroundColor: '#141414',
                boxShadow: '0 16px 40px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.18)',
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
                  borderRadius: '0.875rem',
                  opacity: 1,
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
          color: 'rgba(255,255,255,0.7)',
          fontSize: '0.8125rem',
          fontWeight: 500,
          letterSpacing: '0.02em',
          textShadow: '0 2px 8px rgba(0,0,0,0.8)',
        }}
      >
        <span>{hasDragged ? 'Click & drag sideways to spin' : '✨ Click & drag sideways to spin merry-go-round'}</span>
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
