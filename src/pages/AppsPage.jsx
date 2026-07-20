import React, { useState } from 'react';
import { Sparkles, ArrowRight, Layers, Bot, BarChart2, Lock, Globe, Cpu, ExternalLink, Clock } from 'lucide-react';

const apps = [
  {
    id: 'quelp',
    name: 'Quelp',
    category: 'Helpdesk',
    status: 'Beta',
    statusColor: '#00A19D',
    icon: Bot,
    color: '#00A19D',
    bg: 'rgba(0,161,157,0.1)',
    border: 'rgba(0,161,157,0.2)',
    description: 'White-label AI helpdesk platform with smart ticket routing, AI reply drafts, and full brand customisation.',
    tags: ['AI', 'White-label', 'SaaS'],
    cta: 'quelp',
  },
  {
    id: 'analytics',
    name: 'Qolve Insights',
    category: 'Analytics',
    status: 'Coming soon',
    statusColor: '#6366f1',
    icon: BarChart2,
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.1)',
    border: 'rgba(99,102,241,0.2)',
    description: 'A business intelligence layer that unifies support, sales, and product data into a single readable dashboard.',
    tags: ['Analytics', 'BI', 'White-label'],
    cta: null,
  },
  {
    id: 'auth',
    name: 'Qolve Auth',
    category: 'Identity',
    status: 'In design',
    statusColor: '#f59e0b',
    icon: Lock,
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
    border: 'rgba(245,158,11,0.2)',
    description: 'White-label authentication and identity management. SSO, MFA, and fine-grained permissions — all under your brand.',
    tags: ['Auth', 'Identity', 'SSO'],
    cta: null,
  },
  {
    id: 'docs',
    name: 'Qolve Docs',
    category: 'Knowledge Base',
    status: 'In design',
    statusColor: '#10b981',
    icon: Layers,
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',
    border: 'rgba(16,185,129,0.2)',
    description: 'AI-assisted knowledge base and documentation platform. Sync with Quelp to power AI reply drafts automatically.',
    tags: ['Knowledge', 'AI', 'Content'],
    cta: null,
  },
  {
    id: 'cdn',
    name: 'Qolve Reach',
    category: 'CDN / Delivery',
    status: 'Exploring',
    statusColor: '#637D8C',
    icon: Globe,
    color: '#637D8C',
    bg: 'rgba(99,117,130,0.1)',
    border: 'rgba(99,117,130,0.2)',
    description: 'Edge delivery and global CDN for white-label SaaS deployments. Serve your product from any geography with sub-100ms latency.',
    tags: ['CDN', 'Infrastructure'],
    cta: null,
  },
  {
    id: 'ai-engine',
    name: 'Qolve AI',
    category: 'AI Platform',
    status: 'R&D',
    statusColor: '#ec4899',
    icon: Cpu,
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.1)',
    border: 'rgba(236,72,153,0.2)',
    description: 'The underlying AI engine powering Quelp\'s drafting and classification capabilities. Will be offered as a standalone API in the future.',
    tags: ['AI', 'API', 'Platform'],
    cta: null,
  },
];

const categoryFilters = ['All', 'Beta', 'Coming soon', 'In design', 'R&D', 'Exploring'];

