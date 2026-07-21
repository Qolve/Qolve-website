import React, { useState } from 'react';
import { Sparkles, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight text-slate-900 leading-none">
                Qolve
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#vision" className="hover:text-teal-600 transition-colors">Vision</a>
            <a href="#focus" className="hover:text-teal-600 transition-colors">Focus Areas</a>
            <a href="#team" className="hover:text-teal-600 transition-colors">Team</a>
            <a href="#contact" onClick={onOpenContact} className="hover:text-teal-600 transition-colors">Get in Touch</a>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={onOpenContact}
              className="btn-teal text-sm py-2.5 px-5 rounded-xl shadow-md shadow-teal-600/20 hover:shadow-teal-600/30 transition-all flex items-center gap-2"
            >
              Contact Qolve
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-lg">
          <div className="flex flex-col gap-3 font-medium text-slate-700">
            <a href="#vision" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-teal-600">Vision</a>
            <a href="#focus" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-teal-600">Focus Areas</a>
            <a href="#team" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-teal-600">Team</a>
          </div>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full btn-teal py-3 text-center justify-center"
            >
              Contact Qolve
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
