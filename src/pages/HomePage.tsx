import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Problem } from '../components/Problem';
import { AnimatedDemo } from '../components/AnimatedDemo';
import { ExamplesGrid } from '../components/ExamplesGrid';
import { WhatWeDont } from '../components/WhatWeDont';
import { Testimonials } from '../components/Testimonials';
import { Mission } from '../components/Mission';
import { PermissionsExplainer } from '../components/PermissionsExplainer';
import { UseCaseCards } from '../components/UseCaseCards';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problem />
      <AnimatedDemo />
      <UseCaseCards />
      <ExamplesGrid />
      <WhatWeDont />
      <Testimonials />
      <Mission />
      <PermissionsExplainer />
      <Footer />
    </div>
  );
}
