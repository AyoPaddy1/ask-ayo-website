import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { brands } from '../data/brands';
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

  const sectors: SectorFilter[] = ['All', 'Tech', 'Consumer', 'Luxury', 'Automotive', 'Sportswear'];

  return (
    <>
      <Helmet>
        <title>Investing - Understand the Brands You Invest In | Ask AYO</title>
        <meta name="description" content="Finally understand the brands you invest in. We decode earnings and explain the numbers in plain English." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Finally understand the brands you invest in.
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mb-6">
              Before you invest, know how they make money. We decode earnings and explain the numbers - in plain English.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/ask-ayo/your-extension-id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get the Extension →
            </a>
            <p className="text-sm opacity-75 mt-3">
              to understand any term, anywhere.
            </p>
          </div>
        </div>

        {/* Intro Copy Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* What is this? */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is this?</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              A plain-English guide to the world's biggest companies. How they make money, what their earnings calls actually said, and what the numbers mean.
            </p>
          </div>

          {/* Why this exists */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why this exists</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We're on a mission to break down the language barrier of finance. Most people care about brands like Nike, Apple, Tesla, LVMH. But the way these companies talk about their business is deliberately confusing. We decode it. Plain-English summaries updated within hours of every earnings call.
            </p>
          </div>

          {/* Still confused? */}
          <div className="mb-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              Still confused by a term? Download the AYO extension. Highlight any financial jargon anywhere on the web, get an instant explanation.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mb-8">
            <a
              href="https://chromewebstore.google.com/detail/ask-ayo/your-extension-id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transition-all text-lg"
            >
              Get the Extension - Free →
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Sector Filter Pills */}
          <div className="mb-8">
            <label className="text-sm font-medium text-gray-700 mb-3 block">Filter by sector:</label>
            <div className="flex flex-wrap gap-2">
              {sectors.map((sector) => (
                <button
                  key={sector}
                  onClick={() => setSectorFilter(sector)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    sectorFilter === sector
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-600'
                  }`}
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3 mb-8">
            <label className="text-sm font-medium text-gray-700">Sort:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'sector')}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="name">Name (A-Z)</option>
              <option value="sector">Sector</option>
            </select>
          </div>

          {/* Brand Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredBrands.map((brand) => (
              <Link
                key={brand.id}
                to={`/investing/${brand.slug}`}
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
              Want this for every article you read?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Highlight any financial jargon - on this page or anywhere else - and get an instant explanation.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/ask-ayo/your-extension-id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Get the Chrome Extension - Free →
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Education, not advice.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
