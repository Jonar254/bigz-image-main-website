"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function CorpPhotographyHero() {
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
        src={encodeURI("/images/coorporates-webp/GenderstrategylaunchKenya2025(98).webp")}
        alt="Corporate photography"
        fill
        priority
        loading="eager"
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
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
          Corporate Photography
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Event Photography
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/85 font-light leading-relaxed max-w-2xl mx-auto">
          Make your event look as professional as it feels. We capture corporate moments—clean, discreet,
          and brand-ready. Conferences. Seminars. Launches. Executive events.
        </p>
      </div>
    </section>
  )
}
