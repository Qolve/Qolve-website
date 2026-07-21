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
    <section className="section_cta" id="contact">
      <div className="padding-global is-cta">
        <div className="cta-wrap">
          <div className="container-large">
            {/* Top badge */}
            <div className="cta_top" data-anim>
              <div className="cta_text">
                <div className="text-color-on-primary">Trusted over 5,000+</div>
              </div>
              <div className="avatars-wrap">
                {avatars.map((src, i) => (
                  <div key={i} className={`avatar-item is-${['first','second','third'][i]}`} style={{ borderColor: '#1a1a1a' }}>
                    <img
                      loading="lazy"
                      src={src}
                      alt=""
                      className="img"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="spacer-huge" />

            <h2 className="text-color-on-primary" data-anim>
              We combine human <br />
              insight with artificial intelligence
            </h2>

            <div className="spacer-medium" />

            <div className="max-width-medium is-33rem">
              <div className="text-color-on-primary" data-anim>
                Our consulting team bridges strategic thinking and advanced AI technologies to help companies streamline processes, improve decision-making, and create intelligent digital experiences.
              </div>
            </div>

            <div className="spacer-huge" />

            <div className="button_wrapper" data-anim>
              <a href="#contact" className="button-arrow hero-btn-arrow">
                <div className="button-arrow_wrap">
                  <div className="button-arrow_text">
                    <div className="text_button" style={{ color: 'white' }}>Get Started</div>
                  </div>
                  <div className="button_container-arrow" style={{ background: 'white', color: '#0f0f0f' }}>
                    <div className="icon-1x1-main">
                      <ArrowIcon />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Background overlay */}
          <div className="overlay" />
        </div>
      </div>
    </section>
  )
}
