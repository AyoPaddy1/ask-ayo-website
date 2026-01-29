import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function WorkPage() {
  return (
    <>
      <Helmet>
        <title>Finally Decode What Your CFO Is Actually Saying | Ask AYO</title>
        <meta name="description" content="Your company's all-hands. The earnings call. That email about runway. Everyone nods along. Nobody actually understands. AYO translates it." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">
                Finally decode what your CFO is actually saying.
              </h1>
              
              {/* What is this? */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What is this?</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Your company's all-hands. The earnings call. That email about "runway." Everyone nods along. Nobody actually understands.
                </p>
              </div>

              {/* Why this exists */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why this exists</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Business jargon isn't just annoying - it keeps you in the dark about your own company. What does "cash flow positive" mean for your job security? What are your stock options actually worth? You should know.
                </p>
              </div>

              {/* How it works */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How it works</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Reading an internal doc, a strategy update, or your company's earnings? Highlight any term. AYO explains what it means - and why it matters to you.
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
                <div className="aspect-video bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg className="w-24 h-24 mx-auto mb-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm font-medium">Screenshot: Extension working on company docs</p>
                    <p className="text-xs mt-2 text-gray-400">User highlights "burn rate"</p>
                    <p className="text-xs text-gray-400">→ AYO explains what it means for your job</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Helpful For Section */}
          <section className="py-16 px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Helpful for:</h2>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-2xl">•</span>
                  Understanding your company's earnings and all-hands
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-2xl">•</span>
                  Making sense of stock options, RSUs, equity
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-2xl">•</span>
                  Reading strategy docs and board updates
                </li>
                <li className="flex items-center">
                  <span className="text-teal-600 mr-3 text-2xl">•</span>
                  Knowing what "cash flow positive" means for your job
                </li>
              </ul>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-2xl text-gray-900 mb-8 font-medium">
                It's not advice. Just simplifying the complicated.
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
