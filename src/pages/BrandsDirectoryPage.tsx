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

      <div className="min-h-screen bg-white">
        <Header />

        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
                Finally understand the brands you invest in.
              </h1>
              
              {/* What is this? */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What is this?</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  A plain-English guide to the world's biggest companies — how they make money, what their earnings calls actually said, and what the numbers actually mean.
                </p>
              </div>

              {/* Why this exists */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why this exists</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  We're on a mission to break down the language barrier of finance. Most people care about brands like Nike, Apple, Tesla, LVMH. But the way these companies talk about their business is deliberately confusing. We decode it. Plain-English summaries updated within hours of every earnings call.
                </p>
              </div>

              {/* How it works */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Still confused by a term?</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  That's what the extension is for. Highlight any term — on this site or anywhere else — and get an instant, plain-English explanation.
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href="https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transition-all text-lg"
                >
                  Get the Extension - Free →
                </a>
              </div>
            </div>
          </section>

          {/* Brands Directory Section */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse Brands</h2>
              
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
                <label htmlFor="sort" className="text-sm font-medium text-gray-700">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'sector')}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="sector">Sector</option>
                </select>
              </div>

              {/* Brands Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredBrands.map((brand) => (
                  <Link
                    key={brand.slug}
                    to={`/investing/${brand.slug}`}
                    className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6 border border-gray-200 hover:border-purple-600 group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={`https://img.logo.dev/${brand.domain}?token=pk_ZsKdfCf9SJqbryuxYrFPDA&format=png&size=128`}
                        alt={`${brand.name} logo`}
                        className="w-12 h-12 object-contain flex-shrink-0"
                      />
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {brand.name}
                        </h3>
                        <p className="text-sm text-gray-500">{brand.ticker}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{brand.sector}</p>
                    <p className="text-xs text-gray-500 line-clamp-2">{brand.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Understand every term in these reports.
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Highlight any financial jargon - on this page or anywhere else - and get an instant explanation.
              </p>
              <a
                href="https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transition-all text-lg"
              >
                Get the Extension - Free →
              </a>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="py-8 px-6 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs text-gray-500 text-center">
                This is not financial advice. We're just translating what companies say about themselves. 
                Always do your own research before making investment decisions.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
