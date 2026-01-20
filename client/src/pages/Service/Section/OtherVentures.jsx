import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ventures = [
  {
    title: "RM Traders",
    category: "Material Supply",
    desc: "Supplying high-grade construction materials and industrial resources to power large-scale infrastructure.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ec4?q=80&w=1200",
  },
  {
    title: "RM Real Estate",
    category: "Property Development",
    desc: "Developing premium residential and commercial spaces built on the foundation of engineering excellence.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200",
  },
  {
    title: "RM Thanga Maaligai",
    category: "Retail & Luxury",
    desc: "A legacy of trust extended into the fine jewelry retail sector, known for purity and craftsmanship.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200",
  }
];

const OtherVentures = ({ isFinished }) => {
  const containerRef = useRef();

  useGSAP(() => {
    if (!isFinished) return;

    // 1. Reveal the section header
    gsap.from(".venture-header", {
      opacity: 0,
      y: 30,
      duration: 1,
      scrollTrigger: {
        trigger: ".venture-header",
        start: "top 85%",
      }
    });

    // 2. Animate the venture cards
    const cards = gsap.utils.toArray(".venture-card");
    cards.forEach((card, i) => {
      const img = card.querySelector(".venture-img-wrapper");
      const content = card.querySelector(".venture-content");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      });

      tl.from(img, {
        clipPath: "inset(0% 100% 0% 0%)",
        duration: 1.5,
        ease: "expo.inOut",
      })
      .from(content, {
        opacity: 0,
        x: -20,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.8");
    });
  }, { scope: containerRef, dependencies: [isFinished] });

  return (
    <section ref={containerRef} className="bg-stone-50 py-32 px-6 md:px-12 border-t border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="venture-header mb-24 text-center md:text-left">
          <h2 className="text-xs font-black text-yellow-600 uppercase tracking-[0.5em] mb-4">Diversified Portfolio</h2>
          <h3 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase leading-none">
            Other <span className="text-stone-300 italic">Ventures</span>
          </h3>
        </div>

        {/* Ventures List */}
        <div className="flex flex-col gap-12">
          {ventures.map((venture, index) => (
            <div 
              key={index} 
              className="venture-card group relative grid lg:grid-cols-12 items-center gap-8 lg:gap-0"
            >
              {/* Image Section - Takes 7 columns */}
              <div className="lg:col-span-7 venture-img-wrapper relative h-[300px] md:h-[450px] overflow-hidden rounded-sm shadow-2xl z-10">
                <img 
                  src={venture.image} 
                  alt={venture.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Content Section - Takes 5 columns */}
              <div className="lg:col-span-5 venture-content lg:-ml-20 relative z-20">
                <div className="bg-white p-8 md:p-12 shadow-xl border-l-4 border-yellow-500 transition-transform duration-500 group-hover:translate-x-4">
                  <span className="text-[10px] font-black text-stone-400 uppercase tracking-[0.3em] mb-2 block">
                    {venture.category}
                  </span>
                  <h4 className="text-3xl md:text-4xl font-bold text-zinc-900 uppercase tracking-tight mb-4">
                    {venture.title}
                  </h4>
                  <p className="text-stone-600 leading-relaxed text-sm md:text-base font-medium">
                    {venture.desc}
                  </p>
                  
                  <div className="mt-8 flex items-center gap-4 group/link cursor-pointer">
                    <span className="text-xs font-black uppercase tracking-widest border-b-2 border-yellow-500 pb-1">
                      Explore Vertical
                    </span>
                    <svg className="w-4 h-4 transform group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Branding Footer */}
        <div className="mt-32 pt-12 border-t border-stone-200 flex justify-between items-center opacity-40 grayscale">
            <span className="text-2xl font-black text-stone-400 tracking-tighter uppercase">RM Group</span>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest">
                <span>Traders</span>
                <span>Real Estate</span>
                <span>Retail</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default OtherVentures;