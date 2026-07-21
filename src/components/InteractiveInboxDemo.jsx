import React, { useState } from 'react';
import { 
  Inbox, 
  Send, 
  CheckCircle2, 
  User, 
  Tag, 
  Clock, 
  Sparkles, 
  RotateCcw,
  MessageSquare,
  Paperclip
} from 'lucide-react';

export default function InteractiveInboxDemo({ onOpenDemo }) {
  const [selectedTicketIndex, setSelectedTicketIndex] = useState(0);
  const [assignedAgent, setAssignedAgent] = useState('Freddie H');
  const [customReply, setCustomReply] = useState('');
  const [ticketState, setTicketState] = useState([
    {
      id: '#TK-101',
      customer: 'Sarah Jenkins',
      email: 'sarah@horizon.io',
      subject: 'Inbound email forwarding setup for support@',
      body: 'Hi Quelp team, we configured our Stalwart MX records on Route53 but wanted to double-check if DKIM verification needs 3 CNAMEs. Thanks!',
      status: 'Open',
      channel: 'Email',
      agent: 'Freddie H',
      replies: [
        { sender: 'Sarah Jenkins', time: '10:14 AM', text: 'Hi Quelp team, we configured our Stalwart MX records on Route53...' }
      ]
    },
    {
      id: '#TK-102',
      customer: 'Alex Rivera',
      email: 'alex@northwind.com',
      subject: 'How do I customize ticket tags & Macros?',
      body: 'Can we create custom category tags like "Billing", "Tech Support", and "Urgent"? Also, where do we save team email canned responses?',
      status: 'Open',
      channel: 'Live Chat',
      agent: 'Liam H',
      replies: [
        { sender: 'Alex Rivera', time: '10:42 AM', text: 'Can we create custom category tags like Billing and Tech Support?' }
      ]
    },
    {
      id: '#TK-103',
      customer: 'David Kim',
      email: 'david@finova.uk',
      subject: 'White-label CNAME domain setup question',
      body: 'We are setting up help.finova.uk and wanted to confirm if SSL certificates are automatically provisioned via Let’s Encrypt.',
      status: 'Resolved',
      channel: 'Email',
      agent: 'Vilius K',
      replies: [
        { sender: 'David Kim', time: '09:15 AM', text: 'We are setting up help.finova.uk and wanted to confirm...' },
        { sender: 'Vilius K', time: '09:20 AM', text: 'Hi David, yes! Custom domains get automatic 1-click SSL certificates.' }
      ]
    }
  ]);

  const activeTicket = ticketState[selectedTicketIndex];

  const cannedMacros = [
    "Hi there! Yes, automatic SSL certificates are provisioned within 5 minutes.",
    "I have updated your support mailbox alias. All incoming tickets are now active.",
    "Thank you for contacting support! Your ticket has been marked resolved."
  ];

  const handleSendReply = (replyText) => {
    const textToSend = replyText || customReply;
    if (!textToSend.trim()) return;

    const updated = [...ticketState];
    updated[selectedTicketIndex].replies.push({
      sender: assignedAgent,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: textToSend
    });
    updated[selectedTicketIndex].status = 'In Progress';
    setTicketState(updated);
    setCustomReply('');
  };

  const handleResolveTicket = () => {
    const updated = [...ticketState];
    updated[selectedTicketIndex].status = 'Resolved';
    setTicketState(updated);
  };

  return (
    <section 
      id="inbox-demo"
      style={{
        padding: '5rem 1.5rem',
        background: '#f8fafc',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.9rem', borderRadius: '9999px', background: '#e0f2fe', color: '#0284c7', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem' }}>
            <Inbox size={14} /> LIVE INTERACTIVE DESK DEMO
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
            Experience the Quelp Team Inbox
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem' }}>
            Try selecting customer tickets, applying canned macro responses, and assigning team members below.
          </p>
        </div>

        {/* Demo Desk Workspace */}
        <div 
          className="card-shadow"
          style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: '1.75rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            border: '1px solid #e2e8f0'
          }}
        >
          {/* Left Column: Ticket List Queue */}
          <div style={{ borderRight: '1px solid #f1f5f9', paddingRight: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0f172a' }}>Support Queue</span>
              <span style={{ fontSize: '0.75rem', background: '#f0fdfa', color: '#0d9488', padding: '0.2rem 0.5rem', borderRadius: '6px', fontWeight: 700 }}>
                {ticketState.length} Tickets
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {ticketState.map((tk, idx) => {
                const isSelected = selectedTicketIndex === idx;
                return (
                  <div
                    key={tk.id}
                    onClick={() => setSelectedTicketIndex(idx)}
                    style={{
                      padding: '1rem',
                      borderRadius: '14px',
                      background: isSelected ? '#f0fdfa' : '#ffffff',
                      border: isSelected ? '2px solid #0d9488' : '1px solid #e2e8f0',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b', marginBottom: '0.3rem' }}>
                      <span style={{ fontWeight: 800, color: '#0d9488' }}>{tk.id}</span>
                      <span style={{ 
                        padding: '0.15rem 0.45rem', 
                        borderRadius: '4px', 
                        fontWeight: 700,
                        background: tk.status === 'Resolved' ? '#dcfce7' : (tk.status === 'In Progress' ? '#fef3c7' : '#fee2e2'),
                        color: tk.status === 'Resolved' ? '#166534' : (tk.status === 'In Progress' ? '#92400e' : '#991b1b')
                      }}>
                        {tk.status}
                      </span>
                    </div>

                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a', marginBottom: '0.25rem' }}>
                      {tk.subject}
                    </div>

                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      {tk.customer} • via {tk.channel}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Ticket Conversation & Agent Actions */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: '1rem', borderBottom: '1px solid #f1f5f9', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#0d9488', fontWeight: 800 }}>{activeTicket.id} • {activeTicket.channel} Queue</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
                  {activeTicket.subject}
                </h3>
                <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '2px' }}>
                  Customer: <strong>{activeTicket.customer}</strong> ({activeTicket.email})
                </div>
              </div>

              {/* Agent Assignment Selector */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Assignee:</span>
                <select
                  value={assignedAgent}
                  onChange={(e) => setAssignedAgent(e.target.value)}
                  style={{
                    padding: '0.35rem 0.65rem',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    background: '#ffffff',
                    color: '#0f172a'
                  }}
                >
                  <option value="Freddie H">Freddie H</option>
                  <option value="Liam H">Liam H</option>
                  <option value="Vilius K">Vilius K</option>
                  <option value="Gabriel R">Gabriel R</option>
                </select>
              </div>
            </div>

            {/* Conversation Message Thread */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem', maxHeight: '240px', overflowY: 'auto', paddingRight: '0.5rem' }}>
              {activeTicket.replies.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    background: msg.sender === activeTicket.customer ? '#f8fafc' : '#f0fdfa',
                    border: msg.sender === activeTicket.customer ? '1px solid #e2e8f0' : '1px solid #ccfbf1',
                    alignSelf: msg.sender === activeTicket.customer ? 'flex-start' : 'flex-end',
                    maxWidth: '90%'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', fontSize: '0.75rem', color: '#64748b', marginBottom: '0.3rem' }}>
                    <strong style={{ color: msg.sender === activeTicket.customer ? '#0f172a' : '#0d9488' }}>{msg.sender}</strong>
                    <span>{msg.time}</span>
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.5 }}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Canned Macro Pills */}
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', marginBottom: '0.4rem' }}>
                Quick Canned Macros (Click to insert):
              </div>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {cannedMacros.map((macro, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendReply(macro)}
                    style={{
                      padding: '0.3rem 0.6rem',
                      borderRadius: '6px',
                      border: '1px solid #cbd5e1',
                      background: '#ffffff',
                      color: '#475569',
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = '#0d9488'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = '#cbd5e1'}
                  >
                    "{macro.slice(0, 35)}..."
                  </button>
                ))}
              </div>
            </div>

            {/* Reply Input Box */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                value={customReply}
                onChange={(e) => setCustomReply(e.target.value)}
                placeholder="Type your reply to customer..."
                onKeyDown={(e) => { if (e.key === 'Enter') handleSendReply(); }}
                style={{
                  flex: 1,
                  padding: '0.7rem 0.9rem',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
              <button
                onClick={() => handleSendReply()}
                className="btn-teal"
                style={{ padding: '0.7rem 1.25rem', fontSize: '0.85rem' }}
              >
                <Send size={15} /> Reply
              </button>
              <button
                onClick={handleResolveTicket}
                style={{
                  padding: '0.7rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid #bbf7d0',
                  background: '#f0fdf4',
                  color: '#166534',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  cursor: 'pointer'
                }}
              >
                Resolve
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
