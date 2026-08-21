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
    <section className="section_about" id="roadmap" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
      <div className="padding-global">
        <div className="container-large">
          <div className="vertical-center">
            {/* Tag pill */}
            <div className="tag" data-anim>
              <div className="dot-square" />
              <div>🌱 Organic Architecture Pillars</div>
            </div>

            <div className="spacer-large" />

            <div className="max-width-medium is-41rem">
              <h2 className="text-align-center" data-anim style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                Core Pillars of the Qolve Ecosystem
              </h2>
            </div>

            <div className="spacer-large" />

            <div className="max-width-medium">
              <div className="text-base text-align-center" style={{ color: '#cbd5e1', fontSize: '1.0625rem' }} data-anim>
                Engineered by Qolve to deliver enterprise-level helpdesk performance, white-label branding, and grounded AI support automation.
              </div>
            </div>
          </div>

          <div className="spacer-section-large" />

          {/* Grid of Platform Pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {PLATFORM_PILLARS.map((item, idx) => (
              <div key={idx} className={item.cardBg} data-anim style={{ padding: '2.25rem', minHeight: '26rem', borderRadius: '1.75rem' }}>
                <div className="vertical-space-between" style={{ height: '100%', position: 'relative', zIndex: 2 }}>
                  <div>
                    {/* Header Row */}
                    <div style={{ marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          padding: '0.3rem 0.75rem',
                          borderRadius: '9999px',
                          background: 'rgba(52, 211, 153, 0.2)',
                          color: '#6ee7b7',
                          border: '1px solid rgba(52, 211, 153, 0.4)',
                        }}
                      >
                        {item.pillar}
                      </span>
                      <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                    </div>

                    <h3
                      style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.75rem' }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#cbd5e1', marginBottom: '1.25rem' }}
                    >
                      {item.description}
                    </p>

                    {/* Capabilities */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {item.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                          <span style={{ color: '#34d399', fontSize: '0.875rem', lineHeight: 1.4 }}>✓</span>
                          <span
                            style={{ fontSize: '0.85rem', lineHeight: 1.5, color: '#e2e8f0' }}
                          >
                            {cap}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                    <span style={{ fontSize: '0.75rem', color: '#6ee7b7', fontWeight: 600 }}>
                      🌿 Qolve Architecture Spec
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



