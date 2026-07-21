import React, { useState } from 'react';
import { Search, X, Cpu, Zap, BarChart3, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, onNavigate }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const items = [
    { title: 'Quelp Graph Engine', category: 'Platform Module', section: 'products', icon: Cpu, desc: 'Sub-5ms neural knowledge graph search' },
    { title: 'Qolve Orchestrator', category: 'Platform Module', section: 'products', icon: Zap, desc: 'Multi-agent DAG workflow execution' },
    { title: 'Interactive Sandbox Demo', category: 'Live Playground', section: 'sandbox', icon: Zap, desc: 'Test real-time AI pipeline execution' },
    { title: 'ROI & Cost Calculator', category: 'Business Tools', section: 'roi', icon: BarChart3, desc: 'Calculate annual cost savings and efficiency' },
    { title: '150+ Stack Integrations', category: 'Ecosystem', section: 'ecosystem', icon: Layers, desc: 'Connect PostgreSQL, GitHub, Slack & AWS' },
    { title: 'SOC2 & Security Compliance', category: 'Security', section: 'about', icon: ShieldCheck, desc: 'Zero-trust PII masking & audit logs' },
  ];

  const filtered = query.trim() === '' 
    ? items 
    : items.filter(i => i.title.toLowerCase().includes(query.toLowerCase()) || i.desc.toLowerCase().includes(query.toLowerCase()));

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '5rem 1.5rem 1.5rem',
        background: 'rgba(4, 47, 46, 0.65)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          padding: '1.25rem',
          maxWidth: '600px',
          width: '100%',
          boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
          border: '1px solid rgba(13, 148, 136, 0.3)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingBottom: '1rem', borderBottom: '1px solid #e2e8f0' }}>
          <Search size={20} color="#0d9488" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Qolve modules, benchmarks, SDKs..."
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              color: '#0f172a'
            }}
          />
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}>
            <X size={18} color="#64748b" />
          </button>
        </div>

        {/* Results List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem', maxHeight: '350px', overflowY: 'auto' }}>
          {filtered.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => {
                  onNavigate(item.section);
                  onClose();
                }}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(13, 148, 136, 0.08)';
                  e.currentTarget.style.borderColor = '#0d9488';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f8fafc';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(13, 148, 136, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={18} color="#0d9488" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a' }}>{item.title}</div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{item.desc}</div>
                  </div>
                </div>
                <ArrowRight size={14} color="#0d9488" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
