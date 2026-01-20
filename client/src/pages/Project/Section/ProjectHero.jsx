import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ProjectHero = ({ isFinished }) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!isFinished) return;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" }
      });

      // Background Image: Subtle scale
      tl.fromTo(".hero-bg-image", 
        { scale: 1.3 },
        { scale: 1, duration: 2.5, ease: "power2.out" }, 
        0
      );

      // Masked Titles: Slide up
      tl.from(".hero-title-mask", {
        y: "110%",
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
      }, 0.4);

      // Yellow Bar: Grow
      tl.from(".hero-bar", {
        scaleX: 0,
        duration: 1,
        ease: "expo.inOut",
      }, "-=0.6");

      // Content Fade
      tl.from(".hero-fade", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
      }, "-=0.4");
    },
    { 
      scope: containerRef, 
      dependencies: [isFinished],
      revertOnUpdate: true 
    }
  );

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen w-full flex items-center bg-zinc-950 overflow-hidden px-6 md:px-12 pt-24 pb-12"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/fb/8b/46/fb8b46f8ea9f3153604b58e811c05cf9.jpg"
          alt="Engineering"
          className="hero-bg-image w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40" />
        {/* Grid Overlay - Scaled down for mobile */}
        <div className="hero-fade absolute inset-0 opacity-[0.05] md:opacity-[0.1] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Changed items-end to items-center/start for mobile stacking */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end">
          
          <div className="lg:col-span-8">
            <div className="overflow-hidden mb-2">
              <h3 className="hero-title-mask text-[10px] md:text-sm font-black text-yellow-500 uppercase tracking-[0.3em] md:tracking-[0.5em] block">
                Project Portfolio
              </h3>
            </div>
            
            <div className="overflow-hidden">
              {/* Responsive text: 4xl to 9xl */}
              <h1 className="hero-title-mask text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase leading-[0.9] block">
                Engineering <br className="hidden sm:block" />
                <span className="text-zinc-400 italic font-light lowercase">the</span> Future
              </h1>
            </div>

            <div className="hero-bar w-20 md:w-32 h-1.5 md:h-2 bg-yellow-500 mt-6 md:mt-8 origin-left"></div>
          </div>

          <div className="lg:col-span-4 space-y-6 md:space-y-8">
            <p className="hero-fade text-zinc-300 text-sm md:text-lg border-l-2 border-yellow-500 pl-4 md:pl-6 bg-black/20 backdrop-blur-sm py-2 max-w-md">
              RM and Company undertakes a broad spectrum of civil and infrastructure projects across Tamil Nadu.
            </p>
            
            <div className="hero-fade flex items-center gap-6 md:gap-8 pl-4 md:pl-6">
              <div>
                <span className="block text-3xl md:text-4xl font-black text-white">500+</span>
                <span className="text-[9px] md:text-[10px] uppercase text-yellow-500 font-bold tracking-widest">Works</span>
              </div>
              <div className="w-px h-8 bg-zinc-700"></div>
              <div>
                <span className="block text-3xl md:text-4xl font-black text-white">Class I</span>
                <span className="text-[9px] md:text-[10px] uppercase text-yellow-500 font-bold tracking-widest">Contractor</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Watermark - Hidden on mobile, smaller on tablet */}
      <div className="hero-fade absolute bottom-8 right-8 hidden lg:block select-none pointer-events-none">
        <p className="text-white opacity-[0.03] font-black text-[10rem] xl:text-[12rem] leading-none">1970</p>
      </div>
    </section>
  );
};

export default ProjectHero;