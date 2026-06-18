"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function CorpVideographyHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[70vh] max-h-[760px] w-full overflow-hidden flex items-center justify-center px-4 sm:px-6"
    >
      <Image
        src={encodeURI("/images/coorporates-webp/Global learning workshop (154).webp")}
        alt="Corporate videography"
        fill
        priority
        className="absolute inset-0 h-full w-full object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div
        className={`relative z-10 text-center max-w-3xl pt-24 md:pt-28 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
          </svg>
          Corporate Videography
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Event Video Coverage
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/85 font-light leading-relaxed max-w-2xl mx-auto">
          Professional video coverage for corporate events, stakeholder engagements, and brand positioning.
          We produce polished video assets ready for multi-platform use.
        </p>
      </div>
    </section>
  )
}
