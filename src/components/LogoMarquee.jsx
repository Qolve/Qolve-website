import React from 'react';
import { Cpu, Server, Database, Globe, Layers, Zap } from 'lucide-react';

const LOGOS = [
  { name: 'HyperScale AI', icon: Cpu },
  { name: 'CloudLogic', icon: Server },
  { name: 'DataPrime', icon: Database },
  { name: 'GlobalNexus', icon: Globe },
  { name: 'AetherData', icon: Layers },
  { name: 'Qolve Systems', icon: Zap }
];

export default function LogoMarquee() {
  return (
    <section className="py-10 bg-white/60 backdrop-blur-md border-y border-slate-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden relative">
        {/* Gradient Fades on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/90 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-16">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => {
            const Icon = logo.icon;
            return (
              <div key={idx} className="flex items-center gap-3 shrink-0 text-slate-500 hover:text-[#0f172a] transition-colors cursor-pointer opacity-70 hover:opacity-100">
                <Icon className="w-5 h-5" />
                <span className="font-heading font-extrabold text-sm tracking-tight">
                  {logo.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
