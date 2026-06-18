"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/mock';
import useScrollProgress from '../hooks/useScrollProgress';

const AnimatedQuote = ({ words, progress, isTransitioning, isActive, className = '' }) => {
  const total = words.length;
  return (
    <div className={`relative pl-6 ${className}`}>
      <span
        className="absolute -bottom-8 right-2 text-[64px] leading-none text-white/15 select-none"
        aria-hidden="true"
      >
        ”
      </span>
      <p
        className={`relative z-10 text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] leading-[1.3] tracking-[-0.02em] font-medium transition-all duration-500 ${
          isActive ? (isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0') : 'opacity-0 translate-y-2'
        }`}
      >
        {words.map((word, i) => {
          const lit = isActive && progress > i / total;
          const trailing = i < words.length - 1 ? ' ' : '';
          return (
            <span
              key={`q-${i}-${word}`}
              className={`transition-colors duration-300 ${
                lit ? 'text-white' : 'text-white/30'
              }`}
            >
              {word}
              {trailing}
            </span>
          );
        })}
      </p>
    </div>
  );
};

const Testimonial = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [viewportRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false });
  const active = testimonials[activeIndex] ?? testimonials[0];
  const progress = useScrollProgress(sectionRef, { startVh: 0.85, endVh: 0.15 });
  const words = `${active.highlight} ${active.body}`.split(' ');

  const scrollTo = useCallback(
    (index) => {
      if (!emblaApi) return;
      setIsTransitioning(true);
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    setIsTransitioning(true);
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    setIsTransitioning(true);
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return undefined;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
      setIsTransitioning(false);
    };

    emblaApi.on('select', onSelect);
    onSelect();

    const autoplayId = setInterval(() => {
      setIsTransitioning(true);
      emblaApi.scrollNext();
    }, 9000);

    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(autoplayId);
    };
  }, [emblaApi]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0b3c5d] text-white py-20 md:py-30 px-6 md:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b3c5d] via-[#0b3c5d] to-[#081321] opacity-90" aria-hidden="true" />
      <div className="absolute inset-y-0 left-0 w-24 bg-[#f6ae2d]/5 blur-3xl" aria-hidden="true" />
      <div className="relative max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-4 space-y-8">
            <p className="text-white/60 text-xs sm:text-sm tracking-[0.28em] uppercase">Voices of our partners</p>
            <h2 className="text-[32px] sm:text-[40px] md:text-[46px] font-medium tracking-[-0.015em] leading-[1.15]">
              Don&apos;t just take our{' '}
              <span className="relative inline-block italic">
                <span className="relative z-10">word</span>
                <span className="absolute inset-x-[-4px] bottom-1 h-2 bg-[#f6ae2d]/50" aria-hidden="true" />
              </span>{' '}
              for it
            </h2>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Previous testimonial"
                className="w-12 h-12 border border-white/25 flex items-center justify-center hover:border-[#f6ae2d] hover:text-[#f6ae2d] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                aria-label="Next testimonial"
                className="w-12 h-12 border border-white/25 flex items-center justify-center hover:border-[#f6ae2d] hover:text-[#f6ae2d] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="ml-4 text-[12px] uppercase tracking-[0.22em] text-white/55">
                {String(activeIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </div>
            </div>
          </div>

          <div className="md:col-span-8 md:ml-0 flex flex-col h-full">
            <div className="overflow-hidden" ref={viewportRef}>
              <div className="flex">
                {testimonials.map((item, index) => {
                  const wordsForSlide = `${item.highlight} ${item.body}`.split(' ');
                  const isActive = index === activeIndex;
                  return (
                    <div key={item.name} className="flex-[0_0_100%] pr-2 md:pr-4">
                      <Quote className="w-12 h-12 text-[#f6ae2d]/70 mb-6" />
                      <AnimatedQuote
                        words={wordsForSlide}
                        progress={progress}
                        isTransitioning={!isActive || isTransitioning}
                        isActive={isActive}
                        className="min-h-[280px] sm:min-h-[320px] md:min-h-[360px]"
                      />
                      <div
                        className={`mt-10 md:mt-14 transition-all duration-500 min-h-[70px] md:min-h-[80px] ${
                          isActive && !isTransitioning ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                        }`}
                      >
                        <div className="text-[17px] md:text-[19px] font-medium text-white/95">{item.name}</div>
                        <div className="text-white/60 text-[13px] md:text-[14px] mt-1">{item.role}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => scrollTo(index)}
                  className={`px-4 py-2 text-sm uppercase tracking-[0.2em] border transition-colors duration-300 ${
                    index === activeIndex
                      ? 'border-[#f6ae2d] text-[#f6ae2d] bg-[#f6ae2d]/10'
                      : 'border-white/20 text-white/60 hover:text-white hover:border-white/60'
                  }`}
                >
                  {item.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
