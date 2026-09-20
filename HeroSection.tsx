import React, { useState } from 'react';
import { dirhamCoinImg, usdtEmblemImg } from '../assetImports';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/roadmapData';
import { AppDownloadModal } from './AppDownloadModal';
import { 
  ArrowRight, Flame, Shield, Coins, Users, TrendingUp, Sparkles, 
  CheckCircle2, Send, Smartphone, Wifi, Battery, Zap, Radio
} from 'lucide-react';

interface HeroSectionProps {
  currentLang: Language;
  onExploreClick: () => void;
  onTokenomicsClick: () => void;
  onCalculatorClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onExploreClick,
  onTokenomicsClick,
  onCalculatorClick,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);

  return (
    <section id="overview" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-[#1b222d]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c1827] border border-sky-500/50 text-sky-300 text-xs font-semibold shadow-[0_0_15px_rgba(14,165,233,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>OFFICIAL ROADMAP & TOKENOMICS PORTAL</span>
            <span className="w-1 h-1 rounded-full bg-sky-600" />
            <span className="text-sky-300 font-mono-num font-bold">Phase 1 ($0.10)</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Text Content (Left Col - 6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  EMIRATI HERITAGE • DIGITAL INNOVATION
                </span>
                <span className="text-slate-600">/</span>
                <span className="text-xs tracking-wider text-slate-400 font-mono-num">
                  SYMBOL: DRM
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-display">
                DIRHAM COIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-sky-500">(DRM)</span>
              </h1>
              
              <p className="mt-2 text-xl sm:text-2xl font-semibold text-slate-200 font-display">
                PROJECT ROADMAP
              </p>

              <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                {t.tagline}. Dirham Coin (DRM) is designed around a strictly fixed maximum supply of{' '}
                <strong className="text-sky-300 font-mono-num font-bold">90,000,000 DRM</strong>, with the majority allocated toward network participation including mining, nodes, referrals, and ecosystem contributions.
              </p>
            </div>

            {/* Micro Highlights Pill Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0d1624] border border-sky-900/70 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                Zero Inflation (90M Cap)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0d1624] border border-sky-900/70 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                52.22% Community Stake
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0d1624] border border-sky-900/70 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                40% Revenue Buyback & Burn
              </span>
            </div>

            {/* Main Navigation Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                id="hero-explore-roadmap-btn"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-600 via-sky-500 to-sky-600 hover:from-sky-500 hover:to-sky-400 text-white font-bold text-xs sm:text-sm tracking-wide font-display border border-sky-400/80 shadow-lg hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>EXPLORE 4-PHASE ROADMAP</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-view-tokenomics-btn"
                onClick={onTokenomicsClick}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0e1826] hover:bg-[#142337] text-slate-200 border border-sky-700/60 font-semibold text-xs sm:text-sm transition-all hover:border-sky-500 hover:text-white"
              >
                <Coins className="w-4 h-4 text-sky-400" />
                <span>90M Tokenomics</span>
              </button>

              <button
                id="hero-calc-btn"
                onClick={onCalculatorClick}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#091522] hover:bg-[#0f2136] text-sky-300 border border-sky-600/50 font-semibold text-xs sm:text-sm transition-all hover:border-sky-400 hover:text-white"
              >
                <TrendingUp className="w-4 h-4 text-sky-400" />
                <span>Target ($2.00)</span>
              </button>
            </div>
          </div>

          {/* Dual Showcase: Coin Shifted to Side + Small Mobile Mockup + 2 Action Buttons (Right Col - 6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* Side-by-side: Coin on left & Small Mobile on right */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 w-full">
              {/* 1. 3D Falcon Coin with its tags (shifted slightly to the side) */}
              <div className="relative flex flex-col items-center">
                <div className="relative w-48 sm:w-52 h-48 sm:h-52 flex items-center justify-center group">
                  {/* Outer decorative rings */}
                  <div className="absolute inset-0 rounded-full border border-sky-500/30 scale-105 animate-pulse pointer-events-none" />
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-sky-500/50 scale-110 pointer-events-none" />
                  
                  {/* Glowing backplate in dark sky blue */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#0369a1] via-[#0284c7] to-[#38bdf8] opacity-30 blur-2xl group-hover:opacity-50 transition-opacity" />

                  {/* Main 3D Coin Asset */}
                  <div className="relative w-40 sm:w-44 h-40 sm:h-44 rounded-full overflow-hidden border-2 border-sky-500 shadow-[0_0_40px_rgba(2,132,199,0.55)] bg-gradient-to-b from-[#0a192c] via-[#050f1b] to-[#040810] p-1 animate-float">
                    <img
                      src={dirhamCoinImg}
                      alt="Dirham Coin DRM UAE Falcon Coin"
                      className="w-full h-full object-cover rounded-full filter drop-shadow-xl"
                    />
                  </div>

                  {/* Target Round 1 Tag (Top-right of coin) */}
                  <div className="absolute -top-3 -right-2 bg-[#081524] border border-sky-500/80 rounded-xl p-2 shadow-[0_0_15px_rgba(14,165,233,0.35)] flex items-center gap-1.5 text-left z-10">
                    <div className="w-5 h-5 rounded-full bg-sky-500/20 border border-sky-500/50 flex items-center justify-center text-sky-400">
                      <Flame className="w-3 h-3 text-sky-400" />
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Round 1</div>
                      <div className="text-[11px] font-bold text-sky-300 font-mono-num whitespace-nowrap">
                        $0.10 → $0.50
                      </div>
                    </div>
                  </div>

                  {/* Trading Unit Tag with Both Dirham Coin and USDT Emblems */}
                  <div className="absolute -bottom-2 -left-2 bg-[#081524]/95 backdrop-blur-md border border-sky-500/80 rounded-xl p-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center gap-2.5 z-10">
                    {/* Paired Crypto Emblems (Dirham + USDT) */}
                    <div className="flex items-center -space-x-2">
                      <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border-2 border-sky-400 shadow-md z-10 bg-[#040810]" title="Dirham Coin (DRM)">
                        <img
                          src={dirhamCoinImg}
                          alt="Dirham Coin (DRM)"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border-2 border-emerald-400 shadow-md bg-[#040810]" title="Tether (USDT)">
                        <img
                          src={usdtEmblemImg}
                          alt="Tether (USDT)"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="text-left font-mono-num">
                      <div className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Trading Unit</div>
                      <div className="text-[11px] font-bold whitespace-nowrap flex items-center gap-1">
                        <span className="text-sky-300">DRM</span>
                        <span className="text-slate-500">/</span>
                        <span className="text-emerald-400">USDT</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-label under Coin */}
                <div className="mt-4 text-center">
                  <span className="text-xs font-semibold tracking-wider text-sky-300/90 font-serif">
                    درهم إماراتي رقمي د.إ
                  </span>
                  <div className="text-[10px] text-slate-400 font-mono-num">
                    Fixed Cap: 90,000,000 DRM
                  </div>
                </div>
              </div>

              {/* 2. Small Smartphone Mockup ("Chota sa mobile") with Sideways 3D Angle (Side Rukh) */}
              <a
                href="https://t.me/DirhamCoinAppBot"
                target="_blank"
                rel="noopener noreferrer"
                title="Launch Dirham Coin App (@DirhamCoinAppBot)"
                className="relative [perspective:1000px] flex items-center justify-center my-2 sm:my-0 cursor-pointer group block"
              >
                {/* 3D ambient shadow & glow for side orientation */}
                <div className="absolute -inset-3 bg-gradient-to-r from-sky-500/25 to-emerald-500/15 rounded-[2.5rem] blur-xl -rotate-6 pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity" />

                {/* Smartphone Chassis tilted sideways towards coin */}
                <div className="relative w-44 sm:w-48 h-[360px] sm:h-[385px] rounded-[2.2rem] border-[3px] border-sky-400/85 shadow-[-16px_18px_40px_rgba(2,132,199,0.45),0_0_25px_rgba(14,165,233,0.35)] bg-[#040810] p-2.5 flex flex-col justify-between overflow-hidden group hover:border-sky-300 transition-all duration-500 transform [transform:rotateY(-14deg)_rotateX(4deg)_rotateZ(-4deg)] hover:[transform:rotateY(-2deg)_rotateX(0deg)_rotateZ(0deg)] hover:scale-[1.03]">
                  {/* Left Side 3D Physical Edge Highlight (Phone side thickness) */}
                  <div className="absolute left-0 top-10 bottom-10 w-[3px] bg-gradient-to-b from-sky-300 via-sky-500 to-sky-700 opacity-80 rounded-r pointer-events-none" />

                  {/* Gloss Reflection Overlay */}
                  <div className="absolute -top-24 -right-12 w-40 h-80 bg-white/10 rotate-12 pointer-events-none rounded-full blur-sm" />

                  {/* Phone Top Notch / Dynamic Island */}
                  <div className="relative z-10">
                    <div className="w-14 h-3 bg-black rounded-full mx-auto flex items-center justify-between px-2.5 shadow-inner border border-slate-800/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                      <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    </div>

                    {/* Phone Status Bar */}
                    <div className="flex items-center justify-between text-[9px] text-slate-400 px-1 pt-1 font-mono-num">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <Wifi className="w-2.5 h-2.5 text-slate-400" />
                        <Battery className="w-2.5 h-2.5 text-slate-300" />
                      </div>
                    </div>

                    {/* App Header Inside Phone */}
                    <div className="mt-2 flex items-center justify-between px-1">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full overflow-hidden border border-sky-400/80 bg-black">
                          <img src={dirhamCoinImg} alt="DRM" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[11px] font-black text-white font-display tracking-tight">
                          DRM APP
                        </span>
                      </div>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold border border-emerald-500/50 flex items-center gap-0.5">
                        <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                        Node Live
                      </span>
                    </div>
                  </div>

                  {/* Phone Screen Core Content */}
                  <div className="space-y-2 my-auto relative z-10">
                    {/* Balance Card */}
                    <div className="p-2 rounded-xl bg-gradient-to-br from-[#0a1829] to-[#06101c] border border-sky-600/50 text-left shadow-md">
                      <div className="text-[9px] text-slate-400 uppercase tracking-wider">Total Staked & Mined</div>
                      <div className="text-base font-black text-sky-300 font-mono-num tracking-tight mt-0.5">
                        48,500 <span className="text-[10px] text-sky-400 font-bold">DRM</span>
                      </div>
                      <div className="text-[9px] text-slate-400 flex items-center justify-between mt-1 pt-1 border-t border-sky-900/60 font-mono-num">
                        <span>≈ $48,500 USDT</span>
                        <span className="text-emerald-400 font-bold">Target $2.00</span>
                      </div>
                    </div>

                    {/* 3 Quick Action Buttons in Phone */}
                    <div className="grid grid-cols-3 gap-1 text-[9px] font-bold text-center">
                      <div className="p-1.5 rounded-lg bg-[#0a1624] border border-sky-800/60 text-sky-300 flex flex-col items-center">
                        <Zap className="w-3 h-3 text-sky-400 mb-0.5" />
                        <span>Mine</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-[#0a1624] border border-sky-800/60 text-slate-200 flex flex-col items-center">
                        <TrendingUp className="w-3 h-3 text-emerald-400 mb-0.5" />
                        <span>Stake</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-[#0a1624] border border-sky-800/60 text-slate-200 flex flex-col items-center">
                        <Shield className="w-3 h-3 text-sky-300 mb-0.5" />
                        <span>Vault</span>
                      </div>
                    </div>

                    {/* Active Cloud Mining Status Card */}
                    <div className="p-2 rounded-xl bg-[#06121f] border border-emerald-500/40 text-left">
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="text-emerald-300 font-bold flex items-center gap-1">
                          <Radio className="w-2.5 h-2.5 text-emerald-400 animate-pulse" />
                          Mobile Node Hashrate
                        </span>
                        <span className="text-white font-mono-num font-bold">+18.4 DRM/d</span>
                      </div>
                      <div className="w-full h-1 bg-slate-900 rounded-full mt-1.5 overflow-hidden">
                        <div className="w-3/4 h-full bg-gradient-to-r from-emerald-500 to-sky-400 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Phone Bottom Dock & Home Swipe Bar */}
                  <div className="relative z-10 pt-1">
                    <div className="flex items-center justify-around py-1 px-2 rounded-xl bg-[#07111c] border border-sky-950 text-slate-400">
                      <span className="text-[10px] text-sky-400 font-bold">● Home</span>
                      <span className="text-[10px] hover:text-white">Mining</span>
                      <span className="text-[10px] hover:text-white">Wallet</span>
                    </div>
                    {/* Home indicator bar */}
                    <div className="w-16 h-1 bg-slate-600 rounded-full mx-auto mt-2" />
                  </div>
                </div>
              </a>
            </div>

            {/* The 2 Requested Action Buttons with Distinct Web Page Colors */}
            <div className="mt-7 w-full max-w-md flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              {/* Button 1: Telegram Channel (Sky/Telegram Blue Palette linked to https://t.me/telegarmearningtipspk) */}
              <a
                href="https://t.me/telegarmearningtipspk"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-telegram-channel-btn"
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] hover:from-[#0369a1] hover:to-[#0284c7] text-white font-bold text-xs sm:text-sm tracking-wide border border-sky-300/60 shadow-[0_0_22px_rgba(14,165,233,0.5)] hover:shadow-[0_0_32px_rgba(14,165,233,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="w-4 h-4 text-white" />
                <span>Telegram Channel</span>
              </a>

              {/* Button 2: Dirham Coin App (Distinct Emerald/Teal Green Palette linked to https://t.me/DirhamCoinAppBot) */}
              <a
                href="https://t.me/DirhamCoinAppBot"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-dirham-app-btn"
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs sm:text-sm tracking-wide border border-emerald-400/70 shadow-[0_0_22px_rgba(16,185,129,0.45)] hover:shadow-[0_0_32px_rgba(16,185,129,0.65)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Smartphone className="w-4 h-4 text-white" />
                <span>Dirham Coin App</span>
              </a>
            </div>

            {/* Arabic inscription banner */}
            <div className="mt-4 text-center">
              <span className="text-xs font-semibold tracking-widest text-sky-300/90 font-serif">
                درهم إماراتي رقمي • نظام اقتصادي مجتمعي مستدام
              </span>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Official Node Mining App & Community Telegram Portal
              </p>
            </div>
          </div>
        </div>

        {/* 4 Essential Stats Bento Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card 1: Total Supply */}
          <div className="p-5 rounded-2xl bg-[#0a1420] border border-sky-900/60 hover:border-sky-500/70 shadow-sm hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Total Supply</span>
              <Shield className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-white font-mono-num">
              90,000,000
            </div>
            <p className="text-[11px] text-sky-400 mt-1 flex items-center gap-1">
              <span>●</span> 100% Mathematically Fixed
            </p>
          </div>

          {/* Card 2: Community Allocation */}
          <div className="p-5 rounded-2xl bg-[#0a1420] border border-sky-900/60 hover:border-sky-500/70 shadow-sm hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Community & Mining</span>
              <Users className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-sky-400 font-mono-num">
              52.22%
            </div>
            <p className="text-[11px] text-slate-400 mt-1 font-mono-num">
              47.00M DRM via Referrals & Nodes
            </p>
          </div>

          {/* Card 3: Target Listing Price */}
          <div className="p-5 rounded-2xl bg-[#0a1420] border border-sky-900/60 hover:border-sky-500/70 shadow-sm hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Target Listing</span>
              <TrendingUp className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-sky-300 font-mono-num">
              $2.00 USDT
            </div>
            <p className="text-[11px] text-slate-400 mt-1 font-mono-num">
              20x Planned Value Expansion
            </p>
          </div>

          {/* Card 4: Deflationary Buyback */}
          <div className="p-5 rounded-2xl bg-[#0a1420] border border-sky-900/60 hover:border-sky-500/70 shadow-sm hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Deflationary Burn</span>
              <Flame className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-sky-300 font-mono-num">
              40% Net Rev
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Open-Market Buybacks & Burn
            </p>
          </div>
        </div>
      </div>

      {/* Dirham Coin App Download & Features Modal */}
      <AppDownloadModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
      />
    </section>
  );
};

