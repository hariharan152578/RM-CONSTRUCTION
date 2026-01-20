// import React, { useRef, useState } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const galleryItems = [
//   {
//     id: 1,
//     title: "Main Span Execution",
//     category: "Bridge Work",
//     image: "https://images.unsplash.com/photo-1545139239-0837f6a394a4?q=80&w=1200",
//     size: "large"
//   },
//   {
//     id: 2,
//     title: "Highway Paving",
//     category: "Road Work",
//     image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1200",
//     size: "small"
//   },
//   {
//     id: 3,
//     title: "Site Discipline",
//     category: "Operations",
//     image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1200",
//     size: "small"
//   },
//   {
//     id: 4,
//     title: "Structural Reinforcement",
//     category: "Ongoing",
//     image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
//     size: "medium"
//   },
//   {
//     id: 5,
//     title: "Culvert Systems",
//     category: "Drainage",
//     image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ec4?q=80&w=1200",
//     size: "medium"
//   },
//   {
//     id: 6,
//     title: "Legacy Project 1970",
//     category: "Archive",
//     image: "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=1200",
//     size: "small"
//   }
// ];

// const Gallery = ({ isFinished }) => {
//   const containerRef = useRef();
//   const [selectedImg, setSelectedImg] = useState(null);
//   const lightboxRef = useRef();

//   // Animation for the Gallery Scroll
//   useGSAP(() => {
//     if (!isFinished) return;

//     ScrollTrigger.refresh();

//     gsap.from(".gallery-header > *", {
//       y: 60,
//       opacity: 0,
//       stagger: 0.2,
//       duration: 1.2,
//       ease: "power4.out"
//     });

//     const items = gsap.utils.toArray(".gallery-item");
//     items.forEach((item) => {
//       const img = item.querySelector("img");
      
//       gsap.fromTo(item, 
//         { y: 100, opacity: 0 },
//         { 
//           y: 0, 
//           opacity: 1, 
//           duration: 1.5, 
//           ease: "expo.out",
//           scrollTrigger: {
//             trigger: item,
//             start: "top 90%",
//           }
//         }
//       );

//       gsap.to(img, {
//         yPercent: 15,
//         ease: "none",
//         scrollTrigger: {
//           trigger: item,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: true
//         }
//       });
//     });
//   }, { scope: containerRef, dependencies: [isFinished] });

//   // Animation for the Lightbox Opening
//   useGSAP(() => {
//     if (selectedImg) {
//       gsap.fromTo(lightboxRef.current, 
//         { opacity: 0 }, 
//         { opacity: 1, duration: 0.5, ease: "power2.out" }
//       );
//       gsap.from(".lightbox-content", {
//         scale: 0.9,
//         y: 20,
//         duration: 0.6,
//         ease: "expo.out"
//       });
//     }
//   }, [selectedImg]);

//   const closeLightbox = () => {
//     gsap.to(lightboxRef.current, {
//       opacity: 0,
//       duration: 0.3,
//       onComplete: () => setSelectedImg(null)
//     });
//   };

//   return (
//     <section ref={containerRef} className="bg-stone-50 min-h-screen py-32 px-6 md:px-12 relative">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="gallery-header max-w-3xl mb-24">
//           <h1 className="text-sm font-black text-yellow-600 uppercase tracking-[0.6em] mb-6 block">Visual Record</h1>
//           <h2 className="text-6xl md:text-8xl font-black text-zinc-900 tracking-tighter uppercase leading-[0.85] mb-8">
//             The <br /> <span className="text-stone-300">Gallery</span>
//           </h2>
//           <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-medium">
//             A visual record of our journey showcasing completed works, ongoing construction, 
//             and on-site operations that reflect our commitment to precision.
//           </p>
//         </div>

