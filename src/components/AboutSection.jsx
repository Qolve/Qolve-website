import { useEffect, useRef } from 'react'

// Animated number counter hook
function useCountUp(end, duration = 2000, trigger) {
  const ref = useRef(null)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!trigger || hasRun.current) return
    hasRun.current = true
    const el = ref.current
    if (!el) return
    const start = 0
    const startTime = performance.now()
    const step = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      el.textContent = Math.floor(easeOut * end).toLocaleString()
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [trigger, end, duration])

  return ref
}

function StatCard({ children, className = '' }) {
  return (
    <div className={`card_about ${className}`} data-anim="true">
      {children}
    </div>
  )
}

export default function AboutSection() {
  const sectionRef = useRef(null)
  const triggered = useRef(false)

  // We'll use vanilla JS for count animation on scroll
  useEffect(() => {
    const counters = sectionRef.current?.querySelectorAll('[data-count]')
    if (!counters?.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered.current) {
            triggered.current = true
            counters.forEach((el) => {
              const end = parseInt(el.dataset.count)
              const duration = parseInt(el.dataset.duration || 2000)
              const startTime = performance.now()
              const step = (currentTime) => {
                const elapsed = currentTime - startTime
                const progress = Math.min(elapsed / duration, 1)
                const easeOut = 1 - Math.pow(1 - progress, 3)
                el.textContent = Math.floor(easeOut * end).toLocaleString()
                if (progress < 1) requestAnimationFrame(step)
              }
              requestAnimationFrame(step)
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section_about" id="about" ref={sectionRef}>
      <div className="padding-section-large" />
      <div className="padding-global">
        <div className="container-large">
          <div className="vertical-center">
            {/* Tag */}
            <div className="tag" data-anim>
              <div className="dot-square" />
              <div>About us</div>
            </div>

            <div className="spacer-large" />

            {/* Animated heading */}
            <div className="max-width-medium is-41rem">
              <div className="title-wrap" data-anim>
                <h2>A</h2>
                <h2>global</h2>
                <h2>consulting</h2>
                <h2>partner</h2>
                <h2>dedicated</h2>
                <h2>to</h2>
                <h2>building</h2>
                <img
                  src="https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a8b414d6ce72030aa90514_icon1.svg"
                  loading="lazy"
                  alt=""
                  className="title-icon"
                />
                <h2>smarter</h2>
                <h2 style={{ opacity: 0.5 }}>and</h2>
                <img
                  src="https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a8b414217a32d2ca851e82_icon2.svg"
                  loading="lazy"
                  alt=""
                  className="title-icon"
                />
                <h2 style={{ opacity: 0.5 }}>more</h2>
                <h2 style={{ opacity: 0.5 }}>adaptive</h2>
              </div>
            </div>
          </div>

          <div className="spacer-section-large" />

          {/* Bento Cards */}
          <div className="about_layout">
            {/* Card 1 - Large with photo */}
            <div className="card_about" data-anim style={{ gridColumn: 'span 1' }}>
              <img
                src="https://cdn.prod.website-files.com/6929c116366a14507fc8424d/693671b05ed33655d4b7ce17_card-about-img.avif"
                loading="lazy"
                alt=""
                className="img"
                style={{ width: '100%', height: '10rem', objectFit: 'cover', borderRadius: '0.75rem' }}
              />
              <div className="vertical-space-between">
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
                    <div className="text-5xl" data-count="120" data-duration="2100">0</div>
                    <div className="text-5xl">+</div>
                  </div>
                  <div className="spacer-small" />
                  <div className="text-weight-medium">Collaborating with leading AI and cloud technology providers.</div>
                </div>
              </div>
            </div>

            {/* Card 2 - Subtle bg with testimonial */}
            <div className="card_about bg-subtle" data-anim>
              <div>
                <div className="text-weight-medium">Commitment to measurable</div>
                <div className="spacer-small" />
                <div className="text-wrap">
                  <div className="text-4xl" data-count="100" data-duration="2000">0</div>
                  <div className="text-4xl">%</div>
                </div>
              </div>
              <div>
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
                <div className="text-base text-weight-medium">
                  "Their automation strategy completely reshaped how we work. It's efficient, intelligent, and seamless."
                </div>
              </div>
            </div>

            {/* Card 3 - Green bg with data points */}
            <div className="card_about bg-green" data-anim>
              <div className="vertical-space-between">
                <div>
                  <div className="text-weight-medium">Data Points</div>
                  <div className="spacer-small" />
                  <div className="text-wrap">
                    <div className="text-4xl" data-count="520" data-duration="3000">0</div>
                    <div className="text-4xl">k+</div>
                  </div>
                </div>
                <div className="text-base text-weight-medium">
                  Analyzed monthly to power smarter business strategies.
                </div>
              </div>
            </div>

            {/* Card 4 - Black bg */}
            <div className="card_about bg-black" data-anim>
              <div className="card_4-content">
                <div className="text-weight-medium text-color-on-primary">Continents</div>
                <div className="text-wrap text-color-on-primary">
                  <div className="text-4xl" data-count="20" data-duration="2000">0</div>
                  <div className="text-4xl">+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-section-large" />
    </section>
  )
}
