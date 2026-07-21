import React, { useState } from 'react';
import { 
  DollarSign, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  HelpCircle,
  XCircle
} from 'lucide-react';

export default function PricingCalculatorSection({ onOpenDemo }) {
  const [agents, setAgents] = useState(8);

  // Calculations
  const quelpAnnualCost = 49 * 12; // £49/mo flat = £588/yr ($750/yr)
  const zendeskCostPerAgentPerMonth = 115;
  const zendeskAnnualCost = agents * zendeskCostPerAgentPerMonth * 12;
  const intercomCostPerAgentPerMonth = 139;
  const intercomAnnualCost = agents * intercomCostPerAgentPerMonth * 12;

  const annualSavingsVsZendesk = Math.max(0, zendeskAnnualCost - quelpAnnualCost);

  return (
    <section 
      id="pricing"
      style={{
        padding: '5rem 1.5rem',
        background: '#ffffff',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.9rem', borderRadius: '9999px', background: '#fef3c7', color: '#b45309', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem' }}>
            <DollarSign size={14} /> TRANSPARENT FLAT PRICING
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
            Flat Workspace Pricing. No Per-Agent Penalties.
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Legacy support platforms charge $100+ for every single teammate you add. Quelp charges one flat workspace fee.
          </p>
        </div>

        {/* Agent Slider & Savings Comparison Calculator */}
        <div 
          className="card-shadow"
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #f0fdfa 100%)',
            borderRadius: '24px',
            padding: '2.5rem',
            border: '1px solid #ccfbf1',
            maxWidth: '1080px',
            margin: '0 auto 4rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left: Interactive Slider */}
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0d9488', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              Calculate Your Team's Cost Savings
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>
              How many support agents are on your team?
            </h3>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontWeight: 700, fontSize: '1rem', color: '#1e293b' }}>Support Team Size:</span>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0d9488' }}>{agents} Agents</span>
              </div>
              <input
                type="range"
                min="2"
                max="40"
                value={agents}
                onChange={(e) => setAgents(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#0d9488',
                  height: '8px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.35rem' }}>
                <span>2 Agents</span>
                <span>40+ Agents</span>
              </div>
            </div>

            {/* Savings Callout Pill */}
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '1.25rem', border: '1px solid #ccfbf1', boxShadow: '0 4px 14px rgba(13, 148, 136, 0.1)' }}>
              <div style={{ fontSize: '0.82rem', color: '#64748b' }}>Estimated Annual Savings with Quelp:</div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ff5252', fontFamily: 'var(--font-heading)' }}>
                ${annualSavingsVsZendesk.toLocaleString()} / yr
              </div>
              <div style={{ fontSize: '0.78rem', color: '#0f766e', fontWeight: 600, marginTop: '2px' }}>
                ✓ Zero extra charge for onboarding new teammates!
              </div>
            </div>
          </div>

          {/* Right: Cost Comparison Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            {/* Quelp Card */}
            <div style={{ background: '#0f766e', borderRadius: '20px', padding: '1.5rem', color: '#ffffff', boxShadow: '0 10px 25px rgba(15, 118, 110, 0.25)', border: '2px solid #2dd4bf' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#ffffff' }}>Quelp Flat Workspace</span>
                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '6px', background: 'rgba(255,255,255,0.2)', color: '#ffffff', fontWeight: 700 }}>
                  RECOMMENDED
                </span>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#5eead4', marginBottom: '0.5rem' }}>
                £49 <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#ccfbf1' }}>/ workspace / month</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#ccfbf1', lineHeight: 1.5 }}>
                • <strong>Unlimited</strong> support agents included<br/>
                • Complete white-labeling & custom domains<br/>
                • Built-in Knowledge Base & Team Inbox
              </div>
            </div>

            {/* Zendesk Card */}
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '1.25rem', border: '1px solid #cbd5e1', color: '#334155' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                <span>Zendesk Growth</span>
                <span style={{ color: '#ef4444' }}>${zendeskAnnualCost.toLocaleString()} / yr</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                ${zendeskCostPerAgentPerMonth}/agent/mo × {agents} agents ($1,150+/mo)
              </div>
            </div>

            {/* Intercom Card */}
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '1.25rem', border: '1px solid #cbd5e1', color: '#334155' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                <span>Intercom Essential</span>
                <span style={{ color: '#ef4444' }}>${intercomAnnualCost.toLocaleString()} / yr</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                ${intercomCostPerAgentPerMonth}/agent/mo × {agents} agents ($1,390+/mo)
              </div>
            </div>

          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={onOpenDemo} className="btn-teal" style={{ padding: '0.85rem 2.25rem', fontSize: '1rem' }}>
            <span>Lock In Your Flat Rate Trial</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
