import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/roadmapData';
import { dirhamCoinImg } from '../assetImports';
import { Flame, ArrowRight, TrendingDown, RefreshCw, Sparkles, DollarSign, Percent, ShieldCheck } from 'lucide-react';

interface DeflationarySectionProps {
  currentLang: Language;
}

export const DeflationarySection: React.FC<DeflationarySectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  // Interactive Burn Simulator State
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(500000); // $500k monthly
  const [drmPrice, setDrmPrice] = useState<number>(0.50); // $0.50

  // Calculations
  const buybackBudgetMonthly = monthlyRevenue * 0.40;
  const buybackBudgetAnnual = buybackBudgetMonthly * 12;

  const monthlyTokensBurned = drmPrice > 0 ? buybackBudgetMonthly / drmPrice : 0;
  const annualTokensBurned = monthlyTokensBurned * 12;
  const threeYearBurned = annualTokensBurned * 3;

  const totalSupply = 90_000_000;
  const annualBurnPercent = (annualTokensBurned / totalSupply) * 100;
  const threeYearBurnPercent = (threeYearBurned / totalSupply) * 100;

  return (
    <section id="deflationary" className="py-16 bg-[#040914]/75 backdrop-blur-sm border-b border-sky-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c1928] border border-sky-500/50 text-xs font-semibold text-sky-300 mb-3 shadow-[0_0_12px_rgba(14,165,233,0.2)]">
            <Flame className="w-3.5 h-3.5 text-sky-400" />
            <span>DEFLATIONARY SUPPLY POLICY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            40% NET PROTOCOL ECOSYSTEM REVENUE
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Dirham Coin incorporates an aggressive deflationary mechanism designed to perpetually reduce circulating float through open-market buybacks funded by real protocol utility.
          </p>
        </div>

        {/* The 3-Phase Mechanism Flowchart (verbatim from user prompt) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#09121d] border border-sky-950 mb-12 shadow-lg">
          <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-sky-400 animate-spin" style={{ animationDuration: '8s' }} />
              Mechanics: Open-Market Buybacks → DRM Removal/Burn → Reduced Circulating Supply
            </span>
            <span className="text-sky-300 bg-sky-950/80 px-2.5 py-1 rounded border border-sky-600/50 font-bold font-mono-num">
              40% Revenue Share
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-[#0c1624] border border-sky-950 flex flex-col justify-between relative group hover:border-sky-500/60 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-500/50 flex items-center justify-center text-sky-300 mb-4 font-bold font-mono-num">
                  01
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  Open-Market DRM Buybacks
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  40% of all net protocol revenue generated from node validation, ecosystem dApps, and merchant transactions is automatically allocated to execute buy orders on open market exchanges.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-sky-950 text-xs text-sky-400 font-mono-num font-semibold">
                Direct Market Purchasing Power
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-[#0c1624] border border-sky-950 flex flex-col justify-between relative group hover:border-sky-500/60 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-500/50 flex items-center justify-center text-red-400 mb-4 font-bold font-mono-num">
                  02
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  DRM Removal / Permanent Burn
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Repurchased DRM tokens are transferred irrevocably to an inaccessible null burn address on-chain, eliminating them from total supply with cryptographic finality.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-sky-950 text-xs text-red-400 font-mono-num font-semibold">
                Permanent On-Chain Destruction
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-[#0c1624] border border-sky-950 flex flex-col justify-between relative group hover:border-sky-500/60 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-500/50 flex items-center justify-center text-sky-300 mb-4 font-bold font-mono-num">
                  03
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  Reduced Circulating Supply
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {t.burnTagline} Creates long-term downward pressure on circulating DRM float while ecosystem utility and user adoption continue to expand.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-sky-950 text-xs text-sky-400 font-mono-num font-semibold">
                Long-Term Value Alignment
              </div>
            </div>
          </div>

          {/* Urdu / Bilingual Explanatory Quote */}
          <div className="mt-6 p-4 rounded-xl bg-[#060c14] border border-sky-950 text-xs text-slate-400 italic flex items-center justify-between gap-4">
            <span>"Is mechanism ka objective circulating DRM supply par long-term downward pressure create karna aur ecosystem growth ko token economics ke saath align karna hai."</span>
            <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 border border-sky-600/50">
              <img src={dirhamCoinImg} alt="DRM" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Interactive Buyback & Burn Simulator */}
        <div className="bg-gradient-to-b from-[#0b1726] to-[#070d16] border border-sky-950 p-6 sm:p-8 rounded-3xl shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-sky-950 gap-2 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                <Flame className="w-4 h-4" />
                INTERACTIVE SIMULATOR
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                Simulate Deflationary Supply Reduction
              </h3>
            </div>
            <span className="text-xs text-sky-300 bg-[#091522] px-3 py-1.5 rounded-lg border border-sky-800/80 font-mono-num font-semibold">
              Fixed Supply: 90M DRM
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders (Left Col) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slider 1: Monthly Protocol Revenue */}
              <div>
                <div className="flex items-center justify-between text-sm font-semibold text-slate-200 mb-2">
                  <span className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    Estimated Monthly Protocol Revenue
                  </span>
                  <span className="text-emerald-400 font-mono-num font-bold text-base">
                    ${monthlyRevenue.toLocaleString()} USDT
                  </span>
                </div>
                <input
                  type="range"
                  min={50000}
                  max={2500000}
                  step={25000}
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-[#060c14] rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono-num mt-1">
                  <span>$50,000</span>
                  <span>$1,000,000</span>
                  <span>$2,500,000+</span>
                </div>
              </div>

              {/* Slider 2: Average DRM Price */}
              <div>
                <div className="flex items-center justify-between text-sm font-semibold text-slate-200 mb-2">
                  <span className="flex items-center gap-2">
                    <Percent className="w-4 h-4 text-sky-400" />
                    Average DRM Token Price
                  </span>
                  <span className="text-sky-300 font-mono-num font-bold text-base">
                    ${drmPrice.toFixed(2)} USDT
                  </span>
                </div>
                <input
                  type="range"
                  min={0.10}
                  max={2.00}
                  step={0.05}
                  value={drmPrice}
                  onChange={(e) => setDrmPrice(Number(e.target.value))}
                  className="w-full h-2 bg-[#060c14] rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono-num mt-1">
                  <span>Phase 1: $0.10</span>
                  <span>Phase 2: $0.50</span>
                  <span>Phase 4: $1.25</span>
                  <span>Listing: $2.00</span>
                </div>
              </div>

              {/* Preset Phase Price Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs text-slate-400">Quick Select Price:</span>
                {[0.10, 0.50, 0.95, 1.25, 2.00].map((p) => (
                  <button
                    key={p}
                    onClick={() => setDrmPrice(p)}
                    className={`px-2.5 py-1 text-xs rounded font-mono-num transition-all ${
                      drmPrice === p
                        ? 'bg-sky-500 text-white font-bold shadow-[0_0_8px_rgba(14,165,233,0.4)]'
                        : 'bg-[#091522] text-slate-300 hover:bg-[#0e2136] border border-sky-950'
                    }`}
                  >
                    ${p.toFixed(2)}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Grid (Right Col) */}
            <div className="lg:col-span-5 bg-[#060c14] border border-sky-950 p-5 rounded-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-sky-950">
                <span className="text-xs text-slate-400 font-medium">Monthly 40% Buyback Fund:</span>
                <span className="text-base font-bold text-sky-400 font-mono-num">
                  ${buybackBudgetMonthly.toLocaleString()} USDT
                </span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-sky-950">
                <span className="text-xs text-slate-400 font-medium">Monthly Tokens Burned:</span>
                <span className="text-base font-bold text-white font-mono-num">
                  {Math.round(monthlyTokensBurned).toLocaleString()} DRM
                </span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-sky-950">
                <span className="text-xs text-slate-400 font-medium">Annual Tokens Burned:</span>
                <span className="text-base font-bold text-sky-300 font-mono-num">
                  {Math.round(annualTokensBurned).toLocaleString()} DRM
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-sky-950/40 border border-sky-700/50">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-sky-300 flex items-center gap-1">
                    <TrendingDown className="w-3.5 h-3.5 text-sky-400" />
                    Annual Supply Deflation:
                  </span>
                  <span className="text-sm font-black text-sky-400 font-mono-num">
                    -{annualBurnPercent.toFixed(2)}%
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Estimated 3-Year Cumulative Float Reduction: <strong className="text-white font-mono-num">-{Math.min(threeYearBurnPercent, 100).toFixed(2)}%</strong> of initial 90M supply.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
