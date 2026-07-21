import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Mail, Zap, CheckCircle2, Bot, Layers } from 'lucide-react';

export default function HeroSection({ onOpenContact }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/60 via-white to-slate-50 pt-16 pb-24 lg:pt-24 lg:pb-32">
      
      {/* Background Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-teal-300/30 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wide"
          >
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>Introducing <strong>Quelp by Qolve</strong> — White-Label Helpdesk SaaS</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
          >
            Smarter B2B Support.<br />
            <span className="text-teal-gradient">Zero Per-Seat Tax.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal"
          >
            Qolve engineers high-performance customer support infrastructure. Ingest inbound emails, triage tickets automatically with AI, and deliver seamless client portals with transparent flat-rate pricing.
          </motion.p>

          {/* Call to Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button 
              onClick={onOpenContact}
              className="w-full sm:w-auto btn-teal py-3.5 px-8 text-base shadow-xl shadow-teal-700/25 hover:shadow-teal-700/40 rounded-xl"
            >
              Get Access to Quelp
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <a 
              href="#demo"
              className="w-full sm:w-auto btn-outline py-3.5 px-8 text-base rounded-xl"
            >
              Explore Interactive Demo
            </a>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-slate-600"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Inbound Email Triage</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Custom White-Label Domain</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Stalwart Mail Relay</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Flat-Rate Subscription</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Interactive Card Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 max-w-5xl mx-auto bg-slate-900 rounded-2xl p-4 sm:p-6 shadow-2xl border border-slate-800 text-slate-100"
        >
          {/* Mock App Window Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-xs text-slate-400 font-mono ml-2">quelp.qolve.systems / inbox</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SES Inbound Live</span>
            </div>
          </div>

          {/* Quick Mock Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            
            {/* Stat Card 1 */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Active Inbound Tickets</div>
              <div className="text-2xl font-bold text-teal-400 mt-1">128</div>
              <div className="text-xs text-slate-400 mt-1">⚡ 94% Auto-triaged via AI</div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Avg Response Time</div>
              <div className="text-2xl font-bold text-sky-400 mt-1">1m 42s</div>
              <div className="text-xs text-slate-400 mt-1">📉 82% faster than Zendesk</div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Monthly Seat Savings</div>
              <div className="text-2xl font-bold text-emerald-400 mt-1">$1,450/mo</div>
              <div className="text-xs text-slate-400 mt-1">💰 Flat rate pricing benefit</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
