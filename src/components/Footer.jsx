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
    <footer className="footer" data-anim>
      <div className="padding-global is-footer">
        <div className="container-full">
          <div className="footer_wrap">
            <div className="footer_top">
              <div className="footer_content">
                {/* Left: Quelp logo + tagline */}
                <div className="footer_content-wrap">
                  <button
                    onClick={() => navTo('home')}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '0.625rem' }}
                  >
                    <div style={{
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '0.5rem',
                      background: '#d6fd70',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      color: '#0f0f0f',
                      fontSize: '1.125rem'
                    }}>
                      Q
                    </div>
                    <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1.375rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em' }}>
                      quelp
                    </span>
                  </button>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    Lower-cost, white-label customer-support platform designed for growing businesses.
                  </div>
                  <div style={{ color: '#d6fd70', fontSize: '0.875rem', fontWeight: 500 }}>
                    Contact: Quelp@quelp.co.uk
                  </div>
                </div>

                {/* Right: newsletter */}
                <div className="footer_content-wrap">
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem', fontWeight: 500 }}>
                    Subscribe to product updates
                  </div>
                  {submitted ? (
                    <div style={{ color: '#d6fd70', fontSize: '0.9375rem' }}>
                      Thank you! You're subscribed for updates.
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="footer-form">
                      <input
                        className="text-field"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button type="submit" className="button-arrow" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <div className="button-arrow_wrap">
                          <div
                            className="button_container-arrow"
                            style={{ background: 'white', color: '#0f0f0f', width: '2.75rem', height: '2.75rem', flexShrink: 0 }}
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
                  <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.25rem' }}>Main</span>
                  <button onClick={() => navTo('home')} className="footer_link" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}>Home</button>
                  <button onClick={() => navTo('products')} className="footer_link" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}>Products</button>
                  <button onClick={() => navTo('team')} className="footer_link" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}>Team</button>
                </div>
                <div className="footer_links">
                  <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.25rem' }}>Sections</span>
                  <button onClick={() => navTo('home', 'services')} className="footer_link" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}>Services</button>
                  <button onClick={() => navTo('home', 'about')} className="footer_link" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}>About Us</button>
                  <button onClick={() => navTo('home', 'pricing')} className="footer_link" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}>Pricing</button>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer_bottom">
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>
                © Quelp. All rights reserved.
              </div>
              <div className="footer_bottom-links">
                <a href="#privacy" className="footer_bottom-link">Privacy Policy</a>
                <a href="#terms" className="footer_bottom-link">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