//         {/* Masonry-style Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
//           {galleryItems.map((item) => (
//             <div 
//               key={item.id}
//               onClick={() => setSelectedImg(item)}
//               className={`gallery-item group relative overflow-hidden bg-zinc-200 cursor-pointer
//                 ${item.size === 'large' ? 'md:col-span-2 lg:row-span-2 aspect-video lg:aspect-square' : ''}
//                 ${item.size === 'medium' ? 'aspect-video' : 'aspect-square'}
//               `}
//             >
//               <img 
//                 src={item.image} 
//                 alt={item.title}
//                 className="w-full h-[120%] object-cover absolute top-[-10%] left-0 grayscale group-hover:grayscale-0 transition-all duration-700"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
//                 <span className="text-yellow-500 text-[10px] font-black uppercase tracking-widest mb-2">
//                   {item.category}
//                 </span>
//                 <h4 className="text-white text-2xl font-bold uppercase tracking-tight">
//                   {item.title}
//                 </h4>
//                 <p className="text-white/50 text-xs uppercase tracking-widest mt-4">Click to view</p>
//               </div>

//               <div className="absolute inset-0 border-[0px] group-hover:border-[12px] border-white/10 transition-all duration-500 pointer-events-none" />
//             </div>
//           ))}
//         </div>

//         {/* Floating Bottom Info */}
//         <div className="mt-32 border-t border-stone-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
//           <p className="text-stone-400 font-mono text-[10px] uppercase tracking-widest">
//             © 1970 — 2026 RM Group Execution Records
//           </p>
//         </div>
//       </div>

//       {/* LIGHTBOX MODAL */}
//       {selectedImg && (
//         <div 
//           ref={lightboxRef}
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/95 p-6 md:p-12"
//           onClick={closeLightbox}
//         >
//           {/* Close Button */}
//           <button className="absolute top-10 right-10 text-white group flex items-center gap-2">
//             <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
//             <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
//                ✕
//             </div>
//           </button>

//           <div 
//             className="lightbox-content relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <img 
//               src={selectedImg.image} 
//               alt={selectedImg.title} 
//               className="w-full h-full object-contain shadow-2xl"
//             />
//             <div className="mt-8 text-center">
//               <span className="text-yellow-500 text-xs font-black uppercase tracking-[0.4em]">
//                 {selectedImg.category}
//               </span>
//               <h3 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tighter mt-2">
//                 {selectedImg.title}
//               </h3>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Gallery;

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  {
    id: 1,
    title: "Main Span Execution",
    category: "Bridge Work",
    image: "https://i.pinimg.com/1200x/86/dc/5c/86dc5cf670a4e5109e3790c883ad4b8b.jpg",
    size: "large"
  },
  {
    id: 2,
    title: "Highway Paving",
    category: "Road Work",
    image: "https://i.pinimg.com/736x/e8/e7/6b/e8e76b898ebe7ae5f3611e0d6e47798f.jpg",
    size: "small"
  },
  {
    id: 3,
    title: "Site Discipline",
    category: "Operations",
    image: "https://i.pinimg.com/736x/13/47/80/1347807cbd2d3613e23e06a066eeb916.jpg",
    size: "small"
  },
  {
    id: 4,
    title: "Structural Reinforcement",
    category: "Ongoing",
    image: "https://i.pinimg.com/736x/8a/b4/fd/8ab4fd101cc5fd3243d0665714c768e3.jpg",
    size: "medium"
  },
  {
    id: 5,
    title: "Culvert Systems",
    category: "Drainage",
    image: "https://i.pinimg.com/1200x/b7/34/f9/b734f90d3b8b54e8e17ee081239fef0f.jpg",
    size: "medium"
  },
  {
    id: 6,
    title: "Legacy Project 1970",
    category: "Archive",
    image: "https://i.pinimg.com/736x/f2/84/66/f2846637e4f89a3057374cc758a0a0a2.jpg",
    size: "small"
  }
];

const GalleryDark = ({ isFinished }) => {
  const containerRef = useRef();
  const [selectedImg, setSelectedImg] = useState(null);
  const lightboxRef = useRef();

  useGSAP(() => {
    if (!isFinished) return;

    ScrollTrigger.refresh();

    // 1. Header Animation
    gsap.from(".gallery-header > *", {
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out"
    });

    // 2. Grid Item Reveal & Parallax
    const items = gsap.utils.toArray(".gallery-item");
    items.forEach((item) => {
      const img = item.querySelector("img");
      
      gsap.fromTo(item, 
        { y: 80, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 95%",
          }
        }
      );

      gsap.to(img, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }, { scope: containerRef, dependencies: [isFinished] });

  // Lightbox GSAP
  useGSAP(() => {
    if (selectedImg) {
      gsap.fromTo(lightboxRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.4 }
      );
      gsap.from(".lightbox-img", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: "expo.out"
      });
    }
  }, [selectedImg]);

  const closeLightbox = () => {
    gsap.to(lightboxRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => setSelectedImg(null)
    });
  };

  return (
    <section ref={containerRef} className="bg-zinc-950 text-white min-h-screen py-32 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="gallery-header max-w-3xl mb-32">
          <div className="flex items-center gap-4 mb-6">
             <div className="w-10 h-[1px] bg-yellow-500"></div>
             <span className="text-xs font-black text-yellow-500 uppercase tracking-[0.6em]">Portfolio Archive</span>
          </div>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-10">
            The <br /> <span className="text-zinc-800">Gallery</span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl border-l text-justify border-zinc-800 pl-8">
            A visual record of our journey showcasing completed works, ongoing construction, 
            and site operations that reflect our commitment to precision.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedImg(item)}
              className={`gallery-item group relative overflow-hidden bg-zinc-900 cursor-pointer border border-white/5
                ${item.size === 'large' ? 'md:col-span-2 lg:row-span-2 aspect-video lg:aspect-square' : ''}
                ${item.size === 'medium' ? 'aspect-video' : 'aspect-square'}
              `}
            >
              {/* Image with Parallax */}
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-[120%] object-cover absolute top-[-10%] left-0 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <span className="text-yellow-500 text-[10px] font-black uppercase tracking-[0.4em] mb-3">
                  {item.category}
                </span>
                <h4 className="text-white text-3xl font-bold uppercase tracking-tighter leading-none">
                  {item.title}
                </h4>
                <div className="h-[1px] w-0 group-hover:w-full bg-yellow-500/50 mt-4 transition-all duration-700 delay-100" />
              </div>

              {/* Technical Border Frame */}
              <div className="absolute inset-0 border-[0px] group-hover:border-[20px] border-zinc-950/40 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-40 border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center opacity-50">
          <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em]">
            Precision Engineering — Execution Records
          </p>
          <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em]">
            © 1970 — 2026
          </p>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImg && (
        <div 
          ref={lightboxRef}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-zinc-950/98 backdrop-blur-sm p-4 md:p-12"
          onClick={closeLightbox}
        >
          {/* Custom Close Button */}
          <button className="absolute top-10 right-10 flex items-center gap-4 group">
             <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">Close Project</span>
             <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-500 group-hover:text-zinc-950 transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
             </div>
          </button>

          <div 
            className="lightbox-content relative max-w-6xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-sm shadow-[0_0_100px_rgba(0,0,0,0.5)]">
               <img 
                 src={selectedImg.image} 
                 alt={selectedImg.title} 
                 className="lightbox-img w-full h-auto max-h-[75vh] object-contain"
               />
            </div>
            
            <div className="mt-12 text-center">
              <span className="text-yellow-500 text-xs font-black uppercase tracking-[0.5em] block mb-4">
                Section: {selectedImg.category}
              </span>
              <h3 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter">
                {selectedImg.title}
              </h3>
              <div className="w-20 h-1 bg-zinc-800 mx-auto mt-6"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryDark;