import React, { useState } from 'react';
import { Send, Sparkles, Bot, User } from 'lucide-react';

const QUICK = [
  'Who is Qolve?',
  'What is Quelp?',
  'Who is on the Qolve team?',
  'What are your core principles?',
];

function getReply(text) {
  const l = text.toLowerCase();
  if (l.includes('who is qolve') || l.includes('about qolve') || l.includes('company')) {
    return 'Qolve Systems is a UK-registered software studio focused on building lean, robust AI applications. We craft tools designed to feel like a natural extension of your team.';
  }
  if (l.includes('quelp')) {
    return "Quelp is Qolve's flagship white-label customer support & helpdesk SaaS platform. It gives SMBs a unified email & chat ticketing system, custom branding, and grounded AI assistance without enterprise bloat.";
  }
  if (l.includes('team') || l.includes('members') || l.includes('who are')) {
    return 'The Qolve team: Liam Haines (Product & Commercial), Freddie Haude (PM & AI Quality), Vilius (Frontend & Data-Model), heo (Backend & Infrastructure), and Oreo (Lead Sales).';
  }
  if (l.includes('principle') || l.includes('belief') || l.includes('values') || l.includes('safety')) {
    return 'Our core principles are: 1) Fast human handoff over fake AI confidence, 2) Atomic, robust engineering with zero slop, and 3) True white-label brand freedom for businesses.';
  }
  return "Qolve Systems is a modern software studio crafting intuitive, human-centric AI applications like Quelp.";
}

export default function CompanyWidget() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! Welcome to Qolve Systems. Ask me anything about our company, our team, or our flagship platform Quelp!' },
  ]);
  const [input, setInput] = useState('');

  const send = (query) => {
    const text = (query || input).trim();
    if (!text) return;
    const updated = [...messages, { sender: 'user', text }];
    setMessages(updated);
    setInput('');
    setTimeout(() => {
      setMessages([...updated, { sender: 'bot', text: getReply(text) }]);
    }, 420);
  };

  return (
    <section style={{
      padding: '80px 0',
      background: 'var(--bg-base)',
      borderTop: '1px solid var(--border-sub)',
    }}>
      <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <div className="pill pill-teal"><Sparkles size={11} /> Interactive Qolve Assistant</div>
          </div>
          <h2 className="display-md" style={{ marginBottom: 10 }}>Ask Qolve Anything</h2>
          <p style={{ fontSize: 14, color: 'var(--text-3)' }}>
            Test our interactive assistant demo to learn more about our team and software.
          </p>
        </div>

        {/* Chat widget */}
        <div style={{
          background: 'var(--bg-surface)',
          borderRadius: 20, border: '1px solid var(--border-mid)',
          overflow: 'hidden',
          boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
        }}>
          {/* Widget header */}
          <div style={{
            background: 'var(--bg-void)',
            padding: '14px 20px',
            borderBottom: '1px solid var(--border-sub)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: 'linear-gradient(135deg, var(--teal), var(--teal-deep))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: 'white',
              }}>Q</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-1)' }}>Qolve Company Assistant</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: 'var(--teal)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', display: 'inline-block' }} />
                  Grounded Knowledge Engine
                </div>
              </div>
            </div>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-3)',
              padding: '3px 10px', borderRadius: 5,
              background: 'var(--bg-surface)', border: '1px solid var(--border-sub)',
            }}>Qolve v1.0</span>
          </div>

          {/* Messages */}
          <div style={{
            padding: '20px', maxHeight: 320, overflowY: 'auto',
            background: 'var(--bg-base)',
            display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, justifyContent: m.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                {m.sender === 'bot' && (
                  <div style={{
                    width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                    background: 'rgba(0,161,157,0.15)', border: '1px solid rgba(0,161,157,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2,
                  }}>
                    <Bot size={14} style={{ color: 'var(--teal)' }} />
                  </div>
                )}
                <div style={{
                  padding: '12px 16px', maxWidth: '82%',
                  fontSize: 13.5, lineHeight: 1.6,
                  background: m.sender === 'user'
                    ? 'linear-gradient(135deg, var(--teal), var(--teal-deep))'
                    : 'var(--bg-surface)',
                  color: m.sender === 'user' ? 'white' : 'var(--text-2)',
                  border: m.sender === 'bot' ? '1px solid var(--border-sub)' : 'none',
                  borderRadius: m.sender === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                }}>{m.text}</div>
                {m.sender === 'user' && (
                  <div style={{
                    width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                    background: 'var(--bg-raised)', border: '1px solid var(--border-sub)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2,
                  }}>
                    <User size={14} style={{ color: 'var(--text-2)' }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick suggestions */}
          <div style={{
            padding: '10px 20px', background: 'var(--bg-void)',
            borderTop: '1px solid var(--border-sub)',
            display: 'flex', flexWrap: 'wrap', gap: 8,
          }}>
            {QUICK.map(q => (
              <button
                key={q}
                onClick={() => send(q)}
                style={{
                  padding: '5px 12px', borderRadius: 999, fontSize: 12,
                  background: 'var(--bg-surface)', border: '1px solid var(--border-sub)',
                  color: 'var(--text-3)', cursor: 'pointer', transition: 'all 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,161,157,0.3)'; e.currentTarget.style.color = 'var(--text-teal)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-sub)'; e.currentTarget.style.color = 'var(--text-3)'; }}
              >{q}</button>
            ))}
          </div>

          {/* Input bar */}
          <form
            onSubmit={e => { e.preventDefault(); send(); }}
            style={{
              padding: '12px 16px',
              background: 'var(--bg-surface)', borderTop: '1px solid var(--border-sub)',
              display: 'flex', gap: 10,
            }}
          >
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about Qolve or Quelp..."
              style={{
                flex: 1, padding: '10px 16px', borderRadius: 12,
                background: 'var(--bg-void)', border: '1px solid var(--border-mid)',
                color: 'var(--text-1)', fontSize: 13.5, outline: 'none',
                transition: 'border-color 0.15s',
              }}
              onFocus={e => e.target.style.borderColor = 'rgba(0,161,157,0.35)'}
              onBlur={e => e.target.style.borderColor = 'var(--border-mid)'}
            />
            <button
              type="submit"
              style={{
                padding: '10px 20px', borderRadius: 12,
                background: 'var(--teal)', color: 'white', border: 'none',
                fontWeight: 600, fontSize: 13, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 6,
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Send <Send size={13} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
