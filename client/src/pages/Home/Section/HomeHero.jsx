import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Added import
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HomeHero = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  const container = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const buttonsRef = useRef();
  const cardsRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, delay: 0.5 }
    )
    .fromTo(subtitleRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }, "-=0.8")
    .fromTo(buttonsRef.current.children, 
      { scale: 0.9, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.8, stagger: 0.2 }, "-=0.6")
    .fromTo(".feature-card", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.15 }, "-=0.4");

  }, { scope: container });

  const coreValues = [
    { 
      title: "Quality", 
      desc: "Precision in execution, durability in outcomes.",
      icon: "01"
    },
    { 
      title: "Legacy", 
      desc: "Built from the ground up over 56+ years.",
      icon: "02"
    },
    { 
      title: "Reputation", 
      desc: "Earned through consistency and accountability.",
      icon: "03"
    },
    { 
      title: "Integrity", 
      desc: "Commitment to ethical, transparent practices.",
      icon: "04"
    }
  ];

  return (
    <section ref={container} className="relative min-h-screen w-full overflow-hidden bg-zinc-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Architecture Infrastructure" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/30"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 pt-40 pb-12 min-h-screen flex flex-col justify-between">
        
        {/* Main Content */}
        <div className="max-w-3xl">
          <div className="overflow-hidden">
            <h1 ref={titleRef} className="text-4xl md:text-6xl font-light text-white tracking-tight leading-[1.1]">
              Building Lasting <br />
              <span className="font-serif italic text-4xl md:text-7xl text-yellow-500">Infrastructure</span>
            </h1>
          </div>
          
          <div className="h-[1px] w-24 bg-yellow-600 my-10"></div>

          <p ref={subtitleRef} className="text-zinc-300 text-lg md:text-xl font-light max-w-xl leading-relaxed mb-12">
            To build lasting infrastructure through quality execution, trusted partnerships, and values passed across generations.
          </p>

          <div ref={buttonsRef} className="flex flex-wrap gap-5">
            {/* Added onClick with navigate */}
            <button 
              onClick={() => navigate('/projects')}
              className="px-10 py-4 bg-yellow-600 text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-yellow-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Our Projects
            </button>
            <button
             onClick={() => navigate('/contact')}
             className="px-10 py-4 bg-transparent border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.2em] backdrop-blur-md hover:bg-white/10 transition-all duration-300">
              Partner With Us
            </button>
          </div>
        </div>

        {/* Bottom Feature Cards: CORE VALUES */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {coreValues.map((item, idx) => (
            <div 
              key={idx} 
              className="feature-card group p-8 bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.05] hover:border-yellow-500/30 transition-all duration-500 cursor-default"
            >
              <div className="flex flex-col gap-4">
                <span className="text-yellow-600/50 font-serif italic text-2xl group-hover:text-yellow-500 transition-colors">
                  {item.icon}
                </span>
                <h3 className="text-white text-sm font-bold uppercase tracking-widest">
                  {item.title}
                </h3>
                <div className="h-[1px] w-8 bg-zinc-700 group-hover:w-full transition-all duration-700"></div>
                <p className="text-zinc-400 text-xs leading-relaxed group-hover:text-zinc-200 transition-colors">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHero;