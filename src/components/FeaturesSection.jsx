import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ShieldCheck, Bot, Globe, DollarSign, Layers, CheckCircle2, Zap } from 'lucide-react';

const FEATURES = [
  {
    icon: Mail,
    title: 'Native Email Ingestion & SES Relay',
    description: 'Direct Stalwart IMAP/SMTP server connection paired with AWS SES relay ensures 100% deliverability, DKIM alignment, and zero email loss.'
  },
  {
    icon: Globe,
    title: '100% White-Label Custom Domain',
    description: 'Map your client support portal to support.yourdomain.com with custom CSS branding, logos, and seamless CNAME integration.'
  },
  {
    icon: Bot,
    title: 'AI Smart Triage & Draft Assistant',
    description: 'Incoming tickets are automatically summarized, tagged by urgency, and pre-drafted with AI suggestions before reaching your agents.'
  },
  {
    icon: DollarSign,
    title: 'Transparent Flat-Rate Pricing',
    description: 'Scale your support team from 5 to 500 agents without paying per-seat markups. One predictable monthly or annual rate.'
  },
  {
    icon: Layers,
    title: 'Collaborative Agent Inbox',
    description: 'Shared mailboxes (support@, hello@, admin@), private internal notes, real-time agent presence, and audit trail logs.'
  },
  {
    icon: ShieldCheck,
    title: 'Hardened Security & Data Isolation',
    description: 'Built-in TLS/HTTPS, DMARC validation, and dedicated single-tenant or isolated multi-tenant data architecture.'
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-slate-900 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Built for Modern Operations</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Growing Businesses Choose Qolve
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Everything your support team needs to resolve customer requests faster, without software complexity or hidden costs.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-teal-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-950 border border-teal-800 text-teal-400 flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-teal-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Production Ready</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
