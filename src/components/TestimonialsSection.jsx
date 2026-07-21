import React, { useState } from 'react';
import { 
  Star, 
  Building2, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function TestimonialsSection({ onOpenContact }) {
  const [filter, setFilter] = useState('all');

  const testimonials = [
    {
      id: 1,
      quote: "Quelp transformed our customer engineering workflows. Support ticket resolution time dropped by 82% in the first week.",
      author: "David Thorne",
      title: "VP of Engineering",
      company: "Apex Global Logistics",
      metric: "-82% Resolution Time",
      metricColor: '#0d9488',
      category: 'enterprise',
      rating: 5
    },
    {
      id: 2,
      quote: "Qolve Orchestrator handles over 40,000 subagent tasks every hour for our trading platform with zero latency spikes.",
      author: "Elena Vasquez",
      title: "Chief Technology Officer",
      company: "Starlight FinTech",
      metric: "40,000 tasks/hr",
      metricColor: '#ff5252',
      category: 'fintech',
      rating: 5
    },
    {
      id: 3,
      quote: "SecureShield gives our legal and medical compliance teams complete confidence. PII is automatically masked in real time.",
      author: "Dr. James Sterling",
      title: "Head of Health Data Security",
      company: "BioSyn HealthTech",
      metric: "100% HIPAA Compliant",
      metricColor: '#6366f1',
      category: 'healthtech',
      rating: 5
    },
    {
      id: 4,
      quote: "The ROI calculator was dead accurate. We saved over $340,000 in operational overhead within our first 6 months.",
      author: "Rachel Lin",
      title: "Head of Operations",
      company: "Nova Commerce Hub",
      metric: "$340k Saved in 6 Mos",
      metricColor: '#f59e0b',
      category: 'ecommerce',
      rating: 5
    }
  ];

  const filtered = filter === 'all' ? testimonials : testimonials.filter(t => t.category === filter);

  return (
    <section 
      style={{
        padding: '5rem 1.5rem',
        background: '#f8fafc',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.35rem 0.9rem',
              borderRadius: '9999px',
              background: 'rgba(255, 82, 82, 0.1)',
              color: '#ff5252',
              fontWeight: 700,
              fontSize: '0.85rem',
              marginBottom: '1rem'
            }}
          >
            <TrendingUp size={14} /> PROVEN RESULTS & CASE STUDIES
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
            Trusted by Industry Leaders Worldwide
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem' }}>
            See how forward-thinking companies rely on Qolve to automate operations at scale.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'All Customer Stories' },
            { id: 'enterprise', label: 'Enterprise Logistics' },
            { id: 'fintech', label: 'FinTech & Banking' },
            { id: 'healthtech', label: 'HealthTech' },
            { id: 'ecommerce', label: 'E-Commerce' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              style={{
                padding: '0.55rem 1.15rem',
                borderRadius: '10px',
                border: filter === cat.id ? '2px solid #0d9488' : '1px solid #e2e8f0',
                background: filter === cat.id ? '#ffffff' : 'transparent',
                color: filter === cat.id ? '#0d9488' : '#64748b',
                fontWeight: filter === cat.id ? 700 : 500,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {filtered.map((t) => (
            <div
              key={t.id}
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: '1.75rem',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = t.metricColor;
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 12px 28px ${t.metricColor}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.03)';
              }}
            >
              <div>
                {/* Metric Header Pill */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: '6px', background: `${t.metricColor}15`, color: t.metricColor, fontWeight: 800 }}>
                    {t.metric}
                  </span>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} color="#f59e0b" fill="#f59e0b" />
                    ))}
                  </div>
                </div>

                <p style={{ fontSize: '0.95rem', color: '#1e293b', lineHeight: 1.6, fontWeight: 500, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  "{t.quote}"
                </p>
              </div>

              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0f172a' }}>{t.author}</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{t.title} • <strong style={{ color: t.metricColor }}>{t.company}</strong></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
          <button onClick={onOpenContact} className="btn-primary" style={{ padding: '0.85rem 2.25rem', fontSize: '1rem', borderRadius: '12px' }}>
            <span>Join 2,500+ Enterprise Teams</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
