"use client";

import React from 'react';
import { TrendingUp } from 'lucide-react';
import { results } from '../data/mock';

const Results = () => {
  if (!results.length) {
    return null;
  }

  return (
    <section id="results" className="bg-white text-black py-18 md:py-28 px-6 md:px-12">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5 space-y-6">
          <p className="text-neutral-500 text-xs sm:text-sm tracking-[0.3em] uppercase">Results</p>
          <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-medium tracking-[-0.02em] leading-[1.1]">
            Visual excellence with{' '}
            <span className="relative inline-block italic">
              <span className="relative z-10">strategic outcomes</span>
              <span className="absolute inset-x-[-4px] bottom-1 h-2 bg-[#f6ae2d]/50" aria-hidden="true" />
            </span>
            .
          </h2>
          <p className="text-black text-base sm:text-lg leading-relaxed max-w-[60ch]">
            By combining production craft with narrative strategy, our work helps you present impact with clarity,
            confidence, and measurable value.
          </p>
        </div>

        <ul className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8">
          {results.map((item, index) => (
            <li
              key={item}
              className="border border-neutral-200/90 p-6 md:p-7 bg-white transition-colors duration-500 hover:bg-neutral-50 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#f6ae2d] text-2xl font-medium tracking-tight">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <TrendingUp className="w-5 h-5 text-neutral-400 transition-colors duration-300 group-hover:text-[#f6ae2d]" />
              </div>
              <p className="text-neutral-800 text-lg md:text-xl font-medium leading-snug tracking-tight">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Results;
