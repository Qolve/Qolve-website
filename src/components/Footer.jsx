import React from 'react';
import { Sparkles, Mail, ShieldCheck, Github } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-heading text-xl font-bold text-white">Qolve</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Qolve builds Quelp — the white-label B2B customer support & helpdesk automation platform.
            </p>
            <div className="text-xs font-mono text-teal-400">
              qolve.systems
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">Product & Platform</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#product" className="hover:text-white transition-colors">Quelp Helpdesk</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Interactive Demo</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">White-Label CNAME</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Flat Rate Pricing</a></li>
            </ul>
          </div>

          {/* Roadmap & Tech */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">Engineering</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#roadmap" className="hover:text-white transition-colors">Product Roadmap</a></li>
              <li><span className="text-slate-500">Stalwart Mail Relay</span></li>
              <li><span className="text-slate-500">AWS SES Integration</span></li>
              <li><span className="text-slate-500">React 18 & TypeScript</span></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">Contact & Support</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <span>support@qolve.systems</span>
              </li>
              <li className="pt-2">
                <button 
                  onClick={onOpenContact} 
                  className="btn-teal py-2 px-4 text-xs"
                >
                  Schedule Technical Demo
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Qolve Technologies Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
