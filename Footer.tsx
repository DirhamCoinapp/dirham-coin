import React from 'react';
import { dirhamCoinImg, usdtEmblemImg } from '../assetImports';
import { Shield, Sparkles, AlertTriangle, ArrowUp, Share2 } from 'lucide-react';

interface FooterProps {
  onOpenShare?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenShare }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040711]/85 backdrop-blur-md border-t border-sky-950/80 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-sky-950">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-sky-500/80 p-0.5 bg-[#091524] shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                <img src={dirhamCoinImg} alt="Dirham Coin DRM" className="w-full h-full object-cover rounded-full" />
              </div>
              <div>
                <span className="font-display font-bold text-white text-base tracking-wider">
                  DIRHAM COIN (DRM)
                </span>
                <div className="text-[10px] text-sky-300 font-mono-num font-medium">
                  Total Fixed Supply: 90,000,000 DRM
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Building a Sustainable, Community-Driven Digital Asset Ecosystem. Over 52% allocated to community mining, nodes, and referrals with automated 40% net revenue buyback-and-burn.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <span className="text-[11px] px-2.5 py-1 rounded bg-[#09121d] border border-sky-950 text-slate-300 font-mono-num">
                Symbol: DRM
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded bg-[#09121d] border border-sky-950 text-slate-300 font-mono-num inline-flex items-center gap-1.5">
                <div className="flex items-center -space-x-1.5">
                  <img src={dirhamCoinImg} alt="DRM" className="w-4 h-4 rounded-full object-cover border border-sky-400" />
                  <img src={usdtEmblemImg} alt="USDT" className="w-4 h-4 rounded-full object-cover border border-emerald-400" />
                </div>
                <span>Pair: <strong className="text-sky-300">DRM</strong> / <strong className="text-emerald-400">USDT</strong></span>
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded bg-[#091524] border border-sky-600/60 text-sky-300 font-mono-num font-bold shadow-[0_0_10px_rgba(14,165,233,0.2)]">
                Target: $2.00 USDT
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-200 font-display">
              Roadmap Rounds
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#phase-1" className="hover:text-sky-300 transition-colors">Phase 1 ($0.10 → $0.50 USDT)</a></li>
              <li><a href="#phase-2" className="hover:text-sky-300 transition-colors">Phase 2 ($0.50 → $0.95 USDT)</a></li>
              <li><a href="#phase-3" className="hover:text-sky-300 transition-colors">Phase 3 ($0.95 → $1.25 USDT)</a></li>
              <li><a href="#phase-4" className="hover:text-sky-300 transition-colors">Phase 4 ($1.25 → $1.75 USDT)</a></li>
              <li><a href="#phase-listing" className="hover:text-sky-300 transition-colors">Listing Phase ($2.00 USDT)</a></li>
            </ul>
          </div>

          {/* Architecture links */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-200 font-display">
              Token Architecture & Portals
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#tokenomics" className="hover:text-sky-300 transition-colors">90M Tokenomics Distribution</a></li>
              <li><a href="#tokenomics" className="hover:text-sky-300 transition-colors">52.22% Majority Community Allocation</a></li>
              <li><a href="#deflationary" className="hover:text-sky-300 transition-colors">40% Net Revenue Buyback & Burn</a></li>
              <li><a href="#calculator" className="hover:text-sky-300 transition-colors">Phase & Listing ROI Simulator</a></li>
              <li><a href="https://t.me/telegarmearningtipspk" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors font-semibold flex items-center gap-1">✈ Telegram Channel (@telegarmearningtipspk)</a></li>
              <li><a href="https://t.me/DirhamCoinAppBot" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors font-semibold flex items-center gap-1">📱 Dirham Coin App (@DirhamCoinAppBot)</a></li>
              {onOpenShare && (
                <li>
                  <button
                    type="button"
                    onClick={onOpenShare}
                    className="text-sky-300 hover:text-white transition-colors font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Share Webpage Link (شیئر لنک)</span>
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Regulatory & Market Disclaimer Notice from User Prompt */}
        <div className="py-6 border-b border-sky-950">
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#09121d] border border-sky-900/60">
            <AlertTriangle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong className="text-sky-300">Important Disclaimer:</strong> Listing price and future market price may vary depending on market conditions, liquidity, exchange requirements, and actual market demand. Projections, roadmaps, and phase calculations are informational and do not constitute financial advice.
            </p>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Dirham Coin (DRM) Project Ecosystem. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-serif text-sky-400 font-semibold">درهم إماراتي رقمي د.إ</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3 text-sky-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
