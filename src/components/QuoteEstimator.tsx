import React, { useState, useMemo } from 'react';
import { Calculator, MessageSquare, ArrowRight, ShieldCheck, Clock, Layers } from 'lucide-react';
import { ESTIMATOR_RATES, STUDIO_INFO } from '../data/studioData';

interface QuoteEstimatorProps {
  onBookWithEstimate: (details: string) => void;
}

export const QuoteEstimator: React.FC<QuoteEstimatorProps> = ({ onBookWithEstimate }) => {
  const [selectedServiceId, setSelectedServiceId] = useState(ESTIMATOR_RATES.services[1].id);
  const [selectedMaterialId, setSelectedMaterialId] = useState(ESTIMATOR_RATES.materials[0].id);
  const [selectedFinishId, setSelectedFinishId] = useState(ESTIMATOR_RATES.finishes[0].id);
  const [quantity, setQuantity] = useState(250);
  const [turnaround, setTurnaround] = useState<'standard' | 'express' | 'rush'>('standard');

  const selectedService = ESTIMATOR_RATES.services.find((s) => s.id === selectedServiceId)!;
  const selectedMaterial = ESTIMATOR_RATES.materials.find((m) => m.id === selectedMaterialId)!;
  const selectedFinish = ESTIMATOR_RATES.finishes.find((f) => f.id === selectedFinishId)!;

  // Calculation logic with volume discounting
  const calculation = useMemo(() => {
    const baseUGX = selectedService.baseUGX;
    const materialMult = selectedMaterial.multiplier;
    const finishAdd = selectedFinish.addUGX;
    const turnaroundMult = ESTIMATOR_RATES.turnaroundMultipliers[turnaround];

    // Volume discount curve
    let volumeFactor = 1.0;
    if (quantity >= 2500) volumeFactor = 0.65;
    else if (quantity >= 1000) volumeFactor = 0.75;
    else if (quantity >= 500) volumeFactor = 0.85;
    else if (quantity >= 250) volumeFactor = 0.95;

    // Unit multiplier normalized around 100 base count
    const unitScale = quantity / 100;
    const subtotal = (baseUGX * materialMult + finishAdd) * unitScale * volumeFactor;
    const totalUGX = Math.round(subtotal * turnaroundMult / 1000) * 1000;
    const totalUSD = Math.round(totalUGX / 3750);

    return {
      totalUGX,
      totalUSD,
      unitCostUGX: Math.round(totalUGX / quantity),
    };
  }, [selectedService, selectedMaterial, selectedFinish, quantity, turnaround]);

  const summaryText = `*Vinci Studios Print & Design Estimate Request*
Service: ${selectedService.name}
Substrate: ${selectedMaterial.name}
Finishing: ${selectedFinish.name}
Quantity: ${quantity} units
Turnaround: ${turnaround.toUpperCase()}
Calculated Estimate: UGX ${calculation.totalUGX.toLocaleString()} (~$${calculation.totalUSD.toLocaleString()})
Location: Gratias Building, Salaama Road`;

  const handleWhatsAppInquiry = () => {
    const encoded = encodeURIComponent(
      `Hello Fridaus & Geofry (Vinci Studios),\n\nI just calculated a custom quote on your website for:\n- Service: ${selectedService.name}\n- Material: ${selectedMaterial.name}\n- Finish: ${selectedFinish.name}\n- Quantity: ${quantity} units\n- Priority: ${turnaround.toUpperCase()}\n- Est. Cost: UGX ${calculation.totalUGX.toLocaleString()}\n\nCan we arrange sample proofing or confirm this order at your Gratias Building studio?`
    );
    window.open(`https://wa.me/${STUDIO_INFO.contacts.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <section id="estimator" className="py-20 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-2">
            <span>Instant Cost Estimator</span>
            <span aria-hidden="true">·</span>
            <span>Transparent Studio Rates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            Calculate your custom print & branding project.
          </h2>
          <p className="text-neutral-400 mt-2 max-w-xl text-sm sm:text-base">
            Configure substrates, specialty foils, quantities, and production turnaround. Instant estimate with live WhatsApp confirmation to our studio desk.
          </p>
        </div>

        {/* Calculator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form (7 Cols) */}
          <div className="lg:col-span-7 bg-neutral-900/60 p-6 sm:p-8 rounded-2xl border border-neutral-800 space-y-6">
            {/* 1. Service Selection */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                1. Select Service / Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ESTIMATOR_RATES.services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                      selectedServiceId === service.id
                        ? 'bg-neutral-800 border-amber-500/80 text-white shadow-sm'
                        : 'bg-neutral-950/60 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    <div className="text-xs font-semibold">{service.name}</div>
                    <div className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">
                      {service.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Material Substrate */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                2. Substrate & Stock Material
              </label>
              <select
                value={selectedMaterialId}
                onChange={(e) => setSelectedMaterialId(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-200 focus:outline-none focus:border-amber-400"
              >
                {ESTIMATOR_RATES.materials.map((mat) => (
                  <option key={mat.id} value={mat.id} className="bg-neutral-950">
                    {mat.name} {mat.multiplier > 1 ? `(+${Math.round((mat.multiplier - 1) * 100)}% premium)` : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Finishing & Specialty Craft */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                3. Specialty Finishes & Embellishments
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ESTIMATOR_RATES.finishes.map((fin) => (
                  <button
                    key={fin.id}
                    type="button"
                    onClick={() => setSelectedFinishId(fin.id)}
                    className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                      selectedFinishId === fin.id
                        ? 'bg-neutral-800 border-amber-500/80 text-white shadow-sm'
                        : 'bg-neutral-950/60 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    <div className="text-xs font-medium">{fin.name}</div>
                    <div className="text-[11px] text-amber-400/80 mt-0.5 font-mono">
                      {fin.addUGX > 0 ? `+UGX ${fin.addUGX.toLocaleString()}` : 'Included in base'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Quantity Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                  4. Production Quantity
                </label>
                <span className="text-sm font-bold text-amber-400 font-mono tabular-nums">
                  {quantity.toLocaleString()} units
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="50"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer h-2 bg-neutral-950 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 font-mono mt-1">
                <span>100 units</span>
                <span>500 (15% off)</span>
                <span>1,000 (25% off)</span>
                <span>5,000 units</span>
              </div>
            </div>

            {/* 5. Turnaround Priority */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                5. Turnaround Schedule
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setTurnaround('standard')}
                  className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                    turnaround === 'standard'
                      ? 'bg-neutral-800 border-amber-500/80 text-white'
                      : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-semibold">Standard</div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">3–5 Days</div>
                </button>
                <button
                  type="button"
                  onClick={() => setTurnaround('express')}
                  className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                    turnaround === 'express'
                      ? 'bg-neutral-800 border-amber-500/80 text-white'
                      : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-semibold">Express</div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">48 Hours (+25%)</div>
                </button>
                <button
                  type="button"
                  onClick={() => setTurnaround('rush')}
                  className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                    turnaround === 'rush'
                      ? 'bg-neutral-800 border-amber-500/80 text-white'
                      : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-semibold">Rush</div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">24 Hours (+50%)</div>
                </button>
              </div>
            </div>
          </div>

          {/* Result Card (5 Cols) */}
          <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 sticky top-28 space-y-6 shadow-xl">
            <div className="pb-4 border-b border-neutral-800 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Estimate Summary
              </span>
              <div className="flex items-center gap-1.5 text-xs text-amber-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Price Protected</span>
              </div>
            </div>

            {/* Total Pricing Display with tabular-nums */}
            <div>
              <div className="text-xs text-neutral-400 mb-1">Estimated Total Investment</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                UGX {calculation.totalUGX.toLocaleString()}
              </div>
              <div className="text-sm text-neutral-400 font-mono tabular-nums mt-0.5">
                Approx. ${calculation.totalUSD.toLocaleString()} USD · UGX {calculation.unitCostUGX.toLocaleString()} / unit
              </div>
            </div>

            {/* Breakdown itemization */}
            <div className="space-y-2.5 text-xs py-4 border-y border-neutral-800/80">
              <div className="flex justify-between text-neutral-300">
                <span className="text-neutral-400">Configured Item:</span>
                <span className="font-medium text-right max-w-[200px] truncate">{selectedService.name}</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span className="text-neutral-400">Substrate:</span>
                <span className="font-medium text-right max-w-[200px] truncate">{selectedMaterial.name}</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span className="text-neutral-400">Finish:</span>
                <span className="font-medium text-right max-w-[200px] truncate">{selectedFinish.name}</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span className="text-neutral-400">Volume:</span>
                <span className="font-mono text-white">{quantity.toLocaleString()} units</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span className="text-neutral-400">Production Time:</span>
                <span className="font-medium text-amber-300 capitalize">{turnaround}</span>
              </div>
            </div>

            {/* Direct Actions */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-amber-500/10"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Configuration to WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => onBookWithEstimate(summaryText)}
                className="w-full py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-750 text-neutral-200 font-medium text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-neutral-700/60"
              >
                <span>Request Physical Proof at Studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Note */}
            <p className="text-[11px] text-neutral-400 leading-normal text-center">
              Physical material swatches available for inspection at <strong className="text-neutral-300">GRATIAS Building, Salaama Road</strong>. Custom quantities above 5,000 qualify for bespoke commercial pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
