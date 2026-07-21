import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Star, Activity, Sparkles, TrendingUp, BarChart3, ShieldCheck, Cpu, Server, Terminal, Info, RefreshCw } from 'lucide-react';

export default function HeroSection({ onOpenContact }) {
  // Live animated telemetry counters
  const [opsCount, setOpsCount] = useState(524180);
  const [latency, setLatency] = useState(11.8);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [hoveredBar, setHoveredBar] = useState(null);

  // Dynamic telemetry live updates
  useEffect(() => {
    const timer = setInterval(() => {
      setOpsCount(prev => prev + Math.floor(Math.random() * 45) - 20);
      setLatency(prev => +(11.2 + Math.random() * 1.4).toFixed(1));
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  // Bar graph data points
  const graphData = [
    { label: '00:00', value: 45, ops: '410k ops/s', status: 'Nominal' },
    { label: '04:00', value: 68, ops: '520k ops/s', status: 'Nominal' },
    { label: '08:00', value: 52, ops: '480k ops/s', status: 'Nominal' },
    { label: '12:00', value: 92, ops: '790k ops/s', status: 'Peak Load' },
    { label: '16:00', value: 78, ops: '640k ops/s', status: 'Nominal' },
    { label: '20:00', value: 85, ops: '710k ops/s', status: 'Nominal' },
  ];

  return (
    <section className="relative overflow-hidden sky-hero-bg pt-12 pb-20 md:pt-16 md:pb-28 px-4 sm:px-6 lg:px-8 bg-noise">
      
      {/* Translucent Cloud Shapes & Fluid Ambient Glows */}
      <div className="absolute top-8 left-[-5%] w-[480px] h-[150px] cloud-shape blur-md opacity-60 animate-glow-1 pointer-events-none" />
      <div className="absolute top-4 right-[-10%] w-[580px] h-[200px] cloud-shape blur-md opacity-70 animate-glow-2 pointer-events-none" />
      <div className="absolute top-44 left-[20%] w-[600px] h-[140px] cloud-shape opacity-40 blur-sm pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Asymmetric 2-Column Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Editorial Column (col-span-7) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Live Operational Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-sm text-xs font-mono-code font-bold text-[#0b1120]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c6f529] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8bc34a]"></span>
              </span>
              <span className="uppercase tracking-wider">Engineering High-Throughput Software & Data Systems</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-[#0b1120] tracking-tight leading-[1.05] drop-shadow-sm"
            >
              Building high-throughput systems with precision engineering.
            </motion.h1>

            {/* Subtitle / Narrative Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-800/90 font-medium max-w-2xl leading-relaxed"
            >
              We architect fault-tolerant distributed infrastructure, low-latency analytics pipelines, and resilient cloud software designed for scale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button 
                onClick={onOpenContact}
                className="btn-dark group text-xs uppercase tracking-wider px-7 py-3.5 rounded-full flex items-center gap-3 spring-hover cursor-pointer"
              >
                <span>Consult Engineering</span>
                <div className="w-6 h-6 rounded-full bg-[#c6f529] text-[#0b1120] flex items-center justify-center font-bold group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>

              <a 
                href="#services"
                className="btn-glass text-xs uppercase tracking-wider px-6 py-3.5 spring-hover cursor-pointer"
              >
                Explore Architecture
              </a>
            </motion.div>

            {/* Interactive Telemetry Badges & Hover Tooltip */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-slate-900/10 flex flex-wrap items-center gap-6 text-xs text-slate-800 font-semibold"
            >
              {/* Telemetry Badge 1 */}
              <div 
                className="relative group cursor-pointer flex items-center gap-2"
                onMouseEnter={() => setActiveTooltip('sla')}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className="w-7 h-7 rounded-lg bg-white/80 text-[#0b1120] flex items-center justify-center shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <span className="block font-mono-code font-bold text-[#0b1120]">99.98% Uptime</span>
                  <span className="text-[10px] text-slate-600">SLA Guaranteed</span>
                </div>

                {/* Popover Tooltip */}
                <AnimatePresence>
                  {activeTooltip === 'sla' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.95 }}
                      className="absolute bottom-full left-0 mb-2 w-64 bg-[#0b1120] text-white p-3 rounded-xl shadow-xl text-[11px] z-50 border border-slate-700"
                    >
                      <div className="font-bold text-[#c6f529] mb-1 flex items-center justify-between">
                        <span>Multi-Region Availability</span>
                        <Activity className="w-3 h-3 text-[#c6f529]" />
                      </div>
                      <p className="text-slate-300 leading-snug">
                        Automated failover clusters operating across 3 independent AWS availability zones with zero loss DB replication.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Telemetry Badge 2 */}
              <div 
                className="relative group cursor-pointer flex items-center gap-2"
                onMouseEnter={() => setActiveTooltip('latency')}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className="w-7 h-7 rounded-lg bg-white/80 text-[#0b1120] flex items-center justify-center shadow-xs">
                  <Cpu className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <span className="block font-mono-code font-bold text-[#0b1120]">{latency}ms Latency</span>
                  <span className="text-[10px] text-slate-600">P99 Global Average</span>
                </div>

                {/* Popover Tooltip */}
                <AnimatePresence>
                  {activeTooltip === 'latency' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.95 }}
                      className="absolute bottom-full left-0 mb-2 w-64 bg-[#0b1120] text-white p-3 rounded-xl shadow-xl text-[11px] z-50 border border-slate-700"
                    >
                      <div className="font-bold text-[#c6f529] mb-1 flex items-center justify-between">
                        <span>Low-Latency Pipeline</span>
                        <RefreshCw className="w-3 h-3 text-[#c6f529] animate-spin" />
                      </div>
                      <p className="text-slate-300 leading-snug">
                        Memory-mapped IPC and Tokio asynchronous runtimes delivering sub-15ms P99 responses globally.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Rating Proof */}
              <div className="flex items-center gap-1.5 ml-auto text-slate-800">
                <div className="flex text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="text-[11px] font-bold">4.9/5 Engineering Rating</span>
              </div>
            </motion.div>

          </div>

          {/* Right Bento Column (col-span-5) */}
          <div className="lg:col-span-5">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-3 sm:gap-4 relative"
            >
              
              {/* Bento Card 1: Dark Systems Matrix (Full Width Top) */}
              <div 
                className="col-span-2 bento-card-dark relative group spring-hover cursor-pointer overflow-hidden p-5"
                onMouseEnter={() => setActiveTooltip('cluster')}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#c6f529] animate-pulse" />
                    <span className="font-mono-code text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Cluster Telemetry Feed
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-slate-800 text-[#c6f529] px-2 py-0.5 rounded border border-slate-700">
                    LIVE • gRPC
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 py-1 text-left">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">Nodes</span>
                    <span className="font-heading text-lg font-black text-white">48 Active</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">Throughput</span>
                    <span className="font-mono-code text-sm font-bold text-[#c6f529]">
                      {opsCount.toLocaleString()} <span className="text-[9px] text-slate-400">ops/s</span>
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">Mem Load</span>
                    <span className="font-heading text-lg font-black text-emerald-400">34%</span>
                  </div>
                </div>

                {/* Live Progress Bar */}
                <div className="mt-3 w-full bg-slate-800 h-1.5 rounded-full overflow-hidden flex">
                  <div className="w-[65%] bg-[#c6f529] transition-all duration-500" />
                  <div className="w-[25%] bg-sky-500 transition-all duration-500" />
                  <div className="w-[10%] bg-slate-600" />
                </div>

                {/* Popover Tooltip for Cluster */}
                <AnimatePresence>
                  {activeTooltip === 'cluster' && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="absolute inset-x-3 bottom-3 bg-[#162035]/95 backdrop-blur-md p-3 rounded-xl border border-[#c6f529]/40 text-xs text-slate-200 shadow-2xl z-20"
                    >
                      <div className="flex items-center justify-between text-[#c6f529] font-mono font-bold mb-1 text-[11px]">
                        <span>Distributed Cluster Health</span>
                        <span>100% Sync</span>
                      </div>
                      <p className="text-[10px] text-slate-300">
                        Zero dropped packets across 12 distributed node regions with automated consensus logging.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bento Card 2: White Efficiency Score Card */}
              <div 
                className="col-span-1 bento-card-white flex flex-col justify-between h-[155px] spring-hover cursor-pointer relative"
                onMouseEnter={() => setActiveTooltip('efficiency')}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono-code text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
                    Efficiency
                  </span>
                  <Activity className="w-3.5 h-3.5 text-[#0b1120]" />
                </div>
                <div>
                  <span className="font-heading text-3xl font-black text-[#0b1120] block">
                    94.2%
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500 block">
                    Resource utilization
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#0b1120] h-full rounded-full w-[94.2%]" />
                </div>

                {/* Tooltip */}
                <AnimatePresence>
                  {activeTooltip === 'efficiency' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute bottom-full left-0 mb-2 w-48 bg-[#0b1120] text-white p-2.5 rounded-xl shadow-xl text-[10px] z-30 border border-slate-700"
                    >
                      Optimized Rust/Go microservices delivering high CPU efficiency under peak stress.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bento Card 3: White Interactive Bar Graph Card */}
              <div className="col-span-1 bento-card-white flex flex-col justify-between h-[155px] spring-hover cursor-pointer relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono-code text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
                    Live Traffic
                  </span>
                  <BarChart3 className="w-3.5 h-3.5 text-slate-400" />
                </div>

                {/* Animated Interactive Bar Chart */}
                <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
                  {graphData.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex-1 flex flex-col items-center group relative h-full justify-end"
                      onMouseEnter={() => setHoveredBar(item)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      <div 
                        style={{ height: `${item.value}%` }} 
                        className={`w-full rounded-sm transition-all duration-300 ${
                          idx === 3 ? 'bg-[#0b1120]' : 'bg-slate-300 group-hover:bg-[#c6f529]'
                        }`}
                      />
                    </div>
                  ))}
                </div>

                {/* Bar Hover Tooltip */}
                {hoveredBar ? (
                  <div className="text-[10px] font-mono text-[#0b1120] font-bold truncate">
                    {hoveredBar.label} • {hoveredBar.ops}
                  </div>
                ) : (
                  <span className="text-[10px] font-mono text-slate-400 block">
                    24h Volume Peak
                  </span>
                )}
              </div>

              {/* Bento Card 4: Dark Pipeline Real-Time Feed */}
              <div 
                className="col-span-1 bento-card-dark flex flex-col justify-between h-[145px] spring-hover cursor-pointer relative"
                onMouseEnter={() => setActiveTooltip('pipeline')}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div>
                  <span className="font-mono-code text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-1">
                    Pipeline Relay
                  </span>
                  <span className="font-mono text-xs text-[#c6f529] font-bold block">
                    Zero-Loss Queue
                  </span>
                </div>
                
                <div className="flex items-end justify-between gap-1 h-9">
                  <div className="w-2.5 bg-[#c6f529] h-[45%] rounded-xs animate-pulse" />
                  <div className="w-2.5 bg-[#c6f529] h-[75%] rounded-xs" />
                  <div className="w-2.5 bg-[#c6f529] h-[35%] rounded-xs" />
                  <div className="w-2.5 bg-[#c6f529] h-[95%] rounded-xs" />
                  <div className="w-2.5 bg-[#c6f529] h-[60%] rounded-xs" />
                </div>

                <span className="text-[10px] font-mono text-slate-400 block">
                  Kafka & NATS Streaming
                </span>

                {/* Tooltip */}
                <AnimatePresence>
                  {activeTooltip === 'pipeline' && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-[#0b1120] text-white p-2.5 rounded-xl shadow-xl text-[10px] z-30 border border-slate-700"
                    >
                      Distributed event streams with exact once delivery guarantees.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bento Card 5: White Growth Metric Card */}
              <div 
                className="col-span-1 bento-card-white flex flex-col justify-between h-[145px] spring-hover cursor-pointer relative"
                onMouseEnter={() => setActiveTooltip('growth')}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div>
                  <span className="font-mono-code text-[10px] font-extrabold uppercase tracking-widest text-slate-500 block mb-1">
                    Overhead
                  </span>
                  <span className="font-heading text-2xl font-black text-[#0b1120] block">
                    -49%
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500 block">
                    Infra cost reduction
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#c6f529] text-[#0b1120] flex items-center justify-center self-start shadow-xs">
                  <ArrowUpRight className="w-4 h-4 font-bold" />
                </div>

                {/* Tooltip */}
                <AnimatePresence>
                  {activeTooltip === 'growth' && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-[#0b1120] text-white p-2.5 rounded-xl shadow-xl text-[10px] z-30 border border-slate-700"
                    >
                      Smart auto-scaling and serverless resource reclamation.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

