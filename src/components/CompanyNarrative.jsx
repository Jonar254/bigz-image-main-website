"use client";

import React, { useRef } from 'react';
import useScrollProgress from '../hooks/useScrollProgress';

const HEADLINE =
  'BigzImage partners with non-governmental organizations, research institutions, and international development actors to translate complex programmes into compelling, evidence-driven visual narratives. Through high-quality documentary film, photography, and strategic communications, we capture programme implementation, progress, and outcomes—clearly demonstrating results while amplifying the voices of communities.';

const AnimatedHeadline = ({ progress }) => {
  const words = HEADLINE.split(' ');
  const total = words.length;

  return (
    <p className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] leading-[1.2] tracking-[-0.02em] font-medium max-w-[60ch] text-balance mx-auto text-center px-4">
      {words.map((word, i) => {
        const lit = progress > i / total;
        const trailing = i < words.length - 1 ? ' ' : '';
        return (
          <span
            key={`word-${i}-${word}`}
            className={`transition-colors duration-300 ${lit ? 'text-black' : 'text-neutral-300'}`}
          >
            {word}
            {trailing}
          </span>
        );
      })}
    </p>
  );
};

const CompanyNarrative = () => {
  const sectionRef = useRef(null);
  const progress = useScrollProgress(sectionRef);

  return (
    <section ref={sectionRef} className="bg-white text-black py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-[1500px] mx-auto text-center">
        <AnimatedHeadline progress={progress} />
      </div>
    </section>
  );
};

export default CompanyNarrative;
