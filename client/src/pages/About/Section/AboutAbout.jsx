import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutAbout = ({ isFinished }) => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // 1. Safety check: Run only after loader finishes
      if (!isFinished) return;

      // Refresh positions after potential DOM shifts from the loader
      ScrollTrigger.refresh();

      // --- 2. Text Reveal Animation ---
      const reveals = gsap.utils.toArray(".text-reveal");
      reveals.forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });

      // --- 3. Stat Counters Logic ---
      const stats = gsap.utils.toArray(".stat-count span");
      stats.forEach((stat) => {
        const targetValue = parseInt(stat.getAttribute("data-target"), 10);
        
        const countObj = { val: 0 };

        gsap.to(countObj, {
          val: targetValue,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 95%", 
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            stat.innerText = Math.floor(countObj.val);
          },
          onComplete: () => {
            stat.innerText = targetValue;
          }
        });
      });

      // --- 4. Highlight Line Animation ---
      gsap.from(".highlight-line", {
        scaleX: 0,
        duration: 1.5,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: ".highlight-line",
          start: "top 90%",
        },
      });
    },
    { scope: sectionRef, dependencies: [isFinished] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-24 bg-[#F9F7F2] "
    >
      <div className="grid lg:grid-cols-12 gap-16">
        {/* Foundation Sidebar */}
        <div className="lg:col-span-4 border-l-2 border-zinc-200 pl-8 flex flex-col justify-between">
          <div>
            <p className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-2">
              Since
            </p>
            <h2 className="text-8xl font-black text-zinc-900 tracking-tighter">
              1970
            </h2>
            <div className="highlight-line w-full h-1 bg-yellow-500 mt-4 origin-left"></div>
          </div>

          <div className="hidden lg:block mt-12">
            <p
              className="text-zinc-400 text-[10px] uppercase tracking-[0.5em] font-bold py-4"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Legacy of Craftsmanship
            </p>
          </div>
        </div>

        {/* Narrative Content */}
        <div className="lg:col-span-8 space-y-12 ">
          {/* Phase 1 */}
          <div className="space-y-6">
            <h3 className="text-reveal text-sm font-black text-yellow-600 uppercase tracking-[0.3em]">
              The Foundation
            </h3>

            <p className="text-reveal text-3xl md:text-4xl font-bold text-zinc-900 leading-tight ">
              RM and Company was founded by<br/> Mr. R. Mathaiyan, a journey fueled by{" "}
              <span className="italic">determination, craftsmanship, and resilience.</span>
            </p>

            <p className="text-reveal text-zinc-700 leading-relaxed text-lg text-justify">
              Born into a farming and cattle-growing family and leaving school early, 
              Mr. Mathaiyan entered the field as a mason. His early exposure to road 
              and river-side works instilled a deep understanding of ground 
              realities—limited resources, challenging conditions, and the absolute 
              necessity of site discipline.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="text-reveal grid md:grid-cols-2 gap-10 py-10 border-y border-zinc-200 text-justify">
            <div className="space-y-4">
              <span className="text-4xl font-black text-zinc-200">01</span>
              <p className="text-zinc-700 font-medium leading-relaxed">
                Around 1970, the Kolathur bridge project in Salem District became 
                our turning point. Executed with minimal equipment, it demanded 
                the technical learning and leadership that defines us today.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-4xl font-black text-zinc-200">02</span>
              <p className="text-zinc-700 font-medium leading-relaxed">
                Consistent performance and earned trust enabled a steady progression, 
                achieving the prestigious{" "}
                <span className="text-zinc-900 font-bold">
                  Class I Engineering Contractor
                </span>{" "}
                status by 2018.
              </p>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="space-y-6 text-justify">
            <h3 className="text-reveal text-sm font-black text-yellow-600 uppercase tracking-[0.3em] ">
              New Era of Expansion
            </h3>

            <p className="text-reveal text-zinc-700 leading-relaxed text-lg">
              With{" "}
              <span className="text-zinc-900 font-bold">
                Mr. M. Subramanian
              </span>{" "}
              and{" "}
              <span className="text-zinc-900 font-bold">
              Mr.R.M. Saravanakumar
              </span>{" "}
              joining the leadership, we have expanded our technical horizon, 
              executing larger road, bridge, and infrastructure projects with modern 
              scale and efficiency.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="text-reveal bg-zinc-950 text-white p-12 rounded-sm shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />

            <div className="relative z-10 text-center md:text-left">
              <h4 className="text-5xl font-black leading-none stat-count">
                <span data-target="500">500</span>+
              </h4>
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mt-4">
                Projects Completed
              </p>
            </div>

            <div className="relative z-10 text-center md:text-left">
              <h4 className="text-5xl font-black leading-none stat-count">
                <span data-target="100">100</span>+
              </h4>
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mt-4">
                Bridge Works
              </p>
            </div>

            <div className="relative z-10 text-center md:text-left">
              <h4 className="text-4xl font-black text-yellow-500 italic uppercase leading-none">
                Class I
              </h4>
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mt-4">
                Technical Status
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="text-reveal pt-6 border-l-4 border-yellow-500 pl-8 text-justify">
            <p className="text-xl text-zinc-900 font-bold leading-relaxed italic">
              "Today, RM and Company stands on a generational legacy. Known for 
              early completion and consistent quality, we continue to deliver 
              infrastructure built to last, guided by experience, responsibility, 
              and long-term vision."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAbout;