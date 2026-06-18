"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navLinks } from '../data/mock';
import { Menu, X } from 'lucide-react';

// Pages with hero sections that start transparent (like homepage)
const HERO_PAGE_PATHS = [
  '/corporate',
  '/corporate/photography',
  '/corporate/videography',
  '/documentaries',
  '/documentaries/photography',
  '/documentaries/videography',
  '/contact',
  '/request-quote'
];

const isHeroPage = (pathname) =>
  HERO_PAGE_PATHS.includes(pathname) || 
  pathname.startsWith('/corporate/photography/') ||
  pathname.startsWith('/corporate/videography/') ||
  pathname.startsWith('/documentaries/photography/') ||
  pathname.startsWith('/documentaries/videography/');

const getStylingMode = ({ pathname, scrolled }) => {
  // Hero pages start transparent, others start black
  const heroPage = isHeroPage(pathname);
  return heroPage && !scrolled ? 'transparent' : 'black';
};

const getBgClass = ({ mode, scrolled }) => {
  if (mode === 'transparent') {
    return 'bg-transparent';
  }
  // Black background for scrolled or non-hero pages
  return 'bg-black/95 backdrop-blur-md';
};

const getMobileMenuBg = (mode) => {
  return 'bg-black/95 backdrop-blur-md border-white/10';
};

const NavItem = ({ link, textColor, isActive, onClick, sizeClass }) => {
  const className = `${textColor} ${sizeClass} hover:opacity-60 transition-opacity duration-300 ${
    isActive ? 'opacity-100' : 'opacity-90'
  }`;
  const isHash = link.to.includes('#');
  if (isHash) {
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

const DesktopNav = ({ textColor, pathname }) => (
  <nav className="hidden md:flex items-center gap-9">
    {navLinks.map((link) => (
      <NavItem
        key={link.label}
        link={link}
        textColor={textColor}
        isActive={!link.to.includes('#') && pathname === link.to}
        sizeClass="text-[16px] font-semibold tracking-[0.02em]"
      />
    ))}
  </nav>
);

const MobileMenu = ({ mode, textColor, onClose }) => (
  <div className={`md:hidden px-6 py-6 border-t ${getMobileMenuBg(mode)}`}>
    <nav className="flex flex-col gap-5">
      {navLinks.map((link) => (
        <NavItem
          key={link.label}
          link={link}
          textColor={textColor}
          isActive={false}
          onClick={onClose}
          sizeClass="text-[20px] font-semibold tracking-[0.02em]"
        />
      ))}
    </nav>
  </div>
);

const useScrolled = (offset = 30) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);
  return scrolled;
};

const Navigation = () => {
  const scrolled = useScrolled(30);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Don't render on homepage or pages with ImageHeroNav
  if (pathname === '/' || isHeroPage(pathname)) {
    return null;
  }

  const mode = getStylingMode({ pathname, scrolled });
  const textColor = 'text-white';
  const bgClass = getBgClass({ mode, scrolled });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${bgClass}`}
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
          <DesktopNav textColor={textColor} pathname={pathname} />
          <button
            className={`md:hidden ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileOpen && (
          <MobileMenu
            mode={mode}
            textColor={textColor}
            onClose={() => setMobileOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Navigation;
