import React from 'react';
import {
  cultureHero,
  journey,
  stats,
  mvv,
  mvvImage,
  awards,
  visionaries,
} from '../data/mock';
import CTA from '../components/CTA';
import Reveal from '../components/Reveal';
import BrandLogos from '../components/BrandLogos';

const CultureHero = () => (
  <section className="bg-white text-black pt-40 md:pt-52 pb-16 md:pb-24 px-6 md:px-12">
    <div className="max-w-[1500px] mx-auto">
      <h1 className="text-[52px] sm:text-[80px] md:text-[112px] lg:text-[140px] font-medium tracking-[-0.04em] leading-[1.0] max-w-[14ch]">
        {cultureHero.headline}
      </h1>
      <p className="mt-10 md:mt-14 text-black text-[16px] md:text-[18px] max-w-[58ch] leading-relaxed">
        {cultureHero.subhead}
      </p>
    </div>
  </section>
);

const HeroImage = () => (
  <section className="px-6 md:px-12 bg-white">
    <div className="max-w-[1500px] mx-auto">
      <Reveal>
        <div className="w-full aspect-[16/8] overflow-hidden">
          <img
            src={cultureHero.heroImage}
            alt="Behind the scenes team"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </Reveal>
    </div>
  </section>
);

const JourneyHeading = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
    <div>
      <h3 className="text-[18px] md:text-[20px] font-medium tracking-tight">Our Journey</h3>
    </div>
    <div>
      <p className="text-[18px] md:text-[20px] leading-[1.55] tracking-[-0.005em] text-neutral-700 max-w-[44ch]">
        {journey.paragraph}
      </p>
    </div>
  </div>
);

const JourneyStat = ({ value, label, delay }) => (
  <Reveal delay={delay}>
    <div>
      <div className="text-[64px] sm:text-[80px] md:text-[96px] font-medium tracking-[-0.025em] leading-none">
        {value}
      </div>
      <div className="text-neutral-700 text-[15px] md:text-[16px] mt-5">{label}</div>
    </div>
  </Reveal>
);

const JourneySection = () => (
  <section className="bg-white text-black pt-28 md:pt-36 pb-28 md:pb-36 px-6 md:px-12">
    <div className="max-w-[1500px] mx-auto">
      <JourneyHeading />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-20 md:mt-28 items-end">
        <div className="flex md:items-end">
          <Reveal>
            <div className="w-full max-w-[460px] aspect-[16/9] overflow-hidden">
              <img
                src={journey.image}
                alt="Cinematographer at work"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
        <div className="flex flex-col gap-16 md:gap-20">
          {stats.map((s, i) => (
            <JourneyStat key={s.label} value={s.value} label={s.label} delay={i * 80} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const MVVItem = ({ item, delay }) => (
  <Reveal delay={delay}>
    <div>
      <h4 className="text-[28px] md:text-[36px] font-medium tracking-[-0.01em] mb-6">
        {item.label}
      </h4>
      <p className="text-white/80 text-[16px] md:text-[18px] leading-[1.6] max-w-[48ch]">
        {item.text}
      </p>
    </div>
  </Reveal>
);

const MVVSection = () => (
  <section className="bg-black text-white py-28 md:py-36 px-6 md:px-12">
    <div className="max-w-[1500px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
        <Reveal>
          <div className="sticky top-28 w-full aspect-[3/4] overflow-hidden md:max-w-[520px]">
            <img src={mvvImage} alt="Creative team" className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <div className="flex flex-col gap-20 md:gap-28">
          {mvv.map((item, i) => (
            <MVVItem key={item.label} item={item} delay={i * 100} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const AwardsSection = () => (
  <section className="bg-white text-black py-28 md:py-36 px-6 md:px-12">
    <div className="max-w-[1500px] mx-auto">
      <h3 className="text-[28px] md:text-[36px] font-medium tracking-[-0.01em] mb-12 md:mb-16">
        Recognized for Excellence
      </h3>
      <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
        {awards.map((a) => (
          <div
            key={a.name}
            className="flex items-center justify-between py-5 md:py-6"
          >
            <span className="text-[15px] md:text-[17px] text-black">{a.name}</span>
            <span className="text-[14px] md:text-[16px] text-black text-right">
              {a.detail}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const VisionaryCard = ({ person, instanceKey }) => (
  <div key={instanceKey} className="shrink-0 w-[220px] md:w-[280px]">
    <div className="w-full aspect-[4/5] overflow-hidden">
      <img
        src={person.image}
        alt={person.name}
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
      />
    </div>
    <div className="mt-4">
      <div className="text-white text-[15px] md:text-[16px] font-medium">{person.name}</div>
      <div className="text-white/50 text-[12px] md:text-[13px] mt-1">{person.role}</div>
    </div>
  </div>
);

const VisionaryMarquee = ({ people, direction }) => (
  <div className="relative">
    <div className={`flex gap-6 md:gap-8 marquee-track-${direction} whitespace-nowrap`}>
      {people.map((p, i) => (
        <VisionaryCard
          key={`${direction}-${p.name}-${i}`}
          instanceKey={`${direction}-${p.name}-${i}`}
          person={p}
        />
      ))}
    </div>
  </div>
);

const VisionariesSection = () => {
  const row1 = [...visionaries, ...visionaries];
  const row2 = [...visionaries.slice().reverse(), ...visionaries.slice().reverse()];
  return (
    <section className="bg-black text-white py-28 md:py-36 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        <h3 className="text-[28px] md:text-[36px] font-medium tracking-[-0.01em] mb-12 md:mb-16">
          Meet the Visionaries
        </h3>
      </div>
      <div className="flex flex-col gap-6 md:gap-8">
        <VisionaryMarquee people={row1} direction="left" />
        <VisionaryMarquee people={row2} direction="right" />
      </div>
    </section>
  );
};

const Culture = () => (
  <div className="bg-white text-black">
    <CultureHero />
    <HeroImage />
    <JourneySection />
    <MVVSection />
    <AwardsSection />
    <VisionariesSection />
    <BrandLogos />
    <CTA />
  </div>
);

export default Culture;
