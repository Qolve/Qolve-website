import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activePage, onNavigate, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Overview', page: 'home', action: () => onNavigate('home') },
    { label: 'Quelp Platform', page: 'quelp', action: () => onNavigate('quelp'), highlight: true },
    { label: 'B2B Solutions', page: 'solutions', action: () => onNavigate('solutions') },
    { label: 'Applications', page: 'apps', action: () => onNavigate('apps') },
    { label: 'Architecture', action: () => { onNavigate('home'); setTimeout(() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    { label: 'Team', action: () => { onNavigate('home'); setTimeout(() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' }), 100); } }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-teal-500 text-slate-950 font-display font-black text-base flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
              Q
            </div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-base text-white tracking-tight">Qolve</span>
              <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                B2B Systems
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hide-mobile flex items-center gap-1 bg-slate-900/80 px-2 py-1.5 rounded-full border border-white/10">
            {navItems.map((item) => {
              const isActive = activePage === item.page;
              return (
                <button
                  key={item.label}
                  onClick={item.action}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    item.highlight
                      ? 'bg-teal-500/15 text-teal-300 border border-teal-500/40 hover:bg-teal-500/25'
                      : isActive
                      ? 'bg-white/10 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hide-mobile flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="btn-primary text-xs py-2 px-4"
            >
              Request Access <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile Burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="show-mobile-only p-2 text-slate-400 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="show-mobile-only fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between">
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  item.action();
                  setMobileOpen(false);
                }}
                className="w-full text-left py-3 px-4 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 border-b border-white/5 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight size={14} className="text-slate-500" />
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10">
            <button
              onClick={() => {
                onOpenContact();
                setMobileOpen(false);
              }}
              className="btn-primary w-full justify-center py-3 text-sm"
            >
              Request Access <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
