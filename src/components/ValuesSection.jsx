import React, { useState } from 'react';
import { Compass } from 'lucide-react';

const beliefs = [
  {
    n: '1',
    title: 'Fast Escalation Beats Fake AI Confidence',
    subtitle: 'Respect customer time above long conversation length.',
    body: "We don't build AI that argues, guesses, or loops endlessly. If a query requires human context or sensitive handling, our systems hand off instantly to a team member with full history intact.",
    color: '#00A19D',
    border: 'rgba(0,161,157,0.35)',
  },
  {
    n: '2',
    title: 'Atomic, Robust & Efficient Engineering',
    subtitle: 'Clean code over bloated, fragile architectures.',
    body: 'Our core engineering principles demand lean, predictable systems. We build atomic modules with zero slop — ensuring fast load times, minimal error rates, and rock-solid security.',
    color: '#00A19D',
    border: 'rgba(0,161,157,0.35)',
  },
  {
    n: '3',
    title: 'True White-Label & Brand Freedom',
    subtitle: 'Your software should look like your software.',
    body: "We believe businesses shouldn't be forced to display third-party logos or generic customer portals. White-labelling is built into Qolve's architecture from day one.",
    color: 'var(--text-3)',
    border: 'var(--border-mid)',
  },
];

export default function ValuesSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="beliefs" style={{
      padding: '100px 0',
      background: 'var(--bg-void)',
      borderTop: '1px solid var(--border-sub)',
    }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <div className="pill pill-teal">
              <Compass size={11} />
              Company Philosophy
            </div>
          </div>
          <h2 className="display-lg" style={{ marginBottom: 16 }}>Things We Believe</h2>
          <p className="body-lg" style={{ color: 'var(--text-2)' }}>
            The non-negotiable principles guiding every product, feature, and line of code crafted at Qolve.
          </p>
        </div>

        {/* Belief cards — stacked vertically, original style */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 900, margin: '0 auto' }}>
          {beliefs.map((b, i) => (
            <div
              key={b.n}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? '#192936' : 'var(--bg-surface)',
                border: `1px solid ${hovered === i ? b.border : 'var(--border-mid)'}`,
                borderRadius: 24,
                padding: '40px 44px',
                transition: 'all 0.25s var(--ease-out)',
                cursor: 'default',
                transform: hovered === i ? 'scale(1.01)' : 'scale(1)',
                animation: `fadeUp 0.5s ${i * 0.1}s var(--ease-out) both`,
              }}
            >
              <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}>

                {/* Number badge */}
                <div style={{
                  width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                  background: 'var(--bg-void)', border: '1px solid var(--border-mid)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 22,
                  color: 'var(--teal)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                }}>{b.n}</div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                    color: 'var(--text-1)', marginBottom: 8, letterSpacing: '-0.02em',
                  }}>{b.title}</h3>
                  <div style={{ fontSize: 13, fontWeight: 600, color: b.color, marginBottom: 12 }}>
                    {b.subtitle}
                  </div>
                  <p style={{ fontSize: 14.5, color: 'var(--text-2)', lineHeight: 1.7 }}>{b.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
