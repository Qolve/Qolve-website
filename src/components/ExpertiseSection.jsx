export default function ExpertiseSection() {
  return (
    <section className="section_expertise" id="expertise" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0', background: '#0d0f0e' }}>
      <div className="padding-global">
        <div className="container-large" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'left', marginBottom: '3.5rem', maxWidth: '44rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                background: 'rgba(45, 75, 62, 0.25)',
                border: '1px solid rgba(173, 206, 189, 0.2)',
                color: '#adcebd',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#adcebd', boxShadow: '0 0 6px rgba(173,206,189,0.8)' }} />
              <span>Engineering Pods &amp; Deep Tech</span>
            </div>

            <h2 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: '#e2e3e0', letterSpacing: '-0.025em', lineHeight: 1.15, fontWeight: 600, marginBottom: '1rem' }}>
              Where human craftsmanship meets liquid intelligence
            </h2>

            <p style={{ color: '#c1c8c3', fontSize: '1.0625rem', lineHeight: 1.6 }}>
              At Qolve, we build software designed not to replace support teams, but to empower them — combining grounded AI with resilient infrastructure and 100% white-label control.
            </p>
          </div>

          <div className="expertise_cards">

            {/* Card 1: Grounded Support Intelligence (Permafix AI) */}
            <div className="expertise_card liquid-glass" data-anim style={{ borderRadius: '1.75rem', overflow: 'hidden' }}>
              <div className="visual" style={{ background: 'rgba(4, 20, 12, 0.65)', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', backdropFilter: 'blur(20px)' }}>
                <div style={{ background: 'radial-gradient(120% 120% at 30% 0%, rgba(52,211,153,0.18) 0%, rgba(6,35,20,0.5) 100%)', border: '1px solid rgba(110,231,183,0.35)', borderRadius: '1.25rem', padding: '1.25rem', color: '#f8fafc', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.4)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ background: 'rgba(52,211,153,0.2)', color: '#6ee7b7', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, border: '1px solid rgba(52,211,153,0.3)' }}>
                      💧 Permafix AI Engine
                    </span>
                    <span style={{ color: '#34d399', fontSize: '0.75rem', fontWeight: 700 }}>98.6% Grounded</span>
                  </div>
                  <div style={{ background: 'rgba(2, 14, 8, 0.7)', padding: '0.75rem', borderRadius: '0.75rem', marginBottom: '0.75rem', fontSize: '0.8125rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ color: '#6ee7b7', fontSize: '0.7rem', fontWeight: 700, marginBottom: '0.25rem' }}>✓ Knowledge Base Article Matched</div>
                    <div style={{ color: '#f8fafc', fontWeight: 600 }}>KB-402: Subdomain SPF &amp; DKIM Verification</div>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.4 }}>
                    Auto-generated draft reply prepared for human agent approval...
                  </div>
                </div>
              </div>
              <div className="card-padding-medium" style={{ padding: '2rem' }}>
                <div className="vertical-center">
                  <h3 className="text-xl text-align-center" style={{ color: '#f8fafc', fontWeight: 700 }}>Grounded Support Intelligence</h3>
                  <div className="spacer-xsmall" />
                  <div className="text-base text-align-center" style={{ color: '#cbd5e1', lineHeight: 1.6 }}>
                    Permafix AI pairs RAG knowledge base retrieval with human-in-the-loop verification to deliver accurate, zero-hallucination support suggestions.
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Zero-Loss Mail Relay & Deliverability */}
            <div className="expertise_card liquid-glass is-subtle" data-anim style={{ borderRadius: '1.75rem', overflow: 'hidden' }}>
              <div className="visual" style={{ background: 'rgba(4, 20, 12, 0.65)', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', backdropFilter: 'blur(20px)' }}>
                <div style={{ background: 'radial-gradient(120% 120% at 30% 0%, rgba(255,255,255,0.1) 0%, rgba(6,30,18,0.6) 100%)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: '1.25rem', padding: '1.25rem', color: '#f8fafc', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.3)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ background: 'rgba(255,255,255,0.15)', color: '#f8fafc', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                      🍃 Mail Relay Spec
                    </span>
                    <span style={{ color: '#34d399', fontSize: '0.75rem', fontWeight: 700 }}>100% Deliverability</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.35rem' }}>
                      <span style={{ color: '#94a3b8' }}>IMAP Server:</span>
                      <span style={{ fontWeight: 600, color: '#f8fafc' }}>Stalwart Container</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.35rem' }}>
                      <span style={{ color: '#94a3b8' }}>Outbound Relay:</span>
                      <span style={{ fontWeight: 600, color: '#f8fafc' }}>AWS SES (qolve.systems)</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem' }}>
                      <span style={{ color: '#94a3b8' }}>Security Suite:</span>
                      <span style={{ color: '#6ee7b7', fontWeight: 700 }}>SPF • DKIM • DMARC Aligned</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-padding-medium" style={{ padding: '2rem' }}>
                <div className="vertical-center">
                  <h3 className="text-xl text-align-center" style={{ color: '#f8fafc', fontWeight: 700 }}>Zero-Loss Mail Infrastructure</h3>
                  <div className="spacer-xsmall" />
                  <div className="text-base text-align-center" style={{ color: '#cbd5e1', lineHeight: 1.6 }}>
                    High-resilience email ingestion and outbound relay hosted under <code style={{ color: '#34d399', background: 'rgba(52,211,153,0.15)', padding: '0.15rem 0.4rem', borderRadius: '0.25rem', fontWeight: 600 }}>qolve.systems</code> ensuring zero dropped messages.
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: 100% White-Label Branding Control */}
            <div className="expertise_card liquid-glass is-emerald" data-anim style={{ borderRadius: '1.75rem', overflow: 'hidden' }}>
              <div className="visual" style={{ background: 'rgba(4, 20, 12, 0.65)', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', backdropFilter: 'blur(20px)' }}>
                <div style={{ background: 'radial-gradient(120% 120% at 30% 0%, rgba(52,211,153,0.25) 0%, rgba(4,38,22,0.6) 100%)', border: '1px solid rgba(110,231,183,0.4)', borderRadius: '1.25rem', padding: '1.25rem', color: '#f8fafc', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.4)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ background: 'rgba(255,255,255,0.2)', color: '#ffffff', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                      🌿 White-Label Engine
                    </span>
                    <span style={{ color: '#a7f3d0', fontSize: '0.75rem', fontWeight: 600 }}>Custom CNAME</span>
                  </div>
                  <div style={{ background: 'rgba(2, 14, 8, 0.7)', padding: '0.625rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.8125rem', fontFamily: 'monospace', color: '#6ee7b7', marginBottom: '0.75rem', border: '1px solid rgba(52,211,153,0.3)' }}>
                    https://support.yourdomain.com
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <div style={{ flex: 1, background: '#34d399', height: '0.5rem', borderRadius: '9999px' }} />
                    <div style={{ flex: 1, background: '#6ee7b7', height: '0.5rem', borderRadius: '9999px' }} />
                    <div style={{ flex: 1, background: 'rgba(255,255,255,0.2)', height: '0.5rem', borderRadius: '9999px' }} />
                  </div>
                </div>
              </div>
              <div className="card-padding-medium" style={{ padding: '2rem' }}>
                <div className="vertical-center">
                  <h3 className="text-xl text-align-center" style={{ color: '#f8fafc', fontWeight: 700 }}>100% White-Label Autonomy</h3>
                  <div className="spacer-xsmall" />
                  <div className="text-base text-align-center" style={{ color: '#cbd5e1', lineHeight: 1.6 }}>
                    Total brand sovereignty for growing SaaS teams — custom CNAME domain mapping, full CSS/theme controls, and branded customer portals.
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Omnichannel Helpdesk & Ticket Triage */}
            <div className="expertise_card liquid-glass is-deep" data-anim style={{ borderRadius: '1.75rem', overflow: 'hidden' }}>
              <div className="visual" style={{ background: 'rgba(4, 20, 12, 0.65)', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', backdropFilter: 'blur(20px)' }}>
                <div style={{ background: 'radial-gradient(120% 120% at 30% 0%, rgba(255,255,255,0.1) 0%, rgba(5,25,15,0.7) 100%)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: '1.25rem', padding: '1.25rem', color: '#f8fafc', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.3)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ background: 'rgba(255,255,255,0.15)', color: '#f8fafc', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>
                      🌱 Queue Stream
                    </span>
                    <span style={{ color: '#34d399', fontSize: '0.75rem', fontWeight: 700 }}>SLA Target: 15m</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ background: 'rgba(255,255,255,0.06)', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.78125rem', display: 'flex', justifyContent: 'space-between' }}>
                      <span>#TICK-802 (DNS Setup)</span>
                      <span style={{ color: '#6ee7b7', fontWeight: 600 }}>Assigned: Gabriel S.</span>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.06)', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.78125rem', display: 'flex', justifyContent: 'space-between' }}>
                      <span>#TICK-801 (White-Label)</span>
                      <span style={{ color: '#f8fafc', fontWeight: 600 }}>Assigned: Freddie H.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-padding-medium" style={{ padding: '2rem' }}>
                <div className="vertical-center">
                  <h3 className="text-xl text-align-center" style={{ color: '#f8fafc', fontWeight: 700 }}>Unified Ticket Triage</h3>
                  <div className="spacer-xsmall" />
                  <div className="text-base text-align-center" style={{ color: '#cbd5e1', lineHeight: 1.6 }}>
                    Consolidate email, web chat, and portal requests into an assigned ticket stream with real-time collision prevention and SLA alerts.
                  </div>
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


