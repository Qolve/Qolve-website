import { useEffect } from 'react'

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z" fill="currentColor" />
  </svg>
)

const teamMembers = [
  {
    name: 'Gabriel',
    role: 'Systems & Infrastructure Lead',
    email: 'gabriel@qolve.systems',
    tag: 'Mail & SES Architect',
    bio: 'Architected the Stalwart mail server container and AWS SES outbound relay integration for SPF, DKIM, and DMARC verified mail delivery under qolve.systems.',
    cardClass: 'card_about bg-black',
    textColor: 'text-color-on-primary',
    tagBg: 'bg-green',
  },
  {
    name: 'Freddie H',
    role: 'Product Manager & Full-Stack Developer',
    email: 'fred@qolve.systems',
    tag: 'Product & Tech',
    bio: 'Orchestrating product delivery, sprint execution, component design, and full-stack integration across the Quelp platform.',
    cardClass: 'card_about bg-subtle',
    textColor: 'text-color-primary',
    tagBg: 'bg-black',
  },
  {
    name: 'Liam Haines',
    role: 'Product Strategy & Lead Engineer',
    email: 'liam@qolve.systems',
    tag: 'Strategy & Core',
    bio: 'Guiding Qolve’s product direction to build a white-label, lower-cost customer support platform for growing SMBs.',
    cardClass: 'card_about bg-green',
    textColor: 'text-color-primary',
    tagBg: 'bg-black',
  },
  {
    name: 'Vilius',
    role: 'Database Engineer & Frontend Systems',
    email: 'vilius@qolve.systems',
    tag: 'Database & UI',
    bio: 'Designing multi-tenant database schemas with strict tenant isolation and building fluid, responsive user interface workflows.',
    cardClass: 'card_about bg-subtle',
    textColor: 'text-color-primary',
    tagBg: 'bg-black',
  },
  {
    name: 'Aurimas',
    role: 'Backend Infrastructure & Security',
    email: 'aurimas@qolve.systems',
    tag: 'Security & Backend',
    bio: 'Implementing secure multi-tenant access control, OAuth authentication mechanisms, and API payload integrity.',
    cardClass: 'card_about bg-subtle',
    textColor: 'text-color-primary',
    tagBg: 'bg-black',
  },
  {
    name: 'Seb',
    role: 'DevOps & Cloud Infrastructure',
    email: 'seb@qolve.systems',
    tag: 'DevOps & Mesh',
    bio: 'Managing cloud container networking, Tailscale secure mesh configuration, TLS certificates, and CI/CD deployment pipelines.',
    cardClass: 'card_about bg-black',
    textColor: 'text-color-on-primary',
    tagBg: 'bg-green',
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
              <div>The Qolve Team</div>
            </div>

            <div className="spacer-large" />

            {/* Header Title */}
            <div className="max-width-medium is-41rem">
              <h2 className="text-align-center" data-anim>
                The engineers behind Qolve &amp; Quelp
              </h2>
            </div>

            <div className="spacer-large" />

            <div className="max-width-medium">
              <div className="text-base text-align-center text-color-secondary" data-anim>
                A dedicated team of systems architects, software engineers, and product builders developing a simpler, smarter, and fully white-labeled support experience.
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
                    <div className="text_button">Explore Quelp Platform</div>
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
                <div className="vertical-space-between" style={{ height: '100%' }}>
                  <div>
                    <div className="card_1-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
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

                    <h3 className={`text-2xl ${member.textColor}`} style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                      {member.name}
                    </h3>
                    <div className="spacer-xsmall" />
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

                  <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: member.cardClass.includes('bg-black') ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.08)' }}>
                    <code style={{ fontSize: '0.8125rem', color: member.cardClass.includes('bg-black') ? '#d6fd70' : '#444444' }}>
                      {member.email}
                    </code>
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

