"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { whyBigz } from '../data/mock';

const WhyBigz = () => {
  if (!whyBigz.length) {
    return null;
  }

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="why-bigz" ref={sectionRef} className="bg-white text-black py-20 md:py-30 px-6 md:px-12">
      <div className="max-w-[1500px] mx-auto space-y-14">
        <div className="text-center max-w-5xl mx-auto space-y-5">
          <div
            className={`inline-flex items-center text-neutral-500 text-xs md:text-sm tracking-[0.3em] uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Why partners choose BigzImage
          </div>
          <h2
            className={`text-[32px] sm:text-[42px] md:text-[50px] font-medium tracking-[-0.02em] leading-[1.1] md:whitespace-nowrap mx-auto transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            A storytelling partner who{' '}
            <span className="relative inline-block italic align-baseline">
              <span className="relative z-10">discovery to delivery</span>
              <span className="absolute inset-x-[-4px] bottom-1 h-2 bg-[#f6ae2d]/50" aria-hidden="true" />
            </span>
          </h2>

          <p
            className={`text-black text-base sm:text-lg leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            We partner with NGOs, research institutions, and global development programmes—speaking the language of
            accountability, evidence, and lived experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-[22px] md:text-[26px] text-center font-medium tracking-[-0.015em]">What working with us feels like</h3>
            <ul className="divide-y divide-neutral-200 border-t border-neutral-200/80 bg-white">
              {whyBigz.map((item, index) => (
                <li
                  key={item.title}
                  className="py-7 md:py-8 flex items-start gap-4 group hover:bg-neutral-50 transition-colors duration-500 px-2 -mx-2"
                >
                  <Check className="w-5 h-5 text-[#f6ae2d] mt-1 shrink-0" />
                  <div className="space-y-3">
                    <h4 className="text-[20px] sm:text-[22px] md:text-[24px] font-medium tracking-[-0.01em] leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-black text-sm md:text-base leading-relaxed md:pl-1 md:pr-6">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5 relative aspect-[3/4]">
            <Image
              src="/images/community-webp/_DSC0594.webp"
              alt="Community storytelling"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute -top-4 -left-4 h-16 w-16 border border-black/20" />
            <div className="absolute -bottom-5 -right-5 h-24 w-24 border border-[#f6ae2d]/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
;

export default WhyBigz;
