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
    <section className="section_services" id="services" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="padding-section-large" />
      <div className="padding-global">
        <div className="container-large">
          <div className="vertical-center">
            <div className="tag" data-anim>
              <div className="dot-square" />
              <div>Core Engineering Capabilities</div>
            </div>

            <div className="spacer-large" />

            <div className="max-width-medium is-41rem">
              <h2 className="text-align-center" data-anim style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                High-performance architecture engineered by Qolve
              </h2>
            </div>

            <div className="spacer-large" />

            <div className="max-width-medium">
              <div className="text-base text-align-center" style={{ color: '#cbd5e1', fontSize: '1.0625rem' }} data-anim>
                We build dependable infrastructure that powers Quelp — from resilient email routing to grounded AI draft suggestions.
              </div>
            </div>

            <div className="spacer-large" />

            <a href="#products" className="button-arrow is-black" style={{ textDecoration: 'none' }}>
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

          <div className="spacer-section-medium" />

          {/* Service Liquid Glass cards */}
          <div className="services_cards" data-anim>
            {services.map((service) => (
              <div key={service.id} className="service_card liquid-glass" style={{ borderRadius: '1.75rem', overflow: 'hidden' }}>
                <a href={`#${service.id}`} className="service_container" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="service_content" style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <div className="container-icon bg-green" style={{ width: '3rem', height: '3rem', fontSize: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {service.icon}
                      </div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6ee7b7', letterSpacing: '0.05em', textTransform: 'uppercase', background: 'rgba(52,211,153,0.15)', padding: '0.3rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(52,211,153,0.3)' }}>
                        {service.badge}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl" style={{ color: '#f8fafc', fontWeight: 700, marginBottom: '0.5rem' }}>{service.title}</h3>
                      <div className="text-base" style={{ color: '#cbd5e1', lineHeight: 1.6 }}>{service.description}</div>
                    </div>
                  </div>
                  <div className={`service_img ${service.imgClass}`} style={{ overflow: 'hidden', height: '220px' }}>
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
      <div className="padding-section-large" />
    </section>
  )
}


