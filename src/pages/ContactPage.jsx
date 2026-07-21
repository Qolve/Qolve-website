import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Send, 
  CheckCircle2, 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  ChevronDown, 
  HelpCircle,
  MessageSquare,
  Building,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

const OFFICE_DETAILS = [
  {
    icon: MapPin,
    title: 'Global Headquarters',
    detail: '548 Market St, Suite 880',
    subdetail: 'San Francisco, CA 94104'
  },
  {
    icon: Mail,
    title: 'Direct Email',
    detail: 'contact@qolve.com',
    subdetail: 'Average response time < 2 hours'
  },
  {
    icon: Phone,
    title: 'Client Advisory Line',
    detail: '+1 (800) 555-QOLVE',
    subdetail: 'Direct engineering & sales consultation'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    detail: 'Monday - Friday',
    subdetail: '8:00 AM - 6:00 PM EST'
  }
];

const FAQS = [
  {
    question: 'How quickly can Qolve start on a new engagement?',
    answer: 'We typically initiate technical discovery and onboarding within 3 to 5 business days. Once an architecture scope is approved, active engineering sprints begin immediately.'
  },
  {
    question: 'What core technology stack does Qolve specialize in?',
    answer: 'Our core specialties include React, TypeScript, Tailwind CSS, Node.js, Go, Python, PostgreSQL, AWS SES relay, Docker, Kubernetes, and custom LLM / RAG integration pipelines.'
  },
  {
    question: 'Do you provide 24/7 ongoing platform maintenance?',
    answer: 'Yes! We offer Enterprise Platform Reliability packages that include 24/7 automated eBPF monitoring, SLA uptime guarantees (99.99%), and emergency failover support.'
  },
  {
    question: 'How does Qolve ensure data security and SOC-2 compliance?',
    answer: 'Security is embedded at every layer. We enforce zero-trust network protocols, TLS encryption in transit and at rest, isolated database tenancy, and automated security audit logging.'
  },
  {
    question: 'Can Qolve integrate directly with our internal engineering team?',
    answer: 'Absolubely. We work both as a standalone turn-key engineering lab and as embedded specialized contractors collaborating closely with your internal leads.'
  },
  {
    question: 'What is Qolve’s pricing structure?',
    answer: 'We offer transparent flat-rate project pricing or monthly retainer models with clear deliverables and no per-seat markups or unexpected overhead costs.'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Intelligent Software Consulting',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [openFaq, setOpenFaq] = useState(0); // Open first FAQ by default

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message content is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      service: 'Intelligent Software Consulting',
      message: ''
    });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fafc]">
      
      {/* Sky Hero Banner */}
      <section className="relative overflow-hidden figma-sky-bg pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
        <div className="absolute top-6 left-[-5%] w-[450px] h-[140px] figma-cloud blur-sm opacity-60 pointer-events-none" />
        <div className="absolute top-2 right-[-10%] w-[550px] h-[180px] figma-cloud blur-sm opacity-70 pointer-events-none" />
        <div className="absolute top-32 right-[20%] w-[450px] h-[120px] figma-cloud opacity-40 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-slate-800 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/80 inline-flex items-center gap-1.5 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-[#0f172a]" />
            Connect With Qolve
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Get in Touch with Our Team
          </h1>
          <p className="text-slate-800 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Have a question about software architecture, AI automation, or custom platform engineering? Connect directly with our strategy experts.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Form & Office Details */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#0f172a] text-white flex items-center justify-center font-bold">
                <MessageSquare className="w-5 h-5 text-[#c6f529]" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-black text-[#0f172a]">
                  Send Us a Message
                </h2>
                <p className="text-slate-500 text-xs font-medium">
                  We reply to all technical inquiries within 2 hours.
                </p>
              </div>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700 font-mono-code mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border ${
                        errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300 focus:border-[#0f172a]'
                      } bg-[#f2f8fc] text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0f172a] transition-all`}
                    />
                    {errors.name && <span className="text-[11px] font-medium text-red-500 mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700 font-mono-code mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border ${
                        errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300 focus:border-[#0f172a]'
                      } bg-[#f2f8fc] text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0f172a] transition-all`}
                    />
                    {errors.email && <span className="text-[11px] font-medium text-red-500 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Company Input */}
                  <div>
                    <label htmlFor="company-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700 font-mono-code mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      id="company-input"
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-[#f2f8fc] text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0f172a] transition-all"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label htmlFor="service-select" className="block text-xs font-bold uppercase tracking-wider text-slate-700 font-mono-code mb-1.5">
                      Service Required
                    </label>
                    <select
                      id="service-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-300 bg-[#f2f8fc] text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0f172a] transition-all"
                    >
                      <option value="Intelligent Software Consulting">Intelligent Software Consulting</option>
                      <option value="Data Strategy & Analytics">Data Strategy & Analytics</option>
                      <option value="Enterprise Platform Reliability">Enterprise Platform Reliability</option>
                      <option value="AI Integration & Automation">AI Integration & Automation</option>
                      <option value="High-Throughput Engineering">High-Throughput Engineering</option>
                      <option value="White-Label UI & Portals">White-Label UI & Portals</option>
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700 font-mono-code mb-1.5">
                    Project Requirements / Details *
                  </label>
                  <textarea
                    id="message-input"
                    rows={4}
                    placeholder="Tell us about your project requirements, scope, timeline, or key technical challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-2xl border ${
                      errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300 focus:border-[#0f172a]'
                    } bg-[#f2f8fc] text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0f172a] resize-none transition-all`}
                  />
                  {errors.message && <span className="text-[11px] font-medium text-red-500 mt-1 block">{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-figma-dark w-full py-3.5 text-center justify-center uppercase font-bold text-xs"
                >
                  <span>{isSubmitting ? 'Sending Request...' : 'Submit Inquiry'}</span>
                  <Send className="w-4 h-4 text-[#c6f529]" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 bg-[#c6f529] text-[#0f172a] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-heading text-2xl font-black text-[#0f172a]">
                  Inquiry Received!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#0f172a]">{formData.name}</strong>! Our engineering advisory team has received your details regarding <strong className="text-[#0f172a]">{formData.service}</strong> and will reach out shortly to <strong>{formData.email}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={resetForm}
                    className="btn-figma-dark px-6 py-2.5 text-xs uppercase"
                  >
                    Send Another Message
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Office Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0f172a] text-white rounded-3xl p-8 shadow-xl space-y-6">
              <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#c6f529] bg-slate-800 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5" />
                Contact Info
              </span>

              <h3 className="font-heading text-2xl font-black text-white">
                Direct Contact Channels
              </h3>

              <div className="space-y-5 pt-2">
                {OFFICE_DETAILS.map((office, idx) => {
                  const IconComp = office.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 text-[#c6f529] flex items-center justify-center shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading text-sm font-bold text-white mb-0.5">
                          {office.title}
                        </h4>
                        <div className="text-xs font-semibold text-slate-200 font-mono">
                          {office.detail}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {office.subdetail}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Support guarantee badge */}
            <div className="bg-[#c6f529] text-[#0f172a] rounded-3xl p-6 shadow-md flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0f172a] text-[#c6f529] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading text-base font-black">
                  Zero Spam Guarantee
                </h4>
                <p className="text-xs font-medium text-slate-800 leading-snug">
                  Your email and details are never shared. Direct communication only with Qolve engineers.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Accordions Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200 inline-flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-[#0f172a]" />
              Got Questions?
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Find quick answers to common questions about Qolve services, process, and reliability standards.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#f2f8fc] rounded-2xl border border-slate-200/90 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f172a]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-extrabold text-sm sm:text-base text-[#0f172a]">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-white text-[#0f172a] flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-[#0f172a] text-white' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-200/60"
                      >
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
