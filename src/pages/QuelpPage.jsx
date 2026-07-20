import React, { useState } from 'react';
import {
  Globe, Bot, Zap, LayoutDashboard, Shield, Settings,
  ArrowRight, Check, Sparkles, ChevronDown, ExternalLink, MessageSquare
} from 'lucide-react';

const FEATURES = [
  { icon: Globe,          color: '#00A19D', title: 'Custom Domain & Branding',    body: 'Full white-label setup. Your subdomain, your logo, your colour scheme. Every email footer, login page, and widget belongs to your brand — customers never see "Powered by Quelp".' },
  { icon: Bot,            color: '#6366f1', title: 'AI-Drafted Replies',           body: 'Each ticket reply is drafted by AI trained on your knowledge base and conversation history. Not generic responses — specific, on-brand, accurate drafts agents can send in one click.' },
  { icon: Zap,            color: '#f59e0b', title: 'Automatic Ticket Routing',     body: 'NLP classification assigns every incoming ticket to the right queue, team, and SLA tier without a human touching it. Billing goes to Billing. Technical goes to Engineering.' },
  { icon: LayoutDashboard,color: '#3b82f6', title: 'Real-Time Analytics',          body: 'CSAT scores, reply times, resolution rates, agent performance — all in one dashboard. Export to CSV or stream raw events to your BI tool via webhook.' },
  { icon: Shield,         color: '#10b981', title: 'GDPR-Compliant by Default',    body: 'Data never leaves UK/EU infra. No customer data used to train shared models. Every record is encrypted at rest and in transit. Built for compliance from day one.' },
  { icon: MessageSquare,  color: '#ec4899', title: 'Multi-Channel Inbox',          body: 'Email, live chat, and web form tickets — all in a single unified inbox. Agents don\'t switch tools. Everything is threaded, searchable, and auditable.' },
];

const TIERS = [
  {
    name: 'Starter',
    sub: 'For small teams getting started',
    price: 'Early access',
    color: '#637D8C',
    features: ['Up to 3 agents', '500 tickets/month', 'AI reply drafts', 'Email support', 'Analytics dashboard'],
    cta: 'Join waitlist',
  },
  {
    name: 'Growth',
    sub: 'For scaling support teams',
    price: 'Early access',
    color: '#00A19D',
    featured: true,
    features: ['Up to 15 agents', '5,000 tickets/month', 'Full white-label', 'Smart routing', 'Priority support', 'Multi-channel inbox'],
    cta: 'Join waitlist',
  },
  {
    name: 'Enterprise',
    sub: 'Custom deployment & SLAs',
    price: 'Contact us',
    color: '#6366f1',
    features: ['Unlimited agents', 'Unlimited tickets', 'Custom AI training', 'Dedicated infra', 'SLA guarantees', 'Onboarding support'],
    cta: 'Get in touch',
  },
];

