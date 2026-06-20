"use client";

import { useRef } from 'react';
import Link from 'next/link';
import { allProjects, getProjectPath } from '../data/projects';
import CTA from '../components/CTA';
import ImageHeroNav from '../components/ImageHeroNav';
import Reveal from '../components/Reveal';
import { ArrowUpRight, ArrowLeft, Video } from 'lucide-react';

const VideoEmbed = ({ project }) => {
  if (!project.videoUrl) {
    return null;
  }

  return (
    <section className="px-6 md:px-12 py-12 md:py-16">
      <div className="max-w-[1500px] mx-auto">
        <Reveal>
          <div className="w-full aspect-[16/9] overflow-hidden bg-black">
            <iframe
              src={project.videoUrl}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const ImageGridItem = ({ src, alt, delay }) => (
  <Reveal delay={delay}>
    <div className="w-full aspect-[16/10] overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-[1200ms] ease-out"
      />
    </div>
  </Reveal>
);

const ImageGrid = ({ images, altPrefix }) => (
  <section className="px-6 md:px-12 py-12 md:py-16">
    <div className="max-w-[1500px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {images.map((src, i) => (
          <ImageGridItem
            key={`${altPrefix}-${i}-${src}`}
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            delay={i * 80}
          />
        ))}
      </div>
    </div>
  </section>
);

const WideImage = ({ src, alt }) => (
  <section className="px-6 md:px-12 py-12 md:py-16">
    <div className="max-w-[1500px] mx-auto">
      <Reveal>
        <div className="w-full aspect-[16/9] overflow-hidden">
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
      </Reveal>
    </div>
  </section>
);

const ProjectInfo = ({ project }) => (
  <section className="px-6 md:px-12 py-16 md:py-20 bg-neutral-50">
    <div className="max-w-[1500px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <h3 className="text-[18px] md:text-[20px] font-medium tracking-tight mb-6">
            Project Overview
          </h3>
          <div className="space-y-4">
            <div>
              <div className="text-[13px] text-neutral-500 uppercase tracking-[0.1em] mb-1">Client</div>
              <div className="text-[16px] md:text-[18px]">{project.client}</div>
            </div>
            <div>
              <div className="text-[13px] text-neutral-500 uppercase tracking-[0.1em] mb-1">Date</div>
              <div className="text-[16px] md:text-[18px]">{project.date}</div>
            </div>
            <div>
              <div className="text-[13px] text-neutral-500 uppercase tracking-[0.1em] mb-1">Category</div>
              <div className="text-[16px] md:text-[18px]">{project.category}</div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[18px] md:text-[20px] font-medium tracking-tight mb-6">
            Services Provided
          </h3>
          <ul className="space-y-3">
            {project.services.map((service, i) => (
              <li key={i} className="flex items-start gap-3">
                <Video size={18} className="text-[#f6ae2d] mt-0.5 flex-shrink-0" />
                <span className="text-[16px] md:text-[18px] text-neutral-700">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const DescriptionSection = ({ project }) => (
  <section className="px-6 md:px-12 py-16 md:py-20">
    <div className="max-w-[1500px] mx-auto">
      <div className="max-w-[70ch] mx-auto">
        <h3 className="text-[28px] md:text-[36px] font-medium tracking-[-0.01em] mb-6 md:mb-8">
          About This Project
        </h3>
        <p className="text-neutral-700 text-[18px] md:text-[22px] leading-[1.6]">
          {project.fullDescription}
        </p>
      </div>
    </div>
  </section>
);

const MoreProjects = ({ currentSlug, category }) => {
  const others = allProjects
    .filter((p) => p.slug !== currentSlug && p.videoUrl)
    .slice(0, 2);
  
  if (others.length === 0) {
    return null;
  }

  return (
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-neutral-200">
      <div className="max-w-[1500px] mx-auto">
        <h3 className="text-[18px] md:text-[20px] font-medium tracking-tight mb-12 md:mb-16">
          More Documentary Films
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {others.map((p) => (
            <Link key={p.id} href={getProjectPath(p.slug)} className="group block">
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-black border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-[12px] uppercase tracking-[0.18em]">
                  <span className="flex items-center gap-2">
                    <Video size={14} />
                    {p.category}
                  </span>
                  <span className="opacity-70">{p.client}</span>
                </div>
              </div>
              <h4 className="mt-5 text-[20px] md:text-[24px] font-medium tracking-[-0.01em] group-hover:opacity-60 transition-opacity duration-300">
                {p.title}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const DetailHeader = ({ project, heroRef }) => (
  <div className="bg-white md:pt-10 md:pb-8 md:px-10 md:-mt-[110px]">
    <section ref={heroRef} className="relative min-h-screen md:min-h-[calc(100vh-1.5rem)] w-full bg-black overflow-hidden flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${project.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-neutral-900 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-neutral-950 blur-[140px]" />
      </div>

      <ImageHeroNav heroRef={heroRef} />

      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6 md:px-12 pt-32 md:pt-40 pb-20">
        <h1 className="text-white font-medium tracking-[-0.02em] leading-[1.05] max-w-[24ch] text-[32px] sm:text-[42px] md:text-[50px] mb-8">
          {project.title}
        </h1>
        <p className="text-white/90 text-[16px] md:text-[18px] max-w-[58ch] leading-relaxed">
          {project.description}
        </p>
      </div>
    </section>
  </div>
);

const DocumentaryVideographyDetail = ({ project }) => {
  const heroRef = useRef(null);

  return (
    <div className="bg-white text-black">
      <DetailHeader project={project} heroRef={heroRef} />
      <VideoEmbed project={project} />
      <ProjectInfo project={project} />
      <DescriptionSection project={project} />
      <ImageGrid images={project.gallery} altPrefix={project.slug} />
      <WideImage src={project.heroImage} alt={project.title} />
      <MoreProjects currentSlug={project.slug} category={project.category} />
      <CTA />
    </div>
  );
};

export default DocumentaryVideographyDetail;
