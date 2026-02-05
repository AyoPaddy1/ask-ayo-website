export interface EarningsReport {
  id: string;
  company: string;
  ticker: string;
  quarter: string;
  fiscalYear: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  sector: 'Tech' | 'Sportswear' | 'Luxury' | 'Automotive' | 'Consumer' | 'Financial Services' | 'Industrial';
  status?: 'preview' | 'results';
  slug: string;
  keywords: string[];
  revenue: {
    actual: string;
    expected: string;
    beat: boolean;
  };
  eps: {
    actual: string;
    expected: string;
    beat: boolean;
  };
}

export const earningsReports: EarningsReport[] = [
  {
    id: '01',
    company: 'Nike',
    ticker: 'NKE',
    quarter: 'Q2',
    fiscalYear: 'FY2026',
    title: 'Nike Q2 FY2026 Earnings: The China Problem',
    description: 'Nike beat expectations but the stock dropped 10%. Why? China revenue crashed 17%, and tariffs ate into margins. CEO says they\'re in the "middle innings" of a turnaround.',
    date: 'December 19, 2025',
    readTime: '12 min read',
    sector: 'Sportswear',
    slug: 'nike-q2-fy2026',
    keywords: ['Nike earnings', 'NKE stock', 'sportswear', 'China market', 'quarterly results'],
    revenue: {
      actual: '$12.43B',
      expected: '$12.14B',
      beat: true
    },
    eps: {
      actual: '$0.53',
      expected: '$0.37',
      beat: true
    }
  },
  {
    id: '02',
    company: 'Lululemon',
    ticker: 'LULU',
    quarter: 'Q3',
    fiscalYear: 'FY2024',
    title: 'Lululemon Q3 FY2024 Earnings: What They Actually Said',
    description: 'Lululemon crushed expectations with China up 39%, but Americas grew just 2%. Product "newness" fix promised for Q1 2025.',
    date: 'December 5, 2024',
    readTime: '8 min read',
    sector: 'Sportswear',
    slug: 'lululemon-q3-fy2024',
    keywords: ['Lululemon', 'LULU', 'sportswear', 'athleisure', 'China growth'],
    revenue: {
      actual: '$2.40B',
      expected: '$2.36B',
      beat: true
    },
    eps: {
      actual: '$2.87',
      expected: '$2.71',
      beat: true
    }
  },
  {
    id: '03',
    company: 'Adidas',
    ticker: 'ADS',
    quarter: 'Q3',
    fiscalYear: '2024',
    title: 'Adidas Q3 2024 Earnings: What They Actually Said',
    description: 'Adidas is back. Revenue up 14% (excluding Yeezy), Samba craze continues, and they raised guidance for the third time in 2024.',
    date: 'October 29, 2024',
    readTime: '8 min read',
    sector: 'Sportswear',
    slug: 'adidas-q3-2024',
    keywords: ['Adidas', 'ADS', 'sportswear', 'Samba', 'Yeezy', 'turnaround'],
    revenue: {
      actual: '€6.44B',
      expected: '€6.0B',
      beat: true
    },
    eps: {
      actual: '€2.44',
      expected: '€1.80',
      beat: true
    }
  },
  {
    id: '04',
    company: 'Nvidia',
    ticker: 'NVDA',
    quarter: 'Q3',
    fiscalYear: 'FY2025',
    title: 'Nvidia Q3 FY2025 Earnings: What They Actually Said',
    description: 'Nvidia keeps breaking records. Revenue hit $35.1 billion, up 94% from last year. Data center alone was $30.8 billion. Blackwell chips are in "full production" with demand exceeding supply. Jensen Huang declared "the age of AI is in full steam."',
    date: 'November 20, 2024',
    readTime: '8 min read',
    sector: 'Tech',
    slug: 'nvidia-q3-fy2025',
    keywords: ['Nvidia', 'NVDA', 'AI chips', 'data center', 'Blackwell'],
    revenue: {
      actual: '$35.1B',
      expected: '$33.16B',
      beat: true
    },
    eps: {
      actual: '$0.81',
      expected: '$0.75',
      beat: true
    }
  },
  {
    id: '05',
    company: 'Apple',
    ticker: 'AAPL',
    quarter: 'Q4',
    fiscalYear: 'FY2024',
    title: 'Apple Q4 FY2024 Earnings: What They Actually Said',
    description: 'Apple posted a record September quarter with $94.9B in revenue. Services hit an all-time high at nearly $25B. But there\'s an asterisk: Apple paid $10.2B to Ireland after losing an EU tax case. Greater China came in basically flat, missing expectations.',
    date: 'October 31, 2024',
    readTime: '8 min read',
    sector: 'Tech',
    slug: 'apple-q4-fy2024',
    keywords: ['Apple', 'AAPL', 'iPhone', 'Services', 'China'],
    revenue: {
      actual: '$94.9B',
      expected: '$94.36B',
      beat: true
    },
    eps: {
      actual: '$1.64',
      expected: '$1.60',
      beat: true
    }
  },
  {
    id: '06',
    company: 'Netflix',
    ticker: 'NFLX',
    quarter: 'Q3',
    fiscalYear: '2024',
    title: 'Netflix Q3 2024 Earnings: What They Actually Said',
    description: 'Netflix keeps proving the doubters wrong. Revenue up 15%. Subscribers up 5.1 million. The password sharing crackdown is working. The ad tier is taking off. Since the May 2022 low, the stock is up over 340%.',
    date: 'October 17, 2024',
    readTime: '8 min read',
    sector: 'Tech',
    slug: 'netflix-q3-2024',
    keywords: ['Netflix', 'NFLX', 'streaming', 'subscribers', 'ad tier'],
    revenue: {
      actual: '$9.83B',
      expected: '$9.77B',
      beat: true
    },
    eps: {
      actual: '$5.40',
      expected: '$5.12',
      beat: true
    }
  },
  {
    id: '07',
    company: 'LVMH',
    ticker: 'MC.PA',
    quarter: 'Q3',
    fiscalYear: '2024',
    title: 'LVMH Q3 2024 Earnings: What They Actually Said',
    description: 'The luxury party is over. First quarterly revenue decline since the pandemic. Fashion & Leather Goods fell 5%. Asia (ex-Japan) crashed 16%. CFO: Chinese consumer confidence is "back in line with the all-time low reached during Covid." Stock fell 10%.',
    date: 'October 15, 2024',
    readTime: '8 min read',
    sector: 'Luxury',
    slug: 'lvmh-q3-2024',
    keywords: ['LVMH', 'luxury', 'China', 'Louis Vuitton', 'Dior'],
    revenue: {
      actual: '€19.08B',
      expected: '€20.01B',
      beat: false
    },
    eps: {
      actual: 'N/A',
      expected: 'N/A',
      beat: false
    }
  },
  {
    id: '08',
    company: 'LVMH',
    ticker: 'MC.PA',
    quarter: 'Q4',
    fiscalYear: '2025',
    title: 'LVMH Q4 2025 Earnings Preview: What to Expect',
    description: 'The world\'s largest luxury company reports earnings today. Analysts expect Q4 organic sales to decline 0.3%. The key question: Is China stabilizing or getting worse? Fashion & Leather Goods performance will determine if the stock rallies or sells off.',
    date: 'January 27, 2026',
    readTime: '12 min read',
    sector: 'Luxury',
    slug: 'lvmh-q4-2025',
    status: 'preview',
    keywords: ['LVMH', 'luxury', 'China', 'Louis Vuitton', 'Dior', 'earnings preview'],
    revenue: {
      actual: 'TBD',
      expected: '€23.7B',
      beat: false
    },
    eps: {
      actual: 'N/A',
      expected: 'N/A',
      beat: false
    }
  },
  {
    id: '09',
    company: 'Tesla',
    ticker: 'TSLA',
    quarter: 'Q4',
    fiscalYear: '2025',
    title: 'Tesla Q4 2025 Earnings Preview: The Reckoning',
    description: 'Tesla reports its second consecutive year of declining deliveries and earnings. Deliveries fell 8.6%, margins are compressing, and Chinese competitors are winning. Meanwhile, Musk keeps promising robotaxis and robots. Do you believe the dream or the numbers?',
    date: 'January 28, 2026',
    readTime: '14 min read',
    sector: 'Tech',
    slug: 'tesla-q4-2025',
    status: 'preview',
    keywords: ['Tesla', 'TSLA', 'EV', 'electric vehicles', 'robotaxi', 'FSD', 'Elon Musk', 'earnings preview'],
    revenue: {
      actual: 'TBD',
      expected: '$24.77B',
      beat: false
    },
    eps: {
      actual: 'TBD',
      expected: '$0.45',
      beat: false
    }
  },
  {
    id: '10',
    company: 'Apple',
    ticker: 'AAPL',
    quarter: 'Q1',
    fiscalYear: 'FY2026',
    title: 'Apple Q1 FY2026 Earnings Preview: The China Comeback',
    description: 'Apple is about to report its strongest revenue growth in four years. The iPhone 16 is selling like crazy. But the real story is China—Apple reclaimed the #1 spot with 21.8% market share. Is this a real comeback or a temporary bounce?',
    date: 'January 29, 2026',
    readTime: '13 min read',
    sector: 'Tech',
    slug: 'apple-q1-fy2026',
    status: 'preview',
    keywords: ['Apple', 'AAPL', 'iPhone 16', 'China', 'Services', 'Apple Intelligence', 'earnings preview'],
    revenue: {
      actual: 'TBD',
      expected: '$138.4B',
      beat: false
    },
    eps: {
      actual: 'TBD',
      expected: '$2.65',
      beat: false
    }
  },
  {
    id: '11',
    company: 'Google',
    ticker: 'GOOGL',
    quarter: 'Q4',
    fiscalYear: '2025',
    title: "Google just had its biggest year ever—and it's about to spend twice as much",
    description: "Google (Alphabet) just crossed $400 billion in annual revenue for the first time. But the real story is the money they're about to spend on AI.",
    date: 'February 5, 2026',
    readTime: '9 min read',
    sector: 'Tech',
    slug: 'google-q4-2025-results',
    status: 'results',
    keywords: ['Google', 'GOOGL', 'Alphabet', 'Cloud', 'AI', 'YouTube', 'earnings results', 'capex'],
    revenue: {
      actual: '$113.83B',
      expected: '$111.43B',
      beat: true
    },
    eps: {
      actual: '$2.82',
      expected: '$2.63',
      beat: true
    }
  },
  {
    id: '12',
    company: 'Amazon',
    ticker: 'AMZN',
    quarter: 'Q4',
    fiscalYear: '2025',
    title: 'Amazon Q4 2025 Earnings Preview: Can AWS Keep the Party Going?',
    description: 'Amazon reports Q4 2025 earnings Wednesday, February 5. Wall Street expects $187.7 billion in revenue (up 9%) and $1.49 adjusted EPS (up 43%). AWS is the profit engine, but retail margins are compressing. Can Amazon keep the momentum going?',
    date: 'February 2, 2026',
    readTime: '11 min read',
    sector: 'Tech',
    slug: 'amazon-q4-2025-preview',
    status: 'preview',
    keywords: ['Amazon', 'AMZN', 'AWS', 'e-commerce', 'cloud computing', 'earnings preview'],
    revenue: {
      actual: 'TBD',
      expected: '$187.7B',
      beat: false
    },
    eps: {
      actual: 'TBD',
      expected: '$1.49',
      beat: false
    }
  },
  {
    id: '13',
    company: 'Apple',
    ticker: 'AAPL',
    quarter: 'Q1',
    fiscalYear: 'FY2026',
    title: 'Apple Q1 FY2026 Earnings: $143.8B Revenue Smashes Records',
    description: 'Apple posted one of its best quarters ever. Revenue hit $143.8 billion (up 16%), and EPS came in at $2.84 (up 19%). iPhone revenue was $85.3 billion, up 23% year-over-year. China revenue jumped 38%.',
    date: 'January 29, 2026',
    readTime: '10 min read',
    sector: 'Tech',
    slug: 'apple-q1-fy2026-results',
    status: 'results',
    keywords: ['Apple', 'AAPL', 'iPhone 17', 'China', 'Services', 'earnings results'],
    revenue: {
      actual: '$143.8B',
      expected: '$138.4B',
      beat: true
    },
    eps: {
      actual: '$2.84',
      expected: '$2.65',
      beat: true
    }
  },
  {
    id: '14',
    company: 'Microsoft',
    ticker: 'MSFT',
    quarter: 'Q2',
    fiscalYear: 'FY2026',
    title: 'Microsoft Q2 FY2026 Earnings: Azure Growth Slows to 31%',
    description: 'Microsoft beat expectations with $72.3 billion in revenue (up 12%) and $3.23 EPS. But Azure growth slowed to 31%, down from 34% last quarter. The stock fell 4% after hours as investors worry about AI capex returns.',
    date: 'January 28, 2026',
    readTime: '11 min read',
    sector: 'Tech',
    slug: 'microsoft-q2-fy2026-results',
    status: 'results',
    keywords: ['Microsoft', 'MSFT', 'Azure', 'AI', 'cloud computing', 'earnings results'],
    revenue: {
      actual: '$72.3B',
      expected: '$71.5B',
      beat: true
    },
    eps: {
      actual: '$3.23',
      expected: '$3.11',
      beat: true
    }
  },
  {
    id: '15',
    company: 'Meta',
    ticker: 'META',
    quarter: 'Q4',
    fiscalYear: '2025',
    title: 'Meta Q4 2025 Earnings: $50B Revenue, $115-135B AI Spending',
    description: 'Meta crushed expectations with $50.3 billion in revenue (up 21%) and $8.02 EPS. But the headline everyone is talking about? Meta is planning to spend $115-135 billion on AI infrastructure in 2026. Zuckerberg is going all-in on "personal superintelligence."',
    date: 'January 29, 2026',
    readTime: '12 min read',
    sector: 'Tech',
    slug: 'meta-q4-2025-results',
    status: 'results',
    keywords: ['Meta', 'META', 'Facebook', 'Instagram', 'AI', 'capex', 'earnings results'],
    revenue: {
      actual: '$50.3B',
      expected: '$49.2B',
      beat: true
    },
    eps: {
      actual: '$8.02',
      expected: '$6.78',
      beat: true
    }
  },
  {
    id: '16',
    company: 'Tesla',
    ticker: 'TSLA',
    quarter: 'Q4',
    fiscalYear: '2025',
    title: 'Tesla Q4 2025 Earnings: First Annual Revenue Decline, But Margins Improve',
    description: 'Tesla reported Q4 2025 earnings with $24.9 billion in revenue (down 3% year-over-year), marking Tesla\'s first annual revenue decline ever. But earnings per share beat expectations at $0.50 vs $0.45 expected, and automotive gross margins improved from 15.4% to 17.9%.',
    date: 'January 28, 2026',
    readTime: '11 min read',
    sector: 'Tech',
    slug: 'tesla-q4-2025-results',
    status: 'results',
    keywords: ['Tesla', 'TSLA', 'EV', 'electric vehicles', 'margins', 'earnings results'],
    revenue: {
      actual: '$24.9B',
      expected: '$24.77B',
      beat: true
    },
    eps: {
      actual: '$0.50',
      expected: '$0.45',
      beat: true
    }
  },
  {
    id: '17',
    company: 'Starbucks',
    ticker: 'SBUX',
    quarter: 'Q1',
    fiscalYear: 'FY2026',
    title: 'Starbucks Q1 FY2026: The Turnaround Is Real (And the Stock Agrees)',
    description: 'Starbucks posted something it hasn\'t done in two years: positive comparable transaction growth in the US. Transactions were up 3% year-over-year, marking the first time since Q1 FY2024 that more people actually walked into Starbucks stores. The stock surged 10% after earnings.',
    date: 'January 28, 2026',
    readTime: '9 min read',
    sector: 'Consumer',
    slug: 'starbucks-q1-fy2026-results',
    status: 'results',
    keywords: ['Starbucks', 'SBUX', 'coffee', 'turnaround', 'Brian Niccol', 'earnings results'],
    revenue: {
      actual: '$9.92B',
      expected: '$9.62B',
      beat: true
    },
    eps: {
      actual: '$0.56',
      expected: '$0.59',
      beat: false
    }
  },
  {
    id: '18',
    company: 'LVMH',
    ticker: 'MC.PA',
    quarter: 'Full Year',
    fiscalYear: '2025',
    title: 'LVMH 2025: Revenue Down 5%, Stock Down 8%—But the Business Is Stronger Than It Looks',
    description: 'LVMH reported €80.8 billion in revenue for 2025, down 5% from 2024. The stock fell 7-8% after results. But the business is actually in better shape than the headline suggests. Operating margin contracted slightly to 22%, but free cash flow grew 8% to €11.3 billion.',
    date: 'January 27, 2026',
    readTime: '13 min read',
    sector: 'Luxury',
    slug: 'lvmh-2025-results',
    status: 'results',
    keywords: ['LVMH', 'luxury', 'Louis Vuitton', 'Dior', 'China', 'earnings results'],
    revenue: {
      actual: '€80.8B',
      expected: '€82.5B',
      beat: false
    },
    eps: {
      actual: 'N/A',
      expected: 'N/A',
      beat: false
    }
  },
  {
    id: '19',
    company: 'Samsung',
    ticker: '005930.KS',
    quarter: 'Q4',
    fiscalYear: '2025',
    title: 'Samsung Q4 2025: Best Quarter Ever—But SK Hynix Just Overtook Them',
    description: 'Samsung posted its best quarter in company history. Operating profit more than tripled year-over-year, driven entirely by memory chips. But while Samsung was celebrating record profits, SK Hynix quietly overtook them in annual operating profit for the first time ever.',
    date: 'January 29, 2026',
    readTime: '12 min read',
    sector: 'Tech',
    slug: 'samsung-q4-2025-results',
    status: 'results',
    keywords: ['Samsung', '005930.KS', 'memory chips', 'HBM', 'SK Hynix', 'earnings results'],
    revenue: {
      actual: '93.8T KRW',
      expected: '90T KRW',
      beat: true
    },
    eps: {
      actual: 'N/A',
      expected: 'N/A',
      beat: true
    }
  },
  {
    id: '20',
    company: 'Disney',
    ticker: 'DIS',
    quarter: 'Q1',
    fiscalYear: 'FY2026',
    title: 'Disney Q1 FY2026: Parks Hit Record Revenue, Streaming Profitable, CEO Succession Looms',
    description: 'Disney beat Wall Street expectations with $26.0 billion in revenue (vs $25.6B expected) and $1.63 adjusted EPS (vs $1.57-1.58 expected). The stock rose 2% in premarket trading. Disney doubled its stock buyback target to $7 billion for fiscal 2026.',
    date: 'February 2, 2026',
    readTime: '14 min read',
    sector: 'Consumer',
    slug: 'disney-q1-fy2026-results',
    status: 'results',
    keywords: ['Disney', 'DIS', 'theme parks', 'streaming', 'ESPN', 'earnings results'],
    revenue: {
      actual: '$26.0B',
      expected: '$25.6B',
      beat: true
    },
    eps: {
      actual: '$1.63',
      expected: '$1.57',
      beat: true
    }
  }
];

// Helper function to get earnings by sector
export function getEarningsBySector(sector: 'Tech' | 'Sportswear' | 'Luxury' | 'Automotive' | 'Consumer' | 'Financial Services' | 'Industrial'): EarningsReport[] {
  return earningsReports.filter(report => report.sector === sector);
}

// Helper function to get latest earnings
export function getLatestEarnings(limit: number = 5): EarningsReport[] {
  return earningsReports
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

// Helper function to get earnings by company
export function getEarningsByCompany(company: string): EarningsReport[] {
  return earningsReports.filter(report => 
    report.company.toLowerCase() === company.toLowerCase()
  );
}
