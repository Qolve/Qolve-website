import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function PricingSection({ onOpenContact }) {
  const [agents, setAgents] = useState(15);

  // Per-seat legacy cost estimate (Zendesk @ $89/seat/mo)
  const legacyCost = agents * 89;
  const qolveCost = 349;
  const monthlySavings = Math.max(0, legacyCost - qolveCost);

  return (
    <section id="pricing" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Fair B2B Pricing</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Flat-Rate SaaS. No Per-Seat Inflation.
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Pay for your software platform, not for every team member who logs in.
          </p>
        </div>

        {/* ROI Seat Savings Calculator */}
        <div className="max-w-3xl mx-auto mb-16 bg-white p-6 sm:p-8 rounded-2xl border border-teal-200 card-shadow text-center">
          <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">
            Calculate Your Monthly Savings vs Traditional Helpdesks
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Drag the slider to adjust your support agent team size:
          </p>

          <div className="space-y-4 max-w-md mx-auto">
            <div className="flex items-center justify-between text-sm font-semibold text-slate-800">
              <span>Support Team Size:</span>
              <span className="text-teal-700 font-bold text-lg">{agents} Agents</span>
            </div>
            
            <input 
              type="range"
              min={3}
              max={60}
              value={agents}
              onChange={(e) => setAgents(parseInt(e.target.value))}
              className="w-full accent-teal-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
            />

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-left">
              <div className="p-3 bg-rose-50 rounded-xl border border-rose-100">
                <span className="text-[11px] font-semibold text-rose-800 uppercase block">Legacy Per-Seat SaaS</span>
                <span className="text-xl font-bold text-rose-700">${legacyCost}/mo</span>
                <span className="text-[10px] text-rose-600 block">($89/agent/mo)</span>
              </div>
              <div className="p-3 bg-teal-50 rounded-xl border border-teal-200">
                <span className="text-[11px] font-semibold text-teal-800 uppercase block">Qolve Quelp Growth</span>
                <span className="text-xl font-bold text-teal-700">${qolveCost}/mo</span>
                <span className="text-[10px] text-teal-600 block">(Flat Rate)</span>
              </div>
            </div>

            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>You save approx. ${monthlySavings.toLocaleString()}/month (${(monthlySavings * 12).toLocaleString()}/year)!</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Starter Plan */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 card-shadow flex flex-col justify-between">
            <div>
              <span className="font-heading text-lg font-bold text-slate-900 block">Starter</span>
              <p className="text-xs text-slate-500 mt-1">For early-stage startups testing helpdesk automation.</p>
              <div className="mt-6 mb-6">
                <span className="font-heading text-4xl font-extrabold text-slate-900">$149</span>
                <span className="text-xs font-semibold text-slate-500"> / month</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-600 border-t border-slate-100 pt-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Up to 10 Support Agents</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Inbound Email Triage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Standard Helpdesk Inbox</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Stalwart Mail Integration</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={onOpenContact}
              className="mt-8 btn-outline w-full justify-center text-xs py-3"
            >
              Get Started
            </button>
          </div>

          {/* Growth Plan (Highlighted) */}
          <div className="bg-gradient-to-b from-teal-900 to-slate-900 text-white p-8 rounded-2xl border-2 border-teal-500 shadow-2xl relative flex flex-col justify-between">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal-500 text-slate-950 font-bold text-[11px] tracking-wider uppercase px-3 py-1 rounded-full">
              Most Popular
            </div>
            <div>
              <span className="font-heading text-xl font-bold text-white block">Growth</span>
              <p className="text-xs text-teal-200 mt-1">For scaling SMBs requiring white-label support.</p>
              <div className="mt-6 mb-6">
                <span className="font-heading text-4xl font-extrabold text-white">$349</span>
                <span className="text-xs font-semibold text-teal-200"> / month</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-200 border-t border-teal-800/80 pt-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span><strong>Unlimited</strong> Support Agents</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>100% White-Label Custom CNAME</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>AI Smart Draft & Triage Engine</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>AWS SES Relay & SPF/DKIM Alignment</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Shared Team Mailboxes</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={onOpenContact}
              className="mt-8 btn-teal w-full justify-center text-xs py-3 shadow-lg shadow-teal-500/25"
            >
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 card-shadow flex flex-col justify-between">
            <div>
              <span className="font-heading text-lg font-bold text-slate-900 block">Enterprise</span>
              <p className="text-xs text-slate-500 mt-1">Dedicated cloud infrastructure & custom compliance.</p>
              <div className="mt-6 mb-6">
                <span className="font-heading text-4xl font-extrabold text-slate-900">$799</span>
                <span className="text-xs font-semibold text-slate-500"> / month</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-600 border-t border-slate-100 pt-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Everything in Growth</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Dedicated VPC / AWS Tenant</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Custom SSO (SAML / OAuth)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Dedicated Slack / Engineering Channel</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={onOpenContact}
              className="mt-8 btn-outline w-full justify-center text-xs py-3"
            >
              Contact Sales
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
