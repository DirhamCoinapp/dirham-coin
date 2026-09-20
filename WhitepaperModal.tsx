import React, { useState } from 'react';
import { ROADMAP_PHASES, TOKENOMICS_DATA, TOTAL_SUPPLY_STR } from '../data/roadmapData';
import { dirhamCoinImg } from '../assetImports';
import { X, Copy, Check, Printer, Shield, Flame, Users } from 'lucide-react';

interface WhitepaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhitepaperModal: React.FC<WhitepaperModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopySpecs = () => {
    const text = `DIRHAM COIN (DRM) — OFFICIAL ROADMAP & TOKENOMICS SUMMARY
Total Fixed Supply: 90,000,000 DRM

TOKEN ALLOCATION (90.00M Total):
- Distributed Referral Mining: 17.00M (18.89%)
- VC (Venture Capital): 11.52M (12.80%)
- Dirham Coin Foundation: 13.73M (15.26%)
- TGE (Token Generation Event): 15.00M (16.67%)
- Node Infrastructure: 12.00M (13.33%)
- Staking Mining: 9.00M (10.00%)
- Contribution Mining: 9.00M (10.00%)
- Partnerships / Grants / Growth: 2.75M (3.06%)
TOTAL: 90.00M (100.00%)

DEFLATIONARY POLICY:
40% of Net Protocol Ecosystem Revenue allocated toward Open-Market DRM Buybacks → Permanent Burn → Reduced Circulating Supply.

ROADMAP AT A GLANCE:
- Phase 1: $0.10 → $0.50 USDT (Foundation & Community)
- Phase 2: $0.50 → $0.95 USDT (Network Expansion)
- Phase 3: $0.95 → $1.25 USDT (Ecosystem Growth)
- Phase 4: $1.25 → $1.75 USDT (Pre-Listing & Market Readiness)
- Listing Phase: $2.00 USDT (Open-Market Trading & Ecosystem Expansion)

DRM Vision: Fixed Supply. Community Participation. Real Network Growth. Sustainable Token Economics.`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#080d14] border-2 border-sky-500/70 rounded-3xl shadow-[0_0_50px_rgba(14,165,233,0.25)] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-sky-950 flex items-center justify-between bg-[#0b1624]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0c1e30] border border-sky-500/60 flex items-center justify-center p-1 shadow-[0_0_12px_rgba(14,165,233,0.3)]">
              <img src={dirhamCoinImg} alt="Dirham Coin" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                DIRHAM COIN (DRM) — OFFICIAL SPEC SHEET
              </h3>
              <p className="text-xs text-sky-300 font-mono-num">
                90M Fixed Supply • Deflationary 40% Buyback • Roadmap Specification
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySpecs}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1d2e] hover:bg-sky-900/60 text-xs font-semibold text-sky-200 border border-sky-700/60 transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-sky-400" /> : <Copy className="w-3.5 h-3.5 text-sky-400" />}
              <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1d2e] hover:bg-sky-900/60 text-xs font-semibold text-sky-200 border border-sky-700/60 transition-all"
            >
              <Printer className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm leading-relaxed">
          {/* Executive Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-300 mb-2 font-mono-num">
              1. Executive Overview
            </h4>
            <p className="text-slate-300">
              Dirham Coin (DRM) is designed around a strictly fixed maximum supply of <strong className="text-sky-300 font-mono-num font-bold">90,000,000 DRM</strong>, with the majority allocated toward network participation, including mining, nodes, referrals, and ecosystem contributions.
            </p>
          </div>

          {/* Tokenomics Table */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-300 mb-3 font-mono-num">
              2. Official Tokenomics Allocation (90,000,000 DRM Total)
            </h4>
            <div className="rounded-xl border border-sky-950 overflow-hidden font-mono-num text-xs">
              <table className="w-full text-left">
                <thead className="bg-[#0c1724] text-slate-400 border-b border-sky-950">
                  <tr>
                    <th className="p-3">Allocation Pool</th>
                    <th className="p-3 text-right">DRM Amount</th>
                    <th className="p-3 text-right">Share (%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sky-950 bg-[#060c14]">
                  {TOKENOMICS_DATA.map((item) => (
                    <tr key={item.id} className="hover:bg-sky-950/30">
                      <td className="p-3 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="font-sans font-medium text-slate-200">{item.category}</span>
                      </td>
                      <td className="p-3 text-right text-slate-200">{item.amountDRM.toFixed(2)}M</td>
                      <td className="p-3 text-right font-bold text-sky-300">{item.percentage}%</td>
                    </tr>
                  ))}
                  <tr className="bg-[#0a1626] font-bold text-white border-t-2 border-sky-600/50">
                    <td className="p-3 font-sans text-sky-300">TOTAL FIXED CAPPED SUPPLY</td>
                    <td className="p-3 text-right text-sky-300">90.00M</td>
                    <td className="p-3 text-right text-sky-400 font-black">100.00%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-400 italic mt-2">
              Note: Token amounts are mathematically verified and normalized against the 90M total supply.
            </p>
          </div>

          {/* Roadmap Progression */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-300 mb-3 font-mono-num">
              3. Roadmap Milestones & Price Targets
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ROADMAP_PHASES.map((p) => (
                <div key={p.id} className="p-3.5 rounded-xl bg-[#0a131f] border border-sky-950">
                  <div className="flex items-center justify-between text-xs font-mono-num mb-1">
                    <span className="font-bold" style={{ color: p.color }}>{p.code}</span>
                    <span className="text-sky-300 font-bold">{p.targetPrice}</span>
                  </div>
                  <div className="font-bold text-white text-sm font-display">{p.title}</div>
                  <div className="text-xs text-slate-400 mt-1">{p.objectives.length} Key Objectives planned</div>
                </div>
              ))}
            </div>
          </div>

          {/* Deflationary Policy */}
          <div className="p-4 rounded-xl bg-[#091522] border border-sky-700/50">
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-1 flex items-center gap-1.5 font-mono-num">
              <Flame className="w-3.5 h-3.5 text-sky-400" />
              4. 40% Net Protocol Ecosystem Revenue Deflationary Policy
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Open-Market DRM Buybacks → DRM Removal/Burn → Reduced Circulating Supply. This mechanism creates continuous downward pressure on circulating supply while aligning growth with token value.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="p-3.5 rounded-xl bg-[#060c14] border border-sky-950 text-xs text-slate-400">
            <strong className="text-slate-300">Disclaimer:</strong> Listing price and future market price may vary depending on market conditions, liquidity, exchange requirements, and actual market demand.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-sky-950 bg-[#09121d] flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono-num flex items-center gap-2">
            <div className="w-4 h-4 rounded-full overflow-hidden shrink-0">
              <img src={dirhamCoinImg} alt="DRM" className="w-full h-full object-cover" />
            </div>
            Dirham Coin (DRM) Foundation • 2026
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#0e1d2e] hover:bg-sky-900/70 border border-sky-700/50 text-xs font-semibold text-sky-200 transition-all"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
