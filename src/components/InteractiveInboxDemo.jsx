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
    }, 450);
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
    <section className="section_about" id="demo" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0', background: '#0d0f0e' }}>
      <div className="padding-global">
        <div className="container-large" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'left', marginBottom: '3.5rem', maxWidth: '44rem' }}>
            {/* Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                background: 'rgba(45, 75, 62, 0.25)',
                border: '1px solid rgba(173, 206, 189, 0.2)',
                color: '#adcebd',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#adcebd', boxShadow: '0 0 6px rgba(173,206,189,0.8)' }} />
              <span>Interactive Triage Console</span>
            </div>

            <h2 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: '#e2e3e0', letterSpacing: '-0.025em', lineHeight: 1.15, fontWeight: 600, marginBottom: '1rem' }}>
              Calm, intelligent support dispatch
            </h2>

            <p style={{ color: '#c1c8c3', fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Experience automated ticket categorization, team dispatching, and grounded AI reply synthesis in an organic, low-strain liquid glass environment.
            </p>
          </div>


          {/* macOS Liquid Glass Interactive Window */}
          <div
            className="macos-glass"
            style={{
              borderRadius: '1.5rem',
              overflow: 'hidden',
              boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            {/* macOS Window Titlebar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1.25rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                background: 'rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(30px)',
              }}
            >
              {/* Traffic Lights */}
              <div className="macos-traffic-lights">
                <div className="macos-dot is-red" />
                <div className="macos-dot is-yellow" />
                <div className="macos-dot is-green" />
              </div>

              {/* Title */}
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#e2e8f0', letterSpacing: '-0.01em', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span>🌿</span>
                <span>Quelp Support Workspace — Multi-Tenant Inbox</span>
              </div>

              {/* Status Indicator */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#34d399', fontWeight: 500 }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399' }} />
                <span>Live Relay</span>
              </div>
            </div>

            {/* Window Content Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
              {/* Left Column: Tickets */}
              <div style={{ borderRight: '1px solid rgba(255,255,255,0.12)', background: 'rgba(5, 16, 9, 0.5)', padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#f8fafc' }}>
                    Inbound Queue
                  </span>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: '#34d399', background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.3)', padding: '0.15rem 0.5rem', borderRadius: '9999px' }}>
                    {MOCK_TICKETS.length} Active
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {MOCK_TICKETS.map(ticket => (
                    <button
                      key={ticket.id}
                      onClick={() => setSelectedTicket(ticket)}
                      style={{
                        textAlign: 'left',
                        padding: '1rem',
                        borderRadius: '1rem',
                        background: selectedTicket.id === ticket.id 
                          ? 'rgba(255, 255, 255, 0.1)' 
                          : 'rgba(255, 255, 255, 0.025)',
                        border: selectedTicket.id === ticket.id ? '1px solid rgba(255, 255, 255, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)',
                        boxShadow: selectedTicket.id === ticket.id ? '0 8px 20px -6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.4)' : 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#34d399', marginBottom: '0.25rem' }}>
                        <span style={{ fontWeight: 600 }}>{ticket.id}</span>
                        <span style={{ color: '#94a3b8', fontWeight: 400 }}>{ticket.time}</span>
                      </div>
                      <div style={{ fontWeight: 600, color: '#f8fafc', fontSize: '0.875rem', marginBottom: '0.25rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {ticket.subject}
                      </div>
                      <div style={{ fontSize: '0.78125rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                        {ticket.sender}
                      </div>
                      <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.6875rem', fontWeight: 600, padding: '0.15rem 0.5rem', borderRadius: '9999px', background: ticket.priority === 'High' ? 'rgba(239,68,68,0.18)' : 'rgba(245,158,11,0.18)', color: ticket.priority === 'High' ? '#fca5a5' : '#fcd34d', border: `1px solid ${ticket.priority === 'High' ? 'rgba(239,68,68,0.4)' : 'rgba(245,158,11,0.4)'}` }}>
                          {ticket.priority}
                        </span>
                        <span style={{ fontSize: '0.6875rem', fontWeight: 500, padding: '0.15rem 0.5rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.06)', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.14)' }}>
                          {ticket.category}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Ticket Workspace */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(4, 13, 8, 0.65)' }}>
                {/* Header */}
                <div style={{ paddingBottom: '0.85rem', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 500, color: '#34d399', marginBottom: '0.2rem' }}>
                      {selectedTicket.id} • {selectedTicket.sender}
                    </div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em' }}>
                      {selectedTicket.subject}
                    </h3>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#e2e8f0', background: 'rgba(255,255,255,0.08)', padding: '0.35rem 0.75rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.15)' }}>
                    Assigned: <strong style={{ color: '#34d399' }}>{selectedTicket.assignedTo}</strong>
                  </div>
                </div>

                {/* AI Auto-Triage Summary Card */}
                <div style={{ padding: '0.85rem 1rem', borderRadius: '1rem', background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.25)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#34d399', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span>✨</span> Permafix AI Context Summary
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                    {selectedTicket.aiSummary}
                  </div>
                </div>

                {/* Thread Messages */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem', overflowY: 'auto', maxHeight: '220px', paddingRight: '0.4rem' }}>
                  {selectedTicket.messages.map((msg, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: '0.875rem',
                        background: msg.sender.includes('You') 
                          ? 'rgba(52, 211, 153, 0.12)' 
                          : msg.sender.includes('AI') 
                          ? 'rgba(56, 189, 248, 0.08)' 
                          : 'rgba(255, 255, 255, 0.04)',
                        border: msg.sender.includes('You') 
                          ? '1px solid rgba(52, 211, 153, 0.3)' 
                          : msg.sender.includes('AI')
                          ? '1px solid rgba(56, 189, 248, 0.2)'
                          : '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600, color: '#f8fafc', marginBottom: '0.25rem' }}>
                        <span>{msg.sender}</span>
                        <span style={{ color: '#64748b', fontWeight: 400 }}>{msg.time}</span>
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                        {msg.body}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Reply Composer */}
                <form onSubmit={handleSendReply} style={{ paddingTop: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 500, color: '#94a3b8' }}>Agent Response</span>
                    <button
                      type="button"
                      onClick={handleAiDraft}
                      disabled={aiGenerating}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#ffffff',
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                        border: '1px solid rgba(255,255,255,0.22)',
                        padding: '0.35rem 0.85rem',
                        borderRadius: '9999px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      }}
                    >
                      {aiGenerating ? 'Distilling Draft...' : '✨ Synthesize AI Reply'}
                    </button>
                  </div>

                  <textarea
                    rows={3}
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Compose support message or generate with AI..."
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: '0.75rem',
                      padding: '0.75rem',
                      color: '#f8fafc',
                      fontSize: '0.8125rem',
                      resize: 'none',
                      outline: 'none',
                      fontFamily: 'inherit',
                    }}
                  />

                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                      type="submit"
                      disabled={!replyText.trim()}
                      className="button"
                      style={{
                        background: replyText.trim() 
                          ? 'linear-gradient(180deg, rgba(52, 211, 153, 0.95) 0%, rgba(16, 185, 129, 0.9) 100%)' 
                          : 'rgba(255,255,255,0.1)',
                        color: '#021207',
                        padding: '0.5rem 1.25rem',
                        borderRadius: '9999px',
                        fontWeight: 600,
                        fontSize: '0.8125rem',
                        border: '1px solid rgba(255,255,255,0.4)',
                        cursor: replyText.trim() ? 'pointer' : 'not-allowed',
                      }}
                    >
                      Dispatch Reply
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



