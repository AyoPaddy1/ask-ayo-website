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
    ticker: 'OMXSTO:HM-B',
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
    ticker: 'EURONEXT:OR',
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
    name: 'Roku',
    ticker: 'ROKU',
    logo: '📺',
    domain: 'roku.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'roku',
    tagline: 'Track Roku earnings and performance'
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
    name: 'Spotify',
    ticker: 'SPOT',
    logo: '🎵',
    domain: 'spotify.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'spotify',
    tagline: 'Track Spotify earnings and performance'
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
  {
    name: 'Lucid',
    ticker: 'LCID',
    logo: '⚡',
    domain: 'lucidmotors.com',
    sector: 'Automotive',
    category: 'Automotive',
    slug: 'lucid',
    tagline: 'Luxury EV startup backed by Saudi Arabia'
  },
  {
    name: 'Lululemon',
    ticker: 'LULU',
    logo: '🧘',
    domain: 'lululemon.com',
    sector: 'Sportswear',
    category: 'Sportswear',
    slug: 'lululemon',
    tagline: 'Cult athleisure brand with loyal following'
  },
  {
    name: 'Adidas',
    ticker: 'ADDYY',
    logo: '👟',
    domain: 'adidas.com',
    sector: 'Sportswear',
    category: 'Sportswear',
    slug: 'adidas',
    tagline: 'Nike\'s main rival in global sportswear'
  },
  {
    name: 'Costco',
    ticker: 'COST',
    logo: '🛒',
    domain: 'costco.com',
    sector: 'Consumer',
    category: 'Consumer Brands',
    slug: 'costco',
    tagline: 'Cult retail following and membership model'
  },
  {
    name: 'Walmart',
    ticker: 'WMT',
    logo: '🏪',
    domain: 'walmart.com',
    sector: 'Consumer',
    category: 'Consumer Brands',
    slug: 'walmart',
    tagline: 'World\'s largest company by revenue'
  },
  {
    name: 'Chipotle',
    ticker: 'CMG',
    logo: '🌯',
    domain: 'chipotle.com',
    sector: 'Consumer',
    category: 'Consumer Brands',
    slug: 'chipotle',
    tagline: 'Fast-casual favorite with younger investors'
  },
  {
    name: 'AMD',
    ticker: 'AMD',
    logo: '💻',
    domain: 'amd.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'amd',
    tagline: 'Nvidia\'s main rival in chips and GPUs'
  },
  {
    name: 'Palantir',
    ticker: 'PLTR',
    logo: '🔮',
    domain: 'palantir.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'palantir',
    tagline: 'AI and data analytics for government and enterprise'
  },
  {
    name: 'Coinbase',
    ticker: 'COIN',
    logo: '₿',
    domain: 'coinbase.com',
    sector: 'Financial Services',
    category: 'Financial Services',
    slug: 'coinbase',
    tagline: 'Crypto exchange gateway for beginners'
  },
  {
    name: 'Berkshire Hathaway',
    ticker: 'BRK.B',
    logo: '🏦',
    domain: 'berkshirehathaway.com',
    sector: 'Financial Services',
    category: 'Financial Services',
    slug: 'berkshire-hathaway',
    tagline: 'Warren Buffett\'s legendary investment company'
  },
  {
    name: 'Uber',
    ticker: 'UBER',
    logo: '🚗',
    domain: 'uber.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'uber',
    tagline: 'Ride-sharing and food delivery leader'
  },
  {
    name: 'Qualcomm',
    ticker: 'QCOM',
    logo: '📱',
    domain: 'qualcomm.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'qualcomm',
    tagline: 'Mobile chip maker powering smartphones globally'
  },
  {
    name: 'Snap',
    ticker: 'SNAP',
    logo: '👻',
    domain: 'snap.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'snap',
    tagline: 'Snapchat parent company, AR and AI innovator'
  },
  {
    name: 'Pinterest',
    ticker: 'PINS',
    logo: '📌',
    domain: 'pinterest.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'pinterest',
    tagline: 'Visual discovery platform with e-commerce integration'
  },
  {
    name: 'Reddit',
    ticker: 'RDDT',
    logo: '🤖',
    domain: 'reddit.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'reddit',
    tagline: 'The front page of the internet and retail investor hub'
  },
  {
    name: 'Robinhood',
    ticker: 'HOOD',
    logo: '🏹',
    domain: 'robinhood.com',
    sector: 'Financial Services',
    category: 'Financial Services',
    slug: 'robinhood',
    tagline: 'Commission-free trading platform for beginners'
  },
  {
    name: 'DoorDash',
    ticker: 'DASH',
    logo: '🍔',
    domain: 'doordash.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'doordash',
    tagline: 'Food delivery leader used daily by millions'
  },
  {
    name: 'Shopify',
    ticker: 'SHOP',
    logo: '🛍️',
    domain: 'shopify.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'shopify',
    tagline: 'E-commerce platform powering millions of businesses'
  },
  {
    name: 'Block',
    ticker: 'SQ',
    logo: '⬛',
    domain: 'block.xyz',
    sector: 'Financial Services',
    category: 'Financial Services',
    slug: 'block',
    tagline: 'Cash App and Square parent, fintech innovator'
  },
  {
    name: 'Rivian',
    ticker: 'RIVN',
    logo: '🚙',
    domain: 'rivian.com',
    sector: 'Automotive',
    category: 'Automotive',
    slug: 'rivian',
    tagline: 'Electric vehicle startup backed by Amazon'
  },
  {
    name: 'Etsy',
    ticker: 'ETSY',
    logo: '🎨',
    domain: 'etsy.com',
    sector: 'Consumer',
    category: 'Consumer Brands',
    slug: 'etsy',
    tagline: 'Handmade and vintage marketplace with loyal community'
  },
  {
    name: 'Dell',
    ticker: 'DELL',
    logo: '💻',
    domain: 'dell.com',
    sector: 'Tech',
    category: 'Tech Giants',
    slug: 'dell',
    tagline: 'PC and enterprise technology solutions'
  },
  {
    name: 'Target',
    ticker: 'TGT',
    logo: '🎯',
    domain: 'target.com',
    sector: 'Consumer',
    category: 'Consumer Brands',
    slug: 'target',
    tagline: 'Retail icon and popular dividend stock for beginners'
  }
];
