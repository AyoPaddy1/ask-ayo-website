import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const examples = [
  {
    jargon: "Gross margin decreased 320 bps",
    translation: "They're making $3 less profit per shoe"
  },
  {
    jargon: "Forward P/E of 25x",
    translation: "Investors willing to pay $25 for every $1 of future profit"
  },
  {
    jargon: "Dovish pivot expected Q2",
    translation: "Fed might lower rates this spring"
  },
  {
    jargon: "Multiple compression evident",
    translation: "Same earnings, lower stock price"
  }
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTranslation(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % examples.length);
      }, 500);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTranslation(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 via-white to-teal-50 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-300 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-teal-500 to-yellow-400 text-white px-6 py-2 rounded-full text-sm inline-flex items-center gap-2 transform -rotate-1 shadow-lg">
              <Zap className="w-4 h-4" />
              <span>Join the financial literacy revolution</span>
            </div>
          </div>
          
          <h1 className="text-gray-900 mb-6 text-4xl sm:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight font-bold">
            Finally Understand{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Financial Jargon</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8C60 3 120 2 180 5C220 7 270 8 298 6" stroke="#FCD34D" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg sm:text-2xl mb-8 leading-relaxed">
            Right-click any financial term for an instant explanation that actually makes sense. <br />
            <span className="bg-green-200 px-2 py-1 rounded">Plain English</span>. <span className="line-through decoration-red-500">No BS</span>.
          </p>
        </div>

        {/* Split-screen demo */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12 relative">
          {/* Connecting arrow */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-white rounded-full p-4 shadow-2xl border-4 border-yellow-400">
              <ArrowRight className="w-8 h-8 text-teal-600" />
            </div>
          </div>
          
          {/* Left side - Jargon */}
          <motion.div 
            className="bg-white border-4 border-red-400 rounded-3xl p-6 sm:p-8 min-h-[280px] flex items-center justify-center shadow-2xl relative transform md:-rotate-2 hover:rotate-0 transition-transform"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute -top-4 -right-4 bg-red-500 text-white px-6 py-2 rounded-full text-sm transform rotate-12 shadow-lg font-semibold">
              😵‍💫 Confusing AF
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`jargon-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-gray-900 text-xl sm:text-2xl px-4 font-semibold">
                  "{examples[currentIndex].jargon}"
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right side - Translation */}
          <motion.div 
            className="bg-white border-4 border-green-400 rounded-3xl p-6 sm:p-8 min-h-[280px] flex items-center justify-center shadow-2xl relative transform md:rotate-2 hover:rotate-0 transition-transform"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-6 py-2 rounded-full text-sm transform -rotate-12 shadow-lg font-semibold">
              ✨ Makes Sense
            </div>
            
            <AnimatePresence mode="wait">
              {showTranslation && (
                <motion.div
                  key={`translation-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="text-gray-900 text-xl sm:text-2xl px-4 font-semibold">
                    "{examples[currentIndex].translation}"
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center gap-3 mb-10">
          {examples.map((_, index) => (
            <div
              key={index}
              className={`h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-teal-600 w-12' : 'bg-gray-300 w-3'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="https://chromewebstore.google.com/detail/askayo-financial-terms/aadolejfccokodnobpipmpknijggnjcj"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-teal-500 via-teal-600 to-yellow-500 hover:from-teal-600 hover:via-teal-700 hover:to-yellow-600 text-white px-10 py-5 rounded-2xl transition-all shadow-2xl hover:shadow-3xl hover:scale-105 inline-flex items-center gap-3 text-xl transform hover:-rotate-1 font-bold border-2 border-gray-900"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 14.894l-2.894-5.014a4.002 4.002 0 0 0-6.894 4.12l-2.894 5.014a10.002 10.002 0 0 1 12.682-4.12z"/>
            </svg>
            <span>Add to Chrome — It's Free</span>
            <ArrowRight className="w-6 h-6" />
          </a>
          <p className="text-sm text-gray-500 mt-6 flex items-center justify-center gap-2 flex-wrap">
            <span className="bg-gray-100 px-3 py-1 rounded-full">✓ No signup</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">✓ No ads</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">✓ No scary permissions</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">✓ Unlock faster access after first use</span>
          </p>
        </div>
      </div>
    </section>
  );
}
