import { useState } from 'react'

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z" fill="currentColor" />
  </svg>
)

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  const navTo = (page, sectionId) => {
    if (onNavigate) {
      onNavigate(page, sectionId)
    }
  }

  return (
    <footer
      className="footer"
      style={{
        width: '100%',
        backgroundColor: '#0d0f0e',
        color: '#adcebd',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '4rem 2rem 3rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Top Content Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2.5rem' }}>
          
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '24rem' }}>
            <button
              onClick={() => navTo('home')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <div style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '0.4rem',
                background: '#d6fd70',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                color: '#0f0f0f',
                fontSize: '1.1rem'
              }}>
                Q
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '1.25rem', fontWeight: 700, color: '#e2e3e0', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  qolve
                </span>
                <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#adcebd', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Whitelabel Solutions
                </span>
              </div>
            </button>
            
            <p style={{ color: '#8b928d', fontSize: '0.875rem', lineHeight: 1.6 }}>
              Precision white-label software crafted for high-trust customer operations. Built with luxury eco-tech minimalism.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem 3rem' }}>
            {[
              { label: 'Platform', action: () => navTo('products') },
              { label: 'Architecture', action: () => navTo('home', 'roadmap') },
              { label: 'Team', action: () => navTo('team') },
              { label: 'Pricing', action: () => navTo('home', 'pricing') },
              { label: 'Ethical Sourcing', action: () => navTo('home', 'about') },
              { label: 'Contact', action: () => navTo('home', 'contact') },
            ].map((link, i) => (
              <button
                key={i}
                onClick={link.action}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#8b928d',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#adcebd' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#8b928d' }}
              >
                {link.label}
              </button>
            ))}
          </div>

        </div>

        {/* Bottom Copyright */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ color: '#8b928d', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            © {new Date().getFullYear()} QOLVE LUXURY ECO. ALL RIGHTS RESERVED.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#privacy" style={{ color: '#8b928d', fontSize: '0.75rem', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Privacy Policy</a>
            <a href="#terms" style={{ color: '#8b928d', fontSize: '0.75rem', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Terms</a>
          </div>
        </div>

      </div>
    </footer>
  )
}



