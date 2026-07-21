import React from 'react';
import { Building2, Shield, Layers, Zap, CheckCircle2, ArrowRight, Lock, Server, Cpu, Globe } from 'lucide-react';

export default function SolutionsPage({ onNavigate, onOpenContact }) {
  const solutions = [
    {
      title: 'White-Label Customer Support Platforms',
      badge: 'Flagship: Quelp',
      desc: 'Deploy a fully branded helpdesk on your own domain (`support.yourbrand.com`). Complete with customer ticket portal, email sync, knowledge center, and AI assistance with zero generic third-party badges.',
      features: [
        'Custom support subdomains & automated SSL',
        'Custom transactional email templates & SPF/DKIM identity',
        'Transparent LLM token pricing (+15% margin)',
        'Instant human escalation on complex tickets'
      ]
    },
    {
      title: 'Agency & Reseller Software Infrastructure',
      badge: 'Reseller Ready',
      desc: 'Empower digital agencies and software consultancies to offer branded customer-support and helpdesk portals to their clients under their own consultancy branding.',
      features: [
        'Multi-tenant workspace provisioning',
        'Branded client portals & custom dashboards',
        'Centralized agent management across client accounts',
        'Dedicated onboarding & migration assistance'
      ]
    },
    {
      title: 'Custom B2B SaaS Engineering',
      badge: 'Bespoke Development',
      desc: 'Need custom workflow automation, helpdesk integrations, or high-reliability cloud platforms? Our engineering team designs modular monolith systems tailored to your business rules.',
      features: [
        'TypeScript / NestJS / PostgreSQL backend stack',
        'Redis job queues & S3 file storage pipelines',
        'Strict multi-tenant security architecture',
        'Dedicated UK-based engineering support'
      ]
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="badge-teal">Qolve B2B Offerings</span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white tracking-tight">
            White-Label Systems for <span className="text-gradient-teal">Growing Businesses</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg">
            We help SMBs, eCommerce merchants, and digital agencies eliminate expensive enterprise seat fees with software engineered to feel like an internal product.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((sol, idx) => (
            <div key={idx} className="glass-panel p-8 flex flex-col justify-between hover:border-teal-500/50 transition-all duration-300">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase font-mono">
                  {sol.badge}
                </div>

                <h3 className="text-2xl font-bold font-display text-white">
                  {sol.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {sol.desc}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {sol.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-teal-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <button
                  onClick={onOpenContact}
                  className="btn-primary w-full justify-center text-xs"
                >
                  Discuss Solution <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* B2B Partnership Banner */}
        <div className="glass-panel-accent p-8 md:p-12 text-center space-y-6 max-w-4xl mx-auto">
          <span className="badge-teal">UK Enterprise Standards</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
            Ready to Replace Expensive SaaS Inboxes?
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Our UK engineering team works directly with your business during setup, migration, and custom brand deployment. Zero sales friction—just clear, reliable software.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenContact}
              className="btn-primary py-3 px-8 text-sm"
            >
              Book a Discovery Call <ArrowRight size={16} />
            </button>
            <button
              onClick={() => onNavigate('quelp')}
              className="btn-secondary py-3 px-8 text-sm"
            >
              Explore Quelp Platform Specs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
