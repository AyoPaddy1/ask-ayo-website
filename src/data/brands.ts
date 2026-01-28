export interface Brand {
  id: string;
  name: string;
  ticker: string;
  logo: string;
  sector: 'Tech' | 'Consumer' | 'Luxury' | 'Automotive' | 'Sportswear' | 'Financial Services' | 'Industrial';
  category: 'Your Digital Life' | 'The Fit' | 'Cravings' | 'The Drive' | 'The Stream' | 'The Cart';
  slug: string;
  tagline: string; // One-sentence hook for the card
  insight: string; // The killer hook about the business
  howTheyMakeMoney: {
    summary: string;
    breakdown: { segment: string; percentage: number; description: string }[];
  };
  growthStory: string; // 2-3 sentences
  whatProsWatch: { metric: string; why: string }[];
  rightNow: string; // Latest news/context
  lastUpdated: string;
}

export const brands: Brand[] = [
  {
    id: '01',
    name: 'Apple',
    ticker: 'AAPL',
    logo: '🍎',
    sector: 'Tech',
    category: 'Your Digital Life',
    slug: 'apple',
    tagline: 'The ecosystem you can\'t escape',
    insight: 'Apple doesn\'t sell phones. They sell a walled garden you pay rent on forever.',
    howTheyMakeMoney: {
      summary: 'Apple makes money from hardware (iPhones, Macs, iPads) and an increasingly lucrative services business (App Store, iCloud, Apple Music, Apple TV+).',
      breakdown: [
        {
          segment: 'iPhone',
          percentage: 52,
          description: 'The cash cow. Premium pricing, annual upgrades, and the gateway drug to the ecosystem.'
        },
        {
          segment: 'Services',
          percentage: 22,
          description: 'App Store takes 30%, iCloud storage, subscriptions. Pure profit, recurring revenue.'
        },
        {
          segment: 'Mac',
          percentage: 11,
          description: 'Premium laptops and desktops. M-series chips made them cool again.'
        },
        {
          segment: 'iPad & Wearables',
          percentage: 15,
          description: 'iPads, AirPods, Apple Watch. Accessories that lock you deeper into the ecosystem.'
        }
      ]
    },
    growthStory: 'Dominated smartphones → Built a services empire → Now betting on AI and spatial computing (Vision Pro). The strategy: Get you on one device, keep you on all of them.',
    whatProsWatch: [
      { metric: 'iPhone ASP (Average Selling Price)', why: 'Shows whether people are buying Pro models or going cheap.' },
      { metric: 'Services growth rate', why: 'Recurring revenue is more valuable than one-time hardware sales.' },
      { metric: 'China revenue', why: 'Huge market, but geopolitical risk and Huawei competition.' },
      { metric: 'Gross margin', why: 'Apple\'s pricing power. If margins drop, the premium brand is weakening.' }
    ],
    rightNow: 'Apple Intelligence (AI features) rolling out. Vision Pro launched but slow adoption. China sales under pressure from local competitors. Services growth slowing but still strong.',
    lastUpdated: 'January 29, 2026'
  },
  {
    id: '02',
    name: 'Nike',
    ticker: 'NKE',
    logo: '👟',
    sector: 'Sportswear',
    category: 'The Fit',
    slug: 'nike',
    tagline: 'Just do it. And report quarterly earnings.',
    insight: 'Nike doesn\'t make shoes. They make desire.',
    howTheyMakeMoney: {
      summary: 'Nike designs and markets athletic footwear, apparel, and equipment. They don\'t manufacture—they outsource production to factories (mostly in Asia) and focus on branding, design, and distribution.',
      breakdown: [
        {
          segment: 'Footwear',
          percentage: 68,
          description: 'Sneakers, running shoes, basketball shoes. The core business. High margins on premium models.'
        },
        {
          segment: 'Apparel',
          percentage: 27,
          description: 'Athletic wear, jerseys, hoodies. Lower margins than shoes but huge volume.'
        },
        {
          segment: 'Equipment',
          percentage: 5,
          description: 'Bags, balls, accessories. Small but steady.'
        }
      ]
    },
    growthStory: 'Global dominance through athlete endorsements → Pivot to direct-to-consumer (DTC) and digital → Now a messy reset under new CEO. Cutting wholesale partners, betting on Nike.com and owned stores.',
    whatProsWatch: [
      { metric: 'Gross margin', why: 'Shows pricing power. If margins drop, they\'re discounting too much.' },
      { metric: 'Inventory days', why: 'Too much inventory = markdowns coming. Bad for margins.' },
      { metric: 'China revenue', why: 'Huge growth market, but competition from local brands (Li-Ning, Anta) is fierce.' },
      { metric: 'DTC vs. wholesale mix', why: 'DTC is higher margin. Nike wants to own the customer relationship.' }
    ],
    rightNow: 'New CEO cleaning up. Guidance cut. Inventory issues. China sales weak. Stock down 40% from highs. Turnaround story or value trap?',
    lastUpdated: 'January 27, 2026'
  },
  {
    id: '03',
    name: 'Netflix',
    ticker: 'NFLX',
    logo: '🎬',
    sector: 'Tech',
    category: 'The Stream',
    slug: 'netflix',
    tagline: 'Binge now, cancel later',
    insight: 'Netflix doesn\'t sell shows. They sell the illusion of infinite choice.',
    howTheyMakeMoney: {
      summary: 'Subscription streaming service. You pay monthly, they give you unlimited access to movies and shows. No ads (unless you pick the cheap tier). Revenue = subscribers × average price.',
      breakdown: [
        {
          segment: 'Standard Plan',
          percentage: 55,
          description: '$15.49/month. Most popular tier. HD streaming, 2 screens.'
        },
        {
          segment: 'Premium Plan',
          percentage: 30,
          description: '$19.99/month. 4K, 4 screens. Families and sharers.'
        },
        {
          segment: 'Ad-Supported Plan',
          percentage: 15,
          description: '$6.99/month. Cheaper, but you watch ads. Growing fast.'
        }
      ]
    },
    growthStory: 'Killed Blockbuster → Became the default streaming service → Competition arrived (Disney+, HBO Max) → Now focused on profitability over growth. Password-sharing crackdown working.',
    whatProsWatch: [
      { metric: 'Net subscriber adds', why: 'Growth is slowing. Every quarter, Wall Street asks: Are they still growing?' },
      { metric: 'Average Revenue Per User (ARPU)', why: 'Can they raise prices without losing subscribers?' },
      { metric: 'Content spend', why: 'They spend $17B/year on shows. Is it worth it?' },
      { metric: 'Ad-tier adoption', why: 'Ads = higher margins. If this grows, profitability improves.' }
    ],
    rightNow: 'Password-sharing crackdown added millions of subscribers. Ad tier growing. Live sports coming (WWE, NFL). Stock near all-time highs. But growth is slowing.',
    lastUpdated: 'January 29, 2026'
  },
  {
    id: '04',
    name: 'Tesla',
    ticker: 'TSLA',
    logo: '⚡',
    sector: 'Automotive',
    category: 'The Drive',
    slug: 'tesla',
    tagline: 'Electric dreams, earnings reality',
    insight: 'Tesla doesn\'t sell cars. They sell Elon Musk\'s vision of the future.',
    howTheyMakeMoney: {
      summary: 'Tesla makes electric vehicles (EVs) and sells them directly to consumers (no dealerships). They also sell solar panels, batteries, and Full Self-Driving (FSD) software subscriptions.',
      breakdown: [
        {
          segment: 'Automotive Sales',
          percentage: 81,
          description: 'Model 3, Model Y, Model S, Model X, Cybertruck. The core business.'
        },
        {
          segment: 'Automotive Leasing',
          percentage: 4,
          description: 'Lease programs. Smaller but recurring revenue.'
        },
        {
          segment: 'Energy Generation & Storage',
          percentage: 6,
          description: 'Solar panels, Powerwall batteries. Growing but still small.'
        },
        {
          segment: 'Services & Other',
          percentage: 9,
          description: 'FSD subscriptions, Supercharger network, insurance. High-margin recurring revenue.'
        }
      ]
    },
    growthStory: 'Proved EVs could be cool → Scaled production → Now facing competition from legacy automakers (Ford, GM) and Chinese rivals (BYD). Margins under pressure from price cuts.',
    whatProsWatch: [
      { metric: 'Deliveries', why: 'Growth is slowing. 2025 was the first year deliveries declined.' },
      { metric: 'Gross margin', why: 'Price cuts are killing margins. Can they stabilize?' },
      { metric: 'FSD take rate', why: 'Recurring revenue from software is the future. But adoption is slow.' },
      { metric: 'Cybertruck ramp', why: 'New product. Can they scale production without quality issues?' }
    ],
    rightNow: 'First annual delivery decline ever. Margins compressed from price cuts. Robotaxi promises not materializing. Stock volatile. Musk distracted by X (Twitter) and politics.',
    lastUpdated: 'January 28, 2026'
  },
  {
    id: '05',
    name: 'McDonald\'s',
    ticker: 'MCD',
    logo: '🍔',
    sector: 'Consumer',
    category: 'Cravings',
    slug: 'mcdonalds',
    tagline: 'Billions served, franchises owned',
    insight: 'McDonald\'s doesn\'t sell burgers. They sell real estate and franchise fees.',
    howTheyMakeMoney: {
      summary: 'McDonald\'s is a franchise business. They don\'t own most restaurants—franchisees do. McDonald\'s makes money from franchise fees (4-5% of sales) and rent (they own the land, franchisees lease it).',
      breakdown: [
        {
          segment: 'Franchise Revenues',
          percentage: 60,
          description: 'Royalties from franchisees. Recurring, high-margin revenue.'
        },
        {
          segment: 'Company-Operated Restaurants',
          percentage: 35,
          description: 'Restaurants McDonald\'s owns and operates directly. Lower margin but more control.'
        },
        {
          segment: 'Other Revenue',
          percentage: 5,
          description: 'Licensing, real estate income, etc.'
        }
      ]
    },
    growthStory: 'Built a global empire → Shifted to franchising (asset-light model) → Now focused on digital (mobile app, delivery) and menu innovation. Steady, boring, profitable.',
    whatProsWatch: [
      { metric: 'Same-store sales growth', why: 'Are existing restaurants growing? This is the key metric.' },
      { metric: 'Digital sales penetration', why: 'Mobile app and delivery are higher margin. Growing fast.' },
      { metric: 'Franchise margin', why: 'Franchise revenue is pure profit. Watch for any pressure here.' },
      { metric: 'International expansion', why: 'Growth is coming from emerging markets (China, India).' }
    ],
    rightNow: 'Digital sales booming (mobile app, delivery). Menu innovation (adult Happy Meals, McFlurry collabs). Inflation pressuring low-income customers. Stock steady.',
    lastUpdated: 'January 29, 2026'
  },
  {
    id: '06',
    name: 'Coca-Cola',
    ticker: 'KO',
    logo: '🥤',
    sector: 'Consumer',
    category: 'Cravings',
    slug: 'coca-cola',
    tagline: 'Sugar water, global scale',
    insight: 'Coca-Cola doesn\'t sell soda. They sell a distribution network.',
    howTheyMakeMoney: {
      summary: 'Coca-Cola makes beverage concentrates and syrups, then sells them to bottling partners who manufacture, package, and distribute the final products. They also own some bottling operations.',
      breakdown: [
        {
          segment: 'Sparkling Soft Drinks',
          percentage: 65,
          description: 'Coke, Sprite, Fanta. The core business. Declining in developed markets.'
        },
        {
          segment: 'Water, Sports, Coffee & Tea',
          percentage: 20,
          description: 'Dasani, Powerade, Costa Coffee. Healthier options, growing.'
        },
        {
          segment: 'Juice, Dairy & Plant-Based',
          percentage: 10,
          description: 'Minute Maid, Fairlife. Smaller but diversifying.'
        },
        {
          segment: 'Other',
          percentage: 5,
          description: 'Energy drinks, alcohol experiments (hard seltzer).'
        }
      ]
    },
    growthStory: 'Dominated soda globally → Health trends hurt soda sales → Diversifying into water, coffee, and healthier beverages. Steady dividend payer, defensive stock.',
    whatProsWatch: [
      { metric: 'Unit case volume', why: 'Are people drinking more Coke products? Volume growth is key.' },
      { metric: 'Pricing power', why: 'Can they raise prices without losing customers? Inflation test.' },
      { metric: 'Emerging markets growth', why: 'Growth is coming from Africa, Asia, Latin America.' },
      { metric: 'Zero Sugar mix', why: 'Coke Zero growing faster than regular Coke. Better margins.' }
    ],
    rightNow: 'Zero Sugar Coke growing. Coffee business (Costa) expanding. Dividend aristocrat (60+ years of increases). Stock steady, boring, reliable.',
    lastUpdated: 'January 29, 2026'
  },
  {
    id: '07',
    name: 'Amazon',
    ticker: 'AMZN',
    logo: '📦',
    sector: 'Tech',
    category: 'The Cart',
    slug: 'amazon',
    tagline: 'Everything store, cloud empire',
    insight: 'Amazon doesn\'t sell products. They sell infrastructure.',
    howTheyMakeMoney: {
      summary: 'Amazon has three businesses: E-commerce (retail), AWS (cloud computing), and Advertising. E-commerce has thin margins, AWS prints money, and ads are growing fast.',
      breakdown: [
        {
          segment: 'AWS (Cloud Computing)',
          percentage: 17,
          description: 'Only 17% of revenue but 60% of profit. The cash cow.'
        },
        {
          segment: 'Online Stores',
          percentage: 42,
          description: 'Retail sales on Amazon.com. Low margin but huge volume.'
        },
        {
          segment: 'Third-Party Seller Services',
          percentage: 24,
          description: 'Fees from sellers using Amazon\'s platform. Higher margin than retail.'
        },
        {
          segment: 'Advertising',
          percentage: 9,
          description: 'Sponsored products, display ads. Growing 20%+ per year. High margin.'
        },
        {
          segment: 'Subscription Services',
          percentage: 8,
          description: 'Prime memberships ($139/year). Recurring revenue, high margin.'
        }
      ]
    },
    growthStory: 'Started as a bookstore → Became the everything store → Built AWS (cloud) → Now a conglomerate. Retail funds AWS, AWS funds everything else.',
    whatProsWatch: [
      { metric: 'AWS growth rate', why: 'This is the profit engine. Slowing growth = big problem.' },
      { metric: 'Operating margin', why: 'Retail is low margin. Can they improve efficiency?' },
      { metric: 'Ad revenue growth', why: 'Ads are high margin and growing fast. Key to profitability.' },
      { metric: 'Prime subscriber count', why: 'Prime members spend 2-3x more than non-members.' }
    ],
    rightNow: 'AWS growth slowing but still dominant. Advertising booming. Retail margins improving (automation, efficiency). AI investments (Anthropic, Bedrock). Stock strong.',
    lastUpdated: 'January 29, 2026'
  },
  {
    id: '08',
    name: 'LVMH',
    ticker: 'MC.PA',
    logo: '👜',
    sector: 'Luxury',
    category: 'The Fit',
    slug: 'lvmh',
    tagline: 'Luxury at scale, margins at altitude',
    insight: 'LVMH doesn\'t sell handbags. They sell status.',
    howTheyMakeMoney: {
      summary: 'LVMH owns 75+ luxury brands (Louis Vuitton, Dior, Tiffany, Moët Hennessy). They make money from selling high-margin luxury goods to wealthy consumers globally.',
      breakdown: [
        {
          segment: 'Fashion & Leather Goods',
          percentage: 48,
          description: 'Louis Vuitton, Dior, Fendi. The profit engine. 40%+ operating margins.'
        },
        {
          segment: 'Selective Retailing',
          percentage: 28,
          description: 'Sephora, DFS (duty-free). Lower margin but huge volume.'
        },
        {
          segment: 'Wines & Spirits',
          percentage: 10,
          description: 'Moët & Chandon, Hennessy. Steady, high-margin business.'
        },
        {
          segment: 'Perfumes & Cosmetics',
          percentage: 9,
          description: 'Dior Beauty, Givenchy. Growing fast, especially in Asia.'
        },
        {
          segment: 'Watches & Jewelry',
          percentage: 5,
          description: 'Tiffany, TAG Heuer, Bulgari. Acquired Tiffany for $16B in 2021.'
        }
      ]
    },
    growthStory: 'Built a luxury empire through acquisitions → Dominated China\'s luxury boom → Now facing a slowdown as Chinese consumers pull back. Still the king of luxury.',
    whatProsWatch: [
      { metric: 'Fashion & Leather Goods margin', why: 'This is the profit engine. Any margin pressure is a red flag.' },
      { metric: 'China revenue', why: '30% of sales. Chinese consumers are the luxury market.' },
      { metric: 'Organic growth', why: 'Are existing brands growing, or just acquisitions driving growth?' },
      { metric: 'Pricing power', why: 'Can they keep raising prices? Luxury is about exclusivity.' }
    ],
    rightNow: 'China slowdown hurting sales. Luxury fatigue among younger consumers. Stock down 20% from highs. But margins still strong. Waiting for China to recover.',
    lastUpdated: 'January 27, 2026'
  }
];

