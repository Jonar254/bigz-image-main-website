"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/mock';

const portfolioSections = [
  {
    title: 'Corporate & Stakeholder Event Coverage',
    description:
      'High-touch production for summits, launches, and donor convenings—built for rapid turnaround across PR, reporting, and executive channels.',
    image: '/images/coorporates-webp/_BIG7278.webp',
    href: '/work',
    badge: 'Corporate & Stakeholder Events',
  },
  {
    title: 'Documentaries & Impact Stories',
    description:
      'Field documentaries that follow programme teams on the ground, pairing photography and film to show measurable outcomes and lived impact.',
    image: '/images/community-webp/_DSC0117.webp',
    href: '/work',
    badge: 'Documentary Portfolio',
  },
];

const AnimatedChatDemo = ({ isActive }) => {
  const [messages, setMessages] = useState([]);
  const [typingDots, setTypingDots] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    if (!isActive) return undefined;

    const scenarios = [
      [
        { text: "Tell us about your programme context.", isBot: true },
        { text: "We're documenting drought recovery.", isBot: false },
        { text: 'Which proof-points resonate with your donors?', isBot: true },
      ],
      [
        { text: 'What communications gap are you facing?', isBot: true },
        { text: "Our progress isn't visible beyond reports.", isBot: false },
        { text: "We'll surface the moments that make impact undeniable.", isBot: true },
      ],
    ];

    const current = scenarios[cycleCount % scenarios.length].map((m) => ({ ...m, visible: false }));
    setMessages(current);

    const timeouts = [];
    timeouts.push(setTimeout(() => {
      setMessages((prev) => prev.map((m, i) => ({ ...m, visible: i === 0 })));
    }, 500));
    timeouts.push(setTimeout(() => {
      setMessages((prev) => prev.map((m, i) => ({ ...m, visible: i <= 1 })));
    }, 1800));
    const typingId = setInterval(() => setTypingDots((d) => (d + 1) % 4), 400);
    timeouts.push(setTimeout(() => {
      clearInterval(typingId);
      setTypingDots(0);
      setMessages((prev) => prev.map((m) => ({ ...m, visible: true })));
    }, 4000));
    timeouts.push(setTimeout(() => setCycleCount((c) => c + 1), 7500));

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(typingId);
    };
  }, [isActive, cycleCount]);

  return (
    <div className="bg-neutral-50 rounded-lg p-4 h-32 overflow-hidden relative">
      <div className="absolute top-2 right-2 flex flex-col items-end">
        <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">Step 01</span>
        <span className="text-xs font-medium text-[#f6ae2d]">Discover</span>
      </div>
      <div className="space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'} transition-all duration-500 ${
              msg.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <div
              className={`max-w-[85%] px-3 py-1.5 rounded-2xl text-xs ${
                msg.isBot ? 'bg-black text-white' : 'bg-[#f6ae2d]/15 text-black border border-[#f6ae2d]/40'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {typingDots > 0 && (
          <div className="flex justify-start">
            <div className="bg-neutral-200 px-3 py-1.5 rounded-full">
              <div className="flex space-x-1">
                {[1, 2, 3].map((dot) => (
                  <div
                    key={dot}
                    className={`w-1 h-1 bg-black rounded-full transition-opacity duration-300 ${
                      typingDots >= dot ? 'opacity-100' : 'opacity-30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AnimatedCalendarDemo = ({ isActive }) => {
  const [selected, setSelected] = useState(null);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    if (!isActive) return undefined;
    const t1 = setTimeout(() => setSelected(15), 700);
    const t2 = setTimeout(() => setBooked(true), 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isActive]);

  return (
    <div className="bg-neutral-50 rounded-lg p-4 h-32">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">Step 02</span>
        <span className="text-xs text-[#f6ae2d] font-medium">Plan with purpose</span>
      </div>
      <div className="grid grid-cols-7 gap-1 text-xs">
        {Array.from({ length: 21 }, (_, i) => i + 1).map((day) => (
          <div
            key={day}
            className={`w-4 h-4 flex items-center justify-center rounded transition-all duration-300 ${
              day === selected
                ? booked
                  ? 'bg-black text-white scale-110'
                  : 'bg-[#f6ae2d] text-black scale-110'
                : day % 7 === 0 || day % 6 === 0
                ? 'bg-neutral-200 text-neutral-400'
                : 'bg-white text-black'
            }`}
          >
            {day}
          </div>
        ))}
      </div>
      {booked && (
        <div className="mt-2 text-xs text-black font-medium">✓ Field interviews locked for the 15th</div>
      )}
    </div>
  );
};

const AnimatedEmailDemo = ({ isActive }) => {
  const [emails, setEmails] = useState([
    { subject: 'Consent forms received', status: 'pending' },
    { subject: 'Field diary upload', status: 'pending' },
    { subject: 'Interview selects ready', status: 'pending' },
  ]);

  useEffect(() => {
    if (!isActive) return undefined;
    const ids = emails.map((_, idx) =>
      setTimeout(() => {
        setEmails((prev) => prev.map((e, i) => (i === idx ? { ...e, status: 'delivered' } : e)));
      }, 800 + idx * 700)
    );
    return () => ids.forEach(clearTimeout);
  }, [isActive]);

  return (
    <div className="bg-neutral-50 rounded-lg p-4 h-32">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">Step 03</span>
        <span className="text-xs text-[#f6ae2d] font-medium">Capture real impact</span>
      </div>
      <div className="space-y-2">
        {emails.map((email, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 p-2 rounded transition-all duration-500 ${
              email.status === 'delivered' ? 'bg-black/5' : 'bg-white'
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                email.status === 'delivered' ? 'bg-black' : 'bg-[#f6ae2d]'
              }`}
            />
            <span className="text-xs text-neutral-700 flex-1">{email.subject}</span>
            {email.status === 'delivered' && <span className="text-xs text-black">✓</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

const AnimatedLeadsDemo = ({ isActive }) => {
  const [leads, setLeads] = useState([
    { name: 'Report visuals', score: 0, ready: false },
    { name: 'Donor deck', score: 0, ready: false },
    { name: 'Social cutdowns', score: 0, ready: false },
  ]);

  useEffect(() => {
    if (!isActive) return undefined;
    const targets = [85, 92, 78];
    const ids = targets.map((target, idx) =>
      setTimeout(() => {
        setLeads((prev) =>
          prev.map((lead, i) =>
            i === idx ? { ...lead, score: target, ready: target >= 80 } : lead
          )
        );
      }, idx * 400)
    );
    return () => ids.forEach(clearTimeout);
  }, [isActive]);

  return (
    <div className="bg-neutral-50 rounded-lg p-4 min-h-[140px]">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">Step 04</span>
        <span className="text-xs text-[#f6ae2d] font-medium">Deliver content</span>
      </div>
      <div className="space-y-2">
        {leads.map((lead, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-xs text-neutral-700 w-24">{lead.name}</span>
            <div className="flex-1 bg-neutral-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${lead.ready ? 'bg-black' : 'bg-[#f6ae2d]'}`}
                style={{ width: `${lead.score}%` }}
              />
            </div>
            <span className="text-xs w-8 text-neutral-700">{lead.score}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const AnimatedIntegrationsDemo = ({ isActive }) => {
  const [connections, setConnections] = useState([
    { name: 'Impact report', connected: false },
    { name: 'Donor briefing', connected: false },
    { name: 'Campaign toolkit', connected: false },
    { name: 'Archive library', connected: false },
  ]);

  useEffect(() => {
    if (!isActive) return undefined;
    const ids = connections.map((_, idx) =>
      setTimeout(() => {
        setConnections((prev) => prev.map((c, i) => (i === idx ? { ...c, connected: true } : c)));
      }, 400 + idx * 380)
    );
    return () => ids.forEach(clearTimeout);
  }, [isActive]);

  return (
    <div className="bg-neutral-50 rounded-lg p-4 min-h-[140px]">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">Step 05</span>
        <span className="text-xs text-[#f6ae2d] font-medium">Drive results</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {connections.map((conn, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 p-2 rounded transition-all duration-500 ${
              conn.connected ? 'bg-black/5' : 'bg-white'
            }`}
          >
            <div className={`w-2 h-2 rounded-full ${conn.connected ? 'bg-black' : 'bg-neutral-300'}`} />
            <span className="text-xs text-neutral-700">{conn.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 text-center text-xs text-neutral-700">
        {connections.filter((c) => c.connected).length}/4 assets deployed
      </div>
    </div>
  );
};

const features = [
  {
    title: '01 · Discover',
    description:
      'We start by understanding your work, goals, and communication challenges so we know what truly matters—and where your story is being missed.',
    Demo: AnimatedChatDemo,
    span: 'large',
  },
  {
    title: '02 · Plan with Purpose',
    description:
      'Locations, voices, and key moments are mapped intentionally so every shoot is aligned to your objectives and field logistics.',
    Demo: AnimatedCalendarDemo,
    span: 'medium',
  },
  {
    title: '03 · Capture Real Impact',
    description:
      'We document authentic moments—no staging—capturing real people, experiences, and outcomes through photography and film.',
    Demo: AnimatedEmailDemo,
    span: 'large',
  },
  {
    title: '04 · Deliver Ready-to-Use Content',
    description:
      'You receive organized visuals tailored for reports, campaigns, and digital platforms—ready to deploy immediately.',
    Demo: AnimatedLeadsDemo,
    span: 'medium',
  },
  {
    title: '05 · Drive Results',
    description:
      'Every asset we create is engineered to strengthen donor engagement, increase credibility, and fuel fundraising and advocacy.',
    Demo: AnimatedIntegrationsDemo,
    span: 'medium',
  },
];

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeDemo, setActiveDemo] = useState(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  return (
    <section ref={sectionRef} id="features" className="bg-white text-black py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-[1500px] mx-auto space-y-28 md:space-y-36">
        {/* Services */}
        <div>
          <div className="mb-16 md:mb-20 max-w-3xl space-y-5">
            <p className="text-neutral-500 text-xs sm:text-sm tracking-[0.3em] uppercase">What We Offer</p>
            <h2 className="text-[30px] sm:text-[40px] md:text-[50px] font-medium tracking-[-0.02em] leading-[1.1]">
              Services tailored for{' '}
              <span className="relative inline-block italic">
                <span className="relative z-10">impact storytelling</span>
                <span className="absolute inset-x-[-4px] bottom-1 h-2 bg-[#f6ae2d]/50" aria-hidden="true" />
              </span>
              .
            </h2>
            <p className="text-black text-base sm:text-lg leading-relaxed max-w-[60ch]">
              From documentary films to corporate event coverage, we deliver production-quality visuals that connect your mission with the audiences who matter most.
            </p>
          </div>

          <div className="space-y-10 md:space-y-12">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  className="border border-neutral-200/80 bg-white p-6 sm:p-8 hover:bg-neutral-50 transition-colors duration-500"
                >
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}>
                    <div className="w-full lg:w-2/5">
                      <div className="relative aspect-[5/4] overflow-hidden bg-neutral-100">
                        <img
                          src={service.image}
                          alt={service.label}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-3/5 space-y-4">
                      <h3 className="text-xl sm:text-2xl font-medium tracking-[-0.01em] text-black">
                        {service.label}
                      </h3>
                      <p className="text-black text-sm sm:text-base leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Portfolio Highlights */}
        <div>
          <div className="text-center mb-12 md:mb-16 space-y-5 max-w-3xl mx-auto">
            <p className="text-neutral-500 text-xs sm:text-sm tracking-[0.3em] uppercase">Portfolio Highlights</p>
            <h2 className="text-[30px] sm:text-[40px] md:text-[50px] font-medium tracking-[-0.02em] leading-[1.1]">
              Two pathways through our{' '}
              <span className="italic text-[#c97d16]">work</span>.
            </h2>
            <p className="text-black text-base sm:text-lg leading-relaxed">
              Dive into the bodies of work that define BigzImage—mission-critical corporate coverage and long-form documentaries rooted in dignity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioSections.map((section) => (
              <Link key={section.title} href={section.href} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 text-[11px] tracking-[0.22em] uppercase text-white bg-white/15 backdrop-blur-sm border border-white/20">
                    {section.badge}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl sm:text-2xl font-medium tracking-[-0.01em] text-white">{section.title}</h3>
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <p className="text-black text-sm sm:text-base leading-relaxed max-w-[55ch]">{section.description}</p>
                  <ArrowUpRight className="w-5 h-5 text-neutral-400 mt-1 shrink-0 transition-all duration-300 group-hover:text-black group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Approach with animated demos */}
        <div>
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto space-y-5">
            <p className="text-neutral-500 text-xs sm:text-sm tracking-[0.3em] uppercase">Our Approach</p>
            <h2 className="text-[30px] sm:text-[40px] md:text-[50px] font-medium tracking-[-0.02em] leading-[1.1]">
              A documentary process built around your{' '}
              <span className="relative inline-block italic">
                <span className="relative z-10">impact</span>
                <span className="absolute inset-x-[-4px] bottom-1 h-2 bg-[#f6ae2d]/50" aria-hidden="true" />
              </span>
              .
            </h2>
            <p className="text-black text-base sm:text-lg leading-relaxed">
              From discovery through delivery, we translate programme realities into visuals that donors and partners immediately understand—while keeping dignity, consent, and strategy at the centre.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group ${feature.span === 'large' ? 'md:col-span-2' : ''}`}
                onMouseEnter={() => setActiveDemo(index)}
                onMouseLeave={() => setActiveDemo(null)}
              >
                <div className="bg-white border border-neutral-200/80 p-6 sm:p-8 h-full hover:bg-neutral-50 transition-colors duration-500">
                  <div className="mb-6">
                    <feature.Demo isActive={activeDemo === index || isVisible} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium tracking-[-0.01em] text-black mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-black text-sm sm:text-base leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
