import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AsciiEarth from '../ui/AsciiEarth'
import AsciiMoon from '../ui/AsciiMoon'
import CountUpNumber from '../ui/CountUpNumber'

const CAROUSEL_IMAGES = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
]

const CAPABILITIES = [
  {
    step: '01',
    badge: 'AI Grounding & Auto-Triage',
    title: 'Permafix AI Grounded Drafts',
    tagline: 'Autonomous response generation with strict human-in-the-loop safety.',
    description:
      'Permafix analyzes incoming support tickets against your verified knowledge base, drafting accurate responses with zero hallucination.',
    points: [
      'Grounded in your private docs',
      'Auto category & priority tagging',
      'Deflects up to 68% of repetitive tickets',
    ],
    preview: {
      type: 'ai',
      confidence: '98.4%',
      draftText: 'Hello Sarah! I see your workspace domain mapping is pending DNS propagation. Our CNAME record is already verified.',
    },
  },
  {
    step: '02',
    badge: '100% Brand Autonomy',
    title: 'White-Label Portals & Domains',
    tagline: 'Never expose a third-party vendor name to your customers.',
    description:
      'Map your own CNAME domain (e.g. support.yourcompany.com), inject brand colors, logos, and custom typography seamlessly.',
    points: [
      'Custom CNAME with auto SSL',
      'Custom color tokens & dark/light mode',
      'Embedded client help center widget',
    ],
    preview: {
      type: 'portal',
      domain: 'support.yourbrand.com',
      badge: '100% Unbranded',
    },
  },
  {
    step: '03',
    badge: 'Resilient Infrastructure',
    title: 'Zero-Loss Email Relay Pipeline',
    tagline: 'Built on Stalwart Mail Server & AWS SES for deliverability.',
    description:
      'Our mail routing architecture guarantees 100% inbound capture with authenticated outbound DKIM, SPF, and DMARC enforcement.',
    points: [
      'Stalwart inbound receiver',
      'AWS SES relay with DKIM/SPF',
      'Sub-second webhook updates',
    ],
    preview: {
      type: 'mail',
      latency: '142ms',
      loss: '0.00%',
      deliverability: '99.98%',
    },
  },
]

