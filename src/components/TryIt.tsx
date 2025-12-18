import { useState } from 'react';
import { Sparkles, Zap, ArrowRight } from 'lucide-react';

// Common financial terms with simple explanations
const FINANCIAL_TERMS: Record<string, string> = {
  'ebitda': 'Earnings Before Interest, Taxes, Depreciation, and Amortization - basically profit before accounting stuff',
  'p/e ratio': 'Price-to-Earnings Ratio - how expensive a stock is compared to its profits',
  'market cap': 'Market Capitalization - total value of all company shares',
  'free cash flow': 'Money left over after paying all expenses and investments',
  'basis points': '1/100th of a percent (100 basis points = 1%)',
  'sequential': 'Compared to last quarter (not last year)',
  'top-line growth': 'Revenue growth - how much more money they\'re making',
  'margin compression': 'Profit margins getting squeezed (making less profit per dollar of sales)',
  'guidance': 'Company\'s prediction for future performance',
  'headwinds': 'Challenges or obstacles facing the business',
  'tailwinds': 'Favorable conditions helping the business',
  'yoy': 'Year-over-Year - compared to same time last year',
  'qoq': 'Quarter-over-Quarter - compared to last quarter',
  'operating leverage': 'Ability to grow profits faster than revenue',
  'capex': 'Capital Expenditures - money spent on equipment, buildings, etc.',
  'opex': 'Operating Expenses - day-to-day costs of running the business',
  'runway': 'How long the company can operate before running out of money',
  'burn rate': 'How fast a company is spending its cash',
  'dilution': 'When new shares are issued, reducing existing shareholders\' ownership percentage',
  'accretive': 'Something that increases earnings per share',
};

