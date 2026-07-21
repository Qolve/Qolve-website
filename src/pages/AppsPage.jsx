import React from 'react';
import { Layers, Bot, Shield, Cpu, Zap, ArrowRight, CheckCircle2, Lock } from 'lucide-react';

export default function AppsPage({ onNavigate, onOpenContact }) {
  const apps = [
    {
      name: 'Quelp',
      category: 'Customer Support & Helpdesk',
      status: 'In Active Build (V1 Beta)',
      badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
      description: 'Fully branded, white-label helpdesk platform featuring email ticketing, customer portal, custom domains, and safe human-like AI assistance.',
      link: () => onNavigate('quelp'),
      linkText: 'View Quelp Specs'
    },
    {
      name: 'Qolve Guardrail Shield',
      category: 'AI Safety & Multi-Tenant Middleware',
      status: 'Internal Architecture Core',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      description: 'Security & prompt-injection gateway engineered to validate LLM inputs, prevent token abuse, and enforce strict database tenant boundaries.',
      link: onOpenContact,
      linkText: 'Inquire About Licensing'
    },
    {
      name: 'Qolve Connect',
      category: 'Shopify & ERP Integration Module',
      status: 'Phase 8 Roadmap',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
      description: 'Read-only eCommerce connector bringing order lookup, fulfillment tracking, and customer history directly into support tickets.',
      link: onOpenContact,
      linkText: 'Inquire About Integrations'
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="badge-teal">Qolve Software Ecosystem</span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white tracking-tight">
            Software Applications & <span className="text-gradient-teal">Modules</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg">
            Discover the suite of white-label SaaS modules engineered by Qolve for high reliability, clean architecture, and transparent pricing.
          </p>
        </div>

        {/* Apps List */}
        <div className="space-y-6 max-w-4xl mx-auto mb-20">
          {apps.map((app, idx) => (
            <div key={idx} className="glass-panel p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-teal-500/40 transition-all">
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-semibold font-mono ${app.badgeColor}`}>
                    {app.status}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{app.category}</span>
                </div>

                <h3 className="text-2xl font-bold font-display text-white">
                  {app.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {app.description}
                </p>
              </div>

              <button
                onClick={app.link}
                className="btn-primary py-2.5 px-5 text-xs whitespace-nowrap"
              >
                {app.linkText} <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
