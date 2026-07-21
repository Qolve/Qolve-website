import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="bg-[#0b1120] text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#c6f529] text-[#0b1120] flex items-center justify-center font-bold">
                <Zap className="w-4 h-4 fill-current text-[#0b1120]" />
              </div>
              <span className="font-heading text-2xl font-black text-white">Qolve</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Engineering High-Throughput Software & Data Systems. Architecting fault-tolerant distributed infrastructure, low-latency analytics pipelines, and resilient cloud platforms.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-[11px] font-mono-code">Navigation</h4>
            <ul className="space-y-2.5 font-medium">
              <li><a href="#home" className="hover:text-[#c6f529] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#c6f529] transition-colors">Services Matrix</a></li>
              <li><a href="#focus" className="hover:text-[#c6f529] transition-colors">Core Focus Areas</a></li>
              <li><a href="#about" className="hover:text-[#c6f529] transition-colors">About Qolve</a></li>
              <li><a href="#team" className="hover:text-[#c6f529] transition-colors">Leadership & Engineering</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-widest text-[11px] font-mono-code">Systems Evaluation</h4>
            <p className="text-slate-400 text-[11px]">Partner with our systems engineers for low-latency architecture evaluations.</p>
            <button 
              onClick={onOpenContact}
              className="btn-lime uppercase text-xs cursor-pointer"
            >
              <span>Consult Engineering</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono-code">
          <div>© {new Date().getFullYear()} Qolve Engineering Lab. All rights reserved.</div>
          <div className="flex gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Security Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Operation</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

