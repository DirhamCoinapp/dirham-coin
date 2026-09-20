import { RoadmapPhase, TokenAllocation } from '../types';

export const TOTAL_SUPPLY = 90_000_000;
export const TOTAL_SUPPLY_STR = "90,000,000 DRM";

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    id: 'phase-1',
    phaseNumber: 1,
    code: 'PHASE 1',
    title: 'Foundation & Community Building',
    subtitle: 'Laying the bedrock for the Dirham Coin ecosystem with initial token architecture and miner onboarding.',
    startPrice: '$0.10 USDT',
    targetPrice: '$0.50 USDT',
    priceNumericStart: 0.10,
    priceNumericEnd: 0.50,
    color: '#10b981', // green
    badgeBg: 'rgba(16, 185, 129, 0.12)',
    badgeBorder: 'rgba(16, 185, 129, 0.35)',
    accentText: 'text-emerald-400',
    status: 'active',
    focusSummary: 'Token infrastructure launch, transparent distribution setup, referral & contribution mining kick-off.',
    keyStats: {
      priceGrowth: '+400%',
      stageMultiplier: '5.0x'
    },
    objectives: [
      'Dirham Coin ecosystem launch',
      'DRM token infrastructure development',
      'Community onboarding',
      'Referral mining program',
      'Contribution mining introduction',
      'Initial ecosystem and platform development',
      'Establishment of transparent token allocation'
    ]
  },
  {
    id: 'phase-2',
    phaseNumber: 2,
    code: 'PHASE 2',
    title: 'Network Expansion',
    subtitle: 'Scaling node infrastructure, distributed referral mining operations, and strategic alliance networks.',
    startPrice: '$0.50 USDT',
    targetPrice: '$0.95 USDT',
    priceNumericStart: 0.50,
    priceNumericEnd: 0.95,
    color: '#3b82f6', // blue
    badgeBg: 'rgba(59, 130, 246, 0.12)',
    badgeBorder: 'rgba(59, 130, 246, 0.35)',
    accentText: 'text-blue-400',
    status: 'upcoming',
    focusSummary: 'Global node expansion, scaling network participants, enhanced utility & user experience.',
    keyStats: {
      priceGrowth: '+90%',
      stageMultiplier: '1.9x'
    },
    objectives: [
      'Expand the DRM community',
      'Increase network participation',
      'Scale distributed referral mining',
      'Grow node infrastructure',
      'Expand ecosystem partnerships',
      'Improve platform utility and user experience',
      'Strengthen the DRM network'
    ]
  },
  {
    id: 'phase-3',
    phaseNumber: 3,
    code: 'PHASE 3',
    title: 'Ecosystem Growth',
    subtitle: 'Catalyzing secondary utility, node hardening, institutional partnerships, and wider adoption channels.',
    startPrice: '$0.95 USDT',
    targetPrice: '$1.25 USDT',
    priceNumericStart: 0.95,
    priceNumericEnd: 1.25,
    color: '#a855f7', // purple
    badgeBg: 'rgba(168, 85, 247, 0.12)',
    badgeBorder: 'rgba(168, 85, 247, 0.35)',
    accentText: 'text-purple-400',
    status: 'upcoming',
    focusSummary: 'Secondary utility integration, node and mining expansion, preparation for open markets.',
    keyStats: {
      priceGrowth: '+31.6%',
      stageMultiplier: '1.32x'
    },
    objectives: [
      'Further ecosystem expansion',
      'Increase node and mining participation',
      'Develop strategic partnerships',
      'Expand DRM utility',
      'Strengthen community-driven growth',
      'Prepare the ecosystem for broader market access'
    ]
  },
  {
    id: 'phase-4',
    phaseNumber: 4,
    code: 'PHASE 4',
    title: 'Pre-Listing & Market Readiness',
    subtitle: 'Final stage token optimization, liquidity provisioning, institutional auditing, and top-tier exchange protocols.',
    startPrice: '$1.25 USDT',
    targetPrice: '$1.75 USDT',
    priceNumericStart: 1.25,
    priceNumericEnd: 1.75,
    color: '#f97316', // orange
    badgeBg: 'rgba(249, 115, 22, 0.12)',
    badgeBorder: 'rgba(249, 115, 22, 0.35)',
    accentText: 'text-orange-400',
    status: 'upcoming',
    focusSummary: 'Market liquidity seeding, exchange readiness audit, pre-listing community synchronization.',
    keyStats: {
      priceGrowth: '+40%',
      stageMultiplier: '1.4x'
    },
    objectives: [
      'Final pre-listing development',
      'Ecosystem and infrastructure optimization',
      'Liquidity and market-readiness preparation',
      'Strategic partnerships',
      'Community expansion',
      'Exchange/listing preparations',
      'Finalize transition toward open-market trading'
    ]
  },
  {
    id: 'phase-listing',
    phaseNumber: 'Listing',
    code: 'LISTING PHASE',
    title: 'Market Launch & Open-Market Trading',
    subtitle: 'Transition to full global centralized and decentralized exchanges with high-depth order books.',
    startPrice: '$1.75 USDT',
    targetPrice: '$2.00 USDT',
    priceNumericStart: 1.75,
    priceNumericEnd: 2.00,
    color: '#38bdf8', // sky blue
    badgeBg: 'rgba(56, 189, 248, 0.14)',
    badgeBorder: 'rgba(56, 189, 248, 0.45)',
    accentText: 'text-sky-300',
    status: 'planned',
    focusSummary: 'Official public market listing at $2.00 USDT target, deep liquidity pools, active open market trading.',
    keyStats: {
      priceGrowth: '+14.3%',
      stageMultiplier: '20.0x from P1'
    },
    objectives: [
      'Exchange integration',
      'Market liquidity',
      'Open-market trading',
      'Ecosystem utility',
      'Community expansion',
      'Continued protocol development'
    ]
  }
];

