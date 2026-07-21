import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Sparkles, Command } from 'lucide-react';

export default function Navbar({ activePage, onNavigate, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', page: 'home', action: () => onNavigate('home') },
    { label: 'Quelp', page: 'quelp', action: () => onNavigate('quelp'), highlight: true },
    { label: 'B2B Solutions', page: 'solutions', action: () => onNavigate('solutions') },
    { label: 'Applications', page: 'apps', action: () => onNavigate('apps') },
    { label: 'Architecture', action: () => { onNavigate('home'); setTimeout(() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' }), 150); } },
    { label: 'Team', action: () => { onNavigate('home'); setTimeout(() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' }), 150); } },
    { label: 'Roadmap', action: () => { onNavigate('home'); setTimeout(() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' }), 150); } },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(7, 10, 14, 0.92)' : 'rgba(7, 10, 14, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        }}
      >
        <div className="container-custom h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-teal-700 flex items-center justify-center font-display font-extrabold text-xl text-slate-950 shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
              Q
            </div>
            <div>
              <div className="font-display font-bold text-lg text-white tracking-tight leading-tight flex items-center gap-1.5">
                Qolve <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-teal-500/10 border border-teal-500/30 text-teal-300">B2B</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">White-Label Systems</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hide-mobile flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-xl border border-slate-800/80">
            {navLinks.map((link) => {
              const isActive = activePage === link.page;
              return (
                <button
                  key={link.label}
                  onClick={link.action}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    link.highlight
                      ? 'bg-teal-500/10 text-teal-300 border border-teal-500/30 hover:bg-teal-500/20'
                      : isActive
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hide-mobile flex items-center gap-3">
            <button
              onClick={() => onNavigate('quelp')}
              className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 transition-colors cursor-pointer"
            >
              Explore Quelp
            </button>
            <button
              onClick={onOpenContact}
              className="btn-primary py-2 px-4 text-xs"
            >
              Request Access <ChevronRight size={14} />
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="show-mobile-only p-2 text-slate-300 hover:text-white cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="show-mobile-only fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between animate-fadeIn">
          <div className="space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  link.action();
                  setMobileOpen(false);
                }}
                className="w-full text-left py-3 px-4 rounded-xl text-lg font-display font-semibold text-slate-200 hover:text-white hover:bg-slate-900 border-b border-slate-800/60 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight size={16} className="text-slate-500" />
              </button>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t border-slate-800">
            <button
              onClick={() => {
                onOpenContact();
                setMobileOpen(false);
              }}
              className="btn-primary w-full justify-center py-3 text-sm"
            >
              Request Early Access <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
