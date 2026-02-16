/**
 * Pre-rendering script for Ask AYO website
 * 
 * Runs after `vite build` to generate static HTML snapshots of every route.
 * Uses Puppeteer to load each page in a headless browser and capture the
 * fully-rendered HTML including react-helmet-async injected head tags.
 */

import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import handler from 'serve-handler';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DIST_DIR = join(__dirname, '..', 'dist');

// Import route data
import { brands } from '../src/data/brands.ts';
import { articles } from '../src/data/articles.ts';
import { earningsReports } from '../src/data/earnings.ts';

// Build the full list of routes to pre-render
function getAllRoutes() {
  const routes = [
    '/',
    '/blog',
    '/investing',
    '/news',
    '/work',
    '/your-money',
  ];

  for (const article of articles) {
    routes.push(`/blog/${article.slug}`);
  }

  for (const brand of brands) {
    routes.push(`/investing/${brand.slug}`);
  }

  for (const report of earningsReports) {
    const brand = brands.find(b => b.ticker === report.ticker);
    if (brand) {
      routes.push(`/investing/${brand.slug}/earnings/${report.slug}`);
    }
  }

  return routes;
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();
  
  // Block images/fonts/media to speed up rendering
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const type = req.resourceType();
    if (['image', 'font', 'media'].includes(type)) {
      req.abort();
    } else {
      req.continue();
    }
  });

  const url = `http://localhost:3456${route}`;
  await page.goto(url, { 
    waitUntil: 'networkidle0',
    timeout: 30000 
  });

  // Wait for React to render content into #root
  await page.waitForSelector('#root > *', { timeout: 10000 }).catch(() => {});
  
  // Wait for react-helmet-async to inject tags into <head>
  // Poll for data-rh attributes which indicate Helmet has run
  await page.waitForFunction(
    () => document.querySelectorAll('[data-rh]').length > 0,
    { timeout: 5000 }
  ).catch(() => {
    // Some pages may not use Helmet directly - that's OK
  });

  // Extra safety wait for any remaining async rendering
  await new Promise(r => setTimeout(r, 500));

  // Capture the fully rendered HTML
  const html = await page.content();
  
  // Write to the correct file path
  let filePath;
  if (route === '/') {
    filePath = join(DIST_DIR, 'index.html');
  } else {
    const dir = join(DIST_DIR, route);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
    filePath = join(dir, 'index.html');
  }

  writeFileSync(filePath, html);
  await page.close();
  return html.includes('data-rh');
}

async function prerender() {
  const routes = getAllRoutes();
  console.log(`\n🔄 Pre-rendering ${routes.length} routes...\n`);

  // Start a static file server for the dist directory
  const server = createServer((req, res) => {
    return handler(req, res, {
      public: DIST_DIR,
      rewrites: [{ source: '**', destination: '/index.html' }],
    });
  });

  await new Promise((resolve) => server.listen(3456, resolve));
  console.log('📡 Static server running on http://localhost:3456');

  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/usr/bin/chromium-browser',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
    ],
  });

  let successCount = 0;
  let errorCount = 0;
  let helmetCount = 0;

  // Process routes sequentially to avoid race conditions
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    try {
      const hasHelmet = await prerenderRoute(browser, route);
      successCount++;
      if (hasHelmet) helmetCount++;
      const progress = Math.round(((i + 1) / routes.length) * 100);
      console.log(`  ✅ [${progress}%] ${route}${hasHelmet ? ' (helmet ✓)' : ''}`);
    } catch (err) {
      errorCount++;
      console.error(`  ❌ ${route}: ${err.message}`);
    }
  }

  await browser.close();
  server.close();

  console.log(`\n📊 Pre-rendering complete:`);
  console.log(`   ✅ Success: ${successCount}`);
  console.log(`   🪖 Helmet: ${helmetCount}/${successCount}`);
  console.log(`   ❌ Errors: ${errorCount}`);
  console.log(`   📄 Total routes: ${routes.length}\n`);
}

prerender().catch(console.error);
