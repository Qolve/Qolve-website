import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Users, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Code, 
  Sparkles, 
  Server, 
  Target,
  ArrowRight,
  Cpu
} from 'lucide-react';
import TeamSection from '../components/TeamSection';

const METRICS = [
  {
    value: '99.99%',
    label: 'Managed Platform Uptime',
    sublabel: 'Zero unplanned service outages across production apps',
    icon: ShieldCheck
  },
  {
    value: '520k+',
    label: 'Monthly Data Points',
    sublabel: 'Ingested and analyzed in real-time pipelines',
    icon: TrendingUp
  },
  {
    value: '49%',
    label: 'Efficiency Gain',
    sublabel: 'Average workflow acceleration for client teams',
    icon: Zap
  },
  {
    value: '4.9 / 5',
    label: 'Client Satisfaction',
    sublabel: 'Based on 4,900+ reviews across global enterprise accounts',
    icon: Award
  }
];

const PRINCIPLES = [
  {
    icon: Target,
    title: 'Clear Execution & Zero Fluff',
    description: 'We prioritize clean, maintainable, production-ready code over corporate buzzwords. Every deliverable is tested, documented, and built to scale.'
  },
  {
    icon: Users,
    title: 'Human-Centered Ergonomics',
    description: 'Software should feel intuitive and effortless. We craft user interfaces and internal toolings that enhance human speed and remove cognitive drag.'
  },
  {
    icon: Cpu,
    title: 'Engineered for High Concurrency',
    description: 'We build systems with low-latency memory management, concurrent processing, and zero-copy data pipelines to withstand sudden traffic spikes.'
  },
  {
    icon: ShieldCheck,
    title: 'Zero-Trust Security Alignment',
    description: 'Security is non-negotiable. We integrate DKIM/DMARC validation, single-tenant data isolation, and SOC-2 compliance protocols into every layer.'
  }
];

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-[#f8fafc]">
      
      {/* Sky Hero Header */}
      <section className="relative overflow-hidden figma-sky-bg pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
        <div className="absolute top-6 left-[-5%] w-[450px] h-[140px] figma-cloud blur-sm opacity-60 pointer-events-none" />
        <div className="absolute top-2 right-[-10%] w-[550px] h-[180px] figma-cloud blur-sm opacity-70 pointer-events-none" />
        <div className="absolute top-32 left-[25%] w-[480px] h-[130px] figma-cloud opacity-40 pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-4">
          <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-slate-800 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/80 inline-flex items-center gap-1.5 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-[#0f172a]" />
            About Qolve Technology Lab
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Empowering Enterprise Through Precision Engineering
          </h1>
          <p className="text-slate-800 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Qolve brings together strategy, distributed systems engineering, and visual design to build digital platforms that create measurable business value.
          </p>
        </div>
      </section>

      {/* Operational Metrics Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
            Track Record
          </span>
          <h2 className="font-heading text-3xl font-black text-[#0f172a]">
            Operational Impact & Metrics
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric, idx) => {
            const IconComp = metric.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="figma-card-white p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0f172a] text-[#c6f529] flex items-center justify-center mb-4 shadow-sm">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="font-heading text-3xl font-black text-[#0f172a] block mb-1">
                    {metric.value}
                  </span>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono-code mb-2">
                    {metric.label}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {metric.sublabel}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Company Narrative & Principles Section */}
      <section className="py-20 bg-white border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#0f172a] bg-[#c6f529] px-3.5 py-1.5 rounded-full">
                Our Core Mission
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight leading-tight">
                Bridging Strategy and Production-Grade Software
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded by engineers and product strategists, Qolve was established to replace slow corporate consulting with fast, high-precision engineering. We focus on core fundamentals: low latency, zero-trust security, and tactile user interfaces.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you need to scale an existing data infrastructure or build an AI-driven support ecosystem from scratch, our team provides the technical rigor needed to execute with confidence.
              </p>

              <div className="pt-2">
                <Link to="/contact" className="btn-figma-dark uppercase text-xs">
                  <span>Work With Qolve</span>
                  <ArrowRight className="w-4 h-4 text-[#c6f529]" />
                </Link>
              </div>
            </div>

            {/* Principles Cards Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRINCIPLES.map((principle, idx) => {
                const IconComp = principle.icon;
                return (
                  <div key={idx} className="bg-[#f2f8fc] p-6 rounded-2xl border border-slate-200 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0f172a] text-white flex items-center justify-center">
                      <IconComp className="w-5 h-5 text-[#c6f529]" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-[#0f172a]">
                      {principle.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Team Section Component */}
      <TeamSection />

      {/* Bottom CTA */}
      <section className="py-20 bg-[#0f172a] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-white tracking-tight">
            Ready to Work with Qolve Engineers?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Let's discuss how our strategy and software expertise can accelerate your organization's technical roadmap.
          </p>
          <div className="pt-2">
            <Link to="/contact" className="btn-figma-lime uppercase text-xs py-3 px-8">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
