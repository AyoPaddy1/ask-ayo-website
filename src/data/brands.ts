export interface Brand {
  name: string;
  ticker: string;
  logo: string;
  domain: string;
  sector: 'Tech' | 'Sportswear' | 'Luxury' | 'Automotive' | 'Consumer' | 'Financial Services' | 'Industrial';
  category: 'Tech Giants' | 'Sportswear' | 'Luxury' | 'Automotive' | 'Consumer Brands' | 'Financial Services' | 'Industrial';
  slug: string;
  tagline: string;
}

export const brands: Brand[] = [
  {
    name: 'Accenture',
    ticker: 'ACN',
    logo: '💼',
    domain: 'accenture.com',
    sector: 'Industrial',
    category: 'Industrial',
    slug: 'accenture',
    tagline: 'Track Accenture earnings and performance'
  },
  {
    name: 'Adobe',
    ticker: 'ADBE',
    logo: '🎨',
    domain: 'adobe.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'adobe',
    tagline: 'Track Adobe earnings and performance'
  },
  {
    name: 'Airbnb',
    ticker: 'ABNB',
    logo: '🏠',
    domain: 'airbnb.com',
    sector: 'Consumer',
    category: 'Consumer Brands',
    slug: 'airbnb',
    tagline: 'Track Airbnb earnings and performance'
  },
  {
    name: 'Allianz',
    ticker: 'ALV.DE',
    logo: '🛡️',
    domain: 'allianz.com',
    sector: 'Financial Services',
    category: 'Financial Services',
    slug: 'allianz',
    tagline: 'Track Allianz earnings and performance'
  },
  {
    name: 'Amazon',
    ticker: 'AMZN',
    logo: '📦',
    domain: 'amazon.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'amazon',
    tagline: 'Track Amazon earnings and performance'
  },
  {
    name: 'American Express',
    ticker: 'AXP',
    logo: '💳',
    domain: 'americanexpress.com',
    sector: 'Financial Services',
    category: 'Financial Services',
    slug: 'american-express',
    tagline: 'Track American Express earnings and performance'
  },
  {
    name: 'Apple',
    ticker: 'AAPL',
    logo: '🍎',
    domain: 'apple.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'apple',
    tagline: 'Track Apple earnings and performance'
  },
  {
    name: 'Audi',
    ticker: 'VOW3.DE',
    logo: '🔴',
    domain: 'audi.com',
    sector: 'Automotive',
    category: 'Automotive',
    slug: 'audi',
    tagline: 'Track Audi earnings and performance'
  },
  {
    name: 'BMW',
    ticker: 'BMW.DE',
    logo: '🏁',
    domain: 'bmw.com',
    sector: 'Automotive',
    category: 'Automotive',
    slug: 'bmw',
    tagline: 'Track BMW earnings and performance'
  },
  {
    name: 'Canon',
    ticker: 'CAJ',
    logo: '📷',
    domain: 'canon.com',
    sector: 'Industrial',
    category: 'Industrial',
    slug: 'canon',
    tagline: 'Track Canon earnings and performance'
  },
  {
    name: 'Cisco',
    ticker: 'CSCO',
    logo: '🌐',
    domain: 'cisco.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'cisco',
    tagline: 'Track Cisco earnings and performance'
  },
  {
    name: 'Coca-Cola',
    ticker: 'KO',
    logo: '🥤',
    domain: 'pepsi.com',
    sector: 'Consumer',
    category: 'Consumer Brands',
    slug: 'coca-cola',
    tagline: 'Track Coca-Cola earnings and performance'
  },
  {
    name: 'Disney',
    ticker: 'DIS',
    logo: '🏰',
    domain: 'disney.com',
    sector: 'Consumer',
    category: 'Consumer Brands',
    slug: 'disney',
    tagline: 'Track Disney earnings and performance'
  },
  {
    name: 'Google',
    ticker: 'GOOGL',
    logo: '🔍',
    domain: 'google.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'google',
    tagline: 'Track Google earnings and performance'
  },
  {
    name: 'Gucci',
    ticker: 'KER.PA',
    logo: '💎',
    domain: 'gucci.com',
    sector: 'Luxury',
    category: 'Luxury',
    slug: 'gucci',
    tagline: 'Track Gucci earnings and performance'
  },
  {
    name: 'H&M',
    ticker: 'HM-B.ST',
    logo: '👔',
    domain: 'hm.com',
    sector: 'Consumer',
    category: 'Consumer Brands',
    slug: 'hm',
    tagline: 'Track H&M earnings and performance'
  },
  {
    name: 'Hermès',
    ticker: 'RMS.PA',
    logo: '👜',
    domain: 'hermes.com',
    sector: 'Luxury',
    category: 'Luxury',
    slug: 'hermes',
    tagline: 'Track Hermès earnings and performance'
  },
  {
    name: 'Honda',
    ticker: 'HMC',
    logo: '🏍️',
    domain: 'honda.com',
    sector: 'Automotive',
    category: 'Automotive',
    slug: 'honda',
    tagline: 'Track Honda earnings and performance'
  },
  {
    name: 'Hyundai',
    ticker: '005380.KS',
    logo: '🚙',
    domain: 'hyundai.com',
    sector: 'Automotive',
    category: 'Automotive',
    slug: 'hyundai',
    tagline: 'Track Hyundai earnings and performance'
  },
  {
    name: 'IBM',
    ticker: 'IBM',
    logo: '💼',
    domain: 'ibm.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'ibm',
    tagline: 'Track IBM earnings and performance'
  },
  {
    name: 'Intel',
    ticker: 'INTC',
    logo: '🔷',
    domain: 'intel.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'intel',
    tagline: 'Track Intel earnings and performance'
  },
  {
    name: 'J.P. Morgan',
    ticker: 'JPM',
    logo: '🏦',
    domain: 'jpmorgan.com',
    sector: 'Consumer',
    category: 'Consumer Brands',
    slug: 'jp-morgan',
    tagline: 'Track J.P. Morgan earnings and performance'
  },
  {
    name: "L'Oréal",
    ticker: 'OR.PA',
    logo: '💅',
    domain: 'loreal.com',
    sector: 'Luxury',
    category: 'Consumer Brands',
    slug: 'loreal',
    tagline: "Track L'Oréal earnings and performance"
  },
  {
    name: 'LVMH',
    ticker: 'MC.PA',
    logo: '👜',
    domain: 'lvmh.com',
    sector: 'Luxury',
    category: 'Luxury',
    slug: 'lvmh',
    tagline: 'Track LVMH earnings and performance'
  },
  {
    name: "McDonald's",
    ticker: 'MCD',
    logo: '🍔',
    domain: 'mcdonalds.com',
    sector: 'Consumer',
    category: 'Consumer Brands',
    slug: 'mcdonalds',
    tagline: "Track McDonald's earnings and performance"
  },
  {
    name: 'Mercedes-Benz',
    ticker: 'MBG.DE',
    logo: '⭐',
    domain: 'mercedes-benz.com',
    sector: 'Automotive',
    category: 'Automotive',
    slug: 'mercedes-benz',
    tagline: 'Track Mercedes-Benz earnings and performance'
  },
  {
    name: 'Meta',
    ticker: 'META',
    logo: '👥',
    domain: 'meta.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'meta',
    tagline: 'Track Meta earnings and performance'
  },
  {
    name: 'Microsoft',
    ticker: 'MSFT',
    logo: '🪟',
    domain: 'microsoft.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'microsoft',
    tagline: 'Track Microsoft earnings and performance'
  },
  {
    name: 'NVIDIA',
    ticker: 'NVDA',
    logo: '🎮',
    domain: 'nvidia.com',
    sector: 'Consumer',
    category: 'Consumer Brands',
    slug: 'nvidia',
    tagline: 'Track NVIDIA earnings and performance'
  },
  {
    name: 'Nescafé',
    ticker: 'NSRGY',
    logo: '☕',
    domain: 'nescafe.com',
    sector: 'Consumer',
    category: 'Consumer Brands',
    slug: 'nescafe',
    tagline: 'Track Nescafé earnings and performance'
  },
  {
    name: 'Netflix',
    ticker: 'NFLX',
    logo: '🎬',
    domain: 'netflix.com',
    sector: 'Consumer',
    category: 'Tech Giants',
    slug: 'netflix',
    tagline: 'Track Netflix earnings and performance'
  },
  {
    name: 'Nike',
    ticker: 'NKE',
    logo: '👟',
    domain: 'nike.com',
    sector: 'Sportswear',
    category: 'Sportswear',
    slug: 'nike',
    tagline: 'Track Nike earnings and performance'
  },
  {
    name: 'Oracle',
    ticker: 'ORCL',
    logo: '🔴',
    domain: 'oracle.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'oracle',
    tagline: 'Track Oracle earnings and performance'
  },
  {
    name: 'Pepsi',
    ticker: 'PEP',
    logo: '🥤',
    domain: 'pepsi.com',
    sector: 'Consumer',
    category: 'Consumer Brands',
    slug: 'pepsi',
    tagline: 'Track Pepsi earnings and performance'
  },
  {
    name: 'Philips',
    ticker: 'PHIA.AS',
    logo: '💡',
    domain: 'philips.com',
    sector: 'Industrial',
    category: 'Industrial',
    slug: 'philips',
    tagline: 'Track Philips earnings and performance'
  },
  {
    name: 'Porsche',
    ticker: 'P911.DE',
    logo: '🏎️',
    domain: 'porsche.com',
    sector: 'Automotive',
    category: 'Automotive',
    slug: 'porsche',
    tagline: 'Track Porsche earnings and performance'
  },
  {
    name: 'SAP',
    ticker: 'SAP',
    logo: '📊',
    domain: 'sap.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'sap',
    tagline: 'Track SAP earnings and performance'
  },
  {
    name: 'Salesforce',
    ticker: 'CRM',
    logo: '☁️',
    domain: 'salesforce.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'salesforce',
    tagline: 'Track Salesforce earnings and performance'
  },
  {
    name: 'Samsung',
    ticker: '005930.KS',
    logo: '📱',
    domain: 'samsung.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'samsung',
    tagline: 'Track Samsung earnings and performance'
  },
  {
    name: 'Siemens',
    ticker: 'SIE.DE',
    logo: '⚙️',
    domain: 'siemens.com',
    sector: 'Industrial',
    category: 'Industrial',
    slug: 'siemens',
    tagline: 'Track Siemens earnings and performance'
  },
  {
    name: 'Starbucks',
    ticker: 'SBUX',
    logo: '☕',
    domain: 'starbucks.com',
    sector: 'Consumer',
    category: 'Consumer Brands',
    slug: 'starbucks',
    tagline: 'Track Starbucks earnings and performance'
  },
  {
    name: 'Tesla',
    ticker: 'TSLA',
    logo: '⚡',
    domain: 'tesla.com',
    sector: 'Automotive',
    category: 'Automotive',
    slug: 'tesla',
    tagline: 'Track Tesla earnings and performance'
  },
  {
    name: 'Toyota',
    ticker: 'TM',
    logo: '🚗',
    domain: 'toyota.com',
    sector: 'Automotive',
    category: 'Automotive',
    slug: 'toyota',
    tagline: 'Track Toyota earnings and performance'
  },
  {
    name: 'UPS',
    ticker: 'UPS',
    logo: '📦',
    domain: 'ups.com',
    sector: 'Industrial',
    category: 'Industrial',
    slug: 'ups',
    tagline: 'Track UPS earnings and performance'
  },
  {
    name: 'Zara',
    ticker: 'ITX.MC',
    logo: '👗',
    domain: 'zara.com',
    sector: 'Consumer',
    category: 'Consumer Brands',
    slug: 'zara',
    tagline: 'Track Zara earnings and performance'
  },
  {
    name: 'eBay',
    ticker: 'EBAY',
    logo: '🛒',
    domain: 'ebay.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'ebay',
    tagline: 'Track eBay earnings and performance'
  },
];
