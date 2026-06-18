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
    question: 'What does BigzImage specialize in?',
    answer:
      'BigzImage specializes in documentary filmmaking, documentary photography, and strategic visual storytelling for NGOs, development organizations, research institutions, and international partners. We help organizations communicate programme impact through compelling visual narratives that engage donors, partners, and stakeholders.',
  },
  {
    question: 'How can visual storytelling help our organization?',
    answer:
      'Visual storytelling transforms complex programme data into relatable human stories. It helps increase donor engagement, strengthen organizational credibility, improve fundraising efforts, and make reporting more accessible to diverse audiences.',
  },
  {
    question: 'What types of organizations do you work with?',
    answer:
      'We work with non-governmental organizations (NGOs), international development agencies, research institutions, foundations, donor-funded projects, and organizations focused on social impact and community development.',
  },
  {
    question: 'What services do you offer?',
    answer:
      'Our services include documentary film production, documentary photography, conference and event coverage, livestream services, staff portraits, and customized visual content packages tailored to your communication and reporting needs.',
  },
  {
    question: 'Do you travel to project locations?',
    answer:
      'Yes. We work across diverse field environments and can travel to project sites, communities, conferences, workshops, and events throughout Africa to document programme implementation, outcomes, and impact stories.',
  },
  {
    question: 'How do you ensure ethical and respectful storytelling?',
    answer:
      'We follow a people-first approach that prioritizes dignity, informed consent, authenticity, and respect for all participants. Our goal is to amplify community voices while ensuring accurate and ethical representation.',
  },
  {
    question: 'Can you create content for donor reports and fundraising campaigns?',
    answer:
      'Absolutely. Our visual content is designed to support donor reporting, fundraising campaigns, annual reports, impact reports, websites, social media campaigns, and stakeholder communications.',
  },
  {
    question: 'What is your production process?',
    answer:
      'Our process includes four stages: discovery and conceptual meetings, strategy and planning, field production and post-production, and final delivery. This collaborative approach ensures the content aligns with your objectives and communication goals.',
  },
  {
    question: 'What deliverables can we expect?',
    answer:
      'Depending on your needs, deliverables may include documentary films, short impact videos, professional photographs, edited content for digital platforms, raw footage, event coverage materials, staff portraits, and customized communication assets.',
  },
  {
    question: 'How do we get started with BigzImage?',
    answer:
      'Getting started is simple. Book a discovery call or submit a request for quotation with details about your project, objectives, and scope of work. We will review your needs and recommend the most suitable storytelling approach and content package.',
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
