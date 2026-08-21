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
    <section className="section_about" id="about" ref={sectionRef} style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
      <div className="padding-global">
        <div className="container-large">
          {/* Asymmetric Editorial Header + Bento Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem', alignItems: 'start' }}>
            
            {/* Left Column: Left-aligned Story & Live Metric (5 cols) */}
            <div style={{ gridColumn: 'span 5', position: 'sticky', top: '6rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(20px)',
                  color: '#cbd5e1',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  marginBottom: '1.5rem',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 6px rgba(52,211,153,0.8)' }} />
                <span>Ecosystem Philosophy</span>
              </div>

              <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', color: '#ffffff', letterSpacing: '-0.035em', lineHeight: 1.1, fontWeight: 700, marginBottom: '1.25rem' }}>
                Cultivating support software that feels <br />
                <span className="text-serif-italic" style={{ color: '#6ee7b7', fontSize: '1.15em', fontWeight: 400 }}>
                  quietly intelligent.
                </span>
              </h2>

              <p style={{ color: '#94a3b8', fontSize: '1.0625rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                Qolve is a technical product lab dedicated to modern SaaS engineering. Our flagship platform, <strong>Quelp</strong>, replaces overcomplicated enterprise helpdesks with an organic, white-label architecture engineered for complete data sovereignty.
              </p>

              {/* Mini Stat Card */}
              <div
                className="macos-glass is-emerald"
                style={{
                  padding: '1.5rem',
                  borderRadius: '1.25rem',
                  border: '1px solid rgba(52, 211, 153, 0.25)',
                  boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', color: '#ffffff', marginBottom: '0.25rem' }}>
                  <span className="text-5xl" style={{ fontWeight: 800, letterSpacing: '-0.04em' }} data-count="100" data-duration="2000">0</span>
                  <span className="text-5xl" style={{ fontWeight: 800, color: '#34d399' }}>%</span>
                </div>
                <div style={{ color: '#e2e8f0', fontSize: '0.9375rem', fontWeight: 500 }}>
                  White-label autonomy with isolated DNS CNAME routing.
                </div>
              </div>
            </div>

            {/* Right Column: 3-Card Asymmetric Bento Grid (7 cols) */}
            <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Top Wide Feature Card */}
              <div
                className="card_about macos-glass is-emerald"
                style={{
                  padding: '2.25rem',
                  minHeight: '18rem',
                  borderRadius: '1.5rem',
                  border: '1px solid rgba(52, 211, 153, 0.25)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6ee7b7', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    🌿 Resilient Mail Relay
                  </span>
                  <div style={{ width: '1.75rem', height: '1.75rem', borderRadius: '50%', background: 'rgba(52,211,153,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399', fontSize: '0.85rem' }}>
                    ✦
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', color: '#6ee7b7', marginBottom: '0.75rem' }}>
                  <div className="text-4xl" style={{ fontWeight: 800 }} data-count="99" data-duration="2000">0</div>
                  <div className="text-4xl" style={{ fontWeight: 800 }}>.9%</div>
                  <span style={{ color: '#94a3b8', fontSize: '0.875rem', marginLeft: '0.5rem' }}>deliverability rate</span>
                </div>

                <div style={{ color: '#cbd5e1', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  Integrated Stalwart mail server container paired with AWS SES outbound relay for SPF, DKIM, and DMARC verified email delivery under <code>qolve.systems</code>.
                </div>

                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', color: '#34d399', fontSize: '0.8125rem', fontWeight: 600 }}>
                  ✓ Zero dropped support tickets
                </div>
              </div>

              {/* Bottom 2-Card Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                
                {/* Omnichannel Card */}
                <div
                  className="card_about macos-glass is-subtle"
                  style={{
                    padding: '2rem',
                    minHeight: '18rem',
                    borderRadius: '1.5rem',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#cbd5e1', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    🌱 Omnichannel Stream
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                    <div className="text-4xl" style={{ fontWeight: 800 }} data-count="4" data-duration="1500">0</div>
                    <div className="text-4xl" style={{ fontWeight: 800 }}>In 1</div>
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    Email, live chat, knowledge base &amp; customer portal consolidated into one unified inbox.
                  </div>
                  <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', color: '#cbd5e1', fontSize: '0.75rem', fontWeight: 600 }}>
                    ● Real-time sync across channels
                  </div>
                </div>

                {/* Growth Horizon Card */}
                <div
                  className="card_about macos-glass is-deep"
                  style={{
                    padding: '2rem',
                    minHeight: '18rem',
                    borderRadius: '1.5rem',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#34d399', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    🌲 Deployment Horizon
                  </div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
                    2026–2027
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    Commercial pilot rollouts across fast-growing B2B tech companies and platform teams.
                  </div>
                  <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', color: '#34d399', fontSize: '0.75rem', fontWeight: 600 }}>
                    ✦ Active Pilot Onboarding
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )

}


