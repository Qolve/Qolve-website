import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import SpotlightCard from './SpotlightCard'

const STEPS = [
  {
    step: '01',
    badge: 'AI Grounding & Auto-Triage',
    title: 'Permafix AI Grounded Drafts',
    tagline: 'Autonomous response generation with strict human-in-the-loop safety.',
    description:
      'Permafix analyzes incoming support emails and tickets against your verified knowledge base, drafting accurate responses with zero hallucination. Support agents review, edit, or approve in a single click.',
    points: [
      'Grounded in your private documentation & previous resolutions',
      'Automatic ticket category, priority, and sentiment tagging',
      'Instant multi-message thread summaries for quick agent context',
      'Deflects up to 68% of repetitive inquiries safely',
    ],
    previewType: 'ai',
  },
  {
    step: '02',
    badge: '100% Brand Autonomy',
    title: 'White-Label Portals & Domains',
    tagline: 'Never expose a third-party vendor name to your paying customers.',
    description:
      'Map your own CNAME domain (e.g. support.yourcompany.com), inject your brand colors, logos, and custom typography. Every client touchpoint feels like an extension of your own platform.',
    points: [
      'Full custom CNAME domain mapping with auto-provisioned SSL',
      'Customizable color tokens, dark/light themes & typography',
      'Embedded client portal & customizable floating help widget',
      'Custom sender address alignment (support@yourcompany.com)',
    ],
    previewType: 'portal',
  },
  {
    step: '03',
    badge: 'Resilient Infrastructure',
    title: 'Zero-Loss Email Relay Pipeline',
    tagline: 'Built on Stalwart Mail Server & AWS SES for high deliverability.',
    description:
      'Email remains the backbone of high-touch B2B support. Our mail routing architecture guarantees 100% inbound capture with authenticated outbound DKIM, SPF, and DMARC enforcement under qolve.systems.',
    points: [
      'Stalwart Mail Server inbound receiver with zero message loss',
      'AWS SES outbound relay with strict DMARC & DKIM signing',
      'Sub-second webhook notifications for new customer threads',
      'Real-time SLA timers and automated escalation triggers',
    ],
    previewType: 'mail',
  },
]

