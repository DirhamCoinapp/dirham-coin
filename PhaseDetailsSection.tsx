import React, { useState } from 'react';
import { ROADMAP_PHASES } from '../data/roadmapData';
import { dirhamCoinImg } from '../assetImports';
import { CheckCircle2, AlertCircle, ArrowUpRight, ShieldCheck, Flame, Rocket, Layers, Globe, Gem, Landmark } from 'lucide-react';

interface PhaseDetailsSectionProps {
  selectedPhaseId: string;
  onSelectPhase: (phaseId: string) => void;
}

export const PhaseDetailsSection: React.FC<PhaseDetailsSectionProps> = ({
  selectedPhaseId,
  onSelectPhase,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'single'>('all');

  const getPhaseIcon = (code: string) => {
    switch (code) {
      case 'PHASE 1':
        return <Rocket className="w-5 h-5 text-emerald-400" />;
      case 'PHASE 2':
        return <Flame className="w-5 h-5 text-blue-400" />;
      case 'PHASE 3':
        return <Globe className="w-5 h-5 text-purple-400" />;
      case 'PHASE 4':
        return <Gem className="w-5 h-5 text-orange-400" />;
      case 'LISTING PHASE':
        return <Landmark className="w-5 h-5 text-sky-400" />;
      default:
        return <Layers className="w-5 h-5 text-sky-400" />;
    }
  };

  const phasesToDisplay = filterMode === 'all'
    ? ROADMAP_PHASES
    : ROADMAP_PHASES.filter(p => p.id === selectedPhaseId);

  return (
    <section id="roadmap" className="py-16 bg-[#050b16]/75 backdrop-blur-sm border-b border-sky-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-sky-950/80 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold flex items-center gap-1.5 mb-2">
              <ShieldCheck className="w-4 h-4" />
              STRATEGIC EXECUTION PHASES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
              COMPREHENSIVE PROJECT ROADMAP
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1 max-w-2xl">
              Each round is purpose-built with transparent milestones, dedicated token emissions, and targeted pricing metrics.
            </p>
          </div>

          {/* View filter toggles */}
          <div className="flex items-center gap-2 bg-[#0c1624] p-1 rounded-xl border border-sky-800/60 self-start md:self-auto">
            <button
              id="view-all-phases-btn"
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filterMode === 'all'
                  ? 'bg-sky-500 text-white font-bold shadow-[0_0_12px_rgba(14,165,233,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All 5 Stages
            </button>
            <button
              id="view-focused-phase-btn"
              onClick={() => setFilterMode('single')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filterMode === 'single'
                  ? 'bg-sky-500 text-white font-bold shadow-[0_0_12px_rgba(14,165,233,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Focused View
            </button>
          </div>
        </div>

        {/* Phase Cards Container */}
        <div className="space-y-8">
          {phasesToDisplay.map((phase) => {
            const isListing = phase.id === 'phase-listing';
            const isSelected = selectedPhaseId === phase.id;

            return (
              <div
                key={phase.id}
                id={phase.id}
                className={`relative rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isSelected
                    ? 'border-2 border-sky-500 bg-gradient-to-b from-[#0e1b2b] to-[#09121d] shadow-[0_0_35px_rgba(14,165,233,0.25)]'
                    : 'border-sky-950/80 bg-[#0c131d] hover:border-sky-700/60'
                }`}
              >
                {/* Accent colored top bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: phase.color }}
                />

                <div className="p-6 sm:p-8">
                  {/* Top Header of Card */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-sky-950/80">
                    <div className="flex items-start gap-4">
                      {/* Coin emblem badge */}
                      <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border border-sky-500/60 bg-[#091524] p-1 shadow-[0_0_12px_rgba(14,165,233,0.2)]">
                        <img
                          src={dirhamCoinImg}
                          alt="Dirham Coin DRM"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2.5 mb-1">
                          <span
                            className="text-xs font-black tracking-wider px-2.5 py-0.5 rounded font-mono-num"
                            style={{ backgroundColor: phase.badgeBg, color: phase.color }}
                          >
                            {phase.code}
                          </span>

                          {phase.status === 'active' && (
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/40 px-2.5 py-0.5 rounded-full">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                              Active Current Round
                            </span>
                          )}

                          {isListing && (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-sky-300 bg-sky-950/70 border border-sky-500/50 px-2.5 py-0.5 rounded-full">
                              Public Open-Market Target
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                          {phase.title}
                        </h3>
                        <p className="text-sm text-slate-400 mt-1 max-w-2xl">
                          {phase.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Price Round Badge Box */}
                    <div className="bg-[#070e17] border border-sky-950 p-4 rounded-2xl flex items-center gap-4 shrink-0">
                      <div>
                        <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                          {isListing ? 'Planned Listing Price' : 'Target Round Price'}
                        </div>
                        <div
                          className="text-xl sm:text-2xl font-black font-mono-num"
                          style={{ color: phase.color }}
                        >
                          {isListing ? phase.targetPrice : `${phase.startPrice} → ${phase.targetPrice}`}
                        </div>
                      </div>

                      <div className="pl-4 border-l border-slate-800 text-right">
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider">Round Growth</div>
                        <div className="text-sm font-bold text-slate-200 font-mono-num">
                          {phase.keyStats.priceGrowth}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {phase.keyStats.stageMultiplier}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Body: Key Objectives Grid */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs uppercase tracking-widest text-slate-300 font-semibold flex items-center gap-2">
                        <span>Key Objectives</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                        <span className="text-slate-400 font-normal">
                          {phase.objectives.length} Deliverables
                        </span>
                      </h4>
                      <span className="text-xs text-slate-400 font-mono-num">
                        {phase.focusSummary}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {phase.objectives.map((obj, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-xl bg-[#0e1622]/70 border border-sky-950/80 hover:border-sky-700/60 flex items-start gap-3 transition-colors"
                        >
                          <div className="mt-0.5 shrink-0">
                            <CheckCircle2
                              className="w-4 h-4"
                              style={{ color: phase.color }}
                            />
                          </div>
                          <span className="text-sm text-slate-200 font-medium leading-snug">
                            {obj}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Listing Disclaimer Banner if Listing Phase */}
                    {isListing && (
                      <div className="mt-6 p-4 rounded-2xl bg-sky-950/30 border border-sky-600/50 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                        <div className="text-xs sm:text-sm text-sky-200/90 leading-relaxed">
                          <strong className="text-sky-300 font-semibold block mb-0.5">Important Market Disclaimer:</strong>
                          Listing price and future market price may vary depending on market conditions, liquidity, exchange requirements, and actual market demand.
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card bottom bar */}
                  <div className="mt-6 pt-4 border-t border-sky-950/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                    <div className="flex items-center gap-4">
                      <span>Protocol Architecture: <strong className="text-slate-200">Decentralized Mining & Nodes</strong></span>
                      <span className="hidden sm:inline text-slate-600">•</span>
                      <span className="hidden sm:inline">Emissions: <strong className="text-slate-200">Deflationary Supply Capped</strong></span>
                    </div>

                    <button
                      onClick={() => onSelectPhase(phase.id)}
                      className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
                    >
                      <span>Highlight in Roadmap</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
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
