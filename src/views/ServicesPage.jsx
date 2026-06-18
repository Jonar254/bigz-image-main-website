import React from 'react';
import CTA from '../components/CTA';
import Reveal from '../components/Reveal';

const servicesData = [
  {
    title: "Documentary Film",
    description: "We produce documentary-style success stories rooted in real experiences—capturing voices, outcomes, and transformation in ways that resonate with donors and key stakeholders.",
    image: "/images/documentaries/community-webp/9B3A0434.webp",
  },
  {
    title: "Documentary Photography",
    description: "Authentic, high-quality imagery that brings your programmes to life across reports, campaigns, and digital platforms.",
    image: "/images/documentaries/community-webp/BeatriceMumbi(27).webp",
  },
  {
    title: "Tailored Visual Content Packages",
    description: "Flexible content solutions designed to meet your needs—including raw footage for future use, staff portraits, and customized deliverables aligned with your budget, brand, and communication goals. Livestream services are also available where required.",
    image: "/images/documentaries/community-webp/NEXTGEN-132.webp",
  },
  {
    title: "Conference & Event Coverage",
    description: "Professional photo and video coverage for global events, seminars, workshops, cocktail receptions, and launch events. We capture key moments with precision and professionalism—supporting visibility, strengthening reporting, and enhancing brand positioning across multiple media platforms.",
    image: "/images/coorporates-webp/Global learning workshop (154).webp",
  },
];

const ServicesHero = () => (
  <section className="bg-white text-black pt-40 md:pt-52 pb-16 md:pb-24 px-6 md:px-12">
    <div className="max-w-[1500px] mx-auto">
      <p className="text-neutral-500 text-xs sm:text-sm tracking-[0.3em] uppercase mb-6">What We Do</p>
      <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-medium tracking-[-0.02em] leading-[1.1] max-w-[28ch]">
        Visual storytelling{' '}
        <span className="relative inline-block italic align-baseline">
          <span className="relative z-10">solutions</span>
          <span className="absolute inset-x-[-4px] bottom-1 h-2 bg-[#f6ae2d]/50" aria-hidden="true" />
        </span>
      </h2>
      <p className="mt-10 md:mt-14 text-black text-[16px] md:text-[18px] max-w-[58ch] leading-relaxed">
        We deliver high-quality visual storytelling solutions that translate your work into compelling, evidence-driven narratives for donors, partners, and stakeholders.
      </p>
    </div>
  </section>
);

const ServiceItem = ({ service, index, delay }) => (
  <Reveal delay={delay}>
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
      <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
        <div className="w-full aspect-[16/10] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
        <h3 className="text-[28px] md:text-[36px] font-medium tracking-[-0.01em] mb-6">
          {service.title}
        </h3>
        <p className="text-black text-[16px] md:text-[18px] leading-[1.6] max-w-[48ch]">
          {service.description}
        </p>
      </div>
    </div>
  </Reveal>
);

const ServicesSection = () => (
  <section className="bg-white text-black pt-28 md:pt-36  px-6 md:px-12">
    <div className="max-w-[1500px] mx-auto">
      <div className="flex flex-col gap-28 md:gap-36">
        {servicesData.map((service, i) => (
          <ServiceItem key={service.title} service={service} index={i} delay={i * 100} />
        ))}
      </div>
    </div>
  </section>
);

const ServicesPage = () => (
  <div className="bg-white text-black">
    <ServicesHero />
    <ServicesSection />
    <CTA />
  </div>
);

export default ServicesPage;
