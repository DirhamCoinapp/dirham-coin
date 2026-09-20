/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { RoadmapAtAGlance } from './components/RoadmapAtAGlance';
import { PhaseDetailsSection } from './components/PhaseDetailsSection';
import { TokenomicsSection } from './components/TokenomicsSection';
import { DeflationarySection } from './components/DeflationarySection';
import { InvestmentSimulator } from './components/InvestmentSimulator';
import { VisionSection } from './components/VisionSection';
import { WhitepaperModal } from './components/WhitepaperModal';
import { ShareModal } from './components/ShareModal';
import { Footer } from './components/Footer';
import { Language } from './types';
import { SpaceBackground } from './components/SpaceBackground';
import { Share2 } from 'lucide-react';
import { dirhamCoinImg } from './assetImports';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [selectedPhaseId, setSelectedPhaseId] = useState<string>('phase-1');
  const [isWhitepaperOpen, setIsWhitepaperOpen] = useState<boolean>(false);
  const [isShareOpen, setIsShareOpen] = useState<boolean>(false);

  const handleSelectPhase = (phaseId: string) => {
    setSelectedPhaseId(phaseId);
    // Smooth scroll to the phase card
    const elem = document.getElementById(phaseId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleScrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-[#e6edf3] flex flex-col selection:bg-sky-500/30 selection:text-sky-300 overflow-x-hidden">
      {/* Space & Cosmic Stars Effect (Full-Screen Canvas & Nebulae) */}
      <SpaceBackground />

      {/* Navigation Header */}
      <Header
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        onOpenWhitepaper={() => setIsWhitepaperOpen(true)}
        onOpenCalculator={() => handleScrollTo('calculator')}
        onOpenShare={() => setIsShareOpen(true)}
      />

      <main className="flex-1 relative z-10">
        {/* Hero Section with 3D Coin showcase */}
        <HeroSection
          currentLang={currentLang}
          onExploreClick={() => handleScrollTo('roadmap')}
          onTokenomicsClick={() => handleScrollTo('tokenomics')}
          onCalculatorClick={() => handleScrollTo('calculator')}
        />

        {/* Roadmap at a Glance (Progress Ribbon) */}
        <RoadmapAtAGlance
          selectedPhaseId={selectedPhaseId}
          onSelectPhase={handleSelectPhase}
        />

        {/* Deep Dive Phase Details (Phase 1, 2, 3, 4 + Listing) */}
        <PhaseDetailsSection
          selectedPhaseId={selectedPhaseId}
          onSelectPhase={handleSelectPhase}
        />

        {/* 90,000,000 DRM Tokenomics Allocation & Community Majority */}
        <TokenomicsSection
          currentLang={currentLang}
        />

        {/* Deflationary 40% Net Revenue Buyback & Burn Engine */}
        <DeflationarySection
          currentLang={currentLang}
        />

        {/* Interactive Phase Growth & Target Listing Calculator */}
        <InvestmentSimulator />

        {/* The 4 Vision Pillars */}
        <VisionSection />
      </main>

      {/* Complete Whitepaper / Specs Modal */}
      <WhitepaperModal
        isOpen={isWhitepaperOpen}
        onClose={() => setIsWhitepaperOpen(false)}
      />

      {/* Share Webpage Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />

      {/* Floating Quick Share Button (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          type="button"
          onClick={() => setIsShareOpen(true)}
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-gradient-to-r from-sky-500 via-sky-400 to-emerald-400 hover:from-sky-400 hover:to-emerald-300 text-slate-950 font-bold text-xs shadow-[0_4px_25px_rgba(14,165,233,0.5)] border border-sky-200/80 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
          title="Share Webpage Link"
        >
          <div className="w-5 h-5 rounded-full overflow-hidden border border-white/90 shadow-sm flex-shrink-0 bg-[#06111f]">
            <img src={dirhamCoinImg} alt="DRM" className="w-full h-full object-cover" />
          </div>
          <span className="font-sans text-slate-950 tracking-wide font-extrabold flex items-center gap-1.5">
            <span>Share Link</span>
            <Share2 className="w-3.5 h-3.5 text-slate-950 stroke-[2.5]" />
          </span>
        </button>
      </div>

      {/* Comprehensive Footer */}
      <Footer onOpenShare={() => setIsShareOpen(true)} />
    </div>
  );
}
