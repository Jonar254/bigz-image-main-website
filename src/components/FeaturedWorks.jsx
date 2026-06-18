"use client";

import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { featuredWorks } from '../data/mock';

const getCardFlex = ({ isHover, anyHover }) => {
  if (isHover) return 6;
  if (anyHover) return 1;
  return 1.6;
};

const DesktopCardLabel = ({ work, isHover }) => (
  <div
    className={`absolute left-0 right-0 bottom-0 p-5 md:p-7 transition-all duration-700 ${
      isHover ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}
  >
    <div className="text-white/60 text-[12px] uppercase tracking-[0.18em]">
      {work.client} · {work.year}
    </div>
    <div className="text-white text-[22px] md:text-[28px] font-medium mt-2 tracking-tight">
      {work.title}
    </div>
  </div>
);

const DesktopCard = ({ work, isHover, anyHover, onHover, onLeave }) => {
  const flex = getCardFlex({ isHover, anyHover });
  return (
    <Link
      href={`/work/${work.slug}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative overflow-hidden cursor-pointer group transition-[flex] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{ flex }}
    >
      <img
        src={work.image}
        alt={work.title}
        className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1200ms] ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
      <DesktopCardLabel work={work} isHover={isHover} />
    </Link>
  );
};

const StackedCard = ({ work }) => (
  <Link href={`/work/${work.slug}`} className="block group">
    <div className="relative w-full aspect-[4/5] sm:aspect-[16/11] overflow-hidden bg-neutral-900">
      <img
        src={work.image}
        alt={work.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms] ease-out"
      />
    </div>
    <div className="mt-5 flex items-start justify-between gap-4">
      <div>
        <div className="text-white/50 text-[11px] uppercase tracking-[0.18em]">
          {work.client} · {work.year}
        </div>
        <h3 className="text-white text-[22px] sm:text-[26px] font-medium mt-2 tracking-tight leading-snug">
          {work.title}
        </h3>
      </div>
      <ArrowUpRight
        size={22}
        className="text-white/60 mt-1 shrink-0 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
      />
    </div>
  </Link>
);

const FeaturedWorksHeader = () => (
  <div className="flex items-end justify-between mb-12 sm:mb-16 md:mb-24">
    <h2 className="text-[32px] sm:text-[46px] md:text-[56px] font-medium tracking-[-0.02em]">Featured Works</h2>
    <Link
      href="/work"
      className="hidden md:inline-flex items-center gap-2 text-[15px] text-white/70 hover:text-white transition-colors"
    >
      View All <ArrowUpRight size={16} />
    </Link>
  </div>
);

const DesktopStrips = () => {
  const [hoverIdx, setHoverIdx] = useState(null);
  const anyHover = hoverIdx !== null;

  return (
    <div className="hidden md:flex gap-3 md:gap-4 h-[520px] md:h-[560px] w-full">
      {featuredWorks.map((work, i) => (
        <DesktopCard
          key={work.slug}
          work={work}
          isHover={hoverIdx === i}
          anyHover={anyHover}
          onHover={() => setHoverIdx(i)}
          onLeave={() => setHoverIdx(null)}
        />
      ))}
    </div>
  );
};

const StackedList = () => (
  <div className="flex flex-col gap-14 sm:gap-16 md:hidden">
    {featuredWorks.map((work) => (
      <StackedCard key={work.slug} work={work} />
    ))}
    <Link
      href="/work"
      className="inline-flex items-center gap-2 text-[15px] text-white/70 hover:text-white transition-colors mt-2"
    >
      View All <ArrowUpRight size={16} />
    </Link>
  </div>
);

const FeaturedWorks = () => (
  <section className="bg-black text-white py-24 sm:py-28 md:py-40 px-6 md:px-12">
    <div className="max-w-[1500px] mx-auto">
      <FeaturedWorksHeader />
      <StackedList />
      <DesktopStrips />
    </div>
  </section>
);

export default FeaturedWorks;
