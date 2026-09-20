import React from 'react';
import { dirhamCoinImg } from '../assetImports';
import { Language } from '../types';
import { ShieldCheck, Flame, Download, Globe, Share2 } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenWhitepaper: () => void;
  onOpenCalculator: () => void;
  onOpenShare: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onSelectLang,
  onOpenWhitepaper,
  onOpenCalculator,
  onOpenShare,
}) => {
  return (
    <header id="app-header" className="sticky top-0 z-50 bg-[#040812]/80 backdrop-blur-lg border-b border-sky-950/70">
      {/* Top micro status bar */}
      <div className="bg-[#060d19]/80 backdrop-blur-sm border-b border-sky-950/50 text-xs text-slate-400 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-mono-num">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              PHASE 1 ACTIVE: $0.10 USDT
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-300">
              Target Listing: <span className="text-sky-400 font-bold">$2.00 USDT (20x)</span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300">
              Fixed Supply: <span className="text-sky-400 font-bold">90,000,000 DRM</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button
              type="button"
              onClick={onOpenShare}
              className="inline-flex items-center gap-1 text-[11px] text-sky-300 hover:text-white bg-sky-950/80 hover:bg-sky-900/80 px-2 py-0.5 rounded border border-sky-600/60 transition-colors cursor-pointer"
              title="Copy & Share Webpage Link"
            >
              <Share2 className="w-2.5 h-2.5 text-sky-400" />
              <span>Share Link</span>
            </button>
            <span className="hidden lg:inline-flex items-center gap-1 text-sky-300 text-[11px] bg-sky-950/60 px-2 py-0.5 rounded border border-sky-700/60">
              <Flame className="w-3 h-3 text-sky-400" />
              40% Ecosystem Revenue Buyback & Burn
            </span>
            {/* Language switcher */}
            <div className="flex items-center gap-1 bg-[#101926] p-0.5 rounded-md border border-sky-800/60">
              <Globe className="w-3 h-3 text-slate-400 ml-1.5" />
              <button
                id="lang-en-btn"
                onClick={() => onSelectLang('en')}
                className={`px-2 py-0.5 text-[11px] rounded transition-all font-medium ${
                  currentLang === 'en' ? 'bg-sky-500 text-white font-bold shadow-sm shadow-sky-500/40' : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                id="lang-ur-btn"
                onClick={() => onSelectLang('ur')}
                className={`px-2 py-0.5 text-[11px] rounded transition-all font-medium ${
                  currentLang === 'ur' ? 'bg-sky-500 text-white font-bold shadow-sm shadow-sky-500/40' : 'text-slate-400 hover:text-white'
                }`}
                title="Roman Urdu"
              >
                UR (Roman)
              </button>
              <button
                id="lang-ar-btn"
                onClick={() => onSelectLang('ar')}
                className={`px-2 py-0.5 text-[11px] rounded transition-all font-medium ${
                  currentLang === 'ar' ? 'bg-sky-500 text-white font-bold shadow-sm shadow-sky-500/40' : 'text-slate-400 hover:text-white'
                }`}
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#overview" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-sky-500 shadow-[0_0_18px_rgba(14,165,233,0.45)] bg-gradient-to-br from-[#0c2338] to-[#040f1a] flex items-center justify-center p-0.5">
            <img
              src={dirhamCoinImg}
              alt="Dirham Coin DRM"
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-bold tracking-wider text-slate-100 group-hover:text-sky-400 transition-colors">
                DIRHAM COIN
              </span>
              <span className="bg-sky-950/80 text-sky-300 border border-sky-500/70 text-[10px] font-bold px-1.5 py-0.5 rounded font-mono-num shadow-[0_0_8px_rgba(14,165,233,0.3)]">
                DRM
              </span>
            </div>
            <p className="text-[10px] text-slate-400 tracking-wide">
              Fixed Supply • Community Driven
            </p>
          </div>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#overview" className="hover:text-sky-400 transition-colors">Overview</a>
          <a href="#roadmap" className="hover:text-sky-400 transition-colors">Roadmap</a>
          <a href="#tokenomics" className="hover:text-sky-400 transition-colors">Tokenomics (90M)</a>
          <a href="#deflationary" className="hover:text-sky-400 transition-colors">Deflationary Engine</a>
          <a href="#calculator" className="hover:text-sky-400 transition-colors">ROI Simulator</a>
          <a href="#vision" className="hover:text-sky-400 transition-colors">Vision</a>
        </nav>

        {/* Action controls */}
        <div className="flex items-center gap-2.5">
          <button
            id="open-share-btn"
            onClick={onOpenShare}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-[#0c1c2e] hover:bg-[#11273e] text-sky-300 border border-sky-500/70 hover:border-sky-400 shadow-[0_0_12px_rgba(14,165,233,0.25)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            title="Share Webpage Link"
          >
            <Share2 className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline">Share Link</span>
          </button>

          <button
            id="open-calculator-nav-btn"
            onClick={onOpenCalculator}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800/90 hover:bg-slate-700/80 text-slate-200 border border-sky-700/50 hover:border-sky-500 transition-all"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>Phase Simulator</span>
          </button>

          <button
            id="open-whitepaper-btn"
            onClick={onOpenWhitepaper}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-sky-600 via-sky-500 to-sky-600 hover:from-sky-500 hover:to-sky-400 text-white font-display tracking-wider border border-sky-400/80 shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>SPECS & SUMMARY</span>
          </button>
        </div>
      </div>
    </header>
  );
};
