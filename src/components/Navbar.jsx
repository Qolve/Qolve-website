import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  Menu, 
  X, 
  Zap, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  BarChart3,
  Command
} from 'lucide-react';

export default function Navbar({ activeSection, onNavigate, onOpenSearch, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'products', label: 'Platform & AI', icon: Cpu },
    { id: 'sandbox', label: 'Interactive Demo', icon: Zap },
    { id: 'roi', label: 'ROI Calculator', icon: BarChart3 },
    { id: 'ecosystem', label: 'Integrations', icon: Layers },
    { id: 'about', label: 'Team & Values', icon: ShieldCheck },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255, 255, 255, 0.88)' : 'rgba(240, 253, 250, 0.6)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(13, 148, 136, 0.15)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(13, 148, 136, 0.08)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); onNavigate('hero'); }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
        >
          <div 
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #06b6d4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(13, 148, 136, 0.35)',
              position: 'relative'
            }}
          >
            <Sparkles size={22} color="#ffffff" />
            <span 
              style={{ 
                position: 'absolute', 
                top: '-3px', 
                right: '-3px', 
                width: '10px', 
                height: '10px', 
                borderRadius: '50%', 
                background: '#ff5252',
                border: '2px solid white'
              }} 
            />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.45rem', letterSpacing: '-0.03em', color: '#042f2e', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              Qolve
              <span style={{ fontSize: '0.65rem', padding: '0.15rem 0.45rem', borderRadius: '12px', background: 'rgba(20, 184, 166, 0.15)', color: '#0d9488', fontWeight: 700 }}>v2.4</span>
            </div>
            <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 500, marginTop: '-2px' }}>AI Operations Engine</div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '0.5rem' }} className="md:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                style={{
                  padding: '0.55rem 1rem',
                  borderRadius: '10px',
                  border: 'none',
                  background: isActive ? 'rgba(20, 184, 166, 0.12)' : 'transparent',
                  color: isActive ? '#0d9488' : '#334155',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.background = 'rgba(20, 184, 166, 0.06)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.background = 'transparent';
                }}
              >
                <Icon size={16} color={isActive ? '#0d9488' : '#64748b'} />
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          
          {/* Quick Search Palette Trigger */}
          <button
            onClick={onOpenSearch}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 0.85rem',
              borderRadius: '10px',
              border: '1px solid rgba(13, 148, 136, 0.2)',
              background: '#ffffff',
              color: '#64748b',
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            title="Search Platform (Ctrl+K)"
          >
            <Search size={16} color="#0d9488" />
            <span className="hidden lg:inline" style={{ fontSize: '0.8rem' }}>Search</span>
            <kbd style={{ fontSize: '0.65rem', padding: '0.15rem 0.35rem', background: '#f1f5f9', borderRadius: '4px', border: '1px solid #cbd5e1', display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
              <Command size={10} /> K
            </kbd>
          </button>

          {/* Launch Demo / Contact CTA */}
          <button
            onClick={onOpenContact}
            className="btn-primary"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.88rem' }}
          >
            <span>Book Live Demo</span>
            <ArrowRight size={16} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              padding: '0.5rem',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              background: '#ffffff',
              cursor: 'pointer'
            }}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X size={20} color="#0d9488" /> : <Menu size={20} color="#0d9488" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          style={{
            background: '#ffffff',
            borderBottom: '1px solid rgba(13, 148, 136, 0.15)',
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}
          className="md:hidden"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: 'none',
                  background: activeSection === link.id ? 'rgba(20, 184, 166, 0.1)' : '#f8fafc',
                  color: activeSection === link.id ? '#0d9488' : '#334155',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textAlign: 'left',
                  width: '100%'
                }}
              >
                <Icon size={18} color="#0d9488" />
                {link.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
