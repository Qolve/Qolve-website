import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Shield, Zap, Layers, Globe } from 'lucide-react';

export default function HeroSection({ onOpenContact }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/60 via-white to-slate-50 pt-20 pb-28 lg:pt-32 lg:pb-36">
      
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-teal-300/25 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100/80 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wide"
          >
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>Technology & Software Innovation Lab</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
          >
            Engineering Intelligent<br />
            <span className="text-teal-gradient">B2B Technology Solutions.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal"
          >
            Qolve builds modern software architecture designed for performance, clarity, and scale. We combine strategic engineering with refined user experience to solve complex modern challenges.
          </motion.p>

          {/* Actions */}
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
              Get in Touch with Qolve
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <a 
              href="#focus"
              className="w-full sm:w-auto btn-outline py-3.5 px-8 text-base rounded-xl"
            >
              Explore Our Focus Areas
            </a>
          </motion.div>
        </div>

        {/* Feature Cards Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <div className="bg-white p-6 rounded-2xl border border-slate-200 card-shadow text-left">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-slate-900 text-lg mb-2">High Performance</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Architecting fast, responsive digital experiences built on solid engineering foundations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 card-shadow text-left">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-slate-900 text-lg mb-2">Modern Architecture</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Designing modular, scalable software systems built to adapt as business needs evolve.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 card-shadow text-left">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold mb-4">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-slate-900 text-lg mb-2">User-Centric Design</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Combining elegant visual aesthetics with intuitive workflows for maximum clarity.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
