import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ProjectCategories = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate(); // 2. Initialize navigate hook

  const categories = [
    { 
      title: "Road & Highway", 
      desc: "Construction and widening of critical transport routes.",
      img: "https://i.pinimg.com/1200x/cc/b6/56/ccb656e0f42d2c93eadae26fd204322d.jpg" 
    },
    { 
      title: "Bridge Works", 
      desc: "Major structural engineering and bridge construction.",
      img: "https://i.pinimg.com/1200x/58/b2/a4/58b2a49c6578fb6c5d34b40fbbb0edc4.jpg"
    },
    { 
      title: "Culverts", 
      desc: "Precise installation of major and minor culvert systems.",
      img: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=1000&auto=format&fit=crop"
    },
    { 
      title: "Cross-Drainage", 
      desc: "Specialized box culverts and drainage structures.",
      img: "https://i.pinimg.com/1200x/1e/6c/2d/1e6c2df692faddf288919b18d4330ff5.jpg"
    },
    { 
      title: "Storm Water", 
      desc: "Advanced urban and industrial drainage systems.",
      img: "https://i.pinimg.com/1200x/fb/8b/46/fb8b46f8ea9f3153604b58e811c05cf9.jpg"
    },
    { 
      title: "Rehabilitation", 
      desc: "Repair, strengthening, and structural restoration.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop"
    },
    { 
      title: "General Civil", 
      desc: "Comprehensive infrastructure and civil works.",
      img: "https://i.pinimg.com/736x/d9/88/77/d98877cf701d5967cf5ecdf236a967ef.jpg"
    },
  ];

  useGSAP(
    () => {
      gsap.to(".cat-header-content", {
        y: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.utils.toArray(".category-card").forEach((card) => {
        const bgImg = card.querySelector(".card-bg-img");
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(card, 
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        )
        .fromTo(bgImg,
          { scale: 1.5, filter: "grayscale(100%) brightness(30%)" },
          { scale: 1.1, filter: "grayscale(50%) brightness(40%)", duration: 2, ease: "power2.out" },
          "-=0.8"
        );
      });

      gsap.utils.toArray(".bg-number").forEach((num) => {
        gsap.to(num, {
          x: -30,
          scrollTrigger: {
            trigger: num,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-32 bg-stone-50 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="cat-header-content grid lg:grid-cols-2 gap-12 mb-24 border-b border-stone-200 pb-16">
          <div>
            <h2 className="text-sm font-black text-amber-600 uppercase tracking-[0.5em] mb-6">
              Our Expertise
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold text-stone-900 leading-tight uppercase tracking-tighter">
              Defined by <br /> Precision
            </h3>
          </div>
          <div className="flex items-end text-stone-600">
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-md border-l-2 border-amber-500 pl-8">
              Reliable execution across varying scales. Delivering infrastructure projects with four decades of industry leadership.
            </p>
          </div>
        </div>

        {/* Project Categories Grid */}
        <div className="category-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="category-card group relative flex flex-col justify-between min-h-[450px] p-12 overflow-hidden bg-zinc-900"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="card-bg-img w-full h-full object-cover transition-all duration-1000 group-hover:scale-100 group-hover:filter group-hover:grayscale-0 group-hover:brightness-[0.35]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
              </div>

              <div className="bg-number absolute -right-6 -top-2 text-[10rem] font-black text-white/5 pointer-events-none select-none z-10">
                {index + 1}
              </div>

              <div className="relative z-20">
                <span className="text-amber-500 font-mono text-sm font-bold tracking-widest">
                  SECT / 0{index + 1}
                </span>
                <h4 className="text-2xl font-bold text-white mt-4 uppercase tracking-tight group-hover:text-amber-400 transition-colors duration-300">
                  {cat.title}
                </h4>
              </div>
              
              <div className="relative z-20 mt-8">
                <p className="text-stone-300 text-sm mb-8 opacity-80 group-hover:opacity-100 transition-all duration-500 leading-relaxed max-w-[280px]">
                  {cat.desc}
                </p>
                <div className="w-12 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-700 ease-in-out"></div>
              </div>
            </div>
          ))}
          
          {/* CTA Block */}
          <div 
            onClick={() => navigate("/contact")} // 3. Navigate on block click
            className="category-card group relative bg-stone-900 p-12 flex flex-col justify-center items-center text-center overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/40 via-transparent to-transparent group-hover:opacity-40 transition-opacity duration-700" />
            
            <h4 className="relative z-10 text-white font-bold text-2xl uppercase tracking-tighter leading-none">
              Inquire About <br /> Infrastructure
            </h4>
            <div className="relative z-10 w-12 h-[0.5px] bg-amber-500/50 my-8 group-hover:w-20 transition-all duration-500"></div>
            <button 
              className="relative z-10 flex items-center gap-3 text-white text-xs font-black uppercase tracking-[0.3em] group-hover:text-amber-400 transition-colors"
            >
              Contact Us
              <span className="group-hover:translate-x-3 transition-transform duration-500">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCategories;