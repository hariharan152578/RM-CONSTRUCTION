import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ProjectHero = ({ isFinished }) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // 1. Safety check: Run only after loader finishes
      if (!isFinished) return;

      // Create timeline
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" } // Global default ease
      });

      // Background Image: Zoom out effect
      tl.from(".hero-bg-image", {
        scale: 1.5,
        duration: 2,
        ease: "power2.out",
      }, 0);

      // Masked Titles: Slide up
      tl.from(".hero-title-mask", {
        y: "110%",
        duration: 1.2,
        stagger: 0.1, // If there are multiple title masks
        ease: "power4.out",
      }, 0.4);

      // Yellow Bar: Grow from left
      tl.from(".hero-bar", {
        scaleX: 0,
        duration: 1,
        ease: "expo.inOut",
      }, "-=0.6");

      // Content Fade: Text and Stats
      tl.from(".hero-fade", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
      }, "-=0.4");

    },
    { 
      scope: containerRef, 
      dependencies: [isFinished],
      revertOnUpdate: true // Cleans up animation if isFinished toggles
    }
  );

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full flex items-center bg-zinc-950 overflow-hidden px-6 pt-20"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/fb/8b/46/fb8b46f8ea9f3153604b58e811c05cf9.jpg"
          alt="Engineering"
          className="hero-bg-image w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40" />
        <div className="hero-fade absolute inset-0 opacity-[0.1] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          
          <div className="lg:col-span-8">
            <div className="overflow-hidden mb-2">
              <h3 className="hero-title-mask text-sm font-black text-yellow-500 uppercase tracking-[0.5em] block">
                Project Portfolio
              </h3>
            </div>
            
            <div className="overflow-hidden">
              <h1 className="hero-title-mask text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85] block">
                Engineering <br />
                <span className="text-zinc-300 italic font-light lowercase">the</span> Future
              </h1>
            </div>

            <div className="hero-bar w-32 h-2 bg-yellow-500 mt-8 origin-left"></div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <p className="hero-fade text-zinc-200 text-lg border-l-2 border-yellow-500 pl-6 bg-black/30 backdrop-blur-sm py-2">
              RM and Company undertakes a broad spectrum of civil and infrastructure projects.
            </p>
            
            <div className="hero-fade flex items-center gap-8 pl-6">
              <div>
                <span className="block text-4xl font-black text-white">500+</span>
                <span className="text-[10px] uppercase text-yellow-500 font-bold">Works</span>
              </div>
              <div className="w-px h-8 bg-zinc-700"></div>
              <div>
                <span className="block text-4xl font-black text-white">Class I</span>
                <span className="text-[10px] uppercase text-yellow-500 font-bold">Contractor</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-fade absolute bottom-12 right-12 hidden md:block select-none pointer-events-none">
        <p className="text-white opacity-[0.03] font-black text-[12rem] leading-none">1970</p>
      </div>
    </section>
  );
};

export default ProjectHero;