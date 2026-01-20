import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutLeaders = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // 1. Reveal the header with a "mask" effect
      gsap.from(".header-mask", {
        y: "100%",
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".header-container",
          start: "top 85%",
        },
      });

      // 2. Animate cards with a 3D-like fold-in and opacity
      const cards = gsap.utils.toArray(".leader-card");
      cards.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          rotationX: -15,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          delay: i * 0.1, 
        });
      });

      // 3. Scale the progress line at the bottom of the card
      gsap.from(".bottom-line", {
        scaleX: 0,
        duration: 1.5,
        ease: "expo.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".leader-grid",
          start: "top 80%",
        },
      });
    },
    { scope: containerRef }
  );

  const leaders = [
    {
      name: "R. Mathaiyan",
      role: "Managing Partner",
      qual: "Founder",
      desc: "With over five decades of experience, he built the organization through hands-on execution and disciplined leadership. He oversees overall management and administrative direction, ensuring quality standards and sound decision-making that shape the company’s long-term growth.",
    },
    {
      name: "M. Subramanian",
      role: "Partner",
      qual: "BE (Civil Engineering)",
      desc: "Bringing over 30 years of extensive experience, he focuses on efficient site management and technical excellence. He ensures that engineering designs are translated into high-quality infrastructure through meticulous quality control and safety compliance.",
    },
    {
      name: "R. M. Saravanakumar",
      role: "Partner",
      qual: "BA, BL",
      desc: "Manages the essential pillars of business operations, handling legal, financial, and administrative matters. His legal background allows him to navigate complex government tenders and ensure growth is backed by disciplined business practices.",
    },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="header-container mb-20 overflow-hidden">
          <div className="header-mask">
            <h3 className="text-sm font-black text-yellow-600 uppercase tracking-[0.5em] mb-4">
              Our Leadership
            </h3>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              The Visionaries
            </h2>
          </div>
        </div>

        {/* Leaders Grid */}
        <div className="leader-grid grid md:grid-cols-3 gap-8 lg:gap-12 text-justify">
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className="leader-card group relative bg-zinc-900/50 border border-white/10 p-8 lg:p-10 shadow-2xl hover:bg-zinc-900 transition-all duration-500"
            >
              {/* Background Decor (Numbered Index) */}
              <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                <span className="text-8xl font-black text-white italic">0{index + 1}</span>
              </div>

              <div className="relative z-10">
                <p className="text-yellow-600 font-bold text-xs uppercase tracking-widest mb-2">
                  {leader.role}
                </p>
                
                <h4 className="text-3xl font-black text-white leading-tight mb-1">
                  {leader.name}
                </h4>
                
                <p className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest mb-8">
                  {leader.qual}
                </p>

                {/* Animated Accent Line */}
                <div className="w-12 h-1 bg-yellow-500 mb-8 origin-left group-hover:w-full transition-all duration-700 ease-in-out"></div>

                <p className="text-zinc-400 leading-relaxed text-sm lg:text-base font-medium group-hover:text-zinc-200 transition-colors duration-500">
                  {leader.desc}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="bottom-line absolute bottom-0 left-0 w-full h-1 bg-yellow-500/30 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutLeaders;