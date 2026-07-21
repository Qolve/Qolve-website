import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ShieldCheck, Zap, Layers, ArrowRight, Send, CheckCircle2, User, Bot, HelpCircle } from 'lucide-react';

export default function QuelpSpotlight({ onNavigate, onOpenContact }) {
  const [activeTab, setActiveTab] = useState('chat');
  const [messages, setMessages] = useState([
    { sender: 'user', text: 'Where is my order #8842?' },
    { sender: 'bot', text: 'Checking logistics system... Your order #8842 was dispatched yesterday via Royal Mail Tracked 24. Expected delivery today by 3 PM.', kb: 'KB-104: Logistics API' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal;
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      if (userText.toLowerCase().includes('refund') || userText.toLowerCase().includes('cancel')) {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: 'Guardrail Triggered: Financial/refund operations require human confirmation. Thread escalated to senior support agent.',
            escalated: true
          }
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: `Grounded Answer: Regarding "${userText}", our system has verified your account details against the knowledge base. All systems operating normally.`,
            kb: 'KB-201: Account Verification'
          }
        ]);
      }
    }, 900);
  };

  return (
    <section id="quelp" className="py-28 bg-slate-950 relative overflow-hidden border-t border-white/10">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <span className="badge-pill inline-flex items-center gap-1.5">
            <Zap size={14} /> Flagship B2B Product
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight">
            Quelp: White-Label Helpdesk
          </h2>
          <p className="text-slate-300 text-sm md:text-base">
            Replace per-seat SaaS costs with a fully branded, deterministic helpdesk engineered for high reliability and zero hallucinations.
          </p>
        </motion.div>

        {/* Bento Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Feature Card Matrix */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bento-card p-6 md:p-8 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">
                Core Platform Architecture
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                3 Pillars of Safe White-Label AI
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Most AI customer service bots damage customer trust by hallucinating or making unapproved commitments. Quelp operates with strict deterministic guardrails.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 font-display font-semibold text-white text-sm">
                    <ShieldCheck size={16} className="text-teal-400" />
                    1. Helpdesk First, AI Second
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Core ticket routing, custom email addresses, tags, and agent assignments work 100% reliably even if LLM APIs experience downtime.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 font-display font-semibold text-white text-sm">
                    <Layers size={16} className="text-teal-400" />
                    2. 100% White-Label Isolation
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Custom domain (`support.yourbrand.com`), custom email headers, and total removal of third-party branding.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 font-display font-semibold text-white text-sm">
                    <Zap size={16} className="text-teal-400" />
                    3. Pass-Through LLM Billing (+15%)
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Pay direct token costs for model queries + a flat 15% transparent margin. No per-resolution penalty tax.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('quelp')}
              className="btn-primary w-full justify-center text-xs py-3.5 cursor-pointer"
            >
              View Full Quelp Platform Specs <ArrowRight size={14} />
            </button>
          </motion.div>

          {/* Right Interactive Chat Sandbox */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bento-card-accent p-6 md:p-8 flex flex-col justify-between relative min-h-[440px]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></div>
                  <span className="font-mono text-xs text-teal-300 uppercase font-semibold">
                    Interactive Helpdesk Simulator
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Try asking "Where is my order?" or "Request refund"
                </span>
              </div>

              {/* Chat Thread */}
              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1 text-xs font-sans">
                {messages.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {m.sender === 'bot' && (
                      <div className="w-6 h-6 rounded bg-teal-500/20 border border-teal-500/40 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                        <Bot size={12} />
                      </div>
                    )}

                    <div
                      className={`p-3 rounded-xl max-w-[85%] leading-relaxed ${
                        m.sender === 'user'
                          ? 'bg-teal-500 text-slate-950 font-medium'
                          : m.escalated
                          ? 'bg-amber-950/80 border border-amber-500/40 text-amber-200'
                          : 'bg-slate-900 border border-white/10 text-slate-200'
                      }`}
                    >
                      <div>{m.text}</div>
                      {m.kb && (
                        <div className="text-[10px] font-mono text-teal-400 mt-1 pt-1 border-t border-white/10">
                          Verified Citation: {m.kb}
                        </div>
                      )}
                    </div>

                    {m.sender === 'user' && (
                      <div className="w-6 h-6 rounded bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                        <User size={12} />
                      </div>
                    )}
                  </motion.div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                    <Bot size={12} className="text-teal-400 animate-spin" />
                    <span>Quelp grounded AI thinking...</span>
                  </div>
                )}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type customer question..."
                className="flex-1 bg-slate-900/90 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
              />
              <button
                type="submit"
                className="btn-primary text-xs py-2.5 px-3.5 shrink-0 cursor-pointer"
              >
                <Send size={12} /> Send
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
