import Link from 'next/link';
import { workProjects, workDetails, teamCredits, btsImages } from '../data/mock';
import CTA from '../components/CTA';
import Reveal from '../components/Reveal';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

export const getWorkEntry = (slug) => {
  const project = workProjects.find((p) => p.id === slug);
  const detail = workDetails[slug];
  if (!project || !detail) {
    return null;
  }
  return { project, detail };
};

const SectionHeading = ({ label, body, image }) => (
  <section className="px-6 md:px-12 py-20 md:py-28">
    <div className="max-w-[1500px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <h3 className="text-[18px] md:text-[20px] font-medium tracking-tight">{label}</h3>
        </div>
        <div>
          <p className="text-[18px] md:text-[22px] leading-[1.5] tracking-[-0.005em] text-neutral-700 max-w-[52ch]">
            {body}
          </p>
        </div>
      </div>
      {image && (
        <Reveal>
          <div className="mt-16 md:mt-20 w-full aspect-[16/9] overflow-hidden">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
        </Reveal>
      )}
    </div>
  </section>
);

const ImageGridItem = ({ src, alt, delay }) => (
  <Reveal delay={delay}>
    <div className="w-full aspect-[16/10] overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-[1200ms] ease-out"
      />
    </div>
  </Reveal>
);

const ImageGrid2x2 = ({ images, altPrefix }) => (
  <section className="px-6 md:px-12">
    <div className="max-w-[1500px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {images.map((src, i) => (
          <ImageGridItem
            key={`${altPrefix}-${i}-${src}`}
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            delay={i * 80}
          />
        ))}
      </div>
    </div>
  </section>
);

const WideImage = ({ src }) => (
  <section className="px-6 md:px-12 py-16 md:py-20">
    <div className="max-w-[1500px] mx-auto">
      <Reveal>
        <div className="w-full aspect-[16/8] overflow-hidden">
          <img src={src} alt="" className="w-full h-full object-cover" />
        </div>
      </Reveal>
    </div>
  </section>
);

const TallImage = ({ src }) => (
  <section className="px-6 md:px-12 py-16 md:py-20">
    <div className="max-w-[1100px] mx-auto">
      <Reveal>
        <div className="w-full aspect-[4/5] overflow-hidden">
          <img src={src} alt="" className="w-full h-full object-cover" />
        </div>
      </Reveal>
    </div>
  </section>
);

const TeamSection = () => (
  <section className="px-6 md:px-12 py-20 md:py-28">
    <div className="max-w-[1500px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <Reveal>
          <div className="w-full aspect-[4/5] overflow-hidden">
            <img
              src={btsImages.teamLens}
              alt="Team behind the lens"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </Reveal>
        <div>
          <h3 className="text-[28px] md:text-[36px] font-medium tracking-[-0.01em] mb-6 md:mb-8">
            Team Behind the Lens
          </h3>
          <p className="text-neutral-700 text-[16px] md:text-[18px] leading-[1.6] max-w-[50ch] mb-8">
            This recognition is a testament to our team’s collaboration and relentless pursuit
            of cinematic storytelling. Every role was essential in bringing this vision to life.
          </p>
          <ul className="space-y-2.5 mb-8">
            {teamCredits.map((c) => (
              <li key={c.role} className="text-[16px] md:text-[17px]">
                <span className="text-neutral-700">{c.role}: </span>
                <span className="font-medium">{c.name}</span>
              </li>
            ))}
          </ul>
          <p className="text-neutral-700 text-[16px] md:text-[18px] leading-[1.6] max-w-[50ch]">
            Their combined vision and dedication brought this ambitious project to life, with
            every frame reflecting BigzImage's belief that visual storytelling is the ultimate language of impact.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const StatsRow = ({ items }) => (
  <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:gap-y-14">
    {items.map((s, i) => (
      <Reveal key={s.label} delay={i * 60}>
        <div>
          <div className="text-[42px] md:text-[56px] font-medium tracking-[-0.02em] leading-none">
            {s.value}
          </div>
          <div className="text-neutral-500 text-[13px] md:text-[15px] mt-3">{s.label}</div>
        </div>
      </Reveal>
    ))}
  </div>
);

