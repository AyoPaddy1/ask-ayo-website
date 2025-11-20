import { X } from 'lucide-react';

const dontDo = [
  "No investment advice",
  "No trend spotting",
  "No portfolio management",
  "No real-time alerts",
  "No social signal tracking"
];

export function WhatWeDont() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-red-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-gray-900 mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold">
          What We{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-red-600">DON'T</span>
            <div className="absolute inset-0 bg-red-300 skew-x-12 opacity-50"></div>
          </span>{' '}
          Do
        </h2>
        <p className="text-gray-700 text-2xl mb-16">
          We're a translator. That's it. 🤷
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {dontDo.map((item, index) => (
            <div key={index} className="bg-white border-4 border-red-400 rounded-2xl p-6 flex items-center gap-4 transform hover:scale-105 transition-all shadow-lg">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <X className="w-6 h-6 text-white" />
              </div>
              <span className="text-gray-900 text-lg font-semibold">{item}</span>
            </div>
          ))}
        </div>
        
        <div className="bg-white border-4 border-teal-400 rounded-3xl p-12 transform -rotate-1 hover:rotate-0 transition-all shadow-2xl">
          <p className="text-gray-900 text-3xl sm:text-4xl mb-4 font-bold">
            We translate. <br />
            <span className="bg-gradient-to-r from-teal-500 to-yellow-500 bg-clip-text text-transparent">That's it.</span>
          </p>
          <p className="text-gray-600 text-xl">
            (And we're really good at it) ✨
          </p>
        </div>
      </div>
    </section>
  );
}
