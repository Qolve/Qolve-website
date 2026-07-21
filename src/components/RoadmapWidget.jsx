import React from 'react';
import { Calendar, CheckCircle2, Clock, Circle, ArrowRight } from 'lucide-react';

export default function RoadmapWidget({ onOpenContact }) {
  const phases = [
    {
      phase: 'Phase 0 - 1',
      title: 'Validation & UX Prototype',
      status: 'completed',
      date: 'July - August 2026',
      deliverables: [
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
      deliverables: [
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
      deliverables: [
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
      deliverables: [
        'Knowledge-base grounded AI assistant',
        'Deterministic human handoff rules',
        'Shopify & CSV migration tools',
        'Commercial beta rollout for design partners'
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden bg-slate-900/40">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge-teal mb-3 inline-flex items-center gap-1.5">
            <Calendar size={14} /> Product Roadmap & Milestones
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">
            Transparent Product Timeline
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Every phase of Quelp has strict exit gates. We move forward based on validated customer evidence and reliability tests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((item, idx) => {
            const isCompleted = item.status === 'completed';
            const isInProgress = item.status === 'in-progress';

            return (
              <div
                key={idx}
                className={`glass-panel p-6 relative flex flex-col justify-between ${
                  isInProgress ? 'border-teal-500/50 bg-slate-900/90 shadow-lg shadow-teal-500/10' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      {item.phase}
                    </span>

                    {isCompleted ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-medium">
                        <CheckCircle2 size={12} /> Done
                      </span>
                    ) : isInProgress ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal-500/20 border border-teal-500/50 text-teal-300 text-[11px] font-medium animate-pulse">
                        <Clock size={12} /> Active Build
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[11px] font-medium">
                        <Circle size={12} /> Scheduled
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold font-display text-white mb-2">
                    {item.title}
                  </h3>

                  <div className="text-xs text-teal-400 font-medium mb-4">
                    {item.date}
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300">
                    {item.deliverables.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                          isCompleted ? 'bg-emerald-400' : isInProgress ? 'bg-teal-400' : 'bg-slate-600'
                        }`}></span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {isInProgress && (
                  <div className="mt-6 pt-4 border-t border-slate-800">
                    <button
                      onClick={onOpenContact}
                      className="text-xs font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1 group transition-colors"
                    >
                      Apply for V1 Beta Access <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
