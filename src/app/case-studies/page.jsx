import React from 'react';
import Link from 'next/link';
import { articles } from '@/data/mock';
import { ArrowUpRight } from 'lucide-react';

const CaseStudyCard = ({ article }) => (
  <Link href={`/case-studies/${article.slug}`} className="group block">
    <div className="relative w-full aspect-[16/9] overflow-hidden">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-out"
      />
    </div>
    <div className="mt-5 flex items-start justify-between gap-4">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="inline-flex items-center px-3 py-1 rounded bg-neutral-100 text-black text-[11px] tracking-tight">
            {article.category}
          </span>
          <span className="text-neutral-500 text-[13px] md:text-[14px]">
            {article.date}
          </span>
        </div>
        <h3 className="text-[20px] md:text-[24px] font-medium tracking-[-0.01em] leading-snug max-w-[28ch] group-hover:opacity-60 transition-opacity duration-300">
          {article.title}
        </h3>
      </div>
      <ArrowUpRight
        size={20}
        className="text-neutral-400 mt-1 shrink-0 group-hover:text-black group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
      />
    </div>
  </Link>
);

const CaseStudiesPage = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <section className="pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-12">
        <div className="max-w-[1500px] mx-auto">
          <div className="mb-16 md:mb-20">
            <p className="text-neutral-500 text-xs sm:text-sm tracking-[0.3em] uppercase mb-5">
              Our Work
            </p>
            <h1 className="text-[36px] sm:text-[48px] md:text-[64px] font-medium tracking-[-0.025em] leading-[1.05]">
              Case Studies
            </h1>
            <p className="text-[17px] md:text-[18px] text-black max-w-3xl mt-6">
              Real stories of impact from our documentary and visual storytelling projects across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {articles.map((article) => (
              <CaseStudyCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
