import React from 'react';
import { Zap } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="bg-[#0b1120] text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white text-[#0b1120] flex items-center justify-center font-bold">
                <Zap className="w-4 h-4 fill-current text-[#0b1120]" />
              </div>
              <span className="font-heading text-2xl font-black text-white">Qolve</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Building the future with AI and strategy. Unlocking growth and efficiency through data-driven consulting and intelligent software.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-[11px]">Navigation</h4>
            <ul className="space-y-2 font-medium">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-[11px]">Contact</h4>
            <button 
              onClick={onOpenContact}
              className="btn-lime uppercase text-xs"
            >
              Get Started
            </button>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>© {new Date().getFullYear()} Qolve. All rights reserved.</div>
          <div className="flex gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
