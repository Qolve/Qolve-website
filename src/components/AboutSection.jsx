import { useEffect, useRef } from 'react'

export default function AboutSection({ onNavigate }) {
  return (
    <>
      {/* Series 01: The Oak Series / Quelp Core Architecture */}
      <section className="relative w-full py-20 md:py-32 bg-[#121413] overflow-hidden" id="about">
        <div className="container-large" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          
          {/* Header */}
          <div style={{ marginBottom: '3.5rem', textAlign: 'left' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(45, 75, 62, 0.25)',
                color: '#adcebd',
                padding: '0.35rem 0.9rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                border: '1px solid rgba(173, 206, 189, 0.2)',
                marginBottom: '1.25rem',
              }}
            >
              Series 01 // Architecture
            </span>

            <h2
              style={{
                fontFamily: 'Hanken Grotesk, sans-serif',
                fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
                fontWeight: 600,
                color: '#e2e3e0',
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                marginBottom: '0.85rem',
              }}
            >
              The Oak Series
            </h2>

            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.0625rem',
                color: '#c1c8c3',
                maxWidth: '32rem',
                lineHeight: 1.6,
              }}
            >
              Solid charcoal oak architecture, machined to microscopic tolerances. Finished with a liquid glass interface.
            </p>
          </div>

          {/* 12-Column Asymmetric Bento Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem' }}>
            
            {/* Col-8 Main Feature Card */}
            <div
              className="glass-panel group"
              style={{
                gridColumn: 'span 8',
                position: 'relative',
                minHeight: '480px',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '2.5rem',
              }}
            >
              {/* Charred Oak & Liquid Glass Image */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <img
                  src="/images/verdant-oak-device.jpg"
                  alt="Quelp Core Device"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.65,
                    filter: 'contrast(1.1) brightness(0.8)',
                    transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.04)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(0deg, #121413 0%, rgba(18, 20, 19, 0.7) 45%, transparent 100%)',
                  }}
                />
              </div>

              {/* Card Content */}
              <div style={{ position: 'relative', zIndex: 10, maxWidth: '28rem' }}>
                <h3
                  style={{
                    fontFamily: 'Hanken Grotesk, sans-serif',
                    fontSize: '2rem',
                    fontWeight: 600,
                    color: '#e2e3e0',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.65rem',
                  }}
                >
                  Quelp Core Hub
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#c1c8c3',
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  The central hub of your support operations, carved from a resilient high-throughput architecture with Stalwart mail relay and grounded draft intelligence.
                </p>

                <button
                  onClick={() => onNavigate && onNavigate('products')}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    color: '#adcebd',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#c8ead8' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#adcebd' }}
                >
                  <span>Discover Quelp Core</span>
                  <span style={{ fontSize: '1.1rem' }}>→</span>
                </button>
              </div>
            </div>

            {/* Col-4 Secondary Stack */}
            <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Ethical Sourcing / Zero Bloat Card */}
              <div
                className="glass-panel"
                style={{
                  flex: 1,
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '225px',
                }}
              >
                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    background: 'rgba(45, 75, 62, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(173, 206, 189, 0.25)',
                    color: '#adcebd',
                    fontSize: '1.25rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  🌿
                </div>

                <div>
                  <h4
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      color: '#e2e3e0',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Ethical Sourcing &amp; Zero Bloat
                  </h4>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      color: '#c1c8c3',
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                    }}
                  >
                    Every routing protocol is traceable to zero-latency, privacy-first edge nodes with complete data sovereignty.
                  </p>
                </div>
              </div>

              {/* Refractive Display Card */}
              <div
                className="glass-panel"
                style={{
                  flex: 1,
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '225px',
                }}
              >
                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    background: 'rgba(45, 75, 62, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(173, 206, 189, 0.25)',
                    color: '#adcebd',
                    fontSize: '1.25rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  ✦
                </div>

                <div>
                  <h4
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      color: '#e2e3e0',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Refractive Interface
                  </h4>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      color: '#c1c8c3',
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                    }}
                  >
                    Our signature liquid glass technology blends seamlessly into your custom brand identity with zero third-party badges.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .glass-panel[style*="grid-column: span 8"],
            div[style*="grid-column: span 4"] {
              grid-column: span 12 !important;
            }
          }
        `}</style>
      </section>

      {/* Breathe Statement Section */}
      <section
        style={{
          width: '100%',
          padding: '7rem 1.5rem',
          background: '#0d0f0e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <h2
            className="text-glow"
            style={{
              fontFamily: 'Hanken Grotesk, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: 1.15,
              fontWeight: 400,
              letterSpacing: '-0.03em',
              color: '#e2e3e0',
            }}
          >
            Leave no trace.<br />
            <span style={{ color: '#8b928d' }}>Only impact.</span>
          </h2>
        </div>
      </section>
    </>
  )
}



