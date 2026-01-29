import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function YourMoneyPage() {
  return (
    <>
      <Helmet>
        <title>Finally Understand What Your Bank Is Actually Saying | Ask AYO</title>
        <meta name="description" content="Your mortgage offer. Your pension statement. That letter from HMRC. The jargon is deliberate. They don't want you to understand. AYO cuts through it." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Finally understand what your bank is actually saying.
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Your mortgage offer. Your pension statement. That letter from HMRC.
              </p>
              <p className="text-xl text-gray-600 mb-4">
                The jargon is deliberate. They don't want you to understand.
              </p>
              <p className="text-2xl font-semibold text-teal-600 mt-8">
                AYO cuts through it.
              </p>
            </div>
          </section>

          {/* Demo Section */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="aspect-video bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl flex items-center justify-center mb-8">
                  <div className="text-center text-gray-500">
                    <svg className="w-24 h-24 mx-auto mb-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <p className="text-sm">Screenshot: Extension working on bank documents</p>
                    <p className="text-xs mt-2">User highlights "APR"</p>
                    <p className="text-xs">→ AYO explains it in plain English</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Value Proposition */}
          <section className="py-16 px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-gray-700 mb-6">
                APR. Amortization. LTV. Drawdown. Fixed vs variable. Escrow.
              </p>
              <p className="text-2xl text-gray-900 mb-2">
                This is your money. Your home. Your retirement.
              </p>
              <p className="text-2xl text-gray-900 mb-8">
                You should actually understand it.
              </p>
              <a
                href="https://chrome.google.com/webstore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg transition-all"
              >
                Get the Chrome Extension — Free →
              </a>
            </div>
          </section>

          {/* Works For Section */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Works for:</h2>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3">•</span>
                  Mortgage offers and documents
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3">•</span>
                  Pension statements
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3">•</span>
                  Tax correspondence (HMRC, IRS)
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3">•</span>
                  Insurance policies
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3">•</span>
                  Bank letters and terms
                </li>
              </ul>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-20 px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-2xl text-gray-900 mb-8">
                It's not advice. Just simplifying the complicated.
              </p>
              <a
                href="https://chrome.google.com/webstore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg transition-all"
              >
                Get the Extension — Free →
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
