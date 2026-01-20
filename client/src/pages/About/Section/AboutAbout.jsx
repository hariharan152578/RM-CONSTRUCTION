import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutAbout = ({ isFinished }) => {
  const sectionRef = useRef();

  useGSAP(() => {
    // Only run animations once the loader (isFinished) is true
    if (!isFinished) return;

    // Refresh ScrollTrigger to catch new element positions after loader removal
    ScrollTrigger.refresh();

    // 1. Text reveal animation for all paragraphs and headings
    gsap.from(".text-reveal", {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

    // 2. Statistics Counter Logic - FIXED
    const stats = gsap.utils.toArray(".stat-count");
    stats.forEach((stat) => {
      const target = parseInt(stat.getAttribute("data-target"));
      
      gsap.fromTo(stat, 
        { innerText: 0 }, 
        {
          innerText: target,
          duration: 2.5,
          ease: "power2.out",
          snap: { innerText: 1 }, // This forces the number to stay an integer
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
            toggleActions: "play none none none", // Ensures it only plays once
          },
          onUpdate: function() {
            // Optional: adds a comma or formatting if needed
            stat.innerHTML = Math.ceil(stat.innerText);
          }
        }
      );
    });

    // 3. Highlight line animation
    gsap.from(".highlight-line", {
      scaleX: 0,
      duration: 1.5,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: ".highlight-line",
        start: "top 90%",
      }
    });
  }, { scope: sectionRef, dependencies: [isFinished] });

  return (
    <section ref={sectionRef} className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-24 bg-[#F9F7F2]">
      <div className="grid lg:grid-cols-12 gap-16">
        
        {/* Foundation Sidebar */}
        <div className="lg:col-span-4 border-l-2 border-zinc-200 pl-8 flex flex-col justify-between">
          <div>
            <p className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-2">Since</p>
            <h2 className="text-8xl font-black text-zinc-900 tracking-tighter">1970</h2>
            <div className="highlight-line w-full h-1 bg-yellow-500 mt-4 origin-left"></div>
          </div>
          <div className="hidden lg:block mt-12">
            <p className="text-zinc-400 text-[10px] uppercase tracking-[0.5em] font-bold py-4" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              Legacy of Craftsmanship
            </p>
          </div>
        </div>

        {/* Narrative Content */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Phase 1: Origins */}
          <div className="space-y-6">
            <h3 className="text-reveal text-sm font-black text-yellow-600 uppercase tracking-[0.3em]">The Foundation</h3>
            <p className="text-reveal text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
              Founded by Mr. R. Mathaiyan, a journey that began with <span className="italic">hands-on craftsmanship</span> and unwavering resilience.
            </p>
            <p className="text-reveal text-zinc-700 leading-relaxed text-lg">
              Born into a farming family, Mr. Mathaiyan entered the field as a mason. His early exposure to road and river-side works instilled a deep understanding of ground realities—limited resources, challenging conditions, and the absolute necessity of site discipline.
            </p>
          </div>

          {/* Phase 2: The Turning Point */}
          <div className="text-reveal grid md:grid-cols-2 gap-10 py-10 border-y border-zinc-200">
            <div className="space-y-4">
              <span className="text-4xl font-black text-zinc-200">01</span>
              <p className="text-zinc-700 font-medium leading-relaxed">
                The 1970 Kolathur bridge project in Salem District marked our turning point. Executed with minimal equipment, it demanded leadership that defined our future.
              </p>
            </div>
            <div className="space-y-4">
              <span className="text-4xl font-black text-zinc-200">02</span>
              <p className="text-zinc-700 font-medium leading-relaxed">
                Consistent performance led to a steady progression, eventually achieving the prestigious <span className="text-zinc-900 font-bold">Class I Engineering Contractor</span> status by 2018.
              </p>
            </div>
          </div>

          {/* Phase 3: Generational Expansion */}
          <div className="space-y-6">
            <h3 className="text-reveal text-sm font-black text-yellow-600 uppercase tracking-[0.3em]">New Era</h3>
            <p className="text-reveal text-zinc-700 leading-relaxed text-lg">
              With <span className="text-zinc-900 font-bold">Mr. M. Subramanian</span> and <span className="text-zinc-900 font-bold">Mr. R. M. Saravanakumar</span> joining the leadership, we have expanded our technical horizon, executing complex bridge and infrastructure projects with modern efficiency.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="text-reveal bg-zinc-950 text-white p-12 rounded-sm shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-12 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
            
            <div className="relative z-10 text-center md:text-left">
              <h4 className="text-5xl font-black text-white leading-none">
                <span className="stat-count" data-target="500">500</span>+
              </h4>
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mt-4">Projects Delivered</p>
            </div>
            
            <div className="relative z-10 text-center md:text-left">
              <h4 className="text-5xl font-black text-white leading-none">
                <span className="stat-count" data-target="100">100</span>+
              </h4>
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mt-4">Bridge Works</p>
            </div>

            <div className="relative z-10 text-center md:text-left">
              <h4 className="text-4xl font-black text-yellow-500 italic uppercase leading-none">Class I</h4>
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mt-4">Technical Status</p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="text-reveal pt-6 border-l-4 border-yellow-500 pl-8">
            <p className="text-xl text-zinc-900 font-bold leading-relaxed italic">
              "Known for early completion and consistent quality, we continue to deliver infrastructure built to last, guided by experience and responsibility."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutAbout;