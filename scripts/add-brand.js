#!/usr/bin/env node

/**
 * Brand Addition Automation Script
 * 
 * Usage: node scripts/add-brand.js
 * 
 * This script automates the process of adding a new brand to the Investing section.
 * It prompts for brand details and generates all necessary files.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function main() {
  console.log('\n🚀 Brand Addition Automation\n');

  // Collect brand information
  const name = await question('Brand name (e.g., Microsoft): ');
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  const ticker = await question('Stock ticker (e.g., MSFT): ');
  const sector = await question('Sector (Tech/Consumer/Luxury/Automotive/Sportswear/Entertainment): ');
  const tagline = await question('Tagline (e.g., "The cloud that runs everything"): ');
  const irUrl = await question('Investor Relations URL: ');

  // Generate brand data
  const brandData = {
    id: slug,
    name: name,
    slug: slug,
    ticker: ticker,
    sector: sector,
    logo: name.charAt(0), // First letter for logo
    tagline: tagline,
    irUrl: irUrl
  };

  console.log('\n📝 Brand data generated:');
  console.log(JSON.stringify(brandData, null, 2));

  const confirm = await question('\nAdd this brand? (yes/no): ');

  if (confirm.toLowerCase() !== 'yes') {
    console.log('❌ Cancelled');
    rl.close();
    return;
  }

  // Read brands.ts file
  const brandsPath = path.join(__dirname, '../src/data/brands.ts');
  let brandsContent = fs.readFileSync(brandsPath, 'utf8');

  // Add brand to the array (before the closing bracket)
  const brandEntry = `  {
    id: '${brandData.id}',
    name: '${brandData.name}',
    slug: '${brandData.slug}',
    ticker: '${brandData.ticker}',
    sector: '${brandData.sector}',
    logo: '${brandData.logo}',
    tagline: '${brandData.tagline}',
    irUrl: '${brandData.irUrl}',
  },`;

  // Find the last brand entry and add after it
  const lastBrandIndex = brandsContent.lastIndexOf('  },');
  if (lastBrandIndex !== -1) {
    brandsContent = 
      brandsContent.slice(0, lastBrandIndex + 4) + 
      '\n' + brandEntry + 
      brandsContent.slice(lastBrandIndex + 4);
  }

  // Write back to file
  fs.writeFileSync(brandsPath, brandsContent);

  console.log(`\n✅ Brand "${name}" added successfully!`);
  console.log(`\n📋 Next steps:`);
  console.log(`1. Create earnings articles for ${name}`);
  console.log(`2. Update sitemap.xml with /investing/${slug}`);
  console.log(`3. Build and deploy: pnpm build && pnpm deploy`);

  rl.close();
}

main().catch(console.error);
