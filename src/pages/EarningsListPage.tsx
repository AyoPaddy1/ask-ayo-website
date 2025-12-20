import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { earningsReports } from '../data/earnings';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, TrendingDown, Clock } from 'lucide-react';

export function EarningsListPage() {
  const [selectedSector, setSelectedSector] = useState<string>('All');

  // Filter reports based on selected sector
  const filteredReports = selectedSector === 'All' 
    ? earningsReports 
    : earningsReports.filter(r => r.sector === selectedSector);

  const sectors = ['All', 'Tech', 'Sportswear', 'Luxury'];

  return (
    <>
      <Helmet>
        <title>Earnings Companion | AskAYO - Plain English Earnings Summaries</title>
        <meta name="description" content="Plain-English summaries of earnings calls from companies you care about. No jargon. No fluff." />
        <meta name="keywords" content="earnings reports, quarterly results, stock earnings, financial analysis, plain English" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Earnings Companion | AskAYO" />
        <meta property="og:description" content="Plain-English summaries of earnings calls from companies you care about." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-[#1a1a2e]">
        <Header />
        
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Content Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
            
            {/* Page Header */}
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Earnings Companion
              </h1>
              <p className="text-sm text-gray-500 mb-6">
                Last updated: December 20, 2025
              </p>
              <div className="border-t-4 border-teal-500 w-24 mb-6"></div>
              <h2 className="text-2xl font-bold text-teal-600 mb-4">
                What They Actually Said
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Plain-English summaries of earnings calls from companies you care about. No jargon. No fluff.
              </p>
            </div>

            {/* Filter by Sector */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-teal-600 mb-4">
                Filter by sector
              </h2>
              <div className="flex flex-wrap gap-3">
                {sectors.map(sector => (
                  <button
                    key={sector}
                    onClick={() => setSelectedSector(sector)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedSector === sector
                        ? 'bg-teal-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>

            {/* Latest Earnings */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-teal-600 mb-6">
                Latest Earnings
              </h2>
              
              <div className="space-y-6">
                {filteredReports.map(report => (
                  <Link
                    key={report.id}
                    to={`/earnings/${report.slug}`}
                    className="block border-2 border-gray-200 rounded-xl p-6 hover:border-teal-500 hover:shadow-lg transition-all"
                  >
                    {/* Company Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {report.company} · {report.ticker}
                        </h3>
                        <div className="flex items-center gap-2">
                          {report.revenue.beat && report.eps.beat ? (
                            <span className="text-green-600 font-semibold flex items-center gap-1">
                              <TrendingUp className="w-5 h-5" />
                              Beat expectations
                            </span>
                          ) : (
                            <span className="text-red-600 font-semibold flex items-center gap-1">
                              <TrendingDown className="w-5 h-5" />
                              Miss
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        {report.quarter} {report.fiscalYear} · {report.date}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {report.description}
                    </p>

                    {/* Read More */}
                    <div className="text-teal-600 font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {report.readTime} min read →
                    </div>
                  </Link>
                ))}
              </div>

              {filteredReports.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <p className="text-lg">No earnings reports yet for this sector.</p>
                  <p className="text-sm mt-2">Check back soon!</p>
                </div>
              )}
            </div>

          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
