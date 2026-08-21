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
      setReplyText(`Hi ${selectedTicket.sender.split('@')[0]},\n\nThank you for contacting Qolve Support. Our AI system has analyzed your request regarding "${selectedTicket.subject}". We are verifying your settings and will confirm once fully deployed.`);
      setAiGenerating(false);
    }, 600);
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
    <section className="section_about" id="demo" style={{ background: '#0f0f0f', color: '#ffffff', padding: '6rem 0' }}>
      <div className="padding-global">
        <div className="container-large">
          <div className="vertical-center">
            {/* Tag */}
            <div className="tag" data-anim style={{ background: 'rgba(214,253,112,0.15)', color: '#d6fd70', borderColor: 'rgba(214,253,112,0.3)' }}>
              <div className="dot-square" style={{ background: '#d6fd70' }} />
              <div>Interactive Product Sandbox</div>
            </div>

            <div className="spacer-large" />

            <div className="max-width-medium is-41rem">
              <h2 className="text-align-center text-color-on-primary" data-anim>
                Experience Qolve Support Triage
              </h2>
            </div>

            <div className="spacer-large" />

            <div className="max-width-medium">
              <div className="text-base text-align-center text-color-on-primary" data-anim style={{ opacity: 0.8 }}>
                Test AI auto-categorization, team assignments, and grounded AI reply suggestions in real time.
              </div>
            </div>
          </div>

          <div className="spacer-section-large" />

          {/* Interactive Shell */}
          <div
            style={{
              background: '#181818',
              borderRadius: '1rem',
              border: '1px solid rgba(255,255,255,0.12)',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              boxShadow: '0 20px 50px rgba(0,0,0,0.7)',
            }}
          >
            {/* Left Column: Tickets */}
            <div style={{ borderRight: '1px solid rgba(255,255,255,0.08)', background: '#121212', padding: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#ffffff' }}>Inbound Mail Queue</span>
                <span className="geistmono" style={{ fontSize: '0.75rem', color: '#d6fd70', background: 'rgba(214,253,112,0.15)', padding: '0.25rem 0.5rem', borderRadius: '0.375rem' }}>
                  {MOCK_TICKETS.length} Active
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {MOCK_TICKETS.map(ticket => (
                  <button
                    key={ticket.id}
                    onClick={() => setSelectedTicket(ticket)}
                    style={{
                      textAlign: 'left',
                      padding: '1rem',
                      borderRadius: '0.75rem',
                      background: selectedTicket.id === ticket.id ? 'rgba(214,253,112,0.12)' : 'rgba(255,255,255,0.03)',
                      border: selectedTicket.id === ticket.id ? '1px solid #d6fd70' : '1px solid rgba(255,255,255,0.06)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#d6fd70', marginBottom: '0.25rem' }}>
                      <span className="geistmono" style={{ fontWeight: 700 }}>{ticket.id}</span>
                      <span style={{ color: 'rgba(255,255,255,0.4)' }}>{ticket.time}</span>
                    </div>
                    <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.875rem', marginBottom: '0.25rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {ticket.subject}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>
                      {ticket.sender}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '0.15rem 0.4rem', borderRadius: '0.25rem', background: ticket.priority === 'High' ? '#ef4444' : '#f59e0b', color: '#0f0f0f' }}>
                        {ticket.priority}
                      </span>
                      <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.4rem', borderRadius: '0.25rem', background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)' }}>
                        {ticket.category}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Ticket Workspace */}
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#181818' }}>
              {/* Header */}
              <div style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div className="geistmono" style={{ fontSize: '0.75rem', color: '#d6fd70', marginBottom: '0.25rem' }}>
                    {selectedTicket.id} • {selectedTicket.sender}
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#ffffff' }}>
                    {selectedTicket.subject}
                  </h3>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.06)', padding: '0.375rem 0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                  Assigned: <strong style={{ color: '#ffffff' }}>{selectedTicket.assignedTo}</strong>
                </div>
              </div>

              {/* AI Auto-Triage Summary Card */}
              <div style={{ padding: '0.875rem 1rem', borderRadius: '0.75rem', background: 'rgba(214,253,112,0.08)', border: '1px solid rgba(214,253,112,0.2)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#d6fd70', marginBottom: '0.25rem' }}>
                  ✨ Permafix AI Auto-Triage Insights
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                  {selectedTicket.aiSummary}
                </div>
              </div>

              {/* Thread Messages */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem', overflowY: 'auto', maxHeight: '240px', paddingRight: '0.5rem' }}>
                {selectedTicket.messages.map((msg, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.875rem',
                      borderRadius: '0.75rem',
                      background: msg.sender.includes('You') ? 'rgba(214,253,112,0.12)' : msg.sender.includes('AI') ? 'rgba(56,189,248,0.12)' : 'rgba(255,255,255,0.04)',
                      border: msg.sender.includes('You') ? '1px solid rgba(214,253,112,0.3)' : '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.375rem' }}>
                      <span>{msg.sender}</span>
                      <span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>{msg.time}</span>
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                      {msg.body}
                    </div>
                  </div>
                ))}
              </div>

              {/* Reply Composer */}
              <form onSubmit={handleSendReply} style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>Support Agent Quick Reply</span>
                  <button
                    type="button"
                    onClick={handleAiDraft}
                    disabled={aiGenerating}
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#0f0f0f',
                      background: '#d6fd70',
                      border: 'none',
                      padding: '0.375rem 0.75rem',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                    }}
                  >
                    {aiGenerating ? 'Generating...' : '✨ Generate AI Draft'}
                  </button>
                </div>

                <textarea
                  rows={3}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type ticket response..."
                  style={{
                    width: '100%',
                    background: '#121212',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '0.75rem',
                    padding: '0.75rem',
                    color: '#ffffff',
                    fontSize: '0.8125rem',
                    resize: 'none',
                    outline: 'none',
                  }}
                />

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    type="submit"
                    disabled={!replyText.trim()}
                    className="button"
                    style={{
                      background: replyText.trim() ? '#d6fd70' : 'rgba(255,255,255,0.2)',
                      color: '#0f0f0f',
                      padding: '0.5rem 1.25rem',
                      borderRadius: '0.5rem',
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                      border: 'none',
                      cursor: replyText.trim() ? 'pointer' : 'not-allowed',
                    }}
                  >
                    Send Ticket Reply
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

