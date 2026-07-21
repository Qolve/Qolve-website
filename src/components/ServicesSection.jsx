import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, BarChart2, ShieldCheck, ArrowRight, Code2, Server, Database, Layers, Terminal, CheckCircle2, Zap } from 'lucide-react';

export default function ServicesSection({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('backend');

  const TECH_TABS = {
    backend: {
      title: 'High-Throughput Distributed Backends',
      badge: 'Go / Rust / gRPC',
      metrics: [
        { label: 'P99 Latency', val: '< 12ms' },
        { label: 'Concurrency', val: '100k conn' },
        { label: 'Deserialization', val: 'Zero-Copy' }
      ],
      codeSnippet: `// High-concurrency worker pool dispatcher
type Dispatcher struct {
    WorkerPool chan chan Job
    MaxWorkers int
}
func (d *Dispatcher) Run() {
    for i := 0; i < d.MaxWorkers; i++ {
        worker := NewWorker(d.WorkerPool)
        worker.Start()
    }
}`
    },
    pipeline: {
      title: 'Real-Time Event Streaming & Kafka',
      badge: 'NATS / Kafka / Flink',
      metrics: [
        { label: 'Event Ingestion', val: '500k+ msg/s' },
        { label: 'Delivery Guarantee', val: 'Exactly-Once' },
        { label: 'Replication', val: '3x Sync' }
      ],
      codeSnippet: `// Event stream consumer with dead-letter queue
cluster.Subscribe("telemetry.v1.events", func(msg *NATS.Msg) {
    if err := ProcessTelemetry(msg.Data); err != nil {
        DeadLetterQueue.Publish("dlq.events", msg.Data)
        return
    }
    msg.Ack()
})`
    },
    security: {
      title: 'Zero-Trust Infrastructure & Governance',
      badge: 'eBPF / TLS 1.3 / OAuth2',
      metrics: [
        { label: 'Encryption', val: 'AES-256 GCM' },
        { label: 'Failover SLA', val: '99.98%' },
        { label: 'Audit Trail', val: 'Cryptographic' }
      ],
      codeSnippet: `// Kernel socket monitoring via eBPF probe
SEC("kprobe/tcp_v4_connect")
int BPF_KPROBE(tcp_v4_connect, struct sock *sk) {
    u64 pid = bpf_get_current_pid_tgid();
    events.perf_submit(ctx, &pid, sizeof(pid));
    return 0;
}`
    }
  };

  const SECONDARY_SERVICES = [
    {
      icon: Database,
      title: 'Data Architecture & Real-Time Analytics',
      description: 'Designing column-oriented analytical datastores and low-latency stream processing pipelines.',
      tag: 'Data Systems'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Infrastructure Reliability',
      description: 'Hardening multi-region Kubernetes clusters, automated zero-downtime CI/CD, and chaos testing.',
      tag: 'Reliability Engineering'
    },
    {
      icon: Layers,
      title: 'Tactile Interface Craft & Tooling',
      description: 'Building custom developer tools, interactive web portals, and micro-interaction visual dashboards.',
      tag: 'Frontend Systems'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white text-slate-900 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#0b1120] bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200 inline-flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#c6f529] fill-[#0b1120]" />
            Capabilities & Architecture
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#0b1120] tracking-tight">
            Asymmetric Engineering Matrix
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Custom software engineering, high-throughput distributed systems, and modern data infrastructure.
          </p>
        </div>

        {/* Asymmetric Bento Feature Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Featured Primary Bento Card (2-Col Span: lg:col-span-7) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#0b1120] text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Bar */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-[#c6f529] flex items-center justify-center font-bold border border-slate-700">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono-code text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Core Discipline
                    </span>
                    <h3 className="font-heading text-xl font-bold text-white">
                      Systems & Software Engineering
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-[#c6f529] border border-slate-700">
                  {TECH_TABS[activeTab].badge}
                </span>
              </div>

              {/* Interactive Tech Toggle Navigation Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
                <button
                  onClick={() => setActiveTab('backend')}
                  className={`flex-1 min-w-[120px] py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'backend'
                      ? 'bg-[#c6f529] text-[#0b1120] shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  Distributed Systems
                </button>
                <button
                  onClick={() => setActiveTab('pipeline')}
                  className={`flex-1 min-w-[120px] py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'pipeline'
                      ? 'bg-[#c6f529] text-[#0b1120] shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  Event Pipelines
                </button>
                <button
                  onClick={() => setActiveTab('security')}
                  className={`flex-1 min-w-[120px] py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'security'
                      ? 'bg-[#c6f529] text-[#0b1120] shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  Zero-Trust Infra
                </button>
              </div>

              {/* Active Tab Spec Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <h4 className="font-heading text-lg font-extrabold text-white">
                    {TECH_TABS[activeTab].title}
                  </h4>

                  {/* Metrics Bar */}
                  <div className="grid grid-cols-3 gap-3 bg-slate-900 p-3.5 rounded-2xl border border-slate-800 text-left">
                    {TECH_TABS[activeTab].metrics.map((m, idx) => (
                      <div key={idx}>
                        <span className="text-[10px] font-mono text-slate-400 block">{m.label}</span>
                        <span className="font-mono-code text-xs sm:text-sm font-bold text-[#c6f529]">{m.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Code Snippet Box */}
                  <div className="bg-[#070b14] p-4 rounded-2xl border border-slate-800 font-mono text-[11px] text-slate-300 overflow-x-auto leading-relaxed relative">
                    <div className="flex items-center justify-between text-[10px] text-slate-500 mb-2 pb-2 border-b border-slate-800/80">
                      <span className="flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-slate-400" />
                        kernel_spec.go
                      </span>
                      <span>UTF-8</span>
                    </div>
                    <pre>{TECH_TABS[activeTab].codeSnippet}</pre>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Action */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Architected for enterprise throughput</span>
              <button 
                onClick={onOpenContact}
                className="btn-lime text-xs uppercase tracking-wider cursor-pointer"
              >
                <span>Request Technical Evaluation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Stacked Secondary Cards (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {SECONDARY_SERVICES.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-[#f2f8fc] p-6 rounded-3xl border border-slate-200/90 hover:border-slate-300 hover:shadow-xl transition-all spring-hover flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-[#0b1120] text-[#c6f529] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-mono-code text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-white px-2.5 py-1 rounded-full border border-slate-200">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-[#0b1120] mb-2 group-hover:text-black">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#0b1120]">
                    <span>Learn Specs</span>
                    <ArrowRight className="w-4 h-4 text-[#0b1120] group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

