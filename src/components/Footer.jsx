import React from 'react';
import { Sparkles, Mail } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-heading text-xl font-bold text-white">Qolve</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Engineering intelligent software solutions and modern B2B technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#vision" className="hover:text-white transition-colors">Company Vision</a></li>
              <li><a href="#focus" className="hover:text-white transition-colors">Core Focus Areas</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Leadership Team</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-3 text-xs">
              <li>
                <button 
                  onClick={onOpenContact} 
                  className="btn-teal py-2 px-4 text-xs"
                >
                  Contact Qolve
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Qolve. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
