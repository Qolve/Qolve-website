const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z" fill="currentColor" />
  </svg>
)

const services = [
  {
    id: 'omnichannel-helpdesk',
    badge: '🌿 Omnichannel Canopy',
    title: 'Omnichannel Helpdesk & Ticket Triage',
    description: 'Consolidate inbound customer enquiries from Email, Web Chat Widget, and Customer Portals into one fluid, thread-aware support queue.',
    icon: '💧',
    imgSrc: '/images/eco-card-1.jpg',
    imgClass: 'is-first',
  },
  {
    id: 'mail-infrastructure',
    badge: '🍃 Resilient Soil',
    title: 'Automated Mail & Relay Systems',
    description: 'Self-hosted Stalwart mail server container integrated with AWS SES relay for SPF/DKIM/DMARC compliant email delivery under qolve.systems.',
    icon: '🌱',
    imgSrc: '/images/eco-card-2.jpg',
    imgClass: 'is-second',
  },
  {
    id: 'permafix-ai',
    badge: '✨ Grounded Intelligence',
    title: 'Permafix AI Knowledge Assistance',
    description: 'Context-aware AI assistance that summarizes ticket threads, drafts grounded responses, auto-categorizes priority, and manages human escalation.',
    icon: '🔮',
    imgSrc: '/images/eco-card-3.jpg',
    imgClass: 'is-third',
  },
]

export default function ServicesSection() {
  return (
    <section className="section_services" id="services" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
      <div className="padding-global">
        <div className="container-large">
          
          {/* Asymmetric Header: Left-aligned title + Right-aligned CTA */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
            <div style={{ maxWidth: '44rem' }}>
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
                <span>Core Capabilities</span>
              </div>

              <h2 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: '#e2e3e0', letterSpacing: '-0.025em', lineHeight: 1.15, fontWeight: 600, marginBottom: '1rem' }}>
                High-performance architecture <br />
                <span style={{ color: '#c1c8c3' }}>
                  engineered by Qolve
                </span>
              </h2>

              <p style={{ color: '#c1c8c3', fontSize: '1.0625rem', lineHeight: 1.6 }}>
                We build dependable infrastructure that powers Quelp — from resilient email routing to grounded AI draft suggestions.
              </p>
            </div>

            <a
              href="#products"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#2d4b3e',
                color: '#e2e3e0',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '0.9375rem',
                marginBottom: '0.5rem',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#375d4d' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#2d4b3e' }}
            >
              <span>Explore Quelp Platform</span>
              <span>→</span>
            </a>
          </div>

          {/* Service Glass Cards */}
          <div className="services_cards" data-anim>
            {services.map((service) => (
              <div key={service.id} className="service_card glass-panel" style={{ borderRadius: '1.5rem', overflow: 'hidden' }}>
                <a href={`#${service.id}`} className="service_container" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="service_content" style={{ padding: '2.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <div style={{ width: '2.75rem', height: '2.75rem', fontSize: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'rgba(45,75,62,0.35)', border: '1px solid rgba(173,206,189,0.2)' }}>
                        {service.icon}
                      </div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#adcebd', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(45,75,62,0.25)', padding: '0.3rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(173,206,189,0.2)' }}>
                        {service.badge}
                      </span>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '1.35rem', color: '#e2e3e0', fontWeight: 600, marginBottom: '0.65rem', letterSpacing: '-0.015em' }}>{service.title}</h3>
                      <div style={{ color: '#c1c8c3', lineHeight: 1.6, fontSize: '0.9375rem' }}>{service.description}</div>
                    </div>
                  </div>
                  <div className={`service_img ${service.imgClass}`} style={{ overflow: 'hidden', height: '220px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <img
                      src={service.imgSrc}
                      loading="lazy"
                      alt={service.title}
                      className="img"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8, filter: 'contrast(1.05) brightness(0.85)', transition: 'transform 0.5s ease' }}
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}



