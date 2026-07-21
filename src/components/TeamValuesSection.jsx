import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Lock, 
  Users, 
  Award, 
  Quote, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function TeamValuesSection({ onOpenContact }) {
  const [activeQuote, setActiveQuote] = useState(0);

  const values = [
    {
      title: 'Sub-Second Speed Mandate',
      desc: 'We optimize every query pipeline for microsecond response times. Speed is our fundamental design constraint.',
      icon: Zap,
      color: '#0d9488',
      bg: 'rgba(13, 148, 136, 0.1)'
    },
    {
      title: 'Zero-Hallucination Integrity',
      desc: 'Every AI output is anchored directly to verifiable ground-truth enterprise graph nodes with full audit trails.',
      icon: ShieldCheck,
      color: '#ff5252',
      bg: 'rgba(255, 82, 82, 0.1)'
    },
    {
      title: 'Zero-Trust Data Privacy',
      desc: 'Your customer data never trains public models. We enforce SOC2 Type II, HIPAA, and end-to-end encryption by default.',
      icon: Lock,
      color: '#6366f1',
      bg: 'rgba(99, 102, 241, 0.1)'
    },
    {
      title: 'Developer Autonomy',
      desc: 'Build with clean REST, gRPC, and Python SDKs. No vendor lock-in, open APIs, and transparent payload logging.',
      icon: Users,
      color: '#f59e0b',
      bg: 'rgba(245, 158, 11, 0.1)'
    }
  ];

  const team = [
    {
      name: 'Dr. Elena Rostova',
      role: 'Co-Founder & Chief Scientist',
      bio: 'Former Distributed Systems Researcher at MIT CSAIL. Specialist in high-throughput neural graph query optimization.',
      quote: 'We built Qolve to give enterprise teams the speed of raw C++ with the reasoning power of modern LLMs.'
    },
    {
      name: 'Marcus Vance',
      role: 'Co-Founder & CEO',
      bio: 'Ex-Lead Architect at Stripe. Built mission-critical payment orchestration engines handling 100M+ transactions daily.',
      quote: 'When your operations run sub-second, your team spends 90% less time chasing fires and more time building.'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of AI Safety & Security',
      bio: 'Former Cloud Security Principal at AWS. Specialized in zero-trust LLM guardrails and PII masking architecture.',
      quote: 'Security is not an afterthought at Qolve; every node in our neural pipeline is cryptographically verified.'
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
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.35rem 0.9rem',
              borderRadius: '9999px',
              background: 'rgba(13, 148, 136, 0.1)',
              color: '#0d9488',
              fontWeight: 700,
              fontSize: '0.85rem',
              marginBottom: '1rem'
            }}
          >
            <Award size={14} /> MISSION & LEADERSHIP
          </div>
          <h2 
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 800,
              color: '#042f2e',
              marginBottom: '1rem'
            }}
          >
            Driven by Engineering Excellence & Security
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem' }}>
            Meet the minds building the future of autonomous enterprise operations.
          </p>
        </div>

        {/* Core Values Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                style={{
                  background: '#f8fafc',
                  borderRadius: '20px',
                  padding: '1.75rem',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = v.color;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 12px 24px ${v.color}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div 
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: v.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}
                >
                  <Icon size={22} color={v.color} />
                </div>
                <div style={{ fontWeight: 800, fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.5rem' }}>
                  {v.title}
                </div>
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6 }}>
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Leadership Spotlight & Quote Carousel */}
        <div 
          className="glass-teal"
          style={{
            borderRadius: '24px',
            padding: '2.5rem',
            border: '1px solid rgba(13, 148, 136, 0.25)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0d9488', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              Leadership Perspectives
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: '#042f2e', marginBottom: '1.25rem' }}>
              {team[activeQuote].name}
            </h3>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ff5252', marginBottom: '1rem' }}>
              {team[activeQuote].role}
            </div>
            <p style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {team[activeQuote].bio}
            </p>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {team.map((t, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveQuote(idx)}
                  style={{
                    width: activeQuote === idx ? '28px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    background: activeQuote === idx ? '#0d9488' : '#cbd5e1',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                />
              ))}
            </div>
          </div>

          <div 
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(13, 148, 136, 0.1)',
              border: '1px solid rgba(13, 148, 136, 0.15)',
              position: 'relative'
            }}
          >
            <Quote size={32} color="#0d9488" style={{ opacity: 0.3, marginBottom: '0.75rem' }} />
            <blockquote style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.25rem' }}>
              "{team[activeQuote].quote}"
            </blockquote>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0d9488' }}>
              — {team[activeQuote].name}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
