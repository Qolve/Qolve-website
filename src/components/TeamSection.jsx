import React from 'react';
import { Users, Linkedin, Github, ShieldCheck, Code, Compass, HeartHandshake } from 'lucide-react';

export default function TeamSection() {
  const team = [
    {
      name: 'Freddie Haude',
      role: 'Founder & Product Lead',
      bio: 'Leading product vision, sprint execution, and operational strategy for Qolve and the Quelp ecosystem.',
      focus: 'Product Strategy & Operations',
      avatar: 'FH',
      color: 'from-teal-400 to-teal-700'
    },
    {
      name: 'Liam Haines',
      role: 'Brand & Legal Strategy',
      bio: 'Directing brand architecture, trade-mark clearance, domain security, and B2B positioning.',
      focus: 'Brand Governance & Compliance',
      avatar: 'LH',
      color: 'from-cyan-400 to-cyan-700'
    },
    {
      name: 'Vilius',
      role: 'Lead UX & System Architecture',
      bio: 'Designing low-friction user experiences, data-model relationships, and clean ticket workflows.',
      focus: 'UX Engineering & Data Models',
      avatar: 'VI',
      color: 'from-emerald-400 to-emerald-700'
    },
    {
      name: 'Gabriel',
      role: 'Backend & Infrastructure Engineer',
      bio: 'Building modular monolith backend services, multi-tenant isolation, and resilient background queues.',
      focus: 'Multi-Tenant Security & Infrastructure',
      avatar: 'GA',
      color: 'from-blue-400 to-indigo-700'
    }
  ];

  const beliefs = [
    {
      title: 'Atomic & Robust Code',
      desc: 'Systems engineered to run with zero unhandled errors, deterministic fallbacks, and multi-tenant security.'
    },
    {
      title: 'Human Outcome First',
      desc: 'Fast escalation beats fake confidence. If an AI model is uncertain, it hands off to a human agent immediately.'
    },
    {
      title: 'Transparent Pricing',
      desc: 'No hidden enterprise taxes or per-outcome penalties. Direct LLM API costs plus a 15% transparent markup.'
    },
    {
      title: '100% Brand Independence',
      desc: 'Your customer portal, emails, and chat widgets belong to your brand—never ours.'
    }
  ];

  return (
    <section id="team" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-800/60">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="badge-teal inline-flex items-center gap-1.5">
            <Users size={14} /> Leadership & Engineering
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight">
            The Team Behind Qolve
          </h2>
          <p className="text-slate-400 text-base">
            We are a UK-based B2B software engineering company focused on creating resilient, fully branded SaaS products for growing businesses.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 relative group hover:border-teal-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center font-display font-extrabold text-slate-950 text-base shadow-lg`}>
                  {member.avatar}
                </div>
                <div>
                  <h3 className="font-bold font-display text-white text-base group-hover:text-teal-300 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs text-teal-400 font-medium">{member.role}</div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {member.bio}
              </p>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Focus:</span>
                <span className="text-slate-300 font-semibold">{member.focus}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Core Beliefs Banner */}
        <div id="beliefs" className="glass-panel-accent p-8 md:p-10">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono font-semibold text-teal-400 uppercase tracking-widest">
              Core Engineering Values
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-display text-white mt-1">
              What We Stand For
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beliefs.map((b, bIdx) => (
              <div key={bIdx} className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-teal-400 font-display font-semibold text-sm">
                  <ShieldCheck size={16} /> {b.title}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
