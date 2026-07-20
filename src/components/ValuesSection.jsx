import React, { useState } from 'react';

const beliefs = [
  {
    n: '01',
    title: 'If the AI doesn\'t know, it should say so.',
    body: "We don't build AI that argues, guesses, or loops endlessly. If a question needs a human, the system hands off instantly — with full conversation history — rather than wasting the customer's time pretending.",
    tag: 'Fast escalation',
  },
  {
    n: '02',
    title: 'Good engineering is boring in the best way.',
    body: 'We write small, predictable modules. No clever abstractions for the sake of it. Fast loads, low error rates, and no security surprises. Clean code that another engineer can read six months later without swearing.',
    tag: 'Atomic & robust',
  },
  {
    n: '03',
    title: 'Your software should look like yours.',
    body: "Businesses using Quelp shouldn't have to advertise us. White-labelling isn't a paid add-on — it's the default. Your logo, your colours, your domain.",
    tag: 'Brand freedom',
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

        <div style={{ maxWidth: 900, margin: '0 auto' }}>

          {/* Header — left-aligned, less formal */}
          <div style={{ marginBottom: 56 }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--teal)',
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16,
            }}>
              How we think
            </div>
            <h2 className="display-lg" style={{ marginBottom: 16, maxWidth: 500 }}>
              Things we won't<br />compromise on.
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text-2)', maxWidth: 480, lineHeight: 1.65 }}>
              These aren't values written by committee. They're the things we actually argued about and decided on.
            </p>
          </div>

          {/* Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {beliefs.map((b, i) => (
              <div
                key={b.n}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  padding: '36px 40px',
                  borderRadius: i === 0 ? '16px 16px 0 0' : i === beliefs.length - 1 ? '0 0 16px 16px' : 0,
                  background: hovered === i ? '#131e26' : 'var(--bg-surface)',
                  border: '1px solid var(--border-mid)',
                  borderBottom: i < beliefs.length - 1 ? 'none' : '1px solid var(--border-mid)',
                  transition: 'background 0.2s ease',
                  cursor: 'default',
                  display: 'flex', gap: 36, alignItems: 'flex-start',
                  animation: `fadeUp 0.45s ${i * 0.08}s var(--ease-out) both`,
                }}
              >
                {/* Number */}
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-3)',
                  paddingTop: 3, minWidth: 28, flexShrink: 0,
                }}>{b.n}</div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: 10 }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: 10,
                      color: 'var(--teal)', background: 'rgba(0,161,157,0.1)',
                      border: '1px solid rgba(0,161,157,0.2)',
                      padding: '2px 8px', borderRadius: 4,
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                    }}>{b.tag}</span>
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                    color: 'var(--text-1)', marginBottom: 12, letterSpacing: '-0.02em',
                    lineHeight: 1.3,
                  }}>{b.title}</h3>
                  <p style={{ fontSize: 14.5, color: 'var(--text-2)', lineHeight: 1.72, maxWidth: 580 }}>{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
