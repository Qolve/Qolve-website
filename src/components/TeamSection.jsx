import React from 'react';
import { Users, ShieldCheck } from 'lucide-react';

export default function TeamSection() {
  const team = [
    {
      name: 'Freddie Haude',
      role: 'Founder & Product Lead',
      bio: 'Leading product vision, sprint execution, and operational strategy for Qolve and the Quelp ecosystem.',
      focus: 'Product Strategy & Operations',
      initials: 'FH'
    },
    {
      name: 'Liam Haines',
      role: 'Brand & Legal Strategy',
      bio: 'Directing brand architecture, trade-mark clearance, domain security, and B2B positioning.',
      focus: 'Brand Governance & Compliance',
      initials: 'LH'
    },
    {
      name: 'Vilius',
      role: 'Lead UX & System Architecture',
      bio: 'Designing low-friction user experiences, data-model relationships, and clean ticket workflows.',
      focus: 'UX Engineering & Data Models',
      initials: 'VI'
    },
    {
      name: 'Gabriel',
      role: 'Backend & Infrastructure Engineer',
      bio: 'Building modular monolith backend services, multi-tenant isolation, and resilient background queues.',
      focus: 'Multi-Tenant Security & Infrastructure',
      initials: 'GA'
    }
  ];

  return (
    <section id="team" className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/10">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="badge-pill inline-flex items-center gap-1.5">
            <Users size={14} /> Leadership & Engineering
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight">
            The Qolve Team
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            We are a UK-based B2B software engineering company creating resilient, fully branded SaaS products for growing businesses.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {team.map((member, idx) => (
            <div key={idx} className="bento-card p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 font-display font-extrabold text-sm flex items-center justify-center mb-4">
                  {member.initials}
                </div>
                <h3 className="font-bold font-display text-white text-base">{member.name}</h3>
                <div className="text-xs text-teal-400 font-medium mb-3">{member.role}</div>
                <p className="text-xs text-slate-300 leading-relaxed">{member.bio}</p>
              </div>

              <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
                Focus: <span className="text-slate-200">{member.focus}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
