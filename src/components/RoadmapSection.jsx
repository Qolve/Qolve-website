const PLATFORM_PILLARS = [
  {
    pillar: 'Pillar 1',
    title: 'Resilient Mail & Relay Infrastructure',
    cardBg: 'card_about bg-black',
    tagColor: '#d6fd70',
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
    title: 'Omnichannel Helpdesk & Ticket Triage',
    cardBg: 'card_about bg-green',
    tagColor: '#0f0f0f',
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
    title: '100% White-Label Customer Experience',
    cardBg: 'card_about bg-subtle',
    tagColor: '#555555',
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
    title: 'Grounded AI Assistance (Permafix AI)',
    cardBg: 'card_about bg-subtle',
    tagColor: '#555555',
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
    title: 'Multi-Tenant Security & Access Control',
    cardBg: 'card_about bg-black',
    tagColor: '#d6fd70',
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
    title: 'SLAs, Rules & Performance Analytics',
    cardBg: 'card_about bg-subtle',
    tagColor: '#555555',
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
    <section className="section_about" id="roadmap" style={{ background: '#f8f8f8', padding: '6rem 0' }}>
      <div className="padding-global">
        <div className="container-large">
          <div className="vertical-center">
            {/* Tag pill */}
            <div className="tag" data-anim>
              <div className="dot-square" />
              <div>Platform Architecture</div>
            </div>

            <div className="spacer-large" />

            <div className="max-width-medium is-41rem">
              <h2 className="text-align-center" data-anim>
                Core Pillars of the Qolve Ecosystem
              </h2>
            </div>

            <div className="spacer-large" />

            <div className="max-width-medium">
              <div className="text-base text-align-center text-color-secondary" data-anim>
                Engineered by Qolve to deliver enterprise-level helpdesk performance, white-label branding, and grounded AI support automation.
              </div>
            </div>
          </div>

          <div className="spacer-section-large" />

          {/* Grid of Platform Pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {PLATFORM_PILLARS.map((item, idx) => (
              <div key={idx} className={item.cardBg} data-anim style={{ padding: '2rem', minHeight: '24rem' }}>
                <div className="vertical-space-between" style={{ height: '100%' }}>
                  <div>
                    {/* Header Row */}
                    <div style={{ marginBottom: '1rem' }}>
                      <span
                        className="geistmono"
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          padding: '0.25rem 0.625rem',
                          borderRadius: '9999px',
                          background: item.cardBg.includes('bg-black') ? 'rgba(214,253,112,0.15)' : 'rgba(0,0,0,0.06)',
                          color: item.cardBg.includes('bg-black') ? '#d6fd70' : '#0f0f0f',
                        }}
                      >
                        {item.pillar}
                      </span>
                    </div>

                    <h3
                      className={`text-xl ${item.cardBg.includes('bg-black') ? 'text-color-on-primary' : 'text-color-primary'}`}
                      style={{ fontSize: '1.375rem', fontWeight: 700 }}
                    >
                      {item.title}
                    </h3>

                    <div className="spacer-small" />

                    <p
                      className={`text-base ${item.cardBg.includes('bg-black') ? 'text-color-on-primary' : 'text-color-secondary'}`}
                      style={{ fontSize: '0.875rem', lineHeight: 1.6, opacity: 0.9 }}
                    >
                      {item.description}
                    </p>

                    <div className="spacer-medium" />

                    {/* Capabilities */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {item.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                          <span style={{ color: item.cardBg.includes('bg-black') ? '#d6fd70' : '#0f0f0f', fontSize: '0.875rem', lineHeight: 1.4 }}>•</span>
                          <span
                            className={`text-base ${item.cardBg.includes('bg-black') ? 'text-color-on-primary' : 'text-color-secondary'}`}
                            style={{ fontSize: '0.875rem', lineHeight: 1.5, opacity: 0.9 }}
                          >
                            {cap}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: item.cardBg.includes('bg-black') ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)' }}>
                    <span className="geistmono" style={{ fontSize: '0.75rem', color: item.cardBg.includes('bg-black') ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>
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


