import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Technology from '../components/Technology';
import CaseStudies from '../components/CaseStudies';
import DemoSection from '../components/DemoSection';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Technology />
      <CaseStudies />
      <DemoSection />
      <Contact />
    </main>
  );
};

export default Home;