export function TryIt() {
  const [text, setText] = useState('');
  const [showDemo, setShowDemo] = useState(false);
  const [detectedTerms, setDetectedTerms] = useState<Array<{term: string, explanation: string}>>([]);

  const handleTranslate = () => {
    if (!text.trim()) return;

    // Find financial terms in the text
    const foundTerms: Array<{term: string, explanation: string}> = [];
    const lowerText = text.toLowerCase();

    Object.entries(FINANCIAL_TERMS).forEach(([term, explanation]) => {
      if (lowerText.includes(term.toLowerCase())) {
        foundTerms.push({ term, explanation });
      }
    });

    // Limit to first 3 terms for demo
    setDetectedTerms(foundTerms.slice(0, 3));
    setShowDemo(true);
  };

  const handleInstallExtension = () => {
    window.open('https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj', '_blank');
  };

  const resetDemo = () => {
    setShowDemo(false);
    setDetectedTerms([]);
  };

  return (
    <section id="try-it" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-100 via-white to-teal-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-4 border-yellow-400 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-teal-400 rounded-full opacity-30"></div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-teal-500 to-yellow-500 text-white px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 transform rotate-2 shadow-xl font-semibold">
              <Zap className="w-4 h-4" />
              Try it right now (seriously)
            </span>
          </div>
          
          <h2 className="text-gray-900 mb-6 text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold">
            See Jargon.{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Highlight It.</span>
              <div className="absolute inset-0 bg-yellow-300 -skew-x-12 opacity-50"></div>
            </span>{' '}
            <br />
            Understand It.
          </h2>
          <p className="text-gray-600 text-xl sm:text-2xl">
            We turn financial gibberish into English. 👇
          </p>
        </div>
        
        {!showDemo ? (
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl border-4 border-gray-900 transform hover:rotate-0 -rotate-1 transition-all">
            <div className="mb-8">
              <label className="text-gray-900 mb-4 flex items-center gap-3 text-xl font-semibold">
                <Sparkles className="w-6 h-6 text-teal-600" />
                Paste something confusing:
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Try: 'The company expects sequential deceleration in top-line growth with 320 basis points of margin compression...'"
                className="w-full h-56 p-6 border-4 border-gray-300 rounded-3xl resize-none focus:outline-none focus:border-teal-500 focus:ring-8 focus:ring-teal-100 transition-all text-gray-900 placeholder:text-gray-400 text-lg bg-gray-50"
              />
            </div>
            
            <div className="text-sm text-gray-600 mb-8 flex flex-wrap gap-2">
              <span className="text-gray-900 font-semibold">Try pasting:</span>
              <span className="bg-gradient-to-r from-teal-100 to-teal-200 px-4 py-2 rounded-full border-2 border-teal-300 font-medium">📄 Annual reports</span>
              <span className="bg-gradient-to-r from-yellow-100 to-yellow-200 px-4 py-2 rounded-full border-2 border-yellow-300 font-medium">📞 Earnings calls</span>
              <span className="bg-gradient-to-r from-red-100 to-red-200 px-4 py-2 rounded-full border-2 border-red-300 font-medium">🏛️ Fed statements</span>
              <span className="bg-gradient-to-r from-green-100 to-green-200 px-4 py-2 rounded-full border-2 border-green-300 font-medium">📰 Financial news</span>
            </div>
            
            <button
              onClick={handleTranslate}
              disabled={!text.trim()}
              className="w-full bg-gradient-to-r from-teal-500 via-teal-600 to-yellow-500 hover:from-teal-600 hover:via-teal-700 hover:to-yellow-600 text-white py-6 rounded-3xl transition-all shadow-xl hover:shadow-2xl text-2xl hover:scale-[1.02] border-4 border-teal-700 font-bold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              ✨ Translate to Plain English
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl border-4 border-gray-900 space-y-6">
            {detectedTerms.length > 0 ? (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    ✨ Found {detectedTerms.length} financial term{detectedTerms.length > 1 ? 's' : ''}!
                  </h3>
                  <p className="text-gray-600">Here's a quick preview:</p>
                </div>

                <div className="space-y-4">
                  {detectedTerms.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-r from-teal-50 to-yellow-50 border-4 border-teal-200 rounded-2xl p-6"
                    >
                      <div className="font-bold text-lg text-teal-700 mb-2 uppercase">
                        {item.term}
                      </div>
                      <div className="text-gray-700 text-base">
                        {item.explanation}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-yellow-100 to-teal-100 border-4 border-yellow-400 rounded-2xl p-8 text-center">
                  <div className="text-3xl mb-4">🚀</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">
                    Want the full experience?
                  </h4>
                  <p className="text-gray-700 mb-6 text-lg">
                    Install the Chrome extension to translate <strong>any term</strong> on <strong>any website</strong> with just a right-click!
                  </p>
                  <button
                    onClick={handleInstallExtension}
                    className="bg-gradient-to-r from-teal-500 to-yellow-500 hover:from-teal-600 hover:to-yellow-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-4 border-teal-700 inline-flex items-center gap-2"
                  >
                    Get the Free Extension
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <button
                  onClick={resetDemo}
                  className="w-full text-gray-600 hover:text-gray-900 py-3 text-base font-medium transition-colors"
                >
                  ← Try another text
                </button>
              </>
            ) : (
              <>
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🤔</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    No financial terms detected
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try pasting text with terms like "EBITDA", "P/E ratio", "market cap", or "free cash flow"
                  </p>
                  <button
                    onClick={resetDemo}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-6 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Try again
                  </button>
                </div>

                <div className="bg-gradient-to-r from-yellow-100 to-teal-100 border-4 border-yellow-400 rounded-2xl p-8 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Or install the extension for the full experience
                  </h4>
                  <p className="text-gray-700 mb-6">
                    Translate any term on any website with just a right-click!
                  </p>
                  <button
                    onClick={handleInstallExtension}
                    className="bg-gradient-to-r from-teal-500 to-yellow-500 hover:from-teal-600 hover:to-yellow-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-4 border-teal-700 inline-flex items-center gap-2"
                  >
                    Get the Free Extension
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </>
            )}
          </div>
        )}
        
        <div className="text-center mt-8">
          <a 
            href="https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border-4 border-gray-900 px-8 py-4 rounded-2xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 text-lg font-bold text-gray-900"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 14.894l-2.894-5.014a4.002 4.002 0 0 0-6.894 4.12l-2.894 5.014a10.002 10.002 0 0 1 12.682-4.12z"/>
            </svg>
            <span>Get the Chrome Extension — It's Free</span>
          </a>
          <p className="text-gray-500 mt-4 text-base">
            Just highlight any term on any website, right-click, and get instant explanations.
          </p>
        </div>
      </div>
    </section>
  );
}
