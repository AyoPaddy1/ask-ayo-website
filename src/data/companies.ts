// Company Database for Earnings Tracking
// Based on Interbrand Top 100 Brands 2025

export interface Company {
  id: string;
  name: string;
  ticker: string;
  sector: 'Tech' | 'Automotive' | 'Consumer' | 'Luxury' | 'Financial Services' | 'Industrial';
  interbrandRank: number;
  fiscalYearEnd: string; // e.g., "December", "September"
  description: string;
}

export const companies: Company[] = [
  // Current Coverage (10 companies)
  {
    id: '01',
    name: 'Apple',
    ticker: 'AAPL',
    sector: 'Tech',
    interbrandRank: 1,
    fiscalYearEnd: 'September',
    description: 'The world\'s most valuable brand. iPhones, Services, and the China question.'
  },
  {
    id: '02',
    name: 'Microsoft',
    ticker: 'MSFT',
    sector: 'Tech',
    interbrandRank: 2,
    fiscalYearEnd: 'June',
    description: 'Cloud computing giant. Azure, Office 365, and the AI race with OpenAI.'
  },
  {
    id: '03',
    name: 'Amazon',
    ticker: 'AMZN',
    sector: 'Tech',
    interbrandRank: 3,
    fiscalYearEnd: 'December',
    description: 'E-commerce king and cloud leader. AWS prints money while retail breaks even.'
  },
  {
    id: '04',
    name: 'Google',
    ticker: 'GOOGL',
    sector: 'Tech',
    interbrandRank: 4,
    fiscalYearEnd: 'December',
    description: 'Search monopoly meets AI challenger. YouTube, Cloud, and the antitrust battles.'
  },
  {
    id: '05',
    name: 'Samsung',
    ticker: '005930.KS',
    sector: 'Tech',
    interbrandRank: 5,
    fiscalYearEnd: 'December',
    description: 'Korean tech conglomerate. Smartphones, chips, and everything in between.'
  },
  {
    id: '06',
    name: 'Toyota',
    ticker: 'TM',
    sector: 'Automotive',
    interbrandRank: 6,
    fiscalYearEnd: 'March',
    description: 'The world\'s largest automaker. Hybrids dominate while EVs lag behind.'
  },
  {
    id: '07',
    name: 'Coca-Cola',
    ticker: 'KO',
    sector: 'Consumer',
    interbrandRank: 7,
    fiscalYearEnd: 'December',
    description: 'Iconic beverage brand. Soda sales decline, but brand power endures.'
  },
  {
    id: '08',
    name: 'McDonald\'s',
    ticker: 'MCD',
    sector: 'Consumer',
    interbrandRank: 9,
    fiscalYearEnd: 'December',
    description: 'Fast food empire. Franchising model prints cash, but labor costs rise.'
  },
  {
    id: '09',
    name: 'Mercedes-Benz',
    ticker: 'MBG.DE',
    sector: 'Automotive',
    interbrandRank: 10,
    fiscalYearEnd: 'December',
    description: 'Luxury automotive leader. EVs and China slowdown pressure margins.'
  },
  {
    id: '10',
    name: 'Cisco',
    ticker: 'CSCO',
    sector: 'Tech',
    interbrandRank: 11,
    fiscalYearEnd: 'July',
    description: 'Networking infrastructure backbone. Enterprise IT spending drives growth.'
  },
  {
    id: '11',
    name: 'LVMH',
    ticker: 'MC.PA',
    sector: 'Luxury',
    interbrandRank: 12,
    fiscalYearEnd: 'December',
    description: 'Luxury empire. Louis Vuitton, Dior, and the China consumer confidence crisis.'
  },
  {
    id: '12',
    name: 'BMW',
    ticker: 'BMW.DE',
    sector: 'Automotive',
    interbrandRank: 14,
    fiscalYearEnd: 'December',
    description: 'German luxury automaker. EV transition and Chinese competition intensify.'
  },
  {
    id: '13',
    name: 'Nvidia',
    ticker: 'NVDA',
    sector: 'Tech',
    interbrandRank: 15,
    fiscalYearEnd: 'January',
    description: 'AI chip king. Data center demand is insatiable, Blackwell chips ship.'
  },
  {
    id: '14',
    name: 'Oracle',
    ticker: 'ORCL',
    sector: 'Tech',
    interbrandRank: 16,
    fiscalYearEnd: 'May',
    description: 'Enterprise database giant. Cloud transition accelerates, AI integration deepens.'
  },
  {
    id: '15',
    name: 'Disney',
    ticker: 'DIS',
    sector: 'Tech',
    interbrandRank: 17,
    fiscalYearEnd: 'September',
    description: 'Entertainment empire. Streaming profitability finally arrives, parks thrive.'
  },
  {
    id: '16',
    name: 'SAP',
    ticker: 'SAP',
    sector: 'Tech',
    interbrandRank: 18,
    fiscalYearEnd: 'December',
    description: 'Enterprise software leader. Cloud ERP transition drives recurring revenue.'
  },
  {
    id: '17',
    name: 'Meta',
    ticker: 'META',
    sector: 'Tech',
    interbrandRank: 19,
    fiscalYearEnd: 'December',
    description: 'Social media giant. Facebook, Instagram, WhatsApp, and the metaverse bet.'
  },
  {
    id: '18',
    name: 'Adobe',
    ticker: 'ADBE',
    sector: 'Tech',
    interbrandRank: 20,
    fiscalYearEnd: 'November',
    description: 'Creative software monopoly. Photoshop, AI tools, and subscription revenue.'
  },
  {
    id: '19',
    name: 'Hermès',
    ticker: 'RMS.PA',
    sector: 'Luxury',
    interbrandRank: 21,
    fiscalYearEnd: 'December',
    description: 'Ultra-luxury fashion house. Birkin bags and scarcity drive pricing power.'
  },
  {
    id: '20',
    name: 'IBM',
    ticker: 'IBM',
    sector: 'Tech',
    interbrandRank: 22,
    fiscalYearEnd: 'December',
    description: 'Legacy tech giant. Hybrid cloud and AI consulting drive transformation.'
  },
  {
    id: '21',
    name: 'Nike',
    ticker: 'NKE',
    sector: 'Consumer',
    interbrandRank: 23,
    fiscalYearEnd: 'May',
    description: 'Sportswear king. China struggles, tariffs bite, turnaround in progress.'
  },
  {
    id: '22',
    name: 'Chanel',
    ticker: 'Private',
    sector: 'Luxury',
    interbrandRank: 24,
    fiscalYearEnd: 'December',
    description: 'Private luxury powerhouse. No public earnings, but brand strength endures.'
  },
  {
    id: '23',
    name: 'Tesla',
    ticker: 'TSLA',
    sector: 'Automotive',
    interbrandRank: 25,
    fiscalYearEnd: 'December',
    description: 'EV pioneer. Deliveries decline, margins compress, robotaxi dreams persist.'
  },
  {
    id: '24',
    name: 'J.P. Morgan',
    ticker: 'JPM',
    sector: 'Financial Services',
    interbrandRank: 26,
    fiscalYearEnd: 'December',
    description: 'Banking giant. Trading revenue surges, loan growth slows, dividends flow.'
  },
  {
    id: '25',
    name: 'Netflix',
    ticker: 'NFLX',
    sector: 'Tech',
    interbrandRank: 28,
    fiscalYearEnd: 'December',
    description: 'Streaming leader. Password crackdown works, ad tier grows, content costs rise.'
  },
  {
    id: '26',
    name: 'Honda',
    ticker: 'HMC',
    sector: 'Automotive',
    interbrandRank: 29,
    fiscalYearEnd: 'March',
    description: 'Japanese automaker. Hybrids sell, EVs lag, reliability reputation holds.'
  },
  {
    id: '27',
    name: 'Hyundai',
    ticker: '005380.KS',
    sector: 'Automotive',
    interbrandRank: 30,
    fiscalYearEnd: 'December',
    description: 'Korean automaker. EV push accelerates, design wins awards, sales grow.'
  },
  {
    id: '28',
    name: 'Visa',
    ticker: 'V',
    sector: 'Financial Services',
    interbrandRank: 33,
    fiscalYearEnd: 'September',
    description: 'Payments network. Transaction volume grows, fees compound, moat widens.'
  },
  {
    id: '29',
    name: 'Sony',
    ticker: 'SONY',
    sector: 'Tech',
    interbrandRank: 34,
    fiscalYearEnd: 'March',
    description: 'Entertainment and electronics. PlayStation dominates, music streaming grows.'
  },
  {
    id: '30',
    name: 'MasterCard',
    ticker: 'MA',
    sector: 'Financial Services',
    interbrandRank: 36,
    fiscalYearEnd: 'December',
    description: 'Payments duopoly. Similar to Visa, but slightly smaller and faster growing.'
  },
  {
    id: '31',
    name: 'Pepsi',
    ticker: 'PEP',
    sector: 'Consumer',
    interbrandRank: 38,
    fiscalYearEnd: 'December',
    description: 'Beverage and snacks giant. Frito-Lay prints money, soda struggles.'
  },
  {
    id: '32',
    name: 'Zara',
    ticker: 'ITX.MC',
    sector: 'Consumer',
    interbrandRank: 41,
    fiscalYearEnd: 'January',
    description: 'Fast fashion leader. Inditex owns Zara, supply chain speed is the edge.'
  },
  {
    id: '33',
    name: 'Salesforce',
    ticker: 'CRM',
    sector: 'Tech',
    interbrandRank: 42,
    fiscalYearEnd: 'January',
    description: 'CRM software leader. Cloud subscriptions grow, AI features roll out.'
  },
  {
    id: '34',
    name: 'UNIQLO',
    ticker: '9983.T',
    sector: 'Consumer',
    interbrandRank: 47,
    fiscalYearEnd: 'August',
    description: 'Japanese apparel brand. Fast Retailing owns UNIQLO, basics dominate.'
  },
  {
    id: '35',
    name: 'Adidas',
    ticker: 'ADS.DE',
    sector: 'Consumer',
    interbrandRank: 49,
    fiscalYearEnd: 'December',
    description: 'Sportswear challenger. Samba craze continues, Yeezy chapter closes.'
  },
  {
    id: '36',
    name: 'LEGO',
    ticker: 'Private',
    sector: 'Consumer',
    interbrandRank: 50,
    fiscalYearEnd: 'December',
    description: 'Private toy empire. No public earnings, but brand loyalty is unmatched.'
  },
  {
    id: '37',
    name: 'Audi',
    ticker: 'VOW3.DE',
    sector: 'Automotive',
    interbrandRank: 52,
    fiscalYearEnd: 'December',
    description: 'Volkswagen luxury brand. EV transition and dieselgate legacy linger.'
  },
  {
    id: '38',
    name: 'Ferrari',
    ticker: 'RACE',
    sector: 'Luxury',
    interbrandRank: 54,
    fiscalYearEnd: 'December',
    description: 'Ultra-luxury automaker. Limited production, sky-high margins, waitlists.'
  },
  {
    id: '39',
    name: 'Goldman Sachs',
    ticker: 'GS',
    sector: 'Financial Services',
    interbrandRank: 55,
    fiscalYearEnd: 'December',
    description: 'Investment banking powerhouse. Trading and M&A drive revenue volatility.'
  },
  {
    id: '40',
    name: 'Porsche',
    ticker: 'P911.DE',
    sector: 'Luxury',
    interbrandRank: 57,
    fiscalYearEnd: 'December',
    description: 'Luxury sports car maker. 911 is iconic, Cayenne SUV prints cash.'
  },
  {
    id: '41',
    name: 'L\'Oréal',
    ticker: 'OR.PA',
    sector: 'Luxury',
    interbrandRank: 59,
    fiscalYearEnd: 'December',
    description: 'Beauty products giant. Makeup, skincare, and hair care across price points.'
  },
  {
    id: '42',
    name: 'GE Aerospace',
    ticker: 'GE',
    sector: 'Industrial',
    interbrandRank: 44,
    fiscalYearEnd: 'December',
    description: 'Aviation engines and services. Post-split GE focuses on aerospace.'
  },
  {
    id: '43',
    name: 'UPS',
    ticker: 'UPS',
    sector: 'Industrial',
    interbrandRank: 46,
    fiscalYearEnd: 'December',
    description: 'Logistics giant. Package volume fluctuates with e-commerce demand.'
  },
  {
    id: '44',
    name: 'Siemens',
    ticker: 'SIE.DE',
    sector: 'Industrial',
    interbrandRank: 48,
    fiscalYearEnd: 'September',
    description: 'German industrial conglomerate. Automation, energy, and infrastructure.'
  },
  {
    id: '45',
    name: 'Lululemon',
    ticker: 'LULU',
    sector: 'Consumer',
    interbrandRank: 0,
    fiscalYearEnd: 'January',
    description: 'Athleisure leader. China grows 39%, Americas slows, product newness matters.'
  },
  {
    id: '46',
    name: 'Gucci',
    ticker: 'KER.PA',
    sector: 'Luxury',
    interbrandRank: 69,
    fiscalYearEnd: 'December',
    description: 'Kering luxury brand. Sales decline, creative director changes, turnaround needed.'
  },
  {
    id: '47',
    name: 'Accenture',
    ticker: 'ACN',
    sector: 'Industrial',
    interbrandRank: 37,
    fiscalYearEnd: 'August',
    description: 'Consulting giant. Digital transformation and AI services drive growth.'
  },
  {
    id: '48',
    name: 'Qualcomm',
    ticker: 'QCOM',
    sector: 'Tech',
    interbrandRank: 39,
    fiscalYearEnd: 'September',
    description: 'Mobile chip leader. Smartphone chips and licensing revenue streams.'
  },
  {
    id: '49',
    name: 'PayPal',
    ticker: 'PYPL',
    sector: 'Financial Services',
    interbrandRank: 40,
    fiscalYearEnd: 'December',
    description: 'Digital payments platform. Venmo grows, but competition intensifies.'
  },
  {
    id: '50',
    name: 'Allianz',
    ticker: 'ALV.DE',
    sector: 'Financial Services',
    interbrandRank: 27,
    fiscalYearEnd: 'December',
    description: 'German insurance giant. Asset management and insurance premiums grow.'
  }
];

// Helper function to get company by ticker
export function getCompanyByTicker(ticker: string): Company | undefined {
  return companies.find(c => c.ticker === ticker);
}

// Helper function to get companies by sector
export function getCompaniesBySector(sector: string): Company[] {
  return companies.filter(c => c.sector === sector);
}

// Helper function to get top N companies by Interbrand rank
export function getTopCompanies(n: number): Company[] {
  return companies
    .filter(c => c.interbrandRank > 0)
    .sort((a, b) => a.interbrandRank - b.interbrandRank)
    .slice(0, n);
}
