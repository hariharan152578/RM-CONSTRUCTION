import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    title: "Tender-based Execution",
    desc: "Precision-driven project execution following stringent tender specifications and compliance standards.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  },
  {
    title: "Site Management",
    desc: "On-ground supervision ensuring resource optimization and strict adherence to safety protocols.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
  },
  {
    title: "Quality & Discipline",
    desc: "Rigorous quality control measures and unwavering schedule discipline to ensure early project completion.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
  }
];

const ExecutionCapabilitiesDark = ({ isFinished }) => {
  const sectionRef = useRef();
  const navigate = useNavigate(); // 2. Initialize navigate

  useGSAP(() => {
    if (!isFinished) return;

    ScrollTrigger.refresh();

    const cards = gsap.utils.toArray(".cap-card");

    cards.forEach((card) => {
      const line = card.querySelector(".draw-line");
      const content = card.querySelector(".cap-content");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });

      tl.fromTo(line, 
        { height: 0 }, 
        { height: "100%", duration: 1.2, ease: "expo.inOut" }
      )
      .from(content, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6");
    });
  }, { scope: sectionRef, dependencies: [isFinished] });

  return (
    <section ref={sectionRef} className="bg-zinc-900 py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-black text-yellow-500 uppercase tracking-[0.5em] mb-4">Strategic Framework</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              Execution <br /> <span className="text-zinc-700 italic">Protocol</span>
            </h3>
          </div>
          <div className="h-[1px] flex-grow bg-white/10 hidden md:block mb-4 mx-12"></div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {capabilities.map((cap, index) => (
            <div 
              key={index} 
              className="cap-card group relative bg-zinc-900 p-12 md:p-16 transition-all duration-700 hover:bg-zinc-800/50"
            >
              <div className="draw-line absolute left-0 top-0 w-[2px] bg-yellow-500" />
              
              <div className="cap-content relative z-10">
                <div className="mb-10 w-14 h-14 flex items-center justify-center border border-white/10 rounded-full group-hover:border-yellow-500/50 group-hover:bg-yellow-500/5 transition-all duration-500">
                  <svg className="w-6 h-6 text-zinc-400 group-hover:text-yellow-500 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={cap.icon} />
                  </svg>
                </div>

                <h4 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">
                  {cap.title}
                </h4>
                <p className="text-zinc-500 leading-relaxed text-sm font-medium group-hover:text-zinc-300 transition-colors duration-500">
                  {cap.desc}
                </p>
              </div>

              <span className="absolute bottom-8 right-12 text-8xl font-black text-white/[0.03] group-hover:text-yellow-500/[0.05] transition-colors duration-700 pointer-events-none italic">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Action Bar */}
        <div 
          onClick={() => navigate('/contact')} // 3. Added click handler to the wrapper
          className="mt-24 group cursor-pointer flex flex-col md:flex-row items-center justify-between p-1 border border-white/10 rounded-sm hover:border-yellow-500/30 transition-colors duration-500"
        >
          <div className="p-8">
            <p className="text-zinc-400 text-sm uppercase tracking-widest font-bold mb-2">Next Step</p>
            <h4 className="text-white text-2xl font-bold">Request Technical Consultation</h4>
          </div>
          <div className="w-full md:w-auto p-4">
            <button 
              className="w-full md:w-auto px-12 py-5 bg-white text-zinc-900 text-xs font-black uppercase tracking-widest group-hover:bg-yellow-500 transition-all duration-500"
            >
              Start Conversation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExecutionCapabilitiesDark;