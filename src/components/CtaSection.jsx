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
          className="cta-wrap liquid-glass is-emerald"
          style={{
            position: 'relative',
            borderRadius: '2.5rem',
            overflow: 'hidden',
            padding: '5rem 3rem',
            boxShadow: '0 35px 90px rgba(0, 30, 15, 0.9), inset 0 2px 3px rgba(255,255,255,0.7)',
          }}
        >
          {/* Greenhouse liquid glass background */}
          <img
            src="/images/eco-hero-canopy.jpg"
            alt=""
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.35,
              filter: 'saturate(1.3) contrast(1.1)',
              pointerEvents: 'none',
            }}
          />

          <div className="container-large" style={{ position: 'relative', zIndex: 5 }}>
            {/* Top badge */}
            <div className="cta_top" data-anim style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', background: 'rgba(4, 25, 15, 0.7)', padding: '0.5rem 1.25rem', borderRadius: '9999px', border: '1px solid rgba(110,231,183,0.4)', backdropFilter: 'blur(20px)' }}>
              <div className="cta_text">
                <div style={{ color: '#6ee7b7', fontWeight: 700, fontSize: '0.875rem' }}>🌿 Trusted by 5,000+ support engineers</div>
              </div>
              <div className="avatars-wrap" style={{ display: 'flex' }}>
                {avatars.map((src, i) => (
                  <div key={i} className={`avatar-item is-${['first','second','third'][i]}`} style={{ borderColor: '#34d399', width: '2rem', height: '2rem', borderRadius: '50%', overflow: 'hidden' }}>
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

            <h2 data-anim style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.1, textShadow: '0 4px 20px rgba(0,25,12,0.8)' }}>
              Cultivate fluid customer support <br />
              <span style={{ background: 'linear-gradient(135deg, #a7f3d0 0%, #34d399 50%, #6ee7b7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                with grounded intelligence
              </span>
            </h2>

            <div className="spacer-medium" />

            <div className="max-width-medium is-33rem">
              <div style={{ color: '#cbd5e1', fontSize: '1.125rem', lineHeight: 1.6 }} data-anim>
                Connect your custom domain, import your knowledge base, and experience organic customer support without enterprise bloat.
              </div>
            </div>

            <div className="spacer-huge" />

            <div className="button_wrapper" data-anim style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <a
                href="#products"
                className="button-arrow"
                style={{
                  background: 'linear-gradient(135deg, #6ee7b7 0%, #10b981 100%)',
                  color: '#03150b',
                  border: '1px solid rgba(255,255,255,0.7)',
                  borderRadius: '9999px',
                  padding: '0.6rem 0.75rem 0.6rem 1.75rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 15px 35px rgba(16,185,129,0.5), inset 0 2px 2px rgba(255,255,255,0.8)',
                  cursor: 'pointer',
                }}
              >
                <span style={{ fontWeight: 800, fontSize: '1rem' }}>Deploy Quelp Ecosystem</span>
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    background: '#03150b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6ee7b7',
                    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
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

