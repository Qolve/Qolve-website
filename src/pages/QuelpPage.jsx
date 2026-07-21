import React, { useState } from 'react';
import { Bot, ShieldCheck, Zap, Lock, Mail, Globe, ArrowRight, CheckCircle2, FileText, RefreshCw, Cpu, Layers, DollarSign, ChevronRight } from 'lucide-react';
import QuelpSpotlight from '../components/QuelpSpotlight';
import SavingsCalculator from '../components/SavingsCalculator';

export default function QuelpPage({ onNavigate, onOpenContact }) {
  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase font-mono">
            <span>Flagship Product • In Active Build</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white tracking-tight">
            Quelp: The White-Label <span className="text-gradient-teal">Helpdesk & Support SaaS</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg">
            Engineered for small and medium businesses that need the core power of Zendesk or Gorgias without enterprise seat bloat, generic badges, or unvalidated AI errors.
          </p>

          <div className="pt-4 flex items-center justify-center gap-4">
            <button onClick={onOpenContact} className="btn-primary py-3 px-6 text-sm">
              Apply for V1 Beta Access <ChevronRight size={16} />
            </button>
            <button onClick={() => { document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-secondary py-3 px-6 text-sm">
              View Technical Specs
            </button>
          </div>
        </div>

        {/* Interactive Spotlight & Simulator */}
        <QuelpSpotlight onNavigate={onNavigate} onOpenContact={onOpenContact} />

        {/* Technical Architecture Specs Section */}
        <div id="specs" className="py-20 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-teal mb-3">Engineered for SMBs</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
              Why Quelp Beats Traditional Helpdesks
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              We built Quelp around 10 non-negotiable engineering principles designed to protect your brand identity and support budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-panel p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
                01
              </div>
              <h3 className="font-bold font-display text-white text-lg">Helpdesk First, AI Second</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Core ticketing, email syncing, priority assignment, customer records, and SLA reports work 100% reliably even if third-party LLMs experience an outage.
              </p>
            </div>

            <div className="glass-panel p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                02
              </div>
              <h3 className="font-bold font-display text-white text-lg">Deep White-Labelling</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                White labelling is built into the architecture. Custom subdomains (`support.yourbrand.com`), custom email sender identities, branded help center, and zero "Powered by" badges.
              </p>
            </div>

            <div className="glass-panel p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                03
              </div>
              <h3 className="font-bold font-display text-white text-lg">Human Control & Flowcharts</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                No argumentative AI loops. If Quelp encounters an unverified intent or low confidence score, it hands off instantly to a human agent with complete conversation context.
              </p>
            </div>

            <div className="glass-panel p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold">
                04
              </div>
              <h3 className="font-bold font-display text-white text-lg">Strict Multi-Tenant Security</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every ticket, message, customer profile, and file attachment is isolated at the database layer (`workspace_id`). Automated cross-tenant tests prevent data leakage.
              </p>
            </div>

            <div className="glass-panel p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
                05
              </div>
              <h3 className="font-bold font-display text-white text-lg">Prompt-Injection Shield</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Customer input is treated as untrusted text. Robust prompt rejection prevents users from manipulating the bot into granting unauthorized refunds or system actions.
              </p>
            </div>

            <div className="glass-panel p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 font-bold">
                06
              </div>
              <h3 className="font-bold font-display text-white text-lg">Direct Token Cost + 15%</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Transparent cost structure. Pay standard LLM token costs directly with a flat 15% operational margin—saving up to 70% compared to per-outcome resolutions.
              </p>
            </div>
          </div>
        </div>

        {/* Savings Calculator */}
        <SavingsCalculator onOpenContact={onOpenContact} />
      </div>
    </div>
  );
}
