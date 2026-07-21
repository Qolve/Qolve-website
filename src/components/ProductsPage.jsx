import { useEffect } from 'react'

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z" fill="currentColor" />
  </svg>
)

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#0f0f0f" />
  </svg>
)

const products = [
  {
    id: 'helpdesk',
    badge: 'Core Engine',
    title: 'Omnichannel Helpdesk & Ticketing',
    subtitle: 'Unified inbox for email, web chat, and portal requests.',
    description: 'Transform incoming customer enquiries into organized, assigned tickets. Track priority, agent ownership, customer profiles, and threaded conversation history in one centralized workspace.',
    iconSrc: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/698e4863b7c4e4770533722e_mingcute_ai-fill.svg',
    cardBg: 'card_about bg-subtle',
  },
  {
    id: 'white-label',
    badge: 'Branding Architecture',
    title: 'White-Label Support Hub',
    subtitle: 'Make customer support feel like an internal part of your software.',
    description: 'Complete branding control — configure your workspace name, custom logos, primary/accent colors, customer portal, help center, and email templates so your support ecosystem aligns perfectly with your brand.',
    iconSrc: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/698e4875214fe570673439cb_basil_chart-pie-solid.svg',
    cardBg: 'card_about bg-green',
  },
  {
    id: 'knowledge-base',
    badge: 'Self-Service',
    title: 'Branded Knowledge Base',
    subtitle: 'Empower customers to find instant answers independently.',
    description: 'Publish structured collections of articles, guides, and FAQs. Provide an intuitive search bar and self-service portal that reduces repetitive ticket volume while keeping customers informed.',
    iconSrc: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/698e487f52e4cd9da04322e0_ic_round-insert-chart.svg',
    cardBg: 'card_about bg-subtle',
  },
  {
    id: 'ai-assistant',
    badge: 'Intelligent AI',
    title: 'AI Support Assistant',
    subtitle: 'Assist agents with automated summaries and smart drafts.',
    description: 'Enhance your support team with AI that summarizes long ticket threads, suggests relevant categories, rewrites response tone, and drafts replies grounded strictly in your approved knowledge base.',
    iconSrc: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/698e4863b7c4e4770533722e_mingcute_ai-fill.svg',
    cardBg: 'card_about bg-black',
  },
  {
    id: 'analytics',
    badge: 'Operational Intelligence',
    title: 'Analytics & Performance Insights',
    subtitle: 'Clear metrics to track response velocity and team workload.',
    description: 'Gain real-time visibility into support operations. Monitor incoming ticket trends, open backlog, first-response speeds, resolution times, and team performance with clean, exportable dashboards.',
    iconSrc: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/698e487f52e4cd9da04322e0_ic_round-insert-chart.svg',
    cardBg: 'card_about bg-subtle',
  },
]

export default function ProductsPage({ onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="section_services" id="products" style={{ background: '#f5f5f5', minHeight: '100vh' }}>
      <div className="padding-section-large" />
      <div className="padding-global">
        <div className="container-large">
          <div className="vertical-center">
            {/* Tag pill */}
            <div className="tag" data-anim>
              <div className="dot-square" />
              <div>Platform Capabilities</div>
            </div>

            <div className="spacer-large" />

            {/* Header Title */}
            <div className="max-width-medium is-41rem">
              <h2 className="text-align-center" data-anim>
                The Quelp Support Platform
              </h2>
            </div>

            <div className="spacer-large" />

            <div className="max-width-medium">
              <div className="text-base text-align-center text-color-secondary" data-anim>
                A unified customer support ecosystem engineered to streamline ticket management, elevate customer experience, and reflect your brand identity.
              </div>
            </div>

            <div className="spacer-large" />

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <button
                onClick={() => onNavigate && onNavigate('home')}
                className="button"
                data-variant="bg-black"
                style={{ cursor: 'pointer' }}
              >
                <div className="text-button-wrap">
                  <div>← Back to Home</div>
                </div>
              </button>
              <button
                onClick={() => onNavigate && onNavigate('team')}
                className="button-arrow is-black"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <div className="button-arrow_wrap">
                  <div className="button-arrow_text">
                    <div className="text_button">Meet the Team</div>
                  </div>
                  <div className="button_container-arrow is-black">
                    <div className="icon-1x1-main">
                      <ArrowIcon />
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="spacer-section-large" />

          {/* Product Cards List - Native Aeline Bento Card System */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }} data-anim>
            {products.map((prod) => (
              <div key={prod.id} className={prod.cardBg} data-anim style={{ minHeight: '24rem', padding: '2rem' }}>
                <div className="vertical-space-between">
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <div className={`container-icon ${prod.cardBg.includes('bg-black') ? 'bg-green' : 'bg-black'}`}>
                        <img src={prod.iconSrc} loading="lazy" alt="" className="icon-1x1-medium" style={{ width: '1.5rem', height: '1.5rem' }} />
                      </div>
                      <span
                        className="geistmono"
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          padding: '0.25rem 0.625rem',
                          borderRadius: '9999px',
                          background: prod.cardBg.includes('bg-black') ? 'rgba(214,253,112,0.15)' : 'rgba(0,0,0,0.06)',
                          color: prod.cardBg.includes('bg-black') ? '#d6fd70' : '#0f0f0f',
                        }}
                      >
                        {prod.badge}
                      </span>
                    </div>

                    <h3 className={`text-2xl ${prod.cardBg.includes('bg-black') ? 'text-color-on-primary' : 'text-color-primary'}`} style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                      {prod.title}
                    </h3>
                    <div className="spacer-xsmall" />
                    <div
                      style={{
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        color: prod.cardBg.includes('bg-black') ? '#d6fd70' : '#555555',
                      }}
                    >
                      {prod.subtitle}
                    </div>
                    <div className="spacer-medium" />
                    <div className={`text-base ${prod.cardBg.includes('bg-black') ? 'text-color-on-primary' : 'text-color-secondary'}`} style={{ lineHeight: 1.6, opacity: 0.9 }}>
                      {prod.description}
                    </div>
                  </div>

                  <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                    <span className="geistmono" style={{ fontSize: '0.8125rem', color: prod.cardBg.includes('bg-black') ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>
                      Quelp Core Feature
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="padding-section-large" />
    </section>
  )
}
