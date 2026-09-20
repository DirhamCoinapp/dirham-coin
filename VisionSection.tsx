import React from 'react';
import { DRM_VISION_PILLARS } from '../data/roadmapData';
import { dirhamCoinImg } from '../assetImports';
import { ShieldCheck, Users, TrendingUp, Flame, Award, HeartHandshake } from 'lucide-react';

export const VisionSection: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-sky-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-sky-300" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-sky-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-sky-300" />;
      default:
        return <Award className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="vision" className="py-16 bg-[#040914]/75 backdrop-blur-sm border-b border-sky-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c1928] border border-sky-500/50 text-xs font-semibold text-sky-300 mb-3 shadow-[0_0_12px_rgba(14,165,233,0.2)]">
            <HeartHandshake className="w-3.5 h-3.5 text-sky-400" />
            <span>CORE PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            THE DRM VISION
          </h2>
          <p className="text-lg sm:text-xl text-sky-300 font-display font-bold mt-2">
            Fixed Supply. Community Participation. Real Network Growth. Sustainable Token Economics.
          </p>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Dirham Coin is built on the belief that enduring digital assets require transparent mathematical limits, majority community ownership, and an automated deflationary revenue cycle.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DRM_VISION_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#09121d] border border-sky-950/90 hover:border-sky-500/70 hover:bg-[#0e1a2b] transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-[0_0_20px_rgba(14,165,233,0.2)]"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#0c1827] border border-sky-800/60 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(14,165,233,0.2)]">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-sky-500/50 opacity-80 group-hover:opacity-100 transition-opacity">
                    <img src={dirhamCoinImg} alt="DRM" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="text-[11px] font-mono-num font-bold text-sky-400 uppercase tracking-wider mb-1">
                  {pillar.highlight}
                </div>

                <h3 className="text-lg font-bold text-white font-display group-hover:text-sky-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sky-950/80 text-[11px] text-slate-500 font-mono-num flex items-center justify-between">
                <span>Pillar 0{idx + 1}</span>
                <span className="text-sky-400 font-semibold">Verified Spec</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
