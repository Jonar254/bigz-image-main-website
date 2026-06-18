import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Youtube, Mail, ArrowUpRight, Phone, MapPin } from 'lucide-react';
import { navLinks, services, brandInfo } from '../data/mock';

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram', icon: Instagram },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://youtube.com', label: 'YouTube', icon: Youtube },
];

const FooterNavLink = ({ link }) => {
  if (link.to.includes('#')) {
    return (
      <a href={link.to} className="hover:text-[#f6ae2d] transition-colors">
        {link.label}
      </a>
    );
  }
  return (
    <Link href={link.to} className="hover:text-[#f6ae2d] transition-colors">
      {link.label}
    </Link>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer data-testid="site-footer" className="relative bg-black text-white pt-24 pb-10 overflow-hidden font-sans">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">

        <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="mb-6">
              <Image
                src="/images/Logo/Transparent Background/PNGs/bigz-logo-one.webp"
                alt="BigzImage logo"
                width={220}
                height={68}
                className="w-auto h-14"
              />
            </div>
            <p className="text-white/75 text-[16px] font-medium leading-relaxed max-w-sm">
              Documentary film, photography, and strategic storytelling for NGOs, research institutions, and international development actors.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#f6ae2d] hover:text-[#f6ae2d] transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-[13px] md:text-[14px] font-semibold uppercase tracking-[0.24em] text-[#f6ae2d] mb-5">Sitemap</p>
            <ul className="space-y-3 text-[16px] font-semibold text-white/85">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <FooterNavLink link={link} />
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[13px] md:text-[14px] font-semibold uppercase tracking-[0.24em] text-[#f6ae2d] mb-5">Services</p>
            <ul className="space-y-3 text-[16px] font-semibold text-white/85">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.id === 'corporate-events' ? '/corporate' : '/documentaries'}
                    className="hover:text-[#f6ae2d] transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[13px] md:text-[14px] font-semibold uppercase tracking-[0.24em] text-[#f6ae2d] mb-5">Contact Information</p>
            <ul className="space-y-4 text-[16px] font-semibold text-white/85">
              <li>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-1">Office Line</p>
                <a href={`tel:${brandInfo.phone.replace(/\s+/g, '')}`} className="inline-flex items-center gap-2 hover:text-[#f6ae2d] transition-colors">
                  <Phone className="w-3.5 h-3.5" aria-hidden />
                  {brandInfo.phone}
                </a>
              </li>
              <li>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-1">Office Location</p>
                <div className="flex items-start gap-2 text-white/75 text-[15px] font-medium">
                  <MapPin className="w-3.5 h-3.5 mt-1" aria-hidden />
                  <span>{brandInfo.location}</span>
                </div>
              </li>
              <li>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-1">Email Contact</p>
                <a href={`mailto:${brandInfo.email}`} className="inline-flex items-center gap-2 hover:text-[#f6ae2d] transition-colors">
                  <Mail className="w-3.5 h-3.5" aria-hidden />
                  {brandInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[14px] font-medium text-white/70">
          <div>© {year} BigzImage. All rights reserved.</div>
          <div className="uppercase text-[10px] tracking-[0.22em] text-white/50">
            Website designed by Jonathan M
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none select-none absolute bottom-10 left-0 right-0 text-center font-medium leading-none tracking-tighter"
        style={{ fontSize: 'clamp(80px, 18vw, 340px)' }}
      >
        <span className="text-white/5">Bigz</span>
        <span className="text-[#f6ae2d]/10">Image</span>
      </div>
    </footer>
  );
};

export default Footer;
