import { useEffect, useRef } from 'react'

export default function AboutSection() {
  const sectionRef = useRef(null)
  const triggered = useRef(false)

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
    <section className="section_about" id="about" ref={sectionRef} style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="padding-section-large" />
      <div className="padding-global">
        <div className="container-large">
          <div className="vertical-center">
            {/* Tag */}
            <div className="tag" data-anim>
              <div className="dot-square" />
              <div>🌱 Organic Product Ecosystem</div>
            </div>

            <div className="spacer-large" />

            {/* Heading */}
            <div className="max-width-medium is-41rem">
              <h2 className="text-align-center" data-anim style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                A technical product lab cultivating smarter, fluid support SaaS
              </h2>
            </div>

            <div className="spacer-medium" />

            <div className="max-width-medium">
              <div className="text-base text-align-center" style={{ color: '#cbd5e1', fontSize: '1.0625rem' }} data-anim>
                Engineered with the resilience of a natural ecosystem — zero bloat, pure white-label independence, and grounded machine intelligence.
              </div>
            </div>
          </div>

          <div className="spacer-section-large" />

          {/* Liquid Glass Bento Cards */}
          <div className="about_layout">
            {/* Card 1 - Large Overview with Liquid Glass Sheen */}
            <div className="card_about liquid-glass" data-anim style={{ gridColumn: 'span 1', minHeight: '26rem' }}>
              <div className="vertical-space-between" style={{ height: '100%', position: 'relative', zIndex: 2 }}>
                <div className="card_1-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#6ee7b7', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    🌿 Qolve Platform Philosophy
                  </span>
                  <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', background: 'rgba(52,211,153,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399' }}>
                    💧
                  </div>
                </div>
                
                <div className="spacer-medium" />
                <div className="text-base" style={{ lineHeight: 1.65, color: '#f8fafc' }}>
                  Qolve is a technical product lab focused on building high-performance, white-label SaaS applications. Our primary mission is delivering <strong>Quelp</strong> — a complete customer support ecosystem that replaces complex enterprise helpdesks at a transparent, sustainable price point.
                </div>

                <div className="spacer-medium" />
                
                <div className="about_card-float" style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1.25rem' }}>
                  <div className="text-wrap" style={{ color: '#34d399', textShadow: '0 0 20px rgba(52,211,153,0.4)' }}>
                    <div className="text-5xl" data-count="100" data-duration="2100">0</div>
                    <div className="text-5xl">%</div>
                  </div>
                  <div className="spacer-small" />
                  <div style={{ color: '#e2e8f0', fontWeight: 600 }}>Pure White-label autonomy with custom CNAME domain isolation.</div>
                </div>
              </div>
            </div>

            {/* Card 2 - Infrastructure & AWS SES */}
            <div className="card_about liquid-glass is-subtle" data-anim style={{ minHeight: '26rem' }}>
              <div className="vertical-space-between" style={{ height: '100%', position: 'relative', zIndex: 2 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#a7f3d0', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <span>🍃</span> Resilient Email Soil
                  </div>
                  <div className="spacer-small" />
                  <div className="text-wrap" style={{ color: '#6ee7b7', textShadow: '0 0 20px rgba(110,231,183,0.3)' }}>
                    <div className="text-4xl" data-count="99" data-duration="2000">0</div>
                    <div className="text-4xl">.9%</div>
                  </div>
                </div>
                <div className="spacer-medium" />
                <div>
                  <div className="text-base" style={{ lineHeight: 1.6, color: '#e2e8f0' }}>
                    "Integrated Stalwart mail server container paired with AWS SES outbound relay for SPF, DKIM, and DMARC validated email delivery under <code>qolve.systems</code>."
                  </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '1rem', color: '#34d399', fontSize: '0.8125rem', fontWeight: 600 }}>
                  ✓ Zero dropped support tickets
                </div>
              </div>
            </div>

            {/* Card 3 - Channels */}
            <div className="card_about liquid-glass is-emerald" data-anim style={{ minHeight: '26rem' }}>
              <div className="vertical-space-between" style={{ height: '100%', position: 'relative', zIndex: 2 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f8fafc', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <span>🌿</span> Omnichannel Canopy
                  </div>
                  <div className="spacer-small" />
                  <div className="text-wrap" style={{ color: '#ffffff', textShadow: '0 0 25px rgba(255,255,255,0.5)' }}>
                    <div className="text-4xl" data-count="4" data-duration="1500">0</div>
                    <div className="text-4xl">In 1</div>
                  </div>
                </div>
                <div className="text-base" style={{ color: '#f1f5f9', lineHeight: 1.6 }}>
                  Email, Live Web Widget, Branded Help Center &amp; Customer Self-Service Portal consolidated into one fluid stream.
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.25)', paddingTop: '1rem', color: '#f8fafc', fontSize: '0.8125rem', fontWeight: 700 }}>
                  ✦ Instant multi-channel sync
                </div>
              </div>
            </div>

            {/* Card 4 - Product Roadmap Horizon */}
            <div className="card_about liquid-glass is-deep" data-anim style={{ minHeight: '26rem' }}>
              <div className="vertical-space-between" style={{ height: '100%', position: 'relative', zIndex: 2 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#a7f3d0', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <span>🌱</span> Growth Horizon
                  </div>
                  <div className="spacer-small" />
                  <div className="text-wrap" style={{ color: '#34d399' }}>
                    <div className="text-4xl">2026–2027</div>
                  </div>
                </div>
                <div className="text-base" style={{ color: '#cbd5e1', lineHeight: 1.6 }}>
                  Live commercial pilot rollout across fast-growing B2B software teams and modern digital platforms.
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '1rem', color: '#6ee7b7', fontSize: '0.8125rem', fontWeight: 600 }}>
                  ● Active Development &amp; Pilot Onboarding
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


