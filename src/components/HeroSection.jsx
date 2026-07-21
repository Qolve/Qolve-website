import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Zap, 
  Cpu, 
  Database, 
  GitBranch, 
  ShieldAlert, 
  TrendingUp, 
  Activity, 
  Layers
} from 'lucide-react';

export default function HeroSection({ onNavigate, onOpenContact }) {
  const [activeNode, setActiveNode] = useState(0);
  const [isSimulating, setIsSimulating] = useState(true);

  const pipelineNodes = [
    {
      id: 0,
      title: 'Multimodal Ingestion',
      category: 'Data Input',
      status: 'Active',
      metric: '12.4 MB/s stream',
      color: '#0d9488', // Teal
      accentBg: 'rgba(13, 148, 136, 0.1)',
      icon: Database,
      details: 'Structuring raw telemetry, customer queries & SQL streams into vector-ready payloads.'
    },
    {
      id: 1,
      title: 'Quelp Graph Engine',
      category: 'Knowledge Core',
      status: 'Processing',
      metric: '4.2ms latency',
      color: '#ff5252', // Coral accent
      accentBg: 'rgba(255, 82, 82, 0.1)',
      icon: Cpu,
      details: 'Instant semantic relationship mapping & neural graph retrieval across enterprise silos.'
    },
    {
      id: 2,
      title: 'Autonomous AI Dispatch',
      category: 'Orchestration',
      status: 'Executing',
      metric: '99.94% accuracy',
      color: '#f59e0b', // Amber accent
      accentBg: 'rgba(245, 158, 11, 0.1)',
      icon: GitBranch,
      details: 'Dynamically routing work packets to specialized subagents & external enterprise APIs.'
    },
    {
      id: 3,
      title: 'Real-Time Insights',
      category: 'Analytics',
      status: 'Live Output',
      metric: '0.08s refresh',
      color: '#06b6d4', // Cyan accent
      accentBg: 'rgba(6, 182, 212, 0.1)',
      icon: TrendingUp,
      details: 'Streaming executive dashboards and compliance event logging directly to your stack.'
    }
  ];

  // Auto pipeline node rotation simulation
  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % pipelineNodes.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isSimulating]);

  return (
    <section 
      style={{
        position: 'relative',
        padding: '4rem 1.5rem 6rem',
        background: 'linear-gradient(180deg, #f0fdfa 0%, #ffffff 70%, #f8fafc 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Gradient Glow Orbs */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          left: '15%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(45, 212, 191, 0.22) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 82, 82, 0.12) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none',
          filter: 'blur(60px)'
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Top Announcement Pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              background: '#ffffff',
              border: '1px solid rgba(13, 148, 136, 0.25)',
              boxShadow: '0 4px 15px rgba(13, 148, 136, 0.08)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#0f766e'
            }}
          >
            <span 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                background: 'linear-gradient(135deg, #0d9488 0%, #ff5252 100%)',
                color: 'white',
                padding: '0.15rem 0.55rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 700
              }}
            >
              <Sparkles size={12} /> NEW
            </span>
            <span>Quelp Engine v2.4 Knowledge Synthesis Released</span>
            <ArrowRight size={14} color="#0d9488" />
          </div>
        </div>

        {/* Hero Headline & Subtitle */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 3.5rem' }}>
          <h1 
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              color: '#042f2e',
              marginBottom: '1.25rem'
            }}
          >
            Empower Your Business With{' '}
            <span className="text-gradient-teal">Autonomous AI Workflows</span> & Real-Time Intelligence
          </h1>
          <p 
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '740px',
              margin: '0 auto 2.25rem'
            }}
          >
            Qolve combines instant knowledge graph retrieval, self-healing agent pipelines, and enterprise compliance to turn complex operations into seamless automated workflows.
          </p>

          {/* Primary CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <button 
              onClick={onOpenContact} 
              className="btn-primary"
              style={{ padding: '0.85rem 2.25rem', fontSize: '1rem', borderRadius: '12px' }}
            >
              <span>Get Started Free</span>
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => onNavigate('sandbox')} 
              className="btn-secondary"
              style={{ padding: '0.85rem 2rem', fontSize: '1rem', borderRadius: '12px' }}
            >
              <Zap size={18} color="#0d9488" />
              <span>Try Interactive Demo</span>
            </button>
            <button 
              onClick={() => onNavigate('roi')} 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.75rem',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                color: '#334155',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#ff5252'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5252' }} />
              <span>Calculate Savings</span>
            </button>
          </div>

          {/* Feature Badges */}
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justify: 'center',
              gap: '1.5rem 2.5rem',
              marginTop: '2rem',
              color: '#64748b',
              fontSize: '0.88rem',
              fontWeight: 500
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="#0d9488" /> No-code Setup in 5 Mins
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="#0d9488" /> SOC2 Type II & GDPR Compliant
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="#0d9488" /> 99.99% Guaranteed SLA
            </div>
          </div>
        </div>

        {/* Live Interactive Hero Pipeline Showcase Widget */}
        <div 
          className="glass-teal"
          style={{
            borderRadius: '24px',
            padding: '1.75rem',
            boxShadow: '0 25px 50px -12px rgba(13, 148, 136, 0.18)',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            maxWidth: '1100px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          {/* Header Controls */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(13, 148, 136, 0.15)',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5252' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
              <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#042f2e', marginLeft: '0.5rem' }}>
                Qolve Engine Pipeline Monitor — Live Execution
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#0d9488', fontWeight: 600 }}>
                <Activity size={14} className="animate-spin" />
                <span>Stream Rate: 4,850 ops/sec</span>
              </div>
              <button
                onClick={() => setIsSimulating(!isSimulating)}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(13, 148, 136, 0.3)',
                  background: isSimulating ? 'rgba(20, 184, 166, 0.15)' : '#ffffff',
                  color: '#0d9488',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                {isSimulating ? 'Pause Auto Rotation' : 'Resume Simulation'}
              </button>
            </div>
          </div>

          {/* Interactive Pipeline Node Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {pipelineNodes.map((node, idx) => {
              const Icon = node.icon;
              const isCurrent = activeNode === idx;
              return (
                <div
                  key={node.id}
                  onClick={() => {
                    setActiveNode(idx);
                    setIsSimulating(false);
                  }}
                  style={{
                    padding: '1.2rem',
                    borderRadius: '16px',
                    background: isCurrent ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
                    border: isCurrent ? `2px solid ${node.color}` : '1px solid rgba(226, 232, 240, 0.8)',
                    boxShadow: isCurrent ? `0 8px 24px ${node.color}25` : '0 2px 8px rgba(0,0,0,0.03)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {isCurrent && (
                    <div 
                      style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        right: 0, 
                        height: '4px', 
                        background: node.color 
                      }} 
                    />
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <div 
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: node.accentBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={20} color={node.color} />
                    </div>
                    <span 
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        padding: '0.2rem 0.5rem',
                        borderRadius: '6px',
                        background: isCurrent ? node.accentBg : '#f1f5f9',
                        color: isCurrent ? node.color : '#64748b',
                      }}
                    >
                      {node.status}
                    </span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a', marginBottom: '0.2rem' }}>
                    {node.title}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 500 }}>
                    {node.category} • <strong style={{ color: node.color }}>{node.metric}</strong>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Node Detailed Inspection Drawer */}
          <div 
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '1.25rem 1.5rem',
              border: `1px solid ${pipelineNodes[activeNode].color}40`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, minWidth: '280px' }}>
              <div 
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: pipelineNodes[activeNode].color,
                  boxShadow: `0 0 12px ${pipelineNodes[activeNode].color}`
                }} 
              />
              <div>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: pipelineNodes[activeNode].color, fontWeight: 800 }}>
                  Active Module Analysis: {pipelineNodes[activeNode].title}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#334155', marginTop: '0.2rem', fontWeight: 500 }}>
                  {pipelineNodes[activeNode].details}
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('products')}
              style={{
                padding: '0.55rem 1.25rem',
                borderRadius: '10px',
                border: 'none',
                background: pipelineNodes[activeNode].color,
                color: 'white',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <span>Explore Module Spec</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
