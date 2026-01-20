// import React, { useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const HomeFeatures = () => {
//   const containerRef = useRef();
//   const lineRef = useRef();

//   const reasons = [
//     {
//       title: "Proven Execution",
//       highlight: "40+ Years",
//       desc: "Four plus decades of proven execution across diverse civil works and complex terrains.",
//       icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//     },
//     {
//       title: "Time Efficiency",
//       highlight: "Early Completion",
//       desc: "Consistent track record of early project delivery without compromising structural quality standards.",
//       icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//     },
//     {
//       title: "Execution Discipline",
//       highlight: "Site Mastery",
//       desc: "Strong execution discipline backed by highly experienced site teams and rigorous protocols.",
//       icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 2.944a11.955 11.955 0 01-8.618 3.04M12 2.944v17.56a4.5 4.5 0 005.332-1.347"
//     },
//     {
//       title: "Skilled Workforce",
//       highlight: "Structured Planning",
//       desc: "Expert workforce operating under structured supervision and detailed logistical planning.",
//       icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//     }
//   ];

//   useGSAP(() => {
//     // 1. The Vertical Progress Line
//     gsap.fromTo(lineRef.current, 
//       { scaleY: 0 }, 
//       { 
//         scaleY: 1, 
//         ease: "none",
//         scrollTrigger: {
//           trigger: ".features-grid",
//           start: "top 60%",
//           end: "bottom 80%",
//           scrub: true
//         }
//       }
//     );

//     // 2. Staggered Card Reveal
//     gsap.fromTo(".reason-card", 
//       { x: 50, opacity: 0 }, 
//       { 
//         x: 0, 
//         opacity: 1, 
//         stagger: 0.2, 
//         duration: 1, 
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: ".features-grid",
//           start: "top 70%",
//         }
//       }
//     );

//     // 3. Title Parallax
//     gsap.to(".title-parallax", {
//       y: -100,
//       scrollTrigger: {
//         trigger: containerRef.current,
//         scrub: true
//       }
//     });

//   }, { scope: containerRef });

//   return (
//     <section ref={containerRef} className="relative py-32 bg-zinc-50 overflow-hidden">
//       <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
//           {/* Left Side: Sticky Content */}
//           <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
//             <div className="title-parallax">
//               <span className="text-yellow-600 font-bold uppercase tracking-[0.4em] text-xs mb-4 block">
//                 Why Choose Us
//               </span>
//               <h2 className="text-5xl md:text-6xl font-medium text-zinc-900 leading-tight mb-8">
//                 The standard of <br />
//                 <span className="italic font-light text-zinc-400 underline decoration-yellow-500/30">excellence</span> in <br />
//                 civil engineering.
//               </h2>
//               <p className="text-zinc-600 text-lg font-light leading-relaxed max-w-sm">
//                 Commitment to quality and timeline isn't just a promise—it's our 50-year-old tradition.
//               </p>
//             </div>
//           </div>

//           {/* Right Side: Features Grid */}
//           <div className="lg:col-span-7 relative features-grid">
            
//             {/* Animated Vertical Line */}
//             <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-zinc-200 origin-top">
//               <div ref={lineRef} className="absolute inset-0 bg-yellow-500 origin-top scale-y-0"></div>
//             </div>

//             <div className="space-y-12 pl-8 md:pl-24">
//               {reasons.map((reason, idx) => (
//                 <div key={idx} className="reason-card group relative">
//                   {/* Icon Node */}
//                   <div className="absolute -left-8 md:-left-[4.5rem] top-0 w-4 h-4 rounded-full bg-zinc-50 border-4 border-yellow-500 z-10 group-hover:scale-150 transition-transform duration-300"></div>
                  
//                   <div className="bg-white p-8 md:p-10 border border-zinc-100 shadow-sm hover:shadow-xl hover:border-yellow-500/20 transition-all duration-500 rounded-sm">
//                     <div className="flex items-center gap-4 mb-4">
//                         <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={reason.icon}></path>
//                         </svg>
//                         <span className="text-yellow-600 font-bold text-[10px] uppercase tracking-widest">{reason.highlight}</span>
//                     </div>
                    
//                     <h3 className="text-2xl font-bold text-zinc-900 mb-4">{reason.title}</h3>
//                     <p className="text-zinc-500 font-light leading-relaxed">
//                       {reason.desc}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Background Decorative Element */}
//       <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-zinc-200/50 to-transparent -z-10"></div>
//     </section>
//   );
// };

// export default HomeFeatures;

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HomeFeatures = () => {
  const containerRef = useRef();
  const lineRef = useRef();
  const cardRefs = useRef([]);

  const reasons = [
    {
      title: "Proven Execution",
      highlight: "40+ Years",
      desc: "Four plus decades of proven execution across diverse civil works and complex terrains.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    },
    {
      title: "Time Efficiency",
      highlight: "Early Completion",
      desc: "Consistent track record of early project delivery without compromising structural quality standards.",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Execution Discipline",
      highlight: "Site Mastery",
      desc: "Strong execution discipline backed by highly experienced site teams and rigorous protocols.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 2.944a11.955 11.955 0 01-8.618 3.04M12 2.944v17.56a4.5 4.5 0 005.332-1.347"
    },
    {
      title: "Skilled Workforce",
      highlight: "Structured Planning",
      desc: "Expert workforce operating under structured supervision and detailed logistical planning.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    }
  ];

  useGSAP(() => {
    // 1. Vertical Line Progress
    gsap.to(lineRef.current, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".features-grid",
        start: "top 40%",
        end: "bottom 60%",
        scrub: 1,
      }
    });

    // 2. Individual Card Active States (Timeline Bullets)
    reasons.forEach((_, i) => {
      gsap.to(`.bullet-${i}`, {
        backgroundColor: "#d97706", // amber-600
        scale: 1.5,
        scrollTrigger: {
          trigger: cardRefs.current[i],
          start: "top 50%",
          end: "bottom 50%",
          toggleActions: "play reverse play reverse",
        }
      });

      // Card Content Entrance
      gsap.from(cardRefs.current[i], {
        x: 30,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRefs.current[i],
          start: "top 85%",
        }
      });
    });

    // 3. Title Parallax effect
    gsap.to(".title-sticky-wrapper", {
      y: 50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Side: Sticky Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-40 h-fit z-20">
            <div className="title-sticky-wrapper">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[1px] bg-amber-600"></span>
                <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-[10px]">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-4xl md:text-7xl font-bold text-zinc-950 leading-[1.1] mb-10">
                The Standard <br />
                of <span className="text-zinc-300 italic font-light">excellence </span>
                in engineering.
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-sm font-light">
                Commitment to quality and timeline isn't just a promise—it's a multi-generational legacy in infrastructure.
              </p>
              
              <div className="mt-12 hidden lg:block">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-zinc-100 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?img=${i+10}`} alt="team" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-amber-500 flex items-center justify-center text-white text-xs font-bold">
                    +150
                  </div>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 mt-4 ml-2">Trusted by Expert Engineers</p>
              </div>
            </div>
          </div>

          {/* Right Side: Features Grid */}
          <div className="lg:col-span-7 relative features-grid">
            
            {/* Background Line (Static) */}
            <div className="absolute left-0 md:left-2 top-0 bottom-0 w-[1px] bg-zinc-100 origin-top">
               {/* Animated Progress Line */}
              <div ref={lineRef} className="absolute inset-0 bg-amber-600 origin-top scale-y-0 shadow-[0_0_15px_rgba(217,119,6,0.5)]"></div>
            </div>

            <div className="space-y-24 pl-8 md:pl-20">
              {reasons.map((reason, idx) => (
                <div 
                  key={idx} 
                  ref={el => cardRefs.current[idx] = el}
                  className="reason-card group relative"
                >
                  {/* Timeline Bullet */}
                  <div className={`bullet-${idx} absolute -left-8 md:-left-[4.9rem] top-2 w-3 h-3 rounded-full bg-zinc-200 border-2 border-white z-10 transition-colors duration-300`}></div>
                  
                  <div className="relative group">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all duration-500 shadow-sm border border-zinc-100">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={reason.icon}></path>
                          </svg>
                        </div>
                        <span className="text-amber-600 font-bold text-[10px] uppercase tracking-[0.2em] bg-amber-50 px-3 py-1 rounded-full">{reason.highlight}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-zinc-900 mb-5 group-hover:translate-x-2 transition-transform duration-500">
                      {reason.title}
                    </h3>
                    <p className="text-zinc-500 font-light leading-relaxed text-lg max-w-xl">
                      {reason.desc}
                    </p>
                    
                    {/* Bottom border reveal on hover */}
                    <div className="mt-8 w-0 h-[1px] bg-amber-600 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;