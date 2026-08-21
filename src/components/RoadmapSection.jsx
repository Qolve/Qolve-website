const PLATFORM_PILLARS = [
  {
    pillar: 'Pillar 1',
    icon: '🍃',
    title: 'Resilient Mail & Relay Infrastructure',
    cardBg: 'liquid-glass is-emerald',
    description: 'High-availability email routing built on Stalwart Mail Server with AWS SES outbound relay, featuring strict SPF, DKIM, and DMARC identity verification under qolve.systems.',
    capabilities: [
      'Zero-loss inbound & outbound email processing',
      'Custom MAIL FROM subdomain alignment',
      'Automated DKIM signature verification',
      'Dedicated support mailboxes (support@qolve.systems)',
    ],
  },
  {
    pillar: 'Pillar 2',
    icon: '🌿',
    title: 'Omnichannel Helpdesk & Ticket Triage',
    cardBg: 'liquid-glass',
    description: 'A unified workspace consolidating customer inquiries from email, live web widgets, and customer portals into structured, assigned ticket streams.',
    capabilities: [
      'Multi-channel inbound ticket consolidation',
      'Threaded conversation history & customer context',
      'Automated team assignment rules & priority tagging',
      'Real-time status tracking & agent collision prevention',
    ],
  },
  {
    pillar: 'Pillar 3',
    icon: '💧',
    title: '100% White-Label Customer Experience',
    cardBg: 'liquid-glass is-subtle',
    description: 'Complete branding autonomy allowing growing businesses to present customer support as an integral part of their software ecosystem.',
    capabilities: [
      'Custom CNAME domain mapping for client portals',
      'Workspace theme customization (logos, colors, typography)',
      'Branded customer self-service knowledge base',
      'Customizable email templates & notification headers',
    ],
  },
  {
    pillar: 'Pillar 4',
    icon: '🔮',
    title: 'Grounded AI Assistance (Permafix AI)',
    cardBg: 'liquid-glass',
    description: 'Intelligent AI agent layer designed to auto-classify incoming tickets, draft grounded response suggestions, and escalate complex issues safely.',
    capabilities: [
      'Automatic ticket category & sentiment analysis',
      'Grounded reply drafting from approved knowledge articles',
      'Instant thread summarization for support agents',
      'Human-in-the-loop escalation controls & safety rules',
    ],
  },
  {
    pillar: 'Pillar 5',
    icon: '🛡️',
    title: 'Multi-Tenant Security & Access Control',
    cardBg: 'liquid-glass is-deep',
    description: 'Enterprise-grade multi-tenancy architecture ensuring complete data isolation, role-based access control, and secure API access.',
    capabilities: [
      'Strict tenant data isolation & encrypted storage',
      'Role-Based Access Control (RBAC) for agents & admins',
      'OAuth & single sign-on (SSO) authentication',
      'HMAC-SHA256 signed webhook events & API tokens',
    ],
  },
  {
    pillar: 'Pillar 6',
    icon: '📊',
    title: 'SLAs, Rules & Performance Analytics',
    cardBg: 'liquid-glass is-subtle',
    description: 'Comprehensive operational intelligence giving leadership full visibility into response speeds, resolution metrics, and customer satisfaction.',
    capabilities: [
      'Configurable SLA response & resolution targets',
      'Automated escalation workflows for breached tickets',
      'Real-time CSAT customer feedback collection',
      'Exportable performance dashboards & queue metrics',
    ],
  },
]

export default function RoadmapSection() {
  return (
    <section className="section_about" id="roadmap" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0', background: '#121413' }}>
      <div className="padding-global">
        <div className="container-large" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'left', marginBottom: '3.5rem', maxWidth: '44rem' }}>
            {/* Tag pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                background: 'rgba(45, 75, 62, 0.25)',
                border: '1px solid rgba(173, 206, 189, 0.2)',
                color: '#adcebd',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#adcebd', boxShadow: '0 0 6px rgba(173,206,189,0.8)' }} />
              <span>Organic Architecture Pillars</span>
            </div>

            <h2 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: '#e2e3e0', letterSpacing: '-0.025em', lineHeight: 1.15, fontWeight: 600, marginBottom: '1rem' }}>
              Core Pillars of the Qolve Ecosystem
            </h2>

            <p style={{ color: '#c1c8c3', fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Engineered by Qolve to deliver enterprise-level helpdesk performance, white-label branding, and grounded AI support automation.
            </p>
          </div>

          {/* Grid of Platform Pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {PLATFORM_PILLARS.map((item, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '2.25rem', minHeight: '26rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="vertical-space-between" style={{ height: '100%', position: 'relative', zIndex: 2 }}>
                  <div>
                    {/* Header Row */}
                    <div style={{ marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          padding: '0.3rem 0.75rem',
                          borderRadius: '9999px',
                          background: 'rgba(45, 75, 62, 0.3)',
                          color: '#adcebd',
                          border: '1px solid rgba(173, 206, 189, 0.25)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {item.pillar}
                      </span>
                      <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                    </div>

                    <h3
                      style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '1.35rem', fontWeight: 600, color: '#e2e3e0', marginBottom: '0.75rem', letterSpacing: '-0.015em' }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#c1c8c3', marginBottom: '1.25rem' }}
                    >
                      {item.description}
                    </p>

                    {/* Capabilities */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {item.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                          <span style={{ color: '#adcebd', fontSize: '0.875rem', lineHeight: 1.4 }}>✓</span>
                          <span
                            style={{ fontSize: '0.85rem', lineHeight: 1.5, color: '#c1c8c3' }}
                          >
                            {cap}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <span style={{ fontSize: '0.75rem', color: '#adcebd', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Qolve Architecture Spec
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}




