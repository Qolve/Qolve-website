import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  Github, 
  Twitter, 
  Linkedin, 
  Activity,
  ShieldCheck
} from 'lucide-react';

export default function Footer({ onNavigate, onOpenContact }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer 
      style={{
        background: '#042f2e',
        color: '#ffffff',
        padding: '5rem 1.5rem 3rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Top Newsletter & Callout Bar */}
        <div 
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            padding: '2.5rem',
            border: '1px solid rgba(20, 184, 166, 0.25)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2dd4bf', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.4rem' }}>
              <Sparkles size={16} /> STAY AT THE FOREFRONT OF ENTERPRISE AI
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'white' }}>
              Subscribe to Qolve Engineering Dispatch
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.2rem' }}>
              Sub-second query benchmarks, graph neural research, and product updates delivered monthly.
            </p>
          </div>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.6rem', flex: 1, maxWidth: '440px', minWidth: '280px' }}>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#34d399', fontWeight: 700, fontSize: '0.95rem' }}>
                <Check size={20} /> Thank you for subscribing to Qolve Dispatch!
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  style={{
                    flex: 1,
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(20, 184, 166, 0.3)',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: 'white',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '0.75rem 1.25rem', borderRadius: '12px' }}>
                  <span>Subscribe</span>
                  <ArrowRight size={16} />
                </button>
              </>
            )}
          </form>
        </div>

        {/* Footer Navigation Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
          
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #0d9488, #ff5252)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={18} color="white" />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem', color: 'white' }}>
                Qolve
              </span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Next-generation autonomous AI orchestration & sub-second knowledge graph query intelligence for enterprise operations.
            </p>
            
            {/* Live System Status Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.75rem', borderRadius: '9999px', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', fontSize: '0.78rem', fontWeight: 700 }}>
              <Activity size={14} className="animate-spin" />
              <span>All Systems Operational (99.99%)</span>
            </div>
          </div>

          {/* Col 2: Platform Modules */}
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'white', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Platform
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
              <li><a href="#products" onClick={() => onNavigate('products')} style={{ color: 'inherit', textDecoration: 'none' }}>Quelp Graph Engine</a></li>
              <li><a href="#products" onClick={() => onNavigate('products')} style={{ color: 'inherit', textDecoration: 'none' }}>Qolve Orchestrator</a></li>
              <li><a href="#products" onClick={() => onNavigate('products')} style={{ color: 'inherit', textDecoration: 'none' }}>DataPulse Analytics</a></li>
              <li><a href="#products" onClick={() => onNavigate('products')} style={{ color: 'inherit', textDecoration: 'none' }}>SecureShield Security</a></li>
              <li><a href="#sandbox" onClick={() => onNavigate('sandbox')} style={{ color: '#5eead4', textDecoration: 'none', fontWeight: 700 }}>Interactive Demo Sandbox</a></li>
            </ul>
          </div>

          {/* Col 3: Solutions & Resources */}
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'white', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Solutions & ROI
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
              <li><a href="#roi" onClick={() => onNavigate('roi')} style={{ color: 'inherit', textDecoration: 'none' }}>Interactive ROI Calculator</a></li>
              <li><a href="#ecosystem" onClick={() => onNavigate('ecosystem')} style={{ color: 'inherit', textDecoration: 'none' }}>150+ Enterprise Integrations</a></li>
              <li><a href="#about" onClick={() => onNavigate('about')} style={{ color: 'inherit', textDecoration: 'none' }}>Leadership & Values</a></li>
              <li><button onClick={onOpenContact} style={{ background: 'none', border: 'none', color: '#ff5252', cursor: 'pointer', fontWeight: 700, fontSize: 'inherit' }}>Schedule Technical Audit</button></li>
            </ul>
          </div>

          {/* Col 4: Trust & Compliance */}
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'white', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Security & Trust
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#34d399' }}>
                <ShieldCheck size={16} /> SOC2 Type II Certified
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#34d399' }}>
                <ShieldCheck size={16} /> ISO 27001 & HIPAA Compliant
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#34d399' }}>
                <ShieldCheck size={16} /> Zero Data Training Guarantee
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Socials */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', fontSize: '0.85rem', color: '#94a3b8' }}>
          <div>
            © {new Date().getFullYear()} Qolve Platform Inc. All rights reserved. Built with precision and high craft.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <a href="#" style={{ color: '#94a3b8', transition: 'color 0.2s' }}><Github size={18} /></a>
            <a href="#" style={{ color: '#94a3b8', transition: 'color 0.2s' }}><Twitter size={18} /></a>
            <a href="#" style={{ color: '#94a3b8', transition: 'color 0.2s' }}><Linkedin size={18} /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}
