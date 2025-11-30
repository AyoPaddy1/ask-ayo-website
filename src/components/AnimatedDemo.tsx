import { useEffect, useState } from 'react';

const terms = [
  {
    text: 'EBITDA',
    definition: 'Earnings Before Interest, Taxes, Depreciation, and Amortization. A measure of a company\'s operating performance.',
    realTalk: 'Basically how much money a company makes from its actual business, before you factor in loans, taxes, and accounting stuff.'
  },
  {
    text: 'liquidation preference',
    definition: 'A clause in an investment agreement that determines the payout order and amounts if the company is sold or liquidated.',
    realTalk: 'Investors get their money back first (sometimes 2x or 3x) before founders and employees see anything. It\'s their safety net in case things go south.'
  }
];

export function AnimatedDemo() {
  const [currentTermIndex, setCurrentTermIndex] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const steps = [
      { duration: 1000, nextStep: 1 }, // Show cursor
      { duration: 500, nextStep: 2 },  // Highlight term
      { duration: 500, nextStep: 3 },  // Show right-click menu
      { duration: 1000, nextStep: 4 }, // Show popup
      { duration: 4000, nextStep: 5 }, // Hold popup
      { duration: 500, nextStep: 6 },  // Fade out popup
      { duration: 500, nextStep: 1 }   // Move cursor to next term (skip step 0)
    ];

    const timer = setTimeout(() => {
      if (animationStep === 6) {
        // Move to next term
        setCurrentTermIndex((prev) => (prev + 1) % terms.length);
        setAnimationStep(1); // Skip step 0, keep cursor visible
      } else {
        setAnimationStep((prev) => steps[prev].nextStep);
      }
    }, steps[animationStep].duration);

    return () => clearTimeout(timer);
  }, [animationStep, currentTermIndex]);

  const currentTerm = terms[currentTermIndex];
  // Cursor should be on the highlighted term, menu appears below and to the right
  const termPosition = currentTermIndex === 0 ? { top: '45%', left: '30%' } : { top: '52%', left: '22%' };
  const cursorPosition = currentTermIndex === 0 ? { top: '45%', left: '32%' } : { top: '52%', left: '30%' };

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-white to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-teal-500 to-yellow-400 text-white px-6 py-2 rounded-full text-sm transform rotate-1 shadow-lg font-semibold">
              ⚡ See It In Action
            </span>
          </div>
          <h2 className="text-gray-900 mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
            How It Works
          </h2>
          <p className="text-gray-600 text-xl sm:text-2xl">
            Highlight any term → Right-click → Get it explained
          </p>
        </div>

        {/* Browser Window */}
        <div className="bg-white rounded-3xl shadow-2xl border-4 border-gray-900 overflow-hidden transform hover:rotate-0 -rotate-1 transition-all">
          {/* Browser Header */}
          <div className="bg-gray-200 px-4 py-3 flex items-center gap-2 border-b-2 border-gray-900">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 bg-white rounded-lg px-4 py-1 text-sm text-gray-600 border border-gray-300">
              techcrunch.com/article/startup-funding
            </div>
          </div>

          {/* Browser Content */}
          <div className="bg-white p-8 sm:p-12 min-h-[600px] sm:min-h-[750px] relative">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Startup Raises $50M Series B
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              The company reported strong growth with{' '}
              <span 
                className={`relative inline-block transition-all duration-300 ${
                  animationStep >= 2 ? 'bg-teal-200' : ''
                }`}
              >
                {currentTermIndex === 0 ? 'EBITDA' : 'liquidation preference'}
              </span>
              {' '}margins improving quarter over quarter, signaling operational efficiency.
            </p>

            {/* Animated Cursor */}
            {animationStep >= 1 && (
              <div 
                key={`cursor-${currentTermIndex}`}
                className="absolute w-6 h-6 pointer-events-none transition-all duration-500"
                style={{ 
                  top: cursorPosition.top, 
                  left: cursorPosition.left
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="black" stroke="white" strokeWidth="1"/>
                </svg>
              </div>
            )}

            {/* Right-click Menu */}
            {animationStep >= 3 && (
              <div 
                className="absolute bg-white rounded-xl shadow-2xl border-2 border-gray-300 overflow-hidden w-48 sm:w-56 z-20 animate-in fade-in duration-200"
                style={{ 
                  top: `calc(${cursorPosition.top} + 24px)`, 
                  left: `calc(${cursorPosition.left} + 12px)`
                }}
              >
                <div className="py-2">
                  <div className="px-4 py-2 hover:bg-gray-100 text-sm text-gray-700 cursor-pointer">Copy</div>
                  <div className="px-4 py-3 bg-gradient-to-r from-teal-500 to-yellow-500 text-white font-semibold cursor-pointer flex items-center gap-2">
                    <span className="text-lg">🎯</span>
                    <span>Ask AYO</span>
                  </div>
                  <div className="px-4 py-2 hover:bg-gray-100 text-sm text-gray-700 cursor-pointer">Search Google</div>
                </div>
              </div>
            )}

            {/* Ask AYO Popup */}
            {animationStep >= 4 && (
              <div 
                className="absolute bg-white rounded-2xl shadow-2xl border-4 border-teal-400 w-[90%] sm:w-[500px] max-w-[500px] z-30 animate-in slide-in-from-bottom duration-300"
                style={{ 
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {/* Popup Header */}
                <div className="bg-gradient-to-r from-teal-500 to-yellow-500 px-6 py-4 rounded-t-xl">
                  <div className="text-white font-bold text-sm">Ask AYO</div>
                  <div className="text-white text-xl sm:text-2xl font-bold mt-1">{currentTerm.text.toUpperCase()}</div>
                </div>

                {/* Popup Content */}
                <div className="p-6">
                  {/* Definition */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">📖</span>
                      <h3 className="text-gray-500 uppercase text-xs font-bold tracking-wider">Definition</h3>
                    </div>
                    <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                      {currentTerm.definition}
                    </p>
                  </div>

                  {/* Real Talk */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">💬</span>
                      <h3 className="text-gray-500 uppercase text-xs font-bold tracking-wider">Real Talk</h3>
                    </div>
                    <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                      {currentTerm.realTalk}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {terms.map((_, index) => (
            <div
              key={index}
              className={`h-3 rounded-full transition-all ${
                index === currentTermIndex ? 'bg-teal-600 w-12' : 'bg-gray-300 w-3'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
