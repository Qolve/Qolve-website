import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden figma-sky-bg pt-12 pb-24 md:pt-16 md:pb-32 px-4 sm:px-6 lg:px-8">
      
      {/* Translucent Floating Clouds from Figma */}
      <div className="absolute top-10 left-[-5%] w-[450px] h-[140px] figma-cloud blur-sm opacity-60 pointer-events-none" />
      <div className="absolute top-4 right-[-10%] w-[550px] h-[180px] figma-cloud blur-sm opacity-70 pointer-events-none" />
      <div className="absolute top-36 left-[15%] w-[650px] h-[160px] figma-cloud opacity-40 pointer-events-none" />
      <div className="absolute top-44 right-[10%] w-[500px] h-[150px] figma-cloud opacity-50 pointer-events-none" />
      <div className="absolute top-72 left-[30%] w-[400px] h-[100px] figma-cloud opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        
        {/* Main Title from Figma */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] max-w-4xl mx-auto drop-shadow-sm"
        >
          Building the future<br />
          with AI and strategy
        </motion.h1>

        {/* Subtitle from Figma */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-slate-800/90 font-medium max-w-2xl mx-auto leading-relaxed"
        >
          We help organizations unlock growth and efficiency through data-driven consulting and intelligent automation.
        </motion.p>

        {/* CTA Buttons from Figma */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link 
            to="/services"
            className="btn-figma-glass uppercase"
          >
            View Services
          </Link>

          <Link 
            to="/contact"
            className="btn-figma-dark group uppercase"
          >
            <span>Get Started</span>
            <div className="w-7 h-7 rounded-full bg-[#c6f529] text-[#0f172a] flex items-center justify-center font-bold group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </motion.div>

        {/* 5 Floating Bento Cards (1-to-1 Match from Figma) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto text-left"
        >
          {/* Card 1: Black Expertise Card */}
          <div className="figma-card-dark flex flex-col justify-between h-[155px]">
            <div>
              <span className="font-mono-code text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-2">
                Expertise
              </span>
              <p className="font-heading font-bold text-xs leading-snug text-white">
                Combining Strategy, Data & Intelligence
              </p>
            </div>
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden flex">
              <div className="w-1/3 bg-[#c6f529]" />
              <div className="w-1/3 bg-blue-500" />
              <div className="w-1/3 bg-slate-600" />
            </div>
          </div>

          {/* Card 2: White Intelligence Card */}
          <div className="figma-card-white flex flex-col justify-between h-[155px]">
            <div className="flex items-center justify-between">
              <span className="font-mono-code text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
                Intelligence
              </span>
              <span className="w-2 h-2 rounded-full bg-[#c6f529]" />
            </div>
            <div>
              <span className="font-heading text-3xl font-black text-[#0f172a] block">
                94%
              </span>
              <span className="text-[11px] font-semibold text-slate-500 block">
                Efficiency score
              </span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
              <div className="bg-[#0f172a] h-full rounded-full w-[94%]" />
            </div>
          </div>

          {/* Card 3: White Data Insights Card */}
          <div className="figma-card-white flex flex-col justify-between h-[155px]">
            <div>
              <span className="font-mono-code text-[10px] font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
                Data Insights
              </span>
              <span className="font-heading text-2xl font-black text-[#0f172a] block">
                520k+
              </span>
              <span className="text-[10px] font-semibold text-slate-400 block">
                data points / month
              </span>
            </div>
            <div className="flex items-end gap-1.5 h-6 pt-2">
              <div className="flex-1 bg-slate-200 h-3 rounded-sm" />
              <div className="flex-1 bg-slate-200 h-4 rounded-sm" />
              <div className="flex-1 bg-slate-200 h-5 rounded-sm" />
              <div className="flex-1 bg-slate-200 h-3 rounded-sm" />
              <div className="flex-1 bg-[#0f172a] h-6 rounded-sm" />
              <div className="flex-1 bg-slate-200 h-4 rounded-sm" />
            </div>
          </div>

          {/* Card 4: Black Dataframing Card */}
          <div className="figma-card-dark flex flex-col justify-between h-[155px]">
            <div>
              <span className="font-mono-code text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-2">
                Dataframing
              </span>
            </div>
            <div className="flex items-end justify-between gap-1.5 h-12">
              <div className="w-3 bg-[#c6f529] h-[50%] rounded-sm" />
              <div className="w-3 bg-[#c6f529] h-[75%] rounded-sm" />
              <div className="w-3 bg-[#c6f529] h-[40%] rounded-sm" />
              <div className="w-3 bg-[#c6f529] h-[90%] rounded-sm" />
              <div className="w-3 bg-[#c6f529] h-[65%] rounded-sm" />
            </div>
            <span className="text-[10px] font-mono text-slate-400 block">
              Real-time feed
            </span>
          </div>

          {/* Card 5: White Growth Card */}
          <div className="figma-card-white flex flex-col justify-between h-[155px] relative">
            <div>
              <span className="font-mono-code text-[10px] font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
                Growth
              </span>
              <span className="font-heading text-2xl font-black text-[#0f172a] block">
                49%
              </span>
              <span className="text-[10px] font-semibold text-slate-500 block">
                efficiency gain
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#c6f529] text-[#0f172a] flex items-center justify-center self-start shadow-sm">
              <ArrowUpRight className="w-4 h-4 font-bold" />
            </div>
          </div>
        </motion.div>

        {/* Social Proof Rating from Figma */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 space-y-2"
        >
          <div className="flex items-center justify-center gap-1 text-[#c6f529]">
            <Star className="w-4 h-4 fill-current text-yellow-400" />
            <Star className="w-4 h-4 fill-current text-yellow-400" />
            <Star className="w-4 h-4 fill-current text-yellow-400" />
            <Star className="w-4 h-4 fill-current text-yellow-400" />
            <Star className="w-4 h-4 fill-current text-yellow-400" />
          </div>
          <p className="text-xs font-semibold text-slate-600/90">
            Rated 4.9/5 by 4,900+ clients
          </p>
        </motion.div>

      </div>
    </section>
  );
}
