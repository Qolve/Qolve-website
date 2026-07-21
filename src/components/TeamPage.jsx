import { useEffect } from 'react'

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z" fill="currentColor" />
  </svg>
)

const teamMembers = [
  {
    name: 'Liam Haines',
    role: 'Chief Executive Officer (CEO)',
    tag: 'Executive',
    bio: 'Guiding Quelp’s strategic vision and product direction to deliver a fully branded, lower-cost support platform.',
    cardClass: 'card_about bg-black',
    textColor: 'text-color-on-primary',
    tagBg: 'bg-green',
  },
  {
    name: 'Freddie H',
    role: 'Project Manager & Software Developer',
    tag: 'Product & Tech',
    bio: 'Orchestrating product delivery, sprint execution, and full-stack development across the Quelp platform.',
    cardClass: 'card_about bg-subtle',
    textColor: 'text-color-primary',
    tagBg: 'bg-black',
  },
  {
    name: 'Vilius',
    role: 'Database Engineer & Frontend Developer',
    tag: 'Engineering',
    bio: 'Building high-performance tenant database schemas and responsive, fluid user interfaces.',
    cardClass: 'card_about bg-subtle',
    textColor: 'text-color-primary',
    tagBg: 'bg-black',
  },
  {
    name: 'heo',
    role: 'Lead Data & Automation Engineer',
    tag: 'Operations & Data',
    bio: 'Architecting scalable backend automation, ticket classification engines, and data pipeline workflows.',
    cardClass: 'card_about bg-green',
    textColor: 'text-color-primary',
    tagBg: 'bg-black',
  },
  {
    name: 'Oreo',
    role: 'Sales & Business Development',
    tag: 'Growth',
    bio: 'Connecting with pilot partners and customer success teams to align Quelp’s capabilities with real-world needs.',
    cardClass: 'card_about bg-subtle',
    textColor: 'text-color-primary',
    tagBg: 'bg-black',
  },
]

export default function TeamPage({ onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="section_about" id="team" style={{ background: '#ffffff', minHeight: '100vh' }}>
      <div className="padding-section-large" />
      <div className="padding-global">
        <div className="container-large">
          <div className="vertical-center">
            {/* Tag pill */}
            <div className="tag" data-anim>
              <div className="dot-square" />
              <div>The Team</div>
            </div>

            <div className="spacer-large" />

            {/* Header Title */}
            <div className="max-width-medium is-41rem">
              <h2 className="text-align-center" data-anim>
                Meet the minds building Quelp
              </h2>
            </div>

            <div className="spacer-large" />

            <div className="max-width-medium">
              <div className="text-base text-align-center text-color-secondary" data-anim>
                A dedicated team of engineers, strategists, and operations leaders building a simpler, smarter, and fully branded customer support experience.
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
                onClick={() => onNavigate && onNavigate('products')}
                className="button-arrow is-black"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <div className="button-arrow_wrap">
                  <div className="button-arrow_text">
                    <div className="text_button">Explore Products</div>
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

          {/* Team Cards Grid - Native Aeline Bento Card System */}
          <div className="about_layout" data-anim style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {teamMembers.map((member, i) => (
              <div key={i} className={member.cardClass} data-anim style={{ minHeight: '22rem' }}>
                <div className="vertical-space-between">
                  <div className="card_1-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      className="geistmono"
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.25rem 0.625rem',
                        borderRadius: '9999px',
                        background: member.cardClass.includes('bg-black') ? 'rgba(214,253,112,0.15)' : 'rgba(0,0,0,0.06)',
                        color: member.cardClass.includes('bg-black') ? '#d6fd70' : '#0f0f0f',
                      }}
                    >
                      {member.tag}
                    </span>
                    <div
                      style={{
                        width: '0.5rem',
                        height: '0.5rem',
                        borderRadius: '50%',
                        background: member.cardClass.includes('bg-green') ? '#0f0f0f' : '#d6fd70',
                      }}
                    />
                  </div>

                  <div className="about_card-float">
                    <h3 className={`text-2xl ${member.textColor}`} style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                      {member.name}
                    </h3>
                    <div className="spacer-small" />
                    <div
                      style={{
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        color: member.cardClass.includes('bg-black') ? '#d6fd70' : '#555555',
                      }}
                    >
                      {member.role}
                    </div>
                    <div className="spacer-medium" />
                    <div className={`text-base ${member.textColor}`} style={{ opacity: 0.85, lineHeight: 1.6 }}>
                      {member.bio}
                    </div>
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
