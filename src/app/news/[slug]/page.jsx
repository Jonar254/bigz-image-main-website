"use client";

import React from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { articles, newsArticles } from '@/data/mock';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import CTA from '@/components/CTA';

const ArticleHero = ({ article }) => (
  <section className="pt-36 md:pt-44 pb-12 md:pb-16 px-6 md:px-12">
    <div className="max-w-[920px] mx-auto">
      <Link
        href="/news"
        className="inline-flex items-center gap-2 text-neutral-500 hover:text-black text-[14px] mb-10 md:mb-14 transition-colors duration-300"
      >
        <ArrowLeft size={16} />
        All News
      </Link>
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <span className="inline-flex items-center px-3 py-1 rounded bg-neutral-100 text-black text-[12px] md:text-[13px] tracking-tight">
          {article.category}
        </span>
        <span className="text-neutral-500 text-[14px] md:text-[15px]">
          {article.date}
        </span>
      </div>
      <h1 className="text-[36px] sm:text-[52px] md:text-[68px] lg:text-[80px] font-medium tracking-[-0.025em] leading-[1.05]">
        {article.title}
      </h1>
    </div>
  </section>
);

const ArticleImage = ({ src, alt }) => (
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

const ArticleSection = ({ section }) => (
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
  <Link href={`/news/${article.slug}`} className="group block">
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

const ContinueReading = ({ currentSlug }) => {
  const others = articles.filter((a) => a.slug !== currentSlug).slice(0, 2);
  if (others.length === 0) return null;
  return (
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-neutral-200 mt-12 md:mt-16">
      <div className="max-w-[1500px] mx-auto">
        <h3 className="text-[28px] md:text-[36px] font-medium tracking-[-0.01em] mb-12 md:mb-16">
          Continue Reading
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

const NewsDetail = () => {
  const params = useParams();
  const slug = params.slug;
  const article = articles.find((a) => a.slug === slug);
  const body = newsArticles[slug];

  if (!article || !body) {
    notFound();
  }

  return (
    <div className="bg-white text-black">
      <ArticleHero article={article} />
      <ArticleImage src={article.image} alt={article.title} />
      <div className="py-12 md:py-16">
        {body.sections.map((section) => (
          <ArticleSection key={section.heading} section={section} />
        ))}
      </div>
      <ContinueReading currentSlug={slug} />
      <CTA />
    </div>
  );
};

export default NewsDetail;
