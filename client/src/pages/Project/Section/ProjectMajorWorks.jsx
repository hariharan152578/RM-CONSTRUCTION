import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ProjectMajorWorks = () => {
  const containerRef = useRef(null);

  const projects = [
    { 
        title: "Thiruthani Bypass", 
        location: "State Highways", 
        type: "Infrastructure",
        mapUrl: "https://www.google.com/maps",
        img: "https://i.pinimg.com/1200x/d7/52/11/d7521140d74f4ec572a015fee9bc24ba.jpg"
    },
    { 
        title: "Ponnai High Level Bridge", 
        location: "River Bridge", 
        type: "Structural",
        mapUrl: "https://www.google.com/maps",
        img: "https://i.pinimg.com/1200x/d7/52/11/d7521140d74f4ec572a015fee9bc24ba.jpg"
    },
    { 
        title: "Ambur ROB", 
        location: "Road Over Bridge", 
        type: "Engineering",
        mapUrl: "https://www.google.com/maps",
        img: "https://i.pinimg.com/1200x/d7/52/11/d7521140d74f4ec572a015fee9bc24ba.jpg"
        },
    { 
        title: "Sabalpatti RUB", 
        location: "Dharmapuri", 
        type: "Road Under Bridge",
        mapUrl: "https://www.google.com/maps",
        img: "https://i.pinimg.com/1200x/d7/52/11/d7521140d74f4ec572a015fee9bc24ba.jpg"
    },
    { 
        title: "Vadailuppai HLB", 
        location: "Kancheepuram", 
        type: "Bridge Work",
        mapUrl: "https://www.google.com/maps",
        img: "https://i.pinimg.com/1200x/d7/52/11/d7521140d74f4ec572a015fee9bc24ba.jpg"
    },
    { 
        title: "Anvarthikanpettai ROB", 
        location: "Road Over Bridge", 
        type: "Railway Crossing",
        mapUrl: "https://www.google.com/maps",
        img: "https://i.pinimg.com/1200x/d7/52/11/d7521140d74f4ec572a015fee9bc24ba.jpg"
    },
    { 
        title: "Vaniyambadi ROB", 
        location: "Road Over Bridge", 
        type: "Infrastructure",
        mapUrl: "https://www.google.com/maps",
        img: "https://i.pinimg.com/1200x/d7/52/11/d7521140d74f4ec572a015fee9bc24ba.jpg"
    },
    { 
        title: "Mettur Palar Road", 
        location: "Widening Work", 
        type: "Highway",
        mapUrl: "https://www.google.com/maps",
        img: "https://i.pinimg.com/1200x/d7/52/11/d7521140d74f4ec572a015fee9bc24ba.jpg"
    },
    { 
        title: "Edapadi WRD", 
        location: "Retaining Wall", 
        type: "Water Resources",
        mapUrl: "https://www.google.com/maps",
        img: "https://i.pinimg.com/1200x/d7/52/11/d7521140d74f4ec572a015fee9bc24ba.jpg"
    },
    { 
        title: "Mettur Thermal Junction", 
        location: "Improvement Work", 
        type: "Traffic Engineering",
        mapUrl: "https://www.google.com/maps",
        img: "https://i.pinimg.com/1200x/d7/52/11/d7521140d74f4ec572a015fee9bc24ba.jpg"
    },
    { 
        title: "Pennagaram to Anchetty", 
        location: "Forest Road Formation", 
        type: "Connectivity",
        mapUrl: "https://www.google.com/maps",
        img: "https://i.pinimg.com/1200x/d7/52/11/d7521140d74f4ec572a015fee9bc24ba.jpg"
    },
    { 
        title: "Thandarampattu Bridge", 
        location: "River Bridge", 
        type: "Structural",
        mapUrl: "https://www.google.com/maps",
        img: "https://i.pinimg.com/1200x/d7/52/11/d7521140d74f4ec572a015fee9bc24ba.jpg"
    },
    { 
        title: "KRP Dam Cluster", 
        location: "Krishnagiri (7 Bridges)", 
        type: "Thenpannai River",
        mapUrl: "https://www.google.com/maps",
        img: "https://i.pinimg.com/1200x/d7/52/11/d7521140d74f4ec572a015fee9bc24ba.jpg"
    },
  ];

  useGSAP(() => {
    const rows = gsap.utils.toArray(".project-row");

    rows.forEach((row) => {
      const img = row.querySelector(".p-image");
      const card = row.querySelector(".p-card");
      const number = row.querySelector(".p-number");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(img, { 
        xPercent: -20, 
        opacity: 0, 
        duration: 1.5, 
        ease: "power4.out" 
      })
      .from(card, { 
        xPercent: 20, 
        opacity: 0, 
        duration: 1.5, 
        ease: "power4.out" 
      }, "-=1.2")
      .from(number, { 
        y: 50, 
        opacity: 0, 
        duration: 1 
      }, "-=1");
    });

    // Parallax effect on images while scrolling
    gsap.utils.toArray(".p-image img").forEach(image => {
      gsap.to(image, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          scrub: true
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-zinc-950 py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Dark Mode Header */}
        <div className="flex flex-col mb-32 border-l-4 border-amber-500 pl-8">
          <h2 className="text-sm font-black text-amber-500 uppercase tracking-[0.6em] mb-4">
            Our Portfolio
          </h2>
          <h3 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase">
            Major <br /> Landmarks
          </h3>
        </div>

        {/* List Content */}
        <div className="space-y-48">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-row flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 items-center`}
            >
              
              {/* Image Side */}
              <div className="p-image w-full lg:w-3/5 h-[400px] md:h-[650px] overflow-hidden group relative bg-zinc-900 shadow-2xl">
                <img 
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 scale-110 group-hover:scale-125 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-20" />
              </div>

              {/* Float Card Side */}
              <div className="p-card w-full lg:w-2/5 bg-stone-50 p-10 md:p-16 -mt-20 lg:mt-0 lg:-ml-20 lg:-mr-20 z-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] border-b-8 border-amber-500 relative">
                
                {/* Background Ghost Number */}
                <div className="p-number absolute -top-12 -right-4 md:-right-8 text-8xl md:text-[10rem] font-black text-white/[0.03] select-none z-[-1] tracking-tighter">
                  {index < 9 ? `0${index + 1}` : index + 1}
                </div>
                
                <span className="text-amber-500 font-mono text-xs font-bold tracking-[0.4em] uppercase block mb-6">
                  {project.type}
                </span>
                
                <h4 className="text-3xl  font-bold text-zinc-900 uppercase tracking-tighter leading-tight mb-8">
                  {project.title}
                </h4>

                <div className="space-y-8">
                  <div className="flex flex-col gap-2 border-t border-zinc-800 pt-8">
                    <span className="text-zinc-500 uppercase text-[10px] tracking-widest font-bold">Location</span>
                    <p className="text-zinc-800 text-sm font-medium tracking-wide">{project.location}</p>
                  </div>
                  
                  <a 
                    href={project.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-5 text-zinc-800 group/btn"
                  >
                    <span className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center group-hover/btn:bg-amber-500 group-hover/btn:border-amber-500 group-hover/btn:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-500">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover/btn:text-zinc-950 transition-colors">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <span className="font-black uppercase text-xs tracking-[0.2em] group-hover/btn:text-amber-500 transition-colors">
                      Live Map Coordinates
                    </span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-56 flex flex-col items-center">
            <div className="w-px h-24 bg-gradient-to-b from-amber-500 to-transparent mb-12" />
            <button className="relative px-14 py-6 bg-transparent border border-zinc-700 text-white font-black uppercase tracking-[0.4em] text-xs hover:bg-white hover:text-black transition-all duration-500 group">
                <span className="relative z-10">Request Project Details</span>
                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 z-0" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectMajorWorks;