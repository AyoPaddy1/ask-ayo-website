#!/usr/bin/env node

/**
 * Bulletproof Earnings Automation System
 * 
 * Layer 1: Automated Data Collection (Perplexity API)
 * Layer 2: AI Narrative Generation (OpenAI GPT)
 * Layer 3: Automated Fact-Check
 * Layer 4: Human Review (Required)
 * Layer 5: Deploy with Audit Trail
 */

const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1'
});

// Perplexity API key
const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;

if (!PERPLEXITY_API_KEY) {
  console.error('❌ Error: PERPLEXITY_API_KEY environment variable is not set');
  console.error('Please set it with: export PERPLEXITY_API_KEY="your-key-here"');
  process.exit(1);
}

/**
 * Layer 1: Fetch earnings data from official sources using Perplexity API
 */
async function fetchEarningsDataAutomated(company, ticker, quarter, fiscalYear) {
  console.log(`\n🔍 Layer 1: Fetching earnings data for ${company} ${quarter} ${fiscalYear}...`);
  
  const prompt = `Find the official earnings press release for ${company} (ticker: ${ticker}) ${quarter} ${fiscalYear}.

CRITICAL: Return ONLY the data for ${quarter} ${fiscalYear}, NOT full-year results.
For example, if searching for "Q4 2025", return Q4 revenue only, not full-year 2025 revenue.
If the company reports full-year results, calculate or extract the specific quarter data.

Return ONLY data from the official company investor relations page or SEC filing.

Extract and return in JSON format:
{
  "company": "${company}",
  "ticker": "${ticker}",
  "quarter": "${quarter}",
  "fiscalYear": "${fiscalYear}",
  "reportDate": "YYYY-MM-DD",
  "source": "URL of official press release",
  "metrics": {
    "revenue": {
      "actual": number in billions,
      "unit": "billion USD" or "billion EUR",
      "yoyChange": "percentage as string like +16%"
    },
    "eps": {
      "actual": number,
      "unit": "USD" or "EUR",
      "yoyChange": "percentage as string"
    },
    "segments": [
      {"name": "segment name", "revenue": number or null, "yoyChange": "percentage"}
    ],
    "geographic": [
      {"region": "region name", "revenue": number or null, "yoyChange": "percentage"}
    ],
    "guidance": {
      "nextQuarter": "guidance text or null",
      "notes": "additional notes or null"
    }
  }
}

IMPORTANT:
- Do NOT estimate, approximate, or calculate if the exact quarterly data is not explicitly stated
- Do NOT use full-year data as a substitute for quarterly data
- If a data point is not in the press release for this specific quarter, return null
- Return ONLY valid JSON, no additional text or explanation

If you cannot find the specific quarterly earnings data, return null for revenue and EPS.`;

  try {
    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${PERPLEXITY_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'sonar',
        messages: [{
          role: 'user',
          content: prompt
        }],
        temperature: 0.0 // Deterministic for factual data
      })
    });

    if (!response.ok) {
      throw new Error(`Perplexity API error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    const content = result.choices[0].message.content;
    
    // Extract JSON from response (might be wrapped in markdown code blocks)
    let jsonMatch = content.match(/```json\n([\s\S]*?)\n```/);
    if (!jsonMatch) {
      jsonMatch = content.match(/\{[\s\S]*\}/);
    }
    
    if (!jsonMatch) {
      throw new Error('Could not extract JSON from Perplexity response');
    }
    
    const data = JSON.parse(jsonMatch[0].replace(/```json\n|```/g, ''));
    
    // Add Perplexity citations if available
    if (result.citations) {
      data.citations = result.citations;
    }
    
    data.fetchedAt = new Date().toISOString();
    
    // Validate required fields (Priority 1 Fix)
    if (!data.metrics || !data.metrics.revenue || !data.metrics.eps) {
      throw new Error(`Missing required data structure for ${company} ${quarter} ${fiscalYear}`);
    }
    
    // CRITICAL: Check if revenue or EPS are null or suspicious (Layer 2 Fallback)
    const hasRevenue = data.metrics.revenue.actual !== null && data.metrics.revenue.actual !== undefined;
    const hasEPS = data.metrics.eps.actual !== null && data.metrics.eps.actual !== undefined;
    
    // Check if quarterly revenue is suspiciously high (likely full-year data)
    const revenueSeemsWrong = quarter && quarter.startsWith('Q') && data.metrics.revenue.actual > 100;
    
    if (!hasRevenue || !hasEPS || revenueSeemsWrong) {
      if (revenueSeemsWrong) {
        console.log(`⚠️  Revenue of $${data.metrics.revenue.actual}B seems too high for ${quarter} (likely full-year data)`);
      }
      console.log(`⚠️  Perplexity extraction incomplete (Revenue: ${hasRevenue ? 'OK' : 'NULL'}, EPS: ${hasEPS ? 'OK' : 'NULL'})`);
      
      // Try HTML fallback if we have a source URL
      if (data.source && data.source !== null && data.source !== 'null') {
        console.log(`🔧 Attempting HTML fallback parsing...`);
        const { parseEarningsFromHTML } = require('./html-earnings-parser.js');
        const fallbackData = await parseEarningsFromHTML(data.source, company, quarter, fiscalYear);
        
        if (fallbackData && fallbackData.metrics) {
          // Merge fallback data with Perplexity data
          if (!hasRevenue && fallbackData.metrics.revenue.actual) {
            data.metrics.revenue = fallbackData.metrics.revenue;
            console.log(`✅ Revenue recovered from HTML: $${data.metrics.revenue.actual}B`);
          }
          if (!hasEPS && fallbackData.metrics.eps.actual) {
            data.metrics.eps = fallbackData.metrics.eps;
            console.log(`✅ EPS recovered from HTML: $${data.metrics.eps.actual}`);
          }
          data.extractionMethod = 'PERPLEXITY_WITH_HTML_FALLBACK';
        }
      }
      
      // Final check after fallback attempt
      if (data.metrics.revenue.actual === null || data.metrics.revenue.actual === undefined) {
        throw new Error(`Revenue data not found for ${company} ${quarter} ${fiscalYear}. Earnings may not be reported yet.`);
      }
      if (data.metrics.eps.actual === null || data.metrics.eps.actual === undefined) {
        throw new Error(`EPS data not found for ${company} ${quarter} ${fiscalYear}. Earnings may not be reported yet.`);
      }
    }
    
    // Validate source URL exists
    if (!data.source || data.source === null || data.source === 'null') {
      throw new Error(`No official source found for ${company} ${quarter} ${fiscalYear}. Cannot verify data.`);
    }
    
    // CRITICAL: Validate report date matches requested fiscal year
    if (data.reportDate && fiscalYear) {
      const reportYear = new Date(data.reportDate).getFullYear();
      const reportMonth = new Date(data.reportDate).getMonth() + 1; // 1-12
      
      // Parse requested year (handle both FY2026 and 2026 formats)
      let requestedYear = fiscalYear.replace('FY', '');
      if (requestedYear.length === 2) {
        requestedYear = '20' + requestedYear; // Convert 26 to 2026
      }
      requestedYear = parseInt(requestedYear);
      
      // For fiscal years, Q1-Q3 are reported in the same calendar year
      // Q4 is reported in the following calendar year (e.g., Q4 FY2025 reported in Jan 2026)
      // So FY2026 reports can be dated 2025 (Q1-Q3) or 2026 (Q4)
      const yearDiff = Math.abs(reportYear - requestedYear);
      
      // Allow report dates within 1 year of requested fiscal year
      // (e.g., FY2026 can have reports dated 2025 or 2026)
      if (yearDiff > 1) {
        throw new Error(`Report date (${data.reportDate}) does not match requested fiscal year (${fiscalYear}). Found data from ${reportYear}, but ${fiscalYear} was requested. This earnings report may not have been released yet.`);
      }
      
      // Additional check: If report date is more than 3 months in the future, abort
      const reportDate = new Date(data.reportDate);
      const today = new Date();
      const threeMonthsFromNow = new Date(today.getTime() + (90 * 24 * 60 * 60 * 1000));
      
      if (reportDate > threeMonthsFromNow) {
        throw new Error(`Report date (${data.reportDate}) is more than 3 months in the future. Earnings for ${fiscalYear} have not been reported yet.`);
      }
    }
    
    // Check if source URL contains "full-year" or "annual" when quarter is requested
    if (quarter && quarter.startsWith('Q')) {
      if (data.source.match(/full-year|annual|yearly|fy-?\d{4}/i)) {
        throw new Error(`Source URL contains full-year data but ${quarter} was requested. ${company} may not report quarterly earnings separately. Source: ${data.source}`);
      }
    }
    
    if (!data.source || (!data.source.includes('investor') && !data.source.includes('sec.gov') && !data.source.includes('ir.'))) {
      console.log('⚠️  WARNING: Source URL does not appear to be an official investor relations page');
      console.log(`   Source: ${data.source}`);
    }
    
    // Priority 4: Sanity checks for data ranges
    const revenue = data.metrics.revenue.actual;
    const eps = data.metrics.eps.actual;
    
    // Check if quarterly revenue seems too high (likely full-year data)
    if (quarter && quarter.startsWith('Q') && revenue > 100) {
      console.log(`⚠️  WARNING: ${quarter} revenue of $${revenue}B seems unusually high for a single quarter`);
      console.log(`   This might be full-year data instead of quarterly data.`);
      console.log(`   Expected range for quarterly revenue: $1B - $100B`);
      console.log(`   Please verify manually before deploying.`);
    }
    
    // Check if EPS is within reasonable range
    if (eps < -20 || eps > 100) {
      console.log(`⚠️  WARNING: EPS of $${eps} is outside typical range (-$20 to $100)`);
      console.log(`   Please verify this is correct before deploying.`);
    }
    
    // Check if revenue is suspiciously low (might be missing data)
    if (revenue < 0.1) {
      console.log(`⚠️  WARNING: Revenue of $${revenue}B seems unusually low`);
      console.log(`   Please verify this is correct (not in millions instead of billions).`);
    }
    
    console.log(`✅ Data fetched successfully from: ${data.source}`);
    console.log(`   Revenue: ${data.metrics.revenue.actual}B ${data.metrics.revenue.yoyChange}`);
    console.log(`   EPS: $${data.metrics.eps.actual} ${data.metrics.eps.yoyChange}`);
    
    // Save research file for audit trail
    const researchDir = path.join(__dirname, '../research');
    if (!fs.existsSync(researchDir)) {
      fs.mkdirSync(researchDir, { recursive: true });
    }
    
    const researchFile = path.join(researchDir, `${ticker}-${quarter}-${fiscalYear}-research.json`);
    fs.writeFileSync(researchFile, JSON.stringify(data, null, 2));
    console.log(`📁 Research data saved to: ${researchFile}`);
    
    return data;
    
  } catch (error) {
    console.error(`❌ Error fetching earnings data: ${error.message}`);
    throw error;
  }
}

/**
 * Layer 2: Generate article narrative using verified data
 */
async function generateArticleNarrative(data) {
  console.log(`\n✍️  Layer 2: Generating article narrative...`);
  
  const prompt = `You are a financial journalist writing for AYO, a Gen Z-friendly financial education platform.

VERIFIED EARNINGS DATA (USE ONLY THIS DATA):
${JSON.stringify(data, null, 2)}

Write a comprehensive earnings results article (800-1000 words) with this structure:

1. **Opening paragraph**: Lead with the headline numbers (revenue, EPS) and whether they beat/missed expectations. Set the tone based on the results.

2. **Revenue breakdown**: Analyze revenue by segment and geography. Highlight growth areas and problem spots.

3. **Profitability & margins**: Discuss EPS, gross margin, operating margin if available.

4. **Key narrative**: What's the story? (e.g., China comeback, product cycle, competitive pressure)

5. **Forward guidance**: What did management say about the future?

6. **Investor takeaway**: What should investors know before buying/selling?

CRITICAL RULES:
- Use ONLY the numbers provided in the verified data above
- Do NOT make up or estimate any numbers
- If a data point is null, do not mention specific figures for that metric
- Maintain a professional but accessible tone (avoid jargon, explain concepts)
- Include context and analysis, not just numbers
- Be objective - praise wins, acknowledge challenges

Return ONLY the article content in markdown format, starting with the title as # heading.`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4.1-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a financial journalist. Use ONLY provided verified data. Do NOT make up numbers.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7, // Creative for narrative, but grounded in data
      max_tokens: 2000
    });

    const article = response.choices[0].message.content;
    console.log(`✅ Article generated (${article.length} characters)`);
    
    return article;
    
  } catch (error) {
    console.error(`❌ Error generating article: ${error.message}`);
    throw error;
  }
}

/**
 * Layer 3: Automated fact-check - verify numbers in article match source data
 */
function factCheckArticle(article, data) {
  console.log(`\n🔍 Layer 3: Fact-checking article...`);
  
  const errors = [];
  
  // Extract key numbers from verified data
  const expectedRevenue = data.metrics.revenue.actual;
  const expectedEPS = data.metrics.eps.actual;
  
  // Check if revenue appears in article
  const revenueRegex = new RegExp(`\\$?${expectedRevenue}[\\s]*billion`, 'i');
  if (!revenueRegex.test(article)) {
    errors.push(`Revenue figure $${expectedRevenue}B not found in article`);
  }
  
  // Check if EPS appears in article
  const epsRegex = new RegExp(`\\$?${expectedEPS}`, 'i');
  if (!epsRegex.test(article)) {
    errors.push(`EPS figure $${expectedEPS} not found in article`);
  }
  
  // Check for common hallucination patterns
  const suspiciousPatterns = [
    /\$\d+\.\d+[BM]?\s+\(estimated\)/i,
    /approximately \$\d+/i,
    /around \$\d+/i,
    /roughly \$\d+/i
  ];
  
  suspiciousPatterns.forEach(pattern => {
    if (pattern.test(article)) {
      errors.push(`Suspicious wording detected: ${pattern.toString()} - may indicate estimation`);
    }
  });
  
  if (errors.length === 0) {
    console.log(`✅ Fact-check passed - all key numbers verified`);
    return { passed: true, errors: [] };
  } else {
    console.log(`⚠️  Fact-check warnings:`);
    errors.forEach(err => console.log(`   - ${err}`));
    return { passed: false, errors };
  }
}

