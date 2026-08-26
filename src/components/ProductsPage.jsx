import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Ascii3DStarfield from './ui/Ascii3DStarfield'
import SpotlightCard from './ui/SpotlightCard'

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z" fill="currentColor" />
  </svg>
)

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d6fd70" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const CrossIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

// Interactive Simulator Sample Tickets
const MOCK_TICKETS = [
  {
    id: 'TICK-8042',
    author: 'Sarah Jenkins',
    email: 'sarah@vertexcloud.io',
    subject: 'Custom CNAME SSL certificate pending propagation',
    preview: 'We mapped support.vertexcloud.io to your CNAME, but the SSL handshake is timing out on Cloudflare...',
    priority: 'P1 HIGH',
    priorityColor: '#ff6b6b',
    category: 'Infrastructure',
    sentiment: '96% Urgent',
    timestamp: '3m ago',
    messages: [
      { sender: 'Sarah Jenkins', role: 'Customer', time: '14:22', text: 'Hi team, we configured our DNS record for support.vertexcloud.io pointing to your proxy, but our clients are getting an SSL handshake error. Can you check the certificate issuance status?' },
    ],
    aiDraft: 'Hello Sarah! I checked our proxy edge logs for support.vertexcloud.io. The Let’s Encrypt TLS certificate has completed validation and is active. Please purge your local DNS resolver cache and verify.',
    confidence: '98.8%',
  },
  {
    id: 'TICK-8039',
    author: 'David Zhang',
    email: 'david@neuraflux.ai',
    subject: 'Webhook payload schema for Permafix ticket triage',
    preview: 'Where can we configure our webhook endpoint to receive real-time JSON summaries when tickets are closed?',
    priority: 'P2 NORMAL',
    priorityColor: '#d6fd70',
    category: 'API & Integrations',
    sentiment: '88% Inquisitive',
    timestamp: '18m ago',
    messages: [
      { sender: 'David Zhang', role: 'Customer', time: '13:58', text: 'Hey, does Quelp support outbound Webhook signatures (HMAC SHA-256) when an AI draft is approved by an agent?' },
    ],
    aiDraft: 'Hi David! Yes, Quelp includes signed webhook events (ticket.triage.completed, ticket.resolved) with HMAC SHA-256 headers. You can configure your signing secret in Settings > Webhooks > Security.',
    confidence: '99.4%',
  },
  {
    id: 'TICK-8031',
    author: 'Elena Rostova',
    email: 'elena@novafinance.de',
    subject: 'White-label dark theme CSS token customization',
    preview: 'Can we inject custom CSS variables into the embedded help widget to match our brand neon lime?',
    priority: 'P3 LOW',
    priorityColor: '#808080',
    category: 'Branding',
    sentiment: '92% Positive',
    timestamp: '1h ago',
    messages: [
      { sender: 'Elena Rostova', role: 'Customer', time: '12:40', text: 'We want to align the customer portal button border radius and brand tokens (#d6fd70). Is this supported in the Starter tier?' },
    ],
    aiDraft: 'Hello Elena! Full CSS token control (including --radius, --accent-color, and custom typography) is supported across all tiers in the Quelp Branding Hub.',
    confidence: '97.6%',
  },
]

