import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HomeProjects = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
      ease: "power4.out"
    });
  }, { scope: container });

  const projects = [
    { title: "The Obsidian Villa", category: "Residential", img: "https://images.unsplash.com/photo-1600607687940-47a04b62d730?w=800" },
    { title: "Industrial Core", category: "Commercial", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800" },
    { title: "Glass Pavilion", category: "Exhibition", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800" }
  ];

  return (
    <section ref={container} className="py-32 bg-zinc-950 px-8 md:px-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto mb-16 flex justify-between items-end">
        <div>
          <h2 className="text-white text-4xl font-medium tracking-tight">Latest Works</h2>
          <div className="h-1 w-12 bg-yellow-500 mt-4"></div>
        </div>
        <button className="text-zinc-400 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold">
          View All Projects —
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <div key={i} className="project-card group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10">
              <img 
                src={proj.img} 
                alt={proj.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-8 left-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                <span className="text-yellow-500 text-[9px] uppercase tracking-widest block mb-2">{proj.category}</span>
                <h3 className="text-white text-xl font-medium">{proj.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeProjects;