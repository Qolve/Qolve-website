import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, CheckCircle2, Sparkles, Terminal, ShieldCheck, Zap } from 'lucide-react';

export default function HeroSection({ onNavigate, onOpenContact }) {
  const [demoBrand, setDemoBrand] = useState('acme');

  const brandStyles = {
    acme: {
      name: 'Acme Retail Ltd',
      domain: 'support.acme-retail.co.uk',
      accent: '#14b8a6',
      badge: 'Acme Workspace'
    },
    techflow: {
      name: 'TechFlow Cloud',
      domain: 'help.techflow.io',
      accent: '#38bdf8',
      badge: 'TechFlow SaaS'
    },
    qolve: {
      name: 'Your Brand Workspace',
      domain: 'support.yourbrand.com',
      accent: '#10b981',
      badge: '100% Custom Domain'
    }
  };

  const current = brandStyles[demoBrand];

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-slate-950 bg-grid-pattern">
      {/* Dynamic Animated Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-teal-500/15 blur-[140px] rounded-full pointer-events-none"
      />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Animated Badge Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-teal-500/30 text-teal-300 text-xs font-mono font-medium shadow-lg shadow-teal-500/10"
          >
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            <span>Flagship B2B Platform: Quelp</span>
          </motion.div>

          {/* Main Title with Staggered Fade */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.12]"
          >
            White-Label Support Software <br className="hidden sm:inline" />
            <span className="text-gradient">Built for SMBs.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Qolve engineers enterprise-grade, fully branded SaaS applications. Eliminate expensive per-seat software bills with software branded 100% as your own.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <button
              onClick={() => onNavigate('quelp')}
              className="btn-primary text-sm px-6 py-3.5 w-full sm:w-auto justify-center group cursor-pointer"
            >
              Explore Quelp Platform <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenContact}
              className="btn-secondary text-sm px-6 py-3.5 w-full sm:w-auto justify-center cursor-pointer"
            >
              Request Access
            </button>
          </motion.div>
        </div>

        {/* Browser Interactive Showcase Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-5xl mx-auto bento-card-accent p-2 md:p-3 relative shadow-2xl"
        >
          <div className="bg-slate-950 rounded-xl overflow-hidden border border-white/10">
            {/* Top Window Bar */}
            <div className="bg-slate-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <span className="text-xs font-mono text-slate-400 ml-2">{current.domain}</span>
              </div>

              {/* Theme Selector */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-slate-500 hide-mobile">Switch Brand Theme:</span>
                {Object.keys(brandStyles).map((bKey) => (
                  <button
                    key={bKey}
                    onClick={() => setDemoBrand(bKey)}
                    className={`px-3 py-1 rounded-md text-[11px] font-mono transition-all cursor-pointer ${
                      demoBrand === bKey
                        ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {brandStyles[bKey].badge}
                  </button>
                ))}
              </div>
            </div>

            {/* Helpdesk Interface Grid */}
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 space-y-4 text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-mono border border-teal-500/30">
                  <Lock size={12} /> Zero Third-Party Badging
                </div>

                <h3 className="text-2xl font-bold font-display text-white">
                  Quelp Helpdesk Platform
                </h3>

                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  Zendesk and Gorgias force generic support widgets onto your site while charging high per-seat fees. Quelp gives you full control over your support domain, emails, portal, and safe AI assistance.
                </p>

                <div className="space-y-2.5 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-teal-400 shrink-0" />
                    <span>Helpdesk-first architecture (functions 100% without AI)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-teal-400 shrink-0" />
                    <span>Instant human handoff logic on low confidence</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-teal-400 shrink-0" />
                    <span>Direct LLM API costs + 15% transparent margin</span>
                  </div>
                </div>
              </div>

              {/* Helpdesk Inbox Mockup */}
              <div className="md:col-span-7 bg-slate-900/90 border border-white/10 rounded-xl p-5 font-mono text-xs space-y-3 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-slate-400">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded flex items-center justify-center font-bold text-xs text-slate-950 font-display transition-colors" style={{ background: current.accent }}>
                      Q
                    </div>
                    <span className="font-semibold text-white">{current.name} Inbox</span>
                  </div>
                  <span className="text-[10px] text-teal-400 bg-teal-950/80 px-2.5 py-0.5 rounded border border-teal-800">
                    Live Status: 99.9% Uptime
                  </span>
                </div>

                {/* Ticket Item 1 */}
                <motion.div
                  key={demoBrand + '-1'}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-3.5 rounded-lg bg-slate-950 border border-white/5 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">#TK-2041 • Delivery Status Query</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/40">
                      Grounded AI Draft
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400">From: customer@client.co.uk • Priority: Normal</div>
                  <div className="text-[11px] text-slate-300 pt-1.5 border-t border-white/5 font-sans italic">
                    "AI Response: Carrier tracking shows package #4812 is currently out for delivery today."
                  </div>
                </motion.div>

                {/* Ticket Item 2 */}
                <motion.div
                  key={demoBrand + '-2'}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="p-3.5 rounded-lg bg-slate-950 border border-white/5 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">#TK-2040 • Technical API Inquiry</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      Human Escalation
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400">From: dev@partner.com • Priority: High</div>
                  <div className="text-[11px] text-amber-200/90 pt-1.5 border-t border-white/5 font-sans italic">
                    "Guardrail Alert: Low confidence score. Transferred directly to senior support agent."
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
