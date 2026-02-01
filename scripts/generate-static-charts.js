/**
 * Daily Static Chart Generator
 * 
 * Generates static chart images for all brands once per day to avoid rate limits.
 * Run via cron: 0 0 * * * (midnight daily)
 * 
 * API Usage: 59 brands × 1 call = 59/800 daily limit (7.4% usage)
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Import brands from TypeScript file (will need to be compiled or use dynamic import)
const TWELVE_DATA_API_KEY = process.env.TWELVE_DATA_API_KEY || 'demo';

// Chart configuration
const CHART_CONFIG = {
  interval: '1day',
  outputsize: 90, // 90 days of data
  format: 'JSON'
};

// Static list of brands with tickers (sync with brands.ts)
const BRANDS = [
  { slug: 'accenture', ticker: 'ACN' },
  { slug: 'adobe', ticker: 'ADBE' },
  { slug: 'airbnb', ticker: 'ABNB' },
  { slug: 'allianz', ticker: 'ALV.DE' },
  { slug: 'amazon', ticker: 'AMZN' },
  { slug: 'american-express', ticker: 'AXP' },
  { slug: 'apple', ticker: 'AAPL' },
  { slug: 'audi', ticker: 'VOW3.DE' },
  { slug: 'bmw', ticker: 'BMW.DE' },
  { slug: 'canon', ticker: 'CAJ' },
  { slug: 'cisco', ticker: 'CSCO' },
  { slug: 'coca-cola', ticker: 'KO' },
  { slug: 'disney', ticker: 'DIS' },
  { slug: 'google', ticker: 'GOOGL' },
  { slug: 'gucci', ticker: 'KER.PA' },
  { slug: 'hm', ticker: 'HM-B.ST' },
  { slug: 'hermes', ticker: 'RMS.PA' },
  { slug: 'honda', ticker: 'HMC' },
  { slug: 'hyundai', ticker: '005380.KS' },
  { slug: 'ibm', ticker: 'IBM' },
  { slug: 'intel', ticker: 'INTC' },
  { slug: 'jp-morgan', ticker: 'JPM' },
  { slug: 'loreal', ticker: 'OR.PA' },
  { slug: 'lvmh', ticker: 'MC.PA' },
  { slug: 'mcdonalds', ticker: 'MCD' },
  { slug: 'mercedes-benz', ticker: 'MBG.DE' },
  { slug: 'meta', ticker: 'META' },
  { slug: 'microsoft', ticker: 'MSFT' },
  { slug: 'nvidia', ticker: 'NVDA' },
  { slug: 'nescafe', ticker: 'NSRGY' },
  { slug: 'netflix', ticker: 'NFLX' },
  { slug: 'nike', ticker: 'NKE' },
  { slug: 'oracle', ticker: 'ORCL' },
  { slug: 'pepsi', ticker: 'PEP' },
  { slug: 'philips', ticker: 'PHIA.AS' },
  { slug: 'porsche', ticker: 'P911.DE' },
  { slug: 'sap', ticker: 'SAP' },
  { slug: 'salesforce', ticker: 'CRM' },
  { slug: 'samsung', ticker: '005930.KS' },
  { slug: 'siemens', ticker: 'SIE.DE' },
  { slug: 'starbucks', ticker: 'SBUX' },
  { slug: 'tesla', ticker: 'TSLA' },
  { slug: 'toyota', ticker: 'TM' },
  { slug: 'ups', ticker: 'UPS' },
  { slug: 'zara', ticker: 'ITX.MC' },
  { slug: 'ebay', ticker: 'EBAY' },
  { slug: 'lucid', ticker: 'LCID' },
  { slug: 'lululemon', ticker: 'LULU' },
  { slug: 'adidas', ticker: 'ADDYY' },
  { slug: 'costco', ticker: 'COST' },
  { slug: 'walmart', ticker: 'WMT' },
  { slug: 'chipotle', ticker: 'CMG' },
  { slug: 'amd', ticker: 'AMD' },
  { slug: 'palantir', ticker: 'PLTR' },
  { slug: 'coinbase', ticker: 'COIN' },
  { slug: 'berkshire-hathaway', ticker: 'BRK.B' },
  { slug: 'uber', ticker: 'UBER' },
  { slug: 'qualcomm', ticker: 'QCOM' },
  { slug: 'snap', ticker: 'SNAP' },
  { slug: 'pinterest', ticker: 'PINS' },
  { slug: 'reddit', ticker: 'RDDT' },
  { slug: 'robinhood', ticker: 'HOOD' },
  { slug: 'doordash', ticker: 'DASH' },
  { slug: 'shopify', ticker: 'SHOP' },
  { slug: 'block', ticker: 'SQ' },
  { slug: 'rivian', ticker: 'RIVN' },
  { slug: 'etsy', ticker: 'ETSY' },
  { slug: 'dell', ticker: 'DELL' },
  { slug: 'target', ticker: 'TGT' }
];

const OUTPUT_DIR = path.join(__dirname, '../public/charts');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Fetch time series data from Twelve Data API
 */
