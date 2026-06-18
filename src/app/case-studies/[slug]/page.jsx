"use client";

import React from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { articles, newsArticles } from '@/data/mock';
import { ArrowLeft, ArrowUpRight, MapPin, Calendar, Users } from 'lucide-react';
import CTA from '@/components/CTA';

const CaseStudyHero = ({ article, caseStudy }) => (
  <section className="pt-36 md:pt-44 pb-12 md:pb-16 px-6 md:px-12">
    <div className="max-w-[920px] mx-auto">
      <Link
        href="/case-studies"
        className="inline-flex items-center gap-2 text-neutral-500 hover:text-black text-[14px] mb-10 md:mb-14 transition-colors duration-300"
      >
        <ArrowLeft size={16} />
        All Case Studies
      </Link>
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <span className="inline-flex items-center px-3 py-1 rounded bg-neutral-100 text-black text-[12px] md:text-[13px] tracking-tight">
          {article.category}
        </span>
        <span className="text-neutral-500 text-[14px] md:text-[15px]">
          {article.date}
        </span>
      </div>
      <h1 className="text-[36px] sm:text-[52px] md:text-[68px] lg:text-[80px] font-medium tracking-[-0.025em] leading-[1.05] mb-8 md:mb-12">
        {article.title}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-neutral-200">
        {caseStudy.client && (
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-neutral-400 mt-0.5" />
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-1">Client</div>
              <div className="text-[15px] text-neutral-800">{caseStudy.client}</div>
            </div>
          </div>
        )}
        {caseStudy.locations && (
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-neutral-400 mt-0.5" />
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-1">Location</div>
              <div className="text-[15px] text-neutral-800">{caseStudy.locations.join(', ')}</div>
            </div>
          </div>
        )}
        {caseStudy.timeline && (
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-neutral-400 mt-0.5" />
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-1">Timeline</div>
              <div className="text-[15px] text-neutral-800">{caseStudy.timeline}</div>
            </div>
          </div>
        )}
        {caseStudy.project && (
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 flex items-center justify-center text-neutral-400 mt-0.5">
              <div className="w-2 h-2 bg-neutral-400 rounded-full" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-1">Project</div>
              <div className="text-[15px] text-neutral-800">{caseStudy.project}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  </section>
);

const CaseStudyImage = ({ src, alt }) => (
  <section className="px-0 md:px-12">
    <div className="max-w-[1500px] mx-auto">
      <div className="w-full aspect-[16/9] overflow-hidden">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  </section>
);

const Paragraph = ({ text }) => (
  <p className="text-neutral-800 text-[17px] md:text-[18px] leading-[1.75] mb-6">
    {text}
  </p>
);

const BulletList = ({ items }) => (
  <ul className="space-y-3 mb-6 pl-6 md:pl-8">
    {items.map((item) => (
      <li
        key={item}
        className="text-neutral-800 text-[17px] md:text-[18px] leading-[1.7] list-disc marker:text-neutral-400"
      >
        {item}
      </li>
    ))}
  </ul>
);

const Block = ({ block }) => {
  if (block.type === 'ul') return <BulletList items={block.items} />;
  return <Paragraph text={block.text} />;
};

const CaseStudySection = ({ section }) => (
  <section className="px-6 md:px-12 py-8 md:py-10">
    <div className="max-w-[920px] mx-auto">
      <h2 className="text-[24px] md:text-[28px] font-medium tracking-[-0.01em] mb-6 md:mb-8">
        {section.heading}
      </h2>
      {section.blocks.map((block, i) => (
        <Block key={`${section.heading}-${i}`} block={block} />
      ))}
    </div>
  </section>
);

const RelatedCard = ({ article }) => (
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
        <div className="text-neutral-500 text-[13px] md:text-[14px] mb-2">
          {article.date}
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

const MoreCaseStudies = ({ currentSlug }) => {
  const others = articles.filter((a) => a.slug !== currentSlug).slice(0, 2);
  if (others.length === 0) return null;
  return (
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-neutral-200 mt-12 md:mt-16">
      <div className="max-w-[1500px] mx-auto">
        <h3 className="text-[28px] md:text-[36px] font-medium tracking-[-0.01em] mb-12 md:mb-16">
          More Case Studies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {others.map((article) => (
            <RelatedCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudyDetail = () => {
  const params = useParams();
  const slug = params.slug;
  const article = articles.find((a) => a.slug === slug);
  const caseStudy = newsArticles[slug];

  if (!article || !caseStudy) {
    notFound();
  }

  return (
    <div className="bg-white text-black">
      <CaseStudyHero article={article} caseStudy={caseStudy} />
      <CaseStudyImage src={article.image} alt={article.title} />
      <div className="py-12 md:py-16">
        {caseStudy.sections.map((section) => (
          <CaseStudySection key={section.heading} section={section} />
        ))}
      </div>
      <MoreCaseStudies currentSlug={slug} />
      <CTA />
    </div>
  );
};

export default CaseStudyDetail;
