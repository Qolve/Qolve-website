import React from 'react';
import { 
  ShieldCheck, 
  Globe, 
  Users, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Inbox
} from 'lucide-react';

export default function AboutSection({ onOpenDemo }) {
  const highlights = [
    {
      title: 'UK Registered Product Lab',
      desc: 'Founded with a focus on building clean, high-performance software for small and medium-sized businesses.'
    },
    {
      title: 'No Seat-Tax Philosophy',
      desc: 'Software shouldn’t penalize growing companies when they hire new team members. Flat workspace pricing forever.'
    },
    {
      title: 'Enterprise Email Security',
      desc: 'Built with dedicated Stalwart mail servers and Amazon SES integration for 99.99% inbox delivery and verified DMARC.'
    }
  ];

  return (
    <section 
      id="about"
      style={{
        padding: '5rem 1.5rem',
        background: '#ffffff',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.9rem', borderRadius: '9999px', background: '#f0fdfa', color: '#0d9488', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem' }}>
            <Award size={14} /> ABOUT QOLVE
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
            Straightforward Helpdesk Software Built for Real Teams
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
            We created Quelp to solve the frustration of overpriced, overcomplicated enterprise ticketing systems.
          </p>
        </div>

        {/* Highlight Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {highlights.map((h, i) => (
            <div
              key={i}
              className="card-shadow"
              style={{
                background: '#f8fafc',
                borderRadius: '20px',
                padding: '2rem',
                border: '1px solid #e2e8f0'
              }}
            >
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#f0fdfa', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <CheckCircle2 size={22} color="#0d9488" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: '#0f172a', marginBottom: '0.5rem' }}>
                {h.title}
              </h3>
              <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6 }}>
                {h.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 100%)',
            borderRadius: '24px',
            padding: '3rem 2rem',
            color: '#ffffff',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(13, 148, 136, 0.25)',
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>
            Ready to Upgrade Your Customer Support Desk?
          </h3>
          <p style={{ color: '#ccfbf1', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
            Join growing companies delivering fast, white-label customer support with Quelp. Start your 14-day free trial today.
          </p>

          <button onClick={onOpenDemo} className="btn-teal" style={{ background: '#ffffff', color: '#0f766e', padding: '0.85rem 2.25rem', fontSize: '1rem', fontWeight: 800 }}>
            <span>Start Your Free Trial</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
