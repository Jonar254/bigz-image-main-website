"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, Zap } from "lucide-react";

const PRODUCER_AVATAR = "/images/isaac/KingKiddPH-113.webp";

const conversations = [
  {
    title: "About BigzImage",
    messages: [
      {
        text: "What does BigzImage do?",
        sender: "customer",
        delay: 0,
      },
      {
        text: "BigzImage creates documentary films, photography, and visual reports that help NGOs and development organizations make their impact visible to donors and stakeholders.",
        sender: "ai",
        delay: 1000,
      },
      {
        text: "Who do you work with?",
        sender: "customer",
        delay: 2500,
      },
      {
        text: "We primarily support NGOs, development partners, and research institutions across Africa that need to showcase programmes and results clearly.",
        sender: "ai",
        delay: 3500,
      },
      {
        text: "What problem are you solving?",
        sender: "customer",
        delay: 5000,
      },
      {
        text: "Impact reports can feel too technical, so vital stories don’t always inspire action. We translate your data into human-centered narratives that unlock trust, funding, and momentum.",
        sender: "ai",
        delay: 6000,
      },
    ],
  },
  {
    title: "Services & Results",
    messages: [
      {
        text: "What services do you offer?",
        sender: "customer",
        delay: 0,
      },
      {
        text: "Documentary production, action photography, visual reporting, communication support, and event coverage—tailored for reports, campaigns, and digital platforms.",
        sender: "ai",
        delay: 1000,
      },
      {
        text: "What results can we expect?",
        sender: "customer",
        delay: 2500,
      },
      {
        text: "Our work boosts donor engagement, strengthens credibility, supports fundraising, and keeps stakeholders aligned with what’s happening on the ground.",
        sender: "ai",
        delay: 3500,
      },
      {
        text: "What makes BigzImage different?",
        sender: "customer",
        delay: 5000,
      },
      {
        text: "We blend storytelling expertise with deep development-sector understanding. Every production is people-first, ethically grounded, and focused on outcomes—not just pretty visuals.",
        sender: "ai",
        delay: 6000,
      },
    ],
  },
  {
    title: "Operations & Next Steps",
    messages: [
      {
        text: "Do you work across multiple locations?",
        sender: "customer",
        delay: 0,
      },
      {
        text: "Yes. We operate across different African countries and adapt quickly to local contexts, cultural nuances, and field realities.",
        sender: "ai",
        delay: 1000,
      },
      {
        text: "What’s included in your pricing packages?",
        sender: "customer",
        delay: 2500,
      },
      {
        text: "Packages scale from focused shoots to full documentary production. Depending on scope, they include photography, video, multi-day fieldwork, social content, and ongoing support.",
        sender: "ai",
        delay: 3500,
      },
      {
        text: "How do we get started?",
        sender: "customer",
        delay: 5000,
      },
      {
        text: "Begin with a discovery call. We’ll align on your goals, audience, and timelines, then recommend the best approach to telling your story effectively.",
        sender: "ai",
        delay: 6000,
      },
    ],
  },
];

