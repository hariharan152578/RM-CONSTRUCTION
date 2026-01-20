import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const AboutHero = () => {
  const container = useRef();
  const bgImageRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    // 1. Zoom and Fade the background image
    tl.fromTo(bgImageRef.current, 
      { scale: 1.3, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 2.5 }
    )
    // 2. Reveal the text lines from the bottom
    .fromTo(".reveal-text", 
      { y: 80, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.15 }, 
      "-=1.8" // Start while image is still animating
    )
    // 3. Subtle slide for the bottom badge
    .fromTo(".info-badge", 
      { x: -30, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1 }, 
      "-=1"
    );
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-stone-900 "
    >
      {/* FULL SECTION IMAGE COMPONENT */}
      <div className="absolute inset-0 z-0">
        <img 
          ref={bgImageRef}
          src="https://i.pinimg.com/736x/73/a2/8b/73a28b331ac7ac8855e8c971b8d25012.jpg" 
          alt="Full Section Construction Mastery" 
          className="w-full h-full object-cover"
        />
        {/* Darkened Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CONTENT OVERLAY */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col items-center text-center">
        
        <div className="overflow-hidden mt-20 mb-3">
          <span className="reveal-text block text-[#D4A373] font-bold uppercase tracking-[0.6em] text-[10px] md:text-xs">
            Since 1970
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl lg:text-9xl font-medium text-white leading-tight tracking-tighter">
          <div className="overflow-hidden py-1">
            <span className="reveal-text block italic font-light opacity-90">From lines</span>
          </div>
          <div className="overflow-hidden py-1">
            <span className="reveal-text block">on paper to</span>
          </div>
          <div className="overflow-hidden py-1">
            <span className="reveal-text block text-[#D4A373]">a life well built.</span>
          </div>
        </h1>

        <div className="overflow-hidden mt-8 max-w-2xl">
          <p className="reveal-text text-stone-200 text-lg md:text-xl font-light leading-relaxed">
            Bridging the gap between architectural vision and structural reality with four decades of engineering precision.
          </p>
        </div>
      </div>

      {/* BOTTOM FLOATING INFO */}
      <div className="info-badge absolute bottom-12 left-6 md:left-16 flex items-center gap-4">
        <div className="h-[1px] w-12 bg-[#D4A373]" />
        <div>
          <p className="text-white font-bold tracking-widest text-xs uppercase">Class I PWD Contractor</p>
          <p className="text-[#D4A373] text-[10px] uppercase tracking-tighter">Government Certified Infrastructure</p>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 right-6 md:right-16 flex flex-col items-center gap-2 opacity-50">
        <span className="text-white text-[10px] uppercase tracking-widest vertical-text">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;