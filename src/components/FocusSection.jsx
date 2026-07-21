import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Sparkles, Layers, ArrowUpRight } from 'lucide-react';

const FOCUS_AREAS = [
  {
    icon: Cpu,
    title: 'Intelligent Software Engineering',
    description: 'Building robust, modern software architectures that solve complex operational problems with precision and clarity.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Reliability & Security',
    description: 'Ensuring data integrity, strict security standards, and resilient infrastructure for mission-critical operations.'
  },
  {
    icon: Layers,
    title: 'User Experience & Interface Craft',
    description: 'Crafting clean, accessible, and responsive visual interfaces designed to enhance productivity and user engagement.'
  }
];

export default function FocusSection() {
  return (
    <section id="focus" className="py-24 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Discipline</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Key Focus Areas
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            We focus on core fundamentals that drive meaningful technology outcomes.
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
                className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-teal-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-950 border border-teal-800 text-teal-400 flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-teal-400 font-semibold">
                  <span>Qolve Engineering Standard</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
