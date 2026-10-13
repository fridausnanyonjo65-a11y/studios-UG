import React from 'react';
import { MapPin, Navigation, Clock, Phone, Mail, MessageSquare, ExternalLink, Compass } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Salaama Road Gratias Building Kampala Uganda')}`;

  const handleOpenDirections = () => {
    window.open(googleMapsUrl, '_blank');
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello Vinci Studios, I would like to visit your studio at Gratias Building on Salaama Road for a design consultation / sample inspection.');
    window.open(`https://wa.me/${STUDIO_INFO.contacts.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="location" className="py-20 bg-neutral-900/60 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-2">
            <span>Studio Headquarters</span>
            <span aria-hidden="true">·</span>
            <span>Salaama Road, Kampala</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            Visit our creative lab & print studio.
          </h2>
          <p className="text-neutral-400 mt-2 max-w-2xl text-sm sm:text-base">
            Drop in to feel physical paper stocks, inspect hot foil stamping samples, examine Pantone color swatches, or review pre-press proofs in person.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Location Details & Route Steps (7 Cols) */}
          <div className="lg:col-span-7 bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 flex flex-col justify-between">
            <div>
              {/* Landmark Callout */}
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 mb-6 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-white font-display">
                    {STUDIO_INFO.location.building} · {STUDIO_INFO.location.road}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Landmark: <span className="text-amber-300 font-medium">{STUDIO_INFO.location.landmark}</span>, Kampala, Uganda
                  </p>
                </div>
              </div>

              {/* Step-by-Step Wayfinding Guide */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  How to Reach Us Along Salaama Road
                </h4>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                  <span className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 text-amber-400 font-mono text-xs flex items-center justify-center shrink-0">
                    1
                  </span>
                  <div>
                    <strong className="text-white">Approach from Kibuye or Makindye:</strong> Proceed straight along Salaama Road heading towards Munyonyo.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                  <span className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 text-amber-400 font-mono text-xs flex items-center justify-center shrink-0">
                    2
                  </span>
                  <div>
                    <strong className="text-white">Spot Nesta Petrol Station:</strong> Look for the prominent Nesta Petrol Station forecourt on your route.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                  <span className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 text-amber-400 font-mono text-xs flex items-center justify-center shrink-0">
                    3
                  </span>
                  <div>
                    <strong className="text-white">Arrive at GRATIAS Building:</strong> Immediately after passing Nesta, locate GRATIAS Building. Parking is available right in front of our entrance.
                  </div>
                </div>
              </div>

              {/* Studio Hours & Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-neutral-900 mb-6">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Studio Hours</span>
                    <span className="text-neutral-400">{STUDIO_INFO.hours}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Direct Studio Desk</span>
                    <span className="text-neutral-400 font-mono">{STUDIO_INFO.contacts.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-900">
              <button
                onClick={handleOpenDirections}
                className="px-4 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Maps / Get Directions</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-medium text-xs transition-colors flex items-center gap-1.5 cursor-pointer border border-neutral-800"
              >
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                <span>Notify Studio of Arrival</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Studio & Map Guide Card (5 Cols) */}
          <div className="lg:col-span-5 bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-4 pb-3 border-b border-neutral-900">
                <span className="text-amber-400 font-mono font-medium">SALAAMA ROAD CORRIDOR</span>
                <span>KAMPALA, UG</span>
              </div>

              {/* Graphic Representation of Road Map */}
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-850 mb-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-neutral-600" />
                  <div className="text-xs text-neutral-400">Salaama Road / Kibuye Traffic Flow</div>
                </div>

                <div className="border-l-2 border-dashed border-neutral-700 ml-1.5 pl-5 py-2 space-y-3">
                  <div className="bg-neutral-950/70 p-2.5 rounded-lg border border-neutral-800 text-xs">
                    <span className="text-neutral-300 font-medium block">⛽ Nesta Petrol Station</span>
                    <span className="text-[11px] text-neutral-500">Key Visual Landmark</span>
                  </div>

                  <div className="bg-amber-950/40 p-2.5 rounded-lg border border-amber-500/40 text-xs">
                    <span className="text-amber-300 font-bold block">🏢 GRATIAS Building (Vinci Studios)</span>
                    <span className="text-[11px] text-neutral-400">Design Studio & Print Workshop</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-neutral-600" />
                  <div className="text-xs text-neutral-400">Continues to Munyonyo / Lake Corridor</div>
                </div>
              </div>

              {/* What to Expect at the Studio */}
              <div className="space-y-2 text-xs text-neutral-300">
                <span className="font-semibold text-white block uppercase tracking-wider text-[11px]">
                  What's Available at Our Salaama Road Lab:
                </span>
                <p className="text-neutral-400 leading-relaxed">
                  • 200+ physical paper stock & card swatch booklets
                  <br />• Live hot foil stamping & deboss metal die archives
                  <br />• 3D acrylic & outdoor signage scale samples
                  <br />• Private conference area to review brand strategy with Mr. Muyanja Geofry and Nanyonjo Fridaus.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-900 mt-6">
              <a
                href={`tel:${STUDIO_INFO.contacts.phone.replace(/\s+/g, '')}`}
                className="w-full py-3 rounded-lg bg-neutral-900 hover:bg-neutral-850 text-white font-medium text-xs flex items-center justify-center gap-2 border border-neutral-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Studio Desk: {STUDIO_INFO.contacts.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
