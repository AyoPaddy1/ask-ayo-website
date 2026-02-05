import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import data files
import { brands } from '../src/data/brands.ts';
import { earningsReports } from '../src/data/earnings.ts';

const BASE_URL = 'https://www.ask-ayo.com';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

// Static pages
const staticPages = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/investing', changefreq: 'daily', priority: 0.9 },
  { url: '/news', changefreq: 'monthly', priority: 0.7 },
  { url: '/work', changefreq: 'monthly', priority: 0.7 },
  { url: '/your-money', changefreq: 'monthly', priority: 0.7 },
  { url: '/privacy', changefreq: 'yearly', priority: 0.3 },
  { url: '/terms', changefreq: 'yearly', priority: 0.3 },
];

// Generate XML for a single URL
function generateUrlEntry(loc, lastmod = CURRENT_DATE, changefreq = 'monthly', priority = 0.5) {
  return `  <url>
    <loc>${BASE_URL}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

// Generate sitemap for static pages
function generateStaticSitemap() {
  const urls = staticPages.map(page => 
    generateUrlEntry(page.url, CURRENT_DATE, page.changefreq, page.priority)
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

// Generate sitemap for brand pages
function generateBrandsSitemap() {
  const urls = brands.map(brand => 
    generateUrlEntry(`/investing/${brand.slug}`, CURRENT_DATE, 'weekly', 0.8)
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

// Generate sitemap for earnings articles
function generateEarningsSitemap() {
  const urls = earningsReports.map(article => {
    const brand = brands.find(b => b.ticker === article.ticker);
    if (!brand) return null;
    
    const lastmod = article.publishedDate || CURRENT_DATE;
    return generateUrlEntry(
      `/investing/${brand.slug}/earnings/${article.slug}`,
      lastmod,
      'monthly',
      0.7
    );
  }).filter(Boolean).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

// Generate sitemap index
function generateSitemapIndex() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap-static.xml</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-brands.xml</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-earnings.xml</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
  </sitemap>
</sitemapindex>`;
}

// Main execution
function generateAllSitemaps() {
  const publicDir = path.join(__dirname, '../public');

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Generate and write all sitemaps
  fs.writeFileSync(path.join(publicDir, 'sitemap-static.xml'), generateStaticSitemap());
  fs.writeFileSync(path.join(publicDir, 'sitemap-brands.xml'), generateBrandsSitemap());
  fs.writeFileSync(path.join(publicDir, 'sitemap-earnings.xml'), generateEarningsSitemap());
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), generateSitemapIndex());

  console.log('✅ Sitemaps generated successfully!');
  console.log(`   - sitemap.xml (index)`);
  console.log(`   - sitemap-static.xml (${staticPages.length} pages)`);
  console.log(`   - sitemap-brands.xml (${brands.length} brands)`);
  console.log(`   - sitemap-earnings.xml (${earningsReports.length} articles)`);
}

// Run the generator
generateAllSitemaps();
