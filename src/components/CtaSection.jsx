const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z" fill="currentColor" />
  </svg>
)

const avatars = [
  'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/692a5717d933cf4874e317d1_hero%20icon%20one.webp',
  'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/692a5717d933cf4874e317d6_section-1.webp',
  'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/692a5717d933cf4874e317ce_hero%20icon%20three.webp',
]

export default function CtaSection() {
  return (
    <section className="section_cta" id="contact" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0', background: '#0d0f0e' }}>
      <div className="padding-global is-cta">
        <div
          className="cta-wrap glass-panel"
          style={{
            position: 'relative',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            padding: '5rem 3.5rem',
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          {/* Dark Pine Forest backdrop */}
          <img
            src="/images/verdant-forest-hero.jpg"
            alt=""
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.2,
              filter: 'contrast(1.1) brightness(0.6)',
              pointerEvents: 'none',
            }}
          />

          <div className="container-large" style={{ position: 'relative', zIndex: 5 }}>
            {/* Top badge */}
            <div
              data-anim
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.85rem',
                background: 'rgba(45, 75, 62, 0.25)',
                padding: '0.4rem 1.1rem',
                borderRadius: '9999px',
                border: '1px solid rgba(173, 206, 189, 0.2)',
                color: '#adcebd',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ color: '#adcebd' }}>Trusted by growing engineering teams</div>
              <div className="avatars-wrap" style={{ display: 'flex' }}>
                {avatars.map((src, i) => (
                  <div key={i} className={`avatar-item is-${['first','second','third'][i]}`} style={{ borderColor: '#2d4b3e', width: '1.5rem', height: '1.5rem', borderRadius: '50%', overflow: 'hidden' }}>
                    <img
                      loading="lazy"
                      src={src}
                      alt=""
                      className="img"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <h2 data-anim style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', color: '#e2e3e0', letterSpacing: '-0.03em', lineHeight: 1.1, fontWeight: 600, marginBottom: '1.25rem' }}>
              Cultivate quiet, dependable support <br />
              <span style={{ color: '#c1c8c3' }}>
                with white-label freedom
              </span>
            </h2>

            <p style={{ color: '#c1c8c3', fontSize: '1.0625rem', lineHeight: 1.6, maxWidth: '36rem', marginBottom: '2.5rem' }} data-anim>
              Connect your custom domain, import your knowledge base, and experience organic customer support without enterprise complexity.
            </p>

            <div className="button_wrapper" data-anim style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <a
                href="#products"
                style={{
                  background: '#2d4b3e',
                  color: '#e2e3e0',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '0.5rem',
                  padding: '0.9rem 2rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  fontWeight: 500,
                  fontSize: '0.9375rem',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#375d4d' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#2d4b3e' }}
              >
                <span>Deploy Quelp Platform</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