// Category definitions
export const categories = [
  {
    name: 'Your Digital Life',
    tagline: 'The tech you can\'t quit',
    gradient: 'from-blue-500 to-purple-600',
    brands: ['Apple', 'Google', 'Meta', 'Microsoft']
  },
  {
    name: 'The Fit',
    tagline: 'What you wear, who you are',
    gradient: 'from-orange-500 to-pink-600',
    brands: ['Nike', 'Lululemon', 'Adidas', 'LVMH']
  },
  {
    name: 'Cravings',
    tagline: 'Fast food, faster profits',
    gradient: 'from-red-500 to-yellow-500',
    brands: ['McDonald\'s', 'Coca-Cola', 'Starbucks', 'Pepsi']
  },
  {
    name: 'The Drive',
    tagline: 'Cars, status, and the road ahead',
    gradient: 'from-gray-700 to-gray-900',
    brands: ['Tesla', 'Toyota', 'Mercedes-Benz', 'BMW']
  },
  {
    name: 'The Stream',
    tagline: 'Binge-worthy business models',
    gradient: 'from-purple-500 to-pink-500',
    brands: ['Netflix', 'Disney', 'Spotify', 'Sony']
  },
  {
    name: 'The Cart',
    tagline: 'One-click to everything',
    gradient: 'from-green-500 to-teal-600',
    brands: ['Amazon', 'Walmart', 'Target', 'Costco']
  }
];
