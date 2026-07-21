import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle, TrendingDown, DollarSign } from 'lucide-react';

export default function SavingsCalculator({ onOpenContact }) {
  const [agents, setAgents] = useState(5);
  const [tickets, setTickets] = useState(2500);

  // Cost estimates
  // Traditional Helpdesk (Zendesk Growth / Intercom with seats + resolution fees): ~£79-£115 per agent + £0.50 per outcome
  const zendeskCostPerAgent = 89;
  const intercomResolutionCost = Math.round(tickets * 0.3 * 0.45); // 30% resolution * £0.45 per AI outcome
  const traditionalTotal = (agents * zendeskCostPerAgent) + intercomResolutionCost;

  // Qolve Quelp: £19 base per seat or flat team tier + direct API cost + 15% margin
  const quelpBaseSeat = 25;
  const deepseekTokenCostPerTicket = 0.008; // ~$0.01 per ticket
  const totalQuelpTokenCost = Math.round(tickets * deepseekTokenCostPerTicket * 1.15); // +15% margin
  const quelpTotal = (agents * quelpBaseSeat) + totalQuelpTokenCost;

  const monthlySavings = Math.max(0, traditionalTotal - quelpTotal);
  const annualSavings = monthlySavings * 12;
  const savingsPercent = Math.round((monthlySavings / traditionalTotal) * 100) || 68;

  return (
    <section className="py-20 relative overflow-hidden bg-slate-950/60 border-y border-slate-800/60">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge-teal mb-3 inline-flex items-center gap-1.5">
            <Calculator size={14} /> Transparent ROI Estimator
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">
            Stop Paying Enterprise Tax on Support Seats
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Compare traditional per-seat + resolution penalty pricing against Qolve’s flat white-label model with direct token pass-through (+15% margin).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-6 glass-panel p-6 md:p-8 space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
                  Support Agents / Team Members
                </label>
                <span className="text-teal-400 font-bold font-display text-lg">{agents} agents</span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={agents}
                onChange={(e) => setAgents(parseInt(e.target.value))}
                className="w-full accent-teal-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>1 agent</span>
                <span>15 agents</span>
                <span>30 agents</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
                  Monthly Support Ticket Volume
                </label>
                <span className="text-teal-400 font-bold font-display text-lg">{tickets.toLocaleString()} tickets/mo</span>
              </div>
              <input
                type="range"
                min="300"
                max="15000"
                step="200"
                value={tickets}
                onChange={(e) => setTickets(parseInt(e.target.value))}
                className="w-full accent-teal-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>300 tickets</span>
                <span>7,500 tickets</span>
                <span>15,000 tickets</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-start gap-3 text-xs text-slate-300">
                <CheckCircle size={16} className="text-teal-400 shrink-0 mt-0.5" />
                <span><strong>No AI outcome penalties:</strong> You pay actual LLM token cost + 15% transparent operational markup.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-slate-300">
                <CheckCircle size={16} className="text-teal-400 shrink-0 mt-0.5" />
                <span><strong>100% White-Labeled:</strong> Custom domains, custom email identities, zero "Powered by" badges.</span>
              </div>
            </div>
          </div>

          {/* Results Comparison */}
          <div className="lg:col-span-6 glass-panel-accent p-6 md:p-8 relative">
            <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold uppercase tracking-widest mb-4">
              <TrendingDown size={16} /> Projected Financial Savings
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-red-500/20">
                <span className="text-xs text-slate-400 block mb-1">Traditional Helpdesk</span>
                <span className="text-2xl md:text-3xl font-bold text-slate-300 font-display">£{traditionalTotal.toLocaleString()}</span>
                <span className="text-xs text-slate-500 block mt-1">/ month</span>
              </div>

              <div className="p-4 rounded-xl bg-teal-950/50 border border-teal-500/40 relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-teal-500 text-slate-950 font-bold text-[10px] uppercase px-2 py-0.5 rounded-full">
                  Save {savingsPercent}%
                </div>
                <span className="text-xs text-teal-300 block mb-1">Qolve Quelp Platform</span>
                <span className="text-2xl md:text-3xl font-bold text-teal-400 font-display">£{quelpTotal.toLocaleString()}</span>
                <span className="text-xs text-teal-400/80 block mt-1">/ month</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/90 border border-teal-500/30 text-center mb-6">
              <div className="text-xs text-slate-400 uppercase tracking-wider">Estimated Annual Savings</div>
              <div className="text-4xl font-extrabold text-white font-display text-gradient-teal my-1">
                £{annualSavings.toLocaleString()}
              </div>
              <div className="text-xs text-slate-400">
                Reinvest into product development & customer acquisition.
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="btn-primary w-full justify-center text-center py-3"
            >
              Get Early Access to Quelp <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
