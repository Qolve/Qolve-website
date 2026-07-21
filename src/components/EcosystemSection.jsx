import React, { useState } from 'react';
import { 
  Layers, 
  Database, 
  GitBranch, 
  Cloud, 
  MessageSquare, 
  Cpu, 
  Shield, 
  Check, 
  ExternalLink,
  Sparkles
} from 'lucide-react';

export default function EcosystemSection({ onOpenContact }) {
  const [filter, setFilter] = useState('all');

  const integrations = [
    { name: 'PostgreSQL & MySQL', category: 'db', status: 'Native CDC Connector', latency: '0.8ms', color: '#0d9488' },
    { name: 'Snowflake & BigQuery', category: 'db', status: 'Data Warehouse Sync', latency: '4.2ms', color: '#06b6d4' },
    { name: 'GitHub & GitLab', category: 'dev', status: 'Webhooks & PR Triggers', latency: '1.2ms', color: '#6366f1' },
    { name: 'Jira & Linear', category: 'dev', status: 'Bi-directional Sync', latency: '2.5ms', color: '#ff5252' },
    { name: 'Slack & Microsoft Teams', category: 'msg', status: 'ChatOps Bot & Alerts', latency: '0.5ms', color: '#f59e0b' },
    { name: 'AWS & Azure Cloud', category: 'cloud', status: 'IAM & KMS Secret Storage', latency: '0.3ms', color: '#0d9488' },
    { name: 'OpenAI, Anthropic & Llama', category: 'ai', status: 'Multi-Model Fallback', latency: '12ms', color: '#10b981' },
    { name: 'Custom gRPC & REST APIs', category: 'dev', status: 'Universal OpenAPI Spec', latency: '0.1ms', color: '#ff5252' }
  ];

  const filtered = filter === 'all' ? integrations : integrations.filter(i => i.category === filter);

  return (
    <section 
      id="ecosystem"
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
              background: 'rgba(6, 182, 212, 0.1)',
              color: '#06b6d4',
              fontWeight: 700,
              fontSize: '0.85rem',
              marginBottom: '1rem'
            }}
          >
            <Layers size={14} /> UNIVERSAL ECOSYSTEM
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
            Seamless Integration With Your Stack
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem' }}>
            Qolve connects out-of-the-box with over 150+ enterprise databases, cloud providers, and productivity tools.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'All Integrations' },
            { id: 'db', label: 'Databases & Warehouses' },
            { id: 'dev', label: 'Developer Tools' },
            { id: 'msg', label: 'Messaging & ChatOps' },
            { id: 'cloud', label: 'Cloud Infrastructure' },
            { id: 'ai', label: 'AI & LLM Providers' }
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

        {/* Integration Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {filtered.map((item, index) => (
            <div
              key={index}
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '1.5rem',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                transition: 'all 0.25s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = item.color;
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 12px 24px ${item.color}18`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.color }} />
                  <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.45rem', borderRadius: '4px', background: 'rgba(13, 148, 136, 0.1)', color: '#0d9488', fontWeight: 700 }}>
                    {item.latency}
                  </span>
                </div>
                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0f172a', marginBottom: '0.25rem' }}>
                  {item.name}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500 }}>
                  {item.status}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: item.color, fontWeight: 700, marginTop: '1.25rem' }}>
                <Check size={14} /> Ready for deployment
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
