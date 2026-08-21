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
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(20px)',
                  color: '#cbd5e1',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  marginBottom: '1.25rem',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 6px rgba(52,211,153,0.8)' }} />
                <span>Core Capabilities</span>
              </div>

              <h2 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: '#ffffff', letterSpacing: '-0.035em', lineHeight: 1.1, fontWeight: 700, marginBottom: '1rem' }}>
                High-performance architecture <br />
                <span style={{ background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  engineered by Qolve
                </span>
              </h2>

              <p style={{ color: '#94a3b8', fontSize: '1.0625rem', lineHeight: 1.6 }}>
                We build dependable infrastructure that powers Quelp — from resilient email routing to grounded AI draft suggestions.
              </p>
            </div>

            <a href="#products" className="button-arrow is-black" style={{ textDecoration: 'none', marginBottom: '0.5rem' }}>
              <div className="button-arrow_wrap">
                <div className="button-arrow_text">
                  <div className="text_button" style={{ color: '#f8fafc', fontWeight: 600 }}>Explore Quelp Platform</div>
                </div>
                <div className="button_container-arrow is-black">
                  <div className="icon-1x1-main">
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Service macOS Liquid Glass cards */}
          <div className="services_cards" data-anim>
            {services.map((service) => (
              <div key={service.id} className="service_card macos-glass" style={{ borderRadius: '1.75rem', overflow: 'hidden' }}>
                <a href={`#${service.id}`} className="service_container" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="service_content" style={{ padding: '2.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <div className="container-icon bg-green" style={{ width: '2.75rem', height: '2.75rem', fontSize: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.75rem' }}>
                        {service.icon}
                      </div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6ee7b7', letterSpacing: '0.05em', textTransform: 'uppercase', background: 'rgba(52,211,153,0.12)', padding: '0.3rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(52,211,153,0.25)' }}>
                        {service.badge}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl" style={{ color: '#ffffff', fontWeight: 700, marginBottom: '0.65rem', letterSpacing: '-0.02em' }}>{service.title}</h3>
                      <div className="text-base" style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '0.9375rem' }}>{service.description}</div>
                    </div>
                  </div>
                  <div className={`service_img ${service.imgClass}`} style={{ overflow: 'hidden', height: '220px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <img
                      src={service.imgSrc}
                      loading="lazy"
                      alt={service.title}
                      className="img"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
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