/**
 * Main automation function
 */
async function generateEarningsArticle(company, ticker, quarter, fiscalYear, type = 'results') {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`🚀 BULLETPROOF EARNINGS AUTOMATION`);
  console.log(`   Company: ${company} (${ticker})`);
  console.log(`   Period: ${quarter} ${fiscalYear}`);
  console.log(`   Type: ${type}`);
  console.log(`${'='.repeat(60)}`);
  
  try {
    // Layer 1: Fetch verified data
    const data = await fetchEarningsDataAutomated(company, ticker, quarter, fiscalYear);
    
    // Layer 2: Generate article
    const article = await generateArticleNarrative(data);
    
    // Layer 3: Fact-check
    const factCheck = factCheckArticle(article, data);
    
    // Save article with metadata
    const slug = `${ticker.toLowerCase()}-${quarter.toLowerCase()}-${fiscalYear.toLowerCase()}-${type}`;
    const articlePath = path.join(__dirname, '../public/content/earnings', `${slug}.md`);
    
    // Ensure directory exists
    const dir = path.dirname(articlePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Add metadata header
    const metadata = `---
company: ${company}
ticker: ${ticker}
quarter: ${quarter}
fiscalYear: ${fiscalYear}
type: ${type}
reportDate: ${data.reportDate}
source: ${data.source}
generatedAt: ${new Date().toISOString()}
factCheckPassed: ${factCheck.passed}
---

`;
    
    fs.writeFileSync(articlePath, metadata + article);
    console.log(`\n📄 Article saved to: ${articlePath}`);
    
    // Layer 4: Human review required
    console.log(`\n${'='.repeat(60)}`);
    console.log(`⚠️  LAYER 4: HUMAN REVIEW REQUIRED`);
    console.log(`${'='.repeat(60)}`);
    console.log(`\n✅ Article generated successfully!`);
    console.log(`\n📋 REVIEW CHECKLIST:`);
    console.log(`   1. Verify revenue: $${data.metrics.revenue.actual}B ${data.metrics.revenue.yoyChange}`);
    console.log(`   2. Verify EPS: $${data.metrics.eps.actual} ${data.metrics.eps.yoyChange}`);
    console.log(`   3. Check source: ${data.source}`);
    console.log(`   4. Read article for tone and accuracy`);
    console.log(`   5. Approve or reject for deployment`);
    console.log(`\n📁 Files:`);
    console.log(`   Article: ${articlePath}`);
    console.log(`   Research: ${path.join(__dirname, '../research', `${ticker}-${quarter}-${fiscalYear}-research.json`)}`);
    
    if (!factCheck.passed) {
      console.log(`\n⚠️  FACT-CHECK WARNINGS:`);
      factCheck.errors.forEach(err => console.log(`   - ${err}`));
      console.log(`\n   Please review carefully before deploying.`);
    }
    
    console.log(`\n${'='.repeat(60)}\n`);
    
    return {
      success: true,
      articlePath,
      data,
      factCheck
    };
    
  } catch (error) {
    console.error(`\n❌ AUTOMATION FAILED: ${error.message}`);
    console.error(`\n   Falling back to manual process.`);
    console.error(`   Please manually input earnings data.\n`);
    
    return {
      success: false,
      error: error.message
    };
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length < 4) {
    console.log(`
Usage: node bulletproof-earnings-automation.js <company> <ticker> <quarter> <fiscalYear> [type]

Examples:
  node bulletproof-earnings-automation.js "Apple" "AAPL" "Q1" "FY2026" "results"
  node bulletproof-earnings-automation.js "Nike" "NKE" "Q2" "FY2026" "results"
  node bulletproof-earnings-automation.js "LVMH" "MC.PA" "Q4" "2025" "results"

Arguments:
  company     Company name (e.g., "Apple")
  ticker      Stock ticker (e.g., "AAPL")
  quarter     Quarter (e.g., "Q1", "Q2", "Q3", "Q4")
  fiscalYear  Fiscal year (e.g., "FY2026", "2025")
  type        Article type: "results" or "preview" (default: "results")
`);
    process.exit(1);
  }
  
  const [company, ticker, quarter, fiscalYear, type = 'results'] = args;
  
  generateEarningsArticle(company, ticker, quarter, fiscalYear, type)
    .then(result => {
      process.exit(result.success ? 0 : 1);
    })
    .catch(error => {
      console.error(`Fatal error: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { generateEarningsArticle, fetchEarningsDataAutomated };
