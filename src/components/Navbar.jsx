import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const dropdownLinks = {
    col1: [
      { label: 'Home V.1', href: '/' },
      { label: 'Home V.2', href: '/' },
      { label: 'Home V.3', href: '/' },
      { label: 'Services', href: '#services' },
    ],
    col2: [
      { label: 'About V.1', href: '#about' },
      { label: 'About V.2', href: '#about' },
      { label: 'About V.3', href: '#about' },
      { label: 'Pricing', href: '#pricing' },
    ],
    col3: [
      { label: 'Contact V.1', href: '#contact' },
      { label: 'Contact V.2', href: '#contact' },
      { label: 'Contact V.3', href: '#contact' },
      { label: 'Blog', href: '#blog' },
    ],
  }

  return (
    <nav className="navbar" style={{ background: scrolled ? 'rgba(15,15,15,0.97)' : 'rgba(15,15,15,0.82)' }}>
      <div className="padding-global is-navbar">
        <div className="container-large">
          <div className="navbar_content">
            {/* Logo */}
            <a href="/" className="navbar_logo-link">
              <img
                src="https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69bc6c8e343f8f1f1832309a_aeline-logo.svg"
                loading="lazy"
                alt="aeline"
                className="navbar_logo"
                style={{ height: '1.75rem', width: 'auto' }}
              />
            </a>

            {/* Desktop nav links */}
            <div className="nav_wrap">
              <nav className="nav_mobile">
                <div className="navbar_list">
                  <a href="#home" className="nav_links">Home</a>
                  <a href="#services" className="nav_links">Services</a>
                  <a href="#about" className="nav_links">About Us</a>

                  {/* More Links dropdown */}
                  <div
                    className="nav_dropdown"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <div className="nav_links is-dropdown">
                      <div className="geistmono" style={{ color: 'rgba(255,255,255,0.7)' }}>More Links</div>
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M1 1L5 5L9 1" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                      </svg>
                    </div>

                    {dropdownOpen && (
                      <nav className="nav_link-dropdown">
                        <div className="nav_dropdown-wrap">
                          <div className="nav_dropdown-content">
                            {Object.values(dropdownLinks).map((col, ci) => (
                              <div key={ci} className="nav_dropdown-column">
                                {col.map((link, li) => (
                                  <a key={li} href={link.href} className="nav_dropdown-link">
                                    {link.label}
                                  </a>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      </nav>
                    )}
                  </div>
                </div>
              </nav>
            </div>

            {/* Right buttons */}
            <div className="nav_buttons-wrap">
              <div className="login-wrap">
                <a
                  href="https://temlis.com"
                  className="button"
                  data-variant="base"
                  style={{ padding: '0.625rem 1.25rem', fontSize: '0.875rem', background: '#fff', color: '#0f0f0f' }}
                >
                  <div className="text-button-wrap">
                    <div>Buy Template</div>
                  </div>
                </a>
              </div>

              {/* Hamburger (mobile) */}
              <button
                className="menu-button"
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }}
              >
                <div className="nav-button_component">
                  <div className="nav-button_line is-first" style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
                  <div className="nav-button_line is-second" style={{ opacity: mobileOpen ? 0 : 1 }} />
                  <div className="nav-button_line is-third" style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(15,15,15,0.99)',
          padding: '1rem 2.5rem 1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem',
        }}>
          {['Home', 'Services', 'About Us', 'Expertise', 'Pricing', 'Blog', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="nav_links"
              onClick={() => setMobileOpen(false)}
              style={{ display: 'block', padding: '0.75rem 0.5rem' }}
            >
              {item}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 991px) {
          .nav_wrap { display: none !important; }
          .menu-button { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
