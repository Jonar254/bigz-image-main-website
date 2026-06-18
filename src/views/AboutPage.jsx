'use client';

import React, { useEffect, useState } from 'react';
import CTA from '../components/CTA';
import Reveal from '../components/Reveal';
import BrandLogos from '../components/BrandLogos';

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 120);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="bg-white text-black pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-12">
      <div className="max-w-[1500px] mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className={`text-neutral-500 text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            About Us
          </p>
          <h2
            className={`text-[32px] sm:text-[42px] md:text-[50px] font-medium tracking-[-0.02em] leading-[1.1] md:whitespace-nowrap mx-auto transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Stories that drive{' '}
            <span className="relative inline-block italic align-baseline">
              <span className="relative z-10">change</span>
              <span className="absolute inset-x-[-4px] bottom-1 h-2 bg-[#f6ae2d]/50" aria-hidden="true" />
            </span>
          </h2>
          <p
            className={`mt-10 md:mt-14 text-black text-[16px] md:text-[18px] leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            BigzImage partners with non-governmental organizations, research institutions, and international development actors to translate complex programmes into compelling, evidence-driven visual narratives.
          </p>
        </div>
      </div>
    </section>
  );
};

const HeroImage = () => (
  <section className="px-6 md:px-12 bg-white">
    <div className="max-w-[1500px] mx-auto">
      <Reveal>
        <div className="w-full aspect-[16/8] overflow-hidden">
          <img
            src="/images/documentaries/community-webp/_DSC0117.webp"
            alt="BigzImage team at work"
            className="w-full h-full object-cover"
          />
        </div>
      </Reveal>
    </div>
  </section>
);

const WhatWeDoSection = () => (
  <section className="bg-white text-black py-28 md:py-36 px-6 md:px-12">
    <div className="max-w-[1500px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <h3 className="text-[18px] md:text-[20px] font-medium tracking-tight">What We Do</h3>
        </div>
        <div>
          <p className="text-[18px] md:text-[20px] leading-[1.55] tracking-[-0.005em] text-black max-w-[44ch]">
            Through high-quality documentary film, photography, and strategic communications, we capture programme implementation, progress, and outcomes—clearly demonstrating results while amplifying the voices of communities.
          </p>
          <p className="text-[18px] md:text-[20px] leading-[1.55] tracking-[-0.005em] text-black max-w-[44ch] mt-6">
            By bridging the gap between data and storytelling, BigzImage enhances organizational visibility, strengthens accountability, and deepens donor engagement. Our work supports partners in communicating impact with clarity, credibility, and purpose across diverse development initiatives.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const MVVItem = ({ item, delay }) => (
  <Reveal delay={delay}>
    <div>
      <h4 className="text-[28px] md:text-[36px] font-medium tracking-[-0.01em] mb-6">
        {item.label}
      </h4>
      <p className="text-white/80 text-[16px] md:text-[18px] leading-[1.6] max-w-[48ch]">
        {item.text}
      </p>
    </div>
  </Reveal>
);

const MVVSection = () => {
const mvvData = [
  {
    label: "Our Mission",
    text: "To help organizations communicate their impact through powerful visual storytelling that honours people, strengthens trust, and makes results clear and compelling."
  },
  {
    label: "Our Vision",
    text: "To be the trusted visual storytelling partner for organizations driving positive change, helping them communicate impact with clarity, credibility, and lasting influence."
  },
  {
    label: "Our Values",
    text: "We are guided by authenticity, respect, and ethical storytelling. We value excellence, collaboration, and accountability in every project, ensuring impactful and meaningful communication for our clients."
  },
];

  return (
    <section className="bg-black text-white py-28 md:py-36 px-6 md:px-12">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
          <Reveal>
            <div className="sticky top-28 w-full aspect-[3/4] overflow-hidden md:max-w-[520px]">
              <img
                src="/images/isaac/KingKiddPH-82.webp"
                alt="BigzImage mission"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <div className="flex flex-col gap-20 md:gap-28">
            {mvvData.map((item, i) => (
              <MVVItem key={item.label} item={item} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => (
  <div className="bg-white text-black">
    <AboutHero />
    <HeroImage />
    <WhatWeDoSection />
    <MVVSection />
    <BrandLogos />
    <CTA />
  </div>
);

export default AboutPage;
