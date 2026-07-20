import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Mail, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

const tabs = [
  {
    id: 'helpdesk',
    icon: Mail,
    label: 'Unified Helpdesk',
    title: 'One Centralised Place for Customer Support',
    body: 'Quelp replaces fragmented email inboxes and complex legacy platforms. Receive customer enquiries from email, web widgets, and customer portals directly in one unified queue with assignment, tagging, and priority tracking.',
    bullets: [
      'Threaded email ticketing & customer profiles',
      'Agent assignment, teams & priority queues',
      'Knowledge base & public help centre',
      'Performance reports (SLA, resolution time)',
    ],
    color: 'var(--teal)',
    bg: 'rgba(0,161,157,0.12)',
  },
  {
    id: 'whitelabel',
    icon: ShieldCheck,
    label: 'White-Label Control',
    title: 'Your Brand, Front & Centre',
    body: "White-labelling is built into Quelp's core architecture. Customise your support portal, agent workspace, emails, widgets, and custom domain so your customer experience feels 100% native.",
    bullets: [
      'Custom support subdomains & custom DNS',
      'Logo, favicon & primary brand colour styling',
      'Branded transactional email templates',
      'No "Powered by" watermarks on white-label plans',
    ],
    color: '#008082',
    bg: 'rgba(0,128,130,0.12)',
  },
  {
    id: 'ai',
    icon: Zap,
    label: 'Grounded AI Engine',
    title: 'Grounded AI Assistance & Cost Control',
    body: 'Quelp uses AI to summarise long threads, auto-tag incoming tickets, and draft grounded responses based on your knowledge base. When an issue requires human attention, it escalates instantly with full transcript context.',
    bullets: [
      'Fast human handoff over fake AI confidence',
      'Strict scope boundaries to stop token waste & jailbreaks',
      'One-click AI draft generation for agents',
      'Transparent token usage & predictable costs',
    ],
    color: 'var(--text-3)',
    bg: 'rgba(99,125,140,0.12)',
  },
];

export default function QuelpSpotlight({ onNavigate }) {
  const [active, setActive] = useState('helpdesk');
  const tab = tabs.find(t => t.id === active);
  const TabIcon = tab.icon;

  return (
    <section id="quelp" style={{
      padding: '100px 0',
      background: 'var(--bg-void)',
      borderTop: '1px solid var(--border-sub)',
    }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <div className="pill pill-teal"><Sparkles size={11} /> Flagship Product Application</div>
          </div>
          <h2 className="display-lg" style={{ marginBottom: 16 }}>
            Meet <span className="grad-text">Quelp</span>
          </h2>
          <p className="body-lg" style={{ color: 'var(--text-2)' }}>
            The white-label customer support & helpdesk platform engineered by Qolve for growing businesses that need enterprise-grade tools without enterprise price tags.
          </p>
        </div>

        {/* Main card */}
        <div style={{
          background: 'var(--bg-surface)',
          borderRadius: 24,
          border: '1px solid var(--border-mid)',
          padding: '40px',
          boxShadow: '0 24px 80px rgba(0,0,0,0.35)',
        }}>

          {/* Tab bar */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center',
            padding: 6, background: 'var(--bg-void)', borderRadius: 16,
            border: '1px solid var(--border-sub)', marginBottom: 40,
            maxWidth: 520, margin: '0 auto 40px',
          }}>
            {tabs.map(t => {
              const Icon = t.icon;
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  style={{
                    flex: 1, minWidth: 140,
                    padding: '11px 16px',
                    borderRadius: 12,
                    fontSize: 13, fontWeight: 600,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                    cursor: 'pointer', border: 'none',
                    transition: 'all 0.2s var(--ease-out)',
                    background: isActive ? 'linear-gradient(135deg, var(--teal), var(--teal-deep))' : 'transparent',
                    color: isActive ? 'white' : 'var(--text-3)',
                    boxShadow: isActive ? '0 4px 16px rgba(0,161,157,0.25)' : 'none',
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-1)'; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-3)'; }}
                >
                  <Icon size={15} />
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* Two-col content */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>

            {/* Left — description */}
            <div key={active} style={{ animation: 'fadeUp 0.35s var(--ease-out) both' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: tab.bg, border: `1px solid ${tab.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
              }}>
                <TabIcon size={22} style={{ color: tab.color }} />
              </div>

              <h3 className="display-md" style={{ marginBottom: 14, color: 'var(--text-1)' }}>{tab.title}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 24 }}>{tab.body}</p>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                {tab.bullets.map(b => (
                  <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text-2)' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--teal)', flexShrink: 0 }} />
                    {b}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onNavigate('quelp')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontSize: 14, fontWeight: 600, color: 'var(--text-teal)',
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: 0,
                }}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
              >
                Learn how the Qolve team builds Quelp
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Right — ticket mockup */}
            <div key={`mock-${active}`} style={{
              background: 'var(--bg-void)', borderRadius: 16,
              border: '1px solid var(--border-mid)', padding: 24,
              animation: 'fadeUp 0.35s 0.1s var(--ease-out) both',
            }}>
              {/* Ticket header */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                paddingBottom: 16, borderBottom: '1px solid var(--border-sub)', marginBottom: 16,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{
                    padding: '3px 10px', borderRadius: 5,
                    background: 'rgba(0,161,157,0.15)', border: '1px solid rgba(0,161,157,0.25)',
                    fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, color: 'var(--text-teal)',
                  }}>TICK-8402</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-1)' }}>
                    Shipping Enquiry & Return Request
                  </span>
                </div>
                <span style={{
                  padding: '3px 10px', borderRadius: 5,
                  background: 'var(--bg-raised)', border: '1px solid var(--border-sub)',
                  fontSize: 11, color: 'var(--text-3)',
                }}>Status: Open</span>
              </div>

              {/* Customer message */}
              <div style={{
                padding: '14px 16px', borderRadius: 12,
                background: 'var(--bg-surface)', border: '1px solid var(--border-sub)', marginBottom: 14,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-1)' }}>Customer (Sarah M.)</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)' }}>10:42 AM</span>
                </div>
                <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>
                  "Hi there! I ordered the starter kit yesterday. Can I change my delivery address before it ships?"
                </p>
              </div>

              {/* AI draft */}
              <div style={{
                padding: '14px 16px', borderRadius: 12,
                background: 'rgba(0,161,157,0.07)', border: '1px solid rgba(0,161,157,0.2)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: 'var(--text-teal)' }}>
                    <Sparkles size={12} /> Quelp AI Grounded Draft
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-3)' }}>Confidence: High</span>
                </div>
                <p style={{
                  fontSize: 12.5, color: 'var(--text-2)', lineHeight: 1.65,
                  fontFamily: 'var(--font-mono)',
                  background: 'var(--bg-void)', padding: '10px 12px', borderRadius: 8,
                  border: '1px solid var(--border-sub)', marginBottom: 12,
                }}>
                  "Hello Sarah! We can update your shipping address if your order hasn't entered fulfillment yet. Please provide your new address..."
                </p>
                <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                  <button style={{ padding: '5px 14px', borderRadius: 7, border: '1px solid var(--border-mid)', background: 'transparent', color: 'var(--text-2)', fontSize: 12, cursor: 'pointer' }}>Edit</button>
                  <button style={{ padding: '5px 14px', borderRadius: 7, background: 'var(--teal)', color: 'white', border: 'none', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Approve & Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
