import { motion } from 'framer-motion'
import SpotlightCard from './ui/SpotlightCard'
import { WordReveal } from './ui/TextReveal'
import Ascii3DStarfield from './ui/Ascii3DStarfield'

export default function ExpertiseSection() {
  return (
    <section className="section_expertise" id="expertise" style={{ position: 'relative', overflow: 'hidden' }}>
      <Ascii3DStarfield variant="expertise" opacity={0.7} numStars={150} />
      <div className="padding-global">
        <div className="container-large">
          {/* Header */}
          <div className="vertical-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="tag"
            >
              <div className="dot-square" />
              <div>Core Expertise</div>
            </motion.div>
            <div className="spacer-small" />
            <div className="max-width-medium is-41rem text-align-center">
              <WordReveal
                className="text-align-center"
                style={{ justifyContent: 'center' }}
                as="h2"
              >
                Where human insight meets intelligent technology
              </WordReveal>
            </div>
            <div className="spacer-small" />
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-width-medium is-34rem"
            >
              <div className="text-base text-align-center text-color-secondary">
                We help businesses harness technology not to replace human creativity, but to amplify it — enabling smarter decisions and faster execution.
              </div>
            </motion.div>
          </div>

          <div className="spacer-section-medium" />

          {/* Redesigned 3 Core Expertise Cards */}
          <div className="expertise_cards">
            {/* Card 1: Intelligent Workflow Automation */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="expertise_card"
            >
              <SpotlightCard
                spotlightColor="rgba(214, 253, 112, 0.12)"
                style={{
                  borderRadius: '1.5rem',
                  height: '100%',
                  background: '#ffffff',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1.25rem',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
                }}
              >
                {/* Visual Pipeline Interface */}
                <div
                  style={{
                    background: '#0d0d0f',
                    borderRadius: '1rem',
                    padding: '1.1rem',
                    color: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#d6fd70', boxShadow: '0 0 8px #d6fd70' }} />
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.04em' }}>AUTOMATION ENGINE</span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#4ade80', background: 'rgba(74,222,128,0.12)', padding: '0.15rem 0.5rem', borderRadius: '9999px', fontWeight: 600 }}>0.38s Latency</span>
                  </div>

                  {/* Flow Steps */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {[
                      { step: '01', title: 'Inbound Request Triaged', tag: 'Trigger', color: 'rgba(255,255,255,0.1)' },
                      { step: '02', title: 'AI Context Routing', tag: 'Active', color: 'rgba(214,253,112,0.18)', active: true },
                      { step: '03', title: 'Zero-Loss Dispatch to SLA', tag: 'Resolved', color: 'rgba(74,222,128,0.15)' },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: item.active ? 'rgba(214,253,112,0.08)' : 'rgba(255,255,255,0.03)',
                          border: item.active ? '1px solid rgba(214,253,112,0.3)' : '1px solid rgba(255,255,255,0.05)',
                          borderRadius: '0.6rem',
                          padding: '0.45rem 0.65rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>{item.step}</span>
                          <span style={{ fontSize: '0.78rem', color: item.active ? '#ffffff' : 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{item.title}</span>
                        </div>
                        <span style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem', borderRadius: '4px', background: item.color, color: item.active ? '#d6fd70' : 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{item.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <h3 className="heading-style-h3" style={{ fontSize: '1.2rem', fontWeight: 700 }}>Automation &amp; Optimization</h3>
                  <div className="spacer-xsmall" />
                  <p className="text-base text-color-secondary" style={{ fontSize: '0.9rem', lineHeight: 1.45 }}>
                    Streamline operations through intelligent workflow pipelines that eliminate friction, prevent errors, and scale effortlessly.
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Card 2: Telemetry & Predictive Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="expertise_card"
            >
              <SpotlightCard
                spotlightColor="rgba(214, 253, 112, 0.12)"
                style={{
                  borderRadius: '1.5rem',
                  height: '100%',
                  background: '#ffffff',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1.25rem',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
                }}
              >
                {/* Visual Chart Card */}
                <div
                  style={{
                    background: '#0d0d0f',
                    borderRadius: '1rem',
                    padding: '1.1rem',
                    color: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80' }} />
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.04em' }}>TELEMETRY STREAM</span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#d6fd70', fontWeight: 700 }}>+99.4% Efficiency</span>
                  </div>

                  {/* Animated Bar Graph */}
                  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '5.2rem', padding: '0.35rem 0.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '0.5rem' }}>
                    {[
                      { h: '38%', val: '24k', active: false },
                      { h: '55%', val: '68k', active: false },
                      { h: '72%', val: '142k', active: false },
                      { h: '88%', val: '280k', active: false },
                      { h: '100%', val: '519k', active: true },
                    ].map((bar, i) => (
                      <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem', flex: 1 }}>
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: bar.h }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                          style={{
                            width: '65%',
                            background: bar.active ? 'linear-gradient(180deg, #d6fd70 0%, #4ade80 100%)' : 'rgba(255,255,255,0.15)',
                            borderRadius: '4px 4px 0 0',
                            boxShadow: bar.active ? '0 0 12px rgba(214,253,112,0.4)' : 'none',
                          }}
                        />
                        <span style={{ fontSize: '0.62rem', color: bar.active ? '#d6fd70' : 'rgba(255,255,255,0.4)', fontWeight: bar.active ? 700 : 500 }}>{bar.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <h3 className="heading-style-h3" style={{ fontSize: '1.2rem', fontWeight: 700 }}>Data Analytics &amp; Insights</h3>
                  <div className="spacer-xsmall" />
                  <p className="text-base text-color-secondary" style={{ fontSize: '0.9rem', lineHeight: 1.45 }}>
                    Transform raw multi-channel operational data into actionable intelligence, predictive analytics, and executive clarity.
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Card 3: Global Edge & SLA Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="expertise_card"
            >
              <SpotlightCard
                spotlightColor="rgba(214, 253, 112, 0.12)"
                style={{
                  borderRadius: '1.5rem',
                  height: '100%',
                  background: '#ffffff',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1.25rem',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
                }}
              >
                {/* Visual Region Grid */}
                <div
                  style={{
                    background: '#0d0d0f',
                    borderRadius: '1rem',
                    padding: '1.1rem',
                    color: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 8px #38bdf8' }} />
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.04em' }}>GLOBAL RELIABILITY</span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 700 }}>99.99% Uptime</span>
                  </div>

                  {/* Node Status Rows */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {[
                      { region: 'AWS us-east-1', ping: '12ms', status: 'Optimal' },
                      { region: 'Cloudflare Edge (280+ POPs)', ping: '4ms', status: 'Synchronized' },
                      { region: 'EU Frankfurt Core', ping: '18ms', status: 'Protected' },
                    ].map((node, i) => (
                      <div
                        key={i}
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.05)',
                          borderRadius: '0.5rem',
                          padding: '0.4rem 0.6rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{node.region}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ fontSize: '0.65rem', color: '#4ade80', fontWeight: 600 }}>{node.ping}</span>
                          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4ade80' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <h3 className="heading-style-h3" style={{ fontSize: '1.2rem', fontWeight: 700 }}>Enterprise SLA &amp; Infrastructure</h3>
                  <div className="spacer-xsmall" />
                  <p className="text-base text-color-secondary" style={{ fontSize: '0.9rem', lineHeight: 1.45 }}>
                    High-availability distributed architectures backed by strict SLA guarantees, custom DNS routing, and resilient cloud infrastructure.
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
