/**
 * Convert brand ticker to TradingView symbol format
 * 
 * TradingView uses EXCHANGE:TICKER format for non-US stocks
 * Examples:
 * - AAPL → AAPL (US stocks don't need exchange prefix)
 * - BMW.DE → XETR:BMW (German stocks on Xetra)
 * - MC.PA → EURONEXT:MC (French stocks on Euronext Paris)
 * - 005930.KS → KRX:005930 (Korean stocks on Korea Exchange)
 */

export function getTradingViewSymbol(ticker: string): string {
  // US stocks - no exchange prefix needed
  if (!ticker.includes('.')) {
    return ticker;
  }

  // Extract ticker and exchange suffix
  const [symbol, exchange] = ticker.split('.');

  // Map exchange suffixes to TradingView exchange codes
  const exchangeMap: Record<string, string> = {
    // European exchanges
    'DE': 'XETR',        // Germany (Xetra)
    'PA': 'EURONEXT',    // France (Euronext Paris)
    'AS': 'EURONEXT',    // Netherlands (Euronext Amsterdam)
    'MI': 'MIL',         // Italy (Milan)
    'MC': 'BME',         // Spain (Madrid)
    'SW': 'SIX',         // Switzerland (SIX Swiss Exchange)
    'L': 'LSE',          // UK (London Stock Exchange)
    'ST': 'STO',         // Sweden (Stockholm)
    'CO': 'CPH',         // Denmark (Copenhagen)
    'OL': 'OSE',         // Norway (Oslo)
    'HE': 'OMXH',        // Finland (Helsinki)
    
    // Asian exchanges
    'KS': 'KRX',         // South Korea (Korea Exchange)
    'T': 'TSE',          // Japan (Tokyo Stock Exchange)
    'HK': 'HKEX',        // Hong Kong
    'SS': 'SSE',         // China (Shanghai)
    'SZ': 'SZSE',        // China (Shenzhen)
    'SI': 'SGX',         // Singapore
    'TW': 'TWSE',        // Taiwan
    'BO': 'BSE',         // India (Bombay)
    'NS': 'NSE',         // India (National)
    
    // Other exchanges
    'TO': 'TSX',         // Canada (Toronto)
    'AX': 'ASX',         // Australia (Sydney)
    'NZ': 'NZX',         // New Zealand
    'SA': 'BCBA',        // Argentina (Buenos Aires)
    'MX': 'BMV',         // Mexico
  };

  const tradingViewExchange = exchangeMap[exchange];
  
  if (!tradingViewExchange) {
    console.warn(`Unknown exchange suffix: ${exchange} for ticker ${ticker}`);
    return ticker; // Return original if we don't recognize the exchange
  }

  return `${tradingViewExchange}:${symbol}`;
}

/**
 * Get a human-readable exchange name
 */
export function getExchangeName(ticker: string): string {
  if (!ticker.includes('.')) {
    return 'NASDAQ/NYSE';
  }

  const exchange = ticker.split('.')[1];
  
  const exchangeNames: Record<string, string> = {
    'DE': 'Xetra (Germany)',
    'PA': 'Euronext Paris',
    'AS': 'Euronext Amsterdam',
    'MI': 'Milan Stock Exchange',
    'MC': 'Madrid Stock Exchange',
    'SW': 'SIX Swiss Exchange',
    'L': 'London Stock Exchange',
    'ST': 'Stockholm Stock Exchange',
    'CO': 'Copenhagen Stock Exchange',
    'OL': 'Oslo Stock Exchange',
    'HE': 'Helsinki Stock Exchange',
    'KS': 'Korea Exchange',
    'T': 'Tokyo Stock Exchange',
    'HK': 'Hong Kong Stock Exchange',
    'SS': 'Shanghai Stock Exchange',
    'SZ': 'Shenzhen Stock Exchange',
    'SI': 'Singapore Exchange',
    'TW': 'Taiwan Stock Exchange',
    'BO': 'Bombay Stock Exchange',
    'NS': 'National Stock Exchange (India)',
    'TO': 'Toronto Stock Exchange',
    'AX': 'Australian Securities Exchange',
    'NZ': 'New Zealand Exchange',
    'SA': 'Buenos Aires Stock Exchange',
    'MX': 'Mexican Stock Exchange',
  };

  return exchangeNames[exchange] || `${exchange} Exchange`;
}
