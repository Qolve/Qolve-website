import React, { useState } from 'react';
import { Mail, CheckCircle2, Clock, Bot, UserCheck, Send, Sparkles, AlertCircle, Filter, Search } from 'lucide-react';

const MOCK_TICKETS = [
  {
    id: 'TICK-802',
    subject: 'DNS Alignment & Custom MAIL FROM Setup',
    sender: 'alex@acme-corp.com',
    time: '2 mins ago',
    status: 'Open',
    priority: 'High',
    category: 'Infrastructure',
    aiSummary: 'Customer requires assistance configuring custom MAIL FROM subdomain (bounce.qolve.systems) and SPF/DKIM verification.',
    assignedTo: 'Seb (DevOps)',
    messages: [
      { sender: 'alex@acme-corp.com', time: '10:14 AM', body: 'Hi Qolve Team, we are setting up custom mail routing and need help verifying SPF and DMARC alignment for our domain.' },
      { sender: 'AI Auto-Response', time: '10:15 AM', body: 'Hello Alex! I have auto-classified your ticket under Infrastructure. Our DevOps team lead (Seb) has been assigned and is verifying your DNS TXT records.' }
    ]
  },
  {
    id: 'TICK-801',
    subject: 'White-Label Helpdesk Branding Customization',
    sender: 'sarah@vertex-saas.io',
    time: '14 mins ago',
    status: 'In Progress',
    priority: 'Medium',
    category: 'Branding',
    aiSummary: 'Requesting custom logo placement, custom domain mapping, and theme colors on customer portal.',
    assignedTo: 'Freddie (Product)',
    messages: [
      { sender: 'sarah@vertex-saas.io', time: '09:48 AM', body: 'Can we customize the customer support portal with our company brand colors and SVG logo?' },
      { sender: 'Freddie (Product)', time: '10:02 AM', body: 'Hi Sarah! Yes, Quelp supports 100% white-label portal customization under your custom CNAME domain.' }
    ]
  },
  {
    id: 'TICK-799',
    subject: 'API Integration for Ticket Auto-Creation',
    sender: 'dev@fintech-labs.com',
    time: '45 mins ago',
    status: 'Resolved',
    priority: 'Low',
    category: 'API & Webhooks',
    aiSummary: 'Inbound webhook payload structure query resolved.',
    assignedTo: 'Vilius (Engineering)',
    messages: [
      { sender: 'dev@fintech-labs.com', time: '09:15 AM', body: 'Where can we find the webhook schema for inbound ticket events?' },
      { sender: 'Vilius (Engineering)', time: '09:30 AM', body: 'Documentation updated in developer portal! Webhook signatures are HMAC-SHA256 signed.' }
    ]
  }
];