const ProductionHighlights = ({ body, stats }) => (
  <section className="px-6 md:px-12 py-20 md:py-28">
    <div className="max-w-[1500px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div>
          <h3 className="text-[28px] md:text-[36px] font-medium tracking-[-0.01em] mb-6 md:mb-8">
            Production Highlights
          </h3>
          <p className="text-neutral-700 text-[16px] md:text-[18px] leading-[1.6] max-w-[50ch] mb-12">
            {body}
          </p>
          <StatsRow items={stats} />
          <p className="text-neutral-700 text-[15px] md:text-[16px] leading-[1.6] max-w-[50ch] mt-12">
            These numbers only hint at the scale of the project. Behind each stat lies countless
            hours of collaboration, problem-solving, and passion — proof that creativity meets
            precision.
          </p>
        </div>
        <Reveal>
          <div className="w-full aspect-[4/5] overflow-hidden">
            <img
              src={btsImages.cinematographer}
              alt="Cinematographer at work"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const ImpactSection = ({ body, stats }) => (
  <section className="px-6 md:px-12 py-20 md:py-28">
    <div className="max-w-[1500px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <Reveal>
          <div className="w-full aspect-[4/5] overflow-hidden">
            <img
              src={btsImages.redOperator}
              alt="Camera operator under red light"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
        <div>
          <h3 className="text-[28px] md:text-[36px] font-medium tracking-[-0.01em] mb-6 md:mb-8">
            The Impact
          </h3>
          <p className="text-neutral-700 text-[16px] md:text-[18px] leading-[1.6] max-w-[50ch] mb-12">
            {body}
          </p>
          <StatsRow items={stats} />
          <p className="text-neutral-700 text-[15px] md:text-[16px] leading-[1.6] max-w-[50ch] mt-12">
            These results prove the power of cinematic storytelling in brand campaigns. By merging
            creativity, technology, and culture, this project didn’t just launch a product — it
            launched a movement.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const MoreWorks = ({ currentId }) => {
  const others = workProjects.filter((p) => p.id !== currentId).slice(0, 2);
  return (
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-neutral-200">
      <div className="max-w-[1500px] mx-auto">
        <h3 className="text-[18px] md:text-[20px] font-medium tracking-tight mb-12 md:mb-16">
          More Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {others.map((p) => (
            <Link key={p.id} href={`/work/${p.id}`} className="group block">
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-out"
                />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-[12px] uppercase tracking-[0.18em] mix-blend-difference">
                  <span>{p.category}</span>
                  <span className="opacity-70">{p.client}</span>
                </div>
                <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <h4 className="mt-5 text-[20px] md:text-[24px] font-medium tracking-[-0.01em] group-hover:opacity-60 transition-opacity duration-300">
                {p.title}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const DetailHeader = ({ title }) => (
  <section className="pt-40 md:pt-52 pb-12 md:pb-16 px-6 md:px-12">
    <div className="max-w-[1500px] mx-auto">
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-neutral-500 hover:text-black text-[14px] mb-10 md:mb-14 transition-colors duration-300"
      >
        <ArrowLeft size={16} />
        All Work
      </Link>
      <h1 className="text-[44px] sm:text-[64px] md:text-[88px] lg:text-[110px] font-medium tracking-[-0.035em] leading-[1.0] max-w-[18ch]">
        {title}
      </h1>
    </div>
  </section>
);

const buildGalleryImages = (project) => [
  project.image,
  btsImages.filmSet,
  btsImages.cinematographer,
  btsImages.redOperator,
];

const WorkDetail = ({ project, detail }) => {
  const gallery = buildGalleryImages(project);

  return (
    <div className="bg-white text-black">
      <DetailHeader title={detail.title} />
      <SectionHeading label="The Challenge" body={detail.challenge} />
      <ImageGrid2x2 images={gallery} altPrefix="challenge" />
      <SectionHeading label="Our Goals" body={detail.goals} />
      <WideImage src={project.image} />
      <SectionHeading label="The Creative Approach" body={detail.approach} />
      <ImageGrid2x2 images={gallery} altPrefix="approach" />
      <TallImage src={btsImages.cinematographer} />
      <TeamSection />
      <WideImage src={btsImages.filmSet} />
      <ProductionHighlights body={detail.productionHighlight} stats={detail.productionStats} />
      <WideImage src={project.image} />
      <ImpactSection body={detail.impact} stats={detail.impactStats} />
      <WideImage src={btsImages.filmSet} />
      <MoreWorks currentId={project.id} />
      <CTA />
    </div>
  );
};

export default WorkDetail;
