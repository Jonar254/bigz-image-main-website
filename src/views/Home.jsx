import React from 'react';
import Hero from '../components/Hero';
import StatsSection from '../components/Stats';
import ProblemSolution from '../components/ProblemSolution';
import BrandLogos from '../components/BrandLogos';
import FeaturedWorks from '../components/FeaturedWorks';
import Services from '../components/Services';
import FeaturesSection from '../components/FeaturesSection';
import Approach from '../components/Approach';
import Results from '../components/Results';
import WhyBigz from '../components/WhyBigz';
import ModernFaq from '../components/ModernFaq';
import Articles from '../components/Articles';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <ProblemSolution />
      <BrandLogos />
      {/* <FeaturedWorks /> */}
      <Services />
      {/* <FeaturesSection /> */}
      <Approach />
      <WhyBigz />
      <Results />
      
      <ModernFaq />
      <Testimonial />
      <Articles />
      <CTA />
    </>
  );
};

export default Home;
