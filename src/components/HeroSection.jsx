import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ onNavigate }) {
  return (
    <section id="about" style={{
      paddingTop: 148,
      paddingBottom: 96,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)`,
        backgroundSize: '72px 72px',
        maskImage: 'radial-gradient(ellipse 70% 50% at 50% 0%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 50% at 50% 0%, black 30%, transparent 100%)',
      }} />
      {/* Glow */}
      <div style={{
        position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 400,
        background: 'radial-gradient(ellipse at center, rgba(0,161,157,0.11) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Top label */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '5px 14px', borderRadius: 999,
            background: 'transparent', border: '1px solid var(--border-mid)',
            fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.07em', textTransform: 'uppercase',
            fontFamily: 'var(--font-mono)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            Qolve — UK software studio
          </div>
        </div>

        {/* Headline — direct, no fluff */}
        <div style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto', marginBottom: 40 }}>
          <h1 className="display-xl animate-fadeUp" style={{ marginBottom: 28, lineHeight: 1.08 }}>
            We build software<br />
            that <span className="grad-text">actually works.</span>
          </h1>

          <p className="body-lg animate-fadeUp delay-100" style={{ maxWidth: 560, margin: '0 auto 40px', color: 'var(--text-2)' }}>
            Qolve is a small team of engineers, designers and operators. We build Quelp — a white-label helpdesk platform for businesses that want proper customer support without the enterprise price tag.
          </p>

          <div className="animate-fadeUp delay-200" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => onNavigate('quelp')} className="btn-primary">
              See what we're building
              <ArrowRight size={15} />
            </button>
            <a href="#team" className="btn-ghost">
              Who we are
            </a>
          </div>
        </div>

        {/* Simple divider with stats — no mockup */}
        <div className="animate-fadeUp delay-300" style={{
          maxWidth: 760, margin: '64px auto 0',
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          borderTop: '1px solid var(--border-sub)',
          paddingTop: 40, gap: 0,
        }}>
          {[
            { value: 'Quelp', label: 'Our flagship product', sub: 'White-label helpdesk SaaS' },
            { value: 'UK', label: 'Where we are', sub: 'Registered & operating in Britain' },
            { value: '5 people', label: 'The whole team', sub: 'Engineering, product & sales' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '0 32px',
              borderLeft: i > 0 ? '1px solid var(--border-sub)' : 'none',
              textAlign: i === 1 ? 'center' : i === 2 ? 'right' : 'left',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)',
                color: 'var(--text-1)', letterSpacing: '-0.03em', marginBottom: 6,
              }}>{s.value}</div>
              <div style={{ fontSize: 12, color: 'var(--text-3)', fontFamily: 'var(--font-mono)', marginBottom: 3 }}>{s.label}</div>
              <div style={{ fontSize: 11.5, color: 'var(--text-3)' }}>{s.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
