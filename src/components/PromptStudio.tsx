import React, { useState } from 'react';
import { Copy, Check, Terminal, Sparkles, SlidersHorizontal, RefreshCw } from 'lucide-react';
import { STUDIO_PROMPTS, STUDIO_INFO } from '../data/studioData';

export const PromptStudio: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Custom prompt builder state
  const [builderProject, setBuilderProject] = useState('Luxury Corporate Rebrand & Gold Foil Stationery');
  const [builderVibe, setBuilderVibe] = useState('Minimalist, Architectural & High-Contrast Dark Modern');
  const [builderFinishes, setBuilderFinishes] = useState('Metallic Copper Foil Stamping & Blind Deboss on 600gsm Cotton');
  const [customGeneratedPrompt, setCustomGeneratedPrompt] = useState<string>('');
  const [builderCopied, setBuilderCopied] = useState(false);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleGenerateCustom = () => {
    const prompt = `Client Creative Brief for Vinci Studios:
Studio: VINCI STUDIOS (Kampala, Uganda)
Location: GRATIAS Building, along Salaama Road (just past Nesta Petrol Station)
Key Contacts: Mr. Muyanja Geofry (Founder & Creative Director) & Nanyonjo Fridaus (Operations Manager)
Project Scope: ${builderProject}
Art Direction & Visual Vibe: ${builderVibe}
Specified Materials & Craft Finishes: ${builderFinishes}
Objective: Position the brand with exceptional authority, uncompromised print registration, and luxury tactile presence. Ensure color calibration matches Pantone standards and provide physical proofing at Gratias Building.`;
    setCustomGeneratedPrompt(prompt);
  };

  return (
    <section id="prompts" className="py-20 bg-neutral-900/40 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-2">
            <span>Creative Briefing & Prompt Studio</span>
            <span aria-hidden="true">·</span>
            <span>Ready-to-Use Specifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            Engineered prompts & creative briefs for Vinci Studios.
          </h2>
          <p className="text-neutral-400 mt-2 max-w-2xl text-sm sm:text-base">
            Use these precisely engineered prompt templates to commission work, briefing generative design engines, or standardizing production specs with Mr. Muyanja Geofry and Nanyonjo Fridaus.
          </p>
        </div>

        {/* Master Website Prompt Highlight Card */}
        <div className="mb-12 rounded-2xl bg-neutral-950 border border-amber-500/40 p-6 sm:p-8 relative overflow-hidden shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-neutral-850">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold block">
                Primary Master Prompt · Portfolio Website Spec
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                The Vinci Studios Master Portfolio Prompt
              </h3>
            </div>

            <button
              onClick={() => handleCopy(STUDIO_PROMPTS[0].promptText, 'master')}
              className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-semibold text-xs transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
            >
              {copiedId === 'master' ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Master Prompt</span>
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-neutral-400 mb-4">
            Comprehensive description containing all official studio details: Salaama Road location, GRATIAS building landmark, ownership by Mr. Muyanja Geofry, operations management by Nanyonjo Fridaus, and full service breakdown.
          </p>

          <div className="bg-neutral-900/90 rounded-xl p-4 sm:p-5 border border-neutral-800 text-xs sm:text-sm font-mono text-neutral-300 leading-relaxed whitespace-pre-line selection:bg-amber-500/30">
            {STUDIO_PROMPTS[0].promptText}
          </div>
        </div>

        {/* Secondary Prompts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {STUDIO_PROMPTS.slice(1).map((prompt) => (
            <div
              key={prompt.id}
              className="rounded-xl bg-neutral-950 border border-neutral-850 p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                  <span className="text-amber-400 font-medium">{prompt.tag}</span>
                  <span className="text-[11px] font-mono text-neutral-500">Preset Brief</span>
                </div>

                <h4 className="text-lg font-bold text-white font-display mb-2">
                  {prompt.title}
                </h4>

                <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                  {prompt.description}
                </p>

                <div className="bg-neutral-900/80 p-3 rounded-lg border border-neutral-800/80 text-[11px] font-mono text-neutral-300 line-clamp-6 mb-4">
                  {prompt.promptText}
                </div>
              </div>

              <button
                onClick={() => handleCopy(prompt.promptText, prompt.id)}
                className="w-full py-2 px-3 rounded-lg bg-neutral-850 hover:bg-neutral-800 text-neutral-200 text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-neutral-750"
              >
                {copiedId === prompt.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-amber-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy This Brief</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Custom Brief & Prompt Generator */}
        <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Interactive Custom Brief Generator</span>
          </div>
          <h3 className="text-2xl font-bold text-white font-display mb-2">
            Tailor a customized design & print prompt
          </h3>
          <p className="text-sm text-neutral-400 mb-6">
            Configure your brief parameters below, then click generate to get an instantly copyable specification ready for Vinci Studios.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Project Scope
              </label>
              <select
                value={builderProject}
                onChange={(e) => setBuilderProject(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-400"
              >
                <option value="Luxury Corporate Rebrand & Gold Foil Stationery">Luxury Corporate Rebrand & Gold Foil Stationery</option>
                <option value="Rigid Packaging Slide Box for Cosmetics / Specialty Coffee">Rigid Packaging Slide Box with Soft-Touch Film</option>
                <option value="3D Illuminated Building Fascia & Roadside Pylon">3D Illuminated Signage on Salaama Road</option>
                <option value="Kinetic Digital UI & Motion Video Launch Campaign">Kinetic Digital UI & Motion Video Suite</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Aesthetic Direction
              </label>
              <select
                value={builderVibe}
                onChange={(e) => setBuilderVibe(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-400"
              >
                <option value="Minimalist, Architectural & High-Contrast Dark Modern">Minimalist & Dark Modern Architecture</option>
                <option value="Warm Heritage African Luxury with Copper Foiling">Warm Heritage African Luxury & Copper</option>
                <option value="High-Impact Bold Commercial Typography & Kinetic Contrast">Bold Commercial & High Visibility</option>
                <option value="Subtle Botanical Tactile Craft on Uncoated Cotton">Subtle Botanical Craft & Cotton Texture</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Finishes & Substrate
              </label>
              <select
                value={builderFinishes}
                onChange={(e) => setBuilderFinishes(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-400"
              >
                <option value="Metallic Copper Foil Stamping & Blind Deboss on 600gsm Cotton">Foil Stamping + Blind Deboss on 600gsm</option>
                <option value="Spot UV Raised Gloss over Matte Velvet Lamination">Spot UV over Matte Velvet Lamination</option>
                <option value="Solid Brushed Brass Face with Warm 3000K LED Backlight">Brushed Brass Face with LED Backlight</option>
                <option value="510gsm Weatherproof PVC with Reinforced Hem & Nickel Eyelets">510gsm Reinforced Weatherproof PVC</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <button
              onClick={handleGenerateCustom}
              className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer border border-neutral-700"
            >
              <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
              <span>Generate Brief Prompt</span>
            </button>
          </div>

          {customGeneratedPrompt && (
            <div className="mt-4 p-4 rounded-xl bg-neutral-900 border border-neutral-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-amber-400">Generated Custom Brief:</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(customGeneratedPrompt);
                    setBuilderCopied(true);
                    setTimeout(() => setBuilderCopied(false), 2000);
                  }}
                  className="px-3 py-1 rounded bg-amber-400 hover:bg-amber-300 text-neutral-950 font-semibold text-[11px] flex items-center gap-1 cursor-pointer"
                >
                  {builderCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{builderCopied ? 'Copied!' : 'Copy Brief'}</span>
                </button>
              </div>
              <div className="text-xs font-mono text-neutral-300 whitespace-pre-line leading-relaxed">
                {customGeneratedPrompt}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
