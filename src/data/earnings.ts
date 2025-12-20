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
