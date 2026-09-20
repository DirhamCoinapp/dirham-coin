import React, { useState } from 'react';
import { ROADMAP_PHASES } from '../data/roadmapData';
import { dirhamCoinImg } from '../assetImports';
import { Calculator, DollarSign, Coins, TrendingUp, Sparkles, Check, AlertCircle } from 'lucide-react';

export const InvestmentSimulator: React.FC = () => {
  const [inputMode, setInputMode] = useState<'usdt' | 'tokens'>('usdt');
  const [usdtAmount, setUsdtAmount] = useState<number>(500); // 500 USDT default
  const [tokensAmount, setTokensAmount] = useState<number>(5000); // 5000 tokens default
  const [selectedEntryPhaseId, setSelectedEntryPhaseId] = useState<string>('phase-1');

  const entryPhase = ROADMAP_PHASES.find(p => p.id === selectedEntryPhaseId) || ROADMAP_PHASES[0];
  const entryPrice = entryPhase.priceNumericStart;

  // Derive tokens and cost
  let finalTokens = 0;
  let finalCost = 0;

  if (inputMode === 'usdt') {
    finalCost = usdtAmount;
    finalTokens = entryPrice > 0 ? usdtAmount / entryPrice : 0;
  } else {
    finalTokens = tokensAmount;
    finalCost = tokensAmount * entryPrice;
  }

  // Listing target price
  const listingPrice = 2.00;
  const listingValue = finalTokens * listingPrice;
  const netGain = listingValue - finalCost;
  const roiMultiplier = finalCost > 0 ? listingValue / finalCost : 0;
  const roiPercentage = finalCost > 0 ? ((listingValue - finalCost) / finalCost) * 100 : 0;

  return (
    <section id="calculator" className="py-16 bg-[#050b16]/75 backdrop-blur-sm border-b border-sky-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c1928] border border-sky-500/50 text-xs font-semibold text-sky-300 mb-3 shadow-[0_0_12px_rgba(14,165,233,0.2)]">
            <Calculator className="w-3.5 h-3.5 text-sky-400" />
            <span>INTERACTIVE PHASE SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            PHASE GROWTH & LISTING VALUE ESTIMATOR
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Calculate estimated DRM token acquisition and projected valuation as the ecosystem executes rounds toward the $2.00 USDT Target Listing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box (Left) */}
          <div className="lg:col-span-6 bg-[#09121d] border border-sky-950/90 p-6 sm:p-8 rounded-3xl space-y-6 shadow-xl">
            {/* Entry Phase Selection */}
            <div>
              <label className="text-xs uppercase font-bold tracking-wider text-slate-300 block mb-2">
                1. Select Entry Phase Round:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {ROADMAP_PHASES.slice(0, 4).map((phase) => {
                  const isSelected = phase.id === selectedEntryPhaseId;

                  return (
                    <button
                      key={phase.id}
                      onClick={() => setSelectedEntryPhaseId(phase.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-[#0e1e2f] border-2 border-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.3)]'
                          : 'bg-[#0b1522] border-sky-950 hover:border-sky-800'
                      }`}
                    >
                      <div className="text-[10px] font-bold font-mono-num" style={{ color: phase.color }}>
                        {phase.code}
                      </div>
                      <div className="text-xs font-black text-white font-mono-num mt-0.5">
                        ${phase.priceNumericStart.toFixed(2)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input Mode Toggle */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs uppercase font-bold tracking-wider text-slate-300">
                  2. Enter Participation Amount:
                </label>
                <div className="flex items-center gap-1 bg-[#0b1624] p-0.5 rounded-lg border border-sky-900/60 text-xs">
                  <button
                    onClick={() => setInputMode('usdt')}
                    className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                      inputMode === 'usdt' ? 'bg-sky-500 text-white font-bold shadow-[0_0_8px_rgba(14,165,233,0.4)]' : 'text-slate-400'
                    }`}
                  >
                    USDT
                  </button>
                  <button
                    onClick={() => setInputMode('tokens')}
                    className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                      inputMode === 'tokens' ? 'bg-sky-500 text-white font-bold shadow-[0_0_8px_rgba(14,165,233,0.4)]' : 'text-slate-400'
                    }`}
                  >
                    DRM Tokens
                  </button>
                </div>
              </div>

              {inputMode === 'usdt' ? (
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <DollarSign className="w-5 h-5 text-sky-400" />
                    </div>
                    <input
                      type="number"
                      min={10}
                      step={50}
                      value={usdtAmount}
                      onChange={(e) => setUsdtAmount(Math.max(0, Number(e.target.value)))}
                      className="w-full pl-10 pr-16 py-3.5 rounded-xl bg-[#060c14] border border-sky-900/80 text-white font-mono-num text-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                      placeholder="500"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-xs text-sky-400 font-mono-num font-bold">
                      USDT
                    </div>
                  </div>
                  {/* Preset quick buttons */}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[11px] text-slate-500">Quick:</span>
                    {[100, 250, 500, 1000, 2500].map(val => (
                      <button
                        key={val}
                        onClick={() => setUsdtAmount(val)}
                        className="px-2 py-0.5 text-xs bg-[#0c1827] border border-sky-950 hover:border-sky-600 rounded text-sky-300 font-mono-num"
                      >
                        ${val}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Coins className="w-5 h-5 text-sky-400" />
                    </div>
                    <input
                      type="number"
                      min={100}
                      step={500}
                      value={tokensAmount}
                      onChange={(e) => setTokensAmount(Math.max(0, Number(e.target.value)))}
                      className="w-full pl-10 pr-16 py-3.5 rounded-xl bg-[#060c14] border border-sky-900/80 text-white font-mono-num text-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                      placeholder="5000"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-xs text-sky-400 font-mono-num font-bold">
                      DRM
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Selected Phase Summary strip */}
            <div className="p-3.5 rounded-xl bg-[#081320] border border-sky-900/60 flex items-center justify-between text-xs">
              <span className="text-slate-400">Active Entry Price:</span>
              <span className="font-mono-num font-bold text-sky-300 text-sm">
                1 DRM = ${entryPrice.toFixed(2)} USDT
              </span>
            </div>
          </div>

          {/* Projection Cards (Right) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Big Listing Target Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#0b1d30] via-[#071524] to-[#040e18] border-2 border-sky-500 shadow-[0_0_30px_rgba(14,165,233,0.25)] relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-sky-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  TARGET LISTING PROJECTION ($2.00 USDT)
                </span>
                <span className="text-xs font-mono-num text-sky-300 font-semibold bg-sky-950/80 px-2 py-0.5 rounded border border-sky-700/50">
                  {entryPhase.code} Entry
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 my-4">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Acquired DRM Tokens</div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono-num mt-0.5 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-sky-500/80 shrink-0">
                      <img src={dirhamCoinImg} alt="DRM" className="w-full h-full object-cover" />
                    </div>
                    <span>{Math.round(finalTokens).toLocaleString()}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">At ${entryPrice.toFixed(2)} / DRM</div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 font-medium">Target Value at $2.00</div>
                  <div className="text-2xl sm:text-3xl font-black text-sky-300 font-mono-num mt-0.5">
                    ${Math.round(listingValue).toLocaleString()}
                  </div>
                  <div className="text-[10px] text-sky-400 font-mono-num font-semibold">
                    +{roiPercentage.toFixed(0)}% ({roiMultiplier.toFixed(1)}x)
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-sky-900/60 flex items-center justify-between text-xs text-slate-300">
                <span>Initial Cost: <strong className="font-mono-num text-white">${finalCost.toLocaleString()} USDT</strong></span>
                <span>Projected Net Gain: <strong className="font-mono-num text-sky-300 font-bold">+${Math.round(netGain).toLocaleString()} USDT</strong></span>
              </div>
            </div>

            {/* Stage-by-Stage Value Progression Row */}
            <div className="p-5 rounded-2xl bg-[#09121d] border border-sky-950">
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-3">
                Value at Each Target Milestone:
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono-num">
                <div className="p-2.5 rounded-xl bg-[#060c14] border border-sky-950">
                  <div className="text-[10px] text-emerald-400">Phase 1 ($0.50)</div>
                  <div className="text-sm font-bold text-slate-200 mt-0.5">
                    ${Math.round(finalTokens * 0.50).toLocaleString()}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#060c14] border border-sky-950">
                  <div className="text-[10px] text-sky-400">Phase 2 ($0.95)</div>
                  <div className="text-sm font-bold text-slate-200 mt-0.5">
                    ${Math.round(finalTokens * 0.95).toLocaleString()}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#060c14] border border-sky-950">
                  <div className="text-[10px] text-purple-400">Phase 3 ($1.25)</div>
                  <div className="text-sm font-bold text-slate-200 mt-0.5">
                    ${Math.round(finalTokens * 1.25).toLocaleString()}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#060c14] border border-sky-950">
                  <div className="text-[10px] text-orange-400">Phase 4 ($1.75)</div>
                  <div className="text-sm font-bold text-slate-200 mt-0.5">
                    ${Math.round(finalTokens * 1.75).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer pill */}
            <div className="p-3 rounded-xl bg-[#060c14] border border-sky-950 flex items-center gap-2.5 text-xs text-slate-400">
              <AlertCircle className="w-4 h-4 text-sky-400 shrink-0" />
              <span>
                Roadmap calculations are model simulations based on the official project price targets.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
