import React, { useState } from 'react';
import { 
  BarChart3, 
  DollarSign, 
  Clock, 
  TrendingUp, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function ROIStatsSection({ onOpenContact }) {
  const [teamSize, setTeamSize] = useState(25);
  const [hoursPerWeek, setHoursPerWeek] = useState(8);
  const [hourlyRate, setHourlyRate] = useState(75);

  // Calculations
  const weeklyHoursSavedTotal = teamSize * hoursPerWeek * 0.75; // 75% efficiency gain
  const annualHoursSaved = Math.round(weeklyHoursSavedTotal * 52);
  const annualDollarSavings = Math.round(annualHoursSaved * hourlyRate);
  const paybackMonths = 1.2;

  return (
    <section 
      id="roi"
      style={{
        padding: '5rem 1.5rem',
        background: '#ffffff',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.35rem 0.9rem',
              borderRadius: '9999px',
              background: 'rgba(245, 158, 11, 0.1)',
              color: '#f59e0b',
              fontWeight: 700,
              fontSize: '0.85rem',
              marginBottom: '1rem'
            }}
          >
            <BarChart3 size={14} /> VALUE & ROI CALCULATOR
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
            Calculate Your Organization's Cost Savings
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem' }}>
            Adjust the sliders below to see how Qolve & Quelp transform your team's operational efficiency and bottom line.
          </p>
        </div>

        {/* ROI Calculator Card */}
        <div 
          className="glass-card"
          style={{
            borderRadius: '24px',
            padding: '2.5rem',
            border: '1px solid rgba(13, 148, 136, 0.2)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          
          {/* Sliders Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Slider 1: Team Size */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>Team / Engineering Size</label>
                <span style={{ fontWeight: 800, color: '#0d9488', fontSize: '1.1rem' }}>{teamSize} people</span>
              </div>
              <input
                type="range"
                min="5"
                max="300"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#0d9488',
                  height: '8px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                <span>5 team members</span>
                <span>300 team members</span>
              </div>
            </div>

            {/* Slider 2: Hours per week */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>Manual Workflow Hours / Week / Person</label>
                <span style={{ fontWeight: 800, color: '#ff5252', fontSize: '1.1rem' }}>{hoursPerWeek} hrs</span>
              </div>
              <input
                type="range"
                min="2"
                max="25"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#ff5252',
                  height: '8px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                <span>2 hrs/week</span>
                <span>25 hrs/week</span>
              </div>
            </div>

            {/* Slider 3: Hourly Rate */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>Average Fully-Loaded Hourly Rate</label>
                <span style={{ fontWeight: 800, color: '#f59e0b', fontSize: '1.1rem' }}>${hourlyRate}/hr</span>
              </div>
              <input
                type="range"
                min="35"
                max="200"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#f59e0b',
                  height: '8px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                <span>$35/hr</span>
                <span>$200/hr</span>
              </div>
            </div>

          </div>

          {/* Results Summary Box */}
          <div 
            style={{
              background: 'linear-gradient(135deg, #042f2e 0%, #0f766e 100%)',
              borderRadius: '20px',
              padding: '2rem',
              color: 'white',
              boxShadow: '0 20px 40px rgba(13, 148, 136, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#99f6e4', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
                Projected Annual ROI Summary
              </div>

              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '0.88rem', color: '#ccfbf1' }}>Estimated Annual Cost Savings</div>
                <div style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>
                  ${annualDollarSavings.toLocaleString()}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#99f6e4' }}>Annual Hours Reclaimed</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#5eead4' }}>
                    {annualHoursSaved.toLocaleString()} hrs
                  </div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#99f6e4' }}>Payback Period</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ff5252' }}>
                    ~{paybackMonths} Months
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="btn-primary"
              style={{ background: '#ffffff', color: '#0d9488', width: '100%', justifyContent: 'center', fontWeight: 700, padding: '0.85rem' }}
            >
              <span>Request Customized Business Case</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
