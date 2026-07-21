import { useState } from 'react'

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z" fill="currentColor" />
  </svg>
)

const navColumns = [
  {
    links: [
      { label: 'Home V.1', href: '#home' },
      { label: 'Home V.2', href: '#home' },
      { label: 'Home V.3', href: '#home' },
      { label: 'Services', href: '#services' },
    ],
  },
  {
    links: [
      { label: 'Contact V.1', href: '#contact' },
      { label: 'Contact V.2', href: '#contact' },
      { label: 'Contact V.3', href: '#contact' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    links: [
      { label: 'About us V.1', href: '#about' },
      { label: 'About us V.2', href: '#about' },
      { label: 'About us V.3', href: '#about' },
      { label: 'Blog', href: '#blog' },
    ],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <footer className="footer" data-anim>
      <div className="padding-global is-footer">
        <div className="container-full">
          <div className="footer_wrap">
            <div className="footer_top">
              <div className="footer_content">
                {/* Left: logo + tagline */}
                <div className="footer_content-wrap">
                  <a href="#home">
                    <img
                      src="https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69bc6c8e343f8f1f1832309a_aeline-logo.svg"
                      loading="lazy"
                      alt="aeline"
                      style={{ height: '1.75rem', width: 'auto' }}
                    />
                  </a>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support your business growth.
                  </div>
                </div>

                {/* Right: newsletter */}
                <div className="footer_content-wrap">
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem', fontWeight: 500 }}>
                    Subscribe our newsletter
                  </div>
                  {submitted ? (
                    <div style={{ color: '#d6fd70', fontSize: '0.9375rem' }}>
                      Thank you! Your submission has been received!
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
                {navColumns.map((col, ci) => (
                  <div key={ci} className="footer_links">
                    {col.links.map((link, li) => (
                      <a key={li} href={link.href} className="footer_link">
                        {link.label}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer_bottom">
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>
                © Aeline. All rights reserved. Powered by Webflow.
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
