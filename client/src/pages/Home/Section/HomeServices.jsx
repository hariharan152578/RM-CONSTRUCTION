import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HomeServices = () => {
  const scrollRef = useRef();
  const containerRef = useRef();
  const horizontalRef = useRef();
  const progressBarRef = useRef();

  const services = [
    {
      id: "01",
      title: "Road works & Highway Construction",
      desc: "Specializing in high-durability asphalt and concrete paving for state and national highways.",
      img: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "02",
      title: "Bridge & Structural Works",
      desc: "Expert engineering for flyovers, river bridges, and complex structural interchanges.",
      img: "https://i.pinimg.com/736x/f4/5d/71/f45d71b0a8c69ee2238280f5ced40d72.jpg"
    },
    {
      id: "03",
      title: "Box Culverts & Drainage Systems",
      desc: "Comprehensive water management solutions and heavy-duty drainage infrastructure.",
      img: "https://i.pinimg.com/1200x/c1/dc/fc/c1dcfcb508a7a9385d18b0f327d5c6f7.jpg"
    },
    {
      id: "04",
      title: "Civil & Infrastructure Development",
      desc: "End-to-end site development and urban infrastructure for modern civil requirements.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
    }
  ];

  useGSAP(() => {
    // Calculate total distance to move
    const getScrollAmount = () => {
      let horizontalWidth = horizontalRef.current.scrollWidth;
      return -(horizontalWidth - window.innerWidth);
    };

    const scrollTween = gsap.to(horizontalRef.current, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: scrollRef.current,
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
        start: "top top",
        // The 'end' is critical for mobile. We make it 2x the width for a smooth feel
        end: () => `+=${horizontalRef.current.scrollWidth * 1.5}`,
      }
    });

    // Progress bar animation
    gsap.fromTo(progressBarRef.current, 
      { scaleX: 0 }, 
      { 
        scaleX: 1, 
        ease: "none", 
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top top",
          end: () => `+=${horizontalRef.current.scrollWidth * 1.5}`,
          scrub: 0.6,
        }
      }
    );

    // Title reveal
    gsap.fromTo(".services-title", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: ".services-title",
          start: "top 85%"
        }
      }
    );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-black overflow-hidden">
      <section ref={scrollRef} className="h-screen flex flex-col justify-center relative">
        
        {/* Header Section */}
        <div className="px-6 md:px-16 mb-8 md:mb-12 flex justify-between items-end w-full">
          <div className="z-20">
            <span className="text-[#A67C52] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-2 md:mb-4 block">
              Expertise
            </span>
            <h2 className="services-title text-4xl md:text-7xl font-bold text-white will-change-transform">
              What <span className="italic font-light text-[#A67C52]">We Do</span>
            </h2>
          </div>
          <div className="hidden md:block text-zinc-600 text-[10px] tracking-[0.3em] uppercase pb-2">
            [ Scroll to Explore ]
          </div>
        </div>

        {/* Horizontal Moving Cards */}
        <div 
          ref={horizontalRef} 
          className="flex flex-nowrap px-6 md:px-16 gap-6 md:gap-10 items-center will-change-transform"
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card flex-shrink-0 w-[82vw] sm:w-[60vw] md:w-[45vw] lg:w-[32vw] aspect-[4/5] relative group bg-[#121212] overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              </div>

              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10">
                <span className="text-6xl md:text-8xl font-bold text-white/5 group-hover:text-[#A67C52]/10 transition-colors duration-700">
                  {service.id}
                </span>
                
                <div>
                  <div className="h-[1px] w-10 bg-[#A67C52] mb-4 md:mb-8 group-hover:w-20 transition-all duration-500"></div>
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-xs md:text-sm leading-relaxed max-w-[260px] group-hover:text-zinc-300 transition-colors">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Essential Mobile Spacer */}
          <div className="flex-shrink-0 w-[10vw] md:w-[20vw] h-1"></div>
        </div>

        {/* Progress Bar (Visible on all devices, very helpful for mobile) */}
        {/* <div className="absolute bottom-10 left-6 md:left-16 right-6 md:right-16 h-[1px] bg-white/10 origin-left">
          <div 
            ref={progressBarRef}
            className="h-full bg-[#A67C52] w-full origin-left scale-x-0"
          />
        </div> */}
      </section>
    </div>
  );
};

export default HomeServices;