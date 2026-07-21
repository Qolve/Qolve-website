import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Terminal, Server, Sparkles } from 'lucide-react';

const TEAM = [
  {
    name: 'Liam Haines',
    role: 'Chief Executive Officer (CEO)',
    focus: 'Strategic Leadership & Operations',
    icon: Users,
    bio: 'Guiding Qolve’s strategic vision and operations to deliver high-impact software solutions.'
  },
  {
    name: 'Freddie',
    role: 'Product Lead',
    focus: 'Product Strategy & Design Architecture',
    icon: Sparkles,
    bio: 'Overseeing product direction, user experience design, and digital architecture.'
  },
  {
    name: 'Vilius',
    role: 'Lead Engineer',
    focus: 'Software Engineering & Systems',
    icon: Code,
    bio: 'Leading core software engineering, application logic, and technical standards.'
  },
  {
    name: 'Seb',
    role: 'DevOps & Infrastructure Engineer',
    focus: 'Systems Reliability & Security',
    icon: Server,
    bio: 'Managing cloud infrastructure, security protocols, and system reliability.'
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
            <span>Our Leadership</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Team Behind Qolve
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            A specialized team dedicated to software excellence, modern design, and robust engineering.
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
