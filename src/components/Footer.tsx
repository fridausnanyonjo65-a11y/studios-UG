import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { ArrowUp, MapPin, Mail, Phone, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-lg font-bold text-white font-display">
              <span className="w-2.5 h-2.5 bg-amber-500 rounded-sm inline-block" />
              <span>VINCI STUDIOS</span>
            </div>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Bespoke visual identity engineering, tactile custom print craftsmanship, and modern digital design systems.
            </p>
            <div className="text-xs text-neutral-400 space-y-1">
              <div>
                <strong className="text-neutral-300">Ownership:</strong> Mr. Muyanja Geofry (Founder & Creative Director)
              </div>
              <div>
                <strong className="text-neutral-300">Management:</strong> Nanyonjo Fridaus (Studio Operations Lead)
              </div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Studio Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#work" className="hover:text-amber-400 transition-colors">
                  Selected Work & Case Studies
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Services & Production Capabilities
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-amber-400 transition-colors">
                  Custom Cost Estimator
                </a>
              </li>
              <li>
                <a href="#prompts" className="hover:text-amber-400 transition-colors">
                  Creative Brief & Prompt Studio
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-amber-400 transition-colors">
                  Leadership & Governance
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  Location & Visiting Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Studio Address
            </div>
            <div className="text-xs text-neutral-400 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {STUDIO_INFO.location.building}, {STUDIO_INFO.location.road}
                  <br />
                  <span className="text-amber-300/90">{STUDIO_INFO.location.landmark}</span>
                  <br />
                  {STUDIO_INFO.location.city}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono">{STUDIO_INFO.contacts.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{STUDIO_INFO.contacts.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} Vinci Studios Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${STUDIO_INFO.contacts.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Desk</span>
            </a>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
