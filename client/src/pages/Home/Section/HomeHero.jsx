import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HomeHero = () => {
  const container = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const buttonsRef = useRef();
  const cardsRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Staggered reveal of all elements
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, delay: 0.5 }
    )
    .fromTo(subtitleRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }, "-=0.8")
    .fromTo(buttonsRef.current.children, 
      { scale: 0.8, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.8, stagger: 0.2 }, "-=0.6")
    .fromTo(".feature-card", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 }, "-=0.4");

  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen w-full overflow-hidden bg-zinc-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Modern Home" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 pt-48 pb-20 min-h-screen flex flex-col justify-between">
        
        {/* Main Content */}
        <div className="max-w-2xl">
          <div className="overflow-hidden">
            <h1 ref={titleRef} className="text-6xl md:text-8xl font-medium text-white tracking-tight leading-[1.1]">
              Build your <br />
              <span className="font-light italic">dream home</span>
            </h1>
          </div>
          
          <div className="h-[1px] w-24 bg-yellow-500 my-8"></div>

          <p ref={subtitleRef} className="text-zinc-300 text-lg md:text-xl font-light max-w-md leading-relaxed mb-10">
            From site selection to turnkey delivery in just 5 months.
          </p>

          <div ref={buttonsRef} className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-yellow-500 transition-colors duration-300">
              More Details
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/30 text-white text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md hover:bg-white/10 transition-colors duration-300">
              Submit Your Application
            </button>
          </div>
        </div>

        {/* Bottom Feature Cards (Mimicking the reference) */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
          {[
            { 
              title: "Design", 
              desc: "We will develop an individual project or select a ready-made solution",
              img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=200"
            },
            { 
              title: "Construction", 
              desc: "Any complexity with a guarantee of up to 5 years",
              img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=200"
            },
            { 
              title: "Land", 
              desc: "Free selection of land plots for your future home",
              img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=200"
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="feature-card group flex items-center gap-6 p-6 bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-sm hover:bg-white/[0.07] transition-all duration-500 cursor-pointer"
            >
              <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-full border border-white/20">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                   <span className="text-[10px] font-bold uppercase tracking-tighter text-white">{item.title}</span>
                </div>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed group-hover:text-zinc-200 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHero;