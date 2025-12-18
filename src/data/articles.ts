export interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  keywords: string[];
}

export const articles: Article[] = [
  {
    id: '01',
    title: 'What Does EBITDA Mean? A Complete Guide for Investors',
    description: 'Learn what EBITDA means, how to calculate it, and why companies use this important financial metric. Plain English explanations with real examples.',
    date: 'December 18, 2024',
    readTime: '8 min read',
    category: 'Financial Metrics',
    slug: 'what-does-ebitda-mean',
    keywords: ['EBITDA', 'earnings', 'financial metrics', 'profitability', 'investing']
  },
  {
    id: '02',
    title: 'What Is P/E Ratio? Understanding Price-to-Earnings for Stock Valuation',
    description: 'Discover what P/E ratio means, how to use it for stock valuation, and when it\'s useful (or misleading). Complete guide with examples.',
    date: 'December 18, 2024',
    readTime: '7 min read',
    category: 'Stock Valuation',
    slug: 'what-is-pe-ratio',
    keywords: ['P/E ratio', 'price to earnings', 'stock valuation', 'investing', 'financial ratios']
  },
  {
    id: '03',
    title: 'Understanding Market Cap: What It Means and Why It Matters',
    description: 'Learn what market capitalization means, how it\'s calculated, and why it matters for investors. Includes examples of large-cap, mid-cap, and small-cap stocks.',
    date: 'December 18, 2024',
    readTime: '6 min read',
    category: 'Stock Basics',
    slug: 'understanding-market-cap',
    keywords: ['market cap', 'market capitalization', 'stock size', 'investing', 'company valuation']
  }
];
