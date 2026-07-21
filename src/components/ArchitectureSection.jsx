import React, { useState } from 'react';
import { Cpu, ShieldCheck, Lock, Layers, CheckCircle2, RefreshCw, Terminal, Database } from 'lucide-react';

export default function ArchitectureSection() {
  const [activeTab, setActiveTab] = useState('reliability');

  const principles = [
    {
      id: 'reliability',
      title: 'Helpdesk First, AI Second',
      tagline: 'Zero Outage Risk',
      description: 'Core ticket creation, threaded email replies, assignment, custom tags, and reporting operate 100% reliably even if third-party LLM APIs experience outages.',
      points: [
        'Deterministic message parsing & queue fallbacks',
        'Independent PostgreSQL search indexing',
        'Offline-capable transactional email sync',
        'Graceful degraded operation without data loss'
      ]
    },
    {
      id: 'escalation',
      title: 'Safe Human Handoff & Guardrails',
      tagline: 'Zero Hallucinations',
      description: 'Quelp rejects argumentative AI loops. If the system encounters low confidence scores or unverified intent, it transfers the thread instantly to a human agent.',
      points: [
        'Instant human escalation on low-confidence topics',
        'Prompt-injection & jailbreak shields',
        'No autonomous refunds or unverified account modifications',
        'Full audit logging of every prompt, context source & output'
      ]
    },
    {
      id: 'multitenant',
      title: 'White-Label Architecture',
      tagline: 'Deep Multi-Tenancy',
      description: 'White labelling is engineered into the database and routing layers from day one—not just changing a CSS color variable on a shared widget.',
      points: [
        'Tenant-isolated database relationships (`workspace_id`)',
        'Custom support subdomains & automated TLS certificate provisioning',
        'Custom transactional email headers & DKIM/SPF identities',
        'Complete removal of Qolve branding on white-label plans'
      ]
    },
    {
      id: 'monolith',
      title: 'Modular Monolith Engine',
      tagline: 'High Performance',
      description: 'Engineered as a clean modular monolith to eliminate microservice overhead while preserving strict module boundaries across Identity, Ticketing, AI Orchestration, and Analytics.',
      points: [
        'TypeScript / React + NestJS + PostgreSQL stack',
        'Redis-backed background job queue for async processing',
        'S3-compatible object storage for secure attachments',
        'Low-overhead deployment for predictable cloud costs'
      ]
    }
  ];

  const current = principles.find(p => p.id === activeTab) || principles[0];

  return (
    <section id="architecture" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="badge-pill inline-flex items-center gap-1.5">
              <Cpu size={14} /> Engineering Philosophy
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight">
              Built with Engineering Discipline
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-lg">
            We don’t build fragile wrappers. We build resilient, white-label enterprise software engineered for predictable cost and 99.9% uptime.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {principles.map((p) => {
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`p-4 rounded-xl text-left transition-all border cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 border-teal-500/50 text-white shadow-lg'
                    : 'bg-slate-900/40 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-slate-900/80'
                }`}
              >
                <div className="font-display font-semibold text-xs text-white">{p.title}</div>
                <div className="text-[11px] text-teal-400 font-mono mt-0.5">{p.tagline}</div>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel */}
        <div className="bento-card-accent p-6 md:p-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">
                {current.tagline}
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                {current.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {current.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {current.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 size={14} className="text-teal-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Verification Box */}
            <div className="lg:col-span-5 bg-slate-950/90 border border-white/10 rounded-xl p-5 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 text-slate-400">
                <span className="flex items-center gap-1.5 text-white">
                  <Database size={14} className="text-teal-400" /> Verification Log
                </span>
                <span className="text-emerald-400 text-[10px] bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  PASSED
                </span>
              </div>

              <div className="space-y-1.5 text-[11px] text-slate-400">
                <div className="text-slate-500">// System Execution Test</div>
                <div className="text-teal-300">[10:34:02] Inbound: ticket_create(ws_8812)</div>
                <div>[10:34:02] Multi-Tenant Boundary: OK (Isolated)</div>
                <div>[10:34:03] Flowchart Intent Router: Category="Order Inquiry"</div>
                <div>[10:34:03] AI Guardrail: Confidence = 0.96 (Grounded)</div>
                <div className="text-emerald-400">[10:34:03] Action: Draft reply attached + KB-104</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