const ModernFaq = () => {
  const sectionRef = useRef(null);
  const chatContainerRef = useRef(null);
  const timeoutRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [currentConversation, setCurrentConversation] = useState(0);
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
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

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [displayedMessages, isTyping]);

  useEffect(() => {
    const conversation = conversations[currentConversation];
    setDisplayedMessages([]);
    setIsTyping(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    let messageIndex = 0;

    const showNextMessage = () => {
      if (messageIndex >= conversation.messages.length) {
        timeoutRef.current = setTimeout(() => {
          setCurrentConversation((prev) => (prev + 1) % conversations.length);
        }, 3000);
        return;
      }

      const message = conversation.messages[messageIndex];

      timeoutRef.current = setTimeout(() => {
        if (message.sender === "ai") {
          setIsTyping(true);
          timeoutRef.current = setTimeout(() => {
            setDisplayedMessages((prev) => [...prev, message]);
            setIsTyping(false);
            messageIndex += 1;
            showNextMessage();
          }, 800);
        } else {
          setDisplayedMessages((prev) => [...prev, message]);
          messageIndex += 1;
          showNextMessage();
        }
      }, message.delay);
    };

    showNextMessage();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentConversation]);

  return (
    <section id="ai-team" ref={sectionRef} className="relative z-10">
      <div className="bg-white pt-14 sm:pt-20 pb-14 sm:pb-20 px-4 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center text-neutral-500 text-xs md:text-sm tracking-[0.3em] uppercase mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              How our storytelling process works
            </div>

            <h2
              className={`text-[32px] sm:text-[42px] md:text-[50px] font-medium tracking-[-0.02em] text-black leading-[1.08] mb-6 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              See how we guide partners from{' '}
              <span className="relative inline-block italic">
                <span className="relative z-10">discovery to delivery</span>
                <span className="absolute inset-x-[-4px] bottom-1 h-2 bg-[#f6ae2d]/50" aria-hidden="true" />
              </span>
            </h2>

            <p
              className={`text-base md:text-lg text-black max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              These live chat snippets mirror how we onboard NGOs, align on goals, and deliver documentary assets that move donors to act.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
            <div className="w-full lg:w-1/2 flex flex-col justify-center lg:h-[600px] space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div
                className={`transition-all duration-1000 delay-600 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <h3 className="text-2xl lg:text-3xl font-medium tracking-[-0.01em] text-black mb-4 lg:mb-6">
                  This is what your comms team experiences
                </h3>

                <div className="space-y-3 lg:space-y-4 text-base lg:text-lg text-neutral-700 leading-[1.7]">
                  <p>
                    While field teams deliver impact, we capture the stories, visuals, and voices that often get buried in technical reports.
                  </p>

                  <p>
                    Each chat reflects a key moment in our process—from discovery and strategy to production and delivery—so nothing is left to guesswork.
                  </p>

                  <p className="text-lg lg:text-xl font-medium text-black">
                    The result: narratives that unlock funding, trust, and action.
                  </p>
                </div>
              </div>

              <div
                className={`transition-all duration-1000 delay-800 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <div className="p-4 lg:p-6 bg-neutral-50 rounded-xl border-l-[6px] border-black">
                  <p className="text-neutral-900 font-medium text-sm lg:text-base leading-relaxed">
                    "Working with BigzImages was a great experience. They brought a high level of professionalism, keen attention to detail, and a calm, solution-oriented approach. Their flexibility and creativity stood out—navigating challenges and accommodating impromptu requests without compromising quality. Their ability to adapt while maintaining a high standard made them a valuable partner in telling our stories of change."
                  </p>
                  <p className="text-xs lg:text-sm text-black mt-2 tracking-[0.08em] uppercase">
                    — Halima Shaaban, National Coordinator · Schools2030 Kenya
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
              <div className="max-w-md w-full">
                <div
                  className={`relative transition-all duration-1000 delay-600 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl">
                    <div className="bg-black rounded-[2rem] p-1">
                      <div className="bg-white rounded-[1.5rem] overflow-hidden">
                        <div className="bg-neutral-100 px-6 py-3 flex justify-between items-center text-sm">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-black rounded-full" />
                            <span className="font-medium text-neutral-800 tracking-tight">BigzImage Producer</span>
                          </div>
                          <div className="flex items-center gap-1 text-neutral-500">
                            <Clock className="w-3 h-3" />
                            <span className="text-xs">Partner Support</span>
                          </div>
                        </div>

                        <div className="bg-black px-6 py-4 text-white">
                          <div className="flex items-center gap-3">
                            <img
                              src={PRODUCER_AVATAR}
                              alt="BigzImage Producer"
                              className="w-8 h-8 rounded-full object-cover mr-2 mt-1 flex-shrink-0"
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold text-sm">Isaac Njagi — CEO Bigz Image</h3>
                              <p className="text-xs text-slate-300">Chat with +254 716 696 672</p>
                            </div>
                            <div className="text-xs text-green-400 flex items-center gap-1">
                              <div className="w-2 h-2 bg-green-400 rounded-full" />
                              Online
                            </div>
                          </div>
                        </div>

                        <div
                          ref={chatContainerRef}
                          className="h-96 overflow-y-scroll p-4 space-y-3 bg-neutral-50 [scrollbar-width:none] [-ms-overflow-style:'none'] [mask-image:linear-gradient(to_bottom,transparent,black_5%,black_95%,transparent)] [&::-webkit-scrollbar]:hidden"
                        >
                          {displayedMessages.map((message, index) => (
                            <div
                              key={`${message.sender}-${index}`}
                              className={`flex ${message.sender === "customer" ? "justify-end" : "justify-start"}`}
                            >
                              {message.sender === "ai" && (
                                <img
                                  src={PRODUCER_AVATAR}
                                  alt="BigzImage Producer"
                                  className="w-6 h-6 rounded-full object-cover mr-2 mt-1 flex-shrink-0"
                                />
                              )}
                              <div
                                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                                  message.sender === "customer"
                                    ? "bg-black text-white rounded-br-md"
                                    : "bg-white text-black shadow-sm border border-neutral-200 rounded-bl-md"
                                }`}
                              >
                                {message.text.split("\n").map((line, i) => (
                                  <div key={`${line}-${i}`}>{line}</div>
                                ))}
                              </div>
                              {message.sender === "customer" && (
                                <div className="w-6 h-6 rounded-full bg-neutral-400 ml-2 mt-1 flex-shrink-0 flex items-center justify-center text-xs text-white font-medium">
                                  C
                                </div>
                              )}
                            </div>
                          ))}

                          {isTyping && (
                            <div className="flex justify-start items-start">
                              <img
                                src={PRODUCER_AVATAR}
                                alt="BigzImage Producer"
                                className="w-6 h-6 rounded-full object-cover mr-2 mt-1 flex-shrink-0"
                              />
                              <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm border border-neutral-200">
                                <div className="flex space-x-1">
                                  <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" />
                                  <div
                                    className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.1s" }}
                                  />
                                  <div
                                    className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.2s" }}
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="p-4 bg-white border-t border-neutral-200">
                          <div className="flex items-center gap-3 bg-neutral-100 rounded-full px-4 py-2">
                            <span className="text-black text-sm lg:text-base flex-1">Isaac is responding...</span>
                            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                              <Zap className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernFaq;