function fetchChartData(ticker) {
  return new Promise((resolve, reject) => {
    const url = `https://api.twelvedata.com/time_series?symbol=${ticker}&interval=${CHART_CONFIG.interval}&outputsize=${CHART_CONFIG.outputsize}&apikey=${TWELVE_DATA_API_KEY}`;
    
    https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.status === 'error') {
            reject(new Error(`API Error for ${ticker}: ${json.message}`));
          } else {
            resolve(json);
          }
        } catch (err) {
          reject(err);
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Generate chart data JSON file for a brand
 */
async function generateChartForBrand(brand) {
  try {
    console.log(`Fetching data for ${brand.slug} (${brand.ticker})...`);
    
    const data = await fetchChartData(brand.ticker);
    
    // Save raw data to JSON file
    const outputPath = path.join(OUTPUT_DIR, `${brand.slug}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    
    console.log(`✅ Generated chart data for ${brand.slug}`);
    return { success: true, brand: brand.slug };
  } catch (error) {
    console.error(`❌ Failed to generate chart for ${brand.slug}: ${error.message}`);
    return { success: false, brand: brand.slug, error: error.message };
  }
}

/**
 * Main execution with rate limiting
 */
async function main() {
  console.log(`Starting daily chart generation for ${BRANDS.length} brands...`);
  console.log(`Output directory: ${OUTPUT_DIR}`);
  console.log(`API calls: ${BRANDS.length}/800 daily limit (${(BRANDS.length/800*100).toFixed(1)}% usage)\n`);
  
  const results = [];
  
  // Process brands with rate limiting (8 requests per minute = 7.5s delay)
  for (let i = 0; i < BRANDS.length; i++) {
    const brand = BRANDS[i];
    const result = await generateChartForBrand(brand);
    results.push(result);
    
    // Rate limiting: wait 8 seconds between requests (7.5 requests/minute)
    if (i < BRANDS.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 8000));
    }
  }
  
  // Summary
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  
  console.log(`\n=== SUMMARY ===`);
  console.log(`✅ Successful: ${successful}/${BRANDS.length}`);
  console.log(`❌ Failed: ${failed}/${BRANDS.length}`);
  
  if (failed > 0) {
    console.log(`\nFailed brands:`);
    results.filter(r => !r.success).forEach(r => {
      console.log(`  - ${r.brand}: ${r.error}`);
    });
  }
  
  // Write metadata
  const metadata = {
    generated: new Date().toISOString(),
    totalBrands: BRANDS.length,
    successful,
    failed,
    results
  };
  
  fs.writeFileSync(
    path.join(OUTPUT_DIR, '_metadata.json'),
    JSON.stringify(metadata, null, 2)
  );
  
  console.log(`\nMetadata saved to ${path.join(OUTPUT_DIR, '_metadata.json')}`);
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { generateChartForBrand, BRANDS };
