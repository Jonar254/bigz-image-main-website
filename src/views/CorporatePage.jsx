"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import CTA from '../components/CTA';
import ImageHeroNav from '../components/ImageHeroNav';
import useReveal from '../hooks/useReveal';
import { corporatePhotographyProjects, corporateVideographyProjects } from '../data/projects';

const CorporateHero = () => {
  const heroRef = useRef(null);
  return (
  <div className="bg-white md:pt-10 md:pb-8 md:px-10 md:-mt-[110px]">
    <section ref={heroRef} className="relative min-h-screen md:min-h-[calc(100vh-1.5rem)] w-full bg-black overflow-hidden flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/corporate/AGECS CONFERENCE-webp/Global learning 2024 day five-72.webp"
          alt="Corporate event coverage"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-neutral-900 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-neutral-950 blur-[140px]" />
      </div>

      <ImageHeroNav heroRef={heroRef} />

      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6 md:px-12 pt-32 md:pt-40 pb-20">
        <h1 className="text-white font-medium tracking-[-0.02em] leading-[1.05] max-w-[24ch] text-[32px] sm:text-[42px] md:text-[50px]">
          Corporate & Stakeholder Event Coverage
        </h1>
        <p className="mt-8 text-white/90 text-[16px] md:text-[18px] max-w-[58ch] leading-relaxed">
          Professional photo and video coverage that captures key moments for visibility, reporting, and brand positioning for multi-platform use.
        </p>
      </div>
    </section>
  </div>
  );
};

const IntroSection = () => (
  <section className="bg-white text-black py-20 md:py-28 px-6 md:px-12">
    <div className="max-w-[1500px] mx-auto text-center">
      <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-medium tracking-[-0.02em] leading-[1.1] mb-8">
        Professional event coverage{' '}
        <span className="relative inline-block italic">
          <span className="relative z-10">for impact</span>
          <span className="absolute inset-x-[-4px] bottom-1 h-2 bg-[#f6ae2d]/50" aria-hidden="true" />
        </span>
      </h2>
      <p className="text-[16px] md:text-[18px] leading-[1.6] text-black max-w-[62ch] mx-auto">
        Corporate storytelling, event coverage, and executive visuals. We produce polished media assets for PR, donor reporting, stakeholder communication, and digital campaigns.
      </p>
    </div>
  </section>
);

const CARD_PRESENTATION = {
  'Corporate Photography': {
    topLabel: 'Corporate Portfolio',
    title: 'Corporate Photography',
    subtitle: 'professional moments &',
    scriptText: 'storytelling',
  },
  'Corporate Videography': {
    topLabel: 'Corporate Portfolio',
    title: 'Corporate Videography',
    subtitle: 'strategic films &',
    scriptText: 'impact',
  },
};

const ServiceCard = ({ title, description, image, href, delay }) => {
  const { ref, inView } = useReveal();
  const [loaded, setLoaded] = useState(false);
  const presentation = CARD_PRESENTATION[title] ?? {
    topLabel: 'Our Services',
    title,
    subtitle: '',
    scriptText: '',
  };
  const highlightLines = [presentation.subtitle, presentation.scriptText].filter(Boolean);

  return (
    <Link href={href} className="group block w-full">
      <div
        ref={ref}
        className={`relative h-[460px] overflow-hidden transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            onLoad={() => setLoaded(true)}
            className={`object-cover transition-[transform,filter] duration-[1200ms] ease-out grayscale ${
              loaded ? 'opacity-100' : 'opacity-0'
            } group-hover:grayscale-0 group-hover:scale-[1.05]`}
          />
          <div className="absolute inset-0 bg-neutral-950/55 transition-colors duration-500 group-hover:bg-neutral-950/35" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-10 text-center text-white">
          <span className="sr-only">{title}</span>

          <div className="space-y-3">
            <p className="text-[11px] tracking-[0.35em] uppercase text-white">{presentation.topLabel}</p>
            <h3 className="text-[30px] sm:text-[36px] font-light tracking-[0.32em] uppercase">
              {presentation.title}
            </h3>
            {highlightLines.map((line, index) => (
              <p key={`${title}-${index}`} className="text-[15px] uppercase tracking-[0.32em] text-white">
                {line}
              </p>
            ))}
          </div>

          <div className="mt-10">
            <svg
              className="w-9 h-9 text-white/70 transition-opacity duration-300 group-hover:text-white group-hover:opacity-100 opacity-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      title: "Corporate Photography",
      description: "Professional event photography that captures key moments—conferences, launches, partnerships, and institutional milestones. Polished media assets for PR, donor reporting, and digital campaigns.",
      image: "/images/coorporates-webp/AgaKhanFoundation-123.webp",
      href: "/corporate/photography",
    },
    {
      title: "Corporate Videography",
      description: "Professional video coverage for corporate events, stakeholder engagements, and brand positioning. We produce polished video assets ready for multi-platform use.",
      image: "/images/coorporates-webp/Global learning workshop (112).webp",
      href: "/corporate/videography",
    },
  ];

  return (
    <section className="bg-white px-6 md:px-12 pb-32 md:pb-40">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              href={service.href}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CorporatePage = () => (
  <div className="bg-white text-black">
    <CorporateHero />
    <IntroSection />
    <ServicesGrid />
    <CTA />
  </div>
);

export default CorporatePage;
