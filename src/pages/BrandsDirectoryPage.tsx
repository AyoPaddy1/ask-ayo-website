import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { brands, categories } from '../data/brands';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

type SectorFilter = 'All' | 'Tech' | 'Consumer' | 'Luxury' | 'Automotive' | 'Sportswear' | 'Financial Services' | 'Industrial';

export function BrandsDirectoryPage() {
  const [sectorFilter, setSectorFilter] = useState<SectorFilter>('All');
  const [sortBy, setSortBy] = useState<'name' | 'sector'>('name');

  const filteredBrands = brands
    .filter(brand => sectorFilter === 'All' || brand.sector === sectorFilter)
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return a.sector.localeCompare(b.sector);
    });

  return (
    <>
      <Helmet>
        <title>Brands - Earnings, Stock Prices & Business Breakdowns | Ask AYO</title>
        <meta name="description" content="Understand how the world's biggest brands make money. Track earnings, live stock prices, and get the business breakdown before you invest." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Brands You Know.<br />Business You Should Understand.
            </h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Before you invest, know how they make money. We break down earnings, track stock prices, 
              and explain the business in plain English.
            </p>
          </div>
        </div>

        {/* Category Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => {
                  // Filter to show brands in this category
                  const firstBrandInCategory = brands.find(b => 
                    category.brands.includes(b.name)
                  );
                  if (firstBrandInCategory) {
                    setSectorFilter(firstBrandInCategory.sector as SectorFilter);
                  }
                }}
                className={`bg-gradient-to-br ${category.gradient} rounded-lg p-6 text-white text-left hover:scale-105 transition-transform`}
              >
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm opacity-90 mb-4">{category.tagline}</p>
                <div className="flex flex-wrap gap-2">
                  {category.brands.slice(0, 4).map((brandName) => (
                    <span key={brandName} className="text-xs bg-white/20 px-2 py-1 rounded">
                      {brandName}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-700">Filter by sector:</label>
              <select
                value={sectorFilter}
                onChange={(e) => setSectorFilter(e.target.value as SectorFilter)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                <option value="All">All Sectors</option>
                <option value="Tech">Tech</option>
                <option value="Consumer">Consumer</option>
                <option value="Luxury">Luxury</option>
                <option value="Automotive">Automotive</option>
                <option value="Sportswear">Sportswear</option>
                <option value="Financial Services">Financial Services</option>
                <option value="Industrial">Industrial</option>
              </select>
            </div>

            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'sector')}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                <option value="name">Name (A-Z)</option>
                <option value="sector">Sector</option>
              </select>
            </div>
          </div>

          {/* Brand Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBrands.map((brand) => (
              <Link
                key={brand.id}
                to={`/brands/${brand.slug}`}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:border-purple-600 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-4xl">{brand.logo}</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{brand.name}</h3>
                    <p className="text-sm text-gray-500">{brand.ticker}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{brand.tagline}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                    {brand.sector}
                  </span>
                  <span className="text-sm text-purple-600 font-medium">View →</span>
                </div>
              </Link>
            ))}
          </div>

          {filteredBrands.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No brands found in this sector.</p>
            </div>
          )}
        </div>

        {/* Extension CTA */}
        <div className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Never Miss an Earnings Report
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get instant alerts when your favorite brands report earnings. 
              No spam, no BS—just the numbers that matter.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/ask-ayo/your-extension-id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Add to Chrome — It's Free
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
