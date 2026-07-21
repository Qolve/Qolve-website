import React from 'react';
import { Calendar, CheckCircle2, Clock, Circle, ArrowRight } from 'lucide-react';

export default function RoadmapWidget({ onOpenContact }) {
  const phases = [
    {
      phase: 'Phase 0 - 1',
      title: 'Validation & UX Prototype',
      status: 'completed',
      date: 'July - August 2026',
      items: [
        'Brand clearance & legal gate',
        'Customer discovery across 80+ SMBs',
        'Clickable interactive prototype',
        'Multi-tenant database schema & spikes'
      ]
    },
    {
      phase: 'Phase 2 - 3',
      title: 'Platform Foundation & Core Ticketing',
      status: 'in-progress',
      date: 'Sept - November 2026',
      items: [
        'Workspace creation & RBAC roles',
        'Ticket lifecycle, status & custom fields',
        'Private notes & activity timeline',
        'Internal alpha team deployment'
      ]
    },
    {
      phase: 'Phase 4 - 5',
      title: 'Email Ticketing & White-Label Portal',
      status: 'upcoming',
      date: 'Dec 2026 - Jan 2027',
      items: [
        'Threaded email ingestion & sending',
        'Branded help center & customer portal',
        'Custom domains & automated TLS',
        'Embeddable website chat widget'
      ]
    },
    {
      phase: 'Phase 6 - 8',
      title: 'Grounded AI & Commercial Beta',
      status: 'upcoming',
      date: 'Feb - May 2027',
      items: [
        'Knowledge-base grounded AI assistant',
        'Deterministic human handoff rules',
        'Shopify & CSV migration tools',
        'Commercial beta rollout for design partners'
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-slate-950/80 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="badge-pill inline-flex items-center gap-1.5">
            <Calendar size={14} /> Product Milestones
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight">
            Transparent Product Roadmap
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Every phase of Quelp has strict exit gates. We move forward based on validated customer evidence and test reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((item, idx) => {
            const isDone = item.status === 'completed';
            const isActive = item.status === 'in-progress';

            return (
              <div
                key={idx}
                className={`bento-card p-6 flex flex-col justify-between ${
                  isActive ? 'border-teal-500/50 bg-slate-900/90 shadow-xl' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">
                      {item.phase}
                    </span>

                    {isDone ? (
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/30">
                        Done
                      </span>
                    ) : isActive ? (
                      <span className="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 text-[10px] font-mono border border-teal-500/40 animate-pulse">
                        Active Build
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px] font-mono">
                        Scheduled
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold font-display text-white mb-1">
                    {item.title}
                  </h3>

                  <div className="text-xs text-teal-400 font-mono mb-4">
                    {item.date}
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300">
                    {item.items.map((it, itIdx) => (
                      <li key={itIdx} className="flex items-start gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                          isDone ? 'bg-emerald-400' : isActive ? 'bg-teal-400' : 'bg-slate-600'
                        }`}></span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {isActive && (
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <button
                      onClick={onOpenContact}
                      className="text-xs font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1 cursor-pointer"
                    >
                      Apply for V1 Beta Access <ArrowRight size={14} />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
