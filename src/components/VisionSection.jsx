import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function VisionSection() {
  return (
    <section id="vision" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 border border-teal-200 text-teal-800 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Company Vision</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Building Software that Empowers Organizations
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              At Qolve, we believe that software should be intuitive, highly resilient, and purposefully designed. We focus on building clean digital infrastructure and intelligent software solutions that help modern businesses scale efficiently.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-slate-700 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span>Purposeful Software Architecture built for long-term maintainability.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-700 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span>Modern Technical Standards prioritizing security, performance, and accessibility.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-700 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span>Dedicated Product Strategy focused on elegant, user-first experiences.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Feature Box */}
          <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-slate-200 card-shadow">
            <h3 className="font-heading text-xl font-bold text-slate-900 mb-4">
              Our Core Principles
            </h3>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <h4 className="font-bold text-sm text-slate-900">Simplicity & Elegance</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Stripping away unnecessary friction to deliver straightforward, impactful digital products.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <h4 className="font-bold text-sm text-slate-900">Reliable Engineering</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Enforcing clean coding practices and systematic testing across every project.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <h4 className="font-bold text-sm text-slate-900">Continuous Growth</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Adapting swiftly to emerging technologies while maintaining rock-solid security.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
