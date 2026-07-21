import React, { useState } from 'react';
import { Calculator, TrendingDown, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SavingsCalculator({ onOpenContact }) {
  const [agents, setAgents] = useState(5);
  const [tickets, setTickets] = useState(2500);

  // Financial Calculations
  const zendeskCostPerAgent = 89;
  const intercomResolutionCost = Math.round(tickets * 0.3 * 0.45);
  const traditionalTotal = (agents * zendeskCostPerAgent) + intercomResolutionCost;

  const quelpBaseSeat = 25;
  const deepseekTokenCostPerTicket = 0.008;
  const totalQuelpTokenCost = Math.round(tickets * deepseekTokenCostPerTicket * 1.15);
  const quelpTotal = (agents * quelpBaseSeat) + totalQuelpTokenCost;

  const monthlySavings = Math.max(0, traditionalTotal - quelpTotal);
  const annualSavings = monthlySavings * 12;
  const savingsPercent = Math.round((monthlySavings / traditionalTotal) * 100) || 68;

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-y border-white/10">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="badge-pill inline-flex items-center gap-1.5">
            <Calculator size={14} /> ROI Estimator
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight">
            Stop Paying Enterprise Seat Tax
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Compare traditional per-seat + AI resolution penalty pricing against Qolve's flat white-label model with direct token pass-through (+15% margin).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Controls */}
          <div className="lg:col-span-6 bento-card p-6 md:p-8 space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                  Support Agents / Team Members
                </label>
                <span className="text-teal-400 font-bold font-display text-base">{agents} agents</span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={agents}
                onChange={(e) => setAgents(parseInt(e.target.value))}
                className="w-full accent-teal-400 bg-slate-900 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                <span>1 agent</span>
                <span>15 agents</span>
                <span>30 agents</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                  Monthly Support Ticket Volume
                </label>
                <span className="text-teal-400 font-bold font-display text-base">{tickets.toLocaleString()} tickets/mo</span>
              </div>
              <input
                type="range"
                min="300"
                max="15000"
                step="200"
                value={tickets}
                onChange={(e) => setTickets(parseInt(e.target.value))}
                className="w-full accent-teal-400 bg-slate-900 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                <span>300 tickets</span>
                <span>7,500 tickets</span>
                <span>15,000 tickets</span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-slate-900/80 border border-white/5 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-teal-400 shrink-0" />
                <span>Zero resolution penalty fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-teal-400 shrink-0" />
                <span>100% White-Labeled (Zero third-party badges)</span>
              </div>
            </div>
          </div>

          {/* Results Comparison */}
          <div className="lg:col-span-6 bento-card-accent p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest flex items-center gap-1.5">
                <TrendingDown size={14} /> Financial Savings Summary
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-teal-500 text-slate-950 font-bold text-xs">
                Save {savingsPercent}%
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10">
                <span className="text-xs text-slate-400 block mb-1">Traditional Helpdesk</span>
                <span className="text-2xl font-bold font-display text-slate-300">£{traditionalTotal.toLocaleString()}</span>
                <span className="text-[11px] text-slate-500 block">/ month</span>
              </div>

              <div className="p-4 rounded-xl bg-teal-950/40 border border-teal-500/40">
                <span className="text-xs text-teal-300 block mb-1">Qolve Quelp</span>
                <span className="text-2xl font-bold font-display text-teal-400">£{quelpTotal.toLocaleString()}</span>
                <span className="text-[11px] text-teal-400/80 block">/ month</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-teal-500/30 text-center space-y-1">
              <div className="text-xs text-slate-400 font-mono uppercase">Projected Annual Savings</div>
              <div className="text-4xl font-black font-display text-gradient text-teal-300">
                £{annualSavings.toLocaleString()}
              </div>
              <div className="text-xs text-slate-400">
                Reinvest saved capital directly into growth & customer retention.
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="btn-primary w-full justify-center text-xs py-3"
            >
              Get Early Access to Quelp <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