export const TOKENOMICS_DATA: TokenAllocation[] = [
  {
    id: 'ref-mining',
    category: 'Distributed Referral Mining',
    amountDRM: 17.00,
    amountExact: 17_000_000,
    percentage: 18.89,
    color: '#10b981', // emerald
    group: 'community',
    description: 'Direct community rewards for expanding the active user base and peer-to-peer mining networks.',
    vestingHighlight: 'Distributed continuously based on referral network activity and mining milestones.'
  },
  {
    id: 'tge',
    category: 'TGE (Token Generation Event)',
    amountDRM: 15.00,
    amountExact: 15_000_000,
    percentage: 16.67,
    color: '#06b6d4', // cyan
    group: 'liquidity',
    description: 'Tokens available during initial creation and launch events to establish decentralized circulation.',
    vestingHighlight: 'Structured release matching initial phase round pricing.'
  },
  {
    id: 'foundation',
    category: 'Dirham Coin Foundation',
    amountDRM: 13.73,
    amountExact: 13_730_000,
    percentage: 15.26,
    color: '#0284c7', // deep sky blue
    group: 'core',
    description: 'Long-term protocol stewardship, compliance, core security audits, and foundational governance.',
    vestingHighlight: 'Multi-year lockup with phased transparent vesting.'
  },
  {
    id: 'node',
    category: 'Node Infrastructure',
    amountDRM: 12.00,
    amountExact: 12_000_000,
    percentage: 13.33,
    color: '#3b82f6', // blue
    group: 'community',
    description: 'Incentives for node operators validating transactions and maintaining decentralized network uptime.',
    vestingHighlight: 'Block-by-block distribution to verified active nodes.'
  },
  {
    id: 'vc',
    category: 'VC (Venture Capital)',
    amountDRM: 11.52,
    amountExact: 11_520_000,
    percentage: 12.80,
    color: '#8b5cf6', // violet
    group: 'strategic',
    description: 'Strategic institutional funding to accelerate infrastructure development and global scale.',
    vestingHighlight: 'Cliff lock period followed by linear quarterly vesting.'
  },
  {
    id: 'staking',
    category: 'Staking Mining',
    amountDRM: 9.00,
    amountExact: 9_000_000,
    percentage: 10.00,
    color: '#ec4899', // pink
    group: 'community',
    description: 'Yield rewards for locking DRM tokens, reinforcing network security and reducing liquid velocity.',
    vestingHighlight: 'APY-driven emission curve calculated per epoch.'
  },
  {
    id: 'contribution',
    category: 'Contribution Mining',
    amountDRM: 9.00,
    amountExact: 9_000_000,
    percentage: 10.00,
    color: '#f97316', // orange
    group: 'community',
    description: 'Rewards for builders, ecosystem tool creators, translators, ambassadors, and protocol contributors.',
    vestingHighlight: 'Performance and milestone-based grant distribution.'
  },
  {
    id: 'partnerships',
    category: 'Partnerships / Grants / Growth',
    amountDRM: 2.75,
    amountExact: 2_750_000,
    percentage: 3.06,
    color: '#14b8a6', // teal
    group: 'strategic',
    description: 'Ecosystem integration grants, merchant onboarding, marketing alliances, and institutional listings.',
    vestingHighlight: 'Disbursed against verifiable ecosystem expansion milestones.'
  }
];

export const DEFLATIONARY_STEPS = [
  {
    step: 1,
    title: 'Protocol Revenue Inflow',
    description: 'The Dirham Coin ecosystem generates protocol revenue from transaction fees, node services, merchant utilities, and platform interactions.',
    metric: '100% Net Ecosystem Revenue'
  },
  {
    step: 2,
    title: '40% Buyback Allocation',
    description: 'A strict 40% share of all net protocol ecosystem revenue is systematically allocated to execute automated open-market DRM buybacks.',
    metric: '40% Dedicated to DRM Buyback'
  },
  {
    step: 3,
    title: 'Permanent Burn & Removal',
    description: 'All repurchased DRM tokens are sent directly to the unrecoverable blackhole burn address, permanently removing them from circulating supply.',
    metric: 'Permanent Supply Reduction'
  },
  {
    step: 4,
    title: 'Deflationary Value Alignment',
    description: 'With a capped 90,000,000 maximum supply, burns create ongoing downward pressure on circulating supply while network adoption expands.',
    metric: 'Accelerated Scarcity & Growth'
  }
];

