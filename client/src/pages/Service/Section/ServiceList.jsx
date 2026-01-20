import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "General Contracting",
    category: "Management",
    details: "Project execution from ground-breaking to handover.",
    img: "https://i.pinimg.com/736x/82/22/8f/82228f186a4e3d590f9bbeb69b2a54ed.jpg"
  },
  {
    title: "Road & Highways",
    category: "Infrastructure",
    details: "High-durability paving and national highway development.",
    img: "https://i.pinimg.com/1200x/8f/48/e2/8f48e254f4de25a3faf46195a1845018.jpg"
  },
  {
    title: "Bridge Construction",
    category: "Engineering",
    details: "Structural engineering for complex river and overpass spans.",
    img: "https://i.pinimg.com/736x/da/af/09/daaf097d3236521ea2b4564830e09dbd.jpg"
  },
  {
    title: "Drainage Systems",
    category: "Utility",
    details: "Culvert systems and storm-water management solutions.",
    img: "https://i.pinimg.com/1200x/3b/90/23/3b90234f715a7c7e4a29e702261c5c9f.jpg"
  }
];

const ServiceListLight = ({ isFinished }) => {
  const containerRef = useRef();

  useGSAP(() => {
    if (!isFinished) return;

    // 1. Header Reveal (Expertise Defined & Number)
    gsap.from(".header-content > *", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".header-content",
        start: "top 80%",
      }
    });

    // 2. Individual Service Item Reveals
    const items = gsap.utils.toArray(".service-item");
    
    items.forEach((item) => {
      const img = item.querySelector(".service-img");
      const line = item.querySelector(".service-line");
      const texts = item.querySelectorAll(".reveal-text");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 85%", 
          toggleActions: "play none none reverse",
        }
      });

      tl.from(line, { 
        scaleX: 0, 
        duration: 1.2, 
        ease: "expo.inOut" 
      })
      .from(texts, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.7")
      .from(img, {
        clipPath: "inset(0% 100% 0% 0%)",
        duration: 1.4,
        ease: "expo.out"
      }, "-=1");

      // 3. IMAGE PARALLAX (Subtle movement while scrolling)
      gsap.to(img, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Clean up / Refresh
    ScrollTrigger.refresh();

  }, { scope: containerRef, dependencies: [isFinished] });

  return (
    <section ref={containerRef} className="bg-stone-50 text-zinc-900 py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="header-content flex flex-col md:flex-row justify-between items-end mb-24 border-b border-stone-200 pb-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
              Expertise <span className="text-yellow-600 italic">Defined.</span>
            </h2>
            <p className="text-stone-500 text-sm md:text-lg uppercase tracking-[0.3em] font-bold">
              Precision Engineering & Strategic Construction
            </p>
          </div>
          <div className="mt-8 md:mt-0 overflow-hidden">
              <span className="text-9xl font-black text-stone-200/60 leading-none inline-block">04</span>
          </div>
        </div>

        {/* List Section */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div key={index} className="service-item group relative py-14 border-b border-stone-200 overflow-hidden">
              <div className="service-line absolute top-0 left-0 w-full h-[2px] bg-yellow-600 origin-left" />
              
              <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-1 hidden lg:block">
                  <span className="reveal-text block text-xs font-mono font-bold text-stone-400">
                    [{index + 1}]
                  </span>
                </div>

                <div className="lg:col-span-5">
                  <span className="reveal-text block text-[10px] font-black text-yellow-600 uppercase tracking-[0.4em] mb-3">
                    {service.category}
                  </span>
                  <h3 className="reveal-text text-3xl md:text-5xl font-black uppercase tracking-tighter group-hover:translate-x-3 transition-transform duration-500 ease-out">
                    {service.title}
                  </h3>
                </div>

                <div className="lg:col-span-3">
                  <p className="reveal-text text-stone-500 text-sm leading-relaxed font-medium">
                    {service.details}
                  </p>
                </div>

                <div className="lg:col-span-3 h-52 overflow-hidden relative shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="service-img w-full h-full object-cover scale-125" 
                  />
                  <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Closing Visual Anchor */}
        <div className="mt-32 flex flex-col items-center">
          <div className="h-24 w-[1px] bg-stone-300 mb-8" />
          <p className="text-stone-400 font-mono text-[10px] uppercase tracking-[0.5em]">
            Quality • Integrity • Discipline
          </p>
        </div>

      </div>
    </section>
  );
};

export default ServiceListLight;