"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/mock';

const useScrolled = (offset = 30) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return scrolled;
};

const useBeyondHero = (heroRef) => {
  const [pastHero, setPastHero] = useState(() => !heroRef?.current);

  useEffect(() => {
    if (!heroRef?.current) {
      setPastHero(true);
      return undefined;
    }

    const onScroll = () => {
      if (!heroRef.current) return;
      const bottom = heroRef.current.getBoundingClientRect().bottom;
      setPastHero(bottom <= window.innerHeight * 0.2);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [heroRef]);

  return pastHero;
};

const HeroNavItem = ({ link, sizeClass = 'text-[16px] font-semibold tracking-[0.02em]', onClick }) => {
  const className = `text-white ${sizeClass} hover:opacity-60 transition-opacity duration-300 opacity-90`;

  if (link.to.includes('#')) {
    return (
      <a href={link.to} onClick={onClick} className={className}>
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.to} onClick={onClick} className={className}>
      {link.label}
    </Link>
  );
};

const ImageHeroNav = ({ heroRef, offset = 80, className = '' }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(offset);
  const pastHero = useBeyondHero(heroRef);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = mobileOpen ? 'hidden' : 'auto';
    }
  }, [mobileOpen]);

  const translateClass = scrolled
    ? 'translate-y-0'
    : 'md:translate-y-[2.75rem]';

  const surfaceClass = pastHero
    ? 'bg-black/95 backdrop-blur-md border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.4)]'
    : 'bg-transparent border-transparent backdrop-blur-0';

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ease-out ${translateClass} ${surfaceClass} will-change-transform ${className}`}
      >
        <div className="max-w-[1500px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between py-6">
            <Link href="/" className="flex items-center" aria-label="BigzImage home">
              <Image
                src="/images/Logo/Transparent Background/PNGs/bigz-logo-one.webp"
                alt="BigzImage logo"
                width={220}
                height={68}
                className="w-auto h-12"
                loading="eager"
                priority
              />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <HeroNavItem key={link.label} link={link} />
              ))}
            </nav>
            <button
              className="md:hidden text-white z-50 relative"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-40 md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex flex-col items-center justify-center flex-grow space-y-8">
              {navLinks.map((link) => (
                <HeroNavItem
                  key={link.label}
                  link={link}
                  sizeClass="text-[24px] font-semibold tracking-[0.02em]"
                  onClick={() => setMobileOpen(false)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageHeroNav;
