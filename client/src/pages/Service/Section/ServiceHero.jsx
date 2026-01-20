import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceHero = ({ isFinished }) => {
  const containerRef = useRef();
  const imageRef = useRef();
  // We can use the containerRef scope to target children via classes

  // --- 1. ENTRY ANIMATIONS (Your existing code) ---
  useGSAP(() => {
    if (!isFinished) return;

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.fromTo(imageRef.current, 
      { clipPath: "inset(100% 0% 0% 0%)", scale: 1.2 },
      { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 1.8 }
    );

    tl.from(".hero-title-line", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
    }, "-=1.2");

    tl.from(".hero-sub", {
      opacity: 0,
      y: 20,
      duration: 1
    }, "-=0.8");

  }, { scope: containerRef, dependencies: [isFinished] });


  // --- 2. SCROLL TRIGGER ANIMATIONS (The addition) ---
  useGSAP(() => {
    // Only initialize scroll effects once the entrance is done or ready
    if (!isFinished) return;

    // Parallax effect on the background image
    gsap.to(imageRef.current, {
      yPercent: 30, // Moves the image slower than the scroll
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", 
        end: "bottom top",
        scrub: true
      }
    });

    // Fade out text content as we scroll down
    gsap.to(".relative.z-10", {
      opacity: 0,
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "50% top",
        scrub: true
      }
    });

  }, { scope: containerRef, dependencies: [isFinished] });

  return (
    <section ref={containerRef} className="relative min-h-[100vh] flex flex-col justify-end px-6 md:px-12 pb-12 bg-zinc-950 text-white overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          ref={imageRef}
          className="w-full h-full bg-cover bg-center grayscale brightness-[0.4] will-change-transform"
          style={{ backgroundImage: `url('https://i.pinimg.com/736x/4d/c0/61/4dc061494b9b7a437728cd2b6b676b00.jpg')` }} 
        />
      </div>

      <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-end">
        {/* Left Side: Large Typography */}
        <div className="lg:col-span-8">
          <p className="hero-sub text-yellow-500 font-bold uppercase tracking-[0.4em] mb-4 text-sm">
            Expertise & Infrastructure
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-black leading-[0.85] tracking-tighter uppercase">
            <div className="overflow-hidden">
              <span className="hero-title-line inline-block">Engineering</span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-title-line inline-block text-zinc-500">Solutions</span>
            </div>
          </h1>
        </div>

        {/* Right Side: Descriptive Text */}
        <div className="lg:col-span-4 lg:pb-6">
          <div className="hero-sub border-l border-yellow-500/30 pl-6">
            <p className="text-zinc-400 text-lg leading-relaxed max-w-sm">
              From complex bridge architecture to heavy-duty road networks, we bridge the gap between visionary design and structural reality.
            </p>
            <div className="mt-8 flex items-center gap-4">
               <div className="w-12 h-[1px] bg-yellow-500"></div>
               <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to Explore</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-full border-r border-white/5 pointer-events-none" />
    </section>
  );
};

export default ServiceHero;