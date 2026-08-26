import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Ascii3DStarfield from './ui/Ascii3DStarfield'
import SpotlightCard from './ui/SpotlightCard'

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
    isFeatured: true,
  },
  {
    name: 'Freddie H',
    role: 'Project Manager & Software Developer',
    tag: 'Product & Tech',
    bio: 'Orchestrating product delivery, sprint execution, and full-stack development across the Quelp platform.',
    isFeatured: false,
  },
  {
    name: 'Vilius',
    role: 'Database Engineer & Frontend Developer',
    tag: 'Engineering',
    bio: 'Building high-performance tenant database schemas and responsive, fluid user interfaces.',
    isFeatured: false,
  },
  {
    name: 'heo',
    role: 'Lead Data & Automation Engineer',
    tag: 'Operations & Data',
    bio: 'Architecting scalable backend automation, ticket classification engines, and data pipeline workflows.',
    isFeatured: true,
  },
  {
    name: 'Oreo',
    role: 'Sales & Business Development',
    tag: 'Growth',
    bio: 'Connecting with pilot partners and customer success teams to align Quelp’s capabilities with real-world needs.',
    isFeatured: false,
  },
]

export default function TeamPage({ onNavigate }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="page_team" id="team" style={{ background: '#0f0f0f', minHeight: '100vh', position: 'relative', overflowX: 'hidden', overflowY: 'visible', paddingTop: '6.5rem', paddingBottom: '6rem' }}>
      <Ascii3DStarfield variant="team" theme="dark" opacity={0.75} numStars={180} />

      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '70vw',
          height: '40rem',
          background: 'radial-gradient(circle, rgba(214, 253, 112, 0.12) 0%, rgba(15, 15, 15, 0) 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="padding-global" style={{ position: 'relative', zIndex: 5, maxWidth: '84rem', margin: '0 auto' }}>
        <div className="container-large">
          <div className="vertical-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Tag pill */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.4rem 0.95rem',
                borderRadius: '9999px',
                background: 'rgba(214, 253, 112, 0.12)',
                border: '1px solid rgba(214, 253, 112, 0.35)',
                color: '#d6fd70',
                fontSize: '0.8125rem',
                fontWeight: 600,
                marginBottom: '1.25rem',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 0 20px rgba(214, 253, 112, 0.15)',
              }}
            >
              <span className="badge-pulse-dot" style={{ color: '#d6fd70' }}>
                <span />
              </span>
              <span style={{ fontFamily: 'Geist Mono, monospace', letterSpacing: '0.04em' }}>
                QOLVE ENGINEERING & LEADERSHIP
              </span>
            </motion.div>

            {/* Header Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-align-center"
              style={{ maxWidth: '56rem', margin: '0 auto', color: '#ffffff', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.1 }}
            >
              Meet the minds building <br />
              <span style={{ color: '#d6fd70', textShadow: '0 0 24px rgba(214, 253, 112, 0.4)' }}>
                Quelp & White-Label Systems.
              </span>
            </motion.h1>

            <div className="spacer-medium" />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ maxWidth: '44rem', margin: '0 auto' }}
            >
              <div className="text-base text-align-center" style={{ color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.7, fontSize: '1.05rem' }}>
                A dedicated team of engineers, strategists, and operations leaders building a simpler, smarter, and fully branded customer support experience.
              </div>
            </motion.div>

            <div className="spacer-large" />

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                onClick={() => onNavigate && onNavigate('home')}
                className="button"
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '9999px',
                  padding: '0.65rem 1.4rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)')}
              >
                ← Back to Home
              </button>

              <button
                onClick={() => onNavigate && onNavigate('products')}
                className="button"
                style={{
                  background: '#d6fd70',
                  color: '#0f0f0f',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '0.65rem 1.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 0 24px rgba(214, 253, 112, 0.4)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px) scale(1.02)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
              >
                <span>Explore Quelp Platform</span>
                <ArrowIcon />
              </button>
            </div>
          </div>

          <div className="spacer-section-large" />

          {/* Team Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {teamMembers.map((member, i) => (
              <SpotlightCard
                key={i}
                style={{
                  background: member.isFeatured ? 'rgba(214, 253, 112, 0.04)' : 'rgba(18, 18, 20, 0.85)',
                  border: member.isFeatured ? '1px solid rgba(214, 253, 112, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '1rem',
                  padding: '2rem',
                  minHeight: '20rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <span
                      style={{
                        fontFamily: 'Geist Mono, monospace',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        background: member.isFeatured ? 'rgba(214, 253, 112, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                        color: member.isFeatured ? '#d6fd70' : 'rgba(255, 255, 255, 0.7)',
                        border: member.isFeatured ? '1px solid rgba(214, 253, 112, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      {member.tag}
                    </span>
                    <div
                      style={{
                        width: '0.5rem',
                        height: '0.5rem',
                        borderRadius: '50%',
                        background: '#d6fd70',
                        boxShadow: '0 0 8px #d6fd70',
                      }}
                    />
                  </div>

                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.35rem' }}>
                    {member.name}
                  </h3>
                  <div
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: member.isFeatured ? '#d6fd70' : 'rgba(255, 255, 255, 0.6)',
                      marginBottom: '1rem',
                    }}
                  >
                    {member.role}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6 }}>
                    {member.bio}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
