import React from 'react';
import { SERVICES } from '../data/studioData';
import { Check, ArrowRight, Sparkles, Printer, Layers, Compass } from 'lucide-react';

interface ServicesSectionProps {
  onInquireService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onInquireService }) => {
  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-5 h-5 text-amber-400" />;
      case 1:
        return <Printer className="w-5 h-5 text-amber-400" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-neutral-900/50 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-2">
            <span>Core Disciplines</span>
            <span aria-hidden="true">·</span>
            <span>Comprehensive Studio Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            Precision engineering for physical & digital mediums.
          </h2>
          <p className="text-neutral-400 mt-2 max-w-2xl text-sm sm:text-base">
            From strategic visual positioning to tactile foil-stamped substrates and illuminated architectural signage, our capabilities cover the entire lifecycle of luxury brand assets.
          </p>
        </div>

        {/* Services List / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.number}
              className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800/90 hover:border-neutral-700 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Header with natural human editorial index */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-900 mb-6">
                  <span className="text-sm font-mono text-amber-400/90 font-semibold">
                    {service.number}. {service.tagline}
                  </span>
                  <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                    {getServiceIcon(index)}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white font-display mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Capabilities Checklist */}
                <div className="space-y-2.5 mb-8">
                  <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                    Studio Deliverables & Equipment
                  </h4>
                  {service.capabilities.map((cap, capIdx) => (
                    <div key={capIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-neutral-900 flex items-center justify-between">
                <span className="text-xs text-neutral-500">
                  Produced in-house at Gratias Building
                </span>
                <button
                  onClick={() => onInquireService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <span>Request Service Spec</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
