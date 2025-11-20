import { ArrowRight } from 'lucide-react';

const examples = [
  {
    before: "320 basis points",
    after: "3.2% - why can't they just say that?",
    rotation: "rotate-1"
  },
  {
    before: "Sequential deceleration in top-line growth",
    after: "Sales are slowing down",
    rotation: "-rotate-2"
  },
  {
    before: "Multiple expansion",
    after: "Stock price going up faster than earnings",
    rotation: "rotate-2"
  },
  {
    before: "Guidance revision",
    after: "Changed their mind about future predictions",
    rotation: "-rotate-1"
  },
  {
    before: "YoY EBITDA compression",
    after: "Making less money than last year",
    rotation: "rotate-1"
  },
  {
    before: "Normalized for one-time charges",
    after: "Ignoring the bad stuff to make it look better",
    rotation: "-rotate-2"
  }
];

export function ExamplesGrid() {
  return (
    <section id="examples" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm transform -rotate-2 inline-block font-semibold shadow-lg">
              Real Examples →
            </span>
          </div>
          
          <h2 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="inline-block transform rotate-1">THEY SAY</span>{' '}
            <span className="text-yellow-400 inline-block transform -rotate-1">→</span>{' '}
            <span className="inline-block transform rotate-2">WE EXPLAIN</span>
          </h2>
          <p className="text-gray-300 text-xl">
            Real jargon. Real translations. Zero BS.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl p-6 border-4 border-teal-300 hover:border-yellow-400 transition-all hover:scale-105 group transform ${example.rotation} hover:rotate-0 shadow-2xl`}
            >
              <div className="mb-6">
                <div className="text-xs text-red-600 mb-3 uppercase tracking-wider bg-red-100 inline-block px-3 py-1 rounded-full font-semibold">
                  They say:
                </div>
                <div className="text-gray-900 bg-gradient-to-br from-red-50 to-red-100 p-5 rounded-2xl border-2 border-red-200 min-h-[100px] flex items-center">
                  <span className="text-base font-medium">"{example.before}"</span>
                </div>
              </div>
              
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-teal-400 to-yellow-400 p-3 rounded-full transform group-hover:rotate-90 transition-transform">
                  <ArrowRight className="w-5 h-5 text-white transform rotate-90" />
                </div>
              </div>
              
              <div>
                <div className="text-xs text-green-600 mb-3 uppercase tracking-wider bg-green-100 inline-block px-3 py-1 rounded-full font-semibold">
                  We explain:
                </div>
                <div className="text-gray-900 bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-2xl border-2 border-green-200 min-h-[100px] flex items-center">
                  <span className="text-base font-medium">{example.after}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
