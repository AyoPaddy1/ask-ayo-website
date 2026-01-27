import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { earningsReports } from '../data/earnings';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, TrendingDown, Clock, Calendar } from 'lucide-react';

export function EarningsListPage() {
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  // Sort reports by date (most recent first)
  const sortedReports = [...earningsReports].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Filter reports based on selected sector and status
  const filteredReports = sortedReports.filter(r => {
    const sectorMatch = selectedSector === 'All' || r.sector === selectedSector;
    const statusMatch = selectedStatus === 'All' || 
      (selectedStatus === 'Beat' && r.revenue.beat && r.eps.beat) ||
      (selectedStatus === 'Miss' && (!r.revenue.beat || !r.eps.beat)) ||
      (selectedStatus === 'Preview' && r.status === 'preview');
    return sectorMatch && statusMatch;
  });

  const sectors = ['All', 'Tech', 'Sportswear', 'Luxury', 'Automotive', 'Consumer'];
  const statuses = ['All', 'Preview', 'Beat', 'Miss'];

  // Get status badge
  const getStatusBadge = (report: any) => {
    if (report.status === 'preview') {
      return (
        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700">
          PREVIEW
        </span>
      );
    } else if (report.revenue.beat && report.eps.beat) {
      return (
        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700 flex items-center gap-1">
          <TrendingUp className="w-4 h-4" />
          BEAT
        </span>
      );
    } else {
      return (
        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-700 flex items-center gap-1">
          <TrendingDown className="w-4 h-4" />
          MISS
        </span>
      );
    }
  };

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
            
            {/* Page Header - Story-Driven Copy */}
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Earnings Calls, Decoded
              </h1>
              <p className="text-sm text-gray-500 mb-6">
                Last updated: January 27, 2026
              </p>
              <div className="border-t-4 border-teal-500 w-24 mb-6"></div>
              
              {/* Story-driven explanation */}
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>What's an earnings call?</strong> It's when a company's CEO gets on a conference call with Wall Street and reports how much money they made (or didn't). Happens four times a year. Usually involves a lot of corporate speak that makes your eyes glaze over.
                </p>
                <p>
                  <strong>Why this exists:</strong> We're on a mission to break down the language barrier of finance. Most people care about brands—Nike, Apple, Tesla, LVMH—but the way these companies talk about their business is deliberately confusing. We created this section to fix that. Plain-English summaries of what these companies actually said, updated within hours of every earnings call.
                </p>
                <p className="text-base text-gray-600 pt-4 border-t border-gray-200">
                  <strong>Still confused by a term?</strong> Download the AYO extension. Highlight any financial jargon anywhere on the web, get an instant explanation.
                </p>
                <div className="pt-2">
                  <a
                    href="https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                  >
                    Download AYO
                  </a>
                </div>
              </div>
            </div>

            {/* Filter by Sector */}
            <div className="mb-8">
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

            {/* Filter by Status */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-teal-600 mb-4">
                Filter by status
              </h2>
              <div className="flex flex-wrap gap-3">
                {statuses.map(status => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedStatus === status
                        ? 'bg-teal-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {status}
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
                        {getStatusBadge(report)}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {report.quarter} {report.fiscalYear} · {report.date}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {report.description}
                    </p>

                    {/* Read More */}
                    <div className="text-teal-600 font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {report.readTime} →
                    </div>
                  </Link>
                ))}
              </div>

              {filteredReports.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <p className="text-lg">No earnings reports yet for this filter.</p>
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
