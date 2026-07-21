import React, { useState, useEffect } from 'react';
import { X, Send, Zap, CheckCircle2 } from 'lucide-react';

export default function ContactModal({ isOpen = true, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-[#0f172a] font-semibold text-xs mb-1">
              <Zap className="w-4 h-4 text-[#0f172a]" />
              <span>Get Started</span>
            </div>
            <h3 id="modal-title" className="font-heading text-2xl font-black text-[#0f172a] mb-2">
              Contact Qolve
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-6">
              Connect with our team to discuss your technology, strategy, or software requirements.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label htmlFor="name-input" className="block font-bold text-slate-700 mb-1">Your Name</label>
                <input 
                  id="name-input"
                  type="text" 
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0f172a] bg-[#f2f8fc]"
                />
              </div>

              <div>
                <label htmlFor="email-input" className="block font-bold text-slate-700 mb-1">Email Address</label>
                <input 
                  id="email-input"
                  type="email" 
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0f172a] bg-[#f2f8fc]"
                />
              </div>

              <div>
                <label htmlFor="company-input" className="block font-bold text-slate-700 mb-1">Company / Organization</label>
                <input 
                  id="company-input"
                  type="text" 
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0f172a] bg-[#f2f8fc]"
                />
              </div>

              <div>
                <label htmlFor="message-input" className="block font-bold text-slate-700 mb-1">Message</label>
                <textarea 
                  id="message-input"
                  rows={3}
                  required
                  placeholder="How can Qolve help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0f172a] bg-[#f2f8fc] resize-none"
                />
              </div>

              <button 
                type="submit"
                className="btn-figma-dark w-full py-3.5 text-center justify-center uppercase font-bold text-xs"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 text-[#c6f529]" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-black text-[#0f172a]">
              Message Received!
            </h3>
            <p className="text-slate-600 text-sm max-w-sm mx-auto">
              Thank you, {formData.name}! The Qolve team will get back to you shortly.
            </p>
            <button 
              onClick={onClose}
              className="btn-figma-dark px-6 py-2.5 text-xs uppercase"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
