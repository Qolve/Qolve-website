import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import SpotlightCard from './ui/SpotlightCard'
import CountUpNumber from './ui/CountUpNumber'
import AsciiEarth from './ui/AsciiEarth'
import Ascii3DStarfield from './ui/Ascii3DStarfield'

const headingWords = [
  { text: 'A', opacity: 1 },
  { text: 'global', opacity: 1 },
  { text: 'product', opacity: 1 },
  { text: 'lab', opacity: 1 },
  { text: 'dedicated', opacity: 1 },
  { text: 'to', opacity: 1 },
  { text: 'building', opacity: 1 },
  {
    icon: 'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a8b414d6ce72030aa90514_icon1.svg',
  },
  { text: 'smarter', opacity: 1, highlight: true },
  { text: 'and', opacity: 0.7 },
  {
    icon: 'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a8b414217a32d2ca851e82_icon2.svg',
  },
  { text: 'more', opacity: 0.7 },
  { text: 'adaptive', opacity: 0.7 },
  { text: 'software.', opacity: 1, highlight: true },
]

export default function AboutSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Fast, responsive scroll-driven retraction: completely pulled off-screen before reaching adjacent pages
  const rawEarthX = useTransform(scrollYProgress, [0.15, 0.4, 0.6, 0.85], [520, 0, 0, 520])
  const rawEarthOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.65, 0.85], [0, 0.95, 0.95, 0])
  const earthX = useSpring(rawEarthX, { stiffness: 170, damping: 26, mass: 0.4 })
  const earthOpacity = useSpring(rawEarthOpacity, { stiffness: 170, damping: 26, mass: 0.4 })

  return (
    <section
      ref={sectionRef}
      className="section_about"
      id="about"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#ffffff',
      }}
    >
      {/* Hypnotic 3D ASCII Starfield with Earth Exclusion Boundary */}
      <Ascii3DStarfield variant="about" opacity={0.7} numStars={160} baseSpeed={0.35} />

      {/* Giant Ambient Background ASCII Earth - Smooth pull-into-side scroll animation */}
      <div
        style={{
          position: 'absolute',
          right: '-18vw',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <motion.div style={{ x: earthX, opacity: earthOpacity }}>
          <AsciiEarth size={48} speed={0.005} />
        </motion.div>
      </div>

      <div className="padding-global" style={{ position: 'relative', zIndex: 5, width: '100%' }}>
        <div className="container-large">
          <div className="vertical-center">
            {/* Centered Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="tag"
            >
              <div className="dot-square" />
              <div>About Qolve</div>
            </motion.div>

            <div className="spacer-small" />

            {/* Centered Animated Heading with Pitch Black Text */}
            <div className="max-width-medium is-41rem">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.04, delayChildren: 0.05 },
                  },
                }}
                className="title-wrap"
                style={{ justifyContent: 'center', textAlign: 'center' }}
              >
                {headingWords.map((item, idx) => {
                  if (item.icon) {
                    return (
                      <motion.img
                        key={idx}
                        variants={{
                          hidden: { opacity: 0, scale: 0.5, rotate: -20 },
                          visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.4 } },
                        }}
                        src={item.icon}
                        loading="lazy"
                        alt=""
                        className="title-icon"
                      />
                    )
                  }
                  return (
                    <motion.h2
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
                        visible: {
                          opacity: item.opacity,
                          y: 0,
                          filter: 'blur(0px)',
                          transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                        },
                      }}
                      className={item.highlight ? 'text-shimmer-lime' : ''}
                      style={{
                        color: item.highlight ? undefined : '#000000',
                        opacity: item.opacity,
                        display: 'inline-block',
                        fontWeight: 700,
                      }}
                    >
                      {item.text}
                    </motion.h2>
                  )
                })}
              </motion.div>
            </div>
          </div>

          <div className="spacer-medium" />

          {/* Bento Cards shifted 15% over, layered above background Earth */}
          <div
            className="about_layout"
            style={{
              width: '115%',
              marginLeft: '-7.5%',
              position: 'relative',
              zIndex: 6,
              transition: 'all 0.3s ease',
            }}
          >
            {/* Card 1 - Large with photo */}
            <SpotlightCard
              className="card_about"
              style={{ gridColumn: 'span 1' }}
              spotlightColor="rgba(214, 253, 112, 0.15)"
            >
              <img
                src="https://cdn.prod.website-files.com/6929c116366a14507fc8424d/693671b05ed33655d4b7ce17_card-about-img.avif"
                loading="lazy"
                alt=""
                className="img"
                style={{ width: '100%', height: '10rem', objectFit: 'cover', borderRadius: '0.75rem' }}
              />
              <div className="vertical-space-between" style={{ marginTop: '1.25rem' }}>
                <div className="card_1-top">
                  <img
                    src="https://cdn.prod.website-files.com/6929c116366a14507fc8424d/692a148227a37705feded0ce_ipsum-logo.svg"
                    loading="lazy"
                    alt=""
                    style={{ height: '1.25rem', width: 'auto' }}
                  />
                  <div className="container-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M16 20V13H20V20H16ZM10 20V4H14V20H10ZM4 20V9H8V20H4Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <div className="about_card-float">
                  <div className="text-wrap">
                    <div className="text-5xl" style={{ fontWeight: 800 }}>
                      <CountUpNumber value={120} duration={2} suffix="+" />
                    </div>
                  </div>
                  <div className="spacer-small" />
                  <div className="text-weight-medium">Collaborating with leading AI and cloud technology providers.</div>
                </div>
              </div>
            </SpotlightCard>

            {/* Card 2 - Subtle bg with testimonial */}
            <SpotlightCard
              className="card_about bg-subtle"
              spotlightColor="rgba(0, 0, 0, 0.04)"
            >
              <div>
                <div className="text-weight-medium">Commitment to measurable impact</div>
                <div className="spacer-small" />
                <div className="text-wrap">
                  <div className="text-4xl" style={{ fontWeight: 800 }}>
                    <CountUpNumber value={100} duration={1.8} suffix="%" />
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <div className="avatars-wrap">
                  {[
                    'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/6998d6e4c804dbf540688e23_users-1.avif',
                    'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/6998d6e4fe402c7f09028c97_users-2.avif',
                    'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/6998d6e4bfe84c916ea64131_users-3.avif',
                    'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/6998d6e43cf07256024b75c1_users-4.avif',
                  ].map((src, i) => (
                    <div key={i} className={`avatar-item is-${['first','second','third','fourth'][i]}`}>
                      <img loading="lazy" src={src} alt="" className="img" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                    </div>
                  ))}
                </div>
                <div className="spacer-small" />
                <div className="text-base text-weight-medium" style={{ fontStyle: 'italic', opacity: 0.85 }}>
                  "Their automation strategy completely reshaped how we handle customer support. It's efficient, intelligent, and seamless."
                </div>
              </div>
            </SpotlightCard>

            {/* Card 3 - Green bg with data points */}
            <SpotlightCard
              className="card_about bg-green"
              spotlightColor="rgba(255, 255, 255, 0.3)"
            >
              <div className="vertical-space-between" style={{ height: '100%' }}>
                <div>
                  <div className="text-weight-medium">Support Data Points</div>
                  <div className="spacer-small" />
                  <div className="text-wrap">
                    <div className="text-4xl" style={{ fontWeight: 800 }}>
                      <CountUpNumber value={520} duration={2.2} suffix="k+" />
                    </div>
                  </div>
                </div>
                <div className="text-base text-weight-medium" style={{ marginTop: '1.5rem' }}>
                  Processed monthly to power smarter business resolutions.
                </div>
              </div>
            </SpotlightCard>

            {/* Card 4 - Black bg */}
            <SpotlightCard
              className="card_about bg-black"
              spotlightColor="rgba(214, 253, 112, 0.18)"
            >
              <div className="card_4-content">
                <div className="text-weight-medium text-color-on-primary">Active Regions</div>
                <div className="text-wrap text-color-on-primary">
                  <div className="text-4xl text-color-green" style={{ fontWeight: 800 }}>
                    <CountUpNumber value={20} duration={1.5} suffix="+" />
                  </div>
                </div>
                <div className="spacer-xsmall" />
                <div className="geistmono text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Global AWS &amp; Cloud edge distribution
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  )
}

