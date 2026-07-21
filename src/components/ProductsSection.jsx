import React, { useState } from 'react';
import { 
  Sparkles, 
  Database, 
  GitBranch, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  Terminal, 
  Lock, 
  Zap,
  Layers
} from 'lucide-react';

export default function ProductsSection({ onNavigate, onOpenContact }) {
  const [activeTab, setActiveTab] = useState('quelp');
  const [searchQuery, setSearchQuery] = useState('');
  const [demoQueryResult, setDemoQueryResult] = useState(null);

  const products = [
    {
      id: 'quelp',
      name: 'Quelp Graph Engine',
      badge: 'Core Intelligence',
      badgeColor: '#ff5252',
      badgeBg: 'rgba(255, 82, 82, 0.1)',
      icon: Database,
      tagline: 'Instant Semantic Knowledge Graph & Sub-Second Query Engine',
      description: 'Quelp indexes structured relational databases, unstructured PDFs, live tickets, and slack conversations into a unified, high-speed neural graph.',
      highlights: [
        'Sub-5ms vector & graph hybrid query execution',
        'Automatic entity extraction & relation linking',
        'Built-in hallucination guardrails & citation tracing',
        'Supports 500+ document formats & live webhooks'
      ],
      metrics: [
        { label: 'Query Speed', val: '3.8ms avg' },
        { label: 'Accuracy Score', val: '99.8%' },
        { label: 'Vector Index', val: '100B+ nodes' }
      ]
    },
    {
      id: 'orchestrator',
      name: 'Qolve Orchestrator',
      badge: 'Workflow Engine',
      badgeColor: '#f59e0b',
      badgeBg: 'rgba(245, 158, 11, 0.1)',
      icon: GitBranch,
      tagline: 'Autonomous Multi-Agent Workflow Execution System',
      description: 'Orchestrate multi-step business logic, automated fallbacks, parallel agent dispatch, and human-in-the-loop approvals with zero code complexity.',
      highlights: [
        'Visual DAG builder with real-time step monitoring',
        'Automatic retries & dynamic rate-limit throttling',
        'State persistence & distributed transactional saga handling',
        'Custom Python & JS script node execution'
      ],
      metrics: [
        { label: 'Concurrency', val: '50k tasks/sec' },
        { label: 'Self-Healing Rate', val: '94.2%' },
        { label: 'Dev Savings', val: '80% time saved' }
      ]
    },
    {
      id: 'datapulse',
      name: 'DataPulse Analytics',
      badge: 'Real-Time Pulse',
      badgeColor: '#06b6d4',
      badgeBg: 'rgba(6, 182, 212, 0.1)',
      icon: BarChart3,
      tagline: 'Predictive Operational Dashboard & Telemetry Stream',
      description: 'Monitor pipeline throughput, cost allocations, error rates, and team productivity in real time with AI-driven anomaly detection.',
      highlights: [
        'Live streaming metrics via WebSocket & gRPC',
        'Automated anomaly alerts sent to Slack / Teams',
        'Granular cost-per-prompt & token usage tracking',
        'Executive PDF report generation'
      ],
      metrics: [
        { label: 'Latency', val: '< 10ms stream' },
        { label: 'Anomaly Recall', val: '99.4%' },
        { label: 'Cost Reductions', val: '35% lower GPU costs' }
      ]
    },
    {
      id: 'secureshield',
      name: 'SecureShield Guard',
      badge: 'Zero-Trust Security',
      badgeColor: '#6366f1',
      badgeBg: 'rgba(99, 102, 241, 0.1)',
      icon: ShieldCheck,
      tagline: 'Enterprise Compliance, PII Anonymization & Security Guardrails',
      description: 'Ensure prompt safety, prevent data leakage, and maintain audit-ready SOC2 / HIPAA compliance across every AI interaction.',
      highlights: [
        'Real-time PII & sensitive data mask/unmask pipeline',
        'Prompt injection & jailbreak detection filters',
        'Immutable cryptographic audit log ledger',
        'Role-based access control (RBAC) & SAML/SSO'
      ],
      metrics: [
        { label: 'PII Filter Speed', val: '1.2ms' },
        { label: 'Compliance', val: 'SOC2 / ISO 27001' },
        { label: 'Leakage Incidents', val: '0 Reported' }
      ]
    }
  ];

  const currentProduct = products.find(p => p.id === activeTab) || products[0];

  const handleSimulateQuelpQuery = () => {
    if (!searchQuery.trim()) {
      setSearchQuery('Find top customer support bottlenecks in Q3 and suggested solutions');
    }
    setDemoQueryResult({
      query: searchQuery || 'Find top customer support bottlenecks in Q3 and suggested solutions',
      graphNodesFound: 42,
      latencyMs: 3.4,
      synthesizedAnswer: 'Analysis of 1,240 support tickets reveals 38% delay caused by legacy auth token renewal. Quelp automated resolution script applied to 850 cases.',
      sources: ['Jira Ticket #4829', 'Slack #support-alerts', 'Confluence Docs v2.1']
    });
  };

  return (
    <section 
      id="products"
      style={{
        padding: '5rem 1.5rem',
        background: '#ffffff',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
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
            <Sparkles size={14} /> THE QOLVE PLATFORM ECOSYSTEM
          </div>
          <h2 
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 800,
              color: '#042f2e',
              lineHeight: 1.2,
              marginBottom: '1rem'
            }}
          >
            Modular AI Building Blocks Built for Scale
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Mix and match our specialized modules or deploy the full suite to power your organization's mission-critical workflows.
          </p>
        </div>

        {/* Product Selection Tab Bar */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}
        >
          {products.map((p) => {
            const Icon = p.icon;
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => {
                  setActiveTab(p.id);
                  setDemoQueryResult(null);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.85rem 1.5rem',
                  borderRadius: '14px',
                  border: isActive ? `2px solid ${p.badgeColor}` : '1px solid #e2e8f0',
                  background: isActive ? '#ffffff' : '#f8fafc',
                  color: isActive ? '#0f172a' : '#64748b',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? `0 8px 20px ${p.badgeColor}20` : 'none'
                }}
              >
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: p.badgeBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Icon size={18} color={p.badgeColor} />
                </div>
                <span>{p.name}</span>
                <span 
                  style={{
                    fontSize: '0.7rem',
                    padding: '0.15rem 0.45rem',
                    borderRadius: '6px',
                    background: p.badgeBg,
                    color: p.badgeColor,
                    fontWeight: 700
                  }}
                >
                  {p.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Product Detailed Container */}
        <div 
          className="glass-card"
          style={{
            borderRadius: '24px',
            padding: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            border: '1px solid rgba(13, 148, 136, 0.2)'
          }}
        >
          
          {/* Left Column: Descriptions & Key Features */}
          <div>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.3rem 0.75rem',
                borderRadius: '8px',
                background: currentProduct.badgeBg,
                color: currentProduct.badgeColor,
                fontWeight: 700,
                fontSize: '0.8rem',
                marginBottom: '1rem'
              }}
            >
              {currentProduct.badge}
            </div>

            <h3 
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 800,
                color: '#042f2e',
                marginBottom: '0.5rem',
                lineHeight: 1.25
              }}
            >
              {currentProduct.name}
            </h3>

            <div style={{ fontSize: '1.05rem', fontWeight: 600, color: currentProduct.badgeColor, marginBottom: '1.25rem' }}>
              {currentProduct.tagline}
            </div>

            <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              {currentProduct.description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {currentProduct.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: '#334155' }}>
                  <CheckCircle2 size={18} color={currentProduct.badgeColor} style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Metrics Pills */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.75rem',
                padding: '1rem',
                background: '#f8fafc',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                marginBottom: '1.75rem'
              }}
            >
              {currentProduct.metrics.map((m, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>{m.label}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: currentProduct.badgeColor, marginTop: '2px' }}>{m.val}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={onOpenContact} className="btn-primary">
                <span>Deploy {currentProduct.name}</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

          {/* Right Column: Live Interactive Demo Module Widget */}
          <div 
            style={{
              background: '#042f2e',
              borderRadius: '20px',
              padding: '1.5rem',
              color: '#ffffff',
              boxShadow: '0 20px 40px rgba(4, 47, 46, 0.25)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Top Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: '#5eead4' }}>
                <Terminal size={16} />
                <span>Interactive Module Console</span>
              </div>
              <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', borderRadius: '6px', background: 'rgba(20, 184, 166, 0.2)', color: '#2dd4bf' }}>
                LIVE SANDBOX
              </span>
            </div>

            {/* Content per Tab */}
            {activeTab === 'quelp' && (
              <div>
                <label style={{ fontSize: '0.8rem', color: '#99f6e4', display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Test Quelp Semantic Search Query:
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="e.g. Find support bottlenecks in Q3..."
                    style={{
                      flex: 1,
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(20, 184, 166, 0.3)',
                      background: 'rgba(255,255,255,0.08)',
                      color: 'white',
                      fontSize: '0.85rem',
                      outline: 'none'
                    }}
                  />
                  <button
                    onClick={handleSimulateQuelpQuery}
                    style={{
                      padding: '0.65rem 1rem',
                      borderRadius: '8px',
                      border: 'none',
                      background: '#ff5252',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    <Search size={14} /> Run
                  </button>
                </div>

                {demoQueryResult ? (
                  <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1rem', border: '1px solid rgba(255,82,82,0.3)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#ff5252', fontWeight: 700, marginBottom: '0.5rem' }}>
                      <span>Result Found in {demoQueryResult.latencyMs}ms</span>
                      <span>{demoQueryResult.graphNodesFound} Graph Nodes</span>
                    </div>
                    <div style={{ fontSize: '0.88rem', color: '#f1f5f9', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                      {demoQueryResult.synthesizedAnswer}
                    </div>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {demoQueryResult.sources.map((s, idx) => (
                        <span key={idx} style={{ fontSize: '0.7rem', padding: '0.15rem 0.4rem', borderRadius: '4px', background: 'rgba(20, 184, 166, 0.2)', color: '#99f6e4' }}>
                          📄 {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div style={{ padding: '2rem 1rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.85rem', border: '1px dashed rgba(255,255,255,0.15)', borderRadius: '12px' }}>
                    Click "Run" above to simulate a live Quelp neural query search across enterprise data.
                  </div>
                )}
              </div>
            )}

            {activeTab !== 'quelp' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', color: '#99f6e4', fontWeight: 600 }}>Active Stream Telemetry</span>
                  <span style={{ fontSize: '0.75rem', color: currentProduct.badgeColor, fontWeight: 700 }}>● RUNNING</span>
                </div>
                
                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '1rem', fontFamily: 'monospace', fontSize: '0.8rem', color: '#cbd5e1' }}>
                  <div>[10:48:02] &gt; {currentProduct.name} node initialized</div>
                  <div>[10:48:03] &gt; Verification token checked (200 OK)</div>
                  <div>[10:48:04] &gt; Executing step: {currentProduct.highlights[0]}</div>
                  <div style={{ color: currentProduct.badgeColor, marginTop: '0.5rem' }}>
                    ✓ Status: 100% Operational (Latency: 2.1ms)
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                  <button onClick={onOpenContact} style={{ padding: '0.45rem 0.85rem', borderRadius: '6px', border: 'none', background: currentProduct.badgeColor, color: 'white', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}>
                    Test Live Endpoint
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
