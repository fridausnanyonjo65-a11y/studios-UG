import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand title wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-white font-display whitespace-nowrap shrink-0 group"
          >
            <span className="w-2.5 h-2.5 bg-amber-500 rounded-sm inline-block group-hover:rotate-45 transition-transform duration-300" />
            <span className="tracking-wider">VINCI STUDIOS</span>
          </a>

          {/* Zone 2: 4-5 single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <a href="#work" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Selected Work
            </a>
            <a href="#services" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Services
            </a>
            <a href="#estimator" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Cost Estimator
            </a>
            <a href="#prompts" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Brief & Prompts
            </a>
            <a href="#leadership" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Leadership
            </a>
            <a href="#location" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Studio Location
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all duration-200 shadow-sm hover:shadow-amber-500/20 whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-neutral-950 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:text-amber-400"
          >
            Selected Work
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:text-amber-400"
          >
            Services
          </a>
          <a
            href="#estimator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:text-amber-400"
          >
            Cost Estimator
          </a>
          <a
            href="#prompts"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:text-amber-400"
          >
            Brief & Prompts
          </a>
          <a
            href="#leadership"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:text-amber-400"
          >
            Leadership
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:text-amber-400"
          >
            Studio Location
          </a>
          <div className="pt-2 border-t border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full text-center px-4 py-3 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
