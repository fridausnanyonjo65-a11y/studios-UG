import React, { useState, useEffect } from 'react';
import { X, Check, MessageSquare, Send, Calendar, Clock, MapPin, User, Mail, Phone } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialContext = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('High-End Corporate Branding');
  const [preferredDate, setPreferredDate] = useState('');
  const [projectBrief, setProjectBrief] = useState(initialContext);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialContext) {
      setProjectBrief(initialContext);
    }
  }, [initialContext]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `*New Consultation Booking - Vinci Studios*\n` +
      `Name: ${name || 'Prospective Client'}\n` +
      `Contact: ${phone || 'Not provided'} / ${email || 'Not provided'}\n` +
      `Service: ${service}\n` +
      `Preferred Meeting: ${preferredDate || 'Flexible'}\n` +
      `Project Brief: ${projectBrief || 'Inquiry regarding custom branding/print'}\n` +
      `Location: Gratias Building, Salaama Road`
    );
    window.open(`https://wa.me/${STUDIO_INFO.contacts.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-neutral-950/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/80">
          <div>
            <span className="text-xs font-mono text-amber-400 font-semibold block uppercase tracking-wider">
              Studio Consultation & Quote
            </span>
            <h3 className="text-lg font-bold text-white font-display">
              Connect with Vinci Studios
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/40 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-bold text-white font-display">
              Inquiry Registered Successfully
            </h4>
            <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{name || 'Client'}</strong>. Studio Manager <strong className="text-amber-300">Nanyonjo Fridaus</strong> and Founder <strong className="text-white">Mr. Muyanja Geofry</strong> have received your brief. We will review your requirements and reach out within 4 business hours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleSendViaWhatsApp}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open Instant WhatsApp Chat</span>
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Your Full Name / Company *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Kato / Apex Holdings"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="client@company.ug"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+256 700 000 000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Primary Service Interest
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-amber-400"
                >
                  <option value="High-End Corporate Branding">High-End Corporate Branding</option>
                  <option value="Custom Luxury Print (Foil, Deboss, Cotton)">Custom Luxury Print (Foil, Deboss, Cotton)</option>
                  <option value="Custom Rigid Packaging Boxes">Custom Rigid Packaging Boxes</option>
                  <option value="Digital UI Design & Motion Graphics">Digital UI Design & Motion Graphics</option>
                  <option value="3D Illuminated Building Signage">3D Illuminated Building Signage</option>
                  <option value="Studio In-Person Sample Review">Studio In-Person Sample Review</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                Preferred Consultation Time / Date
              </label>
              <input
                type="text"
                placeholder="e.g. This Thursday at 2:00 PM at Gratias Building"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                Project Scope & Technical Specifications
              </label>
              <textarea
                rows={4}
                placeholder="Describe your brand vision, target timeline, quantities, or specific finishing preferences..."
                value={projectBrief}
                onChange={(e) => setProjectBrief(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 font-mono leading-relaxed"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-neutral-800">
              <span className="text-[11px] text-neutral-400 text-center sm:text-left">
                GRATIAS Building, Salaama Road (after Nesta) · Mon–Sat
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-4 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-medium transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 sm:w-auto px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
