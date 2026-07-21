import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  BarChart2, 
  ShieldCheck, 
  Bot, 
  Layers, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Code2, 
  Server, 
  Lock,
  Sparkles
} from 'lucide-react';

const SERVICES_DETAILED = [
  {
    id: 'consulting',
    icon: Cpu,
    title: 'Intelligent Software Consulting',
    category: 'Architecture & Engineering',
    badge: 'Popular',
    description: 'We evaluate, design, and modernize legacy software infrastructure with maintainable, future-proof architectures built for enterprise scale.',
    features: [
      'Distributed systems design & code audits',
      'Technology stack selection & migration plans',
      'Performance bottleneck & latency reduction',
      'Microservices & REST / GraphQL API design'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Go', 'Python']
  },
  {
    id: 'data-strategy',
    icon: BarChart2,
    title: 'Data Strategy & Real-Time Analytics',
    category: 'Data & Telemetry',
    badge: 'High Impact',
    description: 'Transform raw data into real-time operational metrics and executive telemetry. Process over 520k+ data points monthly with high throughput.',
    features: [
      'Custom BI dashboard development',
      'Stream processing & ETL pipelines',
      'Data warehousing & OLAP optimization',
      'Predictive analytics & ML data pipelines'
    ],
    techStack: ['PostgreSQL', 'Redis', 'Kafka', 'DuckDB', 'ClickHouse']
  },
  {
    id: 'reliability',
    icon: ShieldCheck,
    title: 'Enterprise Platform Reliability',
    category: 'SRE & DevOps',
    badge: '99.99% Uptime',
    description: 'Protect your operations with zero-downtime deployments, eBPF-driven kernel monitoring, and multi-region automated failover systems.',
    features: [
      '24/7 automated uptime & health monitoring',
      'CI/CD pipeline automation & infrastructure as code',
      'SOC-2 & ISO security compliance hardening',
      'Disaster recovery & instant failover protocols'
    ],
    techStack: ['Docker', 'Kubernetes', 'AWS SES', 'Terraform', 'Prometheus']
  },
  {
    id: 'ai-automation',
    icon: Bot,
    title: 'AI Integration & Smart Automation',
    category: 'Artificial Intelligence',
    badge: 'Next-Gen',
    description: 'Embed domain-specific AI models, automated ticket triage, smart document ingestion, and pre-drafting assistants directly into your workflow.',
    features: [
      'LLM fine-tuning & RAG (Retrieval-Augmented Gen)',
      'Automated customer support & triage workflows',
      'Document parsing & intelligent entity extraction',
      'Custom AI agent development & orchestration'
    ],
    techStack: ['OpenAI API', 'LangChain', 'Pinecone', 'Python', 'FastAPI']
  },
  {
    id: 'high-throughput',
    icon: Layers,
    title: 'High-Throughput Distributed Systems',
    category: 'Systems Engineering',
    badge: 'Performance',
    description: 'Build low-latency server engines and concurrent data processors capable of handling millions of requests with sub-millisecond overhead.',
    features: [
      'Zero-copy data serialization protocols',
      'Custom caching & memory management',
      'Event-driven asynchronous microservices',
      'Load balancing & high-concurrency queuing'
    ],
    techStack: ['Rust', 'Go', 'gRPC', 'WebSockets', 'NATS']
  },
  {
    id: 'white-label',
    icon: Globe,
    title: 'White-Label UI & Client Portals',
    category: 'Frontend & UX',
    badge: 'Design System',
    description: 'Deliver custom branded web applications and portals with pixel-perfect Figma fidelity, responsive layouts, and lightning-fast page loads.',
    features: [
      '100% white-label custom domain mapping',
      'Accessible, WCAG 2.1 compliant UI components',
      'Tailwind CSS & Framer Motion design systems',
      'Real-time collaborative dashboards & inboxes'
    ],
    techStack: ['React 18', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Lucide']
  }
];

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description: 'We perform a deep analysis of your current technical stack, operational bottlenecks, and business objectives.'
  },
  {
    number: '02',
    title: 'Architecture & Design',
    description: 'Our team crafts detailed system schematics, UI prototypes, and performance benchmarks before writing code.'
  },
  {
    number: '03',
    title: 'Agile Build & Testing',
    description: 'Iterative two-week sprints with continuous deployment, automated regression testing, and code reviews.'
  },
  {
    number: '04',
    title: 'Deployment & SLA Support',
    description: 'Production rollout with zero downtime, comprehensive documentation, and 24/7 reliability monitoring.'
  }
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Architecture & Engineering', 'Data & Telemetry', 'SRE & DevOps', 'Artificial Intelligence', 'Systems Engineering', 'Frontend & UX'];

  const filteredServices = selectedCategory === 'All' 
    ? SERVICES_DETAILED 
    : SERVICES_DETAILED.filter(s => s.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-[#f8fafc]">
      
      {/* Sky Hero Header matching Figma aesthetic */}
      <section className="relative overflow-hidden figma-sky-bg pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
        <div className="absolute top-6 left-[-5%] w-[450px] h-[140px] figma-cloud blur-sm opacity-60 pointer-events-none" />
        <div className="absolute top-2 right-[-10%] w-[550px] h-[180px] figma-cloud blur-sm opacity-70 pointer-events-none" />
        <div className="absolute top-32 left-[20%] w-[500px] h-[120px] figma-cloud opacity-40 pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-4">
          <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-slate-800 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/80 inline-flex items-center gap-1.5 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-[#0f172a]" />
            Capabilities & Solutions
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Comprehensive Technology & Strategy Services
          </h1>
          <p className="text-slate-800 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            From low-latency cloud architectures to custom AI automation, Qolve engineers scalable digital solutions tailored for growing enterprises.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0f172a] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-2xl hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0f172a] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <IconComp className="w-6 h-6 text-[#c6f529]" />
                    </div>
                    <span className="font-mono-code text-[10px] font-extrabold uppercase tracking-widest text-[#0f172a] bg-[#c6f529] px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    {service.category}
                  </span>

                  <h3 className="font-heading text-xl font-extrabold text-[#0f172a] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100 text-xs text-slate-700 font-medium">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#0f172a] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer of Card: Tech Stack + Action */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono font-bold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md border border-slate-200/80">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="w-full btn-figma-dark justify-center text-center py-2.5 text-xs uppercase"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#c6f529]" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </section>

      {/* Engagement Process Section */}
      <section className="py-20 bg-[#0f172a] text-white border-t border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#c6f529] bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-700 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#c6f529]" />
              Methodology
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white tracking-tight">
              Our Structured Delivery Framework
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Every Qolve engagement follows a battle-tested protocol to ensure zero security oversights and rapid time-to-market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 relative flex flex-col justify-between">
                <div>
                  <span className="font-mono-code text-3xl font-black text-[#c6f529] block mb-3 opacity-90">
                    {step.number}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 uppercase font-bold">
                  Phase {idx + 1} Execution
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-[#e5f2fd] text-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
            Need a Custom Architecture or Strategy?
          </h2>
          <p className="text-slate-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Partner with Qolve senior engineers to design and deploy software solutions tailored to your unique operational specs.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-figma-dark uppercase text-xs py-3 px-6">
              <span>Schedule Technical Call</span>
              <ArrowRight className="w-4 h-4 text-[#c6f529]" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
