import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#0f172a] bg-[#c6f529] px-4 py-1.5 rounded-full font-black shadow-sm transition-all"
      : "text-slate-800 hover:text-black hover:bg-white/50 px-4 py-1.5 rounded-full transition-all";

  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? "py-2.5 px-4 rounded-xl bg-[#c6f529] text-[#0f172a] font-black"
      : "py-2.5 px-4 rounded-xl text-slate-800 hover:bg-slate-100 font-bold";

  return (
    <header className="relative z-50 w-full pt-8 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        
        {/* Brand Logo from Figma */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f172a] rounded-xl p-1"
          aria-label="Qolve Home"
        >
          <div className="w-10 h-10 rounded-xl bg-[#0f172a] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 fill-current text-white" />
          </div>
          <span className="font-heading text-2xl font-black tracking-tight text-[#0f172a]">
            Qolve
          </span>
        </Link>

        {/* Center Nav Links using react-router-dom */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-2 text-[11px] font-extrabold tracking-widest uppercase">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Right CTA Button from Figma (#c6f529) */}
        <div className="hidden md:flex items-center gap-3">
          <Link 
            to="/contact"
            className="btn-figma-lime uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#c6f529]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg text-slate-800 hover:bg-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f172a]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white/95 backdrop-blur-lg rounded-2xl p-6 space-y-4 shadow-xl border border-white/60 animate-fade-in">
          <div className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
            <NavLink to="/" end onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
              Home
            </NavLink>
            <NavLink to="/services" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
              Services
            </NavLink>
            <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
              Contact
            </NavLink>
          </div>
          <Link 
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full btn-figma-lime text-center justify-center uppercase text-xs py-3"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
