import { useState, useRef, useEffect } from 'react'
import Ascii3DStarfield from './ui/Ascii3DStarfield'

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
  const [isMobile, setIsMobile] = useState(false)
  const isDraggingRef = useRef(false)
  const isHoveredRef = useRef(false)
  const startXRef = useRef(0)
  const startRotationRef = useRef(0)
  const velocityRef = useRef(0)
  const lastXRef = useRef(0)
  const animFrameRef = useRef(null)

  const numCards = CAROUSEL_IMAGES.length
  const angleStep = 360 / numCards

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const radius = isMobile ? 160 : 270
  const cardWidth = isMobile ? 130 : 185
  const cardHeight = isMobile ? 90 : 125

  // Continuous slow auto-rotation + scroll-driven rotation
  useEffect(() => {
    let animId
    const autoRotate = () => {
      if (!isDraggingRef.current && !isHoveredRef.current) {
        setRotationY((prev) => (prev + 0.05) % 360)
      }
      animId = requestAnimationFrame(autoRotate)
    }
    animId = requestAnimationFrame(autoRotate)

    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const delta = currentScrollY - lastScrollY
      lastScrollY = currentScrollY
      if (!isDraggingRef.current) {
        setRotationY((prev) => prev + delta * 0.15)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handlePointerDown = (e) => {
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

    const applyInertia = () => {
      if (Math.abs(currentVel) > 0.05) {
        currentRot += currentVel
        currentVel *= 0.95
        setRotationY(currentRot)
        animFrameRef.current = requestAnimationFrame(applyInertia)
      }
    }
    animFrameRef.current = requestAnimationFrame(applyInertia)
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
        padding: '1.25rem 0',
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
          width: `${cardWidth}px`,
          height: `${cardHeight}px`,
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
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                left: 0,
                top: 0,
                transformStyle: 'preserve-3d',
                transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                borderRadius: '0.75rem',
                overflow: 'hidden',
                backgroundColor: '#141414',
                boxShadow: '0 12px 30px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.18)',
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
                  borderRadius: '0.75rem',
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
          marginTop: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          color: 'rgba(255,255,255,0.7)',
          fontSize: '0.75rem',
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


import { motion } from 'framer-motion'
import RotatingWords from './ui/RotatingWords'

export default function HeroSection({ onNavigate }) {
  return (
    <section className="section_hero" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
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

      {/* Ambient background glow & 3D Celestial Breathing Starfield */}
      <div className="ambient-hero-glow" />
      <Ascii3DStarfield variant="hero" theme="dark" opacity={0.75} numStars={180} />

      {/* Hero text content - Tailored specifically for Qolve */}
      <div className="hero_wrap" style={{ position: 'relative', zIndex: 5 }}>
        <div className="padding-global is-hero" style={{ width: '100%' }}>
          <div className="vertical-center">
            {/* Startup Brand Pill with live pulse */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.4rem 0.95rem',
                borderRadius: '9999px',
                background: 'rgba(214, 253, 112, 0.12)',
                border: '1px solid rgba(214, 253, 112, 0.35)',
                color: '#d6fd70',
                fontSize: '0.8125rem',
                fontWeight: 600,
                marginBottom: '1.25rem',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 0 20px rgba(214, 253, 112, 0.15)',
              }}
            >
              <span className="badge-pulse-dot" style={{ color: '#d6fd70' }}>
                <span />
              </span>
              <span>Welcome to Qolve • White-Label Architecture</span>
            </motion.div>

            {/* Dynamic Animated Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-align-center"
              style={{ maxWidth: '62rem', margin: '0 auto' }}
            >
              Reinventing Customer Support with <br />
              <RotatingWords
                words={[
                  'Intelligent Automation',
                  'White-Label Portals',
                  'Zero-Loss Relays',
                  'Unified Inboxes',
                ]}
              />
            </motion.h1>

            <div className="spacer-medium" />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
              className="max-width-medium"
            >
              <div className="text-base text-color-on-primary text-align-center" style={{ opacity: 0.9, lineHeight: 1.7 }}>
                Quelp is a fully branded, lower-cost customer support platform for growing businesses. Unify email, chat, and knowledge base in one intelligent, seamlessly styled platform.
              </div>
            </motion.div>

            <div className="spacer-huge" />

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
              className="button_wrapper is-hero"
            >
              <button
                onClick={() => onNavigate && onNavigate('products')}
                className="button"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  color: '#fff',
                  border: '1.5px solid rgba(255,255,255,0.25)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.75rem 1.6rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
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
                    style={{
                      width: '2.75rem',
                      height: '2.75rem',
                      borderRadius: '50%',
                      background: '#d6fd70',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0f0f0f',
                      flexShrink: 0,
                      boxShadow: '0 0 20px rgba(214, 253, 112, 0.4)',
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="button-arrow_bg" />
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Spacer between text and Merry-Go-Round */}
      <div style={{ height: '1.5rem' }} />

      {/* Interactive 3D Merry-Go-Round */}
      <div style={{ position: 'relative', zIndex: 5 }}>
        <MerryGoRound />
      </div>

      <div className="_3d_spacer" />

      {/* Rating badge with glow */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rating"
        style={{
          position: 'relative',
          bottom: 'auto',
          marginBottom: '2rem',
          transform: 'none',
          left: 'auto',
          zIndex: 10,
          background: 'rgba(20, 20, 20, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(12px)',
          borderRadius: '9999px',
          padding: '0.625rem 1.5rem',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
        }}
      >
        <div className="text-color-on-primary" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
          Rated <span style={{ color: '#d6fd70', fontWeight: 700 }}>4.9/5</span> by 4,900+ clients
        </div>
        <div className="spacer-xsmall" />
        <div className="stars-wrap">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="icon-1x1-small" style={{ filter: 'drop-shadow(0 0 4px rgba(241, 238, 70, 0.5))' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none">
                <path d="M3.88203 13.9987L4.96536 9.31536L1.33203 6.16536L6.13203 5.7487L7.9987 1.33203L9.86536 5.7487L14.6654 6.16536L11.032 9.31536L12.1154 13.9987L7.9987 11.5154L3.88203 13.9987Z" fill="#F1EE46" />
              </svg>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

