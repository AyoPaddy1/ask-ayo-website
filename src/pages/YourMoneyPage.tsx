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
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
                Finally understand what your bank is actually saying.
              </h1>
              
              {/* What is this? */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What is this?</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Your mortgage offer. Your pension statement. That letter from HMRC. The jargon is deliberate. They don't want you to understand.
                </p>
              </div>

              {/* Why this exists */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why this exists</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  This is your money. Your home. Your retirement. You shouldn't need a finance degree to understand a mortgage offer or know what your pension is doing. The language barrier of finance hits hardest when it's personal.
                </p>
              </div>

              {/* How it works */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How it works</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Reading a bank document, insurance policy, or tax letter? Highlight any term - APR, LTV, amortization, drawdown - and get a plain-English explanation instantly.
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href="https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg transition-all text-lg"
                >
                  Get the Extension - Free →
                </a>
              </div>
            </div>
          </section>

          {/* Demo Section */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="aspect-video bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg className="w-24 h-24 mx-auto mb-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <p className="text-sm font-medium">Screenshot: Extension working on bank documents</p>
                    <p className="text-xs mt-2 text-gray-400">User highlights "APR"</p>
                    <p className="text-xs text-gray-400">→ AYO explains it in plain English</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Works For Section */}
          <section className="py-16 px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Works for:</h2>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-2xl">•</span>
                  Mortgage offers and documents
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-2xl">•</span>
                  Pension statements
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-2xl">•</span>
                  Tax correspondence (HMRC, IRS)
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-2xl">•</span>
                  Insurance policies
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-2xl">•</span>
                  Bank letters and terms
                </li>
              </ul>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-2xl text-gray-900 mb-8 font-medium">
                Your money. Your language.
              </p>
              <a
                href="https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg transition-all text-lg"
              >
                Get the Extension - Free →
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
