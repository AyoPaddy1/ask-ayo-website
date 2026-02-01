#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Import brands and earnings data
const brandsPath = path.join(__dirname, '../src/data/brands.ts');
const earningsPath = path.join(__dirname, '../src/data/earnings.ts');

// Read and parse brands
const brandsContent = fs.readFileSync(brandsPath, 'utf8');
const brandSlugs = [...brandsContent.matchAll(/slug: '([^']+)'/g)].map(m => m[1]);

// Read and parse earnings
const earningsContent = fs.readFileSync(earningsPath, 'utf8');
const earningsData = [];
// Match company and slug fields
const earningsMatches = [...earningsContent.matchAll(/company: '([^']+)'[\s\S]*?slug: '([^']+)'/g)];
earningsMatches.forEach(match => {
  const company = match[1];
  const slug = match[2];
  // Convert company name to brand slug (lowercase, replace spaces with hyphens)
  const brandSlug = company.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
  earningsData.push({
    slug: slug,
    brandSlug: brandSlug
  });
});

// Get current date
const today = new Date().toISOString().split('T')[0];

// Build sitemap XML
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://ask-ayo.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Investing Directory -->
  <url>
    <loc>https://ask-ayo.com/investing</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Use Case Pages -->
  <url>
    <loc>https://ask-ayo.com/news</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ask-ayo.com/work</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ask-ayo.com/your-money</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Brand Pages -->
`;

brandSlugs.forEach(slug => {
  sitemap += `  <url>
    <loc>https://ask-ayo.com/investing/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
});

sitemap += `  
  <!-- Earnings Articles -->
`;

earningsData.forEach(({ slug, brandSlug }) => {
  sitemap += `  <url>
    <loc>https://ask-ayo.com/investing/${brandSlug}/earnings/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
});

sitemap += `  
  <!-- Blog Pages (Legacy) -->
  <url>
    <loc>https://ask-ayo.com/blog</loc>
    <lastmod>2024-12-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://ask-ayo.com/blog/what-does-ebitda-mean</loc>
    <lastmod>2024-12-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://ask-ayo.com/blog/what-is-pe-ratio</loc>
    <lastmod>2024-12-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://ask-ayo.com/blog/understanding-market-cap</loc>
    <lastmod>2024-12-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://ask-ayo.com/blog/what-is-roi</loc>
    <lastmod>2024-12-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://ask-ayo.com/blog/what-is-dividend-yield</loc>
    <lastmod>2024-12-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://ask-ayo.com/blog/bull-market-vs-bear-market</loc>
    <lastmod>2024-12-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://ask-ayo.com/blog/what-are-blue-chip-stocks</loc>
    <lastmod>2024-12-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://ask-ayo.com/blog/what-is-an-ipo</loc>
    <lastmod>2024-12-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;

// Write sitemap
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);

// Count URLs
const urlCount = (sitemap.match(/<url>/g) || []).length;
console.log(`✅ Sitemap generated with ${urlCount} URLs`);
console.log(`   - ${brandSlugs.length} brand pages`);
console.log(`   - ${earningsData.length} earnings articles`);
console.log(`   - 12 static pages (homepage, investing, use cases, blog posts)`);
console.log(`📝 Sitemap saved to: ${sitemapPath}`);
