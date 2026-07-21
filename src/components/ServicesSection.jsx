import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, BarChart2, ShieldCheck, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Cpu,
    title: 'Intelligent Software Consulting',
    description: 'We help organizations evaluate, architect, and deploy custom software solutions built for long-term scalability.'
  },
  {
    icon: BarChart2,
    title: 'Data Strategy & Analytics',
    description: 'Transforming complex business datasets into clear actionable insights and real-time operational metrics.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Platform Reliability',
    description: 'Ensuring your systems operate with 99.9% uptime, strict security compliance, and optimal performance.'
  }
];

export default function ServicesSection({ onOpenContact }) {
  return (
    <section id="services" className="py-24 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            What We Do
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#0b1120] tracking-tight">
            Comprehensive Technology & Strategy Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Tailored software development and data-driven consulting for growing enterprises.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#f2f8fc] p-8 rounded-3xl border border-slate-200/80 hover:border-slate-300 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0b1120] text-white flex items-center justify-center mb-6 shadow-md">
                    <IconComponent className="w-6 h-6 text-[#c6f529]" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#0b1120] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#0b1120]">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 text-[#0b1120]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
