import React from 'react';
import { ROADMAP_PHASES } from '../data/roadmapData';
import { dirhamCoinImg } from '../assetImports';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

interface RoadmapAtAGlanceProps {
  selectedPhaseId: string;
  onSelectPhase: (phaseId: string) => void;
}

export const RoadmapAtAGlance: React.FC<RoadmapAtAGlanceProps> = ({
  selectedPhaseId,
  onSelectPhase,
}) => {
  return (
    <section className="py-12 bg-[#040914]/75 backdrop-blur-sm border-b border-sky-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c1928] border border-sky-700/60 text-xs font-semibold text-sky-300 mb-3 shadow-[0_0_12px_rgba(14,165,233,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>EXECUTIVE TIMELINE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            DRM ROADMAP AT A GLANCE
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            A structured, 4-phase valuation progression leading directly to open-market trading launch at $2.00 USDT.
          </p>
        </div>

        {/* Interactive Desktop Timeline Stepper */}
        <div className="hidden lg:grid grid-cols-5 gap-3 relative">
          {ROADMAP_PHASES.map((phase, idx) => {
            const isSelected = selectedPhaseId === phase.id;
            const isListing = phase.id === 'phase-listing';

            return (
              <div
                key={phase.id}
                onClick={() => onSelectPhase(phase.id)}
                className={`cursor-pointer group relative p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0e1b2b] border-2 border-sky-500 shadow-[0_0_25px_rgba(14,165,233,0.35)] scale-102 ring-1 ring-sky-500/40'
                    : 'bg-[#0d141e] border-sky-950/70 hover:border-sky-600/60 hover:bg-[#111c2a]'
                }`}
              >
                {/* Connecting arrow if not last */}
                {idx < ROADMAP_PHASES.length - 1 && (
                  <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#0d1c2c] border border-sky-700/60 flex items-center justify-center text-sky-300 shadow-md">
                    <ArrowRight className="w-3 h-3 text-sky-300" />
                  </div>
                )}

                {/* Card Header */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-full overflow-hidden border border-sky-500/70 p-0.5 bg-black shrink-0">
                        <img src={dirhamCoinImg} alt="DRM" className="w-full h-full object-cover rounded-full" />
                      </div>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded font-mono-num"
                        style={{ backgroundColor: phase.badgeBg, color: phase.color }}
                      >
                        {phase.code}
                      </span>
                    </div>

                    {phase.status === 'active' && (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                        LIVE
                      </span>
                    )}
                    {isListing && (
                      <span className="text-[10px] font-bold text-sky-300 bg-sky-950/70 px-2 py-0.5 rounded-full border border-sky-500/50">
                        LAUNCH
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-100 group-hover:text-white font-display line-clamp-1">
                    {phase.title}
                  </h3>

                  {/* Price Tag Box */}
                  <div className="mt-4 p-3 rounded-xl bg-[#070d14] border border-sky-950">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                      {isListing ? 'Planned Listing Price' : 'Target Round Price'}
                    </div>
                    <div
                      className="text-lg font-black font-mono-num mt-0.5"
                      style={{ color: phase.color }}
                    >
                      {phase.startPrice === phase.targetPrice || isListing
                        ? phase.targetPrice
                        : `${phase.startPrice.replace(' USDT', '')} → ${phase.targetPrice}`}
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center justify-between mt-1">
                      <span>Multiplier:</span>
                      <span className="font-bold text-slate-200 font-mono-num">
                        {phase.keyStats.stageMultiplier}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer button / cue */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[11px]">
                    {phase.objectives.length} Key Objectives
                  </span>
                  <span className={`text-[11px] font-semibold ${isSelected ? 'text-sky-400 font-bold' : 'text-slate-500 group-hover:text-sky-300'}`}>
                    {isSelected ? 'Viewing' : 'Details →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical Flow (Matching User's "↓" prompt format) */}
        <div className="lg:hidden flex flex-col space-y-3">
          {ROADMAP_PHASES.map((phase, idx) => {
            const isSelected = selectedPhaseId === phase.id;
            const isListing = phase.id === 'phase-listing';

            return (
              <React.Fragment key={phase.id}>
                <div
                  onClick={() => onSelectPhase(phase.id)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-[#0e1b2b] border-2 border-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.3)]'
                      : 'bg-[#0d141e] border-sky-950/70'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full overflow-hidden border border-sky-500/70 p-0.5 bg-black shrink-0">
                        <img src={dirhamCoinImg} alt="DRM" className="w-full h-full object-cover rounded-full" />
                      </div>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded font-mono-num"
                        style={{ backgroundColor: phase.badgeBg, color: phase.color }}
                      >
                        {phase.code}
                      </span>
                      {phase.status === 'active' && (
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/40">
                          LIVE
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-black font-mono-num" style={{ color: phase.color }}>
                        {isListing ? phase.targetPrice : `${phase.startPrice.replace(' USDT', '')} → ${phase.targetPrice}`}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-100 mt-2 font-display">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {phase.subtitle}
                  </p>
                </div>

                {/* Transition Arrow for mobile */}
                {idx < ROADMAP_PHASES.length - 1 && (
                  <div className="flex justify-center py-0.5">
                    <div className="w-6 h-6 rounded-full bg-[#0f1e2f] border border-sky-800/60 flex items-center justify-center text-sky-400">
                      <ChevronDown className="w-3.5 h-3.5 text-sky-400" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
