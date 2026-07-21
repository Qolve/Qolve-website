import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Mail, Building2, User, MessageSquare } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '3-15',
    interest: 'quelp-pilot',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(4, 7, 10, 0.85)', backdropFilter: 'blur(12px)' }}>
      <div 
        className="glass-panel-accent relative w-full max-w-xl overflow-hidden p-6 md:p-8"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(0, 196, 180, 0.15)',
          borderRadius: '16px'
        }}
      >
        {/* Close button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-teal-500/10 border border-teal-500/30 rounded-full flex items-center justify-center mx-auto text-teal-400">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl font-bold font-display text-white">Request Received</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Thank you, <span className="text-teal-400 font-medium">{formData.name}</span>. Our founder <span className="text-white font-semibold">Freddie Haude</span> and the Qolve team will get back to you within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={resetAndClose}
                className="btn-primary"
              >
                Return to Website
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="badge-teal mb-2">Qolve Partner Program</span>
              <h3 className="text-2xl font-bold font-display text-white">Let’s discuss your white-label requirements</h3>
              <p className="text-slate-400 text-sm mt-1">
                Whether you need early access to <strong className="text-teal-400 font-semibold">Quelp</strong> or a custom B2B white-label software build, we’re here to help.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Your Name</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-3 text-slate-500" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Freddie Haude"
                      className="w-full bg-slate-900/90 border border-slate-700/60 rounded-lg py-2.5 pl-9 pr-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Work Email</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-3 text-slate-500" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="freddie@company.com"
                      className="w-full bg-slate-900/90 border border-slate-700/60 rounded-lg py-2.5 pl-9 pr-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Company / Organization</label>
                  <div className="relative">
                    <Building2 size={16} className="absolute left-3 top-3 text-slate-500" />
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Systems Ltd"
                      className="w-full bg-slate-900/90 border border-slate-700/60 rounded-lg py-2.5 pl-9 pr-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Primary Interest</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-700/60 rounded-lg py-2.5 px-3 text-sm text-white focus:outline-none focus:border-teal-500 transition-colors"
                  >
                    <option value="quelp-pilot">Quelp V1 Early Access Pilot</option>
                    <option value="white-label">White-Label Partner Program</option>
                    <option value="custom-build">Custom B2B Software Engineering</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Project Details or Questions</label>
                <div className="relative">
                  <MessageSquare size={16} className="absolute left-3 top-3 text-slate-500" />
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your current support volume, tech stack, or custom white-label requirements..."
                    className="w-full bg-slate-900/90 border border-slate-700/60 rounded-lg py-2.5 pl-9 pr-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <ShieldCheck size={14} className="text-teal-400" />
                  <span>No spam. Strict NDA compliance.</span>
                </div>

                <button type="submit" className="btn-primary">
                  Submit Request <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
