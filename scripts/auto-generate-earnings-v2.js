#!/usr/bin/env node

/**
 * Improved Automated Earnings Article Generator (V2)
 * Uses Perplexity API for real-time research with web search
 * 
 * Usage:
 *   node scripts/auto-generate-earnings-v2.js <brand> <ticker> <quarter> <year> <type> <earnings-date>
 * 
 * Example:
 *   node scripts/auto-generate-earnings-v2.js "Apple" "AAPL" "Q1" "FY2026" "results" "2026-01-29"
 */

import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Perplexity client for research (uses OpenAI SDK with custom base URL)
const perplexity = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: 'https://api.perplexity.ai'
});

// Initialize OpenAI client for article generation
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Parse arguments
const [brand, ticker, quarter, year, type, earningsDate] = process.argv.slice(2);

if (!brand || !ticker || !quarter || !year || !type || !earningsDate) {
  console.error('Usage: node auto-generate-earnings-v2.js <brand> <ticker> <quarter> <year> <type> <earnings-date>');
  console.error('Example: node auto-generate-earnings-v2.js "Apple" "AAPL" "Q1" "FY2026" "results" "2026-01-29"');
  process.exit(1);
}

if (type !== 'preview' && type !== 'results') {
  console.error('Type must be either "preview" or "results"');
  process.exit(1);
}

console.log(`\n🤖 Automated Earnings Article Generator V2\n`);
console.log(`📊 Company: ${brand} (${ticker})`);
console.log(`📅 Quarter: ${quarter} ${year}`);
console.log(`📝 Type: ${type}`);
console.log(`🗓️  Earnings Date: ${earningsDate}\n`);

