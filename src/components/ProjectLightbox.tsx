import React, { useEffect } from 'react';
import { X, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectLightboxProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-neutral-950/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/70">
          <div className="flex items-center gap-3 text-xs text-neutral-400">
            <span className="text-amber-400 font-medium">{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>Client: {project.client}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Main Visual */}
          <div className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Title & Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              {project.title}
            </h2>
            <p className="text-neutral-300 mt-2 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Project Objective */}
          <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800/80">
            <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1.5">
              Design & Production Objective
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {project.objective}
            </p>
          </div>

          {/* Specs & Finishes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Finishes */}
            <div className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800/80">
              <div className="flex items-center gap-2 text-xs font-semibold text-white mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Specialty Finishes & Craft</span>
              </div>
              <ul className="space-y-2 text-xs text-neutral-300">
                {project.finishes.map((finish, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{finish}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specs */}
            <div className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800/80">
              <div className="flex items-center gap-2 text-xs font-semibold text-white mb-3">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>Substrate & Production Specs</span>
              </div>
              <ul className="space-y-2 text-xs text-neutral-300">
                {project.specs.map((spec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 shrink-0 mt-1.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Deliverables List */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
              Deliverables Provided
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.deliverables.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1.5 rounded-md bg-neutral-800/80 text-neutral-200 border border-neutral-700/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-neutral-800 bg-neutral-950/90">
          <span className="text-xs text-neutral-400">
            Crafted at Vinci Studios · Gratias Building, Salaama Road
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors cursor-pointer w-full sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={() => {
                onInquire(project.title);
                onClose();
              }}
              className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-1.5 w-full sm:w-auto"
            >
              <span>Inquire Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
