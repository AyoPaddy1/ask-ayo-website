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
