import React, { useState } from 'react';
import { 
  Zap, 
  Play, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Database, 
  Mail, 
  MessageSquare, 
  Sparkles, 
  RefreshCw,
  Layers
} from 'lucide-react';

export default function InteractiveSandbox({ onOpenContact }) {
  const [selectedTrigger, setSelectedTrigger] = useState('email');
  const [selectedActions, setSelectedActions] = useState(['quelp', 'sentiment', 'reply']);
  const [isExecuting, setIsExecuting] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [executionResult, setExecutionResult] = useState(null);

  const triggers = [
    { id: 'email', title: 'Incoming Email Ticket', icon: Mail, subtitle: 'Customer support request' },
    { id: 'db', title: 'SQL Row Inserted', icon: Database, subtitle: 'PostgreSQL change feed' },
    { id: 'slack', title: 'Slack Escalation', icon: MessageSquare, subtitle: '#urgent-alerts channel' },
  ];

  const availableActions = [
    { id: 'quelp', name: 'Quelp Neural Context Retrieval', cost: '1.2ms', color: '#0d9488' },
    { id: 'sentiment', name: 'Intent & Urgent Risk Score', cost: '0.8ms', color: '#ff5252' },
    { id: 'reply', name: 'Auto-Draft AI Solution', cost: '12.4ms', color: '#f59e0b' },
    { id: 'slack', name: 'Notify Tier-2 Engineer', cost: '2.1ms', color: '#06b6d4' },
    { id: 'db', name: 'Audit Log Commit', cost: '0.5ms', color: '#6366f1' },
  ];

  const toggleAction = (id) => {
    if (selectedActions.includes(id)) {
      if (selectedActions.length > 1) {
        setSelectedActions(selectedActions.filter(a => a !== id));
      }
    } else {
      setSelectedActions([...selectedActions, id]);
    }
  };

  const handleRunPipeline = () => {
    setIsExecuting(true);
    setCurrentStep(0);
    setExecutionResult(null);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < selectedActions.length) {
        setCurrentStep(step);
      } else {
        clearInterval(interval);
        setIsExecuting(false);
        setCurrentStep(selectedActions.length);
        setExecutionResult({
          status: 'SUCCESS',
          totalTimeMs: (selectedActions.length * 4.2 + 3.1).toFixed(1),
          confidence: '99.7%',
          summary: `Successfully executed trigger [${selectedTrigger}] through ${selectedActions.length} pipeline steps with zero errors.`,
          outputPayload: {
            ticketID: 'Q-84920',
            confidence: 0.997,
            actionTaken: 'Auto-responded and updated CRM state in 16.3ms'
          }
        });
      }
    }, 600);
  };

  return (
    <section 
      id="sandbox"
      style={{
        padding: '5rem 1.5rem',
        background: 'linear-gradient(180deg, #f8fafc 0%, #f0fdfa 100%)',
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
            <Zap size={14} /> LIVE PIPELINE BUILDER
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
            Build & Test Your AI Pipeline in Real-Time
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem' }}>
            Select an event trigger, customize your execution actions, and click Run to watch Qolve process payloads in milliseconds.
          </p>
        </div>

        {/* Pipeline Builder Workspace */}
        <div 
          className="glass-teal"
          style={{
            borderRadius: '24px',
            padding: '2rem',
            border: '1px solid rgba(13, 148, 136, 0.25)',
            boxShadow: '0 20px 45px -10px rgba(13, 148, 136, 0.12)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            
            {/* Step 1: Choose Trigger */}
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0d9488', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Step 1: Event Trigger
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {triggers.map((t) => {
                  const Icon = t.icon;
                  const isSelected = selectedTrigger === t.id;
                  return (
                    <div
                      key={t.id}
                      onClick={() => setSelectedTrigger(t.id)}
                      style={{
                        padding: '1rem',
                        borderRadius: '14px',
                        background: isSelected ? '#ffffff' : 'rgba(255,255,255,0.6)',
                        border: isSelected ? '2px solid #0d9488' : '1px solid #e2e8f0',
                        boxShadow: isSelected ? '0 4px 14px rgba(13, 148, 136, 0.2)' : 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: isSelected ? 'rgba(13, 148, 136, 0.15)' : '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={18} color={isSelected ? '#0d9488' : '#64748b'} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a' }}>{t.title}</div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{t.subtitle}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Pipeline Actions */}
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ff5252', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Step 2: Select AI Actions ({selectedActions.length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {availableActions.map((act) => {
                  const isChecked = selectedActions.includes(act.id);
                  return (
                    <div
                      key={act.id}
                      onClick={() => toggleAction(act.id)}
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        background: isChecked ? '#ffffff' : 'rgba(255,255,255,0.5)',
                        border: isChecked ? `2px solid ${act.color}` : '1px solid #e2e8f0',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <div style={{ width: '18px', height: '18px', borderRadius: '4px', border: `2px solid ${act.color}`, background: isChecked ? act.color : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {isChecked && <CheckCircle2 size={14} color="white" />}
                        </div>
                        <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1e293b' }}>{act.name}</span>
                      </div>
                      <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.45rem', borderRadius: '4px', background: 'rgba(0,0,0,0.05)', color: act.color, fontWeight: 700 }}>
                        {act.cost}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Execution Control & Console Output */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                  Step 3: Run Simulation
                </div>
                <button
                  onClick={handleRunPipeline}
                  disabled={isExecuting}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.85rem', justifyContent: 'center', borderRadius: '12px', marginBottom: '1rem' }}
                >
                  {isExecuting ? (
                    <>
                      <RefreshCw size={18} className="animate-spin" />
                      <span>Processing Step {currentStep + 1}...</span>
                    </>
                  ) : (
                    <>
                      <Play size={18} />
                      <span>Execute Pipeline</span>
                    </>
                  )}
                </button>
              </div>

              {/* Live Output Card */}
              <div 
                style={{
                  background: '#042f2e',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  color: 'white',
                  fontFamily: 'monospace',
                  fontSize: '0.8rem',
                  minHeight: '180px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ color: '#2dd4bf', fontWeight: 700, marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.4rem' }}>
                    Console Pipeline Output
                  </div>

                  {isExecuting && (
                    <div style={{ color: '#fbbf24' }}>
                      ⚡ [EXEC] Running action: {availableActions.find(a => a.id === selectedActions[currentStep])?.name}...
                    </div>
                  )}

                  {executionResult && (
                    <div>
                      <div style={{ color: '#34d399', fontWeight: 700, marginBottom: '0.4rem' }}>
                        ✓ {executionResult.summary}
                      </div>
                      <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
                        Latency: {executionResult.totalTimeMs}ms | Confidence: {executionResult.confidence}
                      </div>
                    </div>
                  )}

                  {!isExecuting && !executionResult && (
                    <div style={{ color: '#64748b' }}>
                      Ready to execute. Click "Execute Pipeline" to test payload routing.
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.75rem' }}>
                  <button onClick={onOpenContact} style={{ padding: '0.35rem 0.75rem', borderRadius: '6px', border: 'none', background: '#0d9488', color: 'white', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}>
                    Get Full API Spec
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
