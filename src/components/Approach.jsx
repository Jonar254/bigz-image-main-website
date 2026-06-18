"use client";

import React from 'react';

const STAGES = [
  {
    label: 'Stage 1',
    title: 'Conceptual Meeting',
    description:
      'We engage with your team to understand your objectives, target audience, and communication challenges.',
  },
  {
    label: 'Stage 2',
    title: 'Strategy & Planning',
    description:
      'We define the narrative approach, key messages, and production plan aligned with your programme goals.',
  },
  {
    label: 'Stage 3',
    title: 'Pre and Post production',
    description:
      'We capture authentic stories and real impact in the field through professional photography and documentary filmmaking.',
  },
  {
    label: 'Stage 4',
    title: 'Delivery',
    description:
      'You receive high-quality, ready-to-use visual content optimized for reporting, communications, and multi-platform use.',
  },
];

const Approach = () => {
  return (
    <section id="approach" className="bg-white text-black py-16 md:py-28 px-6 md:px-12">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 md:mb-16">
          <div className="md:col-span-7 space-y-6">
            <p className="text-neutral-500 text-xs sm:text-sm tracking-[0.3em] uppercase">Our Approach</p>
            <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-medium tracking-[-0.02em] leading-[1.1]">
              A process designed for clarity,{' '}
              <span className="relative inline-block italic">
                <span className="relative z-10">collaboration</span>
                <span className="absolute inset-x-[-4px] bottom-1 h-2 bg-[#f6ae2d]/50" aria-hidden="true" />
              </span>{' '}
              & craft.
            </h2>
            <p className="text-black text-base sm:text-lg leading-relaxed max-w-[60ch]">
              Four deliberate stages that align production with programme goals—ensuring every asset supports reporting,
              communications, and donor engagement with equal strength.
            </p>
          </div>
        </div>

        <div className="rounded-none border border-neutral-200 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {STAGES.map((stage, index) => (
              <div
                key={stage.title}
                className={`relative p-8 md:p-9 border-t border-neutral-200/80 bg-white transition-colors duration-500 hover:bg-neutral-50 ${
                  index < STAGES.length - 1 ? 'lg:border-r lg:border-neutral-200/80' : ''
                } ${index === 0 ? 'border-t-0' : ''}`}
              >
                <div className="absolute -top-[9px] left-8 md:left-9 w-3 h-3 bg-[#f6ae2d]" />
                <p className="text-black text-[11px] uppercase tracking-[0.28em] mb-4">{stage.label}</p>
                <h3 className="text-[22px] sm:text-[24px] font-medium tracking-[-0.01em] leading-snug text-black mb-4 transition-colors duration-300 group-hover:text-[#c97d16]">
                  {stage.title}
                </h3>
                <p className="text-black text-sm sm:text-[15px] leading-relaxed">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
