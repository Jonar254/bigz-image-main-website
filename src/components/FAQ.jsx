"use client";

import React, { useEffect, useRef, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: 'How can visual storytelling help our organization?',
    answer:
      'Visual storytelling turns programme results into compelling stories that engage donors, partners, and communities. It increases visibility and creates content for reports, social media, fundraising, and stakeholder engagement.',
  },
  {
    question: 'Who do you work with?',
    answer:
      'We work with NGOs, foundations, research institutions, development agencies, and businesses delivering social impact programmes across East Africa.',
  },
  {
    question: 'What services do you offer?',
    answer:
      'We provide documentary filmmaking, documentary photography, event coverage, interviews, staff portraits, livestreaming, and campaign-ready content for NGOs and development partners.',
  },
  {
    question: 'Do you travel to project locations?',
    answer:
      'Yes. We regularly work across Kenya, Tanzania, and Uganda, and can travel to other locations based on project needs.',
  },
  {
    question: 'How do you ensure ethical storytelling?',
    answer:
      'We follow informed consent and safeguarding practices, ensuring every story is told with dignity, cultural sensitivity, and respect.',
  },
  {
    question: 'What is your production process?',
    answer:
      'Our process is simple: Discover, Plan, Produce, Deliver. We understand your goals, create a storytelling plan, produce high-quality content, and deliver polished assets ready for reporting and communications.',
  },
  {
    question: 'What deliverables will we receive?',
    answer:
      'Depending on your project, deliverables may include photography, documentary films, edited videos, raw footage (on request), and content optimized for reports, websites, and social media.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Contact us through our website or by phone to schedule a discovery call. We will discuss your goals, timeline, and budget, then recommend the best solution for your project.',
  },
  {
    question: 'Can your services be included in grant budgets?',
    answer:
      'Yes. We work with donor-funded programmes and provide quotations, invoices, and documentation that meet grant and procurement requirements.',
  },
  {
    question: 'Do you offer flexible packages?',
    answer:
      'Yes. We tailor our packages to your budget and project needs, from one-day event coverage to long-term documentary productions, helping you maximize impact within your available funding.',
  },
];

const FAQ = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState('item-0');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="bg-white text-black py-20 md:py-30 px-6 md:px-12"
    >
      <div className="max-w-[1500px] mx-auto space-y-14">
        <div className="text-center max-w-5xl mx-auto space-y-5">
          <div
            className={`inline-flex items-center text-neutral-500 text-xs md:text-sm tracking-[0.3em] uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Frequently Asked Questions
          </div>
          <h2
            className={`text-[32px] sm:text-[42px] md:text-[50px] font-medium tracking-[-0.02em] leading-[1.1] mx-auto transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Everything you need to{' '}
            <span className="relative inline-block italic align-baseline">
              <span className="relative z-10">know</span>
              <span
                className="absolute inset-x-[-4px] bottom-1 h-2 bg-[#f6ae2d]/50"
                aria-hidden="true"
              />
            </span>
          </h2>

          <p
            className={`text-black text-base sm:text-lg leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Common questions about our services, process, and how we work with
            organizations to create impactful visual stories.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion
            type="single"
            collapsible
            value={activeValue}
            onValueChange={(value) => setActiveValue(value ?? activeValue)}
            className="space-y-0"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border-b border-neutral-200"
              >
                <AccordionTrigger className="hover:no-underline py-6 md:py-7">
                  <span className="text-left text-[18px] md:text-[20px] font-medium tracking-[-0.01em] leading-snug pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pb-6 md:pb-7">
                    <p className="text-black text-[15px] md:text-[16px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