export default function AppsPage({ onNavigate }) {
  const [filter, setFilter] = useState('All');

  const visible = filter === 'All' ? apps : apps.filter(a => a.status === filter);

  return (
    <div style={{ paddingTop: 68 }}>

      {/* Hero */}
      <section style={{
        padding: '80px 0',
        background: `radial-gradient(ellipse 60% 50% at 50% -10%, rgba(99,102,241,0.1) 0%, transparent 70%), var(--bg-void)`,
        borderBottom: '1px solid var(--border-sub)',
        textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ maxWidth: 720, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <div className="pill"><Layers size={11} /> Qolve Applications</div>
          </div>
          <h1 className="display-xl" style={{ marginBottom: 20 }}>
            The Qolve{' '}
            <span className="grad-text">app ecosystem</span>
          </h1>
          <p className="body-lg" style={{ color: 'var(--text-2)', maxWidth: 500, margin: '0 auto' }}>
            A growing suite of white-label SaaS products. Each one designed to be invisible to your customers — but indispensable to your team.
          </p>
        </div>
      </section>

      {/* Status Ribbon */}
      <div style={{
        background: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-sub)',
        padding: '12px 0',
      }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)', marginRight: 4 }}>FILTER:</span>
            {categoryFilters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '5px 14px', borderRadius: 999,
                  border: `1px solid ${f === filter ? 'rgba(0,161,157,0.3)' : 'var(--border-sub)'}`,
                  background: f === filter ? 'rgba(0,161,157,0.1)' : 'transparent',
                  color: f === filter ? 'var(--text-teal)' : 'var(--text-3)',
                  fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >{f}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Apps Grid */}
      <section style={{ padding: '64px 0', background: 'var(--bg-base)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
            {visible.map((app, i) => {
              const Icon = app.icon;
              return (
                <div
                  key={app.id}
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-mid)',
                    borderRadius: 18,
                    padding: 28,
                    display: 'flex', flexDirection: 'column',
                    position: 'relative', overflow: 'hidden',
                    transition: 'all 0.25s var(--ease-out)',
                    animation: `fadeUp 0.5s ${i * 0.08}s var(--ease-out) both`,
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = app.border;
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.35)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border-mid)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Background glow */}
                  <div style={{
                    position: 'absolute', top: -30, right: -30, width: 120, height: 120,
                    borderRadius: '50%', background: app.color, opacity: 0.05, pointerEvents: 'none',
                  }} />

                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: app.bg, border: `1px solid ${app.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={22} style={{ color: app.color }} />
                    </div>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 6,
                      padding: '4px 10px', borderRadius: 999,
                      background: app.statusColor + '18', border: `1px solid ${app.statusColor}30`,
                      fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600, color: app.statusColor,
                    }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: app.statusColor, display: 'inline-block' }} />
                      {app.status}
                    </div>
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-3)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{app.category}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--text-1)', marginBottom: 10 }}>{app.name}</h3>
                    <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.65, marginBottom: 18 }}>{app.description}</p>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                      {app.tags.map(t => (
                        <span key={t} style={{
                          padding: '3px 10px', borderRadius: 4,
                          background: 'var(--bg-raised)', border: '1px solid var(--border-sub)',
                          fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-3)',
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  {app.cta ? (
                    <button
                      onClick={() => onNavigate(app.cta)}
                      style={{
                        width: '100%', padding: '11px', borderRadius: 10,
                        background: app.color, color: 'white',
                        fontSize: 13, fontWeight: 600, cursor: 'pointer', border: 'none',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                        transition: 'opacity 0.15s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                      View Platform <ArrowRight size={14} />
                    </button>
                  ) : (
                    <div style={{
                      width: '100%', padding: '11px', borderRadius: 10,
                      border: '1px solid var(--border-sub)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                      fontSize: 13, color: 'var(--text-3)',
                    }}>
                      <Clock size={13} />
                      {app.status === 'In design' ? 'In design — join waitlist' : app.status === 'R&D' ? 'Early R&D phase' : 'Coming to Qolve'}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{
        padding: '80px 0',
        background: `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,161,157,0.07) 0%, transparent 70%), var(--bg-void)`,
        borderTop: '1px solid var(--border-sub)',
        textAlign: 'center',
      }}>
        <div className="container" style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <div className="pill pill-teal"><Sparkles size={11} /> Qolve Ecosystem</div>
          </div>
          <h2 className="display-md" style={{ marginBottom: 16 }}>Building something with Qolve?</h2>
          <p className="body-lg" style={{ marginBottom: 32, color: 'var(--text-2)' }}>
            We're open to early partnerships and integration discussions. If your product would benefit from our platform, let's talk.
          </p>
          <a href="mailto:hello@qolve.systems" className="btn-primary" style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}>
            Reach out <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
