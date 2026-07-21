import React, { useState } from 'react';
import { Sparkles, ArrowRight, Menu, X, Shield, Mail, Layers } from 'lucide-react';

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
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold tracking-tight text-slate-900 leading-none">
                  Qolve
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-teal-600 uppercase mt-0.5">
                  Quelp Platform
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#product" className="hover:text-teal-600 transition-colors">Product</a>
            <a href="#demo" className="hover:text-teal-600 transition-colors">Interactive Demo</a>
            <a href="#roadmap" className="hover:text-teal-600 transition-colors">Roadmap</a>
            <a href="#features" className="hover:text-teal-600 transition-colors">Features</a>
            <a href="#team" className="hover:text-teal-600 transition-colors">Team</a>
            <a href="#pricing" className="hover:text-teal-600 transition-colors">Pricing</a>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={onOpenContact} 
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-teal-700 transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={onOpenContact}
              className="btn-teal text-sm py-2.5 px-5 rounded-xl shadow-md shadow-teal-600/20 hover:shadow-teal-600/30 transition-all flex items-center gap-2"
            >
              Request Access
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
            <a 
              href="#product" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-teal-600"
            >
              Product
            </a>
            <a 
              href="#demo" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-teal-600"
            >
              Interactive Demo
            </a>
            <a 
              href="#roadmap" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-teal-600"
            >
              Roadmap
            </a>
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-teal-600"
            >
              Features
            </a>
            <a 
              href="#team" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-teal-600"
            >
              Team
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-teal-600"
            >
              Pricing
            </a>
          </div>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full btn-teal py-3 text-center justify-center"
            >
              Request Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
