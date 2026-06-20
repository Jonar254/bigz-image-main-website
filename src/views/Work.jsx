"use client";

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import {
  corporatePhotographyProjects,
  corporateVideographyProjects,
  documentaryPhotographyProjects,
  documentaryVideographyProjects,
  getProjectPath,
} from '../data/projects';
import { ArrowUpRight } from 'lucide-react';
import CTA from '../components/CTA';
import Testimonial from '../components/Testimonial';
import useReveal from '../hooks/useReveal';
import YoutubeLitePlayer from '../components/YoutubeLitePlayer';


const ProjectCard = ({ project, onHover, onLeave, priority = false }) => {
  const { ref, inView } = useReveal();
  if (!project) return null;

  const metaLabel = project.workLabel || project.category || 'Project';
  const aspectRatio = project.aspect || '16/9';
  const href = project.href || getProjectPath(project.slug);

  return (
    <Link
      href={href}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group block w-full"
    >
      <div
        ref={ref}
        className={`relative w-full overflow-hidden bg-neutral-100 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ aspectRatio: aspectRatio }}
      >
        <img
          src={project.image}
          alt={project.title}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-[12px] uppercase tracking-[0.18em] z-10 mix-blend-difference">
          <span>{metaLabel}</span>
        </div>
        <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <ArrowUpRight size={18} />
        </div>
      </div>
      <div
        className={`mt-5 md:mt-6 transition-all duration-700 delay-100 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h3 className="text-black text-[20px] md:text-[24px] font-medium tracking-[-0.01em] leading-tight group-hover:opacity-60 transition-opacity duration-300">
          {project.title}
        </h3>
      </div>
    </Link>
  );
};

const VideoProjectCard = ({ project, onHover, onLeave }) => {
  const { ref, inView } = useReveal();
  const detailHref = project.href || getProjectPath(project.slug);

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
        <YoutubeLitePlayer
          videoUrl={project.videoUrl}
          title={project.title}
          fallbackImage={project.image}
          label={project.workLabel || project.category || 'Video'}
        />
      </div>
      <div
        className={`mt-5 md:mt-6 transition-all duration-700 delay-100 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <Link href={detailHref} className="group inline-block">
          <h3 className="text-black text-[20px] md:text-[24px] font-medium tracking-[-0.01em] leading-tight group-hover:opacity-60 transition-opacity duration-300">
            {project.title}
          </h3>
        </Link>
        {project.description && (
          <p className="text-black/60 text-[14px] md:text-[16px] mt-3 leading-relaxed">
            {project.description}
          </p>
        )}
      </div>
    </div>
  );
};

const buildRows = (projects) => {
  const rows = [];
  let i = 0;
  while (i < projects.length) {
    const p = projects[i];
    if (p.span === 'wide') {
      rows.push([p]);
      i += 1;
    } else {
      rows.push(projects.slice(i, i + 2));
      i += 2;
    }
  }
  return rows;
};

const WorkHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 120);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="bg-white text-black pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-12">
      <div className="max-w-[1500px] mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className={`text-neutral-500 text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Our Work
          </p>
          <h1
            className={`text-[32px] sm:text-[42px] md:text-[50px] font-medium tracking-[-0.02em] leading-[1.1] mx-auto transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Stories that{' '}
            <span className="relative inline-block italic align-baseline">
              <span className="relative z-10">move</span>
              <span className="absolute inset-x-[-4px] bottom-1 h-2 bg-[#f6ae2d]/50" aria-hidden="true" />
            </span>
            {' '}people
          </h1>
          <p
            className={`mt-10 md:mt-14 text-black text-[16px] md:text-[18px] leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            From global campaigns to intimate documentaries, BigzImage crafts stories that move people. Explore our portfolio of corporate work and documentary films.
          </p>
        </div>
      </div>
    </section>
  );
};

const ProjectRow = ({ row, onHover, onLeave }) => {
  if (!row || row.length === 0) return null;
  if (row.length === 1) {
    const project = row[0];
    if (!project) return null;
    const card =
      project.mediaType === 'video' ? (
        <VideoProjectCard
          project={project}
          onHover={() => onHover(project.slug)}
          onLeave={onLeave}
        />
      ) : (
        <ProjectCard
          project={project}
          onHover={() => onHover(project.slug)}
          onLeave={onLeave}
        />
      );
    return <div className="w-full">{card}</div>;
  }

  const [a, b] = row;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-12 items-start">
      {a && (
        a.mediaType === 'video' ? (
          <VideoProjectCard
            project={a}
            onHover={() => onHover(a.slug)}
            onLeave={onLeave}
          />
        ) : (
          <ProjectCard
            project={a}
            onHover={() => onHover(a.slug)}
            onLeave={onLeave}
          />
        )
      )}
      {b && (
        b.mediaType === 'video' ? (
          <VideoProjectCard
            project={b}
            onHover={() => onHover(b.slug)}
            onLeave={onLeave}
          />
        ) : (
          <ProjectCard
            project={b}
            onHover={() => onHover(b.slug)}
            onLeave={onLeave}
          />
        )
      )}
    </div>
  );
};

const WorkGroup = ({ title, projects, onHover, onLeave }) => {
  const rows = useMemo(() => buildRows(projects), [projects]);

  if (!projects.length) {
    return null;
  }

  return (
    <div className="flex flex-col gap-10 md:gap-14">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h3 className="text-[24px] md:text-[30px] font-medium tracking-[-0.02em] leading-tight">
          {title}
        </h3>
        <span className="text-[12px] uppercase tracking-[0.18em] text-neutral-500">
          {projects.length} project{projects.length > 1 ? 's' : ''}
        </span>
      </div>
      <div className="flex flex-col gap-14 md:gap-20">
        {rows.map((row) => (
          <ProjectRow
            key={row.filter(Boolean).map((p) => p.slug).join('-')}
            row={row}
            onHover={onHover}
            onLeave={onLeave}
          />
        ))}
      </div>
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

const Work = () => {
  const [hoveredSlug, setHoveredSlug] = useState(null);

  const corporatePhotography = useMemo(
    () =>
      corporatePhotographyProjects.map((project) => ({
        ...project,
        workLabel: 'Corporate Photography',
        aspect: project.aspect || '16/9',
        span: 'half',
        href: getProjectPath(project.slug),
        mediaType: 'photo',
      })),
    [],
  );

  const corporateVideography = useMemo(
    () =>
      corporateVideographyProjects.map((project) => ({
        ...project,
        workLabel: 'Corporate Videography',
        aspect: project.aspect || '16/9',
        span: 'half',
        href: getProjectPath(project.slug),
        mediaType: 'video',
      })),
    [],
  );

  const documentaryPhotography = useMemo(
    () =>
      documentaryPhotographyProjects.map((project) => ({
        ...project,
        workLabel: 'Documentary Photography',
        aspect: project.aspect || '16/9',
        span: 'half',
        href: getProjectPath(project.slug),
        mediaType: 'photo',
      })),
    [],
  );

  const documentaryVideography = useMemo(
    () =>
      documentaryVideographyProjects.map((project) => ({
        ...project,
        workLabel: 'Documentary Videography',
        aspect: project.aspect || '16/9',
        span: 'half',
        href: getProjectPath(project.slug),
        mediaType: 'video',
      })),
    [],
  );

  const sections = useMemo(
    () => [
      {
        title: 'Corporate Work',
        description:
          'Photography and films produced for corporate partners, stakeholder events, and executive storytelling.',
        groups: [
          { title: 'Corporate Photography', projects: corporatePhotography },
          { title: 'Corporate Videography', projects: corporateVideography },
        ],
      },
      {
        title: 'Documentary Work',
        description:
          'Field-based photography and documentary films that translate programme impact for NGOs and development actors.',
        groups: [
          { title: 'Documentary Photography', projects: documentaryPhotography },
          { title: 'Documentary Videography', projects: documentaryVideography },
        ],
      },
    ],
    [corporatePhotography, corporateVideography, documentaryPhotography, documentaryVideography],
  );

  return (
    <div className="bg-white text-black">
      <WorkHeader />
      {sections.map((section) => (
        <section key={section.title} className="px-6 md:px-12 pb-32 md:pb-40">
          <div className="max-w-[1500px] mx-auto flex flex-col gap-16 md:gap-24">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-medium tracking-[-0.02em] leading-[1.1]">
                  {section.title}
                </h2>
                <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6] text-neutral-600 max-w-[60ch]">
                  {section.description}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-24 md:gap-28">
              {section.groups.map((group) => (
                <WorkGroup
                  key={group.title}
                  title={group.title}
                  projects={group.projects}
                  onHover={(slug) => setHoveredSlug(slug)}
                  onLeave={() => setHoveredSlug(null)}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
      <HoverIndicator visible={Boolean(hoveredSlug)} />
      <Testimonial />
      <CTA />
    </div>
  );
};

// Suppress unused-import warning while keeping Reveal export available

export default Work;
