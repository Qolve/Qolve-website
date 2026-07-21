import React, { useState } from 'react';
import { 
  HelpCircle, 
  Search, 
  BookOpen, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Layers,
  Sparkles
} from 'lucide-react';

export default function KnowledgeBaseSection({ onOpenDemo }) {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: 'Getting Started & Setup', count: '12 Articles', icon: BookOpen },
    { name: 'Custom Domain & SSL', count: '8 Articles', icon: Globe },
    { name: 'Email & Mailboxes', count: '15 Articles', icon: HelpCircle },
    { name: 'Team Roles & Macros', count: '6 Articles', icon: Layers },
  ];

  const sampleArticles = [
    { title: 'How to configure custom CNAME records on your DNS', category: 'Custom Domain & SSL' },
    { title: 'Setting up support email routing via Stalwart & AWS SES', category: 'Email & Mailboxes' },
    { title: 'Creating shared canned responses for agent tickets', category: 'Team Roles & Macros' },
    { title: 'Publishing white-label help articles on your domain', category: 'Getting Started & Setup' }
  ];

  const filtered = searchTerm.trim() === ''
    ? sampleArticles
    : sampleArticles.filter(a => a.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <section 
      id="kb"
      style={{
        padding: '5rem 1.5rem',
        background: '#f8fafc',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.9rem', borderRadius: '9999px', background: '#ecfeff', color: '#0891b2', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem' }}>
            <BookOpen size={14} /> SELF-SERVICE HELP CENTER
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
            Deflect Support Tickets With a Built-in Knowledge Base
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Empower your customers to solve issues 24/7 with a fast, searchable help portal hosted on your custom domain.
          </p>
        </div>

        {/* Knowledge Base Preview Card */}
        <div 
          className="card-shadow"
          style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: '2.5rem',
            border: '1px solid #e2e8f0',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          {/* Search Header */}
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            <div style={{ fontSize: '0.85rem', color: '#0d9488', fontWeight: 700, marginBottom: '0.5rem' }}>
              https://support.yourcompany.com
            </div>
            <div style={{ position: 'relative' }}>
              <Search size={18} color="#0d9488" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search help articles, SSL setup, email forwarding..."
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.8rem',
                  borderRadius: '12px',
                  border: '2px solid #ccfbf1',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxShadow: '0 4px 14px rgba(13, 148, 136, 0.08)'
                }}
              />
            </div>
          </div>

          {/* Categories Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
            {categories.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  style={{
                    background: '#f8fafc',
                    borderRadius: '16px',
                    padding: '1.25rem',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#0d9488';
                    e.currentTarget.style.background = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.background = '#f8fafc';
                  }}
                >
                  <Icon size={20} color="#0d9488" style={{ marginBottom: '0.5rem' }} />
                  <div style={{ fontWeight: 800, fontSize: '0.92rem', color: '#0f172a' }}>{c.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>{c.count}</div>
                </div>
              );
            })}
          </div>

          {/* Articles List */}
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0f172a', marginBottom: '1rem' }}>
              Popular Help Articles
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {filtered.map((art, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <BookOpen size={16} color="#0d9488" />
                    <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#1e293b' }}>{art.title}</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', padding: '0.15rem 0.5rem', borderRadius: '6px', background: '#f1f5f9', color: '#64748b' }}>
                    {art.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
