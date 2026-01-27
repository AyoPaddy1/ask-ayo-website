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
  sector: 'Tech' | 'Sportswear' | 'Luxury';
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
  }
];

// Helper function to get earnings by sector
export function getEarningsBySector(sector: 'Tech' | 'Sportswear' | 'Luxury'): EarningsReport[] {
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
