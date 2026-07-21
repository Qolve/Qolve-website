import React, { useState } from 'react';
import { 
  Inbox, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Activity,
  Globe
} from 'lucide-react';

export default function Footer({ onNavigate, onOpenDemo }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer 
      style={{
        background: '#0f172a',
        color: '#ffffff',
        padding: '4rem 1.5rem 2.5rem',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Top Newsletter Card */}
        <div 
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            padding: '2rem 2.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            marginBottom: '3.5rem'
          }}
        >
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
              Subscribe to Quelp Product Updates
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginTop: '0.2rem' }}>
              Feature releases, support desk benchmarks, and white-label setup guides delivered monthly.
            </p>
          </div>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem', flex: 1, maxWidth: '420px', minWidth: '260px' }}>
            {subscribed ? (
              <div style={{ color: '#34d399', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Check size={18} /> Subscribed to Quelp Updates!
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your work email..."
                  style={{
                    flex: 1,
                    padding: '0.65rem 0.9rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(255,255,255,0.08)',
                    color: 'white',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
                <button type="submit" className="btn-teal" style={{ padding: '0.65rem 1.25rem', borderRadius: '10px', fontSize: '0.88rem' }}>
                  <span>Subscribe</span>
                </button>
              </>
            )}
          </form>
        </div>

        {/* Footer Navigation Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '3.5rem' }}>
          
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#0d9488', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Inbox size={18} color="white" />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.3rem', color: '#ffffff' }}>
                Qolve
              </span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Quelp is the B2B customer support platform offering flat workspace pricing, white-labeling, and multi-channel ticketing.
            </p>
            
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.75rem', borderRadius: '9999px', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', fontSize: '0.75rem', fontWeight: 700 }}>
              <Activity size={12} />
              <span>All Systems Operational (99.99%)</span>
            </div>
          </div>

          {/* Col 2: Product */}
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#ffffff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Product Features
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
              <li><a href="#features" onClick={() => onNavigate('features')} style={{ color: 'inherit', textDecoration: 'none' }}>Shared Team Inbox</a></li>
              <li><a href="#features" onClick={() => onNavigate('features')} style={{ color: 'inherit', textDecoration: 'none' }}>Custom Domain White-Labeling</a></li>
              <li><a href="#kb" onClick={() => onNavigate('kb')} style={{ color: 'inherit', textDecoration: 'none' }}>Knowledge Base Help Center</a></li>
              <li><a href="#inbox-demo" onClick={() => onNavigate('inbox-demo')} style={{ color: 'inherit', textDecoration: 'none' }}>Interactive Desk Demo</a></li>
            </ul>
          </div>

          {/* Col 3: Pricing & Compare */}
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#ffffff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Pricing & Comparison
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
              <li><a href="#pricing" onClick={() => onNavigate('pricing')} style={{ color: 'inherit', textDecoration: 'none' }}>Flat Rate Savings Calculator</a></li>
              <li><a href="#pricing" onClick={() => onNavigate('pricing')} style={{ color: 'inherit', textDecoration: 'none' }}>Quelp vs Zendesk</a></li>
              <li><a href="#pricing" onClick={() => onNavigate('pricing')} style={{ color: 'inherit', textDecoration: 'none' }}>Quelp vs Intercom</a></li>
              <li><button onClick={onOpenDemo} style={{ background: 'none', border: 'none', color: '#2dd4bf', cursor: 'pointer', fontWeight: 700, fontSize: 'inherit' }}>Start Free Trial</button></li>
            </ul>
          </div>

          {/* Col 4: Infrastructure */}
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#ffffff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Email Infrastructure
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.82rem', color: '#94a3b8' }}>
              <div>• Powered by Stalwart Mail Engine</div>
              <div>• AWS SES Global Delivery</div>
              <div>• Verified SPF, DKIM & DMARC</div>
              <div>• Domain: <strong>qolve.systems</strong></div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.75rem', textAlign: 'center', fontSize: '0.82rem', color: '#94a3b8' }}>
          © {new Date().getFullYear()} Qolve Ltd. All rights reserved. Quelp Customer Support Desk.
        </div>

      </div>
    </footer>
  );
}
