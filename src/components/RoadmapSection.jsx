import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Clock, Sparkles, Layers, ShieldCheck, Cpu, Globe } from 'lucide-react';

const ROADMAP_PHASES = [
  {
    phase: 'Phase 1',
    timeline: 'Q3 2026 (Completed)',
    title: 'Core Infrastructure & Inbound Mail Relay',
    status: 'Done',
    icon: ShieldCheck,
    deliverables: [
      'Stalwart Mail Server + AWS SES Outbound Relay',
      'Central Domain Identity (qolve.systems) with SPF/DKIM',
      'Secure TLS / HTTPS Docker networking & IMAP sync',
      'Initial Mailbox Architecture (support@qolve.systems)'
    ]
  },
  {
    phase: 'Phase 2',
    timeline: 'Q4 2026 (Active)',
    title: 'Quelp Helpdesk MVP & Inbound Triage',
    status: 'In Progress',
    icon: Layers,
    deliverables: [
      'Auto-ticket creation from inbound emails',
      'Collaborative agent inbox with status & category tags',
      'AI-assisted response drafting for support agents',
      'SLA tracking and automated team assignments'
    ]
  },
  {
    phase: 'Phase 3',
    timeline: 'Q1 2027 (Upcoming)',
    title: 'AI Automation & Visual Ticket Canvas',
    status: 'Planned',
    icon: Cpu,
    deliverables: [
      'Visual drag-and-drop ticket automation canvas',
      'Self-learning Knowledge Base & FAQ auto-resolution',
      'Multi-channel web widget & bubble chatbot SDK',
      'Advanced ticket telemetry & agent performance analytics'
    ]
  },
  {
    phase: 'Phase 4',
    timeline: 'Q2 2027 (Scale)',
    title: 'White-Label Client Portals & Enterprise Multi-Tenancy',
    status: 'Planned',
    icon: Globe,
    deliverables: [
      'Custom CNAME domain mapping for client portals',
      '100% white-label branding (logo, colors, typography)',
      'Multi-tenant SSO authentication (OAuth / SAML)',
      'Flat-rate subscription tier launch'
    ]
  }
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5 text-teal-600" />
            <span>Project Roadmap (2026 – 2027)</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Are Building Qolve & Quelp
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Transparent engineering milestones. From resilient email infrastructure to full white-label AI helpdesk multi-tenancy.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ROADMAP_PHASES.map((item, idx) => {
            const IconComponent = item.icon;
            const isDone = item.status === 'Done';
            const isInProgress = item.status === 'In Progress';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 card-shadow relative flex flex-col justify-between"
              >
                <div>
                  {/* Badge Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {item.phase} • {item.timeline}
                      </span>
                    </div>

                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                      isDone ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                      isInProgress ? 'bg-teal-50 text-teal-700 border-teal-200 animate-pulse' :
                      'bg-slate-100 text-slate-600 border-slate-200'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-4">
                    {item.title}
                  </h3>

                  {/* Deliverables List */}
                  <ul className="space-y-2.5">
                    {item.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDone ? 'text-emerald-500' : 'text-teal-600'}`} />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
