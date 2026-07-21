import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Sparkles, Layers, ArrowUpRight, Target, Zap } from 'lucide-react';

const FOCUS_AREAS = [
  {
    icon: Cpu,
    title: 'High-Throughput Systems Engineering',
    description: 'Building low-latency software architectures and concurrent distributed workloads with zero-copy deserialization.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Reliability & Infrastructure',
    description: 'Ensuring zero-downtime availability, eBPF-driven kernel monitoring, and multi-region failover protocols.'
  },
  {
    icon: Layers,
    title: 'Tactile Interface & Developer Tooling',
    description: 'Crafting responsive, accessible web portals and micro-interaction visual dashboards for complex operational tools.'
  }
];

export default function FocusSection() {
  return (
    <section id="focus" className="py-24 bg-[#0b1120] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#c6f529] bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800 inline-flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-[#c6f529]" />
            Core Discipline
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            Our Primary Engineering Focus
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We focus on core technical fundamentals that drive meaningful system performance and operational reliability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FOCUS_AREAS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#131b2e] p-8 rounded-3xl border border-slate-800 hover:border-[#c6f529]/40 transition-all spring-hover flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0b1120] border border-slate-700 text-[#c6f529] flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-[#c6f529] font-mono-code font-bold">
                  <span>Qolve Engineering Standard</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