export default function InteractiveInboxDemo() {
  const [selectedTicket, setSelectedTicket] = useState(MOCK_TICKETS[0]);
  const [replyText, setReplyText] = useState('');
  const [aiGenerating, setAiGenerating] = useState(false);

  const handleAiDraft = () => {
    setAiGenerating(true);
    setTimeout(() => {
      setReplyText(`Hi ${selectedTicket.sender.split('@')[0]},\n\nThank you for contacting Qolve Support. Our AI system has analyzed your request regarding "${selectedTicket.subject}". We are verifying your settings and will confirm once fully deployed.`);
      setAiGenerating(false);
    }, 600);
  };

  const handleSendReply = (e) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    const newMsg = {
      sender: 'You (Agent)',
      time: 'Just now',
      body: replyText
    };

    setSelectedTicket(prev => ({
      ...prev,
      messages: [...prev.messages, newMsg]
    }));

    setReplyText('');
  };

  return (
    <section id="demo" className="py-20 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Live Product Sandbox</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience Quelp Inbox Triage
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Click through incoming tickets below to test AI auto-categorization, team assignments, and AI draft assistance.
          </p>
        </div>

        {/* Demo Widget Shell */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          
          {/* Left Column: Ticket List */}
          <div className="lg:col-span-5 border-r border-slate-800 flex flex-col bg-slate-950/80">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400" />
                <span className="font-semibold text-sm text-slate-200">Inbound Mail Queue</span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-md bg-teal-950 text-teal-300 font-mono border border-teal-800">
                {MOCK_TICKETS.length} Active
              </span>
            </div>

            {/* List */}
            <div className="divide-y divide-slate-800/60 overflow-y-auto flex-1">
              {MOCK_TICKETS.map(ticket => (
                <button
                  key={ticket.id}
                  onClick={() => setSelectedTicket(ticket)}
                  className={`w-full p-4 text-left transition-colors flex flex-col gap-2 ${
                    selectedTicket.id === ticket.id
                      ? 'bg-teal-950/40 border-l-4 border-teal-500'
                      : 'hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-teal-400 font-medium">{ticket.id}</span>
                    <span className="text-slate-400">{ticket.time}</span>
                  </div>
                  <div className="font-semibold text-sm text-slate-200 line-clamp-1">
                    {ticket.subject}
                  </div>
                  <div className="text-xs text-slate-400 line-clamp-1">
                    {ticket.sender}
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      ticket.priority === 'High' ? 'bg-rose-950 text-rose-300 border border-rose-800' :
                      ticket.priority === 'Medium' ? 'bg-amber-950 text-amber-300 border border-amber-800' :
                      'bg-slate-800 text-slate-300'
                    }`}>
                      {ticket.priority}
                    </span>
                    <span className="text-[10px] font-medium text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md">
                      {ticket.category}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Ticket Workspace */}
          <div className="lg:col-span-7 flex flex-col bg-slate-900/90">
            
            {/* Header */}
            <div className="p-4 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-950">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-teal-400">
                  <span>{selectedTicket.id}</span>
                  <span>•</span>
                  <span>{selectedTicket.sender}</span>
                </div>
                <h3 className="font-semibold text-base text-white mt-0.5">
                  {selectedTicket.subject}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-400">Assigned:</span>
                <span className="font-semibold text-slate-200 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                  {selectedTicket.assignedTo}
                </span>
              </div>
            </div>

            {/* AI Auto-Triage Summary Card */}
            <div className="mx-4 mt-4 p-3 rounded-xl bg-teal-950/40 border border-teal-800/60 flex items-start gap-3">
              <Bot className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-semibold text-teal-300 block mb-0.5">AI Auto-Triage Insights</span>
                <p className="text-slate-300 leading-relaxed">{selectedTicket.aiSummary}</p>
              </div>
            </div>

            {/* Thread Messages */}
            <div className="p-4 overflow-y-auto flex-1 space-y-3">
              {selectedTicket.messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`p-3.5 rounded-xl text-xs space-y-1 ${
                    msg.sender.includes('You') ? 'bg-teal-900/40 border border-teal-700/60 ml-6' :
                    msg.sender.includes('AI') ? 'bg-sky-950/50 border border-sky-800/60' :
                    'bg-slate-800/80 border border-slate-700/60 mr-6'
                  }`}
                >
                  <div className="flex items-center justify-between font-semibold text-slate-300">
                    <span>{msg.sender}</span>
                    <span className="text-[10px] text-slate-400">{msg.time}</span>
                  </div>
                  <p className="text-slate-200 leading-relaxed">{msg.body}</p>
                </div>
              ))}
            </div>

            {/* Reply Composer */}
            <form onSubmit={handleSendReply} className="p-4 border-t border-slate-800 bg-slate-950 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Agent Quick Response</span>
                <button
                  type="button"
                  onClick={handleAiDraft}
                  disabled={aiGenerating}
                  className="text-xs text-teal-400 hover:text-teal-300 font-semibold flex items-center gap-1.5 bg-teal-950/60 border border-teal-800/60 px-2.5 py-1 rounded-lg transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  {aiGenerating ? 'Drafting...' : 'Auto-Generate AI Reply'}
                </button>
              </div>

              <textarea
                rows={2}
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Type your response to customer..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500 resize-none"
              />

              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  disabled={!replyText.trim()}
                  className="btn-teal text-xs py-2 px-4 rounded-lg font-semibold flex items-center gap-1.5 disabled:opacity-40"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send Ticket Response
                </button>
              </div>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
}
