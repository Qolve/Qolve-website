import React, { useState } from 'react';

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
    subject: 'Stalwart Mailbox Delivery & AWS SES Relay',
    sender: 'gabriel@qolve.systems',
    time: '45 mins ago',
    status: 'Resolved',
    priority: 'Low',
    category: 'Mail Relay',
    aiSummary: 'Inbound Stalwart IMAP mailbox sync and AWS SES outbound relay verification complete.',
    assignedTo: 'Gabriel (Systems)',
    messages: [
      { sender: 'gabriel@qolve.systems', time: '09:15 AM', body: 'Has the AWS SES verified identity for qolve.systems finished propagating?' },
      { sender: 'Gabriel (Systems)', time: '09:30 AM', body: 'Verified! Outbound relay from Stalwart to SES is passing SPF, DKIM, and DMARC check-auth.' }
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
      setReplyText(`Hi ${selectedTicket.sender.split('@')[0]},\n\nThank you for reaching out to Qolve Support. Our grounded AI system has analyzed your request regarding "${selectedTicket.subject}". We are verifying your configurations now and will confirm once live.`);
      setAiGenerating(false);
    }, 500);
  };

  const handleSendReply = (e) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    const newMsg = {
      sender: 'You (Support Agent)',
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
    <section className="section_about" id="demo" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
      <div className="padding-global">
        <div className="container-large">
          <div className="vertical-center">
            {/* Tag */}
            <div className="tag" data-anim>
              <div className="dot-square" />
              <div>💧 Live Liquid Support Hub</div>
            </div>

            <div className="spacer-large" />

            <div className="max-width-medium is-41rem">
              <h2 className="text-align-center" data-anim style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                Experience Fluid Customer Triage
              </h2>
            </div>

            <div className="spacer-medium" />

            <div className="max-width-medium">
              <div className="text-base text-align-center" style={{ color: '#cbd5e1', fontSize: '1.0625rem' }} data-anim>
                Interact with live AI auto-categorization, team dispatching, and grounded draft generation.
              </div>
            </div>
          </div>

          <div className="spacer-section-large" />

          {/* Liquid Glass Interactive Shell */}
          <div
            className="liquid-glass"
            style={{
              borderRadius: '2rem',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              boxShadow: '0 30px 80px rgba(0, 24, 12, 0.8), inset 0 1.5px 2px rgba(255, 255, 255, 0.65)',
            }}
          >
            {/* Left Column: Tickets */}
            <div style={{ borderRight: '1px solid rgba(255,255,255,0.14)', background: 'rgba(4, 20, 12, 0.65)', padding: '1.5rem', backdropFilter: 'blur(24px)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.85rem', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>🌿</span> Inbound Mail Stream
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#03150b', background: 'linear-gradient(135deg, #6ee7b7 0%, #10b981 100%)', padding: '0.25rem 0.65rem', borderRadius: '9999px', boxShadow: '0 0 12px rgba(52,211,153,0.4)' }}>
                  {MOCK_TICKETS.length} Active
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {MOCK_TICKETS.map(ticket => (
                  <button
                    key={ticket.id}
                    onClick={() => setSelectedTicket(ticket)}
                    style={{
                      textAlign: 'left',
                      padding: '1.125rem',
                      borderRadius: '1.25rem',
                      background: selectedTicket.id === ticket.id 
                        ? 'radial-gradient(120% 120% at 30% 0%, rgba(110,231,183,0.28) 0%, rgba(6,46,26,0.6) 100%)' 
                        : 'rgba(255,255,255,0.04)',
                      border: selectedTicket.id === ticket.id ? '1.5px solid rgba(110,231,183,0.7)' : '1px solid rgba(255,255,255,0.12)',
                      boxShadow: selectedTicket.id === ticket.id ? '0 10px 25px rgba(0,25,12,0.5), inset 0 1px 1px rgba(255,255,255,0.5)' : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#6ee7b7', marginBottom: '0.35rem' }}>
                      <span style={{ fontWeight: 700 }}>{ticket.id}</span>
                      <span style={{ color: '#a7f3d0', opacity: 0.8 }}>{ticket.time}</span>
                    </div>
                    <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.9375rem', marginBottom: '0.35rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {ticket.subject}
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#cbd5e1', marginBottom: '0.65rem' }}>
                      {ticket.sender}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '9999px', background: ticket.priority === 'High' ? 'rgba(239,68,68,0.25)' : 'rgba(245,158,11,0.25)', color: ticket.priority === 'High' ? '#fca5a5' : '#fcd34d', border: `1px solid ${ticket.priority === 'High' ? 'rgba(239,68,68,0.5)' : 'rgba(245,158,11,0.5)'}` }}>
                        {ticket.priority}
                      </span>
                      <span style={{ fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.6rem', borderRadius: '9999px', background: 'rgba(52,211,153,0.15)', color: '#6ee7b7', border: '1px solid rgba(52,211,153,0.3)' }}>
                        {ticket.category}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Ticket Workspace */}
            <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', background: 'rgba(3, 14, 8, 0.75)', backdropFilter: 'blur(28px)' }}>
              {/* Header */}
              <div style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.12)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#34d399', marginBottom: '0.25rem' }}>
                    {selectedTicket.id} • {selectedTicket.sender}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc' }}>
                    {selectedTicket.subject}
                  </h3>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#a7f3d0', background: 'rgba(52,211,153,0.12)', padding: '0.4rem 0.85rem', borderRadius: '9999px', border: '1px solid rgba(52,211,153,0.3)' }}>
                  Assigned: <strong style={{ color: '#ffffff' }}>{selectedTicket.assignedTo}</strong>
                </div>
              </div>

              {/* AI Auto-Triage Summary Card */}
              <div style={{ padding: '1rem 1.25rem', borderRadius: '1.25rem', background: 'radial-gradient(120% 120% at 20% 0%, rgba(52,211,153,0.2) 0%, rgba(6,46,26,0.4) 100%)', border: '1px solid rgba(110,231,183,0.35)', boxShadow: '0 8px 20px rgba(0,25,12,0.4), inset 0 1px 1px rgba(255,255,255,0.4)' }}>
                <div style={{ fontSize: '0.78125rem', fontWeight: 700, color: '#6ee7b7', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>💧</span> Permafix AI Grounded Insight
                </div>
                <div style={{ fontSize: '0.875rem', color: '#f1f5f9', lineHeight: 1.55 }}>
                  {selectedTicket.aiSummary}
                </div>
              </div>

              {/* Thread Messages */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.85rem', overflowY: 'auto', maxHeight: '240px', paddingRight: '0.5rem' }}>
                {selectedTicket.messages.map((msg, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1rem',
                      borderRadius: '1rem',
                      background: msg.sender.includes('You') 
                        ? 'radial-gradient(120% 120% at 30% 0%, rgba(16,185,129,0.25) 0%, rgba(6,40,24,0.4) 100%)' 
                        : msg.sender.includes('AI') 
                        ? 'rgba(56,189,248,0.12)' 
                        : 'rgba(255,255,255,0.06)',
                      border: msg.sender.includes('You') 
                        ? '1px solid rgba(52,211,153,0.4)' 
                        : msg.sender.includes('AI')
                        ? '1px solid rgba(56,189,248,0.3)'
                        : '1px solid rgba(255,255,255,0.12)',
                      boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.3)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem' }}>
                      <span>{msg.sender}</span>
                      <span style={{ color: '#94a3b8', fontWeight: 400 }}>{msg.time}</span>
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#e2e8f0', lineHeight: 1.55 }}>
                      {msg.body}
                    </div>
                  </div>
                ))}
              </div>

              {/* Reply Composer */}
              <form onSubmit={handleSendReply} style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78125rem', fontWeight: 600, color: '#a7f3d0' }}>Liquid Support Composer</span>
                  <button
                    type="button"
                    onClick={handleAiDraft}
                    disabled={aiGenerating}
                    style={{
                      fontSize: '0.78125rem',
                      fontWeight: 700,
                      color: '#03150b',
                      background: 'linear-gradient(135deg, #6ee7b7 0%, #10b981 100%)',
                      border: '1px solid rgba(255,255,255,0.6)',
                      padding: '0.45rem 0.95rem',
                      borderRadius: '9999px',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(52,211,153,0.35), inset 0 1px 1px rgba(255,255,255,0.7)',
                    }}
                  >
                    {aiGenerating ? '💧 Distilling Draft...' : '✨ Generate AI Response'}
                  </button>
                </div>

                <textarea
                  rows={3}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type support response or generate with AI..."
                  style={{
                    width: '100%',
                    background: 'rgba(5, 22, 13, 0.75)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '1rem',
                    padding: '0.85rem',
                    color: '#f8fafc',
                    fontSize: '0.875rem',
                    resize: 'none',
                    outline: 'none',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)',
                  }}
                />

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    type="submit"
                    disabled={!replyText.trim()}
                    className="button"
                    style={{
                      background: replyText.trim() 
                        ? 'linear-gradient(135deg, #34d399 0%, #10b981 100%)' 
                        : 'rgba(255,255,255,0.15)',
                      color: '#03150b',
                      padding: '0.65rem 1.5rem',
                      borderRadius: '9999px',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      border: '1px solid rgba(255,255,255,0.5)',
                      cursor: replyText.trim() ? 'pointer' : 'not-allowed',
                      boxShadow: replyText.trim() ? '0 10px 25px rgba(16,185,129,0.4)' : 'none',
                    }}
                  >
                    Send Ticket Reply 🌿
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


