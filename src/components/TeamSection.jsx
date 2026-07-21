import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Terminal, Server, Sparkles, Cpu, Layers } from 'lucide-react';

const TEAM = [
  {
    name: 'Liam Haines',
    role: 'Chief Executive Officer (CEO)',
    focus: 'Strategic Leadership & Systems Operations',
    icon: Users,
    bio: 'Guiding Qolve’s strategic vision and operations to deliver high-impact, fault-tolerant software.'
  },
  {
    name: 'Freddie',
    role: 'Product Lead',
    focus: 'Product Architecture & User Experience Design',
    icon: Sparkles,
    bio: 'Overseeing product direction, user experience design, and high-performance digital architecture.'
  },
  {
    name: 'Vilius',
    role: 'Lead Systems Engineer',
    focus: 'Distributed Systems & Microservices',
    icon: Code,
    bio: 'Leading core software engineering, low-latency application logic, and technical standards.'
  },
  {
    name: 'Seb',
    role: 'DevOps & Reliability Engineer',
    focus: 'Cloud Infrastructure & System Resilience',
    icon: Server,
    bio: 'Managing cloud infrastructure, zero-trust security protocols, and system uptime reliability.'
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-white text-slate-900 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#0b1120] bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200 inline-flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-[#c6f529] fill-[#0b1120]" />
            Leadership & Engineering
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#0b1120] tracking-tight">
            The Engineers Behind Qolve
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A specialized team dedicated to software excellence, modern design, and robust systems engineering.
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
                className="bg-[#f2f8fc] p-6 rounded-3xl border border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all spring-hover flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0b1120] text-[#c6f529] flex items-center justify-center font-bold text-lg mb-4 shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#0b1120]">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-700 mt-0.5 mb-2 font-mono">
                    {member.role}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 text-[11px] font-mono-code font-bold text-slate-500">
                  {member.focus}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

