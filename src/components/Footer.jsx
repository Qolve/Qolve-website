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
    <footer className="footer" data-anim style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="padding-global is-footer">
        <div className="container-full">
          <div className="footer_wrap">
            <div className="footer_top">
              <div className="footer_content">
                {/* Left: Qolve logo + tagline */}
                <div className="footer_content-wrap">
                  <button
                    onClick={() => navTo('home')}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                  >
                    <div style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '0.75rem',
                      background: 'radial-gradient(135deg, #6ee7b7 0%, #10b981 50%, #065f46 100%)',
                      border: '1.5px solid rgba(255,255,255,0.6)',
                      boxShadow: '0 0 20px rgba(52, 211, 153, 0.4), inset 0 1px 1px rgba(255,255,255,0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem'
                    }}>
                      🌿
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1.35rem', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                        qolve
                      </span>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#34d399', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        Liquid Eco Systems
                      </span>
                    </div>
                  </button>
                  <div style={{ color: '#cbd5e1', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    Qolve is a technical product lab cultivating <strong>Quelp</strong> — a sustainable, white-label customer support &amp; helpdesk ecosystem built for modern growing teams.
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <div style={{ color: '#6ee7b7', fontSize: '0.875rem', fontWeight: 600 }}>
                      General Enquiries: <code style={{ color: '#f8fafc', background: 'rgba(52,211,153,0.15)', padding: '0.15rem 0.45rem', borderRadius: '0.35rem' }}>hello@qolve.systems</code>
                    </div>
                    <div style={{ color: '#6ee7b7', fontSize: '0.875rem', fontWeight: 600 }}>
                      Support Stream: <code style={{ color: '#f8fafc', background: 'rgba(52,211,153,0.15)', padding: '0.15rem 0.45rem', borderRadius: '0.35rem' }}>support@qolve.systems</code>
                    </div>
                  </div>
                </div>

                {/* Right: newsletter */}
                <div className="footer_content-wrap">
                  <div style={{ color: '#f8fafc', fontSize: '0.9375rem', fontWeight: 600 }}>
                    🌱 Subscribe to Qolve &amp; Quelp ecosystem dispatches
                  </div>
                  {submitted ? (
                    <div style={{ color: '#34d399', fontSize: '0.9375rem', fontWeight: 600 }}>
                      ✓ Thank you! You're subscribed for updates.
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="footer-form" style={{ display: 'flex', gap: '0.5rem' }}>
                      <input
                        className="text-field"
                        type="email"
                        placeholder="Enter your work email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                          background: 'rgba(4, 25, 14, 0.7)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          color: '#f8fafc',
                          borderRadius: '9999px',
                          padding: '0.75rem 1.25rem',
                          backdropFilter: 'blur(20px)',
                          outline: 'none',
                        }}
                      />
                      <button type="submit" className="button-arrow" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <div className="button-arrow_wrap">
                          <div
                            className="button_container-arrow"
                            style={{ background: 'linear-gradient(135deg, #6ee7b7 0%, #10b981 100%)', color: '#03150b', width: '2.75rem', height: '2.75rem', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px rgba(52,211,153,0.4)' }}
                          >
                            <div className="icon-1x1-main">
                              <ArrowIcon />
                            </div>
                          </div>
                        </div>
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Navigation columns */}
              <div className="footer_right">
                <div className="footer_links">
                  <span style={{ color: '#f8fafc', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.35rem' }}>Platform</span>
                  <button onClick={() => navTo('home')} className="footer_link" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: '#cbd5e1' }}>Home</button>
                  <button onClick={() => navTo('products')} className="footer_link" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: '#cbd5e1' }}>Quelp Platform</button>
                  <button onClick={() => navTo('team')} className="footer_link" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: '#cbd5e1' }}>Qolve Team</button>
                </div>
                <div className="footer_links">
                  <span style={{ color: '#f8fafc', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.35rem' }}>Ecosystem</span>
                  <button onClick={() => navTo('home', 'roadmap')} className="footer_link" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: '#cbd5e1' }}>Architecture</button>
                  <button onClick={() => navTo('home', 'about')} className="footer_link" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: '#cbd5e1' }}>About Qolve</button>
                  <button onClick={() => navTo('home', 'pricing')} className="footer_link" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: '#cbd5e1' }}>Pricing</button>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer_bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', marginTop: '2rem' }}>
              <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                © {new Date().getFullYear()} Qolve. All rights reserved. Quelp is a cultivated trademark of Qolve.
              </div>
              <div className="footer_bottom-links">
                <a href="#privacy" className="footer_bottom-link" style={{ color: '#94a3b8' }}>Privacy Policy</a>
                <a href="#terms" className="footer_bottom-link" style={{ color: '#94a3b8' }}>Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


