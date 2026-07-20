import React from 'react';
import { Users, Cpu, Palette, Server, LineChart, ClipboardList, UserCheck } from 'lucide-react';

const members = [
  {
    name: 'Liam Haines',
    role: 'Product & Commercial Lead',
    focus: 'Target market, product requirements, brand direction, pricing, customer interviews & pilot relationships',
    icon: LineChart,
    color: '#00A19D',
    bg: 'rgba(0,161,157,0.12)',
    border: 'rgba(0,161,157,0.25)',
    initials: 'LH',
    bio: 'Owns the product vision and commercial roadmap — from competitor tracking and pricing research through to customer interviews, lead qualification, and pilot opportunities.',
  },
  {
    name: 'Freddie Haude',
    role: 'Project Manager & AI / Product-Quality Lead',
    focus: 'Sprint planning, task acceptance criteria, AI evaluation, prompt experiments, documentation & release checklists',
    icon: ClipboardList,
    color: '#008082',
    bg: 'rgba(0,128,130,0.12)',
    border: 'rgba(0,128,130,0.25)',
    initials: 'FH',
    bio: 'Keeps the project moving — owning sprint planning, acceptance criteria, risk register, AI quality datasets, and making sure decisions are documented and followed up on.',
  },
  {
    name: 'Vilius',
    role: 'Frontend & Data-Model Lead',
    focus: 'Design system, agent interface, customer portal, white-label UI, frontend architecture & UX prototypes',
    icon: Palette,
    color: '#536877',
    bg: 'rgba(83,104,119,0.12)',
    border: 'rgba(83,104,119,0.25)',
    initials: 'V',
    bio: 'Owns every pixel and every schema — from the design system and white-label UI through to database design, frontend architecture, accessibility, and demos.',
  },
  {
    name: 'heo',
    role: 'Backend, Infrastructure & Automation Lead',
    focus: 'Backend architecture, API design, auth, multi-tenancy, deployment, monitoring & security controls',
    icon: Server,
    color: '#708091',
    bg: 'rgba(112,128,145,0.12)',
    border: 'rgba(112,128,145,0.25)',
    initials: 'H',
    bio: "Owns the engine room — backend architecture, API design, authentication, multi-tenancy, deployment pipelines, monitoring, and every security control that keeps Quelp solid.",
  },
  {
    name: 'Oreo',
    role: 'Lead Sales',
    focus: 'Qualified conversations, pilot opportunities, outreach experiments & lead pipeline',
    icon: Users,
    color: '#91A3B1',
    bg: 'rgba(145,163,177,0.1)',
    border: 'rgba(145,163,177,0.2)',
    initials: 'O',
    bio: 'Drives commercial traction — turning outreach into qualified conversations and qualified conversations into pilot relationships. Success is measured in real opportunities, not email counts.',
  },
];

export default function TeamSection() {
  return (
    <section id="team" style={{ padding: '100px 0', background: 'var(--bg-base)', borderTop: '1px solid var(--border-sub)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <div className="pill">
              <Users size={11} />
              People Behind Qolve
            </div>
          </div>
          <h2 className="display-lg" style={{ marginBottom: 16 }}>Our Team & Roles</h2>
          <p className="body-lg" style={{ color: 'var(--text-2)' }}>
            We are a focused, multi-disciplinary software studio committed to creating software that works cleanly, reliably, and beautifully.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 18 }}>
          {members.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={m.name}
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-mid)',
                  borderRadius: 18,
                  padding: '24px',
                  transition: 'all 0.25s var(--ease-out)',
                  animation: `fadeUp 0.5s ${i * 0.07}s var(--ease-out) both`,
                  cursor: 'default',
                  position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#192936';
                  e.currentTarget.style.borderColor = m.border;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.35)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--bg-surface)';
                  e.currentTarget.style.borderColor = 'var(--border-mid)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Top row: icon + badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: m.bg, border: `1px solid ${m.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={22} style={{ color: m.color }} />
                  </div>
                  <span style={{
                    padding: '3px 10px', borderRadius: 999,
                    background: 'var(--bg-void)', border: '1px solid var(--border-sub)',
                    fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-3)',
                  }}>Qolve Core Team</span>
                </div>

                {/* Name & role */}
                <div style={{ marginBottom: 14 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700,
                    color: 'var(--text-1)', marginBottom: 4, letterSpacing: '-0.01em',
                  }}>{m.name}</h3>
                  <div style={{ fontSize: 12, fontWeight: 600, color: m.color }}>{m.role}</div>
                </div>

                {/* Focus area */}
                <div style={{
                  padding: '10px 12px', borderRadius: 8,
                  background: 'var(--bg-void)', border: '1px solid var(--border-sub)',
                  marginBottom: 14,
                }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-1)', fontWeight: 600, marginBottom: 4 }}>Owns:</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)', lineHeight: 1.5 }}>{m.focus}</div>
                </div>

                {/* Bio */}
                <p style={{ fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.65 }}>{m.bio}</p>
              </div>
            );
          })}
        </div>

        {/* Culture strip */}
        <div style={{
          marginTop: 40,
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-mid)',
          borderRadius: 18, padding: '32px 36px', textAlign: 'center',
          maxWidth: 720, margin: '40px auto 0',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--text-1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 14,
          }}>
            <UserCheck size={18} style={{ color: 'var(--teal)' }} />
            Driven by Collaboration & Direct Access
          </h3>
          <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto' }}>
            At Qolve, every deliverable has one accountable owner and one reviewer. Our customers work directly with the engineering and product team — ensuring fast updates, transparent communication, and software designed around real needs.
          </p>
        </div>

      </div>
    </section>
  );
}
