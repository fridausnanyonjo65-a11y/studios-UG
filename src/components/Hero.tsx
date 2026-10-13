import React from 'react';
import { ArrowRight, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreWork: () => void;
  onGoToEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onExploreWork,
  onGoToEstimator,
}) => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-4">
              <span>Kampala</span>
              <span aria-hidden="true">·</span>
              <span>Salaama Road</span>
              <span aria-hidden="true">·</span>
              <span>Gratias Building</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.08] mb-6 text-balance">
              High-end branding, digital design, and custom print mastery.
            </h1>

            {/* Lead Prose */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-2xl">
              <strong className="text-white font-medium">Vinci Studios</strong> transforms commercial ambition into authoritative visual identities, tactical digital experiences, and bespoke tactile print pieces. Located at <span className="text-amber-200">GRATIAS Building on Salaama Road</span> (just past Nesta Petrol Station).
            </p>

            {/* Leadership & Studio Anchor */}
            <div className="bg-neutral-900/70 border border-neutral-800 rounded-xl p-4 sm:p-5 mb-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-neutral-400 block mb-1">Founding & Creative Direction</span>
                  <span className="text-white font-semibold text-sm">Mr. Muyanja Geofry</span>
                  <p className="text-neutral-400 mt-0.5">Brand Identity Architect & Managing Director</p>
                </div>
                <div className="sm:border-l sm:border-neutral-800 sm:pl-4">
                  <span className="text-neutral-400 block mb-1">Studio Operations & Production</span>
                  <span className="text-white font-semibold text-sm">Nanyonjo Fridaus</span>
                  <p className="text-neutral-400 mt-0.5">Production Lead & Client Relations Manager</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-lg shadow-amber-500/10 whitespace-nowrap cursor-pointer flex items-center gap-2"
              >
                <span>Initiate Studio Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onGoToEstimator}
                className="px-6 py-3.5 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                Estimate Print Cost
              </button>

              <a
                href="#location"
                className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-amber-300 transition-colors py-2 px-1"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Visit Us on Salaama Road</span>
              </a>
            </div>
          </div>

          {/* Right Column: Matched Visual Container */}
          <div className="lg:col-span-5 relative flex flex-col">
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-full min-h-[380px] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
              <img
                src="/src/assets/images/vinci_hero_studio_1791878373846.jpg"
                alt="Vinci Studios design workspace and print craft facility"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
              
              {/* Overlay Studio Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80">
                <div className="flex items-center justify-between text-xs text-neutral-300 mb-1">
                  <span className="font-semibold text-white font-display">Vinci Creative Lab</span>
                  <span className="text-amber-400 font-mono">GRATIAS BLDG</span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-snug">
                  Salaama Road, just after Nesta Petrol Station · Full-Spectrum Design & Precision UV Print Production
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Credentials & KPI Strip below hero split */}
        <div className="mt-14 pt-10 border-t border-neutral-900 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-850">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums text-amber-400">
              120+
            </div>
            <div className="text-xs text-neutral-400 mt-1">Corporate Identities & Brands Built</div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-850">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums text-amber-400">
              99.6%
            </div>
            <div className="text-xs text-neutral-400 mt-1">Pantone & CMYK Color Match Fidelity</div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-850">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums text-amber-400">
              24h
            </div>
            <div className="text-xs text-neutral-400 mt-1">Express Turnaround for Critical Print Runs</div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-850">
            <div className="text-2xl sm:text-3xl font-bold text-white font-display text-white">
              GRATIAS
            </div>
            <div className="text-xs text-neutral-400 mt-1">Salaama Rd, past Nesta Petrol Station</div>
          </div>
        </div>
      </div>
    </section>
  );
};
