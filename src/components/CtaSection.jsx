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
    <section className="section_cta" id="contact" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
      <div className="padding-global is-cta">
        <div
          className="cta-wrap macos-glass is-emerald"
          style={{
            position: 'relative',
            borderRadius: '1.75rem',
            overflow: 'hidden',
            padding: '5rem 3.5rem',
            boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255,255,255,0.4)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          {/* Dark oak & fern backdrop */}
          <img
            src="/images/dark-oak-ferns-hero.jpg"
            alt=""
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.28,
              filter: 'contrast(1.1) brightness(0.8)',
              pointerEvents: 'none',
            }}
          />

          <div className="container-large" style={{ position: 'relative', zIndex: 5 }}>
            {/* Top badge */}
            <div className="cta_top" data-anim style={{ display: 'inline-flex', alignItems: 'center', gap: '0.85rem', background: 'rgba(255, 255, 255, 0.04)', padding: '0.4rem 1.1rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(20px)' }}>
              <div className="cta_text">
                <div style={{ color: '#cbd5e1', fontWeight: 500, fontSize: '0.8125rem' }}>Trusted by 5,000+ support engineers</div>
              </div>
              <div className="avatars-wrap" style={{ display: 'flex' }}>
                {avatars.map((src, i) => (
                  <div key={i} className={`avatar-item is-${['first','second','third'][i]}`} style={{ borderColor: '#10b981', width: '1.75rem', height: '1.75rem', borderRadius: '50%', overflow: 'hidden' }}>
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

            <div className="spacer-large" />

            <h2 data-anim style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', color: '#ffffff', letterSpacing: '-0.035em', lineHeight: 1.08, fontWeight: 700 }}>
              Cultivate quiet, dependable support <br />
              <span style={{ background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                with white-label freedom
              </span>
            </h2>

            <div className="spacer-medium" />

            <div className="max-width-medium is-33rem">
              <div style={{ color: '#94a3b8', fontSize: '1.0625rem', lineHeight: 1.6 }} data-anim>
                Connect your custom domain, import your knowledge base, and experience organic customer support without enterprise complexity.
              </div>
            </div>

            <div className="spacer-large" />

            <div className="button_wrapper" data-anim style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <a
                href="#products"
                className="button-arrow"
                style={{
                  background: 'linear-gradient(180deg, rgba(52, 211, 153, 0.9) 0%, rgba(16, 185, 129, 0.85) 100%)',
                  color: '#020f06',
                  border: '1px solid rgba(255,255,255,0.4)',
                  borderRadius: '9999px',
                  padding: '0.55rem 0.65rem 0.55rem 1.65rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  textDecoration: 'none',
                  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255,255,255,0.6)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                }}
              >
                <span>Deploy Quelp Platform</span>
                <div
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '50%',
                    background: '#020f06',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#34d399',
                  }}
                >
                  <ArrowIcon />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