export default function StickyScrollLock() {
  const containerRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (val) => {
      if (val < 0.33) {
        setActiveStep(0)
      } else if (val < 0.66) {
        setActiveStep(1)
      } else {
        setActiveStep(2)
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const stepData = STEPS[activeStep]

  return (
    <div
      id="capabilities"
      ref={containerRef}
      className="sticky-scroll-lock-container"
      style={{
        position: 'relative',
        height: '280vh',
        background: '#0f0f0f',
      }}
    >
      {/* Pinned Sticky Viewport */}
      <div
        className="sticky-scroll-lock-viewport"
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          zIndex: 10,
        }}
      >
        {/* Subtle background ambient mesh */}
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(214, 253, 112, 0.07) 0%, transparent 70%)',
            top: '20%',
            left: activeStep === 0 ? '10%' : activeStep === 1 ? '50%' : '80%',
            filter: 'blur(80px)',
            transition: 'left 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: 'none',
          }}
        />

        <div className="padding-global" style={{ width: '100%' }}>
          <div className="container-large">
            {/* Top header tag and lock indicator */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
              <div className="tag" style={{ margin: 0 }}>
                <div className="dot-square" />
                <div>Platform Capabilities • Interactive Walkthrough</div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#d6fd70',
                    boxShadow: '0 0 8px #d6fd70',
                  }}
                />
                <span>Scroll to scrub steps</span>
                <span style={{ color: '#d6fd70', fontWeight: 700, fontFamily: 'monospace' }}>
                  [{stepData.step} / 03]
                </span>
              </div>
            </div>

            {/* Main 2-Column Split: Scrollytelling content on left, Dynamic Mockup on right */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.15fr',
                gap: '3.5rem',
                alignItems: 'center',
              }}
              className="sticky-scroll-grid"
            >
              {/* Left Column: Active Step Info */}
              <div>
                {/* Step indicator tabs */}
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {STEPS.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        const target = containerRef.current
                        if (target) {
                          const top = target.offsetTop + (idx / 3) * target.offsetHeight
                          window.scrollTo({ top, behavior: 'smooth' })
                        }
                      }}
                      style={{
                        background: activeStep === idx ? '#d6fd70' : 'rgba(255, 255, 255, 0.06)',
                        color: activeStep === idx ? '#0f0f0f' : 'rgba(255, 255, 255, 0.6)',
                        border: activeStep === idx ? '1px solid #d6fd70' : '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '9999px',
                        padding: '0.35rem 0.9rem',
                        fontSize: '0.8125rem',
                        fontWeight: activeStep === idx ? 700 : 500,
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      Step {s.step}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    <span
                      className="geistmono"
                      style={{
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        color: '#d6fd70',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        display: 'block',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {stepData.badge}
                    </span>

                    <h3
                      className="text-color-on-primary"
                      style={{
                        fontSize: '2.25rem',
                        lineHeight: 1.15,
                        fontWeight: 800,
                        marginBottom: '1rem',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {stepData.title}
                    </h3>

                    <p
                      style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '1rem',
                        lineHeight: 1.6,
                        marginBottom: '1.5rem',
                      }}
                    >
                      {stepData.description}
                    </p>

                    {/* Bullet capabilities */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {stepData.points.map((pt, pIdx) => (
                        <motion.div
                          key={pIdx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: pIdx * 0.08 }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            fontSize: '0.9375rem',
                            color: 'rgba(255, 255, 255, 0.85)',
                          }}
                        >
                          <div
                            style={{
                              width: '1.25rem',
                              height: '1.25rem',
                              borderRadius: '50%',
                              background: 'rgba(214, 253, 112, 0.15)',
                              border: '1px solid rgba(214, 253, 112, 0.4)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#d6fd70',
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              flexShrink: 0,
                            }}
                          >
                            ✓
                          </div>
                          <span>{pt}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column: Dynamic Simulated Interactive Visual */}
              <div>
                <SpotlightCard
                  spotlightColor="rgba(214, 253, 112, 0.2)"
                  style={{
                    borderRadius: '1.5rem',
                    background: '#141414',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(214, 253, 112, 0.06)',
                    overflow: 'hidden',
                    minHeight: '380px',
                    position: 'relative',
                  }}
                >
                  <AnimatePresence mode="wait">
                    {/* Visual 1: AI Grounding Engine */}
                    {activeStep === 0 && (
                      <motion.div
                        key="ai-visual"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.35 }}
                        style={{ padding: '2rem' }}
                      >
                        {/* Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#d6fd70', boxShadow: '0 0 10px #d6fd70' }} />
                            <span style={{ fontWeight: 700, fontSize: '0.875rem', color: '#ffffff' }}>Permafix AI Grounding Pipeline</span>
                          </div>
                          <span style={{ fontSize: '0.75rem', background: 'rgba(214,253,112,0.15)', color: '#d6fd70', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontWeight: 600 }}>
                            Confidence: 98.6%
                          </span>
                        </div>

                        {/* Simulated Inbound Ticket */}
                        <div style={{ background: '#0a0a0a', borderRadius: '0.75rem', padding: '1rem', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.35rem' }}>
                            From: alex@acme-corp.com • Subject: SSO Authentication Loop Issue
                          </div>
                          <div style={{ fontSize: '0.875rem', color: '#ffffff', lineHeight: 1.4 }}>
                            "Our team is stuck in a SAML loop after updating Okta metadata. How do we invalidate the cached ACS URL?"
                          </div>
                        </div>

                        {/* AI Grounded Draft Output */}
                        <div style={{ background: 'rgba(214, 253, 112, 0.05)', border: '1px solid rgba(214, 253, 112, 0.3)', borderRadius: '0.75rem', padding: '1.25rem', position: 'relative' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#d6fd70', textTransform: 'uppercase' }}>✨ AI Draft Grounded in Knowledge Article KB-402</span>
                          </div>
                          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5, margin: 0 }}>
                            "Hi Alex, in Quelp Admin &gt; Settings &gt; SSO, toggle 'Force Re-sync Metadata' and flush the SAML session tokens. This clears the cached ACS endpoint immediately."
                          </p>
                          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                            <button style={{ background: '#d6fd70', color: '#0f0f0f', border: 'none', borderRadius: '0.375rem', padding: '0.4rem 0.85rem', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}>
                              Approve &amp; Send
                            </button>
                            <button style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '0.375rem', padding: '0.4rem 0.85rem', fontSize: '0.75rem', cursor: 'pointer' }}>
                              Edit Draft
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Visual 2: White-Label Portal Customizer */}
                    {activeStep === 1 && (
                      <motion.div
                        key="portal-visual"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.35 }}
                        style={{ padding: '2rem' }}
                      >
                        {/* Domain bar */}
                        <div style={{ background: '#0a0a0a', borderRadius: '0.5rem', padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                          <span style={{ color: '#16a34a', fontSize: '0.8rem' }}>🔒</span>
                          <span style={{ fontFamily: 'monospace', fontSize: '0.8125rem', color: '#d6fd70', fontWeight: 600 }}>
                            https://support.yourbrand.com
                          </span>
                          <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>CNAME Active</span>
                        </div>

                        {/* Theme Tokens Preview */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
                          <div style={{ background: '#0a0a0a', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.35rem' }}>Brand Color</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: '#d6fd70' }} />
                              <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#ffffff' }}>#D6FD70</span>
                            </div>
                          </div>
                          <div style={{ background: '#0a0a0a', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.35rem' }}>Typography</div>
                            <span style={{ fontSize: '0.75rem', color: '#ffffff', fontWeight: 700 }}>Custom Font</span>
                          </div>
                          <div style={{ background: '#0a0a0a', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.35rem' }}>Branding</div>
                            <span style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 700 }}>100% Unbranded</span>
                          </div>
                        </div>

                        {/* Portal Mockup View */}
                        <div style={{ background: '#0a0a0a', borderRadius: '0.75rem', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <div style={{ fontWeight: 800, fontSize: '0.9375rem', color: '#ffffff' }}>YourBrand Help Center</div>
                            <span style={{ fontSize: '0.75rem', color: '#d6fd70' }}>Sign In →</span>
                          </div>
                          <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '0.375rem', padding: '0.6rem 0.85rem', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)' }}>
                            🔍 Search documentation, API guides, and system status...
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Visual 3: Mail Relay & Deliverability Pipeline */}
                    {activeStep === 2 && (
                      <motion.div
                        key="mail-visual"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.35 }}
                        style={{ padding: '2rem' }}
                      >
                        {/* Server Status Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#16a34a', boxShadow: '0 0 10px #16a34a' }} />
                            <span style={{ fontWeight: 700, fontSize: '0.875rem', color: '#ffffff' }}>Stalwart Inbound + AWS SES Relay</span>
                          </div>
                          <span style={{ fontSize: '0.75rem', color: '#d6fd70', fontWeight: 600 }}>Deliverability 99.98%</span>
                        </div>

                        {/* Authentication Checklist */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem' }}>
                          {[
                            { name: 'SPF Alignment', status: 'PASS (v=spf1 include:amazonses.com ~all)' },
                            { name: 'DKIM Signature', status: 'PASS (2048-bit RSA qolve.systems)' },
                            { name: 'DMARC Policy', status: 'PASS (p=reject; rua=mailto:dmarc@qolve.systems)' },
                            { name: 'TLS Encryption', status: 'ENFORCED (TLS 1.3 Cipher Suite)' },
                          ].map((item, idx) => (
                            <div
                              key={idx}
                              style={{
                                background: '#0a0a0a',
                                borderRadius: '0.5rem',
                                padding: '0.6rem 0.85rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                border: '1px solid rgba(255,255,255,0.06)',
                              }}
                            >
                              <span style={{ fontSize: '0.8125rem', color: '#ffffff', fontWeight: 600 }}>{item.name}</span>
                              <span style={{ fontSize: '0.7rem', color: '#d6fd70', fontFamily: 'monospace' }}>{item.status}</span>
                            </div>
                          ))}
                        </div>

                        {/* Live SLA Throughput */}
                        <div style={{ background: '#0a0a0a', borderRadius: '0.5rem', padding: '0.75rem', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
                          <div>
                            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>Latency</div>
                            <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#d6fd70' }}>142ms</div>
                          </div>
                          <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
                          <div>
                            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>Packet Loss</div>
                            <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#d6fd70' }}>0.00%</div>
                          </div>
                          <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
                          <div>
                            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>SLA Compliance</div>
                            <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#d6fd70' }}>100%</div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </SpotlightCard>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .sticky-scroll-lock-container {
            height: auto !important;
          }
          .sticky-scroll-lock-viewport {
            position: relative !important;
            height: auto !important;
            padding: 4rem 0 !important;
          }
          .sticky-scroll-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </div>
  )
}
