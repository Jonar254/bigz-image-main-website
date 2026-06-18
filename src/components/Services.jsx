"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/mock';

const SERVICE_LINKS = {
  'corporate-events': '/corporate',
  documentaries: '/documentaries',
};

const SERVICE_PRESENTATION = {
  'corporate-events': {
    title: 'Corporate',
    subtitle: 'professional moments &',
    scriptText: 'storytelling',
  },
  documentaries: {
    title: 'Documentaries',
    subtitle: 'impact narratives &',
    scriptText: 'change',
  },
};

const StyledServiceCard = ({ service, index, presentation }) => (
  <div
    className="group relative h-[460px] overflow-hidden"
    data-aos="fade-up"
    data-aos-delay={index * 150}
  >
    <Link
      href={SERVICE_LINKS[service.id] ?? '/services'}
      className="block h-full"
    >
      <div className="absolute inset-0">
        <Image
          src={encodeURI(service.image)}
          alt={service.label}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-[transform,filter] duration-[1200ms] ease-out grayscale group-hover:grayscale-0 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-neutral-950/55 transition-colors duration-500 group-hover:bg-neutral-950/35" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-10 text-center text-white">
        <span className="sr-only">{service.label}</span>

        <div className="space-y-3">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white">Our Services</p>
          <h3 className="text-[30px] sm:text-[36px] font-light tracking-[0.32em] uppercase">
            {presentation.title}
          </h3>
          {presentation.subtitle && (
            <p className="text-[15px] uppercase tracking-[0.32em] text-white">
              {presentation.subtitle}
            </p>
          )}
          {presentation.scriptText && (
            <p className="text-[15px] uppercase tracking-[0.32em] text-white">
              {presentation.scriptText}
            </p>
          )}
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
    </Link>
  </div>
);

const DefaultServiceCard = ({ service }) => (
  <Link
    href={SERVICE_LINKS[service.id] ?? '/services'}
    className="group block h-full"
  >
    <div className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral-200 hover:border-neutral-300 h-full">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={encodeURI(service.image)}
          alt={service.label}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-white bg-white/20 backdrop-blur">
          Service
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-[30px] sm:text-[36px] font-light tracking-[0.32em] uppercase text-white">
            {service.label}
          </h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-black text-[13px] leading-relaxed mb-4">
          {service.description}
        </p>
        <div className="inline-flex items-center text-black font-medium text-[13px] group-hover:text-neutral-600 transition-colors duration-300 tracking-tight">
          Learn more
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  </Link>
);

const ServiceCard = ({ service, index }) => {
  const presentation = SERVICE_PRESENTATION[service.id];

  if (presentation) {
    return <StyledServiceCard service={service} index={index} presentation={presentation} />;
  }

  return <DefaultServiceCard service={service} />;
};

const Services = () => {
  if (!services.length) {
    return null;
  }

  return (
    <section id="services" className="bg-white text-black py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-[1500px] mx-auto">
        <div className="mb-12 md:mb-16 max-w-3xl space-y-5">
          <p className="text-neutral-500 text-xs sm:text-sm tracking-[0.3em] uppercase">What We Do</p>
          <h2 className="text-[28px] sm:text-[34px] md:text-[42px] font-medium tracking-[-0.02em] leading-[1.15]">
            We deliver high-quality visual storytelling solutions that translate your work into compelling, evidence-driven narratives for donors, partners, and stakeholders.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


