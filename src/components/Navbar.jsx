import React, { useState, useEffect } from 'react';
import { 
  Inbox, 
  ArrowRight, 
  Menu, 
  X, 
  HelpCircle, 
  ShieldCheck, 
  DollarSign, 
  Sparkles,
  Layers
} from 'lucide-react';

export default function Navbar({ activeSection, onNavigate, onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'features', label: 'Platform Features' },
    { id: 'inbox-demo', label: 'Interactive Desk' },
    { id: 'pricing', label: 'Pricing & Savings' },
    { id: 'kb', label: 'Knowledge Base' },
    { id: 'about', label: 'About Qolve' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : '#ffffff',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid #f1f5f9',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '1.1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); onNavigate('hero'); }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
        >
          <div 
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(13, 148, 136, 0.25)'
            }}
          >
            <Inbox size={22} color="#ffffff" />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.4rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              Qolve
              <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '9999px', background: '#ccfbf1', color: '#0f766e', fontWeight: 700 }}>
                Quelp Desk
              </span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 500, marginTop: '-2px' }}>
              White-Label Customer Support
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '0.5rem' }} className="md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              style={{
                padding: '0.55rem 1rem',
                borderRadius: '10px',
                border: 'none',
                background: activeSection === link.id ? '#f0fdfa' : 'transparent',
                color: activeSection === link.id ? '#0d9488' : '#334155',
                fontWeight: activeSection === link.id ? 700 : 500,
                fontSize: '0.92rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                if (activeSection !== link.id) e.currentTarget.style.background = '#f8fafc';
              }}
              onMouseLeave={(e) => {
                if (activeSection !== link.id) e.currentTarget.style.background = 'transparent';
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <button
            onClick={onOpenDemo}
            className="btn-teal"
            style={{ padding: '0.65rem 1.35rem', fontSize: '0.9rem' }}
          >
            <span>Start Free Trial</span>
            <ArrowRight size={16} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              padding: '0.5rem',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              background: '#ffffff',
              cursor: 'pointer'
            }}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X size={20} color="#0d9488" /> : <Menu size={20} color="#0d9488" />}
          </button>
        </div>

      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div 
          style={{
            background: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}
          className="md:hidden"
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setMobileMenuOpen(false);
              }}
              style={{
                padding: '0.75rem',
                borderRadius: '8px',
                border: 'none',
                background: activeSection === link.id ? '#f0fdfa' : '#f8fafc',
                color: activeSection === link.id ? '#0d9488' : '#334155',
                fontWeight: 600,
                fontSize: '0.95rem',
                textAlign: 'left',
                width: '100%'
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