export default function QuelpPage({ onNavigate }) {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    { q: 'Will my customers see the Quelp name anywhere?', a: 'No. White-labelling means zero trace of Quelp in your customer\'s experience. Your domain, your logo, your emails. We\'re invisible infrastructure.' },
    { q: 'How does the AI drafting work?', a: 'When a ticket arrives, Quelp pulls context from your knowledge base, the customer\'s previous tickets, and the current conversation — then drafts a specific, accurate reply. Your agents approve or edit before sending.' },
    { q: 'Is my data used to train shared models?', a: 'Never. Your data stays in your isolated environment. We do not use customer ticket data for any shared model training.' },
    { q: 'When is Quelp launching publicly?', a: 'We\'re in closed beta and taking early access applications now. Reach out at hello@qolve.systems for priority access.' },
  ];

  return (
    <div style={{ paddingTop: 68 }}>

      {/* Hero */}
      <section style={{
        padding: '80px 0 80px',
        background: `radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,161,157,0.14) 0%, transparent 70%), var(--bg-void)`,
        position: 'relative', overflow: 'hidden',
        borderBottom: '1px solid var(--border-sub)',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <div className="pill pill-teal"><Sparkles size={11} /> Quelp Helpdesk — Beta</div>
          </div>

          <h1 className="display-xl" style={{ marginBottom: 24 }}>
            The helpdesk that's{' '}
            <span className="grad-text">genuinely yours</span>
          </h1>

          <p className="body-lg" style={{ maxWidth: 560, margin: '0 auto 40px', color: 'var(--text-2)' }}>
            White-label helpdesk software with built-in AI, automatic ticket routing, and real-time analytics. Your brand. Your domain. Your product.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:hello@qolve.systems" className="btn-primary">
              Get early access <ArrowRight size={15} />
            </a>
            <button onClick={() => onNavigate('home')} className="btn-ghost">
              Back to Qolve
            </button>
          </div>

          {/* Trust strip */}
          <div style={{
            marginTop: 48, display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 32, flexWrap: 'wrap',
          }}>
            {[
              { icon: Shield, label: 'GDPR Compliant' },
              { icon: Globe,  label: 'Full White-Label' },
              { icon: Zap,    label: 'AI-Powered Routing' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'var(--text-3)', fontSize: 13 }}>
                <Icon size={14} style={{ color: 'var(--text-teal)' }} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '100px 0', background: 'var(--bg-base)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="pill" style={{ display: 'inline-flex', marginBottom: 20 }}>Platform Features</div>
            <h2 className="display-lg" style={{ marginBottom: 16 }}>Everything your team needs</h2>
            <p className="body-lg" style={{ maxWidth: 480, margin: '0 auto', color: 'var(--text-2)' }}>
              No feature bloat. These are the six things that actually move the needle for support teams.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="card"
                  style={{
                    animation: `fadeUp 0.5s ${i * 0.08}s var(--ease-out) both`,
                    position: 'relative', overflow: 'hidden',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = f.color + '40'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-mid)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{
                    position: 'absolute', top: -20, right: -20, width: 80, height: 80,
                    borderRadius: '50%', background: f.color, opacity: 0.05, pointerEvents: 'none',
                  }} />
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, marginBottom: 16,
                    background: f.color + '18', border: `1px solid ${f.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={18} style={{ color: f.color }} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--text-1)', marginBottom: 10 }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.65 }}>{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '100px 0', background: 'var(--bg-void)', borderTop: '1px solid var(--border-sub)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="pill" style={{ display: 'inline-flex', marginBottom: 20 }}>Pricing</div>
            <h2 className="display-lg" style={{ marginBottom: 16 }}>Transparent from day one</h2>
            <p className="body-lg" style={{ maxWidth: 440, margin: '0 auto', color: 'var(--text-2)' }}>
              No hidden tiers. No gotcha overages. Early access pricing locked in for founding customers.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, maxWidth: 960, margin: '0 auto' }}>
            {TIERS.map((tier, i) => (
              <div
                key={tier.name}
                style={{
                  background: tier.featured ? 'linear-gradient(180deg, rgba(0,161,157,0.08) 0%, var(--bg-surface) 100%)' : 'var(--bg-surface)',
                  border: `1px solid ${tier.featured ? 'rgba(0,161,157,0.3)' : 'var(--border-mid)'}`,
                  borderRadius: 18,
                  padding: '28px 24px',
                  position: 'relative',
                  animation: `fadeUp 0.5s ${i * 0.1}s var(--ease-out) both`,
                  transition: 'transform 0.2s var(--ease-out)',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {tier.featured && (
                  <div style={{
                    position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--teal)', color: 'white',
                    padding: '3px 14px', borderRadius: 999,
                    fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
                  }}>Most Popular</div>
                )}

                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'var(--text-1)', marginBottom: 4 }}>{tier.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-3)' }}>{tier.sub}</div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, color: tier.color }}>{tier.price}</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                  {tier.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text-2)' }}>
                      <Check size={14} style={{ color: tier.color, flexShrink: 0 }} />
                      {f}
                    </div>
                  ))}
                </div>

                <a
                  href="mailto:hello@qolve.systems"
                  style={{
                    display: 'block', textAlign: 'center',
                    padding: '12px', borderRadius: 10,
                    background: tier.featured ? 'var(--teal)' : 'transparent',
                    border: `1px solid ${tier.featured ? 'transparent' : 'var(--border-mid)'}`,
                    color: tier.featured ? 'white' : 'var(--text-2)',
                    fontWeight: 600, fontSize: 14,
                    transition: 'all 0.2s var(--ease-out)',
                  }}
                  onMouseEnter={e => { if (!tier.featured) { e.currentTarget.style.borderColor = 'var(--border-hi)'; e.currentTarget.style.color = 'var(--text-1)'; } }}
                  onMouseLeave={e => { if (!tier.featured) { e.currentTarget.style.borderColor = 'var(--border-mid)'; e.currentTarget.style.color = 'var(--text-2)'; } }}
                >{tier.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '100px 0', background: 'var(--bg-base)', borderTop: '1px solid var(--border-sub)' }}>
        <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="pill" style={{ display: 'inline-flex', marginBottom: 20 }}>FAQ</div>
            <h2 className="display-md">Common questions</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((f, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--bg-surface)',
                  border: `1px solid ${openFAQ === i ? 'rgba(0,161,157,0.25)' : 'var(--border-mid)'}`,
                  borderRadius: 12,
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  style={{
                    width: '100%', padding: '18px 20px',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: 'var(--text-1)' }}>{f.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      color: 'var(--text-3)', flexShrink: 0,
                      transform: openFAQ === i ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.2s var(--ease-out)',
                    }}
                  />
                </button>
                {openFAQ === i && (
                  <div style={{ padding: '0 20px 18px', animation: 'fadeIn 0.2s ease' }}>
                    <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7 }}>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            marginTop: 48, padding: '32px', textAlign: 'center',
            background: 'var(--bg-surface)', border: '1px solid var(--border-mid)',
            borderRadius: 16,
          }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, marginBottom: 10, color: 'var(--text-1)' }}>Still have questions?</h3>
            <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 20 }}>Drop us a message and we'll reply within 24 hours.</p>
            <a href="mailto:hello@qolve.systems" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              hello@qolve.systems <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
