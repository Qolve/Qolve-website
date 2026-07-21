import React from 'react';
import { 
  Inbox, 
  Globe, 
  DollarSign, 
  HelpCircle, 
  Users, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  Mail,
  Layers
} from 'lucide-react';

export default function FeaturesSection({ onNavigate, onOpenDemo }) {
  const features = [
    {
      icon: DollarSign,
      title: 'Flat Workspace Pricing',
      desc: 'Say goodbye to per-agent penalty fees. Pay one predictable workspace flat fee regardless of whether you have 3 or 30 support agents.',
      color: '#0d9488',
      bg: '#f0fdfa'
    },
    {
      icon: Globe,
      title: 'Complete White-Labeling',
      desc: 'Host your support center at your own custom domain (e.g., support.yourcompany.com). Zero "Powered by" branding or forced footers.',
      color: '#ff5252',
      bg: '#fff1f2'
    },
    {
      icon: Inbox,
      title: 'Unified Team Inbox',
      desc: 'Route customer emails, website live chat, and inbound requests into one clean, organized team queue with assigned agent owners.',
      color: '#06b6d4',
      bg: '#ecfeff'
    },
    {
      icon: HelpCircle,
      title: 'Built-in Knowledge Base',
      desc: 'Publish instant self-service help articles that resolve customer questions before a ticket is ever submitted.',
      color: '#f59e0b',
      bg: '#fffbeb'
    },
    {
      icon: Users,
      title: 'Real-time Agent Collision',
      desc: 'Prevent double replies with live indicators showing when a teammate is currently viewing or typing on a customer ticket.',
      color: '#6366f1',
      bg: '#eeeafe'
    },
    {
      icon: Mail,
      title: 'Reliable Email Delivery',
      desc: 'Backed by dedicated Stalwart mail server infrastructure & AWS SES integration for 99.99% inbox delivery and verified DMARC/SPF.',
      color: '#10b981',
      bg: '#ecfdf5'
    }
  ];

  return (
    <section 
      id="features"
      style={{
        padding: '5rem 1.5rem',
        background: '#ffffff',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.9rem', borderRadius: '9999px', background: '#f0fdfa', color: '#0d9488', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem' }}>
            <Zap size={14} /> EVERYTHING YOUR SUPPORT TEAM NEEDS
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', lineHeight: 1.2 }}>
            Built for Growing SMBs Tired of Enterprise Overpricing
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Quelp gives you the speed, clarity, and control of a premium helpdesk without the enterprise bloat.
          </p>
        </div>

        {/* Feature Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="card-shadow"
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    <Icon size={24} color={f.color} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.6rem' }}>
                    {f.title}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {f.desc}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontWeight: 700, color: f.color, marginTop: '1.5rem' }}>
                  <CheckCircle2 size={16} /> Included in Flat Workspace Plan
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
