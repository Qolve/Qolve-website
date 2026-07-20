import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar({ activePage, onNavigate }) {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'About',       action: () => { onNavigate('home'); setTimeout(() => { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }, 200); } },
    { label: 'Quelp',       action: () => onNavigate('quelp'), page: 'quelp', highlight: true },
    { label: 'Applications',action: () => onNavigate('apps'),  page: 'apps'  },
    { label: 'Team',        action: () => { onNavigate('home'); setTimeout(() => { document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' }); }, 200); } },
    { label: 'Beliefs',     action: () => { onNavigate('home'); setTimeout(() => { document.getElementById('beliefs')?.scrollIntoView({ behavior: 'smooth' }); }, 200); } },
  ];

  return (
    <>
      <header
        className="fixed z-50"
        style={{
          top: 0, left: 0, right: 0,
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(8,13,16,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        }}
      >
        <div className="container" style={{ height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <button onClick={() => onNavigate('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
            <div style={{
              width: 32, height: 32,
              background: 'linear-gradient(135deg, var(--teal), var(--teal-deep))',
              borderRadius: 9,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 16, color: 'white',
            }}>Q</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, letterSpacing: '-0.02em', color: 'var(--text-1)' }}>Qolve</div>
          </button>

          {/* Desktop Nav */}
          <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={link.action}
                style={{
                  padding: '6px 14px',
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  color: link.highlight
                    ? 'var(--text-teal)'
                    : activePage === link.page
                    ? 'var(--text-1)'
                    : 'var(--text-3)',
                  background: activePage === link.page ? 'rgba(255,255,255,0.06)' : 'transparent',
                  border: link.highlight ? '1px solid rgba(0,161,157,0.25)' : '1px solid transparent',
                  display: 'flex', alignItems: 'center', gap: 5,
                }}
                onMouseEnter={e => { e.currentTarget.style.color = link.highlight ? 'var(--text-teal)' : 'var(--text-1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = link.highlight ? 'var(--text-teal)' : activePage === link.page ? 'var(--text-1)' : 'var(--text-3)'; e.currentTarget.style.background = activePage === link.page ? 'rgba(255,255,255,0.06)' : 'transparent'; }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              onClick={() => onNavigate('quelp')}
              className="btn-primary"
              style={{ padding: '9px 20px', fontSize: 13 }}
            >
              View Quelp
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="show-mobile-only"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ padding: 8, color: 'var(--text-2)', cursor: 'pointer' }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="show-mobile-only fixed z-50"
          style={{
            top: 68, left: 0, right: 0, bottom: 0,
            background: 'rgba(8,13,16,0.97)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid var(--border-mid)',
            padding: 24,
            display: 'flex', flexDirection: 'column', gap: 8,
            animation: 'fadeIn 0.2s ease',
          }}
        >
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => { link.action(); setMobileOpen(false); }}
              style={{
                padding: '16px 0',
                textAlign: 'left',
                fontSize: 18,
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                color: link.highlight ? 'var(--text-teal)' : 'var(--text-1)',
                borderBottom: '1px solid var(--border-sub)',
                display: 'flex', alignItems: 'center', gap: 8,
                cursor: 'pointer',
              }}
            >
              {link.label}
            </button>
          ))}
          <div style={{ marginTop: 24 }}>
            <button
              onClick={() => { onNavigate('quelp'); setMobileOpen(false); }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              View Quelp <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
