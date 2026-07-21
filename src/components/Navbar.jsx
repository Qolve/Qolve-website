import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ChevronDown, Menu, X, Cpu, Users, Target, Info, Sparkles, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const MORE_LINKS = [
    {
      href: '#services',
      icon: Cpu,
      title: 'Services Matrix',
      description: 'Distributed systems, data pipelines & telemetry.'
    },
    {
      href: '#about',
      icon: Info,
      title: 'About Qolve',
      description: 'Our engineering philosophy and operational standards.'
    },
    {
      href: '#team',
      icon: Users,
      title: 'Leadership & Engineering',
      description: 'Meet the team building high-throughput systems.'
    },
    {
      href: '#focus',
      icon: Target,
      title: 'Core Focus Areas',
      description: 'Architectural reliability, security & UX craft.'
    }
  ];

  return (
    <header className="relative z-50 w-full pt-6 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#0b1120] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <Zap className="w-5 h-5 fill-current text-[#c6f529]" />
          </div>
          <span className="font-heading text-2xl font-black tracking-tight text-[#0b1120]">
            Qolve
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-extrabold tracking-wider text-slate-800 uppercase">
          <a href="#home" className="hover:text-[#0b1120] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0b1120] hover:after:w-full after:transition-all">
            Home
          </a>
          <a href="#services" className="hover:text-[#0b1120] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0b1120] hover:after:w-full after:transition-all">
            Services
          </a>
          <a href="#about" className="hover:text-[#0b1120] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0b1120] hover:after:w-full after:transition-all">
            About Us
          </a>

          {/* More Links Interactive Popover Dropdown */}
          <div 
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 py-1 text-xs font-extrabold tracking-wider text-slate-800 uppercase hover:text-[#0b1120] transition-colors focus:outline-none cursor-pointer"
              aria-expanded={dropdownOpen}
            >
              <span>More Links</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-[#0b1120]' : ''}`} />
            </button>

            {/* Dropdown Popover */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white/95 backdrop-blur-xl rounded-2xl p-3 shadow-2xl border border-slate-200/90 ring-1 ring-black/5 z-50 text-left normal-case"
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-t border-l border-slate-200/90" />
                  
                  <div className="px-3 pt-2 pb-1.5 text-[10px] font-mono-code font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 flex items-center justify-between">
                    <span>Navigation Index</span>
                    <Sparkles className="w-3 h-3 text-[#c6f529] fill-[#c6f529]" />
                  </div>

                  <div className="mt-1 space-y-1">
                    {MORE_LINKS.map((link, idx) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={idx}
                          href={link.href}
                          onClick={() => setDropdownOpen(false)}
                          className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#f2f8fc] transition-colors"
                        >
                          <div className="p-2 rounded-lg bg-slate-100 text-[#0b1120] group-hover:bg-[#0b1120] group-hover:text-[#c6f529] transition-colors shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-heading text-xs font-bold text-[#0b1120] flex items-center gap-1 group-hover:text-[#0b1120]">
                              {link.title}
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#0b1120]" />
                            </div>
                            <p className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                              {link.description}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>

                  <div className="mt-2 pt-2 border-t border-slate-100 px-2 text-center">
                    <button
                      onClick={() => { setDropdownOpen(false); onOpenContact(); }}
                      className="w-full py-1.5 text-[11px] font-bold text-[#0b1120] bg-[#c6f529] hover:bg-[#d3fb49] rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Consult With Engineering</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={onOpenContact}
            className="btn-lime uppercase text-xs tracking-wider cursor-pointer"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-800 hover:bg-white/40 focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden mt-4 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/60 space-y-4"
          >
            <div className="flex flex-col gap-3 text-xs font-bold uppercase tracking-wider text-slate-800">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 flex items-center justify-between">
                <span>Home</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 flex items-center justify-between">
                <span>Services</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 flex items-center justify-between">
                <span>About Us</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
              <a href="#team" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 flex items-center justify-between">
                <span>Team</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
              <a href="#focus" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 flex items-center justify-between">
                <span>Focus Areas</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full btn-lime text-center justify-center uppercase text-xs py-3 mt-2 cursor-pointer"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

