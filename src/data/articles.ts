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
  },
  {
    id: '04',
    title: 'What is ROI? A Simple Guide to Return on Investment',
    description: 'Learn what ROI means, how to calculate it, and how to use it to make better financial decisions. Includes examples and comparisons with other metrics.',
    date: 'January 3, 2026',
    readTime: '6 min read',
    category: 'Financial Metrics',
    slug: 'what-is-roi',
    keywords: ['ROI', 'return on investment', 'profitability', 'investing', 'financial metrics']
  },
  {
    id: '05',
    title: 'What is Dividend Yield? A Beginner\'s Guide to Earning Income from Stocks',
    description: 'Discover what dividend yield means, how to calculate it, and how to find great dividend-paying stocks. Complete guide for income investors.',
    date: 'January 3, 2026',
    readTime: '5 min read',
    category: 'Stock Valuation',
    slug: 'what-is-dividend-yield',
    keywords: ['dividend yield', 'dividends', 'income investing', 'stock valuation', 'passive income']
  },
  {
    id: '06',
    title: 'Bull Market vs Bear Market: What\'s the Difference?',
    description: 'Learn the difference between bull and bear markets, what causes them, and how investors should respond to each market condition.',
    date: 'January 5, 2026',
    readTime: '7 min read',
    category: 'Market Trends',
    slug: 'bull-market-vs-bear-market',
    keywords: ['bull market', 'bear market', 'market trends', 'investing', 'stock market']
  },
  {
    id: '07',
    title: 'What Are Blue Chip Stocks? A Guide for Conservative Investors',
    description: 'Discover what blue chip stocks are, why they\'re popular with conservative investors, and how to identify quality blue chip companies.',
    date: 'January 5, 2026',
    readTime: '6 min read',
    category: 'Stock Basics',
    slug: 'blue-chip-stocks',
    keywords: ['blue chip stocks', 'conservative investing', 'dividend stocks', 'stock basics', 'investing']
  },
  {
    id: '08',
    title: 'What Is an IPO? A Complete Guide to Initial Public Offerings',
    description: 'Learn what an IPO is, how the IPO process works, and what investors should know before investing in newly public companies.',
    date: 'January 5, 2026',
    readTime: '8 min read',
    category: 'Stock Basics',
    slug: 'what-is-ipo',
    keywords: ['IPO', 'initial public offering', 'going public', 'stock market', 'investing']
  }
];
