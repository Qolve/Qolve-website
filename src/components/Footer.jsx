import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

export default function Footer({ onNavigate, onOpenContact }) {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-400 py-16 text-xs">
      <div className="container-custom space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center font-display font-extrabold text-slate-950 text-sm">
                Q
              </div>
              <span className="font-display font-bold text-lg text-white">Qolve</span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Qolve is a B2B software company based in the UK. We build resilient, fully branded SaaS platforms for growing businesses.
            </p>

            <div className="flex items-center gap-2 text-teal-400 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              <span>Quelp Platform & Helpdesk SaaS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-white uppercase text-xs tracking-wider">Solutions</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('quelp')} className="hover:text-white transition-colors cursor-pointer">Quelp Helpdesk</button></li>
              <li><button onClick={() => onNavigate('solutions')} className="hover:text-white transition-colors cursor-pointer">B2B White-Label</button></li>
              <li><button onClick={() => onNavigate('apps')} className="hover:text-white transition-colors cursor-pointer">Software Ecosystem</button></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-white uppercase text-xs tracking-wider">Platform</h4>
            <ul className="space-y-2">
              <li><button onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-white transition-colors cursor-pointer">Architecture</button></li>
              <li><button onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('quelp')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-white transition-colors cursor-pointer">Quelp Demo</button></li>
              <li><button onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-white transition-colors cursor-pointer">Team & Leadership</button></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-white uppercase text-xs tracking-wider">Connect & Access</h4>
            <p className="text-slate-400">
              Inquire about early access, custom white-label software builds, or strategic B2B partnerships.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="btn-primary py-2 px-4 text-xs"
              >
                Contact Qolve Team <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Qolve Solutions Ltd. All rights reserved. United Kingdom.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Qolve/Qolve-website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors flex items-center gap-1"
            >
              <Github size={14} /> GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
