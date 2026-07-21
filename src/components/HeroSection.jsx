import React, { useState } from 'react';
import { 
  Inbox, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  MessageSquare, 
  Search, 
  User, 
  Tag, 
  Clock, 
  Send, 
  Zap,
  Globe,
  Lock
} from 'lucide-react';

export default function HeroSection({ onNavigate, onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('all');

  const sampleTickets = [
    { id: '#TK-4029', customer: 'Emma Watson', email: 'emma@acme.co', subject: 'Custom domain SSL verification issue', status: 'Open', priority: 'High', channel: 'Email', time: '10m ago' },
    { id: '#TK-4028', customer: 'Marcus Lee', email: 'marcus@techstack.io', subject: 'Request for webhook setup documentation', status: 'Pending', priority: 'Medium', channel: 'Live Chat', time: '24m ago' },
    { id: '#TK-4027', customer: 'Sophie Taylor', email: 'sophie@designlab.uk', subject: 'White-label logo upload help', status: 'Resolved', priority: 'Low', channel: 'Email', time: '1h ago' },
  ];

  return (
    <section 
      id="hero"
      style={{
        padding: '4rem 1.5rem 5rem',
        background: 'linear-gradient(180deg, #f0fdfa 0%, #ffffff 60%, #f8fafc 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Announcement Pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.75rem' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              background: '#ffffff',
              border: '1px solid #ccfbf1',
              boxShadow: '0 4px 15px rgba(13, 148, 136, 0.08)',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: '#0f766e'
            }}
          >
            <span style={{ padding: '0.15rem 0.5rem', borderRadius: '9999px', background: '#0d9488', color: 'white', fontSize: '0.75rem', fontWeight: 800 }}>
              QUELP V1
            </span>
            <span>White-Label Helpdesk & Flat-Rate Workspace Pricing</span>
            <ArrowRight size={14} color="#0d9488" />
          </div>
        </div>

        {/* Headline & Subtitle */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 3rem' }}>
          <h1 
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 4.8vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#0f172a',
              marginBottom: '1.25rem'
            }}
          >
            The Customer Support Desk That Scales Without{' '}
            <span className="text-teal-gradient">Per-Seat Penalties</span>
          </h1>
          <p style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', color: '#475569', lineHeight: 1.6, maxWidth: '720px', margin: '0 auto 2.25rem' }}>
            Quelp brings multi-channel email ticketing, live chat, custom domain white-labeling, and knowledge bases into one shared workspace for a single flat rate.
          </p>

          {/* Primary Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
            <button onClick={onOpenDemo} className="btn-teal" style={{ padding: '0.85rem 2.25rem', fontSize: '1rem' }}>
              <span>Start Free 14-Day Trial</span>
              <ArrowRight size={18} />
            </button>

            <button onClick={() => onNavigate('inbox-demo')} className="btn-outline" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
              <Inbox size={18} color="#0d9488" />
              <span>Try Interactive Desk</span>
            </button>

            <button onClick={() => onNavigate('pricing')} style={{ padding: '0.85rem 1.75rem', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#ffffff', color: '#334155', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer' }}>
              <span>Compare vs Zendesk</span>
            </button>
          </div>

          {/* Feature Highlights */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem 2.5rem', color: '#64748b', fontSize: '0.9rem', fontWeight: 500 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="#0d9488" /> Unlimited Support Agents Included
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="#0d9488" /> Custom Domain & White-Label Mail
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="#0d9488" /> Built-in Knowledge Base
            </div>
          </div>
        </div>

        {/* Hero Interactive Support Desk Inbox Preview */}
        <div 
          className="card-shadow"
          style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: '1.5rem',
            border: '1px solid #ccfbf1',
            maxWidth: '1080px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          {/* Header Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid #f1f5f9', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5252' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: '#f0fdfa', padding: '0.25rem 0.75rem', borderRadius: '8px', border: '1px solid #ccfbf1', fontSize: '0.8rem', color: '#0f766e', fontWeight: 600 }}>
                <Globe size={14} />
                <span>support.yourbrand.com</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: '#64748b' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600, color: '#10b981' }}>
                ● 100% Delivery SLA
              </span>
              <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', background: '#f1f5f9', borderRadius: '6px', color: '#475569', fontWeight: 600 }}>
                Stalwart & AWS SES Powered
              </span>
            </div>
          </div>

          {/* Inbox Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
            
            {/* Left Queue */}
            <div style={{ background: '#f8fafc', borderRadius: '16px', padding: '1rem', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#0f172a' }}>Unresolved Queue (3)</span>
                <span style={{ fontSize: '0.75rem', color: '#0d9488', fontWeight: 700 }}>Auto-Assigned</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {sampleTickets.map((tk, idx) => (
                  <div
                    key={tk.id}
                    style={{
                      padding: '0.85rem',
                      borderRadius: '12px',
                      background: idx === 0 ? '#ffffff' : 'transparent',
                      border: idx === 0 ? '2px solid #0d9488' : '1px solid transparent',
                      boxShadow: idx === 0 ? '0 4px 12px rgba(13, 148, 136, 0.12)' : 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b', marginBottom: '0.2rem' }}>
                      <span style={{ fontWeight: 700, color: '#0d9488' }}>{tk.id}</span>
                      <span>{tk.time}</span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#0f172a', marginBottom: '0.25rem' }}>{tk.subject}</div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{tk.customer} • {tk.channel}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Ticket Viewer Detail */}
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '1.25rem', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f1f5f9' }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1rem', color: '#0f172a' }}>Custom domain SSL verification issue</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Ticket #TK-4029 • From Emma Watson (emma@acme.co)</div>
                </div>
                <span style={{ padding: '0.25rem 0.6rem', borderRadius: '6px', background: '#fee2e2', color: '#ef4444', fontWeight: 800, fontSize: '0.75rem' }}>
                  HIGH PRIORITY
                </span>
              </div>

              <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '1rem', fontSize: '0.88rem', color: '#334155', lineHeight: 1.5, marginBottom: '1rem' }}>
                "Hi Team! We are configuring white-label CNAME records for <code>support.acme.co</code> but the SSL cert status shows pending. Can you verify if SPF and DMARC alignment records look correct?"
              </div>

              {/* Quick Reply Bar */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="text"
                  readOnly
                  value="Hi Emma, I verified your CNAME records on Stalwart & SES. SSL is now active!"
                  style={{
                    flex: 1,
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.82rem',
                    color: '#475569',
                    background: '#ffffff'
                  }}
                />
                <button 
                  onClick={onOpenDemo}
                  className="btn-teal"
                  style={{ padding: '0.65rem 1rem', fontSize: '0.82rem' }}
                >
                  <Send size={14} /> Send Reply
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
