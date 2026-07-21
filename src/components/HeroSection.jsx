import React, { useState } from 'react';
import { ArrowRight, Shield, Sparkles, CheckCircle2, Terminal, Server, Cpu, Lock, ArrowUpRight } from 'lucide-react';

export default function HeroSection({ onNavigate, onOpenContact }) {
  const [activeTab, setActiveTab] = useState('quelp');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-950">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal-500/15 blur-[160px] rounded-full pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider shadow-lg shadow-teal-500/5">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
            <span>Flagship Product in Build: Quelp V1 Helpdesk</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-display text-white tracking-tight leading-[1.1]">
            We Build <span className="text-gradient-teal">White-Label Software</span> for What Comes Next.
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            Qolve engineers fully branded, high-reliability SaaS systems for SMBs and growing software teams. Replace bloated per-seat pricing with systems branded as your own.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('quelp')}
              className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto justify-center"
            >
              Explore Quelp Platform <ArrowRight size={18} />
            </button>

            <button
              onClick={onOpenContact}
              className="btn-secondary text-base px-8 py-3.5 w-full sm:w-auto justify-center"
            >
              Request B2B Pilot Access
            </button>
          </div>

          {/* Feature Highlights Bar */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-slate-800/80 max-w-3xl mx-auto">
            <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
              <div className="text-xs font-mono text-teal-400 mb-1">BRAND OWNERSHIP</div>
              <div className="text-sm font-semibold text-white">100% White-Labeled</div>
              <div className="text-[11px] text-slate-400">Zero generic badges</div>
            </div>

            <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
              <div className="text-xs font-mono text-teal-400 mb-1">COST ARCHITECTURE</div>
              <div className="text-sm font-semibold text-white">Direct Token Pricing</div>
              <div className="text-[11px] text-slate-400">Transparent +15% margin</div>
            </div>

            <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
              <div className="text-xs font-mono text-teal-400 mb-1">RELIABILITY FIRST</div>
              <div className="text-sm font-semibold text-white">Helpdesk Core</div>
              <div className="text-[11px] text-slate-400">Functions without LLMs</div>
            </div>

            <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
              <div className="text-xs font-mono text-teal-400 mb-1">SAFE GUARDRAILS</div>
              <div className="text-sm font-semibold text-white">Human Handoff</div>
              <div className="text-[11px] text-slate-400">Instant agent escalation</div>
            </div>
          </div>
        </div>

        {/* Interactive B2B White-Label Platform Showcase */}
        <div className="mt-16 glass-panel-accent p-2 md:p-4 rounded-2xl relative shadow-2xl">
          <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800">
            {/* Header bar */}
            <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="text-xs font-mono text-slate-400 ml-2">support.yourcompany.com</span>
              </div>
              
              <div className="flex items-center gap-2 text-xs font-mono text-teal-400">
                <Lock size={12} />
                <span>SSL Encrypted • 100% Branded</span>
              </div>
            </div>

            {/* Content preview */}
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6 space-y-4">
                <span className="badge-teal">Product Spotlight: Quelp</span>
                <h3 className="text-2xl font-bold font-display text-white">
                  The Support Platform that feels like your internal software.
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Zendesk and Gorgias force generic chat widgets and heavy per-seat bills onto your business. Quelp gives your team complete control over your customer portal, support emails, chat widget, and AI tone.
                </p>

                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => onNavigate('quelp')}
                    className="btn-primary py-2 px-5 text-xs"
                  >
                    View Quelp Specs <ArrowUpRight size={14} />
                  </button>
                  <button
                    onClick={onOpenContact}
                    className="text-xs text-slate-300 hover:text-white underline underline-offset-4"
                  >
                    Join Pilot Waiting List
                  </button>
                </div>
              </div>

              {/* Mock Dashboard Preview */}
              <div className="md:col-span-6 bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-teal-500 text-slate-950 font-bold text-xs flex items-center justify-center font-display">
                      Q
                    </div>
                    <span className="font-semibold text-xs text-white">Live Inbox Overview</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    SLA: 99.4%
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="p-3 rounded bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-semibold text-white">#TK-1084 • Order Cancellation Query</div>
                      <div className="text-slate-400 text-[11px]">Customer: sarah@acme-store.co.uk</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 text-[10px] font-semibold">
                      AI Drafted
                    </span>
                  </div>

                  <div className="p-3 rounded bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-semibold text-white">#TK-1083 • Custom API Webhook Setup</div>
                      <div className="text-slate-400 text-[11px]">Customer: dev@techcorp.com</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-300 text-[10px] font-semibold">
                      Escalated to Agent
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
