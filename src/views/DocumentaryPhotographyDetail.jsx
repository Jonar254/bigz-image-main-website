"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveLeft, MoveRight } from "lucide-react";
import ImageHeroNav from '../components/ImageHeroNav';
import { documentaryPhotographyProjects } from '../data/projects';

const YouMayAlsoLike = ({ currentSlug }) => {
  const trackRef = useRef(null);
  const otherProjects = documentaryPhotographyProjects.filter(
    (project) => project.slug !== currentSlug && !!project.image
  );
  
  if (otherProjects.length === 0) {
    return null;
  }

  const scrollByCards = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const distance = track.clientWidth * 0.85;
    track.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-6 md:px-12 lg:px-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto border-t border-gray-200 pt-12 md:pt-16">
        <div className="flex items-end justify-between gap-6 mb-8 md:mb-10">
          <div>
            <p className="text-neutral-500 text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">
              Documentary Photography
            </p>
            <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-medium tracking-[-0.02em] leading-[1.1] text-[#1b1e1b]">You May Also Like</h2>
            <p className="mt-3 text-black text-base sm:text-lg leading-relaxed">
              Explore more documentary photography from our portfolio.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollByCards("left")}
              className="h-11 w-11 rounded-full border border-[#a58761]/35 text-[#a58761] flex items-center justify-center transition-all hover:bg-[#a58761] hover:text-white"
              aria-label="Scroll left"
            >
              <MoveLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCards("right")}
              className="h-11 w-11 rounded-full border border-[#a58761]/35 text-[#a58761] flex items-center justify-center transition-all hover:bg-[#a58761] hover:text-white"
              aria-label="Scroll right"
            >
              <MoveRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {otherProjects.map((item) => (
            <Link
              key={item.slug}
              href={`/documentaries/photography/${item.slug}`}
              className="group relative min-w-[82%] sm:min-w-[48%] lg:min-w-[31%] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] snap-start"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={encodeURI(item.image)}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 48vw, 31vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/75 mb-2">{item.category}</p>
                <h3 className="text-lg md:text-xl font-medium tracking-tight leading-snug">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const DocumentaryPhotographyDetail = ({ project }) => {
  const gallery = project.gallery.map((src) => encodeURI(src));
  const heroImage = project.heroImage || gallery[0];
  const heroRef = useRef(null);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white md:pt-10 md:pb-8 md:px-10 md:-mt-[110px]">
        <section ref={heroRef} className="relative min-h-screen md:min-h-[calc(100vh-1.5rem)] w-full bg-black overflow-hidden flex flex-col">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${heroImage}')` }}
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

      <div className="bg-white rounded-b-[56px] mx-0 mt-[-60px] font-sans">
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 font-sans">
          <div className="max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium tracking-[-0.02em] leading-relaxed text-[#1b1e1b] mb-16">
              {project.fullDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 border-t border-gray-200 pt-12">
              {project.services.map((service) => (
                <div key={service} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#a58761] shrink-0" />
                  <p className="text-neutral-800 text-base sm:text-lg leading-relaxed">{service}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-8 border border-[#1b1e1b] text-[#1b1e1b] text-sm font-medium tracking-tight transition-all hover:bg-[#1b1e1b] hover:text-white"
              >
                Request Coverage
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <p className="text-neutral-500 text-xs sm:text-sm tracking-[0.3em] uppercase mb-12">
              {project.title} Gallery
            </p>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:balance]">
              {gallery.map((image, index) => (
                <div
                  key={image}
                  className="group relative mb-6 break-inside-avoid overflow-hidden rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.08)]"
                >
                  <Image
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    width={800}
                    height={600}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={index < 3 ? "eager" : "lazy"}
                    quality={80}
                    className="h-auto w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 transition group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <YouMayAlsoLike currentSlug={project.slug} />
      </div>
    </div>
  );
};

export default DocumentaryPhotographyDetail;
