import React, { useState } from 'react';
import { Bot, User, Send, ShieldCheck, RefreshCw, FileText, CheckCircle2, ArrowRight, CornerDownRight, Sparkles, Building, Lock } from 'lucide-react';

export default function QuelpSpotlight({ onNavigate, onOpenContact }) {
  const [activeTab, setActiveTab] = useState('demo');
  const [selectedBrand, setSelectedBrand] = useState('acme'); // acme, techflow, qolve
  const [chatInput, setChatInput] = useState('');
  
  // Interactive Chat Simulator State
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! Welcome to Support. How can I assist you with your order or account today?',
      grounded: true,
      citation: 'KB-101: General Support Policy'
    }
  ]);

  const brandPresets = {
    acme: {
      name: 'Acme Retail Ltd',
      color: '#00C4B4',
      bg: '#0a1518',
      header: 'Acme Support Hub'
    },
    techflow: {
      name: 'TechFlow Cloud',
      color: '#00d2ff',
      bg: '#0b1320',
      header: 'TechFlow Helpdesk'
    },
    qolve: {
      name: 'Quelp Default',
      color: '#10b981',
      bg: '#080d12',
      header: 'Customer Portal'
    }
  };

  const currentBrand = brandPresets[selectedBrand];

  const handleSendMessage = (textToSend) => {
    const text = textToSend || chatInput;
    if (!text.trim()) return;

    // Add user message
    const newMsgs = [...messages, { sender: 'user', text }];
    setMessages(newMsgs);
    setChatInput('');

    // Simulate Quelp's deterministic grounded response vs instant human handoff
    setTimeout(() => {
      const lower = text.toLowerCase();
      if (lower.includes('human') || lower.includes('agent') || lower.includes('person') || lower.includes('refund')) {
        setMessages([
          ...newMsgs,
          {
            sender: 'bot',
            text: 'I have transferred your ticket directly to our support team agent. A human representative will take over this thread immediately with your full conversation history.',
            escalated: true,
            citation: 'Flowchart Gate: Immediate Human Handoff Triggered'
          }
        ]);
      } else if (lower.includes('return') || lower.includes('policy')) {
        setMessages([
          ...newMsgs,
          {
            sender: 'bot',
            text: 'Our return policy allows items to be returned within 30 days of delivery in original packaging. Would you like me to generate a prepaid return label for your order?',
            grounded: true,
            citation: 'KB-204: Returns & Replacements Guide'
          }
        ]);
      } else {
        setMessages([
          ...newMsgs,
          {
            sender: 'bot',
            text: 'Thank you for your message. I have indexed your request against our knowledge articles. Is there anything specific regarding your account or order number I can check?',
            grounded: true,
            citation: 'KB-102: Account & Order Verification'
          }
        ]);
      }
    }, 600);
  };

  return (
    <section id="quelp" className="py-24 relative overflow-hidden bg-slate-950/80">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="badge-teal inline-flex items-center gap-1.5">
            <Sparkles size={14} /> Flagship Software Project
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight">
            Quelp: The White-Label Support Platform
          </h2>
          <p className="text-slate-300 text-base md:text-lg">
            Everything SMBs need from Zendesk or Gorgias—re-engineered for affordability, 100% white-label identity, and safe human-like AI assistance.
          </p>
        </div>

        {/* Brand Selector Controls */}
        <div className="mb-8 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
            <Building size={16} className="text-teal-400" /> Test White-Label Brand Theme:
          </div>
          <div className="flex items-center gap-2">
            {Object.keys(brandPresets).map((bKey) => (
              <button
                key={bKey}
                onClick={() => setSelectedBrand(bKey)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedBrand === bKey
                    ? 'bg-teal-500/20 text-white border border-teal-500/50'
                    : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {brandPresets[bKey].name}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Sandbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Chat Simulation */}
          <div className="lg:col-span-7 glass-panel-accent p-4 md:p-6 rounded-2xl">
            <div className="rounded-xl overflow-hidden border border-slate-800" style={{ background: currentBrand.bg }}>
              {/* Header */}
              <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-slate-950 text-xs font-display"
                    style={{ background: currentBrand.color }}
                  >
                    {currentBrand.name.substring(0, 1)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white font-display">{currentBrand.header}</div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>100% Branded Experience</span>
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  Quelp Engine
                </span>
              </div>

              {/* Chat Messages Body */}
              <div className="p-4 h-[320px] overflow-y-auto space-y-3 font-body text-xs">
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-xl ${
                        m.sender === 'user'
                          ? 'bg-teal-500 text-slate-950 font-medium rounded-br-none'
                          : m.escalated
                          ? 'bg-amber-950/70 border border-amber-500/40 text-amber-100 rounded-bl-none'
                          : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none'
                      }`}
                    >
                      <p>{m.text}</p>
                    </div>

                    {m.citation && (
                      <div className="mt-1 flex items-center gap-1 text-[10px] text-slate-400 font-mono">
                        <FileText size={10} className="text-teal-400" />
                        <span>{m.citation}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Sample Prompts */}
              <div className="p-2 bg-slate-950/80 border-t border-slate-800 flex items-center gap-2 overflow-x-auto text-[11px] text-slate-400">
                <span className="text-slate-500 shrink-0 font-mono">Quick test:</span>
                <button
                  onClick={() => handleSendMessage('What is your return policy?')}
                  className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 shrink-0 border border-slate-800"
                >
                  "What is return policy?"
                </button>
                <button
                  onClick={() => handleSendMessage('I want to speak to a real person')}
                  className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 text-teal-300 shrink-0 border border-teal-500/30"
                >
                  "Talk to human agent"
                </button>
              </div>

              {/* Input Footer */}
              <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type a customer question..."
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                />
                <button
                  onClick={() => handleSendMessage()}
                  className="p-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 transition-colors"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold font-display text-white text-base">Helpdesk First, AI Second</h4>
                  <p className="text-xs text-slate-400">Core ticketing functions even if LLMs are offline.</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Quelp is a complete ticketing platform. You get email inbox syncing, ticket assignment, custom tags, agent roles, knowledge base, and SLA tracking—not just an isolated chat bubble.
              </p>
            </div>

            <div className="glass-panel p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Building size={20} />
                </div>
                <div>
                  <h4 className="font-bold font-display text-white text-base">True White-Label Branding</h4>
                  <p className="text-xs text-slate-400">Your custom domain, emails, logo & colors.</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Remove "Powered by Third-Party" badges completely. Run your helpdesk on your own domain (`support.yourbrand.com`) with custom transactional email identities.
              </p>
            </div>

            <div className="glass-panel p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <Lock size={20} />
                </div>
                <div>
                  <h4 className="font-bold font-display text-white text-base">Transparent Token Pricing</h4>
                  <p className="text-xs text-slate-400">Direct API costs + 15% transparent markup.</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Stop paying per-outcome penalties or runaway monthly bills. Quelp passes through raw LLM token costs with a transparent 15% maintenance markup.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => onNavigate('quelp')}
                className="btn-primary text-xs"
              >
                Deep-Dive Quelp Features <ArrowRight size={14} />
              </button>

              <button
                onClick={onOpenContact}
                className="btn-secondary text-xs"
              >
                Join Pilot Program
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
