import React, { useState } from 'react';
import { dirhamCoinImg } from '../assetImports';
import { X, Smartphone, Download, Check, Sparkles, Shield, Cpu, Zap, ExternalLink, QrCode, Copy } from 'lucide-react';

interface AppDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppDownloadModal: React.FC<AppDownloadModalProps> = ({ isOpen, onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'android' | 'ios' | 'web'>('android');

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText('https://dirhamcoin.io/app/download');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#080e18] border-2 border-emerald-500/60 rounded-3xl shadow-[0_0_50px_rgba(16,185,129,0.25)] flex flex-col overflow-hidden max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-emerald-950 flex items-center justify-between bg-[#0b1824]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#092219] border border-emerald-500/60 flex items-center justify-center p-1 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <img src={dirhamCoinImg} alt="Dirham Coin DRM" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white font-display">
                  DIRHAM COIN (DRM) APP
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                  v2.4 OFFICIAL
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Mobile Node Mining • Multi-Chain Wallet • 90M Supply Staking
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500 flex items-center justify-center text-slate-300 hover:text-white transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm">
          {/* Official Telegram App Bot Direct Launcher Banner */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#0a2034] via-[#091b2c] to-[#0a251e] border border-emerald-500/60 flex items-center justify-between gap-3 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🤖</span>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Official Telegram Mining Bot</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <div className="text-[11px] text-emerald-300 font-mono">@DirhamCoinAppBot</div>
              </div>
            </div>
            <a
              href="https://t.me/DirhamCoinAppBot"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all transform hover:scale-[1.03]"
            >
              <span>Launch App Bot</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Platform Switcher */}
          <div className="grid grid-cols-3 gap-2 p-1 rounded-2xl bg-[#050b12] border border-sky-950">
            <button
              onClick={() => setActiveTab('android')}
              className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'android'
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Android (APK)</span>
            </button>
            <button
              onClick={() => setActiveTab('ios')}
              className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'ios'
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>iOS (Apple)</span>
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'web'
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Web Node PWA</span>
            </button>
          </div>

          {/* Active Platform Card */}
          {activeTab === 'android' && (
            <div className="p-5 rounded-2xl bg-[#0a1622] border border-emerald-800/50 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Direct Android Package (.APK)
                  </div>
                  <div className="text-base font-bold text-white mt-0.5">
                    Dirham-Coin-v2.4.1-Release.apk
                  </div>
                </div>
                <span className="text-xs text-slate-400 font-mono-num bg-slate-900 px-2 py-1 rounded border border-slate-800">
                  42.8 MB
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#060c14] border border-sky-950">
                  <div className="text-slate-400">Min Android Version</div>
                  <div className="font-bold text-slate-200 mt-0.5">Android 8.0 (Oreo) +</div>
                </div>
                <div className="p-3 rounded-xl bg-[#060c14] border border-sky-950">
                  <div className="text-slate-400">Security SHA-256</div>
                  <div className="font-bold text-emerald-400 font-mono-num mt-0.5">Verified Safe ✓</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="#download-apk"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Dirham Coin Android APK download initiated! (Direct Mirror link)');
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Android APK (Direct)</span>
                </a>
                <button
                  onClick={handleCopy}
                  className="py-3 px-4 rounded-xl bg-[#0e1d2c] hover:bg-sky-900/60 border border-sky-700/60 text-xs font-semibold text-sky-200 flex items-center justify-center gap-2 transition-all"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-sky-400" />}
                  <span>{copiedLink ? 'Link Copied!' : 'Share Download Link'}</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'ios' && (
            <div className="p-5 rounded-2xl bg-[#0a1622] border border-emerald-800/50 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Apple iOS • TestFlight / App Store
                  </div>
                  <div className="text-base font-bold text-white mt-0.5">
                    Dirham Coin iOS Beta Build
                  </div>
                </div>
                <span className="text-xs text-emerald-300 font-semibold bg-emerald-950 px-2 py-1 rounded border border-emerald-700/50">
                  Beta Access Open
                </span>
              </div>

              <p className="text-xs text-slate-300">
                iOS users can install the DRM Node App via Apple TestFlight beta program or add the Progressive Web App (PWA) directly to their Home Screen with full push notification support.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="#ios-testflight"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Opening Apple TestFlight invite for Dirham Coin Mobile App...');
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Join Apple TestFlight Beta</span>
                </a>
              </div>
            </div>
          )}

          {activeTab === 'web' && (
            <div className="p-5 rounded-2xl bg-[#0a1622] border border-emerald-800/50 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Browser Web App & Node Terminal
                  </div>
                  <div className="text-base font-bold text-white mt-0.5">
                    Instant Browser Access (No Download Required)
                  </div>
                </div>
                <span className="text-xs text-sky-400 font-mono-num bg-sky-950 px-2 py-1 rounded border border-sky-800">
                  Zero Install
                </span>
              </div>

              <p className="text-xs text-slate-300">
                Run the Dirham Coin node validator directly from Chrome, Safari, or Brave. Sync wallet balances, claim referral bonuses, and simulate phase returns in real-time.
              </p>

              <button
                onClick={() => {
                  alert('Launching Dirham Coin Web Node App in your browser...');
                  onClose();
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all"
              >
                <Zap className="w-4 h-4" />
                <span>Launch Web Mining Node</span>
              </button>
            </div>
          )}

          {/* Key App Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Built-In Features inside the App
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-[#07111c] border border-sky-950 flex items-start gap-3">
                <Cpu className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Lightweight Node Mining</div>
                  <div className="text-[11px] text-slate-400">Mine DRM without battery drain or heating</div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-[#07111c] border border-sky-950 flex items-start gap-3">
                <Shield className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Self-Custodial Vault</div>
                  <div className="text-[11px] text-slate-400">Encrypted 12/24 seed phrase backup</div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-[#07111c] border border-sky-950 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">4-Phase Staking Multiplier</div>
                  <div className="text-[11px] text-slate-400">Lock DRM for target listing bonuses</div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-[#07111c] border border-sky-950 flex items-start gap-3">
                <Zap className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Instant P2P Transfer</div>
                  <div className="text-[11px] text-slate-400">Zero gas fee transfers across DRM users</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-sky-950 bg-[#060c14] flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono-num">Dirham Coin Official Build • 90M Capped Supply</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#0e1d2c] hover:bg-sky-900/60 border border-sky-700/50 text-xs font-semibold text-sky-200 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
