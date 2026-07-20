import React from 'react';
import { Sparkles, ArrowUpRight, Github, Mail } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear();

  const cols = [
    {
      title: 'Products',
      links: [
        { label: 'Quelp Helpdesk',     action: () => onNavigate('quelp') },
        { label: 'Applications Hub',   action: () => onNavigate('apps')  },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Qolve', action: () => { onNavigate('home'); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 200); } },
        { label: 'Meet the Team', action: () => { onNavigate('home'); setTimeout(() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' }), 200); } },
        { label: 'Our Beliefs',   action: () => { onNavigate('home'); setTimeout(() => document.getElementById('beliefs')?.scrollIntoView({ behavior: 'smooth' }), 200); } },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'hello@qolve.systems', href: 'mailto:hello@qolve.systems' },
        { label: 'Early Access', action: () => onNavigate('quelp') },
      ],
    },
  ];

  return (
    <footer style={{
      background: 'var(--bg-void)',
      borderTop: '1px solid var(--border-sub)',
      padding: '64px 0 32px',
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 56, flexWrap: 'wrap' }}>

          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: 'linear-gradient(135deg, var(--teal), var(--teal-deep))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: 'white',
              }}>Q</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, letterSpacing: '-0.02em', color: 'var(--text-1)' }}>Qolve Systems</div>
            </div>
            <p style={{ fontSize: 13.5, color: 'var(--text-3)', lineHeight: 1.6, maxWidth: 260, marginBottom: 20 }}>
              A UK software studio building white-label AI applications. Creators of Quelp.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <a
                href="mailto:hello@qolve.systems"
                style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'var(--bg-surface)', border: '1px solid var(--border-mid)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-3)', transition: 'all 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hi)'; e.currentTarget.style.color = 'var(--text-teal)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-mid)'; e.currentTarget.style.color = 'var(--text-3)'; }}
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600,
                color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase',
                marginBottom: 16,
              }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(link => (
                  link.href ? (
                    <a
                      key={link.label}
                      href={link.href}
                      style={{ fontSize: 14, color: 'var(--text-2)', transition: 'color 0.15s', display: 'flex', alignItems: 'center', gap: 4 }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
                    >
                      {link.label} <ArrowUpRight size={12} style={{ opacity: 0.5 }} />
                    </a>
                  ) : (
                    <button
                      key={link.label}
                      onClick={link.action}
                      style={{ fontSize: 14, color: 'var(--text-2)', transition: 'color 0.15s', textAlign: 'left', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
                    >
                      {link.label}
                    </button>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border-sub)',
          paddingTop: 24,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-3)' }}>
            © {year} Qolve Systems Ltd. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Sparkles size={12} style={{ color: 'var(--text-teal)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-3)' }}>
              Quelp Beta — UK 🇬🇧
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
