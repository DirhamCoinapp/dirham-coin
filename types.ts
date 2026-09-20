export type Language = 'en' | 'ur' | 'ar';

export interface PhaseObjective {
  id: string;
  title: string;
  completed?: boolean;
}

export interface RoadmapPhase {
  id: string;
  phaseNumber: number | string;
  code: string;
  title: string;
  subtitle: string;
  startPrice: string;
  targetPrice: string;
  priceNumericStart: number;
  priceNumericEnd: number;
  color: string;
  badgeBg: string;
  badgeBorder: string;
  accentText: string;
  objectives: string[];
  status: 'active' | 'upcoming' | 'planned';
  focusSummary: string;
  keyStats: {
    priceGrowth: string;
    stageMultiplier: string;
  };
}

export interface TokenAllocation {
  id: string;
  category: string;
  amountDRM: number; // in millions e.g. 17.00
  amountExact: number; // 17,000,000
  percentage: number; // 18.89
  color: string;
  group: 'community' | 'core' | 'liquidity' | 'strategic';
  description: string;
  vestingHighlight: string;
}

export interface DeflationaryStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}
