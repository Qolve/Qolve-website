import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Ascii3DStarfield from '../ui/Ascii3DStarfield'
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
    title: 'White-Label Product Engineering',
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

const EXPERTISE_ITEMS = [
  {
    title: 'Platform Uptime',
    val: '99.9%',
    sub: 'Global SLA Guarantee',
    highlight: true,
  },
  {
    title: 'Ticket Deflection',
    val: '68%',
    sub: 'Automated via Permafix AI',
    highlight: false,
  },
  {
    title: 'Average Response',
    val: '< 15m',
    sub: 'Across all priority channels',
    highlight: false,
  },
  {
    title: 'CSAT Rating',
    val: '4.9/5',
    sub: 'Customer satisfaction score',
    highlight: true,
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
  const [activeTab, setActiveTab] = useState('home')
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Auto rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nav = (page, sectionId) => {
    setMobileMenuOpen(false)
    if (onNavigate) {
      onNavigate(page, sectionId)
    }
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const currentCap = CAPABILITIES[activeCapStep]

  return (
    <div style={{ background: '#0f0f0f', color: '#ffffff', minHeight: '100vh', overflowX: 'hidden', paddingBottom: '6rem', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* 1. Mobile Floating Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(15, 15, 15, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '0.85rem 1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <button
          onClick={() => nav('home')}
          style={{ background: 'none', border: 'none', padding: 0, display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }}
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
              boxShadow: '0 0 14px rgba(214, 253, 112, 0.4)',
            }}
          >
            Q
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1 }}>qolve</span>
            <span style={{ fontSize: '0.625rem', color: '#d6fd70', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Whitelabel
            </span>
          </div>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={() => nav('products')}
            style={{
              background: '#d6fd70',
              color: '#0f0f0f',
              border: 'none',
              borderRadius: '9999px',
              padding: '0.45rem 0.95rem',
              fontSize: '0.78rem',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: '0 0 16px rgba(214, 253, 112, 0.35)',
            }}
          >
            Quelp App
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
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
            <div style={{ width: '18px', height: '2px', background: mobileMenuOpen ? '#d6fd70' : '#ffffff', transition: 'all 0.2s ease', transform: mobileMenuOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none' }} />
            <div style={{ width: '18px', height: '2px', background: mobileMenuOpen ? '#d6fd70' : '#ffffff', transition: 'all 0.2s ease', opacity: mobileMenuOpen ? 0 : 1 }} />
            <div style={{ width: '18px', height: '2px', background: mobileMenuOpen ? '#d6fd70' : '#ffffff', transition: 'all 0.2s ease', transform: mobileMenuOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none' }} />
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
            style={{
              position: 'fixed',
              top: '60px',
              left: 0,
              right: 0,
              background: 'rgba(15,15,15,0.98)',
              backdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(255,255,255,0.12)',
              padding: '1.25rem 1.5rem',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            {[
              { label: 'Home Overview', page: 'home', id: 'home' },
              { label: 'Quelp Platform', page: 'products' },
              { label: 'About Qolve', page: 'home', id: 'about' },
              { label: 'Services & Solutions', page: 'home', id: 'services' },
              { label: 'Capabilities Walkthrough', page: 'home', id: 'capabilities' },
              { label: 'Platform & SLA Metrics', page: 'home', id: 'expertise' },
              { label: 'Pricing Plans', page: 'home', id: 'pricing' },
              { label: 'Client Testimonials', page: 'home', id: 'testimonials' },
              { label: 'Qolve Team', page: 'team' },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => nav(item.page, item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  textAlign: 'left',
                  padding: '0.75rem 0.5rem',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>{item.label}</span>
                <span style={{ color: '#d6fd70', fontSize: '0.9rem' }}>→</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Mobile Hero Section */}
      <section style={{ position: 'relative', padding: '2.75rem 1.25rem 3rem', textAlign: 'center', overflow: 'hidden' }}>
        {/* Subtle Starfield background */}
        <Ascii3DStarfield variant="about" opacity={0.45} numStars={90} />

        {/* Hero Tag Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(214, 253, 112, 0.12)',
            border: '1px solid rgba(214, 253, 112, 0.35)',
            borderRadius: '9999px',
            padding: '0.35rem 0.9rem',
            fontSize: '0.75rem',
            fontWeight: 700,
            color: '#d6fd70',
            marginBottom: '1.25rem',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#d6fd70', boxShadow: '0 0 8px #d6fd70' }} />
          <span>White-Label Support Architecture</span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(2rem, 8.5vw, 2.6rem)',
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            marginBottom: '1.15rem',
          }}
        >
          Reinventing Customer Support with{' '}
          <span style={{ color: '#d6fd70', textShadow: '0 0 24px rgba(214, 253, 112, 0.4)' }}>
            Intelligent Automation
          </span>
        </h1>

        <p
          style={{
            fontSize: '0.95rem',
            lineHeight: 1.6,
            color: 'rgba(255, 255, 255, 0.75)',
            maxWidth: '22rem',
            margin: '0 auto 1.75rem',
          }}
        >
          Quelp is a fully branded, lower-cost customer support platform. Unify email, chat, and AI knowledge in one seamless platform.
        </p>

        {/* Hero CTA Button Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxWidth: '20rem', margin: '0 auto 2.25rem' }}>
          <button
            onClick={() => nav('products')}
            style={{
              background: '#d6fd70',
              color: '#0f0f0f',
              border: 'none',
              borderRadius: '9999px',
              padding: '0.9rem 1.5rem',
              fontWeight: 800,
              fontSize: '0.95rem',
              cursor: 'pointer',
              boxShadow: '0 0 28px rgba(214, 253, 112, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            <span>Explore Quelp Platform</span>
            <span>↗</span>
          </button>

          <button
            onClick={() => nav('home', 'pricing')}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              borderRadius: '9999px',
              padding: '0.85rem 1.5rem',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
            }}
          >
            View Pricing Plans
          </button>
        </div>

        {/* Feature Badges Row */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.25rem' }}>
          {['100% Unbranded', 'Zero-Loss Email Relay', 'Permafix AI Copilot'].map((b, i) => (
            <span
              key={i}
              style={{
                fontSize: '0.75rem',
                color: 'rgba(255, 255, 255, 0.75)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0.3rem 0.7rem',
                borderRadius: '9999px',
              }}
            >
              ✓ {b}
            </span>
          ))}
        </div>

        {/* Native Mobile Preview Carousel */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '22rem', margin: '0 auto' }}>
          <div
            style={{
              borderRadius: '1.25rem',
              overflow: 'hidden',
              background: '#141414',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 20px 48px rgba(0,0,0,0.85), 0 0 0 1px rgba(214, 253, 112, 0.25)',
              height: '190px',
            }}
          >
            <img
              src={CAROUSEL_IMAGES[carouselIndex]}
              alt="Quelp Support Interface"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Carousel indicator dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.45rem', marginTop: '0.95rem' }}>
            {CAROUSEL_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCarouselIndex(idx)}
                style={{
                  width: carouselIndex === idx ? '20px' : '6px',
                  height: '6px',
                  borderRadius: '9999px',
                  background: carouselIndex === idx ? '#d6fd70' : 'rgba(255, 255, 255, 0.3)',
                  border: 'none',
                  padding: 0,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mobile About Qolve Section with Centered ASCII Earth */}
      <section id="about" style={{ background: '#ffffff', color: '#0f0f0f', padding: '3.75rem 1.25rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.75rem', position: 'relative', zIndex: 5 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: '#0f0f0f',
              color: '#d6fd70',
              borderRadius: '9999px',
              padding: '0.35rem 0.85rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              marginBottom: '0.85rem',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#d6fd70' }} />
            <span>About Qolve</span>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: 1.18, color: '#000000', marginBottom: '0.75rem' }}>
            Transforming Support with Next-Gen Intelligence
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.55 }}>
            We engineer intelligent white-label platforms that empower brands to manage support with absolute autonomy.
          </p>
        </div>

        {/* Centered Mobile ASCII Earth */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '0.5rem 0 1.75rem' }}>
          <AsciiEarth size={26} speed={0.006} />
        </div>

        {/* Mobile Metric Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', position: 'relative', zIndex: 5 }}>
          <div style={{ background: '#f5f5f5', borderRadius: '1rem', padding: '1.25rem 1rem', border: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#000000', lineHeight: 1 }}>
              <CountUpNumber value={120} duration={2} suffix="+" />
            </div>
            <div style={{ fontSize: '0.75rem', color: '#4b5563', marginTop: '0.4rem', fontWeight: 600 }}>
              Partner Integrations
            </div>
          </div>

          <div style={{ background: '#d6fd70', borderRadius: '1rem', padding: '1.25rem 1rem', border: '1px solid rgba(0,0,0,0.08)' }}>
            <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#0f0f0f', lineHeight: 1 }}>
              <CountUpNumber value={91} duration={2} suffix="%" />
            </div>
            <div style={{ fontSize: '0.75rem', color: '#0f0f0f', marginTop: '0.4rem', fontWeight: 700 }}>
              Resolution Acceleration
            </div>
          </div>

          <div style={{ background: '#0f0f0f', color: '#ffffff', borderRadius: '1rem', padding: '1.25rem 1rem' }}>
            <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#d6fd70', lineHeight: 1 }}>
              <CountUpNumber value={435} duration={2} suffix="k+" />
            </div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.4rem', fontWeight: 600 }}>
              Support Data Points
            </div>
          </div>

          <div style={{ background: '#f5f5f5', borderRadius: '1rem', padding: '1.25rem 1rem', border: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#16a34a', lineHeight: 1 }}>
              99.98%
            </div>
            <div style={{ fontSize: '0.75rem', color: '#4b5563', marginTop: '0.4rem', fontWeight: 600 }}>
              Mail Delivery SLA
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mobile Services Section with Centered ASCII Moon */}
      <section id="services" style={{ background: '#f9fafb', color: '#0f0f0f', padding: '3.75rem 1.25rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div
            style={{
              display: 'inline-block',
              background: '#0f0f0f',
              color: '#d6fd70',
              borderRadius: '9999px',
              padding: '0.3rem 0.8rem',
              fontSize: '0.72rem',
              fontWeight: 700,
              marginBottom: '0.6rem',
            }}
          >
            Services &amp; Architecture
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#000000', lineHeight: 1.2, marginBottom: '1rem' }}>
            Comprehensive Consulting &amp; Product Solutions
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '0.5rem 0 1.5rem' }}>
            <AsciiMoon size={20} speed={0.004} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {SERVICES.map((s) => (
            <div
              key={s.id}
              style={{
                background: '#ffffff',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 6px 24px rgba(0,0,0,0.05)',
              }}
            >
              <div style={{ height: '145px', overflow: 'hidden' }}>
                <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <span
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: '#0f0f0f',
                    background: '#d6fd70',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    display: 'inline-block',
                    marginBottom: '0.5rem',
                  }}
                >
                  {s.tag}
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#000000', marginBottom: '0.4rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Mobile Interactive Capabilities Walkthrough */}
      <section id="capabilities" style={{ background: '#0f0f0f', padding: '3.75rem 1.25rem', color: '#ffffff' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(214, 253, 112, 0.12)',
              color: '#d6fd70',
              border: '1px solid rgba(214, 253, 112, 0.3)',
              borderRadius: '9999px',
              padding: '0.3rem 0.8rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              marginBottom: '0.75rem',
            }}
          >
            Platform Capabilities
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>
            Interactive Architecture
          </h2>
        </div>

        {/* Step Selector Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {CAPABILITIES.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCapStep(idx)}
              style={{
                flex: 1,
                background: activeCapStep === idx ? '#d6fd70' : 'rgba(255,255,255,0.06)',
                color: activeCapStep === idx ? '#0f0f0f' : 'rgba(255,255,255,0.7)',
                border: activeCapStep === idx ? '1px solid #d6fd70' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: '0.75rem',
                padding: '0.65rem 0.5rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Step {s.step}
            </button>
          ))}
        </div>

        {/* Active Step Content Card */}
        <div
          style={{
            background: '#141414',
            borderRadius: '1.25rem',
            padding: '1.5rem',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: '#d6fd70', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {currentCap.badge}
          </span>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', margin: '0.5rem 0 0.75rem', lineHeight: 1.25 }}>
            {currentCap.title}
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
            {currentCap.description}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {currentCap.points.map((pt, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.85)' }}>
                <span style={{ color: '#d6fd70', fontWeight: 800 }}>✓</span>
                <span>{pt}</span>
              </div>
            ))}
          </div>

          {/* Interactive Live Mockup Preview */}
          <div
            style={{
              background: '#0a0a0a',
              borderRadius: '0.75rem',
              padding: '1rem',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {activeCapStep === 0 && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#d6fd70', fontWeight: 700 }}>AI Auto-Draft</span>
                  <span style={{ color: '#16a34a', fontWeight: 700 }}>Confidence 98.4%</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.8)', background: 'rgba(255,255,255,0.04)', padding: '0.75rem', borderRadius: '0.5rem', lineHeight: 1.45 }}>
                  {currentCap.preview.draftText}
                </div>
              </div>
            )}

            {activeCapStep === 1 && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.04)', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.75rem' }}>
                  <span>🔒</span>
                  <span style={{ color: '#d6fd70', fontFamily: 'monospace', fontWeight: 700 }}>https://support.yourbrand.com</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem', fontSize: '0.75rem' }}>
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>Theme Accent:</span>
                  <span style={{ color: '#d6fd70', fontWeight: 700 }}>#D6FD70</span>
                </div>
              </div>
            )}

            {activeCapStep === 2 && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#ffffff', fontWeight: 700 }}>Stalwart Inbound + SES</span>
                  <span style={{ color: '#d6fd70', fontWeight: 700 }}>99.98% SLA</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', textAlign: 'center' }}>
                  <div style={{ background: 'rgba(255,255,255,0.04)', padding: '0.5rem', borderRadius: '0.5rem' }}>
                    <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)' }}>Latency</div>
                    <div style={{ color: '#d6fd70', fontWeight: 800, fontSize: '0.95rem' }}>142ms</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.04)', padding: '0.5rem', borderRadius: '0.5rem' }}>
                    <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)' }}>Packet Loss</div>
                    <div style={{ color: '#d6fd70', fontWeight: 800, fontSize: '0.95rem' }}>0.00%</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. Mobile Platform & SLA Metrics Section */}
      <section id="expertise" style={{ background: '#121214', color: '#ffffff', padding: '3.5rem 1.25rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.06)',
              color: '#d6fd70',
              borderRadius: '9999px',
              padding: '0.3rem 0.8rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              marginBottom: '0.75rem',
            }}
          >
            Engineering Rigor
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, lineHeight: 1.2, color: '#ffffff' }}>
            Guaranteed Operational Excellence
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
          {EXPERTISE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: item.highlight ? 'rgba(214, 253, 112, 0.08)' : 'rgba(255, 255, 255, 0.04)',
                border: item.highlight ? '1px solid rgba(214, 253, 112, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '1rem',
                padding: '1.25rem 1rem',
              }}
            >
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: item.highlight ? '#d6fd70' : '#ffffff', lineHeight: 1 }}>
                {item.val}
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, marginTop: '0.5rem', color: '#ffffff' }}>
                {item.title}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.2rem' }}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Mobile Pricing Section */}
      <section id="pricing" style={{ background: '#ffffff', color: '#0f0f0f', padding: '3.75rem 1.25rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div
            style={{
              display: 'inline-block',
              background: '#0f0f0f',
              color: '#d6fd70',
              borderRadius: '9999px',
              padding: '0.3rem 0.8rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              marginBottom: '0.75rem',
            }}
          >
            Transparent Pricing
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#000000', lineHeight: 1.2, marginBottom: '0.75rem' }}>
            Lower-Cost, Predictable Scaling
          </h2>

          {/* Billing Toggle */}
          <div style={{ display: 'inline-flex', background: '#f3f4f6', borderRadius: '9999px', padding: '0.3rem', border: '1px solid rgba(0,0,0,0.08)' }}>
            <button
              onClick={() => setBillingAnnual(false)}
              style={{
                background: !billingAnnual ? '#0f0f0f' : 'none',
                color: !billingAnnual ? '#ffffff' : '#6b7280',
                border: 'none',
                borderRadius: '9999px',
                padding: '0.4rem 1rem',
                fontSize: '0.75rem',
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
                padding: '0.4rem 1rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <span>Annual</span>
              <span style={{ background: '#d6fd70', color: '#0f0f0f', padding: '0.1rem 0.4rem', borderRadius: '9999px', fontSize: '0.65rem', fontWeight: 800 }}>
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {PRICING_TIERS.map((tier, idx) => {
            const price = billingAnnual ? tier.annualPrice : tier.monthlyPrice
            return (
              <div
                key={idx}
                style={{
                  background: tier.popular ? '#0f0f0f' : '#f9fafb',
                  color: tier.popular ? '#ffffff' : '#0f0f0f',
                  borderRadius: '1.25rem',
                  padding: '1.75rem 1.5rem',
                  border: tier.popular ? '2px solid #d6fd70' : '1px solid rgba(0,0,0,0.08)',
                  boxShadow: tier.popular ? '0 12px 36px rgba(214, 253, 112, 0.15)' : 'none',
                  position: 'relative',
                }}
              >
                {tier.popular && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      right: '1.5rem',
                      background: '#d6fd70',
                      color: '#0f0f0f',
                      fontSize: '0.7rem',
                      fontWeight: 900,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      textTransform: 'uppercase',
                    }}
                  >
                    ★ Most Popular
                  </span>
                )}

                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.35rem', color: tier.popular ? '#ffffff' : '#0f0f0f' }}>{tier.name}</h3>
                <p style={{ fontSize: '0.8rem', color: tier.popular ? 'rgba(255,255,255,0.7)' : '#4b5563', marginBottom: '1.25rem' }}>
                  {tier.desc}
                </p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 900, lineHeight: 1, color: tier.popular ? '#ffffff' : '#0f0f0f' }}>${price}</span>
                  <span style={{ fontSize: '0.875rem', color: tier.popular ? 'rgba(255,255,255,0.6)' : '#6b7280' }}>/month</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: tier.popular ? '#ffffff' : '#0f0f0f' }}>
                      <span style={{ color: tier.popular ? '#d6fd70' : '#16a34a', fontWeight: 800 }}>✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => nav('products')}
                  style={{
                    width: '100%',
                    background: tier.popular ? '#d6fd70' : '#0f0f0f',
                    color: tier.popular ? '#0f0f0f' : '#ffffff',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.85rem',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                  }}
                >
                  Get Started
                </button>
              </div>
            )
          })}
        </div>
      </section>

      {/* 8. Mobile Testimonials Section */}
      <section id="testimonials" style={{ background: '#f9fafb', color: '#0f0f0f', padding: '3.5rem 1.25rem', textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-block',
            background: '#0f0f0f',
            color: '#d6fd70',
            borderRadius: '9999px',
            padding: '0.3rem 0.8rem',
            fontSize: '0.75rem',
            fontWeight: 700,
            marginBottom: '0.75rem',
          }}
        >
          Partner Endorsements
        </div>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '1.5rem', color: '#000000' }}>
          What Product Leaders Say
        </h2>

        <div style={{ background: '#ffffff', borderRadius: '1.25rem', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 8px 30px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: '2.5rem', color: '#d6fd70', lineHeight: 1, marginBottom: '0.5rem', fontWeight: 900 }}>“</div>
          <p style={{ fontSize: '0.95rem', color: '#1f2937', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            {TESTIMONIALS[activeTestimonial].quote}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <img
              src={TESTIMONIALS[activeTestimonial].avatar}
              alt={TESTIMONIALS[activeTestimonial].author}
              style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#000000' }}>{TESTIMONIALS[activeTestimonial].author}</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{TESTIMONIALS[activeTestimonial].company}</div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.25rem' }}>
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                style={{
                  width: activeTestimonial === idx ? '18px' : '6px',
                  height: '6px',
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
      </section>

      {/* 9. Mobile CTA & Footer */}
      <section id="contact" style={{ background: '#0f0f0f', padding: '3.5rem 1.25rem 2rem', color: '#ffffff', textAlign: 'center' }}>
        <div
          style={{
            background: 'linear-gradient(180deg, #18181b 0%, #09090b 100%)',
            borderRadius: '1.5rem',
            padding: '2rem 1.5rem',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 20px 48px rgba(0,0,0,0.8)',
          }}
        >
          <span
            style={{
              background: 'rgba(214, 253, 112, 0.15)',
              color: '#d6fd70',
              borderRadius: '9999px',
              padding: '0.3rem 0.75rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              display: 'inline-block',
              marginBottom: '1rem',
            }}
          >
            Trusted by 5,000+ teams
          </span>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem', color: '#ffffff' }}>
            Ready to upgrade your customer support?
          </h2>

          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginBottom: '1.75rem' }}>
            Deploy your dedicated white-label instance with custom CNAME domain and Permafix AI in under 5 minutes.
          </p>

          <button
            onClick={() => nav('products')}
            style={{
              width: '100%',
              background: '#d6fd70',
              color: '#0f0f0f',
              border: 'none',
              borderRadius: '9999px',
              padding: '0.95rem',
              fontWeight: 800,
              fontSize: '0.95rem',
              cursor: 'pointer',
              boxShadow: '0 0 24px rgba(214, 253, 112, 0.4)',
            }}
          >
            Launch Quelp Platform ↗
          </button>
        </div>

        <div style={{ marginTop: '2.5rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>
          © {new Date().getFullYear()} Qolve Systems Inc. All rights reserved.
        </div>
      </section>

      {/* 10. Dedicated Floating Bottom App Bar (Native App Navigation) */}
      <nav
        style={{
          position: 'fixed',
          bottom: '1rem',
          left: '1.25rem',
          right: '1.25rem',
          background: 'rgba(18, 18, 18, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '9999px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 12px 32px rgba(0,0,0,0.85), 0 0 0 1px rgba(214, 253, 112, 0.15)',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '0.45rem 0.5rem',
          zIndex: 1000,
        }}
      >
        {[
          { label: 'Home', id: 'home', icon: '🏠' },
          { label: 'Platform', page: 'products', icon: '⚡' },
          { label: 'Capabilities', id: 'capabilities', icon: '🛠' },
          { label: 'Pricing', id: 'pricing', icon: '💎' },
          { label: 'Team', page: 'team', icon: '👥' },
        ].map((tab, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveTab(tab.id || tab.page)
              nav(tab.page || 'home', tab.id)
            }}
            style={{
              background: activeTab === (tab.id || tab.page) ? 'rgba(214, 253, 112, 0.18)' : 'none',
              color: activeTab === (tab.id || tab.page) ? '#d6fd70' : 'rgba(255, 255, 255, 0.65)',
              border: activeTab === (tab.id || tab.page) ? '1px solid rgba(214, 253, 112, 0.35)' : 'none',
              borderRadius: '9999px',
              padding: '0.4rem 0.75rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <span style={{ fontSize: '0.9rem' }}>{tab.icon}</span>
            <span style={{ fontSize: '0.625rem', fontWeight: 700 }}>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
