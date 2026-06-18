"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import ImageHeroNav from '../components/ImageHeroNav';
import RequestQuoteForm from '../components/forms/request-quote-form.jsx';
import Footer from '../components/Footer';

const RequestQuoteHero = () => {
  const heroRef = useRef(null);

  return (
    <div className="bg-white pt-8 md:pt-10 pb-6 md:pb-8 px-7 md:px-10 -mt-[92px] md:-mt-[110px]">
      <section
        ref={heroRef}
        className="relative min-h-[calc(100vh-1.25rem)] md:min-h-[calc(100vh-1.5rem)] w-full bg-black overflow-hidden flex flex-col"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/isaac/F4L TZ (9).webp"
            alt="Producer filming on location for BigzImage"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-950" />
          <div className="absolute -top-40 -left-56 w-[620px] h-[620px] rounded-full bg-[#475569] blur-[180px]" />
          <div className="absolute bottom-[-160px] right-[-120px] w-[720px] h-[720px] rounded-full bg-[#0f172a] blur-[220px]" />
          <div className="absolute top-1/3 right-1/4 w-[260px] h-[260px] rounded-full bg-[#f6ae2d]/20 blur-[140px]" />
        </div>

        <ImageHeroNav heroRef={heroRef} />

        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6 md:px-12 pt-32 md:pt-40 pb-20">
          <p className="text-[11px] tracking-[0.32em] uppercase text-white/70 mb-8">Request a Quote</p>
          <h1 className="text-white font-medium tracking-[-0.02em] leading-[1.05] max-w-[26ch] text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px]">
            Tell us what you need. We&apos;ll tailor the quote.
          </h1>
        </div>
      </section>
    </div>
  );
};

const RequestQuoteIntro = () => (
  <section className="bg-white text-black py-20 md:py-28 px-6 md:px-12">
    <div className="max-w-[1400px] mx-auto text-center">
      <p className="text-[11px] tracking-[0.32em] uppercase text-[#b08a5b] mb-6">Request a Quote</p>
      <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-medium tracking-[-0.02em] leading-[1.1] mb-8">
        Tell us about your programme, campaign, or event, and we&apos;ll shape the scope together.
      </h2>
      <p className="text-[16px] md:text-[18px] leading-[1.6] text-black max-w-[70ch] mx-auto">
        The more context you provide, the better we can align your visual strategy with outcomes, stakeholders, and delivery timelines. Our team reviews every submission manually to ensure you receive a thoughtful plan.
      </p>
    </div>
  </section>
);

const RequestQuoteFormSection = () => (
  <section className="bg-white pb-24 px-6 md:px-12">
    <div className="max-w-[1200px] mx-auto bg-white/80 border border-neutral-200/70 rounded-[40px] shadow-[0_40px_120px_-70px_rgba(15,23,42,0.6)] backdrop-blur-sm">
      <div className="px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="text-left md:text-center mb-12">
          <p className="text-[11px] tracking-[0.32em] uppercase text-[#b08a5b] mb-6">Project Brief</p>
          <h3 className="text-[30px] sm:text-[36px] md:text-[42px] font-medium tracking-[-0.02em] leading-[1.15] text-black mb-5">
            Share the essentials so we can design the right production plan.
          </h3>
          <p className="text-[15px] md:text-[17px] leading-relaxed text-black/80 max-w-[68ch] mx-auto">
            Whether you need corporate coverage, documentary storytelling, or full-service production, this form guides you through the details our producers need to prepare an accurate quote.
          </p>
        </div>
        <RequestQuoteForm />
      </div>
    </div>
  </section>
);

const RequestQuote = () => (
  <div className="bg-white text-black">
    <RequestQuoteHero />
    <RequestQuoteIntro />
    <RequestQuoteFormSection />
    <Footer />
  </div>
);

export default RequestQuote;
