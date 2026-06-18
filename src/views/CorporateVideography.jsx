"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { corporateVideographyProjects } from '../data/projects';
import { Video } from 'lucide-react';
import CTA from '../components/CTA';
import ImageHeroNav from '../components/ImageHeroNav';
import useReveal from '../hooks/useReveal';

const extractYouTubeId = (url) => {
  if (!url) {
    return null;
  }

  const match = url.match(/(?:embed\/|watch\?v=|youtu\.be\/)([\w-]{11})/);
  return match ? match[1] : null;
};

const buildYouTubeThumbnailCandidates = (url) => {
  const videoId = extractYouTubeId(url);
  if (!videoId) {
    return [];
  }

  return ['maxresdefault', 'sddefault', 'hqdefault'].map(
    (quality) => `https://img.youtube.com/vi/${videoId}/${quality}.jpg`,
  );
};

const VideoProjectCard = ({ project, onHover, onLeave }) => {
  const { ref, inView } = useReveal();
  const [showVideo, setShowVideo] = useState(false);
  const [thumbnailSrc, setThumbnailSrc] = useState(project.image);

  useEffect(() => {
    let isMounted = true;
    const candidates = buildYouTubeThumbnailCandidates(project.videoUrl);

    if (!candidates.length) {
      if (isMounted) {
        setThumbnailSrc(project.image);
      }
      return () => {
        isMounted = false;
      };
    }

    if (isMounted) {
      setThumbnailSrc(project.image);
    }

    let index = 0;

    const loadNext = () => {
      if (!isMounted) {
        return;
      }

      if (index >= candidates.length) {
        setThumbnailSrc(project.image);
        return;
      }

      const candidate = candidates[index];
      const img = new window.Image();
      img.src = candidate;
      img.onload = () => {
        if (isMounted) {
          setThumbnailSrc(candidate);
        }
      };
      img.onerror = () => {
        index += 1;
        loadNext();
      };
    };

    loadNext();

    return () => {
      isMounted = false;
    };
  }, [project.image, project.videoUrl]);

  return (
    <div className="w-full">
      <div
        ref={ref}
        className={`relative w-full overflow-hidden bg-neutral-100 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ aspectRatio: '16/9' }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {showVideo && project.videoUrl ? (
          <iframe
            src={project.videoUrl}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <>
            <img
              src={thumbnailSrc}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <button
              onClick={() => setShowVideo(true)}
              className="absolute inset-0 flex items-center justify-center group cursor-pointer"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-black border-b-[10px] border-b-transparent ml-1" />
              </div>
            </button>
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-[12px] uppercase tracking-[0.18em] z-10">
              <span className="flex items-center gap-2">
                <Video size={14} />
                {project.category}
              </span>
              <span className="opacity-70">{project.client}</span>
            </div>
          </>
        )}
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

const CorporateVideographyHeader = () => {
  const heroRef = useRef(null);
  return (
  <div className="bg-white pt-8 md:pt-10 pb-6 md:pb-8 px-7 md:px-10 -mt-[92px] md:-mt-[110px]">
    <section ref={heroRef} className="relative min-h-[calc(100vh-1.25rem)] md:min-h-[calc(100vh-1.5rem)] w-full bg-black overflow-hidden flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/coorporates-webp/Global learning workshop (154).webp"
          alt="Corporate videography showcase"
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
          Corporate Videography
        </h1>
        <p className="mt-8 text-white/90 text-[16px] md:text-[18px] max-w-[58ch] leading-relaxed">
          Professional video coverage for corporate events, stakeholder engagements, and brand positioning. We produce polished video assets ready for multi-platform use.
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
          <span className="text-black text-[12px] uppercase tracking-[0.18em]">Videography Portfolio</span>
        </div>
        <h2 className="text-black text-[40px] md:text-[56px] font-medium tracking-[-0.02em] leading-tight mb-6">
          Corporate video projects
        </h2>
        <p className="text-black/70 text-[16px] md:text-[18px] max-w-[70ch] leading-relaxed">
          Professional video coverage for conferences, launches, and stakeholder events. Video embed codes are coming soon—browse the projects below.
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

const ProjectRow = ({ row, onHover, onLeave }) => {
  if (row.length === 1) {
    const project = row[0];
    return (
      <div className="w-full">
        <VideoProjectCard
          project={project}
          onHover={() => onHover(project.id)}
          onLeave={onLeave}
        />
      </div>
    );
  }
  const [a, b] = row;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-12 items-start">
      <VideoProjectCard
        project={a}
        onHover={() => onHover(a.id)}
        onLeave={onLeave}
      />
      {b && (
        <VideoProjectCard
          project={b}
          onHover={() => onHover(b.id)}
          onLeave={onLeave}
        />
      )}
    </div>
  );
};

const CorporateVideography = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const rows = buildRows(corporateVideographyProjects);

  return (
    <div className="bg-white text-black">
      <CorporateVideographyHeader />
      <PortfolioSection />
      <section className="px-6 md:px-12 pb-32 md:pb-40">
        <div className="max-w-[1500px] mx-auto flex flex-col gap-16 md:gap-24">
          {rows.map((row) => (
            <ProjectRow
              key={row.map((p) => p.id).join('-')}
              row={row}
              onHover={setHoveredId}
              onLeave={() => setHoveredId(null)}
            />
          ))}
        </div>
      </section>
      <CTA />
    </div>
  );
};

export default CorporateVideography;