const SERVICES = [
  {
    id: 'ai-automation',
    tag: 'AI Core',
    title: 'AI Strategy & Automation',
    desc: 'Bespoke AI deflection workflows grounded in your proprietary knowledge base with strict agent approval controls.',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'white-label',
    tag: 'Branding',
    title: 'White-Label Engineering',
    desc: 'Fully unbranded helpdesk portals, CNAME domains, and embeddable chat widgets tailored to your exact brand identity.',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'operations',
    tag: 'Infrastructure',
    title: 'Data & SLA Operations',
    desc: 'High-throughput email relay architecture on Stalwart & AWS SES with real-time CSAT and resolution telemetry.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
]

const TESTIMONIALS = [
  {
    quote: 'They brought clarity to complex problems, breaking down barriers and delivering innovative solutions.',
    author: 'John Doe',
    company: 'Tech Innovations',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: 'Deploying Quelp replaced three disparate support tools and cut our operational costs by over 50%.',
    author: 'Elena Rostova',
    company: 'SaaSify Scale',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
]

const PRICING_TIERS = [
  {
    name: 'Starter',
    monthlyPrice: 49,
    annualPrice: 39,
    desc: 'Ideal for small teams and early-stage startups needing a branded helpdesk.',
    features: [
      'Unified email ticket inbox',
      'Basic white-label branding',
      'Branded knowledge base portal',
      'Up to 3 team agent seats',
    ],
    popular: false,
  },
  {
    name: 'Growth Plan',
    monthlyPrice: 149,
    annualPrice: 119,
    desc: 'Complete white-label support suite with custom CNAME domain and Permafix AI.',
    features: [
      '100% white-label portal & widget',
      'Custom CNAME domain mapping',
      'Permafix AI smart drafts & auto-triage',
      'Stalwart + AWS SES email delivery',
      'Up to 10 team agent seats',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 399,
    annualPrice: 319,
    desc: 'Dedicated high-volume infrastructure with custom SLA guarantees and SSO.',
    features: [
      'Unlimited agent seats & inboxes',
      'Dedicated Stalwart mail instances',
      'Custom AI model fine-tuning',
      '99.99% SLA guarantee & SAML SSO',
      '24/7 dedicated support architect',
    ],
    popular: false,
  },
]

export default function MobileView({ activePage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCapStep, setActiveCapStep] = useState(0)
  const [billingAnnual, setBillingAnnual] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeServiceIdx, setActiveServiceIdx] = useState(0)
  const [selectedPricingIdx, setSelectedPricingIdx] = useState(1)

  const containerRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    }, 3800)
    return () => clearInterval(timer)
  }, [])

  const handleScroll = () => {
    if (!containerRef.current) return
    const scrollTop = containerRef.current.scrollTop
    const sectionHeight = containerRef.current.clientHeight
    const index = Math.round(scrollTop / sectionHeight)
    const sectionIds = ['hero', 'about', 'services', 'capabilities', 'pricing', 'testimonials', 'contact']
    if (sectionIds[index]) {
      setActiveSection(sectionIds[index])
    }
  }

  const scrollToSegment = (sectionId) => {
    setMobileMenuOpen(false)
    const el = document.getElementById(`mobile-${sectionId}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navToPage = (page, sectionId) => {
    setMobileMenuOpen(false)
    if (page !== 'home' && onNavigate) {
      onNavigate(page, sectionId)
    } else if (sectionId) {
      scrollToSegment(sectionId)
    }
  }

  const currentCap = CAPABILITIES[activeCapStep]

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        height: '100dvh',
        width: '100vw',
        overflow: 'hidden',
        background: '#09090b',
        color: '#ffffff',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Fixed Glass Header */}
      {/* Fixed Glass Header with hairline cyber top light */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: 'rgba(12, 12, 12, 0.94)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '0.75rem 1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)',
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
            background: 'linear-gradient(90deg, transparent 0%, rgba(214, 253, 112, 0.5) 50%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        <button
          onClick={() => scrollToSegment('hero')}
          style={{ background: 'none', border: 'none', padding: 0, display: 'flex', alignItems: 'center', gap: '0.65rem', cursor: 'pointer' }}
        >
          <div
            style={{
              width: '2.1rem',
              height: '2.1rem',
              borderRadius: '0.5rem',
              background: '#d6fd70',
              color: '#0f0f0f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '1.2rem',
              letterSpacing: '-0.04em',
              boxShadow: '0 0 16px rgba(214, 253, 112, 0.4)',
            }}
          >
            Q
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1 }}>qolve</span>
              <span style={{ fontSize: '0.55rem', fontFamily: 'Geist Mono, monospace', color: 'rgba(255, 255, 255, 0.45)', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.05rem 0.3rem', borderRadius: '0.2rem' }}>LABS</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.15rem' }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#d6fd70', boxShadow: '0 0 6px #d6fd70' }} />
              <span style={{ fontSize: '0.575rem', fontFamily: 'Geist Mono, monospace', color: '#d6fd70', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                White-Label
              </span>
            </div>
          </div>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <button
            onClick={() => navToPage('products')}
            style={{
              background: '#d6fd70',
              color: '#0f0f0f',
              border: 'none',
              borderRadius: '9999px',
              padding: '0.4rem 0.9rem',
              fontSize: '0.75rem',
              fontWeight: 800,
              cursor: 'pointer',
              letterSpacing: '-0.01em',
              boxShadow: '0 0 16px rgba(214, 253, 112, 0.35)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <span>Quelp</span>
            <span style={{ fontSize: '0.65rem' }}>↗</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '0.5rem',
              padding: '0.45rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              width: '36px',
              height: '36px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: '16px', height: '2px', background: mobileMenuOpen ? '#d6fd70' : '#ffffff', transition: 'all 0.2s ease', transform: mobileMenuOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none', borderRadius: '1px' }} />
            <div style={{ width: '16px', height: '2px', background: mobileMenuOpen ? '#d6fd70' : '#ffffff', transition: 'all 0.2s ease', opacity: mobileMenuOpen ? 0 : 1, borderRadius: '1px' }} />
            <div style={{ width: '16px', height: '2px', background: mobileMenuOpen ? '#d6fd70' : '#ffffff', transition: 'all 0.2s ease', transform: mobileMenuOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none', borderRadius: '1px' }} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: '56px',
              left: 0,
              right: 0,
              background: 'rgba(12, 12, 12, 0.98)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(214, 253, 112, 0.25)',
              padding: '1rem 1.25rem 1.5rem',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.9)',
            }}
          >
            <div
              style={{
                fontFamily: 'Geist Mono, monospace',
                fontSize: '0.625rem',
                color: 'rgba(255, 255, 255, 0.4)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.3rem',
                paddingLeft: '0.4rem',
              }}
            >
              // Systems Index
            </div>

            {[
              { label: '01 • About Qolve Lab', id: 'about' },
              { label: '02 • Services & Solutions', id: 'services' },
              { label: '03 • Platform Capabilities', id: 'capabilities' },
              { label: '04 • Transparent Pricing', id: 'pricing' },
              { label: '05 • Client Testimonials', id: 'testimonials' },
              { label: '06 • Launch Platform', id: 'contact' },
              { label: 'Quelp Platform (App)', page: 'products', badge: 'PROD' },
              { label: 'Qolve Team Roster', page: 'team' },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => (item.page ? navToPage(item.page) : scrollToSegment(item.id))}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                  borderRadius: '0.45rem',
                  color: '#ffffff',
                  textAlign: 'left',
                  padding: '0.65rem 0.75rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.18s ease',
                }}
              >
                <span>{item.label}</span>
                {item.badge ? (
                  <span
                    style={{
                      fontSize: '0.55rem',
                      fontFamily: 'Geist Mono, monospace',
                      fontWeight: 700,
                      color: '#0f0f0f',
                      background: '#d6fd70',
                      padding: '0.1rem 0.4rem',
                      borderRadius: '9999px',
                    }}
                  >
                    {item.badge}
                  </span>
                ) : (
                  <span style={{ color: '#d6fd70', fontSize: '0.85rem' }}>→</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* SEGMENT-LOCKED SCROLL SNAP CONTAINER */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        style={{
          height: '100dvh',
          maxHeight: '100dvh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
        }}
      >
        {/* SEGMENT 1: HERO (LOCKED - NO MOVING STARS) */}
        <section
          id="mobile-hero"
          style={{
            height: '100dvh',
            minHeight: '100dvh',
            maxHeight: '100dvh',
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '4.5rem 1.25rem 5.25rem',
            boxSizing: 'border-box',
            textAlign: 'center',
            position: 'relative',
            background: 'radial-gradient(ellipse at 50% 15%, rgba(214, 253, 112, 0.08) 0%, #09090b 70%)',
          }}
        >
          <div style={{ paddingTop: '0.5rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                background: 'rgba(214, 253, 112, 0.12)',
                border: '1px solid rgba(214, 253, 112, 0.35)',
                borderRadius: '9999px',
                padding: '0.3rem 0.8rem',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#d6fd70',
                marginBottom: '0.75rem',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#d6fd70', boxShadow: '0 0 8px #d6fd70' }} />
              <span>White-Label Support Architecture</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(1.75rem, 7.5vw, 2.2rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                color: '#ffffff',
                marginBottom: '0.75rem',
              }}
            >
              Reinventing Support with{' '}
              <span style={{ color: '#d6fd70', textShadow: '0 0 20px rgba(214, 253, 112, 0.3)' }}>
                Intelligent Automation
              </span>
            </h1>

            <p style={{ fontSize: '0.85rem', lineHeight: 1.45, color: 'rgba(255, 255, 255, 0.72)', maxWidth: '20rem', margin: '0 auto' }}>
              Quelp is a fully branded customer support platform. Unify email, chat, and AI knowledge in one seamless ecosystem.
            </p>
          </div>

          {/* Hero Preview Card */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '20rem', margin: '0 auto' }}>
            <div
              style={{
                borderRadius: '1rem',
                overflow: 'hidden',
                background: '#141414',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 16px 36px rgba(0,0,0,0.9), 0 0 0 1px rgba(214, 253, 112, 0.2)',
                height: '145px',
              }}
            >
              <img
                src={CAROUSEL_IMAGES[carouselIndex]}
                alt="Quelp Interface"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.35rem', marginTop: '0.5rem' }}>
              {CAROUSEL_IMAGES.map((_, idx) => (
                <div
                  key={idx}
                  style={{
                    width: carouselIndex === idx ? '16px' : '5px',
                    height: '5px',
                    borderRadius: '9999px',
                    background: carouselIndex === idx ? '#d6fd70' : 'rgba(255, 255, 255, 0.25)',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div>
            <div style={{ display: 'flex', gap: '0.65rem', justifyContent: 'center', maxWidth: '20rem', margin: '0 auto' }}>
              <button
                onClick={() => navToPage('products')}
                style={{
                  flex: 1.2,
                  background: '#d6fd70',
                  color: '#0f0f0f',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '0.75rem 0.75rem',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  boxShadow: '0 0 20px rgba(214, 253, 112, 0.35)',
                }}
              >
                Explore Quelp ↗
              </button>
              <button
                onClick={() => scrollToSegment('pricing')}
                style={{
                  flex: 0.9,
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '9999px',
                  padding: '0.75rem 0.75rem',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                }}
              >
                Pricing
              </button>
            </div>
            <div style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.7rem', marginTop: '0.65rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
              <span>↓</span>
              <span>Swipe to lock next segment</span>
            </div>
          </div>
        </section>

        {/* SEGMENT 2: ABOUT QOLVE WITH PROTRUDING SIDE EARTH (LOCKED) */}
        <section
          id="mobile-about"
          style={{
            height: '100dvh',
            minHeight: '100dvh',
            maxHeight: '100dvh',
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '4.5rem 1.25rem 5.25rem',
            boxSizing: 'border-box',
            position: 'relative',
            background: '#ffffff',
            color: '#0f0f0f',
            overflow: 'hidden',
          }}
        >
          {/* Protruding Side ASCII Earth on right edge */}
          <div
            style={{
              position: 'absolute',
              right: '-65px',
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              zIndex: 1,
              opacity: 0.85,
              filter: 'drop-shadow(0 0 25px rgba(0, 0, 0, 0.15))',
            }}
          >
            <AsciiEarth size={27} speed={0.007} fontSize="7px" lineHeight="6.5px" />
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: '#0f0f0f',
                color: '#d6fd70',
                borderRadius: '9999px',
                padding: '0.25rem 0.75rem',
                fontSize: '0.7rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#d6fd70' }} />
              <span>About Qolve</span>
            </div>

            <h2 style={{ fontSize: '1.55rem', fontWeight: 800, lineHeight: 1.18, color: '#000000', marginBottom: '0.4rem', maxWidth: '17rem' }}>
              Global Support Architecture
            </h2>
            <p style={{ fontSize: '0.82rem', color: '#4b5563', lineHeight: 1.45, maxWidth: '16rem' }}>
              We build intelligent white-label platforms empowering SaaS companies with autonomous customer operations.
            </p>
          </div>

          {/* Metric Bento Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', position: 'relative', zIndex: 2, maxWidth: '20rem' }}>
            <div style={{ background: '#f5f5f5', borderRadius: '0.85rem', padding: '1rem 0.85rem', border: '1px solid rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#000000', lineHeight: 1 }}>
                <CountUpNumber value={120} duration={2} suffix="+" />
              </div>
              <div style={{ fontSize: '0.7rem', color: '#4b5563', marginTop: '0.3rem', fontWeight: 600 }}>
                Partner Integrations
              </div>
            </div>

            <div style={{ background: '#d6fd70', borderRadius: '0.85rem', padding: '1rem 0.85rem', border: '1px solid rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0f0f0f', lineHeight: 1 }}>
                <CountUpNumber value={91} duration={2} suffix="%" />
              </div>
              <div style={{ fontSize: '0.7rem', color: '#0f0f0f', marginTop: '0.3rem', fontWeight: 700 }}>
                Resolution Speed
              </div>
            </div>

            <div style={{ background: '#0f0f0f', color: '#ffffff', borderRadius: '0.85rem', padding: '1rem 0.85rem' }}>
              <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#d6fd70', lineHeight: 1 }}>
                <CountUpNumber value={435} duration={2} suffix="k+" />
              </div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.3rem', fontWeight: 600 }}>
                Support Tickets
              </div>
            </div>

            <div style={{ background: '#f5f5f5', borderRadius: '0.85rem', padding: '1rem 0.85rem', border: '1px solid rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#16a34a', lineHeight: 1 }}>
                99.98%
              </div>
              <div style={{ fontSize: '0.7rem', color: '#4b5563', marginTop: '0.3rem', fontWeight: 600 }}>
                Delivery SLA
              </div>
            </div>
          </div>

          <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', color: '#6b7280', fontWeight: 600 }}>Segment 02 / 07</span>
            <button
              onClick={() => scrollToSegment('services')}
              style={{ background: 'none', border: 'none', color: '#0f0f0f', fontWeight: 700, fontSize: '0.75rem', cursor: 'pointer' }}
            >
              Services ↓
            </button>
          </div>
        </section>

        {/* SEGMENT 3: SERVICES & SOLUTIONS WITH WATERMARK ASCII MOON (LOCKED) */}
        <section
          id="mobile-services"
          style={{
            height: '100dvh',
            minHeight: '100dvh',
            maxHeight: '100dvh',
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '4.5rem 1.25rem 5.25rem',
            boxSizing: 'border-box',
            position: 'relative',
            background: '#f9fafb',
            color: '#0f0f0f',
            overflow: 'hidden',
          }}
        >
          {/* Watermark ASCII Moon positioned unobtrusively in top-right */}
          <div
            style={{
              position: 'absolute',
              right: '-20px',
              top: '3.8rem',
              pointerEvents: 'none',
              zIndex: 1,
              opacity: 0.65,
            }}
          >
            <AsciiMoon size={11} speed={0.005} fontSize="6px" lineHeight="5.5px" />
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div
              style={{
                display: 'inline-block',
                background: '#0f0f0f',
                color: '#d6fd70',
                borderRadius: '9999px',
                padding: '0.25rem 0.75rem',
                fontSize: '0.7rem',
                fontWeight: 700,
                marginBottom: '0.35rem',
              }}
            >
              Services &amp; Architecture
            </div>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#000000', lineHeight: 1.15, margin: 0, maxWidth: '17rem' }}>
              Bespoke Engineering
            </h2>
          </div>

          {/* Service Card Switcher */}
          <div style={{ display: 'flex', gap: '0.4rem', position: 'relative', zIndex: 2 }}>
            {SERVICES.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveServiceIdx(idx)}
                style={{
                  flex: 1,
                  background: activeServiceIdx === idx ? '#0f0f0f' : '#e5e7eb',
                  color: activeServiceIdx === idx ? '#d6fd70' : '#4b5563',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '0.45rem 0.2rem',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {s.tag}
              </button>
            ))}
          </div>

          {/* Active Service Card Detail */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '1rem',
              overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <div style={{ height: '130px', overflow: 'hidden' }}>
              <img
                src={SERVICES[activeServiceIdx].img}
                alt={SERVICES[activeServiceIdx].title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#000000', marginBottom: '0.35rem' }}>
                {SERVICES[activeServiceIdx].title}
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#4b5563', lineHeight: 1.45 }}>
                {SERVICES[activeServiceIdx].desc}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2 }}>
            <span style={{ fontSize: '0.72rem', color: '#6b7280', fontWeight: 600 }}>Segment 03 / 07</span>
            <button
              onClick={() => scrollToSegment('capabilities')}
              style={{ background: 'none', border: 'none', color: '#0f0f0f', fontWeight: 700, fontSize: '0.75rem', cursor: 'pointer' }}
            >
              Capabilities ↓
            </button>
          </div>
        </section>

        {/* SEGMENT 4: CAPABILITIES WALKTHROUGH (LOCKED) */}
        <section
          id="mobile-capabilities"
          style={{
            height: '100dvh',
            minHeight: '100dvh',
            maxHeight: '100dvh',
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '4.5rem 1.25rem 5.25rem',
            boxSizing: 'border-box',
            position: 'relative',
            background: '#09090b',
            color: '#ffffff',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(214, 253, 112, 0.12)',
                color: '#d6fd70',
                border: '1px solid rgba(214, 253, 112, 0.3)',
                borderRadius: '9999px',
                padding: '0.25rem 0.75rem',
                fontSize: '0.7rem',
                fontWeight: 700,
                marginBottom: '0.4rem',
              }}
            >
              Interactive Walkthrough
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.15 }}>
              Platform Architecture
            </h2>
          </div>

          {/* Step Selector Pills */}
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {CAPABILITIES.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCapStep(idx)}
                style={{
                  flex: 1,
                  background: activeCapStep === idx ? '#d6fd70' : 'rgba(255,255,255,0.06)',
                  color: activeCapStep === idx ? '#0f0f0f' : 'rgba(255,255,255,0.7)',
                  border: activeCapStep === idx ? '1px solid #d6fd70' : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '0.65rem',
                  padding: '0.5rem 0.35rem',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                Step {s.step}
              </button>
            ))}
          </div>

          {/* Active Step Card */}
          <div
            style={{
              background: '#141414',
              borderRadius: '1rem',
              padding: '1.15rem',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
            }}
          >
            <span style={{ fontSize: '0.7rem', color: '#d6fd70', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              {currentCap.badge}
            </span>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', margin: '0.3rem 0 0.5rem', lineHeight: 1.2 }}>
              {currentCap.title}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '0.85rem' }}>
              {currentCap.points.map((pt, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.85)' }}>
                  <span style={{ color: '#d6fd70', fontWeight: 800 }}>✓</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* Live Mockup */}
            <div style={{ background: '#0a0a0a', borderRadius: '0.65rem', padding: '0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
              {activeCapStep === 0 && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginBottom: '0.35rem' }}>
                    <span style={{ color: '#d6fd70', fontWeight: 700 }}>AI Auto-Draft</span>
                    <span style={{ color: '#16a34a', fontWeight: 700 }}>Confidence 98.4%</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', background: 'rgba(255,255,255,0.04)', padding: '0.6rem', borderRadius: '0.45rem', lineHeight: 1.4 }}>
                    {currentCap.preview.draftText}
                  </div>
                </div>
              )}

              {activeCapStep === 1 && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', background: 'rgba(255,255,255,0.04)', padding: '0.45rem 0.65rem', borderRadius: '0.45rem', fontSize: '0.72rem' }}>
                    <span>🔒</span>
                    <span style={{ color: '#d6fd70', fontFamily: 'monospace', fontWeight: 700 }}>https://support.yourbrand.com</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.72rem' }}>
                    <span style={{ color: 'rgba(255,255,255,0.6)' }}>Custom Theme Token:</span>
                    <span style={{ color: '#d6fd70', fontWeight: 700 }}>#D6FD70</span>
                  </div>
                </div>
              )}

              {activeCapStep === 2 && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginBottom: '0.35rem' }}>
                    <span style={{ color: '#ffffff', fontWeight: 700 }}>Stalwart + AWS SES Relay</span>
                    <span style={{ color: '#d6fd70', fontWeight: 700 }}>99.98% SLA</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.45rem', textAlign: 'center' }}>
                    <div style={{ background: 'rgba(255,255,255,0.04)', padding: '0.4rem', borderRadius: '0.45rem' }}>
                      <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.5)' }}>Avg Latency</div>
                      <div style={{ color: '#d6fd70', fontWeight: 800, fontSize: '0.85rem' }}>142ms</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.04)', padding: '0.4rem', borderRadius: '0.45rem' }}>
                      <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.5)' }}>Loss Rate</div>
                      <div style={{ color: '#d6fd70', fontWeight: 800, fontSize: '0.85rem' }}>0.00%</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>Segment 04 / 07</span>
            <button
              onClick={() => scrollToSegment('pricing')}
              style={{ background: 'none', border: 'none', color: '#d6fd70', fontWeight: 700, fontSize: '0.75rem', cursor: 'pointer' }}
            >
              Pricing Plans ↓
            </button>
          </div>
        </section>

        {/* SEGMENT 5: PRICING (LOCKED) */}
        <section
          id="mobile-pricing"
          style={{
            height: '100dvh',
            minHeight: '100dvh',
            maxHeight: '100dvh',
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '4.5rem 1.25rem 5.25rem',
            boxSizing: 'border-box',
            position: 'relative',
            background: '#ffffff',
            color: '#0f0f0f',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <div
                style={{
                  display: 'inline-block',
                  background: '#0f0f0f',
                  color: '#d6fd70',
                  borderRadius: '9999px',
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                }}
              >
                Transparent Pricing
              </div>

              {/* Billing Toggle */}
              <div style={{ display: 'inline-flex', background: '#f3f4f6', borderRadius: '9999px', padding: '0.25rem', border: '1px solid rgba(0,0,0,0.08)' }}>
                <button
                  onClick={() => setBillingAnnual(false)}
                  style={{
                    background: !billingAnnual ? '#0f0f0f' : 'none',
                    color: !billingAnnual ? '#ffffff' : '#6b7280',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.25rem 0.65rem',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingAnnual(true)}
                  style={{
                    background: billingAnnual ? '#0f0f0f' : 'none',
                    color: billingAnnual ? '#ffffff' : '#6b7280',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.25rem 0.65rem',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Annual (-20%)
                </button>
              </div>
            </div>

            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#000000', lineHeight: 1.15 }}>
              Lower-Cost Scaling Plans
            </h2>
          </div>

          {/* Tier Selector Pills */}
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {PRICING_TIERS.map((tier, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedPricingIdx(idx)}
                style={{
                  flex: 1,
                  background: selectedPricingIdx === idx ? (tier.popular ? '#d6fd70' : '#0f0f0f') : '#f3f4f6',
                  color: selectedPricingIdx === idx ? (tier.popular ? '#0f0f0f' : '#ffffff') : '#4b5563',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '0.45rem 0.2rem',
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {tier.name}
              </button>
            ))}
          </div>

          {/* Active Tier Card */}
          {(() => {
            const tier = PRICING_TIERS[selectedPricingIdx]
            const price = billingAnnual ? tier.annualPrice : tier.monthlyPrice
            return (
              <div
                style={{
                  background: tier.popular ? '#0f0f0f' : '#f9fafb',
                  color: tier.popular ? '#ffffff' : '#0f0f0f',
                  borderRadius: '1rem',
                  padding: '1.25rem',
                  border: tier.popular ? '2px solid #d6fd70' : '1px solid rgba(0,0,0,0.08)',
                  boxShadow: tier.popular ? '0 12px 30px rgba(214, 253, 112, 0.15)' : 'none',
                  position: 'relative',
                }}
              >
                {tier.popular && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '1.25rem',
                      background: '#d6fd70',
                      color: '#0f0f0f',
                      fontSize: '0.65rem',
                      fontWeight: 900,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      textTransform: 'uppercase',
                    }}
                  >
                    ★ Most Popular
                  </span>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: tier.popular ? '#ffffff' : '#0f0f0f' }}>{tier.name}</h3>
                  <div>
                    <span style={{ fontSize: '2rem', fontWeight: 900, color: tier.popular ? '#ffffff' : '#0f0f0f' }}>${price}</span>
                    <span style={{ fontSize: '0.75rem', color: tier.popular ? 'rgba(255,255,255,0.6)' : '#6b7280' }}>/mo</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.75rem', color: tier.popular ? 'rgba(255,255,255,0.7)' : '#4b5563', marginBottom: '0.75rem' }}>
                  {tier.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1rem' }}>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.75rem', color: tier.popular ? '#ffffff' : '#0f0f0f' }}>
                      <span style={{ color: tier.popular ? '#d6fd70' : '#16a34a', fontWeight: 800 }}>✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navToPage('products')}
                  style={{
                    width: '100%',
                    background: tier.popular ? '#d6fd70' : '#0f0f0f',
                    color: tier.popular ? '#0f0f0f' : '#ffffff',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.75rem',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                  }}
                >
                  Get Started
                </button>
              </div>
            )
          })()}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', color: '#6b7280', fontWeight: 600 }}>Segment 05 / 07</span>
            <button
              onClick={() => scrollToSegment('testimonials')}
              style={{ background: 'none', border: 'none', color: '#0f0f0f', fontWeight: 700, fontSize: '0.75rem', cursor: 'pointer' }}
            >
              Testimonials ↓
            </button>
          </div>
        </section>

        {/* SEGMENT 6: TESTIMONIALS (LOCKED) */}
        <section
          id="mobile-testimonials"
          style={{
            height: '100dvh',
            minHeight: '100dvh',
            maxHeight: '100dvh',
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '4.5rem 1.25rem 5.25rem',
            boxSizing: 'border-box',
            position: 'relative',
            background: '#f9fafb',
            color: '#0f0f0f',
            textAlign: 'center',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-block',
                background: '#0f0f0f',
                color: '#d6fd70',
                borderRadius: '9999px',
                padding: '0.25rem 0.75rem',
                fontSize: '0.7rem',
                fontWeight: 700,
                marginBottom: '0.4rem',
              }}
            >
              Partner Endorsements
            </div>
            <h2 style={{ fontSize: '1.55rem', fontWeight: 800, color: '#000000', lineHeight: 1.15 }}>
              What Leaders Say
            </h2>
          </div>

          <div style={{ background: '#ffffff', borderRadius: '1rem', padding: '1.25rem', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 6px 24px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '2rem', color: '#d6fd70', lineHeight: 1, marginBottom: '0.25rem', fontWeight: 900 }}>“</div>
            <p style={{ fontSize: '0.88rem', color: '#1f2937', fontStyle: 'italic', lineHeight: 1.5, marginBottom: '1rem' }}>
              {TESTIMONIALS[activeTestimonial].quote}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.65rem' }}>
              <img
                src={TESTIMONIALS[activeTestimonial].avatar}
                alt={TESTIMONIALS[activeTestimonial].author}
                style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#000000' }}>{TESTIMONIALS[activeTestimonial].author}</div>
                <div style={{ fontSize: '0.72rem', color: '#6b7280' }}>{TESTIMONIALS[activeTestimonial].company}</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', marginTop: '1rem' }}>
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  style={{
                    width: activeTestimonial === idx ? '16px' : '5px',
                    height: '5px',
                    borderRadius: '9999px',
                    background: activeTestimonial === idx ? '#0f0f0f' : '#d1d5db',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                />
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', color: '#6b7280', fontWeight: 600 }}>Segment 06 / 07</span>
            <button
              onClick={() => scrollToSegment('contact')}
              style={{ background: 'none', border: 'none', color: '#0f0f0f', fontWeight: 700, fontSize: '0.75rem', cursor: 'pointer' }}
            >
              Launch Platform ↓
            </button>
          </div>
        </section>

        {/* SEGMENT 7: FINAL CTA (LOCKED) */}
        <section
          id="mobile-contact"
          style={{
            height: '100dvh',
            minHeight: '100dvh',
            maxHeight: '100dvh',
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '4.5rem 1.25rem 5.25rem',
            boxSizing: 'border-box',
            position: 'relative',
            background: '#09090b',
            color: '#ffffff',
            textAlign: 'center',
          }}
        >
          <div style={{ paddingTop: '1rem' }}>
            <span
              style={{
                background: 'rgba(214, 253, 112, 0.15)',
                color: '#d6fd70',
                borderRadius: '9999px',
                padding: '0.25rem 0.75rem',
                fontSize: '0.7rem',
                fontWeight: 700,
                display: 'inline-block',
                marginBottom: '0.75rem',
              }}
            >
              Trusted by 5,000+ teams
            </span>

            <h2 style={{ fontSize: '1.65rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '0.75rem', color: '#ffffff' }}>
              Ready to upgrade your customer support?
            </h2>

            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, maxWidth: '20rem', margin: '0 auto' }}>
              Deploy your dedicated white-label instance with custom CNAME domain and Permafix AI in under 5 minutes.
            </p>
          </div>

          <div style={{ maxWidth: '20rem', margin: '0 auto', width: '100%' }}>
            <button
              onClick={() => navToPage('products')}
              style={{
                width: '100%',
                background: '#d6fd70',
                color: '#0f0f0f',
                border: 'none',
                borderRadius: '9999px',
                padding: '0.85rem',
                fontWeight: 800,
                fontSize: '0.9rem',
                cursor: 'pointer',
                boxShadow: '0 0 24px rgba(214, 253, 112, 0.4)',
                marginBottom: '0.75rem',
              }}
            >
              Launch Quelp Platform ↗
            </button>

            <button
              onClick={() => scrollToSegment('hero')}
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '9999px',
                padding: '0.75rem',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
              }}
            >
              Back to Top ↑
            </button>
          </div>

          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>
            © {new Date().getFullYear()} Qolve Systems Inc. All rights reserved.
          </div>
        </section>
      </div>

      {/* Floating Bottom Navigation Dock */}
      <nav
        style={{
          position: 'fixed',
          bottom: '0.75rem',
          left: '1rem',
          right: '1rem',
          background: 'rgba(18, 18, 18, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '9999px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 12px 32px rgba(0,0,0,0.85), 0 0 0 1px rgba(214, 253, 112, 0.15)',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '0.35rem 0.45rem',
          zIndex: 1000,
        }}
      >
        {[
          { label: 'Home', id: 'hero', icon: '🏠' },
          { label: 'About', id: 'about', icon: '🌍' },
          { label: 'Services', id: 'services', icon: '⚡' },
          { label: 'Caps', id: 'capabilities', icon: '🛠' },
          { label: 'Pricing', id: 'pricing', icon: '💎' },
          { label: 'App', page: 'products', icon: '🚀' },
        ].map((tab, idx) => {
          const isActive = activeSection === tab.id
          return (
            <button
              key={idx}
              onClick={() => (tab.page ? navToPage(tab.page) : scrollToSegment(tab.id))}
              style={{
                background: isActive ? 'rgba(214, 253, 112, 0.18)' : 'none',
                color: isActive ? '#d6fd70' : 'rgba(255, 255, 255, 0.65)',
                border: isActive ? '1px solid rgba(214, 253, 112, 0.35)' : 'none',
                borderRadius: '9999px',
                padding: '0.35rem 0.65rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{ fontSize: '0.85rem' }}>{tab.icon}</span>
              <span style={{ fontSize: '0.6rem', fontWeight: 700 }}>{tab.label}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}
