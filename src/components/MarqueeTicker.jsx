import React from 'react';
import { Shield, Sparkles, Zap, Lock, Database, Cpu, CheckCircle } from 'lucide-react';

export default function MarqueeTicker() {
  const items = [
    { icon: Lock, label: "100% White-Labeled Software" },
    { icon: Shield, label: "Safe Human Handoff Guardrails" },
    { icon: Zap, label: "Direct LLM Pass-Through Billing (+15%)" },
    { icon: Database, label: "Tenant-Isolated PostgreSQL Schema" },
    { icon: Cpu, label: "Helpdesk-First Architecture" },
    { icon: CheckCircle, label: "Custom Domains & DKIM Identities" },
    { icon: Sparkles, label: "Grounded Knowledge Retrieval" },
  ];

  return (
    <div className="py-6 bg-slate-950/90 border-y border-white/10 overflow-hidden relative">
      {/* Edge Gradient Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

      <div className="animate-marquee flex items-center gap-8">
        {[...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/60 border border-white/5 whitespace-nowrap text-xs font-mono text-slate-300 hover:border-teal-500/40 hover:text-teal-300 transition-colors"
            >
              <Icon size={14} className="text-teal-400 shrink-0" />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