export default function ProductsPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('inbox')
  const [selectedTicket, setSelectedTicket] = useState(MOCK_TICKETS[0])
  const [draftApproved, setDraftApproved] = useState(false)
  const [customBrandColor, setCustomBrandColor] = useState('#d6fd70')
  const [customDomain, setCustomDomain] = useState('support.acmefinance.io')
  const [brandDarkMode, setBrandDarkMode] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  const handleApproveDraft = () => {
    setDraftApproved(true)
    setTimeout(() => setDraftApproved(false), 2500)
  }

  const comparisonData = [
    { feature: '100% White-Label (0 Vendor Branding)', quelp: true, zendesk: false, intercom: false, freshdesk: false },
    { feature: 'Grounded AI Support Assistant (Permafix)', quelp: true, zendesk: 'Paid Add-on', intercom: '$0.99/Resolution', freshdesk: 'Limited' },
    { feature: 'Custom CNAME & Automatic Wildcard SSL', quelp: true, zendesk: 'Enterprise Only', intercom: false, freshdesk: 'Add-on' },
    { feature: 'Dedicated Stalwart Inbound Mail Relay', quelp: true, zendesk: false, intercom: false, freshdesk: false },
    { feature: 'Self-Hosted / Hybrid Private Cloud Option', quelp: true, zendesk: false, intercom: false, freshdesk: false },
    { feature: 'Predictable Low-Cost Tiering (No Seat Tax)', quelp: true, zendesk: false, intercom: false, freshdesk: false },
  ]

  return (
    <div className="page_products" id="products" style={{ background: '#0f0f0f', minHeight: '100vh', position: 'relative', overflowX: 'hidden', overflowY: 'visible', paddingTop: '6.5rem', paddingBottom: '6rem' }}>
      {/* 3D Celestial Breathing Starfield */}
      <Ascii3DStarfield variant="products" theme="dark" opacity={0.75} numStars={180} />

      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '70vw',
          height: '40rem',
          background: 'radial-gradient(circle, rgba(214, 253, 112, 0.12) 0%, rgba(15, 15, 15, 0) 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="padding-global" style={{ position: 'relative', zIndex: 5, maxWidth: '84rem', margin: '0 auto' }}>
        <div className="container-large">
          
          {/* Header Hero Section */}
          <div className="vertical-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Cyber Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
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
              <span style={{ fontFamily: 'Geist Mono, monospace', letterSpacing: '0.04em' }}>
                QUELP PLATFORM v2.4 • WHITE-LABEL SUITE
              </span>
            </motion.div>

            {/* Page Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-align-center"
              style={{ maxWidth: '68rem', margin: '0 auto', color: '#ffffff', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.1 }}
            >
              The Next-Generation Support Platform. <br />
              <span style={{ color: '#d6fd70', textShadow: '0 0 24px rgba(214, 253, 112, 0.4)' }}>
                100% White-Labeled.
              </span>
            </motion.h1>

            <div className="spacer-medium" />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              style={{ maxWidth: '44rem', margin: '0 auto' }}
            >
              <div className="text-base text-align-center" style={{ color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.7, fontSize: '1.05rem' }}>
                Replace bloated legacy ticketing suites with an unbranded, high-throughput customer support platform. Powered by grounded Permafix AI triage, custom CNAME portals, and zero-loss email routing.
              </div>
            </motion.div>

            <div className="spacer-large" />

            {/* Top Quick Actions */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <button
                onClick={() => onNavigate && onNavigate('home')}
                className="button"
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '9999px',
                  padding: '0.65rem 1.4rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)')}
              >
                ← Back to Overview
              </button>

              <button
                onClick={() => onNavigate && onNavigate('home', 'contact')}
                className="button"
                style={{
                  background: '#d6fd70',
                  color: '#0f0f0f',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '0.65rem 1.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 0 24px rgba(214, 253, 112, 0.4)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px) scale(1.02)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
              >
                <span>Deploy Quelp Instance</span>
                <ArrowIcon />
              </button>
            </motion.div>
          </div>

          <div className="spacer-section-large" />

          {/* ========================================================================= */}
          {/* INTERACTIVE LIVE PLATFORM PLAYGROUND */}
          {/* ========================================================================= */}
          <div
            style={{
              position: 'relative',
              borderRadius: '1.25rem',
              background: 'rgba(18, 18, 20, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 32px 80px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(214, 253, 112, 0.2)',
              overflow: 'hidden',
              backdropFilter: 'blur(24px)',
            }}
          >
            {/* Top Interactive Tabs Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1.25rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              {/* Left Mac Dots & Mode Indicator */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                <span style={{ marginLeft: '0.5rem', fontFamily: 'Geist Mono, monospace', fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)' }}>
                  QUELP // LIVE INTERACTIVE RUNTIME
                </span>
              </div>

              {/* Subsystem Selectors */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: 'rgba(0,0,0,0.4)', padding: '0.25rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.06)', overflowX: 'auto', maxWidth: '100%' }}>
                {[
                  { id: 'inbox', label: 'Omnichannel Inbox' },
                  { id: 'whitelabel', label: 'Branding Studio' },
                  { id: 'ai', label: 'Permafix AI Engine' },
                  { id: 'relay', label: 'Mail Relay Telemetry' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      background: activeTab === tab.id ? 'rgba(214, 253, 112, 0.15)' : 'transparent',
                      border: activeTab === tab.id ? '1px solid rgba(214, 253, 112, 0.35)' : '1px solid transparent',
                      color: activeTab === tab.id ? '#d6fd70' : 'rgba(255, 255, 255, 0.65)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontFamily: 'Geist Mono, monospace',
                      fontWeight: activeTab === tab.id ? 700 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* TAB 1: OMNICHANNEL INBOX SIMULATOR */}
            {activeTab === 'inbox' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', minHeight: '32rem' }}>
                {/* Left Ticket Feed */}
                <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(0, 0, 0, 0.2)', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '34rem', overflowY: 'auto' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', padding: '0 0.25rem' }}>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'Geist Mono, monospace', color: '#d6fd70', fontWeight: 700 }}>
                      INCOMING QUEUE (3)
                    </span>
                    <span style={{ fontSize: '0.65rem', fontFamily: 'Geist Mono, monospace', color: 'rgba(255,255,255,0.4)' }}>
                      SORT: PRIORITY
                    </span>
                  </div>

                  {MOCK_TICKETS.map((t) => {
                    const isSelected = selectedTicket.id === t.id
                    return (
                      <button
                        key={t.id}
                        onClick={() => setSelectedTicket(t)}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.35rem',
                          padding: '0.85rem',
                          background: isSelected ? 'rgba(214, 253, 112, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                          border: isSelected ? '1px solid rgba(214, 253, 112, 0.35)' : '1px solid rgba(255, 255, 255, 0.05)',
                          borderRadius: '0.65rem',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.18s ease',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: '0.65rem', color: isSelected ? '#d6fd70' : 'rgba(255,255,255,0.5)' }}>
                            {t.id}
                          </span>
                          <span style={{ fontSize: '0.6rem', padding: '0.1rem 0.4rem', borderRadius: '4px', background: `${t.priorityColor}22`, color: t.priorityColor, fontWeight: 700, fontFamily: 'Geist Mono, monospace' }}>
                            {t.priority}
                          </span>
                        </div>
                        <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
                          {t.subject}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {t.preview}
                        </div>
                      </button>
                    )
                  })}
                </div>

                {/* Right Ticket Workspace */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'rgba(15, 15, 15, 0.4)' }}>
                  <div>
                    {/* Ticket Header Metadata */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                          <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: '0.75rem', color: '#d6fd70', fontWeight: 700 }}>
                            {selectedTicket.id}
                          </span>
                          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>•</span>
                          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>
                            {selectedTicket.author} ({selectedTicket.email})
                          </span>
                        </div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                          {selectedTicket.subject}
                        </h3>
                      </div>

                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <div style={{ padding: '0.25rem 0.6rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.7rem', fontFamily: 'Geist Mono, monospace', color: 'rgba(255,255,255,0.7)' }}>
                          CATEGORY: <strong style={{ color: '#ffffff' }}>{selectedTicket.category}</strong>
                        </div>
                        <div style={{ padding: '0.25rem 0.6rem', borderRadius: '4px', background: 'rgba(214, 253, 112, 0.1)', border: '1px solid rgba(214, 253, 112, 0.25)', fontSize: '0.7rem', fontFamily: 'Geist Mono, monospace', color: '#d6fd70' }}>
                          AI CONFIDENCE: {selectedTicket.confidence}
                        </div>
                      </div>
                    </div>

                    {/* Messages Thread */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                      {selectedTicket.messages.map((m, idx) => (
                        <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '0.75rem', padding: '1rem' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>{m.sender}</span>
                            <span style={{ fontSize: '0.7rem', fontFamily: 'Geist Mono, monospace', color: 'rgba(255,255,255,0.4)' }}>{m.time}</span>
                          </div>
                          <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                            {m.text}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Grounded AI Draft Generator */}
                    <div style={{ background: 'rgba(214, 253, 112, 0.04)', border: '1px solid rgba(214, 253, 112, 0.25)', borderRadius: '0.75rem', padding: '1rem', position: 'relative' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#d6fd70', boxShadow: '0 0 6px #d6fd70' }} />
                          <span style={{ fontSize: '0.72rem', fontFamily: 'Geist Mono, monospace', color: '#d6fd70', fontWeight: 700 }}>
                            PERMAFIX AI GROUNDED DRAFT (KNOWLEDGE BASE RETRIEVAL)
                          </span>
                        </div>
                        <span style={{ fontSize: '0.65rem', fontFamily: 'Geist Mono, monospace', color: 'rgba(255,255,255,0.4)' }}>
                          HUMAN-IN-THE-LOOP REQUIRED
                        </span>
                      </div>

                      <div style={{ fontSize: '0.85rem', color: '#ffffff', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                        {selectedTicket.aiDraft}
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                        <button
                          onClick={handleApproveDraft}
                          style={{
                            background: draftApproved ? '#27c93f' : '#d6fd70',
                            color: '#0f0f0f',
                            border: 'none',
                            borderRadius: '9999px',
                            padding: '0.4rem 1rem',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          {draftApproved ? '✓ Draft Approved & Dispatched!' : 'Approve & Send Draft →'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: WHITE-LABEL BRANDING STUDIO */}
            {activeTab === 'whitelabel' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', minHeight: '32rem', padding: '1.5rem', gap: '1.5rem' }}>
                {/* Brand Configuration Controls */}
                <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.75rem', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'Geist Mono, monospace', color: '#d6fd70', fontWeight: 700 }}>
                      01 // CUSTOM CNAME ROUTING
                    </span>
                    <input
                      type="text"
                      value={customDomain}
                      onChange={(e) => setCustomDomain(e.target.value)}
                      style={{
                        width: '100%',
                        marginTop: '0.4rem',
                        padding: '0.55rem 0.75rem',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '0.4rem',
                        color: '#ffffff',
                        fontFamily: 'Geist Mono, monospace',
                        fontSize: '0.8rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'Geist Mono, monospace', color: '#d6fd70', fontWeight: 700 }}>
                      02 // ACCENT BRAND COLOR
                    </span>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.4rem', flexWrap: 'wrap' }}>
                      {['#d6fd70', '#38bdf8', '#a855f7', '#fb923c', '#f43f5e'].map((c) => (
                        <button
                          key={c}
                          onClick={() => setCustomBrandColor(c)}
                          style={{
                            width: '2rem',
                            height: '2rem',
                            borderRadius: '50%',
                            background: c,
                            border: customBrandColor === c ? '2px solid #ffffff' : '2px solid transparent',
                            cursor: 'pointer',
                            boxShadow: customBrandColor === c ? `0 0 12px ${c}` : 'none',
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'Geist Mono, monospace', color: '#d6fd70', fontWeight: 700 }}>
                      03 // PORTAL THEME
                    </span>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.4rem' }}>
                      <button
                        onClick={() => setBrandDarkMode(true)}
                        style={{
                          flex: 1,
                          padding: '0.5rem',
                          borderRadius: '0.4rem',
                          background: brandDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.02)',
                          border: brandDarkMode ? '1px solid #d6fd70' : '1px solid rgba(255,255,255,0.08)',
                          color: '#ffffff',
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                          fontWeight: 600,
                        }}
                      >
                        Obsidian Dark
                      </button>
                      <button
                        onClick={() => setBrandDarkMode(false)}
                        style={{
                          flex: 1,
                          padding: '0.5rem',
                          borderRadius: '0.4rem',
                          background: !brandDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.02)',
                          border: !brandDarkMode ? '1px solid #d6fd70' : '1px solid rgba(255,255,255,0.08)',
                          color: '#ffffff',
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                          fontWeight: 600,
                        }}
                      >
                        Clean Light
                      </button>
                    </div>
                  </div>
                </div>

                {/* Live Client Portal Preview */}
                <div style={{ background: brandDarkMode ? '#121214' : '#ffffff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: brandDarkMode ? '#ffffff' : '#0f0f0f' }}>
                  <div>
                    {/* Simulated Browser URL bar */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0.75rem', background: brandDarkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)', borderRadius: '0.4rem', marginBottom: '1.25rem' }}>
                      <span style={{ fontSize: '0.75rem', color: '#27c93f' }}>🔒</span>
                      <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: '0.75rem', color: brandDarkMode ? '#d6fd70' : '#0f0f0f', fontWeight: 600 }}>
                        https://{customDomain}
                      </span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '1.75rem', height: '1.75rem', borderRadius: '0.35rem', background: customBrandColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#0f0f0f' }}>
                          A
                        </div>
                        <span style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em', color: brandDarkMode ? '#ffffff' : '#0f0f0f' }}>
                          Acme Support Center
                        </span>
                      </div>
                      <button style={{ background: customBrandColor, color: '#0f0f0f', border: 'none', padding: '0.4rem 0.85rem', borderRadius: '9999px', fontWeight: 700, fontSize: '0.75rem' }}>
                        Submit Ticket
                      </button>
                    </div>

                    <div style={{ textAlign: 'center', maxWidth: '28rem', margin: '2rem auto' }}>
                      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem', color: brandDarkMode ? '#ffffff' : '#0f0f0f' }}>
                        How can we assist you today?
                      </h2>
                      <div style={{ background: brandDarkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)', border: `1px solid ${customBrandColor}44`, borderRadius: '9999px', padding: '0.65rem 1rem', textAlign: 'left', color: brandDarkMode ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)', fontSize: '0.85rem' }}>
                        🔍 Search documentation, API specs, and guides...
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'center', fontSize: '0.65rem', fontFamily: 'Geist Mono, monospace', color: brandDarkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.4)', borderTop: brandDarkMode ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)', paddingTop: '0.75rem' }}>
                    POWERED BY CLIENT CLUSTER // ZERO QUELP MARKS EXPOSED
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: PERMAFIX AI RETRIEVAL ENGINE */}
            {activeTab === 'ai' && (
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.75rem', padding: '1.25rem' }}>
                    <div style={{ fontSize: '0.7rem', fontFamily: 'Geist Mono, monospace', color: '#d6fd70', marginBottom: '0.4rem' }}>01 // INCOMING INGESTION</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>Semantic Vector Extraction</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.35rem', lineHeight: 1.5 }}>
                      Extracts intent, sentiment, entity tags, and technical stack parameters in sub-40ms runtime.
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.75rem', padding: '1.25rem' }}>
                    <div style={{ fontSize: '0.7rem', fontFamily: 'Geist Mono, monospace', color: '#d6fd70', marginBottom: '0.4rem' }}>02 // PRIVATE DOCS GROUNDING</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>Strict Zero-Hallucination Gate</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.35rem', lineHeight: 1.5 }}>
                      Queries ONLY your verified markdown articles, release notes, and FAQs. Rejects speculative answers.
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.75rem', padding: '1.25rem' }}>
                    <div style={{ fontSize: '0.7rem', fontFamily: 'Geist Mono, monospace', color: '#d6fd70', marginBottom: '0.4rem' }}>03 // AGENT WORKSPACE INJECTION</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>Human-in-the-Loop Safe</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.35rem', lineHeight: 1.5 }}>
                      Drafts pre-populated in agent editor with confidence score. 1-click approve, modify, or regenerate.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: MAIL RELAY TELEMETRY */}
            {activeTab === 'relay' && (
              <div style={{ padding: '1.5rem', background: '#09090b', fontFamily: 'Geist Mono, monospace', fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ color: '#d6fd70' }}>[STALWART-SES-PIPELINE] LIVE MAIL TELEMETRY STREAM v2.4</div>
                <div style={{ color: 'rgba(255,255,255,0.4)' }}>-------------------------------------------------------------</div>
                <div>[14:22:01.042] INBOUND: IMAP IDLE event captured via Stalwart daemon [sock: 0x7f9a2]</div>
                <div>[14:22:01.089] AUTH: DKIM=PASS, SPF=PASS (ip=54.240.8.12), DMARC=PASS (p=reject)</div>
                <div>[14:22:01.120] PARSER: Ingested MIME multipart (attachments=0, body_len=482B)</div>
                <div>[14:22:01.185] ROUTER: Tenant UUID: 8f42-acme -&gt; Injected to PostgreSQL isolated schema</div>
                <div>[14:22:01.240] WEBHOOK: Dispatched event ticket.created (HTTP 200, latency=42ms)</div>
                <div style={{ color: '#27c93f' }}>[14:22:01.300] STATUS: RELAY PIPELINE HEALTHY (Loss: 0.00%, Avg Ingest: 142ms)</div>
              </div>
            )}
          </div>

          <div className="spacer-section-large" />

          {/* ========================================================================= */}
          {/* 6 CORE ARCHITECTURAL PILLARS (BENTO GRID) */}
          {/* ========================================================================= */}
          <div className="vertical-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="tag" data-anim>
              <div className="dot-square" />
              <div>Platform Architecture</div>
            </div>
            <div className="spacer-medium" />
            <h2 className="text-align-center" style={{ color: '#ffffff' }}>
              Engineered for Autonomy and Scale
            </h2>
          </div>

          <div className="spacer-large" />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                id: '01',
                title: 'Multi-Tenant Schema Isolation',
                badge: 'Security',
                desc: 'Strict tenant isolation across database queries and full-text search. Customer data never mingles in shared table pools.',
              },
              {
                id: '02',
                title: 'Dynamic CNAME & Auto SSL',
                badge: 'Branding',
                desc: 'Map custom subdomains (e.g. support.yourdomain.com) with automatic Let’s Encrypt certificate issuance and renewal.',
              },
              {
                id: '03',
                title: 'Permafix Grounded AI Intelligence',
                badge: 'Automation',
                desc: 'Contextual thread summaries and grounded response generation. Trained strictly on your approved knowledge base.',
              },
              {
                id: '04',
                title: 'High-Throughput Mail Relay',
                badge: 'Deliverability',
                desc: 'Engineered on Stalwart Mail Server & AWS SES outbound relay with 100% DKIM, SPF, and DMARC enforcement.',
              },
              {
                id: '05',
                title: 'Self-Service Knowledge Hub',
                badge: 'Deflection',
                desc: 'Search-optimized articles, categorisation, and FAQ portals that resolve routine inquiries before they reach agents.',
              },
              {
                id: '06',
                title: 'Real-Time SLA & Telemetry Dashboards',
                badge: 'Operations',
                desc: 'Instant visibility into first-response speed (FRT), resolution velocity, agent workloads, and CSAT trends.',
              },
            ].map((card) => (
              <SpotlightCard
                key={card.id}
                style={{
                  background: 'rgba(18, 18, 20, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '1rem',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '16rem',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: '0.75rem', color: '#d6fd70', fontWeight: 700 }}>
                      // {card.id}
                    </span>
                    <span style={{ fontSize: '0.65rem', fontFamily: 'Geist Mono, monospace', color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.05)', padding: '0.15rem 0.5rem', borderRadius: '9999px' }}>
                      {card.badge}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                    {card.title}
                  </h3>
                  <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
                    {card.desc}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>

          <div className="spacer-section-large" />

          {/* ========================================================================= */}
          {/* COMPETITIVE ARCHITECTURE MATRIX */}
          {/* ========================================================================= */}
          <div className="vertical-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="tag" data-anim>
              <div className="dot-square" />
              <div>Competitive Matrix</div>
            </div>
            <div className="spacer-medium" />
            <h2 className="text-align-center" style={{ color: '#ffffff' }}>
              Why Modern SaaS Teams Choose Quelp
            </h2>
          </div>

          <div className="spacer-large" />

          <div
            style={{
              background: 'rgba(18, 18, 20, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '1rem',
              overflowX: 'auto',
              boxShadow: '0 20px 48px rgba(0,0,0,0.6)',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', background: 'rgba(255, 255, 255, 0.02)' }}>
                  <th style={{ padding: '1rem 1.25rem', color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem', fontFamily: 'Geist Mono, monospace' }}>CAPABILITY</th>
                  <th style={{ padding: '1rem 1.25rem', color: '#d6fd70', fontSize: '0.85rem', fontFamily: 'Geist Mono, monospace', fontWeight: 800 }}>QUELP PLATFORM</th>
                  <th style={{ padding: '1rem 1.25rem', color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.8rem' }}>Zendesk</th>
                  <th style={{ padding: '1rem 1.25rem', color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.8rem' }}>Intercom</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <td style={{ padding: '1rem 1.25rem', color: '#ffffff', fontSize: '0.875rem', fontWeight: 600 }}>{row.feature}</td>
                    <td style={{ padding: '1rem 1.25rem', color: '#d6fd70', fontWeight: 700 }}>
                      {typeof row.quelp === 'boolean' ? (row.quelp ? <CheckIcon /> : <CrossIcon />) : row.quelp}
                    </td>
                    <td style={{ padding: '1rem 1.25rem', color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.8rem' }}>
                      {typeof row.zendesk === 'boolean' ? (row.zendesk ? <CheckIcon /> : <CrossIcon />) : row.zendesk}
                    </td>
                    <td style={{ padding: '1rem 1.25rem', color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.8rem' }}>
                      {typeof row.intercom === 'boolean' ? (row.intercom ? <CheckIcon /> : <CrossIcon />) : row.intercom}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="spacer-section-large" />

          {/* ========================================================================= */}
          {/* FINAL LAUNCH CARD */}
          {/* ========================================================================= */}
          <div
            style={{
              position: 'relative',
              borderRadius: '1.25rem',
              background: 'linear-gradient(135deg, rgba(214, 253, 112, 0.12) 0%, rgba(18, 18, 20, 0.95) 100%)',
              border: '1px solid rgba(214, 253, 112, 0.3)',
              padding: '3rem 2rem',
              textAlign: 'center',
              boxShadow: '0 24px 64px rgba(0,0,0,0.8), 0 0 30px rgba(214, 253, 112, 0.15)',
            }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
              Ready to Upgrade Your Customer Support?
            </h2>
            <div style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '34rem', margin: '0 auto 1.75rem', lineHeight: 1.6 }}>
              Deploy a dedicated, fully white-labeled Quelp instance for your organization in minutes.
            </div>

            <button
              onClick={() => onNavigate && onNavigate('home', 'contact')}
              style={{
                background: '#d6fd70',
                color: '#0f0f0f',
                border: 'none',
                borderRadius: '9999px',
                padding: '0.75rem 2rem',
                fontSize: '0.9375rem',
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: '0 0 24px rgba(214, 253, 112, 0.45)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Request Pilot Onboarding →
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
