import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    agents: '10-50',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-teal-600 font-semibold text-xs mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Get Access to Quelp</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">
              Request Early Access & Demo
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-6">
              Connect with Liam and Freddie from the Qolve team to set up your white-label customer support sandbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Work Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-teal-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Company</label>
                  <input 
                    type="text" 
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Support Team Size</label>
                  <select 
                    value={formData.agents}
                    onChange={(e) => setFormData({...formData, agents: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-teal-500 bg-white"
                  >
                    <option value="1-5">1-5 agents</option>
                    <option value="5-20">5-20 agents</option>
                    <option value="20-50">20-50 agents</option>
                    <option value="50+">50+ agents</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Use Case / Notes</label>
                <textarea 
                  rows={3}
                  placeholder="Tell us about your helpdesk requirements or custom domain..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-teal-500 resize-none"
                />
              </div>

              <button 
                type="submit"
                className="btn-teal w-full py-3 text-center justify-center font-bold text-sm shadow-md"
              >
                Submit Demo Request
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-slate-900">
              Request Received!
            </h3>
            <p className="text-slate-600 text-sm max-w-sm mx-auto">
              Thank you, {formData.name}! A team member from Qolve (support@qolve.systems) will get back to you shortly.
            </p>
            <button 
              onClick={onClose}
              className="btn-outline px-6 py-2 text-xs"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
