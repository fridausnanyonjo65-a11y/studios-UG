/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioGrid } from './components/PortfolioGrid';
import { ServicesSection } from './components/ServicesSection';
import { QuoteEstimator } from './components/QuoteEstimator';
import { PromptStudio } from './components/PromptStudio';
import { LeadershipSection } from './components/LeadershipSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ProjectLightbox } from './components/ProjectLightbox';
import { ConsultationModal } from './components/ConsultationModal';
import { ProjectItem } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationContext, setConsultationContext] = useState('');

  const handleOpenConsultation = (context: string = '') => {
    setConsultationContext(context);
    setIsConsultationOpen(true);
  };

  const handleInquireProject = (projectTitle: string) => {
    handleOpenConsultation(`Inquiry regarding project case study: "${projectTitle}". I would like to explore a similar design and print scope for my brand.`);
  };

  const handleInquireService = (serviceTitle: string) => {
    handleOpenConsultation(`Inquiry for service: "${serviceTitle}". Please provide standard turnaround times and quote options.`);
  };

  const handleBookWithEstimate = (estimateDetails: string) => {
    handleOpenConsultation(estimateDetails);
  };

  const handleContactLeader = (leaderName: string) => {
    handleOpenConsultation(`Direct message for ${leaderName}. Requesting executive consultation at Gratias Building studio.`);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-200">
      {/* Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation('General studio consultation inquiry')} />

      {/* Main Experience */}
      <main className="flex-1">
        <Hero
          onOpenConsultation={() => handleOpenConsultation('Creative consultation & studio visit')}
          onExploreWork={() => scrollToSection('work')}
          onGoToEstimator={() => scrollToSection('estimator')}
        />

        <PortfolioGrid onSelectProject={(project) => setSelectedProject(project)} />

        <ServicesSection onInquireService={handleInquireService} />

        <QuoteEstimator onBookWithEstimate={handleBookWithEstimate} />

        <PromptStudio />

        <LeadershipSection onContactLeader={handleContactLeader} />

        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Lightboxes */}
      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={handleInquireProject}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialContext={consultationContext}
      />
    </div>
  );
}
