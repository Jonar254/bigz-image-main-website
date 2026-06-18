const challenges = [
  'Limited visibility of programme outcomes and achievements',
  'Overly technical reporting that is difficult for non-specialist audiences to engage with',
  'Weak or inconsistent storytelling that fails to capture the human impact behind the data',
];

const solutionPoints = [
  'Translate programme results into compelling, evidence-driven narratives',
  'Amplify community voices with dignity, authenticity, and respect',
  'Strengthen partner visibility and deepen donor engagement',
];

const ProblemSolution = () => {
  return (
    <section className="bg-white text-black px-6 md:px-12 pt-8 md:pt-12 pb-14 md:pb-20">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="p-6 md:p-8 bg-neutral-50 rounded-3xl border border-black/5">
          <div className="h-full p-4 md:p-6 bg-neutral-50 rounded-xl border-l-[6px] border-[#0b3c5d] flex flex-col">
            <p className="text-neutral-500 text-[13px] tracking-[0.24em] uppercase mb-5">The Problem</p>
            <h3 className="text-[28px] md:text-[36px] font-medium tracking-[-0.02em] leading-[1.1] mb-6">
              Impact is happening — but it is not being seen.
            </h3>
            <p className="text-[16px] md:text-[18px] text-neutral-700 leading-[1.7] mb-6">
              Many organizations are delivering meaningful, high-impact programmes, yet struggle to communicate their results
              effectively to donors, partners, and the communities they serve.
            </p>
            <p className="text-neutral-500 text-[13px] tracking-[0.2em] uppercase mb-4">Key Challenges</p>
            <ul className="space-y-3 text-[16px] text-neutral-800 leading-relaxed">
              {challenges.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 block h-[2px] w-6 bg-black" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-6 md:p-8 bg-[#0b3c5d] rounded-3xl border border-black/5 text-white">
          <div className="h-full p-4 md:p-6 bg-[#0b3c5d] rounded-xl border-l-[6px] border-[#f6ae2d] flex flex-col">
            <p className="text-white text-[13px] tracking-[0.24em] uppercase mb-5">Our Solution</p>
            <h3 className="text-[28px] md:text-[36px] font-medium tracking-[-0.02em] leading-[1.1] mb-6">
              We bridge the gap between data and human stories.
            </h3>
            <p className="text-[16px] md:text-[18px] text-white leading-[1.7] mb-6">
              Through photography, documentary film, and strategic storytelling, we help organizations communicate their true
              impact with clarity and purpose.
            </p>
            <ul className="space-y-3 text-[16px] text-white leading-relaxed">
              {solutionPoints.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 block h-[2px] w-6 bg-white" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
