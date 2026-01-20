import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutPillars = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Animate the vertical line expansion
      gsap.from(".pillar-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: ".pillar-grid",
          start: "top 80%",
        },
      });

      // Staggered entrance for content blocks
      gsap.from(".pillar-item", {
        x: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pillar-grid",
          start: "top 75%",
        },
      });
    },
    { scope: containerRef }
  );

  const pillars = [
    {
      title: "Site Discipline",
      label: "Execution",
      desc: "Instilled by our founder's early experience, we maintain absolute order and safety on-site, ensuring zero compromises on project integrity.",
    },
    {
      title: "Technical Precision",
      label: "Engineering",
      desc: "Translating complex bridge and road designs into durable infrastructure through advanced site management and Class I engineering standards.",
    },
    {
      title: "Early Completion",
      label: "Efficiency",
      desc: "A hallmark of RM and Company. We leverage a strong permanent workforce and disciplined logistics to deliver ahead of contractual timelines.",
    },
    {
      title: "Long-term Vision",
      label: "Responsibility",
      desc: "Building infrastructure meant to last for generations, backed by sustainable business practices and transparent administrative governance.",
    },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden text-justify">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Sticky Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <h3 className="text-sm font-black text-yellow-600 uppercase tracking-[0.4em] mb-4">
              Our Methodology
            </h3>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter leading-none mb-6">
              THE PILLARS OF <br /> OUR EXCELLENCE
            </h2>
            <p className="text-zinc-500 text-lg max-w-sm">
              Rooted in craftsmanship and modernized through engineering, our approach ensures every project is a benchmark of quality.
            </p>
          </div>

          {/* Right Side: Pillars Grid */}
          <div className="lg:col-span-8 pillar-grid relative " >
            {/* Background Vertical Line Decor */}
            <div className="pillar-line absolute left-0 top-0 w-px h-full bg-zinc-200 hidden md:block"></div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 md:pl-12">
              {pillars.map((pillar, index) => (
                <div key={index} className="pillar-item group">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-black text-white bg-zinc-900 px-2 py-1">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest">
                      {pillar.label}
                    </span>
                  </div>
                  
                  <h4 className="text-2xl font-black text-zinc-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                    {pillar.title}
                  </h4>
                  
                  <p className="text-zinc-600 leading-relaxed text-sm lg:text-base">
                    {pillar.desc}
                  </p>
                  
                  <div className="mt-6 w-8 h-1 bg-zinc-100 group-hover:w-full group-hover:bg-yellow-500 transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPillars;