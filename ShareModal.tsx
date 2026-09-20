import React, { useState } from 'react';
import { X, Copy, Check, Share2, Send, MessageCircle, Twitter, Globe, QrCode } from 'lucide-react';
import { dirhamCoinImg } from '../assetImports';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareUrl?: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  shareUrl = 'https://ais-pre-ef3nqtylaot23pzzqht5i5-533865942937.europe-west3.run.app',
}) => {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  if (!isOpen) return null;

  // Use dynamic location if running in standard browser, or the pre-configured shared link
  const currentUrl = typeof window !== 'undefined' && window.location.href.startsWith('http') && !window.location.href.includes('localhost')
    ? window.location.href
    : shareUrl;

  const shareTitle = 'Dirham Coin (DRM) - Official Roadmap & Web App';
  const shareText = 'Check out Dirham Coin (DRM) Official Roadmap, Deflationary Tokenomics, and ROI Simulator: ';

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(currentUrl);
      } else {
        const input = document.createElement('textarea');
        input.value = currentUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: currentUrl,
        });
      } catch {
        // user cancelled or fallback
      }
    } else {
      handleCopy();
    }
  };

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-emerald-600 hover:bg-emerald-500 text-white',
      border: 'border-emerald-500/50',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`,
    },
    {
      name: 'Telegram',
      icon: Send,
      color: 'bg-sky-600 hover:bg-sky-500 text-white',
      border: 'border-sky-500/50',
      url: `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`,
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      color: 'bg-slate-800 hover:bg-slate-700 text-white',
      border: 'border-slate-600',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`,
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#060d19] border border-sky-500/60 rounded-3xl shadow-[0_0_50px_rgba(14,165,233,0.3)] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header decoration */}
        <div className="h-1.5 bg-gradient-to-r from-sky-500 via-emerald-400 to-sky-500 w-full" />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-sky-950 flex items-center justify-between bg-[#040812]">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-2xl p-0.5 bg-gradient-to-tr from-sky-500 to-emerald-400 shadow-[0_0_15px_rgba(14,165,233,0.4)] flex-shrink-0">
              <img
                src={dirhamCoinImg}
                alt="Dirham Coin Icon"
                className="w-full h-full object-cover rounded-[14px]"
              />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Share Webpage Link</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 font-normal border border-sky-500/30">
                  Live
                </span>
              </h3>
              <p className="text-xs text-slate-400">Dirham Coin (DRM) Official Web Link</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-sky-950/60 border border-sky-900 text-slate-400 hover:text-white hover:bg-sky-900/60 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Visual Link Preview Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#081524] to-[#040c17] border border-sky-500/40 flex items-center gap-3.5 shadow-lg">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-sky-400/80 shadow-md flex-shrink-0 bg-[#02050b]">
              <img
                src={dirhamCoinImg}
                alt="Dirham Coin"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <Globe className="w-3 h-3" /> Webpage Link
                </span>
                <span className="text-[10px] text-slate-400 font-mono">DRM / USDT</span>
              </div>
              <h4 className="text-sm font-bold text-white truncate">
                Dirham Coin (DRM) Roadmap & Tokenomics
              </h4>
              <p className="text-[11px] text-slate-400 line-clamp-1">
                Phase returns, 90M fixed supply & deflationary 40% buyback model
              </p>
            </div>
          </div>

          {/* Direct Copy URL Field */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2 flex items-center justify-between">
              <span>Webpage Link (Shear karne k liye):</span>
              <span className="text-[11px] text-sky-400">Click to copy</span>
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="w-full bg-[#030712] border border-sky-800/80 focus:border-sky-400 rounded-xl py-3 pl-3.5 pr-28 text-xs sm:text-sm font-mono text-sky-200 selection:bg-sky-500/40 select-all outline-none"
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
              <button
                type="button"
                onClick={handleCopy}
                className={`absolute right-1.5 px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shadow-md ${
                  copied
                    ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/30'
                    : 'bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-sky-500/30'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            {copied && (
              <p className="text-[11px] text-emerald-400 mt-1.5 flex items-center gap-1 font-medium animate-in fade-in">
                <Check className="w-3 h-3" /> Link copied to clipboard! Ab aap kisi bi dost ya group mein paste kar sakte hain.
              </p>
            )}
          </div>

          {/* Social Share Buttons (WhatsApp, Telegram, X) */}
          <div>
            <div className="text-xs font-semibold text-slate-300 mb-3 flex items-center justify-between">
              <span>Quick Share on Social Media:</span>
              <button
                type="button"
                onClick={handleNativeShare}
                className="text-[11px] text-sky-400 hover:text-sky-300 flex items-center gap-1 underline underline-offset-2"
              >
                <Share2 className="w-3 h-3" /> More options
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {shareLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-3 px-3 rounded-xl border ${link.border} ${link.color} font-medium text-xs transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0 text-center`}
                  >
                    <IconComponent className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* QR Code toggle */}
          <div className="pt-2 border-t border-sky-950 flex items-center justify-between text-xs text-slate-400">
            <button
              type="button"
              onClick={() => setShowQR(!showQR)}
              className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors"
            >
              <QrCode className="w-4 h-4" />
              <span>{showQR ? 'Hide QR Code' : 'Scan QR Code to open'}</span>
            </button>
            <span className="text-[11px] text-slate-500">Fixed Supply: 90M DRM</span>
          </div>

          {showQR && (
            <div className="p-4 rounded-2xl bg-[#02050b] border border-sky-900 flex flex-col items-center justify-center gap-2 text-center animate-in fade-in">
              <div className="p-2 bg-white rounded-xl shadow-md">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentUrl)}`}
                  alt="Dirham Coin Link QR"
                  className="w-32 h-32"
                />
              </div>
              <p className="text-[11px] text-slate-400">Mobile camera se scan kar ke direct open karein</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#030711] border-t border-sky-950 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Ready for WhatsApp & Telegram Sharing</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-sky-950/60 hover:bg-sky-900/60 text-slate-300 hover:text-white text-xs transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
