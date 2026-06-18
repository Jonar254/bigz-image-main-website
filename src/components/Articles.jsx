import React from 'react';
import Link from 'next/link';
import { articles } from '../data/mock';
import { ArrowUpRight } from 'lucide-react';

const CaseStudies = () => {
  return (
    <section className="bg-white text-black py-18 md:py-28 px-6 md:px-12">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-medium tracking-[-0.02em] leading-[1.1]">
            Case{' '}
            <span className="relative inline-block italic">
              <span className="relative z-10">Studies</span>
              <span className="absolute inset-x-[-4px] bottom-1 h-2 bg-[#f6ae2d]/50" aria-hidden="true" />
            </span>
          </h2>
          <Link
            href="/case-studies"
            className="hidden md:inline-flex items-center gap-2 text-[15px] text-black hover:text-black transition-colors"
          >
            View All <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/case-studies/${article.slug}`}
              className="group block"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                />
              </div>
              <div className="mt-6">
                <div className="text-neutral-500 text-[14px] mb-3">{article.date}</div>
                <h3 className="text-[22px] md:text-[28px] font-medium tracking-[-0.01em] leading-[1.25] max-w-[28ch] group-hover:text-black transition-colors duration-300">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
