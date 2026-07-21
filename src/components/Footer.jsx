import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg p-1 w-fit">
              <div className="w-8 h-8 rounded-lg bg-white text-[#0f172a] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                <Zap className="w-4 h-4 fill-current text-[#0f172a]" />
              </div>
              <span className="font-heading text-2xl font-black text-white">Qolve</span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Building the future with AI and strategy. Unlocking growth and efficiency through data-driven consulting and intelligent software.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-[11px] font-mono-code">Navigation</h4>
            <ul className="space-y-2.5 font-medium text-xs">
              <li><Link to="/" className="hover:text-[#c6f529] transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-[#c6f529] transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-[#c6f529] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#c6f529] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-[11px] font-mono-code">Get Started</h4>
            <p className="text-xs text-slate-400 mb-5 leading-relaxed">
              Ready to transform your technical operations? Connect with our engineering and strategy team today.
            </p>
            <Link 
              to="/contact"
              className="btn-figma-lime uppercase text-xs inline-flex"
            >
              Get Started
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono-code">
          <div>© {new Date().getFullYear()} Qolve. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
