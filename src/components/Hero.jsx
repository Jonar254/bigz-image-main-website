"use client";

import React, { useEffect, useRef, useState } from 'react';
import ImageHeroNav from './ImageHeroNav';
import Head from 'next/head';

const SLIDE_INTERVAL_MS = 3500;
const VISIBLE_SLIDES = 3;

const HeroBackgroundVideo = () => (
  <div className="absolute inset-0 overflow-hidden">
    <video
      className="h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      poster="/images/community-webp/9B3A0434.webp"
      preload="auto"
    >
      <source src="/optimized-website-reel.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black/45" />
  </div>
);

const HeroBackgroundLayers = () => (
  <>
    <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-neutral-900 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-neutral-950 blur-[140px]" />
    </div>
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      }}
    />
  </>
);

const BrandSlide = ({ item, isActive }) => (
  <div className="min-w-[180px]">
    <div
      className={`text-white text-[15px] tracking-tight transition-all duration-700 ${
        isActive ? 'border-b border-white pb-1 inline-block' : ''
      }`}
    >
      {item.name}
    </div>
    <div className="text-white/70 text-[15px] mt-2">{item.tagline}</div>
  </div>
);

const useRotatingIndex = (length, intervalMs) => {
  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    if (length <= 0) return undefined;
    const id = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [length, intervalMs]);
  return activeIdx;
};

const Hero = () => {
  const heroRef = useRef(null);
  // const activeIdx = useRotatingIndex(brandSlides.length, SLIDE_INTERVAL_MS);

  // const visibleSlides = Array.from({ length: VISIBLE_SLIDES }, (_, i) => {
  //   const realIdx = (activeIdx + i) % brandSlides.length;
  //   return { item: brandSlides[realIdx], position: i };
  // });

  return (
    <div className="bg-white pt-8 md:pt-10 pb-4 md:pb-6 px-7 md:px-10 -mt-[92px] md:-mt-[110px]">
      <section
        ref={heroRef}
        className="relative min-h-[calc(100vh-1.25rem)] md:min-h-[calc(100vh-1.5rem)] w-full bg-black overflow-hidden flex flex-col"
      >
        <HeroBackgroundVideo />
        <HeroBackgroundLayers />
        <ImageHeroNav heroRef={heroRef} />

        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 pt-32 md:pt-40">
          <h1 className="text-white font-medium tracking-[-0.02em] leading-[1.05] max-w-[18ch] text-[30px] sm:text-[42px] md:text-[56px] lg:text-[70px]">
            Making Impact Visible <br className="hidden md:block" /> Through Stories That Build Trust,
            Mobilize Funding, and Drive Action
          </h1>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/request-quote"
              className="px-8 py-3 bg-white text-black text-[15px] font-medium tracking-[0.08em] uppercase rounded-none hover:bg-neutral-200 transition-colors"
            >
              Request a Quote
            </a>
            <a
              href="/work"
              className="px-8 py-3 border border-white/60 text-white text-[15px] font-medium tracking-[0.08em] uppercase rounded-none hover:bg-white/10 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/**
         * Temporarily disabled brand slide ticker
         * <div className="relative z-10 px-6 md:px-12 pb-10">
         *   <div className="flex flex-wrap items-end gap-x-16 gap-y-4">
         *     {visibleSlides.map(({ item, position }) => (
         *       <BrandSlide
         *         key={`${item.name}-${position}`}
         *         item={item}
         *         isActive={position === 0}
         *       />
         *     ))}
         *   </div>
         * </div>
         */}
      </section>
    </div>
  );
};

export default Hero;
