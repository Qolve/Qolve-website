import React, { useState } from 'react';
import { Bot, ShieldCheck, Zap, Lock, Building, FileText, Send, ArrowRight, CheckCircle2, CornerDownRight } from 'lucide-react';

export default function QuelpSpotlight({ onNavigate, onOpenContact }) {
  const [selectedBrand, setSelectedBrand] = useState('acme');
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! Welcome to Support. How can I assist you with your order or account today?',
      citation: 'KB-101: Support Policy Overview'
    }
  ]);

  const brands = {
    acme: { name: 'Acme Retail', bg: '#080d12', accent: '#14b8a6' },
    techflow: { name: 'TechFlow Cloud', bg: '#0b1320', accent: '#00d2ff' },
    qolve: { name: 'Quelp Default', bg: '#090e15', accent: '#10b981' }
  };

  const currentBrand = brands[selectedBrand];

  const handleSendMessage = (customText) => {
    const text = customText || chatInput;
    if (!text.trim()) return;

    const updated = [...messages, { sender: 'user', text }];
    setMessages(updated);
    setChatInput('');

    setTimeout(() => {
      const lower = text.toLowerCase();
      if (lower.includes('human') || lower.includes('person') || lower.includes('agent') || lower.includes('refund')) {
        setMessages([
          ...updated,
          {
            sender: 'bot',
            text: 'I have escalated your conversation directly to a human agent. A team member will join this thread immediately with complete context.',
            escalated: true,
            citation: 'Flowchart Gate: Instant Human Handoff'
          }
        ]);
      } else if (lower.includes('return') || lower.includes('policy')) {
        setMessages([
          ...updated,
          {
            sender: 'bot',
            text: 'Our return policy permits returns within 30 days of delivery in original condition. Would you like me to email you a return authorization form?',
            citation: 'KB-204: Returns & Exchange Policy'
          }
        ]);
      } else {
        setMessages([
          ...updated,
          {
            sender: 'bot',
            text: 'I have logged your request against our knowledge articles. Could you provide your order number or account email so I can check details?',
            citation: 'KB-102: Account Verification'
          }
        ]);
      }
    }, 500);
  };

  return (
    <section id="quelp" className="py-24 bg-slate-950/90 relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="badge-pill">Flagship Product</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight">
            Quelp: The White-Label Support Platform
          </h2>
          <p className="text-slate-300 text-base md:text-lg">
            Re-engineering customer support for SMBs. 100% white-label identity, safe human-first AI handoffs, and transparent token pricing.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
          {/* Card 1: Interactive Chat Simulator (Left 7 Cols) */}
          <div className="lg:col-span-7 bento-card p-6 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400">Interactive Sandbox</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/30">
                  Quelp V1 Engine
                </span>
              </div>

              {/* Brand Switcher */}
              <div className="flex items-center gap-1.5">
                {Object.keys(brands).map((bKey) => (
                  <button
                    key={bKey}
                    onClick={() => setSelectedBrand(bKey)}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                      selectedBrand === bKey
                        ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    {brands[bKey].name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Body */}
            <div className="rounded-xl p-4 h-[280px] overflow-y-auto space-y-3 font-sans text-xs border border-white/5" style={{ background: currentBrand.bg }}>
              {messages.map((m, idx) => (
                <div key={idx} className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`max-w-[85%] p-3 rounded-lg ${
                      m.sender === 'user'
                        ? 'bg-teal-500 text-slate-950 font-medium'
                        : m.escalated
                        ? 'bg-amber-950/80 border border-amber-500/40 text-amber-200'
                        : 'bg-slate-900 border border-white/10 text-slate-200'
                    }`}
                  >
                    <p>{m.text}</p>
                  </div>
                  {m.citation && (
                    <span className="text-[10px] font-mono text-slate-500 mt-1 flex items-center gap-1">
                      <FileText size={10} className="text-teal-400" /> {m.citation}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Suggestions & Input */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 overflow-x-auto text-[11px] text-slate-400 py-1">
                <span className="font-mono text-slate-500 shrink-0">Try prompt:</span>
                <button
                  onClick={() => handleSendMessage('What is your return policy?')}
                  className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-white/10 shrink-0 cursor-pointer"
                >
                  "Return policy"
                </button>
                <button
                  onClick={() => handleSendMessage('I need to speak to a real person')}
                  className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-teal-300 border border-teal-500/30 shrink-0 cursor-pointer"
                >
                  "Talk to human agent"
                </button>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type a support inquiry..."
                  className="flex-1 bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                />
                <button
                  onClick={() => handleSendMessage()}
                  className="p-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 transition-colors cursor-pointer"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: 3 Pillars (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="bento-card p-5 space-y-2">
              <div className="flex items-center gap-2 text-teal-400 font-display font-bold text-sm">
                <ShieldCheck size={18} /> Helpdesk First Architecture
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Core ticketing, email thread ingestion, agent roles, tags, and SLA reporting function 100% reliably even if third-party LLMs experience an outage.
              </p>
            </div>

            <div className="bento-card p-5 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-display font-bold text-sm">
                <Building size={18} /> Deep Multi-Tenancy & Custom Subdomains
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Run your helpdesk on `support.yourbrand.com` with custom transactional email identities and zero third-party "Powered by" badges.
              </p>
            </div>

            <div className="bento-card p-5 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-display font-bold text-sm">
                <Lock size={18} /> Direct Token Cost Model (+15%)
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Stop paying per-outcome penalties or bloated monthly seat fees. Pay raw LLM API costs directly with a transparent 15% maintenance markup.
              </p>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-xl bg-slate-900/60 border border-white/10 gap-4">
          <div className="text-xs text-slate-300">
            <strong>Ready to evaluate Quelp for your team?</strong> Apply for V1 commercial beta access or schedule a technical review with our engineering team.
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button onClick={() => onNavigate('quelp')} className="btn-primary text-xs py-2 px-4">
              Explore Quelp Specs <ArrowRight size={14} />
            </button>
            <button onClick={onOpenContact} className="btn-secondary text-xs py-2 px-4">
              Join Pilot List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
