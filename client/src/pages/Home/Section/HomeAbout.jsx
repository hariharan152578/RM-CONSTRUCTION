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
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      // 2. Floating Image Animation
      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        }
      });

      // 3. Rotating Badge Animation
      gsap.to(badgeRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "none"
      });

      // 4. Stats Counting Effect (Fixed)
      // We target the inner <span> to avoid animating the "+" symbol
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
              start: "top 90%",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-6 py-20 font-sans text-slate-900 overflow-hidden">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4 animate-text">
        <span className="text-gray-400">[Home / </span>
        <span className="text-amber-500 font-medium">About]</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
        {/* Left Content */}
        <div>
          <h1 className="text-5xl font-bold mb-8 animate-text leading-tight">
            Crafting Infrastructure <br /> Excellence Together
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-lg animate-text">
            RM and Company is a Class I PWD & Highways Engineering Contracting firm with over 
            four plus decades of experience. What began as a single mason’s journey has 
            evolved into a trusted, multi-generation construction enterprise, dedicated 
            to shaping the landscape of Tamil Nadu.
          </p>
        </div>

        {/* Right Image Composition */}
<div className="relative" ref={imageRef}>
  <div className="rounded-3xl overflow-hidden shadow-2xl">
    <img 
      src="https://i.pinimg.com/736x/c6/81/f3/c681f393e2477c064003f3ab039e14aa.jpg" 
      alt="Construction site" 
      className="w-full h-[400px] object-cover"
    />
  </div>

  {/* Refined Badge: Added backdrop-blur for a "lite" look */}
  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/80 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center">
    <div className="relative w-full h-full flex items-center justify-center">
      
      {/* Dashed Outer Ring */}
      <div className="absolute inset-4 border border-dashed border-gray-300 rounded-full opacity-50"></div>
      
      {/* Circular Rotating Text */}
      <div ref={badgeRef} className="absolute inset-0 w-full h-full">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path
              id="badgeCircle"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="text-[7.5px] font-bold uppercase tracking-[0.25em] fill-slate-700">
            <textPath xlinkHref="#badgeCircle">
              40+ Years of Quality • 40+ Years of Quality •
            </textPath>
          </text>
        </svg>
      </div>

      {/* Static Center Star Icon */}
      <div className="absolute bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg z-10">
         <span className="text-xl">★</span>
      </div>
    </div>
  </div>
</div>
</div>
      {/* Middle Description */}
      <div className="text-center max-w-4xl mx-auto mb-20 animate-text">
        <p className="text-2xl text-gray-700 leading-snug">
          We are committed to revolutionizing the <span className="font-bold">infrastructure industry</span> in Tamil Nadu. 
          With a proven track record in <span className="font-bold">roads and bridges</span>, we combine 
          four decades of expertise with modern engineering to bring visions to life.
        </p>
      </div>

      {/* Stats Section - Added <span> and data-target for clean animation */}
      <div className="stats-container grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-100 text-center">
        <div>
          <h3 className="text-4xl font-bold mb-2 stat-number"><span data-target="40">0</span>+</h3>
          <p className="text-gray-500 text-sm uppercase tracking-wide">Years Experience</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold mb-2 stat-number"><span data-target="500">0</span>+</h3>
          <p className="text-gray-500 text-sm uppercase tracking-wide">Projects Done</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold mb-2 stat-number"><span data-target="150">0</span>+</h3>
          <p className="text-gray-500 text-sm uppercase tracking-wide">Expert Staff</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold mb-2 stat-number"><span data-target="25">0</span>+</h3>
          <p className="text-gray-500 text-sm uppercase tracking-wide">Govt Awards</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

