import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { AnimatedDemo } from './components/AnimatedDemo';
import { ExamplesGrid } from './components/ExamplesGrid';
import { WhatWeDont } from './components/WhatWeDont';
import { TryIt } from './components/TryIt';
import { Testimonials } from './components/Testimonials';
import { Mission } from './components/Mission';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problem />
      <AnimatedDemo />
      <ExamplesGrid />
      <WhatWeDont />
      <TryIt />
      <Testimonials />
      <Mission />
      <Footer />
    </div>
  );
}
