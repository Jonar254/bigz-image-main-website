"use client";

import React from 'react';
import useReveal from '../hooks/useReveal';

/**
 * Generic scroll-reveal wrapper. Fades + translates content into view
 * when it enters the viewport.
 */
const Reveal = ({ children, delay = 0, className = '', threshold = 0.15 }) => {
  const { ref, inView } = useReveal(threshold);
  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
