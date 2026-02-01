/**
 * HTML Fallback Parser for Earnings Data
 * 
 * When Perplexity API fails to extract earnings data, this module
 * fetches the source URL directly and parses HTML for key metrics.
 */

const cheerio = require('cheerio');

/**
 * Fetch and parse earnings data from HTML press release
 */
async function parseEarningsFromHTML(sourceURL, company, quarter, fiscalYear) {
  console.log(`\n🔧 Fallback: Parsing HTML directly from ${sourceURL}...`);
  
  try {
    const response = await fetch(sourceURL);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const html = await response.text();
    const $ = cheerio.load(html);
    
    // Extract all text content
    const fullText = $('body').text();
    
    // Patterns for revenue extraction
    const revenuePatterns = [
      // "$143.8 billion" or "€22.7 billion"
      /(?:revenue|revenues?|sales).*?[\$€£](\d+\.?\d*)\s*billion/i,
      // "Revenue of $143.8B"
      /revenue.*?[\$€£](\d+\.?\d*)\s*[bB]/i,
      // "Total revenue: $143.8 billion"
      /total\s+revenue.*?[\$€£](\d+\.?\d*)\s*billion/i,
      // In tables: "$143.8" with "billion" nearby
      /[\$€£](\d+\.?\d*)\s*(?:billion)?.*?revenue/i
    ];
    
    // Patterns for EPS extraction
    const epsPatterns = [
      // "EPS of $2.84" or "earnings per share of $2.84"
      /(?:EPS|earnings per share).*?[\$€£](\d+\.?\d*)/i,
      // "Diluted EPS: $2.84"
      /diluted.*?(?:EPS|earnings per share).*?[\$€£](\d+\.?\d*)/i,
      // "$2.84 per share"
      /[\$€£](\d+\.?\d*)\s*per\s*share/i
    ];
    
    // Patterns for YoY change
    const yoyPatterns = [
      // "up 16%" or "increased 16%" or "+16%"
      /(?:up|increased?|rose|grew|growth of)\s+(\d+)%/i,
      /\+(\d+)%/,
      // "down 8%" or "decreased 8%" or "-8%"
      /(?:down|decreased?|declined?|fell)\s+(\d+)%/i,
      /-(\d+)%/
    ];
    
    let revenue = null;
    let eps = null;
    let revenueYoY = null;
    let epsYoY = null;
    
    // Try to extract revenue
    for (const pattern of revenuePatterns) {
      const match = fullText.match(pattern);
      if (match) {
        revenue = parseFloat(match[1]);
        console.log(`   Found revenue: $${revenue}B`);
        
        // Look for YoY change near the revenue mention
        const contextStart = Math.max(0, match.index - 200);
        const contextEnd = Math.min(fullText.length, match.index + 200);
        const context = fullText.substring(contextStart, contextEnd);
        
        for (const yoyPattern of yoyPatterns) {
          const yoyMatch = context.match(yoyPattern);
          if (yoyMatch) {
            const percentage = yoyMatch[1];
            const isNegative = context.substring(yoyMatch.index - 50, yoyMatch.index).match(/down|decreased?|declined?|fell|-/i);
            revenueYoY = isNegative ? `-${percentage}%` : `+${percentage}%`;
            console.log(`   Found revenue YoY: ${revenueYoY}`);
            break;
          }
        }
        break;
      }
    }
    
    // Try to extract EPS
    for (const pattern of epsPatterns) {
      const match = fullText.match(pattern);
      if (match) {
        eps = parseFloat(match[1]);
        console.log(`   Found EPS: $${eps}`);
        
        // Look for YoY change near the EPS mention
        const contextStart = Math.max(0, match.index - 200);
        const contextEnd = Math.min(fullText.length, match.index + 200);
        const context = fullText.substring(contextStart, contextEnd);
        
        for (const yoyPattern of yoyPatterns) {
          const yoyMatch = context.match(yoyPattern);
          if (yoyMatch) {
            const percentage = yoyMatch[1];
            const isNegative = context.substring(yoyMatch.index - 50, yoyMatch.index).match(/down|decreased?|declined?|fell|-/i);
            epsYoY = isNegative ? `-${percentage}%` : `+${percentage}%`;
            console.log(`   Found EPS YoY: ${epsYoY}`);
            break;
          }
        }
        break;
      }
    }
    
    // Try to extract segment/geographic data
    const segments = [];
    const geographic = [];
    
    // Look for "Greater China" or similar geographic mentions
    const chinaMatch = fullText.match(/(?:Greater\s+)?China.*?(?:revenue|sales).*?[\$€£]?(\d+\.?\d*)\s*(?:billion)?.*?(?:up|down|increased?|decreased?)\s*(\d+)%/i);
    if (chinaMatch) {
      geographic.push({
        region: 'Greater China',
        revenue: chinaMatch[1] ? parseFloat(chinaMatch[1]) : null,
        yoyChange: chinaMatch[2] ? (chinaMatch[0].match(/down|decreased?|declined?/i) ? `-${chinaMatch[2]}%` : `+${chinaMatch[2]}%`) : null
      });
    }
    
    // If we found at least revenue or EPS, return the data
    if (revenue || eps) {
      console.log(`✅ HTML parsing successful`);
      return {
        company,
        ticker: null, // Will be filled by caller
        quarter,
        fiscalYear,
        reportDate: null, // Will be filled by caller
        source: sourceURL,
        metrics: {
          revenue: {
            actual: revenue,
            unit: 'billion USD', // Assume USD unless detected otherwise
            yoyChange: revenueYoY
          },
          eps: {
            actual: eps,
            unit: 'USD',
            yoyChange: epsYoY
          },
          segments: segments.length > 0 ? segments : null,
          geographic: geographic.length > 0 ? geographic : null,
          guidance: {
            nextQuarter: null,
            notes: null
          }
        },
        citations: [sourceURL],
        fetchedAt: new Date().toISOString(),
        extractionMethod: 'HTML_FALLBACK'
      };
    } else {
      console.log(`❌ HTML parsing failed: Could not find revenue or EPS`);
      return null;
    }
    
  } catch (error) {
    console.error(`❌ HTML parsing error: ${error.message}`);
    return null;
  }
}

module.exports = { parseEarningsFromHTML };
