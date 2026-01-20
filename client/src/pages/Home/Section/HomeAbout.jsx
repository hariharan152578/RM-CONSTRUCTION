import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header and Text Animation
      gsap.from(".animate-text", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      });

      // 2. Image Reveal
      gsap.from(imageRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        }
      });

      // 3. Rotating Badge Animation
      gsap.to(badgeRef.current, {
        rotation: 360,
        duration: 12,
        repeat: -1,
        ease: "none"
      });

      // 4. Stats Counting Effect
      const stats = document.querySelectorAll(".stat-number span");
      stats.forEach((stat) => {
        const targetValue = parseInt(stat.getAttribute("data-target"));
        gsap.fromTo(stat, 
          { textContent: 0 },
          {
            textContent: targetValue,
            duration: 2,
            ease: "power1.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: ".stats-container",
              start: "top 95%",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 font-sans text-slate-900 overflow-hidden">
      
      {/* Breadcrumb - Hidden on very small screens or kept minimal */}
      <nav className="text-[10px] md:text-sm mb-6 animate-text uppercase tracking-widest">
        <span className="text-gray-400">[Home / </span>
        <span className="text-amber-500 font-bold">About]</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">
        
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 animate-text leading-tight text-slate-900">
            Crafting Infrastructure <br className="hidden md:block" /> Excellence Together
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl animate-text text-justify mb-8">
            RM and Company is a Class I PWD & Highways Engineering Contracting firm with over 
            four plus decades of experience. What began as a single mason’s journey has 
            evolved into a trusted, multi-generation construction enterprise, dedicated 
            to shaping the landscape of Tamil Nadu.
          </p>
          
          {/* Mobile-only CTA or highlight can go here */}
        </div>

        {/* Right Image Composition */}
        <div className="relative order-1 lg:order-2 px-4 md:px-0" ref={imageRef}>
          <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-auto">
            <img 
              src="https://i.pinimg.com/736x/c6/81/f3/c681f393e2477c064003f3ab039e14aa.jpg" 
              alt="Construction site" 
              className="w-full h-full md:h-[450px] object-cover"
            />
          </div>

          {/* Responsive Badge - Adjusted size for mobile (w-28 vs w-40) */}
          <div className="absolute -bottom-6 -left-2 md:-bottom-10 md:-left-10 w-28 h-28 md:w-40 md:h-40 bg-white/90 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center z-20">
            <div className="relative w-full h-full flex items-center justify-center">
              
              <div className="absolute inset-3 border border-dashed border-amber-500/30 rounded-full opacity-50"></div>
              
              {/* Circular Rotating Text */}
              <div ref={badgeRef} className="absolute inset-0 w-full h-full">
                <svg viewBox="0 0 100 100" className="w-full h-full scale-90 md:scale-100">
                  <defs>
                    <path
                      id="badgeCircle"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="text-[8px] font-bold uppercase tracking-[0.2em] fill-slate-800">
                    <textPath xlinkHref="#badgeCircle">
                      40+ Years of Quality • 40+ Years of Quality •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Static Center Icon - Scaled for mobile */}
              <div className="absolute bg-amber-500 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white shadow-lg z-10">
                 <span className="text-sm md:text-xl">★</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Description - More responsive font size */}
      <div className="text-left md:text-center max-w-4xl mx-auto mb-16 md:mb-24 animate-text">
        <p className="text-xl md:text-2xl lg:text-3xl text-slate-800 leading-snug text-justify">
          We are committed to revolutionizing the <span className="font-bold text-amber-600">infrastructure industry</span> in Tamil Nadu. 
          With a proven track record in <span className="font-bold">roads and bridges</span>, we combine 
          four decades of expertise with modern engineering.
        </p>
      </div>

      {/* Stats Section - Grid changes to 2 cols on mobile */}
      <div className="stats-container grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 md:gap-8 pt-12 border-t border-gray-100 text-center">
        <div className="animate-text">
          <h3 className="text-3xl md:text-5xl font-bold mb-1 md:mb-2 text-slate-900 stat-number">
            <span data-target="40">0</span>+
          </h3>
          <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold">Years Experience</p>
        </div>
        <div className="animate-text">
          <h3 className="text-3xl md:text-5xl font-bold mb-1 md:mb-2 text-slate-900 stat-number">
            <span data-target="500">0</span>+
          </h3>
          <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold">Projects Done</p>
        </div>
        <div className="animate-text">
          <h3 className="text-3xl md:text-5xl font-bold mb-1 md:mb-2 text-slate-900 stat-number">
            <span data-target="150">0</span>+
          </h3>
          <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold">Expert Staff</p>
        </div>
        <div className="animate-text">
          <h3 className="text-3xl md:text-5xl font-bold mb-1 md:mb-2 text-slate-900 stat-number">
            <span data-target="25">0</span>+
          </h3>
          <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold">Govt Awards</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;