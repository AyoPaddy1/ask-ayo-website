import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { earningsReports } from '../data/earnings';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, TrendingDown, Calendar, Clock } from 'lucide-react';

export function EarningsListPage() {
  // Group earnings by sector
  const techReports = earningsReports.filter(r => r.sector === 'Tech');
  const sportswearReports = earningsReports.filter(r => r.sector === 'Sportswear');
  const luxuryReports = earningsReports.filter(r => r.sector === 'Luxury');

  const sectorGroups = [
    { name: 'Tech', reports: techReports, color: 'blue' },
    { name: 'Sportswear', reports: sportswearReports, color: 'teal' },
    { name: 'Luxury', reports: luxuryReports, color: 'purple' }
  ];

  return (
    <>
      <Helmet>
        <title>Earnings Reports | AskAYO - Plain English Earnings Summaries</title>
        <meta name="description" content="Earnings reports explained in plain English. No jargon, no corporate speak. Just honest takes on what companies actually said." />
        <meta name="keywords" content="earnings reports, quarterly results, stock earnings, financial analysis, plain English" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Earnings Reports | AskAYO" />
        <meta property="og:description" content="Earnings reports explained in plain English. No jargon, no corporate speak." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Page Header */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Earnings Reports
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quarterly earnings explained in plain English. No jargon, no corporate speak. 
              Just honest takes on what companies actually said and what it means for you.
            </p>
          </div>

          {/* Upcoming Earnings */}
          <div className="mb-16 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-700 mb-6">
              We're tracking earnings for 16 companies across Tech, Sportswear, and Luxury. 
              Next up in late January 2025:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { company: 'Apple', ticker: 'AAPL', date: 'Late Jan' },
                { company: 'Netflix', ticker: 'NFLX', date: 'Late Jan' },
                { company: 'Tesla', ticker: 'TSLA', date: 'Late Jan' },
                { company: 'Nvidia', ticker: 'NVDA', date: 'Late Feb' }
              ].map(item => (
                <div key={item.ticker} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="font-bold text-gray-900">{item.company}</div>
                  <div className="text-sm text-gray-500">{item.ticker}</div>
                  <div className="text-sm text-teal-600 mt-2 flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Earnings by Sector */}
          {sectorGroups.map(group => (
            group.reports.length > 0 && (
              <div key={group.name} className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <span className={`w-2 h-8 bg-${group.color}-500 rounded`}></span>
                  {group.name}
                </h2>
                
                <div className="grid gap-8 lg:grid-cols-2">
                  {group.reports.map(report => (
                    <Link
                      key={report.id}
                      to={`/earnings/${report.slug}`}
                      className="group block border border-gray-200 rounded-xl p-6 hover:border-teal-500 hover:shadow-xl transition-all"
                    >
                      {/* Company Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="text-sm text-gray-500 mb-1">
                            {report.ticker} • {report.quarter} {report.fiscalYear}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                            {report.company}
                          </h3>
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {report.date}
                        </div>
                      </div>

                      {/* Beat/Miss Indicators */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className={`p-3 rounded-lg ${report.revenue.beat ? 'bg-green-50' : 'bg-red-50'}`}>
                          <div className="text-xs text-gray-600 mb-1">Revenue</div>
                          <div className="flex items-center gap-2">
                            {report.revenue.beat ? (
                              <TrendingUp className="w-4 h-4 text-green-600" />
                            ) : (
                              <TrendingDown className="w-4 h-4 text-red-600" />
                            )}
                            <span className={`font-semibold ${report.revenue.beat ? 'text-green-700' : 'text-red-700'}`}>
                              {report.revenue.beat ? 'Beat' : 'Miss'}
                            </span>
                          </div>
                          <div className="text-xs text-gray-600 mt-1">
                            {report.revenue.actual} vs {report.revenue.expected}
                          </div>
                        </div>

                        <div className={`p-3 rounded-lg ${report.eps.beat ? 'bg-green-50' : 'bg-red-50'}`}>
                          <div className="text-xs text-gray-600 mb-1">EPS</div>
                          <div className="flex items-center gap-2">
                            {report.eps.beat ? (
                              <TrendingUp className="w-4 h-4 text-green-600" />
                            ) : (
                              <TrendingDown className="w-4 h-4 text-red-600" />
                            )}
                            <span className={`font-semibold ${report.eps.beat ? 'text-green-700' : 'text-red-700'}`}>
                              {report.eps.beat ? 'Beat' : 'Miss'}
                            </span>
                          </div>
                          <div className="text-xs text-gray-600 mt-1">
                            {report.eps.actual} vs {report.eps.expected}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-4">
                        {report.description}
                      </p>

                      {/* Read Time */}
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {report.readTime}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          ))}

          {/* Empty State */}
          {earningsReports.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No earnings reports yet
              </h3>
              <p className="text-gray-600">
                Check back soon for our first earnings summaries.
              </p>
            </div>
          )}

          {/* What to Expect Section */}
          <div className="mt-16 border-t border-gray-200 pt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What to Expect from Our Earnings Reports
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Clear Numbers</h3>
                <p className="text-gray-600">
                  Beat or miss? We show you the numbers that matter and explain what they actually mean.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real Talk</h3>
                <p className="text-gray-600">
                  Every metric gets context. No jargon left unexplained. Like a friend explaining over coffee.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Honest Takes</h3>
                <p className="text-gray-600">
                  We don't sugarcoat bad news or overhype good news. Just fair, balanced analysis.
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
