"use client";

import Image from 'next/image';
import { useRef } from 'react';
import { documentaryVideographyProjects } from '../data/projects';
import { Video } from 'lucide-react';
import CTA from '../components/CTA';
import ImageHeroNav from '../components/ImageHeroNav';
import useReveal from '../hooks/useReveal';
import YoutubeLitePlayer from '../components/YoutubeLitePlayer';

const VideoProjectCard = ({ project }) => {
  const { ref, inView } = useReveal();

  return (
    <div className="w-full">
      <div
        ref={ref}
        className={`group relative w-full overflow-hidden bg-neutral-100 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ aspectRatio: '16/9' }}
      >
        <YoutubeLitePlayer
          videoUrl={project.videoUrl}
          title={project.title}
          posterFallback={project.image}
          className="absolute inset-0"
        />
        <div className="pointer-events-none absolute top-4 left-4 right-4 flex items-center justify-between text-white text-[12px] uppercase tracking-[0.18em] z-10">
          <span className="flex items-center gap-2">
            <Video size={14} />
            {project.category}
          </span>
          {project.client && <span className="opacity-70">{project.client}</span>}
        </div>
      </div>
      <div
        className={`mt-5 md:mt-6 transition-all duration-700 delay-100 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h3 className="text-black text-[20px] md:text-[24px] font-medium tracking-[-0.01em] leading-tight">
          {project.title}
        </h3>
        <p className="text-black/60 text-[14px] md:text-[16px] mt-3 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

const DocumentaryVideographyHeader = () => {
  const heroRef = useRef(null);
  return (
  <div className="bg-white pt-8 md:pt-10 pb-6 md:pb-8 px-7 md:px-10 -mt-[92px] md:-mt-[110px]">
    <section ref={heroRef} className="relative min-h-[calc(100vh-1.25rem)] md:min-h-[calc(100vh-1.5rem)] w-full bg-black overflow-hidden flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/documentaries/youth-empowerment-webp/OmarHussein(4).webp"
          alt="Documentary videography"
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
          Documentary Videography
        </h1>
        <p className="mt-8 text-white/90 text-[16px] md:text-[18px] max-w-[58ch] leading-relaxed">
          We produce documentary-style success stories rooted in real experiences—capturing voices, outcomes, and transformation in ways that resonate with donors and key stakeholders.
        </p>
      </div>
    </section>
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
          <Video size={20} className="text-[#f6ae2d]" />
          <span className="text-black text-[12px] uppercase tracking-[0.18em]">Impact Storytelling & Documentary Production</span>
        </div>
        <h2 className="text-black text-[40px] md:text-[56px] font-medium tracking-[-0.02em] leading-tight mb-6">
          Documentary storytelling that drives change
        </h2>
        <p className="text-black/70 text-[16px] md:text-[18px] max-w-[70ch] leading-relaxed">
          We produce evidence-based visual stories that demonstrate program impact, amplify visibility, and translate complex outcomes into compelling narratives for donors and stakeholders.
        </p>
      </div>
    </section>
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

const ProjectRow = ({ row }) => {
  if (row.length === 1) {
    const project = row[0];
    return (
      <div className="w-full">
        <VideoProjectCard project={project} />
      </div>
    );
  }
  const [a, b] = row;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-12 items-start">
      <VideoProjectCard project={a} />
      {b && (
        <VideoProjectCard project={b} />
      )}
    </div>
  );
};

const DocumentaryVideography = () => {
  const rows = buildRows(documentaryVideographyProjects);

  return (
    <div className="bg-white text-black">
      <DocumentaryVideographyHeader />
      <PortfolioSection />
      <section className="px-6 md:px-12 pb-32 md:pb-40">
        <div className="max-w-[1500px] mx-auto flex flex-col gap-16 md:gap-24">
          {rows.map((row) => (
            <ProjectRow
              key={row.map((p) => p.id).join('-')}
              row={row}
            />
          ))}
        </div>
      </section>
      <CTA />
    </div>
  );
};

export default DocumentaryVideography;
