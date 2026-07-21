import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Cpu, Server, Code } from 'lucide-react';

export default function AboutSection({ onOpenContact }) {
  return (
    <section id="about" className="py-24 bg-[#f2f8fc] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Information */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#0b1120] bg-white px-3.5 py-1.5 rounded-full border border-slate-200 inline-flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#c6f529] fill-[#0b1120]" />
              Engineering Standard
            </span>

            <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#0b1120] tracking-tight leading-tight">
              A Specialized Technology Lab Driven by Precision
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Qolve brings together systems architecture, high-frequency data pipelines, and product craft to build fault-tolerant software systems. We partner with technology leaders to design and deploy resilient digital infrastructure built for long-term reliability.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-800 font-semibold">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0b1120] shrink-0" />
                <span>Deterministic software architecture aligned with operational goals.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0b1120] shrink-0" />
                <span>Modern concurrency patterns built for low latency and high concurrency.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0b1120] shrink-0" />
                <span>Real-time telemetry and cryptographic audit trails at every phase.</span>
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={onOpenContact} 
                className="btn-dark uppercase text-xs tracking-wider cursor-pointer"
              >
                Contact Systems Team
              </button>
            </div>
          </div>

          {/* Right Column: Visual Box */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200/90 shadow-2xl space-y-6 spring-hover">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0b1120] text-white flex items-center justify-center font-bold shadow-md">
                <Zap className="w-5 h-5 text-[#c6f529] fill-[#c6f529]" />
              </div>
              <span className="font-heading text-xl font-bold text-[#0b1120]">Qolve Principles</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 bg-[#f2f8fc] rounded-2xl border border-slate-200/80">
                <span className="font-bold text-[#0b1120] block mb-1 flex items-center gap-1.5">
                  <Code className="w-4 h-4 text-slate-700" /> Clear Execution
                </span>
                <span className="text-slate-600">No corporate fluff or abstraction bloat. We write clean, deterministic code.</span>
              </div>

              <div className="p-4 bg-[#f2f8fc] rounded-2xl border border-slate-200/80">
                <span className="font-bold text-[#0b1120] block mb-1 flex items-center gap-1.5">
                  <Server className="w-4 h-4 text-slate-700" /> Human-Centered Engineering
                </span>
                <span className="text-slate-600">Software designed around intuitive developer workflows and operational clarity.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

