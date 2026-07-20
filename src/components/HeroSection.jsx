import React from 'react';
import { ArrowRight, Sparkles, Shield, Cpu } from 'lucide-react';

export default function HeroSection({ onNavigate }) {
  return (
    <section id="about" style={{
      paddingTop: 140,
      paddingBottom: 80,
      background: 'radial-gradient(circle at 50% 20%, rgba(0, 161, 157, 0.18) 0%, rgba(11, 19, 25, 0) 70%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Announcement pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '6px 18px', borderRadius: 999,
            background: 'var(--bg-surface)', border: '1px solid rgba(0,161,157,0.35)',
            fontSize: 12, color: 'var(--text-2)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--teal)', display: 'inline-block' }} />
            <span style={{ color: 'var(--teal)', fontWeight: 700, letterSpacing: '0.06em', fontSize: 11 }}>QOLVE SYSTEMS</span>
            <span style={{ color: 'var(--text-3)' }}>|</span>
            <span>Home of <strong style={{ color: 'var(--text-1)' }}>Quelp</strong> White-Label Helpdesk</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ textAlign: 'center', maxWidth: 860, margin: '0 auto', marginBottom: 64 }}>
          <h1 className="display-xl animate-fadeUp" style={{ marginBottom: 24, lineHeight: 1.1 }}>
            Building the next era of{' '}
            <br />
            <span className="grad-text">intuitive AI applications.</span>
          </h1>

          <p className="body-lg animate-fadeUp delay-100" style={{ maxWidth: 620, margin: '0 auto 36px', color: 'var(--text-2)' }}>
            Qolve is a modern software studio crafting robust, human-centric software. We build tools that make technology feel like a natural extension of your team — starting with our flagship platform, <span style={{ color: 'var(--text-1)', fontWeight: 600 }}>Quelp</span>.
          </p>

          <div className="animate-fadeUp delay-200" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => onNavigate('quelp')} className="btn-primary">
              Explore Quelp SaaS
              <ArrowRight size={16} />
            </button>
            <a href="#team" className="btn-ghost">
              Meet Our Team
            </a>
          </div>
        </div>

        {/* Window mockup */}
        <div className="animate-fadeUp delay-300" style={{
          maxWidth: 900, margin: '0 auto 64px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-mid)',
          borderRadius: 18,
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.45)',
        }}>
          {/* Title bar */}
          <div style={{
            background: 'var(--bg-void)',
            padding: '12px 20px',
            borderBottom: '1px solid var(--border-sub)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', gap: 7 }}>
              {['#ff5f56', '#ffbd2e', '#27c93f'].map(c => (
                <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
              ))}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)' }}>qolve.systems / company-overview</div>
            <div style={{
              padding: '2px 10px', borderRadius: 4,
              background: 'rgba(0,161,157,0.15)', border: '1px solid rgba(0,161,157,0.25)',
              fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-teal)',
            }}>v1.0 Operational</div>
          </div>

          {/* Inner grid */}
          <div style={{
            padding: '32px',
            background: 'var(--bg-base)',
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
          }}>
            {[
              { icon: Sparkles, color: 'var(--teal)', bg: 'rgba(0,161,157,0.12)', title: 'Human-Centric AI', body: 'Developing intelligent assistants that behave like real team members, avoiding frustrating bot loops.' },
              { icon: Shield, color: '#008082', bg: 'rgba(0,128,130,0.12)', title: 'White-Label First', body: 'Empowering SMBs to deliver fully branded customer support experiences under their own name.' },
              { icon: Cpu, color: 'var(--text-3)', bg: 'rgba(99,125,140,0.12)', title: 'Atomic Engineering', body: 'Building lean, robust systems designed to minimize token waste and maximize operational efficiency.' },
            ].map(({ icon: Icon, color, bg, title, body }) => (
              <div key={title} style={{
                background: 'var(--bg-surface)', padding: 20,
                borderRadius: 12, border: '1px solid var(--border-sub)',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, background: bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14,
                }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-1)', marginBottom: 8 }}>{title}</div>
                <p style={{ fontSize: 12.5, color: 'var(--text-2)', lineHeight: 1.65 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4-column stat strip */}
        <div className="animate-fadeUp delay-400" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          border: '1px solid var(--border-mid)', borderRadius: 14,
          background: 'var(--bg-surface)', overflow: 'hidden',
        }}>
          {[
            { value: 'Qolve',    sub: 'Software Studio' },
            { value: 'Quelp',    sub: 'Flagship AI Helpdesk', teal: true },
            { value: '6 Founders', sub: 'Dedicated Roles' },
            { value: 'UK Based', sub: 'Registered Company' },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                padding: '22px 16px', textAlign: 'center',
                borderRight: i < 3 ? '1px solid var(--border-sub)' : 'none',
                transition: 'background 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20,
                color: s.teal ? 'var(--text-teal)' : 'var(--text-1)', marginBottom: 5,
              }}>{s.value}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)' }}>{s.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