export const DRM_VISION_PILLARS = [
  {
    title: 'Fixed Supply',
    highlight: '90,000,000 DRM Cap',
    description: 'Zero unauthorized minting, zero arbitrary dilution. Mathematically hard-capped supply ensures pure scarcity from genesis to perpetuity.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Community Participation',
    highlight: '52.2% Majority Allocation',
    description: 'Over half of all DRM tokens (47,000,000 DRM) are distributed directly to active network miners, node operators, and referral participants.',
    icon: 'Users'
  },
  {
    title: 'Real Network Growth',
    highlight: 'Multi-Phase Scaling',
    description: 'A staged economic framework advancing from $0.10 to $2.00 target listing price, backed by real merchant utility and expanding infrastructure.',
    icon: 'TrendingUp'
  },
  {
    title: 'Sustainable Token Economics',
    highlight: '40% Revenue Buyback & Burn',
    description: 'Ecosystem revenues directly feed open-market token buybacks and permanent burn events, tightly binding protocol activity to token scarcity.',
    icon: 'Flame'
  }
];

export const TRANSLATIONS = {
  en: {
    tagline: 'Building a Sustainable, Community-Driven Digital Asset Ecosystem',
    fixedSupplyLabel: 'Total Fixed Supply',
    currentRound: 'Phase 1 Active',
    targetListing: 'Target Listing Price: $2.00 USDT',
    normalizationNote: 'Mathematical Normalization Note: All token amounts and percentage shares are mathematically balanced and verified against the exact 90,000,000 DRM total fixed supply.',
    disclaimer: 'Important Notice: Listing price and future market price may vary depending on market conditions, liquidity, exchange requirements, and actual market demand. Projections are roadmap targets and do not constitute financial advice.',
    burnTagline: '40% of Net Protocol Ecosystem Revenue dedicated to Open-Market Buybacks & Permanent DRM Burn.',
    communityShareTitle: 'Community & Network Majority Stake',
    communityShareSubtitle: '47,000,000 DRM (52.22% of total supply) is directly distributed to participants via Referral Mining, Node Operators, Staking Mining, and Contribution Mining.'
  },
  ur: {
    tagline: 'Paaedaar, Community-Driven Digital Asset Ecosystem ki Tameer',
    fixedSupplyLabel: 'Kul Mehdooz Supply (Fixed)',
    currentRound: 'Phase 1 Shuru Hai ($0.10 → $0.50)',
    targetListing: 'Target Listing Price: $2.00 USDT',
    normalizationNote: 'Riyazi Wazahat: Token amounts ko 90M total supply ke mutabiq 100% durust aur mathematically balance kiya gaya hai taake har hissa poora fit baithe.',
    disclaimer: 'Ahem Wazahat: Listing price aur mustaqbil ki market price market ke halaat, liquidity, aur exchange requirements ke mutabiq tabdeel ho sakti hai.',
    burnTagline: 'Protocol ecosystem ki net revenue ka 40% open-market buybacks aur DRM burn ke zariye supply kam karne ke liye mukhtas hai.',
    communityShareTitle: 'Community aur Network ka Aksariyat Hissa',
    communityShareSubtitle: 'Kul supply ka 52.22% (47,000,000 DRM) seedha referral mining, nodes, staking aur contributions karne walo ko milta hai.'
  },
  ar: {
    tagline: 'بناء نظام رقمي مستدام ومبني على المجتمع',
    fixedSupplyLabel: 'إجمالي المعروض الثابت',
    currentRound: 'المرحلة 1 نشطة ($0.10 → $0.50)',
    targetListing: 'سعر الإدراج المستهدف: 2.00 دولار USDT',
    normalizationNote: 'ملاحظة رياضية: تمت موازنة جميع كميات الرموز ونسبها بدقة رياضية مقابل إجمالي معروض 90,000,000 درهم.',
    disclaimer: 'إخلاء مسؤولية مهم: قد يختلف سعر الإدراج وأسعار السوق المستقبلية وفقاً لظروف السوق والسيولة ومتطلبات منصات التداول.',
    burnTagline: '40% من صافي إيرادات بروتوكول النظام مخصصة لإعادة الشراء من السوق المفتوحة والحرق الدائم لتقليص المعروض.',
    communityShareTitle: 'حصة الأغلبية للمجتمع وشبكة المعدنين',
    communityShareSubtitle: 'أكثر من 52% (47,000,000 DRM) مخصصة مباشرة لمعدني الإحالات ومشغلي العقد والتخزين والمساهمات.'
  }
};
