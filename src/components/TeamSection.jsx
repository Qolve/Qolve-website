import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Terminal, Server, Shield, Sparkles } from 'lucide-react';

const TEAM = [
  {
    name: 'Liam Haines',
    role: 'Chief Executive Officer (CEO)',
    focus: 'Strategic Growth & Product Vision',
    icon: Users,
    bio: 'Directing Qolve’s mission to democratize white-label B2B customer support technology for growing businesses.'
  },
  {
    name: 'Freddie',
    role: 'Product & Lead Architect',
    focus: 'Product Strategy & UX Architecture',
    icon: Sparkles,
    bio: 'Architecting Quelp’s intuitive helpdesk workspace, AI triage pipelines, and flat-rate SaaS model.'
  },
  {
    name: 'Vilius',
    role: 'Core Software Engineer',
    focus: 'Full-Stack & Ticket Engine',
    icon: Code,
    bio: 'Engineering high-throughput ticket ingestion APIs, real-time webhooks, and backend microservices.'
  },
  {
    name: 'Seb',
    role: 'DevOps & Systems Engineer',
    focus: 'Stalwart Relay & Cloud Security',
    icon: Server,
    bio: 'Managing secure mail server infrastructure, SES deliverability, TLS encryption, and high-availability containers.'
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>The Qolve Engineering Lab</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built by Engineers, Designed for Growth
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            We are a lean, specialized technical team building the next generation of white-label customer support software.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, idx) => {
            const IconComponent = member.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 card-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-md shadow-teal-600/20">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-teal-700 mt-0.5 mb-2">
                    {member.role}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 text-[11px] font-mono text-slate-500">
                  Focus: {member.focus}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