async function generateArticle() {
  try {
    // Step 1: Research Phase with Perplexity (Web Search)
    console.log('🔍 Step 1: Researching earnings data with web search...');
    
    const researchPrompt = type === 'results' 
      ? `Find the official ${brand} (${ticker}) ${quarter} ${year} earnings results from ${earningsDate}. I need:

1. EXACT NUMBERS from official press release:
   - Total revenue (actual vs expected)
   - EPS (actual vs expected)
   - Segment revenue breakdown (iPhone, Services, Mac, iPad, etc.)
   - Geographic performance (especially China)
   - Gross margin
   - Operating cash flow

2. CEO/CFO quotes from the earnings call or press release

3. Key highlights and lowlights from the quarter

4. Forward guidance (if provided)

5. Analyst reactions and stock performance

CRITICAL: Only use data from official sources (${brand} press release, CNBC, Bloomberg, Reuters, Fortune, WSJ). Cite your sources.`
      : `Research ${brand} (${ticker}) ${quarter} ${year} earnings preview. I need:

1. Analyst expectations:
   - Revenue estimate (consensus)
   - EPS estimate (consensus)
   - Key metrics to watch

2. Previous quarter's performance (for context)

3. Recent company news and strategic initiatives (last 30-60 days)

4. Key questions investors are asking

5. Competitive context and industry trends

CRITICAL: Only use recent data from credible sources. Cite your sources.`;

    console.log('   Calling Perplexity API for web-based research...');
    const researchResponse = await perplexity.chat.completions.create({
      model: 'llama-3.1-sonar-large-128k-online',
      messages: [
        {
          role: 'system',
          content: 'You are a financial research analyst. Always cite your sources and use only official, verified data from press releases and credible financial news outlets.'
        },
        {
          role: 'user',
          content: researchPrompt
        }
      ]
    });

    const researchData = researchResponse.choices[0].message.content;
    console.log('   ✅ Research complete with web sources\n');

    // Save research data for review
    const researchFilePath = path.join(__dirname, '..', `${brand.toLowerCase()}-${quarter.toLowerCase()}-${year.toLowerCase()}-${type}-research.md`);
    fs.writeFileSync(researchFilePath, `# ${brand} ${quarter} ${year} ${type} Research\n\n${researchData}`);
    console.log(`   📄 Research saved to: ${researchFilePath}\n`);

    // Step 2: Generate Article
    console.log('✍️  Step 2: Generating article...');
    
    const articlePrompt = `You are a financial writer for Ask AYO, writing in the distinctive "Oatly tone" - plain English, data-focused, slightly irreverent but never dismissive.

Write a ${type} article for ${brand} (${ticker}) ${quarter} ${year} earnings based on this VERIFIED RESEARCH DATA:

${researchData}

CRITICAL REQUIREMENTS:
1. USE ONLY THE EXACT NUMBERS from the research above
2. DO NOT make up or estimate any financial figures
3. If a number is not in the research, say "not disclosed" instead of guessing
4. Cite sources at the end of the article

STYLE GUIDELINES (Oatly Tone):
- Use plain English, not corporate jargon
- Be data-focused with specific numbers
- Slightly irreverent but respectful
- Explain complex concepts simply
- Focus on the real story behind the numbers
- Make it engaging and readable

STRUCTURE:
1. Compelling headline with a key question or tension
2. Strong lede (2-3 paragraphs) that sets up the main story
3. Section on ${type === 'results' ? 'the numbers and what they mean' : 'recent performance context'}
4. Section on ${type === 'results' ? 'strategic moves and what they signal' : 'what the numbers will tell us'}
5. Section on ${type === 'results' ? 'forward guidance and outlook' : 'strategic initiatives and portfolio'}
6. Section on ${type === 'results' ? 'the bottom line' : 'what to expect'}
7. Add "**Sources:**" section at the end listing all sources used

EXAMPLES OF GOOD OATLY TONE:
- "Making more money while selling less stuff" (for premiumization)
- "The volume drought" (for sluggish unit case growth)
- "Pricing magic trick" (for sustained pricing power)

Write a complete article of approximately 1200-1500 words. Use markdown formatting with ## for section headers.

Title format: "${brand} ${quarter} ${year} Earnings ${type === 'preview' ? 'Preview' : 'Results'}: [Compelling Question or Tension]"`;

    console.log('   Calling OpenAI API for article generation...');
    const articleResponse = await openai.chat.completions.create({
      model: 'gpt-4.1-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a financial writer for Ask AYO. Write in the Oatly tone: plain English, data-focused, slightly irreverent. Make complex financial topics accessible and engaging. NEVER fabricate numbers - only use data from the provided research.'
        },
        {
          role: 'user',
          content: articlePrompt
        }
      ],
      temperature: 0.7,
      max_tokens: 3000
    });

    const articleContent = articleResponse.choices[0].message.content;
    console.log('   ✅ Article generated\n');

    // Step 3: Extract metadata
    console.log('📋 Step 3: Extracting metadata...');
    
    const titleMatch = articleContent.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : `${brand} ${quarter} ${year} Earnings ${type === 'preview' ? 'Preview' : 'Results'}`;
    
    const slug = `${brand.toLowerCase()}-${quarter.toLowerCase()}-${year.toLowerCase()}-${type}`.replace(/[^a-z0-9-]/g, '-');
    
    // Extract first paragraph as description
    const paragraphs = articleContent.split('\n\n').filter(p => !p.startsWith('#') && p.trim().length > 50);
    const description = paragraphs[0]?.substring(0, 200) + '...' || `${brand} ${quarter} ${year} earnings ${type}`;
    
    // Count words for read time
    const wordCount = articleContent.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);
    
    console.log('   ✅ Metadata extracted\n');

    // Step 4: Save files
    console.log('💾 Step 4: Saving files...');
    
    // Save article markdown
    const articlePath = path.join(__dirname, '..', 'public', 'content', 'earnings', `${slug}.md`);
    fs.writeFileSync(articlePath, articleContent);
    console.log(`   ✅ Saved: ${articlePath}`);
    
    // Save research data
    const researchPath = path.join(__dirname, '..', `${slug}-research.md`);
    fs.writeFileSync(researchPath, `# ${brand} ${quarter} ${year} ${type} Research\n\n${researchData}`);
    console.log(`   ✅ Saved: ${researchPath}`);

    // Step 5: Update earnings.ts
    console.log('\n📝 Step 5: Updating earnings.ts...');
    console.log('   ⚠️  Manual step required: Add this entry to src/data/earnings.ts:');
    console.log('\n' + '-'.repeat(80));
    console.log(`  {
    id: '[NEXT_ID]',
    company: '${brand}',
    ticker: '${ticker}',
    quarter: '${quarter}',
    fiscalYear: '${year}',
    title: '${title}',
    description: '${description.replace(/'/g, "\\'")}',
    date: '${new Date(earningsDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}',
    readTime: '${readTime} min read',
    sector: 'Tech',
    slug: '${slug}',
    status: '${type}',
    keywords: ['${brand}', '${ticker}', '${quarter}', '${year}', 'earnings ${type}'],
    revenue: {
      actual: 'TBD',
      expected: 'TBD',
      beat: false
    },
    eps: {
      actual: 'TBD',
      expected: 'TBD',
      beat: false
    }
  }`);
    console.log('-'.repeat(80) + '\n');

    console.log('✅ Article Generation Complete!\n');
    console.log(`📄 Article Details:`);
    console.log(`   Title: ${title}`);
    console.log(`   Slug: ${slug}`);
    console.log(`   Word Count: ${wordCount}`);
    console.log(`   Read Time: ${readTime} min`);
    console.log(`\n📂 Files Created:`);
    console.log(`   Article: ${articlePath}`);
    console.log(`   Research: ${researchPath}`);
    console.log(`\n🚀 Next Steps:`);
    console.log(`   1. Review the generated article`);
    console.log(`   2. Verify all numbers against official sources`);
    console.log(`   3. Add the entry to src/data/earnings.ts`);
    console.log(`   4. Run: npm run deploy`);
    console.log(`   5. Article will be live at ask-ayo.com in ~2 minutes\n`);

  } catch (error) {
    console.error('❌ Error generating article:', error.message);
    process.exit(1);
  }
}

generateArticle();
