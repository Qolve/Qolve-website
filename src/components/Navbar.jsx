import React, { useState } from 'react';
import { Zap, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full pt-6 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#0b1120] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 fill-current text-white" />
          </div>
          <span className="font-heading text-2xl font-black tracking-tight text-[#0b1120]">
            Qolve
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-extrabold tracking-wider text-slate-800 uppercase">
          <a href="#home" className="hover:text-black transition-colors">Home</a>
          <a href="#services" className="hover:text-black transition-colors">Services</a>
          <a href="#about" className="hover:text-black transition-colors">About Us</a>
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-black">
            <span>More Links</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={onOpenContact}
            className="btn-lime uppercase text-xs tracking-wider"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-800 hover:bg-white/40"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white/90 backdrop-blur-lg rounded-2xl p-6 space-y-4 shadow-xl border border-white/60">
          <div className="flex flex-col gap-3 text-xs font-bold uppercase tracking-wider text-slate-800">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="py-2">Home</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2">Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2">About Us</a>
          </div>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
            className="w-full btn-lime text-center justify-center uppercase text-xs py-3"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
