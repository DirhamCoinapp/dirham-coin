import React, { useState } from 'react';
import { TOKENOMICS_DATA, TOTAL_SUPPLY_STR } from '../data/roadmapData';
import { dirhamCoinImg } from '../assetImports';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/roadmapData';
import { PieChart, Users, ShieldAlert, CheckCircle2, Lock, ArrowUpRight } from 'lucide-react';

interface TokenomicsSectionProps {
  currentLang: Language;
}

export const TokenomicsSection: React.FC<TokenomicsSectionProps> = ({ currentLang }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const t = TRANSLATIONS[currentLang];

  // Filtered allocations
  const filteredAllocations = selectedGroup === 'all'
    ? TOKENOMICS_DATA
    : TOKENOMICS_DATA.filter(item => item.group === selectedGroup);

  // Calculate community total
  const communityAllocations = TOKENOMICS_DATA.filter(item => item.group === 'community');
  const communityTotalDRM = communityAllocations.reduce((acc, curr) => acc + curr.amountDRM, 0);
  const communityTotalPercent = communityAllocations.reduce((acc, curr) => acc + curr.percentage, 0);

  // Generate SVG Donut slices
  let cumulativeAngle = 0;
  const radius = 80;
  const strokeWidth = 32;
  const circumference = 2 * Math.PI * radius;

  const donutSlices = TOKENOMICS_DATA.map((item) => {
    const strokeDasharray = `${(item.percentage / 100) * circumference} ${circumference}`;
    const strokeDashoffset = -cumulativeAngle;
    cumulativeAngle += (item.percentage / 100) * circumference;

    return {
      ...item,
      strokeDasharray,
      strokeDashoffset,
    };
  });

  return (
    <section id="tokenomics" className="py-16 bg-[#050b16]/75 backdrop-blur-sm border-b border-sky-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c1928] border border-sky-500/50 text-xs font-semibold text-sky-300 mb-3 shadow-[0_0_12px_rgba(14,165,233,0.2)]">
            <PieChart className="w-3.5 h-3.5 text-sky-400" />
            <span>FIXED MAXIMUM SUPPLY ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            DRM TOKENOMICS
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            The total DRM supply is permanently capped at <strong className="text-sky-300 font-mono-num font-bold">{TOTAL_SUPPLY_STR}</strong>. More than half of the supply is directed toward network contributors through mining, nodes, referrals, and ecosystem participation.
          </p>
        </div>

        {/* Community Majority Spotlight Banner */}
        <div className="mb-10 p-6 rounded-3xl bg-gradient-to-r from-[#071924] via-[#0b2436] to-[#071924] border border-sky-600/50 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#091c2c] border border-sky-500/60 flex items-center justify-center shrink-0 p-1 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                <img src={dirhamCoinImg} alt="Dirham Coin" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-500/50">
                    NETWORK MAJORITY
                  </span>
                  <span className="text-xs text-slate-300">52.22% Community Allocation</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                  {t.communityShareTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  {t.communityShareSubtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 shrink-0 bg-[#04101c] p-4 rounded-2xl border border-sky-700/50">
              <div className="text-center">
                <div className="text-xs text-slate-400 uppercase font-medium">Community Tokens</div>
                <div className="text-2xl font-black text-sky-400 font-mono-num">
                  {communityTotalDRM.toFixed(2)}M
                </div>
                <div className="text-[10px] text-slate-400">DRM Tokens</div>
              </div>
              <div className="w-px h-10 bg-slate-800" />
              <div className="text-center">
                <div className="text-xs text-slate-400 uppercase font-medium">Exact Share</div>
                <div className="text-2xl font-black text-sky-300 font-mono-num">
                  {communityTotalPercent.toFixed(2)}%
                </div>
                <div className="text-[10px] text-slate-400">of 90M Supply</div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Chart + Table Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive SVG Donut Chart */}
          <div className="lg:col-span-5 bg-[#09121d] border border-sky-950 p-6 rounded-3xl flex flex-col items-center shadow-lg">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-6 flex items-center gap-2">
              <span>Interactive Allocation Chart</span>
            </h3>

            <div className="relative w-64 h-64 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 220 220">
                {donutSlices.map((slice) => {
                  const isHovered = activeCategory === slice.id;

                  return (
                    <circle
                      key={slice.id}
                      cx="110"
                      cy="110"
                      r={radius}
                      fill="transparent"
                      stroke={slice.color}
                      strokeWidth={isHovered ? strokeWidth + 6 : strokeWidth}
                      strokeDasharray={slice.strokeDasharray}
                      strokeDashoffset={slice.strokeDashoffset}
                      strokeLinecap="butt"
                      className="transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setActiveCategory(slice.id)}
                      onMouseLeave={() => setActiveCategory(null)}
                      onClick={() => setActiveCategory(slice.id === activeCategory ? null : slice.id)}
                    />
                  );
                })}
              </svg>

              {/* Center Donut Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                {activeCategory ? (
                  (() => {
                    const active = TOKENOMICS_DATA.find(i => i.id === activeCategory);
                    if (!active) return null;
                    return (
                      <div className="animate-in fade-in duration-200">
                        <div className="text-[11px] text-slate-400 uppercase font-mono-num font-semibold max-w-[120px] truncate">
                          {active.category}
                        </div>
                        <div className="text-2xl font-black text-white font-mono-num" style={{ color: active.color }}>
                          {active.percentage}%
                        </div>
                        <div className="text-xs text-slate-300 font-mono-num">
                          {active.amountDRM}M DRM
                        </div>
                      </div>
                    );
                  })()
                ) : (
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold">Capped Supply</div>
                    <div className="text-2xl font-black text-sky-300 font-mono-num">
                      90.00M
                    </div>
                    <div className="text-[10px] text-sky-400/80 font-mono-num font-semibold">
                      100% Fixed Cap
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Filter Buttons */}
            <div className="mt-6 w-full pt-4 border-t border-sky-950">
              <div className="text-[11px] text-slate-400 uppercase font-semibold mb-2 text-center">
                Filter by Category
              </div>
              <div className="flex flex-wrap items-center justify-center gap-1.5">
                <button
                  onClick={() => setSelectedGroup('all')}
                  className={`px-2.5 py-1 text-xs rounded-md transition-all ${
                    selectedGroup === 'all'
                      ? 'bg-sky-500 text-white font-bold shadow-[0_0_10px_rgba(14,165,233,0.3)]'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white'
                  }`}
                >
                  All (8)
                </button>
                <button
                  onClick={() => setSelectedGroup('community')}
                  className={`px-2.5 py-1 text-xs rounded-md transition-all ${
                    selectedGroup === 'community'
                      ? 'bg-sky-500 text-white font-bold shadow-[0_0_10px_rgba(14,165,233,0.3)]'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white'
                  }`}
                >
                  Community & Mining (4)
                </button>
                <button
                  onClick={() => setSelectedGroup('core')}
                  className={`px-2.5 py-1 text-xs rounded-md transition-all ${
                    selectedGroup === 'core'
                      ? 'bg-sky-500 text-white font-bold shadow-[0_0_10px_rgba(14,165,233,0.3)]'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white'
                  }`}
                >
                  Foundation (1)
                </button>
                <button
                  onClick={() => setSelectedGroup('liquidity')}
                  className={`px-2.5 py-1 text-xs rounded-md transition-all ${
                    selectedGroup === 'liquidity'
                      ? 'bg-sky-500 text-white font-bold shadow-[0_0_10px_rgba(14,165,233,0.3)]'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white'
                  }`}
                >
                  TGE (1)
                </button>
                <button
                  onClick={() => setSelectedGroup('strategic')}
                  className={`px-2.5 py-1 text-xs rounded-md transition-all ${
                    selectedGroup === 'strategic'
                      ? 'bg-sky-500 text-white font-bold shadow-[0_0_10px_rgba(14,165,233,0.3)]'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white'
                  }`}
                >
                  VC & Grants (2)
                </button>
              </div>
            </div>
          </div>

          {/* Right: Detailed Breakdown List / Table */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 uppercase font-semibold px-2">
              <span>Allocation Pool</span>
              <div className="flex items-center gap-6">
                <span>Amount (DRM)</span>
                <span className="w-16 text-right">Share</span>
              </div>
            </div>

            {filteredAllocations.map((item) => {
              const isActive = activeCategory === item.id;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveCategory(item.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0e1a2b] border-2 border-sky-500 shadow-lg'
                      : 'bg-[#09111c] border-sky-950/80 hover:border-sky-700/60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="w-3.5 h-3.5 rounded-full shrink-0 shadow-sm"
                        style={{ backgroundColor: item.color }}
                      />
                      <div className="min-w-0">
                        <div className="font-bold text-slate-100 text-sm truncate flex items-center gap-2">
                          <span>{item.category}</span>
                          {item.group === 'community' && (
                            <span className="bg-sky-950 text-sky-300 border border-sky-600/50 text-[10px] font-bold px-1.5 py-0.2 rounded font-mono-num">
                              Mining / Node
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-400 truncate mt-0.5">
                          {item.description}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 shrink-0 text-right font-mono-num">
                      <div>
                        <div className="text-sm font-bold text-white">
                          {item.amountDRM.toFixed(2)}M
                        </div>
                        <div className="text-[10px] text-slate-500">
                          {item.amountExact.toLocaleString()} DRM
                        </div>
                      </div>

                      <div className="w-16 text-right">
                        <div
                          className="text-sm font-black"
                          style={{ color: item.color }}
                        >
                          {item.percentage}%
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vesting details drawer when active */}
                  {isActive && (
                    <div className="mt-3 pt-3 border-t border-sky-900/60 flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Lock className="w-3 h-3 text-sky-400" />
                        <span>Mechanism: <strong className="text-slate-200">{item.vestingHighlight}</strong></span>
                      </span>
                      <span className="text-sky-300 font-mono-num text-[11px] font-semibold">
                        Pool ID: #{item.id}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Total Row */}
            <div className="p-4 rounded-2xl bg-[#0a1829] border-2 border-sky-500/70 flex items-center justify-between text-sm font-bold font-mono-num text-white shadow-[0_0_20px_rgba(14,165,233,0.25)]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span className="font-display tracking-wider">TOTAL FIXED CAPPED SUPPLY</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-lg text-sky-300">90.00M DRM</span>
                <span className="w-16 text-right text-lg text-sky-400 font-black">100.00%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mathematical Normalization & Transparency Note */}
        <div className="mt-10 p-5 rounded-2xl bg-[#09111b] border border-sky-800/60 flex items-start gap-4">
          <ShieldAlert className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs uppercase tracking-widest text-sky-300 font-bold">
              Mathematical Normalization & Supply Verification
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.normalizationNote}
            </p>
            <p className="text-xs text-sky-200/80 italic">
              "Maine aap ke diye hue token amounts ko mathematically 90M total supply ke against normalize kiya hai, kyunki aap ke message mein kuch percentages token amounts ke saath match nahi kar rahe thay."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
