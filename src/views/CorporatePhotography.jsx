"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { corporatePhotographyProjects } from '../data/projects';
import { Camera } from 'lucide-react';
import CTA from '../components/CTA';
import ImageHeroNav from '../components/ImageHeroNav';
import useReveal from '../hooks/useReveal';

const ProjectCard = ({ project, onHover, onLeave, index }) => {
  const { ref, inView } = useReveal();
  const [loaded, setLoaded] = useState(false);
  const metaTop = project.category || 'Project';
  const metaLines = [project.client, project.date].filter(Boolean);
  const isPriority = index < 2;

  return (
    <Link
      href={`/corporate/photography/${project.slug}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group block w-full"
    >
      <div
        ref={ref}
        className={`relative h-[460px] overflow-hidden transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            onLoad={() => setLoaded(true)}
            priority={isPriority}
            loading={isPriority ? 'eager' : 'lazy'}
            className={`object-cover transition-[transform,filter] duration-[1200ms] ease-out grayscale ${
              loaded ? 'opacity-100' : 'opacity-0'
            } group-hover:grayscale-0 group-hover:scale-[1.05]`}
          />
          <div className="absolute inset-0 bg-neutral-950/55 transition-colors duration-500 group-hover:bg-neutral-950/35" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-10 text-center text-white">
          <span className="sr-only">{project.title}</span>

          <div className="space-y-3">
            <p className="text-[11px] tracking-[0.35em] uppercase text-white">{metaTop}</p>
            <h3 className="text-[30px] sm:text-[36px] font-light tracking-[0.32em] uppercase">
              {project.title}
            </h3>
            {metaLines.map((line, index) => (
              <p key={`${project.slug}-${index}`} className="text-[15px] uppercase tracking-[0.32em] text-white">
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

const buildRows = (projects) => {
  const rows = [];
  let i = 0;
  while (i < projects.length) {
    rows.push(projects.slice(i, i + 2));
    i += 2;
  }
  return rows;
};

const CorporatePhotographyHeader = () => {
  const heroRef = useRef(null);
  return (
  <div className="bg-white pt-8 md:pt-10 pb-6 md:pb-8 px-7 md:px-10 -mt-[92px] md:-mt-[110px]">
    <section ref={heroRef} className="relative min-h-[calc(100vh-1.25rem)] md:min-h-[calc(100vh-1.5rem)] w-full bg-black overflow-hidden flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/corporate/AGECS CONFERENCE-webp/Global learning 2024 day five-158.webp"
          alt="Corporate photography showcase"
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
          Corporate Photography
        </h1>
        <p className="mt-8 text-white/90 text-[16px] md:text-[18px] max-w-[58ch] leading-relaxed">
          Make your event look as professional as it feels. We capture corporate moments—clean, discreet, and brand-ready. Conferences. Seminars. Launches. Executive events.
        </p>
      </div>
    </section>
  </div>
  );
};

const LastProjectCard = ({ project, onHover, onLeave, index }) => {
  const { ref, inView } = useReveal();
  const [loaded, setLoaded] = useState(false);
  const metaTop = project.category || 'Project';
  const metaLines = [project.client, project.date].filter(Boolean);
  const isPriority = index < 2;

  return (
    <div className="w-full">
      <Link
        href={`/corporate/photography/${project.slug}`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        className="group block w-full"
      >
        <div
          ref={ref}
          className={`relative h-[70vh] overflow-hidden transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="100vw"
              onLoad={() => setLoaded(true)}
              priority={isPriority}
              loading={isPriority ? 'eager' : 'lazy'}
              className={`object-cover transition-[transform,filter] duration-[1200ms] ease-out grayscale ${
                loaded ? 'opacity-100' : 'opacity-0'
              } group-hover:grayscale-0 group-hover:scale-[1.05]`}
            />
            <div className="absolute inset-0 bg-neutral-950/55 transition-colors duration-500 group-hover:bg-neutral-950/35" />
          </div>

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-10 text-center text-white">
            <span className="sr-only">{project.title}</span>

            <div className="space-y-3">
              <p className="text-[11px] tracking-[0.35em] uppercase text-white">{metaTop}</p>
              <h3 className="text-[30px] sm:text-[36px] font-light tracking-[0.32em] uppercase">
                {project.title}
              </h3>
              {metaLines.map((line, index) => (
                <p key={`${project.slug}-${index}`} className="text-[15px] uppercase tracking-[0.32em] text-white">
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
    </div>
  );
};

const ProjectRow = ({ row, onHover, onLeave, rowIndex }) => {
  if (row.length === 1) {
    const project = row[0];
    return (
      <LastProjectCard
        project={project}
        onHover={() => onHover(project.id)}
        onLeave={onLeave}
        index={rowIndex * 2}
      />
    );
  }
  const [a, b] = row;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-12 items-start">
      <ProjectCard
        project={a}
        onHover={() => onHover(a.id)}
        onLeave={onLeave}
        index={rowIndex * 2}
      />
      {b && (
        <ProjectCard
          project={b}
          onHover={() => onHover(b.id)}
          onLeave={onLeave}
          index={rowIndex * 2 + 1}
        />
      )}
    </div>
  );
};

const HoverIndicator = ({ visible }) => {
  if (!visible) return null;
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
      <div className="px-5 py-2.5 bg-black text-white text-[12px] uppercase tracking-[0.18em] rounded-full opacity-90">
        View Project
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const { ref, inView } = useReveal();
  
  return (
    <section className="py-16 md:py-20 px-6 md:px-12 bg-neutral-50">
      <div
        ref={ref}
        className={`max-w-[1500px] mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex items-center gap-2 mb-4">
          <Camera size={20} className="text-[#f6ae2d]" />
          <span className="text-black text-[12px] uppercase tracking-[0.18em]">Photography Portfolio</span>
        </div>
        <h2 className="text-black text-[40px] md:text-[56px] font-medium tracking-[-0.02em] leading-tight mb-6">
          Corporate photography projects
        </h2>
        <p className="text-black/70 text-[16px] md:text-[18px] max-w-[70ch] leading-relaxed">
          Professional photography for conferences, launches, partnerships, and institutional milestones. Polished media assets for PR, donor reporting, and stakeholder communication.
        </p>
      </div>
    </section>
  );
};

const CorporatePhotography = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const rows = buildRows(corporatePhotographyProjects);

  return (
    <div className="bg-white text-black">
      <CorporatePhotographyHeader />
      <PortfolioSection />
      <section className="px-6 md:px-12 pb-32 md:pb-40">
        <div className="max-w-[1500px] mx-auto flex flex-col gap-16 md:gap-24">
          {rows.map((row, rowIndex) => (
            <ProjectRow
              key={row.map((p) => p.id).join('-')}
              row={row}
              rowIndex={rowIndex}
              onHover={setHoveredId}
              onLeave={() => setHoveredId(null)}
            />
          ))}
        </div>
      </section>
      <HoverIndicator visible={Boolean(hoveredId)} />
      <CTA />
    </div>
  );
};

export default CorporatePhotography;
