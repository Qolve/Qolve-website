import { motion } from 'framer-motion'
import { WordReveal } from './ui/TextReveal'
import Ascii3DStarfield from './ui/Ascii3DStarfield'

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
    <section className="section_cta" id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
      <Ascii3DStarfield variant="cta" theme="dark" opacity={0.75} numStars={160} />
      <div className="padding-global is-cta">
        <div className="cta-wrap" style={{ position: 'relative', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)' }}>
          {/* Subtle ambient corner light */}
          <div
            style={{
              position: 'absolute',
              right: '-10%',
              top: '-20%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(214, 253, 112, 0.15) 0%, transparent 70%)',
              filter: 'blur(50px)',
              pointerEvents: 'none',
            }}
          />

          <div className="container-large" style={{ position: 'relative', zIndex: 5 }}>
            {/* Top badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="cta_top"
            >
              <div className="cta_text" style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="text-color-on-primary">Trusted by over 5,000+ teams</div>
              </div>
              <div className="avatars-wrap">
                {avatars.map((src, i) => (
                  <div key={i} className={`avatar-item is-${['first','second','third'][i]}`} style={{ borderColor: '#141414' }}>
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
            </motion.div>

            <div className="spacer-medium" />

            <WordReveal as="h2" style={{ color: '#ffffff' }}>
              We combine human insight with artificial intelligence
            </WordReveal>

            <div className="spacer-small" />

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-width-medium is-33rem"
            >
              <div className="text-color-on-primary" style={{ opacity: 0.85, lineHeight: 1.6, fontSize: '0.9375rem' }}>
                Our engineering team bridges strategic thinking and advanced support technologies to help companies streamline customer inquiries, improve resolution velocity, and protect brand autonomy.
              </div>
            </motion.div>

            <div className="spacer-large" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.25 }}
              className="button_wrapper"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  window.dispatchEvent(new CustomEvent('qolve-scroll-to', { detail: { sectionId: 'contact' } }))
                }}
                className="button-arrow hero-btn-arrow"
              >
                <div className="button-arrow_wrap">
                  <div className="button-arrow_text">
                    <div className="text_button" style={{ color: 'white', fontWeight: 600 }}>Get Started with Qolve</div>
                  </div>
                  <div className="button_container-arrow" style={{ background: '#d6fd70', color: '#0f0f0f', boxShadow: '0 0 20px rgba(214, 253, 112, 0.4)' }}>
                    <div className="icon-1x1-main">
                      <ArrowIcon />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Background overlay */}
          <div className="overlay" />
        </div>
      </div>
    </section>
  )
}

