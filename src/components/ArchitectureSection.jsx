import React, { useState } from 'react';
import { Cpu, ShieldCheck, Database, Layers, ArrowUpRight, Zap, RefreshCw, Lock, CheckCircle2 } from 'lucide-react';

export default function ArchitectureSection() {
  const [activeTab, setActiveTab] = useState('reliability');

  const principles = [
    {
      id: 'reliability',
      title: 'Helpdesk First, AI Second',
      icon: RefreshCw,
      tagline: 'Zero Dependability Risk',
      description: 'Core ticket creation, threaded email replies, assignment, tags, and reporting function 100% reliably even if third-party LLM APIs experience outages.',
      highlights: [
        'Deterministic message parsing & fallback queues',
        'Independent PostgreSQL search indexing',
        'Offline-capable transactional email ingestion',
        'Graceful degraded mode without data loss'
      ]
    },
    {
      id: 'escalation',
      title: 'Safe Human Handoff & Guardrails',
      icon: ShieldCheck,
      tagline: 'Zero Hallucinations or Token Waste',
      description: 'Unlike generic chatbots that argue or loop indefinitely, Quelp uses strict flowchart logic. If the system is uncertain or encounters sensitive cases, it hands off instantly with full context.',
      highlights: [
        'Instant human escalation on low-confidence topics',
        'Robust prompt-injection & jailbreak shields',
        'No autonomous refunds or unverified account modifications',
        'Full audit logging of every prompt, context source & output'
      ]
    },
    {
      id: 'multitenant',
      title: 'White-Label Architecture',
      icon: Lock,
      tagline: 'Deep Multi-Tenancy by Design',
      description: 'White labelling is engineered into the database and routing layer from day one—not just changing a CSS color variable on a shared widget.',
      highlights: [
        'Tenant-isolated database relationships (`workspace_id`)',
        'Custom support subdomains & automated TLS certificate provisioning',
        'Custom transactional email headers & DKIM/SPF identities',
        'Complete removal of Qolve branding on white-label plans'
      ]
    },
    {
      id: 'monolith',
      title: 'Modular Monolith Engine',
      icon: Layers,
      tagline: 'High Performance, Low Operational Complexity',
      description: 'Built as a clean modular monolith to eliminate microservice overhead while maintaining clean code boundaries across Identity, Ticketing, AI Orchestration, and Analytics.',
      highlights: [
        'TypeScript / React + NestJS + PostgreSQL stack',
        'Redis-backed background job queue for async processing',
        'S3-compatible object storage for secure attachments',
        'Low-overhead deployment for predictable cloud costs'
      ]
    }
  ];

  const currentPrinciple = principles.find(p => p.id === activeTab) || principles[0];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="badge-teal mb-3 inline-flex items-center gap-1.5">
              <Cpu size={14} /> Engineering Philosophy
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight">
              Built with Uncompromising B2B Discipline
            </h2>
          </div>
          <p className="text-slate-400 text-base max-w-lg">
            We don’t build fragile AI wrappers. We build resilient, white-label enterprise software engineered for predictable cost and 99.9% uptime.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {principles.map((p) => {
            const Icon = p.icon;
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`p-4 rounded-xl text-left transition-all border ${
                  isActive
                    ? 'bg-slate-900 border-teal-500/60 text-white shadow-lg shadow-teal-500/10'
                    : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900/80'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon size={20} className={isActive ? 'text-teal-400' : 'text-slate-500'} />
                  {isActive && <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>}
                </div>
                <div className="font-display font-semibold text-sm line-clamp-1">{p.title}</div>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5">{p.tagline}</div>
              </button>
            );
          })}
        </div>

        {/* Active Content Panel */}
        <div className="glass-panel-accent p-8 md:p-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
                {currentPrinciple.tagline}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold font-display text-white">
                {currentPrinciple.title}
              </h3>
              
              <p className="text-slate-300 text-base leading-relaxed">
                {currentPrinciple.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentPrinciple.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-teal-400 shrink-0 mt-1" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Architecture Schematic Box */}
            <div className="lg:col-span-5 bg-slate-950/90 border border-slate-800 rounded-xl p-6 font-mono text-xs text-slate-300 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-slate-400">
                <span className="flex items-center gap-2">
                  <Database size={14} className="text-teal-400" /> System Verification Log
                </span>
                <span className="text-teal-400 text-[10px] bg-teal-950 px-2 py-0.5 rounded border border-teal-800">
                  PASSED
                </span>
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="text-slate-500">// Execution Flow Validation</div>
                <div className="text-teal-300">[10:24:08] Inbound Request: ticket_create(workspace_id="ws_9921")</div>
                <div className="text-slate-400">[10:24:08] Multi-Tenant Check: OK (Isolated)</div>
                <div className="text-slate-400">[10:24:09] Flowchart Intent Router: Category="Order Inquiry"</div>
                <div className="text-slate-400">[10:24:09] AI Guardrail: Confidence = 0.94 (Grounded)</div>
                <div className="text-emerald-400">[10:24:09] Action: Drafted reply + Attached citation #KB-104</div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-slate-400 text-[11px]">
                <span>Token Usage: 342 tokens</span>
                <span className="text-teal-400">Cost: £0.0004</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
