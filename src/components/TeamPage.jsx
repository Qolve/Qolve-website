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
    <section className="section_about" id="team" style={{ background: 'transparent', minHeight: '100vh', padding: '6rem 0' }}>
      <div className="padding-global">
        <div className="container-large">
          <div className="vertical-center">
            {/* Tag pill */}
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
              <span>Engineering Team</span>
            </div>

            {/* Header Title */}
            <div className="max-width-medium is-41rem">
              <h2 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: '#ffffff', letterSpacing: '-0.035em', lineHeight: 1.1, fontWeight: 700, textAlign: 'center', marginBottom: '1rem' }}>
                The engineers behind Qolve &amp; Quelp
              </h2>
            </div>

            <div className="max-width-medium">
              <div style={{ color: '#94a3b8', fontSize: '1.0625rem', lineHeight: 1.6, textAlign: 'center', maxWidth: '38rem', marginBottom: '2rem' }}>
                A dedicated team of systems architects, software engineers, and product builders developing a simpler, smarter, and fully white-labeled support experience.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <button
                onClick={() => onNavigate && onNavigate('home')}
                className="button"
                style={{
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  color: '#f8fafc',
                  padding: '0.65rem 1.4rem',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
                }}
              >
                ← Back to Home
              </button>
              <button
                onClick={() => onNavigate && onNavigate('products')}
                className="button"
                style={{
                  background: 'linear-gradient(180deg, rgba(52, 211, 153, 0.9) 0%, rgba(16, 185, 129, 0.85) 100%)',
                  color: '#020f06',
                  border: '1px solid rgba(255, 255, 255, 0.35)',
                  padding: '0.65rem 1.4rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Explore Quelp Platform
              </button>
            </div>
          </div>

          <div className="spacer-section-large" />

          {/* Team Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {teamMembers.map((member, i) => (
              <div key={i} className="card_about macos-glass" style={{ minHeight: '22rem', padding: '2.25rem', borderRadius: '1.75rem', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
                <div className="vertical-space-between" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <span
                        className="geistmono"
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          padding: '0.25rem 0.625rem',
                          borderRadius: '9999px',
                          background: 'rgba(52, 211, 153, 0.12)',
                          color: '#34d399',
                          border: '1px solid rgba(52, 211, 153, 0.25)',
                        }}
                      >
                        {member.tag}
                      </span>
                      <div
                        style={{
                          width: '0.5rem',
                          height: '0.5rem',
                          borderRadius: '50%',
                          background: '#34d399',
                          boxShadow: '0 0 6px rgba(52,211,153,0.8)',
                        }}
                      />
                    </div>

                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.35rem' }}>
                      {member.name}
                    </h3>
                    <div
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: '#6ee7b7',
                        marginBottom: '1rem',
                      }}
                    >
                      {member.role}
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {member.bio}
                    </div>
                  </div>

                  <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <code style={{ fontSize: '0.8125rem', color: '#cbd5e1' }}>
                      {member.email}
                    </code>
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


