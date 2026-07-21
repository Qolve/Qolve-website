import React, { useState } from 'react';
import { ArrowRight, Lock, ShieldCheck, CheckCircle2, ChevronRight, Terminal, RefreshCw, Layers } from 'lucide-react';

export default function HeroSection({ onNavigate, onOpenContact }) {
  const [demoBrand, setDemoBrand] = useState('acme'); // acme, techflow, qolve

  const brandStyles = {
    acme: {
      name: 'Acme Retail Ltd',
      domain: 'support.acme-retail.co.uk',
      accent: '#14b8a6',
      badge: 'Acme Brand Theme'
    },
    techflow: {
      name: 'TechFlow Cloud',
      domain: 'help.techflow.io',
      accent: '#00d2ff',
      badge: 'TechFlow Brand Theme'
    },
    qolve: {
      name: 'Default Workspace',
      domain: 'support.yourbrand.com',
      accent: '#10b981',
      badge: 'White-Label Preview'
    }
  };

  const current = brandStyles[demoBrand];

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-slate-950">
      {/* Background Subtle Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-teal-500/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="container-custom relative z-10">
        {/* Main Hero Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-teal-400 text-xs font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            <span>Flagship SaaS in Build: Quelp Helpdesk V1</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.15]">
            White-Label Customer Support <span className="text-gradient">Built for SMBs.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Qolve engineers enterprise-grade, fully branded SaaS platforms for growing businesses. Replace expensive per-seat software bills with platforms branded entirely as your own.
          </p>

          {/* Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('quelp')}
              className="btn-primary text-sm px-6 py-3 w-full sm:w-auto justify-center"
            >
              Explore Quelp Specs <ArrowRight size={16} />
            </button>

            <button
              onClick={onOpenContact}
              className="btn-secondary text-sm px-6 py-3 w-full sm:w-auto justify-center"
            >
              Request B2B Pilot Access
            </button>
          </div>
        </div>

        {/* Browser Mockup / Interactive Platform Preview */}
        <div className="mt-16 max-w-5xl mx-auto bento-card-accent p-2 md:p-3 relative shadow-2xl">
          <div className="bg-slate-950 rounded-xl overflow-hidden border border-white/10">
            {/* Top Browser Bar */}
            <div className="bg-slate-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <span className="text-xs font-mono text-slate-400 ml-2">{current.domain}</span>
              </div>

              {/* Theme Switcher Controls */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-slate-500 hide-mobile">Brand Theme:</span>
                {Object.keys(brandStyles).map((bKey) => (
                  <button
                    key={bKey}
                    onClick={() => setDemoBrand(bKey)}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                      demoBrand === bKey
                        ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                        : 'bg-slate-900 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {brandStyles[bKey].name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Helpdesk Dashboard Interface Preview */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Column - Product Highlights */}
              <div className="md:col-span-5 space-y-4 text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-teal-500/10 text-teal-300 text-xs font-mono border border-teal-500/30">
                  <Lock size={12} /> 100% Branded Experience
                </div>

                <h3 className="text-2xl font-bold font-display text-white">
                  Quelp Helpdesk Engine
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Zendesk and Gorgias force generic support widgets onto your site while charging high per-seat fees. Quelp gives you full control over your support domain, emails, portal, and safe AI assistance.
                </p>

                <div className="space-y-2 pt-1 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-teal-400 shrink-0" />
                    <span>Helpdesk-first architecture (works without AI)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-teal-400 shrink-0" />
                    <span>Instant human handoff logic on low confidence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-teal-400 shrink-0" />
                    <span>Direct LLM API costs + 15% transparent margin</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Mock Helpdesk Interface */}
              <div className="md:col-span-7 bg-slate-900/90 border border-white/10 rounded-xl p-4 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded flex items-center justify-center font-bold text-[10px] text-slate-950 font-display" style={{ background: current.accent }}>
                      Q
                    </div>
                    <span className="font-semibold text-white">{current.name} Inbox</span>
                  </div>
                  <span className="text-[10px] text-teal-400 bg-teal-950 px-2 py-0.5 rounded border border-teal-800">
                    Live Status: 99.9% Uptime
                  </span>
                </div>

                {/* Ticket Item 1 */}
                <div className="p-3 rounded bg-slate-950 border border-white/5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">#TK-2041 • Order Delivery Delay</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/40">
                      Grounded AI Draft
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400">From: customer@acme.co.uk • Priority: Normal</div>
                  <div className="text-[11px] text-slate-300 pt-1 border-t border-white/5 font-sans italic">
                    "AI Draft: Checked shipping carrier API. Order #4812 is currently out for delivery today."
                  </div>
                </div>

                {/* Ticket Item 2 */}
                <div className="p-3 rounded bg-slate-950 border border-white/5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">#TK-2040 • Technical API Key Request</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      Human Agent Assigned
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400">From: dev@client.com • Priority: High</div>
                  <div className="text-[11px] text-amber-200/90 pt-1 border-t border-white/5 font-sans italic">
                    "Flowchart Guardrail: Transferred directly to senior support engineer (Freddie H)."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-white/10 pt-12 max-w-4xl mx-auto">
          <div>
            <div className="text-xs font-mono text-teal-400 mb-1">BRAND IDENTITY</div>
            <div className="text-sm font-semibold text-white">100% White-Labeled</div>
            <div className="text-xs text-slate-400">Custom domain & DKIM emails</div>
          </div>

          <div>
            <div className="text-xs font-mono text-teal-400 mb-1">COST ARCHITECTURE</div>
            <div className="text-sm font-semibold text-white">Direct Token Pricing</div>
            <div className="text-xs text-slate-400">+15% transparent margin</div>
          </div>

          <div>
            <div className="text-xs font-mono text-teal-400 mb-1">RELIABILITY FIRST</div>
            <div className="text-sm font-semibold text-white">Helpdesk Core</div>
            <div className="text-xs text-slate-400">Functions 100% without LLMs</div>
          </div>

          <div>
            <div className="text-xs font-mono text-teal-400 mb-1">SAFE GUARDRAILS</div>
            <div className="text-sm font-semibold text-white">Human Handoff</div>
            <div className="text-xs text-slate-400">Instant agent escalation</div>
          </div>
        </div>
      </div>
    </section>
  );
}
