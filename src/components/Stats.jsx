"use client";

import React, { useRef } from 'react';
import { stats } from '../data/mock';
import useScrollProgress from '../hooks/useScrollProgress';

const HEADLINE =
  'BigzImage is a visual storytelling partner for non-governmental and development organizations across Africa. We transform complex programmes into powerful visual stories that engage donors, strengthen credibility, amplify visibility, and communicate real impact.';

const AnimatedHeadline = ({ progress }) => {
  const words = HEADLINE.split(' ');
  const total = words.length;
  return (
    <p className="text-[26px] sm:text-[34px] md:text-[44px] lg:text-[54px] leading-[1.15] tracking-[-0.02em] font-medium max-w-[60ch] text-balance mx-auto text-center px-4">
      {words.map((word, i) => {
        const lit = progress > i / total;
        const trailing = i < words.length - 1 ? ' ' : '';
        return (
          <span
            key={`word-${i}-${word}`}
            className={`transition-colors duration-300 ${
              lit ? 'text-black' : 'text-neutral-300'
            }`}
          >
            {word}
            {trailing}
          </span>
        );
      })}
    </p>
  );
};

const StatItem = ({ value, label }) => (
  <div className="flex flex-col items-center text-center min-w-[190px]">
    <div className="text-[40px] sm:text-[50px] md:text-[60px] font-medium tracking-[-0.02em] leading-none">
      {value}
    </div>
    <div className="text-[13px] sm:text-[15px] text-neutral-500 mt-3 max-w-[20ch] tracking-tight">
      {label}
    </div>
  </div>
);

const StatsSection = () => {
  const sectionRef = useRef(null);
  const progress = useScrollProgress(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="bg-white text-black py-16 md:py-24 px-6 md:px-12"
    >
      <div className="max-w-[1500px] mx-auto text-center">
        <AnimatedHeadline progress={progress} />
        <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-x-10 gap-y-12 md:gap-x-14 md:gap-y-14 overflow-x-auto pb-2">
          {stats.map((s) => (
            <StatItem key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
