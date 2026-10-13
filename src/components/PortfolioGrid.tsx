import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/studioData';
import { CategoryType, ProjectItem } from '../types';

interface PortfolioGridProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-20 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-2">
              <span>Curated Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Selected Works 2024–2026</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
              Proof of craftsmanship across identity & print.
            </h2>
            <p className="text-neutral-400 mt-2 max-w-xl text-sm sm:text-base">
              Explore recent identity redesigns, luxury packaging, illuminated signage, and digital systems engineered by Vinci Studios at Gratias Building.
            </p>
          </div>

          {/* Functional Interactive Segmented Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-neutral-900 rounded-xl border border-neutral-800 shrink-0">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-neutral-800 text-amber-300 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Works
            </button>
            <button
              onClick={() => setActiveCategory('branding')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'branding'
                  ? 'bg-neutral-800 text-amber-300 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Branding
            </button>
            <button
              onClick={() => setActiveCategory('print')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'print'
                  ? 'bg-neutral-800 text-amber-300 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Custom Print
            </button>
            <button
              onClick={() => setActiveCategory('digital')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'digital'
                  ? 'bg-neutral-800 text-amber-300 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Digital & Motion
            </button>
            <button
              onClick={() => setActiveCategory('signage')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'signage'
                  ? 'bg-neutral-800 text-amber-300 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Signage
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => {
            const isWide = index === 0 && activeCategory === 'all';
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 cursor-pointer flex flex-col ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Media Image Container */}
                <div className={`relative w-full overflow-hidden bg-neutral-950 ${isWide ? 'h-72 sm:h-96' : 'h-64 sm:h-72'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
                  
                  {/* Subtle top right action cue */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-950/70 backdrop-blur-md border border-neutral-700/60 flex items-center justify-center text-neutral-300 group-hover:text-amber-400 group-hover:bg-neutral-900 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content & Metadata */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    {/* Clean unboxed metadata with dot separators */}
                    <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                      <span className="text-amber-400 font-medium">{project.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.client}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white font-display group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-neutral-300 mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                    <span className="truncate max-w-[220px]">
                      {project.finishes[0]}
                    </span>
                    <span className="text-amber-400 group-hover:translate-x-0.5 transition-transform font-medium">
                      View Case Study →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
