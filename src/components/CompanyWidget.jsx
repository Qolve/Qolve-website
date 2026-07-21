import React from 'react';
import { Server, Database, Code, Terminal, CheckCircle2, Shield, Lock, MapPin, Mail } from 'lucide-react';

export default function CompanyWidget() {
  const stack = [
    { name: 'Frontend', tech: 'React 18 / Vite / TypeScript / Tailwind CSS' },
    { name: 'Backend', tech: 'NestJS / Node.js Modular Monolith' },
    { name: 'Database', tech: 'PostgreSQL Multi-Tenant Schema' },
    { name: 'Job Queue', tech: 'Redis Async Worker Pipeline' },
    { name: 'AI Models', tech: 'DeepSeek / OpenAI Guardrailed API' },
    { name: 'Security', tech: 'SSL / TLS Auto-Provisioning & SPF/DKIM' }
  ];

  return (
    <section className="py-20 bg-slate-950 border-t border-slate-800/80">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Company Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="badge-teal inline-flex items-center gap-1.5">
              <MapPin size={14} /> UK Engineering Base
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">
              Enterprise Technology Stack & Standards
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Qolve is committed to building atomic, maintainable, and reliable software. Every solution we build follows strict unit testing, multi-tenant isolation, and transparent data privacy rules.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 size={18} className="text-teal-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">UK Business Compliance</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 size={18} className="text-teal-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">99.9% Target Uptime SLA</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 size={18} className="text-teal-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">GDPR & Data Privacy</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 size={18} className="text-teal-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Direct Founder Access</span>
              </div>
            </div>
          </div>

          {/* Tech Stack Specs Box */}
          <div className="lg:col-span-6 glass-panel p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-semibold text-teal-400 uppercase tracking-widest flex items-center gap-2">
                <Terminal size={14} /> Qolve Stack Reference
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                V1 Production Spec
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {stack.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded bg-slate-900/50 border border-slate-800/80 gap-1">
                  <span className="text-slate-400 font-semibold">{item.name}:</span>
                  <span className="text-teal-300 text-right">{item.tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
