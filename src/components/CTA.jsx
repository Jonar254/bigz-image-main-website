"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Marquee = ({ children, pauseOnHover = false, reverse = false, className, speed = 40 }) => {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--gap:1rem] [gap:var(--gap)]",
        className
      )}
      style={{ "--duration": `${speed}s` }}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
};

const marqueeImages = [
  "/images/community-webp/BeatriceMumbi(8).webp",
  "/images/coorporates-webp/_BIG7547.webp",
  "/images/coorporates-webp/_BIG7776.webp",
  "/images/coorporates-webp/Global learning 2024 day five-72.webp",
  "/images/coorporates-webp/Global learning workshop (154).webp",
  "/images/documentaries/health-webp/IMG_1730.webp",
  "/images/documentaries/KWALE AND KILIFI COUNTY TEACHER_S DAY-webp/Teacher_s day 10th Oct 2024 Kilifi County-239.webp",
  "/images/documentaries/YOUTH EMPOWERMENT-webp/Asma Juma (4).webp",
];

const images1 = marqueeImages.slice(0, 4);
const images2 = marqueeImages.slice(4, 8);

const CTA = () => {
  return (
    <section id="contact" className="min-h-[80vh] bg-white text-black flex items-center overflow-hidden relative py-16 md:py-0">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-black/55 text-xs sm:text-sm tracking-[0.28em] uppercase mb-6">Let&apos;s collaborate</p>
            <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-medium tracking-[-0.02em] leading-[1.1]">
              Your story deserves to be{' '}
              <span className="relative inline-block italic">
                <span className="relative z-10">seen.</span>
                <span className="absolute inset-x-[-4px] bottom-1 h-2 bg-[#f6ae2d]/50" aria-hidden="true" />
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-black/65 text-base leading-relaxed">
              Let&apos;s turn your impact into narratives that move people to act. Flexible, affordable packages tailored to your communication goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#f6ae2d] text-[#0b1b2b] px-7 py-4 text-[12px] uppercase tracking-[0.24em] font-semibold hover:bg-[#0b3c5d] hover:text-white transition-colors duration-300 mt-8"
              data-testid="footer-cta-book-call"
            >
              Book a Discovery Call <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4 overflow-hidden">
            <Marquee speed={30} reverse className="[--gap:1rem]">
              {images1.map((src, idx) => (
                <div
                  key={idx}
                  className="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"
                >
                  <Image
                    src={src}
                    alt={`Documentary work ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 192px"
                    className="object-cover"
                    priority={idx === 0}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}
            </Marquee>
            <Marquee speed={30} className="[--gap:1rem]">
              {images2.map((src, idx) => (
                <div
                  key={idx}
                  className="relative w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0"
                >
                  <Image
                    src={src}
                    alt={`Documentary work ${idx + 5}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 192px"
                    className="object-cover"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
