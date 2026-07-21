import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Zap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#f2f8fc] border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-slate-500 bg-white px-3.5 py-1.5 rounded-full border border-slate-200">
              About Qolve
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight leading-tight">
              A Specialized Technology Lab Driven by Precision
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Qolve brings together strategy, engineering, and visual design to build software products that create long-term business value. We partner with forward-thinking organizations to turn vision into scalable technology.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-800 font-semibold">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0f172a] shrink-0" />
                <span>Dedicated strategy aligned with organizational goals.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0f172a] shrink-0" />
                <span>Modern component architecture built for speed and security.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0f172a] shrink-0" />
                <span>Clear metrics and data-driven insights at every phase.</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link to="/about" className="btn-figma-dark uppercase text-xs">
                <span>Learn More About Us</span>
              </Link>
              <Link to="/contact" className="btn-figma-lime uppercase text-xs">
                <span>Contact Team</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Box */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0f172a] text-white flex items-center justify-center font-bold">
                <Zap className="w-5 h-5 text-[#c6f529]" />
              </div>
              <span className="font-heading text-xl font-bold text-[#0f172a]">Qolve Principles</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 bg-[#f2f8fc] rounded-2xl border border-slate-200">
                <span className="font-bold text-[#0f172a] block mb-1">Clear Execution</span>
                <span className="text-slate-600">No jargon or corporate fluff. We deliver clean, working code.</span>
              </div>
              <div className="p-4 bg-[#f2f8fc] rounded-2xl border border-slate-200">
                <span className="font-bold text-[#0f172a] block mb-1">Human-Centered Design</span>
                <span className="text-slate-600">Software designed around real user needs and intuitive workflows.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
