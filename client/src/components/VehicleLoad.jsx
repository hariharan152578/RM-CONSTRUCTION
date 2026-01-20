// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// /**
//  * High-Fidelity 3D Isometric-Style Truck 
//  * Architectural palette (Zinc-950 and Yellow-500)
//  */
// const ConstructionTruck = () => (
//   <svg viewBox="0 0 140 80" className="w-full h-full drop-shadow-2xl overflow-visible">
//     <defs>
//       <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
//         <stop offset="0%" stopColor="#facc15" />
//         <stop offset="100%" stopColor="#ca8a04" />
//       </linearGradient>
//       <linearGradient id="chassisGrad" x1="0%" y1="0%" x2="0%" y2="100%">
//         <stop offset="0%" stopColor="#3f3f46" />
//         <stop offset="100%" stopColor="#09090b" />
//       </linearGradient>
//     </defs>

//     {/* Heavy Chassis Frame */}
//     <rect x="15" y="52" width="115" height="10" rx="1" fill="url(#chassisGrad)" />
    
//     {/* 3D Cab Section */}
//     <path d="M100 52 L135 52 L135 40 L120 22 L100 22 Z" fill="url(#bodyGrad)" />
//     <rect x="112" y="28" width="16" height="12" rx="1" fill="#27272a" stroke="#facc15" strokeWidth="0.5" />

//     {/* EXHAUST STACK */}
//     <rect x="96" y="18" width="4" height="22" fill="#333" rx="1" />
//     <rect x="95" y="15" width="6" height="3" fill="#111" rx="1" />

//     {/* Heavy Dump Bed */}
//     <g className="dump-bed">
//       <path d="M10 18 L95 18 L100 52 L15 52 Z" fill="#eab308" />
//       {[25, 45, 65, 85].map(x => (
//         <rect key={x} x={x} y="25" width="3" height="22" fill="#854d0e" rx="0.5" />
//       ))}
//     </g>

//     {/* WHEELS */}
//     {[35, 65, 118].map((cx) => (
//       <g key={cx} className="wheel-group">
//         <circle cx={cx} cy="62" r="12" fill="#09090b" />
//         <circle cx={cx} cy="62" r="6" fill="#18181b" stroke="#facc15" strokeWidth="1.5" />
//         <rect x={cx - 1} y="52" width="2" height="4" fill="#facc15" opacity="0.6" />
//       </g>
//     ))}
//   </svg>
// );

// export default function IllustratedVehiclesLoader({ setFinished }) {
//   const container = useRef(null);
//   const truckRef = useRef(null);
//   const particleLayer = useRef(null);

//   useGSAP(() => {
//     const tl = gsap.timeline({
//       onComplete: () => {
//         gsap.to(container.current, { opacity: 0, duration: 0.6, onComplete: () => setFinished(true) });
//       },
//     });

//     gsap.set(truckRef.current, { x: "-60vw", xPercent: -50 });

//     tl.to(truckRef.current, {
//       x: "0vw",
//       duration: 1.2,
//       ease: "power2.out",
//       onUpdate: () => spawnLinearWhiteSmoke(false)
//     })
//     .to({}, { 
//       duration: 0.5, 
//       onUpdate: () => spawnLinearWhiteSmoke(true, false, 0.2) 
//     })
//     .to(truckRef.current, {
//       x: "115vw",
//       duration: 1.5,
//       ease: "power3.in",
//       onStart: () => {
//         for(let i=0; i<15; i++) {
//           setTimeout(() => spawnLinearWhiteSmoke(true, true), i * 30);
//         }
//       },
//       onUpdate: () => spawnLinearWhiteSmoke(true)
//     });

//     gsap.to(".wheel-group", { rotation: 360, transformOrigin: "center center", duration: 0.5, repeat: -1, ease: "none" });
//     gsap.to(".truck-unit", { y: -1.2, duration: 0.08, repeat: -1, yoyo: true, ease: "none" });

//     function spawnLinearWhiteSmoke(isActive, isBurst = false, frequency = 0.5) {
//       if (!particleLayer.current || (Math.random() > frequency && !isBurst)) return;

//       const p = document.createElement("div");
      
//       // Changed to WHITE and LINEAR (streak) style
//       p.className = `absolute bg-white pointer-events-none opacity-60 blur-[1px] rounded-full`;
      
//       // Streak dimensions: wide but very thin
//       const baseWidth = isBurst ? 40 : 20;
//       const width = baseWidth + Math.random() * 30;
//       p.style.width = `${width}px`;
//       p.style.height = `1.5px`; // Linear thickness
      
//       const rect = truckRef.current.getBoundingClientRect();
//       p.style.left = `${rect.left + (rect.width * 0.68)}px`;
//       p.style.top = `${rect.top + 15 + (Math.random() * 6 - 3)}px`;

//       particleLayer.current.appendChild(p);
      
//       // Linear Physics: Fast horizontal drift backwards
//       gsap.to(p, {
//         x: -150 - (Math.random() * 100),  // Shoots backwards
//         y: -20 - (Math.random() * 20),   // Slight upward drift
//         scaleX: 0.2,                     // Shrinks horizontally as it fades
//         opacity: 0,
//         duration: 0.8 + Math.random() * 0.4, 
//         ease: "power1.out",
//         onComplete: () => p.remove()
//       });
//     }
//   }, []);

//   return (
//     <div ref={container} className="fixed inset-0 z-[999] bg-zinc-950/40 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden">
//       <div ref={particleLayer} className="absolute inset-0 pointer-events-none" />
      
//       <div className="relative w-full h-[240px] flex items-center justify-center">
//         <div className="absolute bottom-[54px] w-full h-[40px] bg-zinc-900/60 flex items-center overflow-hidden border-t border-white/5">
//             <div className="flex gap-12 animate-[roadMove_0.4s_linear_infinite] whitespace-nowrap">
//                 {[...Array(20)].map((_, i) => (
//                     <div key={i} className="w-16 h-[2px] bg-yellow-500/30 shrink-0" />
//                 ))}
//             </div>
//         </div>

//         <div ref={truckRef} className="truck-unit relative w-[160px] h-[100px] z-10">
//           <ConstructionTruck />
//         </div>
//       </div>

//       <div className="mt-8 flex flex-col items-center gap-4">
//         <div className="w-48 h-[1px] bg-white/10 overflow-hidden">
//             <div className="h-full bg-yellow-500 animate-[load_3.2s_linear_forwards]" />
//         </div>
// <div className="flex flex-col items-center group w-full px-4">
//   {/* Main Brand Header */}
//   <div className="flex items-center gap-2 md:gap-4 mb-2">
//     {/* Geometric Left Bracket - Scaled for Mobile */}
//     <div className="w-[1px] h-4 md:h-6 bg-gradient-to-t from-transparent via-yellow-500/50 to-transparent" />
    
//     <div className="flex flex-col items-center">
//       <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-light uppercase tracking-[0.2em] md:tracking-[0.3em] leading-none flex items-baseline">
//         <span className="font-black text-white opacity-100">RM</span>
//         <span className="ml-1.5 md:ml-2 text-yellow-500 opacity-90">Construction</span>
//       </h2>
//     </div>

//     {/* Geometric Right Bracket - Scaled for Mobile */}
//     <div className="w-[1px] h-4 md:h-6 bg-gradient-to-t from-transparent via-yellow-500/50 to-transparent" />
//   </div>

//   {/* Tagline with "Floating" Architecture */}
//   <div className="relative pt-1 overflow-hidden w-full max-w-[280px] sm:max-w-none flex flex-col items-center">
//     <span className="text-yellow-500 text-[15px] md:text-2xl uppercase tracking-[0.5em] md:tracking-[0.8em] font-medium block animate-pulse text-center whitespace-nowrap">
//       Your Destination
//     </span>
    
//     {/* Animated Underline with Progress Look */}
//     <div className="mt-2 w-16 md:w-full h-[1px] bg-white/10 relative overflow-hidden">
//       <div className="absolute inset-0 bg-yellow-500/60 animate-[brandLine_3.2s_ease-in-out_infinite]" />
//     </div>
//   </div>

//   <style jsx>{`
//     @keyframes brandLine {
//       0% { transform: translateX(-100%); }
//       50% { transform: translateX(0%); }
//       100% { transform: translateX(100%); }
//     }
//   `}</style>
// </div>

//       </div>

//       <style jsx>{`
//         @keyframes roadMove { from { transform: translateX(0); } to { transform: translateX(-112px); } }
//         @keyframes load { from { width: 0%; } to { width: 100%; } }
//       `}</style>
//     </div>
//   );
// }

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/**
 * High-Fidelity 3D Isometric-Style Truck 
 */
const ConstructionTruck = () => (
  <svg viewBox="0 0 140 80" className="w-full h-full drop-shadow-2xl overflow-visible">
    <defs>
      <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#facc15" />
        <stop offset="100%" stopColor="#ca8a04" />
      </linearGradient>
      <linearGradient id="chassisGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3f3f46" />
        <stop offset="100%" stopColor="#09090b" />
      </linearGradient>
    </defs>
    <rect x="15" y="52" width="115" height="10" rx="1" fill="url(#chassisGrad)" />
    <path d="M100 52 L135 52 L135 40 L120 22 L100 22 Z" fill="url(#bodyGrad)" />
    <rect x="112" y="28" width="16" height="12" rx="1" fill="#27272a" stroke="#facc15" strokeWidth="0.5" />
    <rect x="96" y="18" width="4" height="22" fill="#333" rx="1" />
    <rect x="95" y="15" width="6" height="3" fill="#111" rx="1" />
    <g className="dump-bed">
      <path d="M10 18 L95 18 L100 52 L15 52 Z" fill="#eab308" />
      {[25, 45, 65, 85].map(x => (
        <rect key={x} x={x} y="25" width="3" height="22" fill="#854d0e" rx="0.5" />
      ))}
    </g>
    {[35, 65, 118].map((cx) => (
      <g key={cx} className="wheel-group">
        <circle cx={cx} cy="62" r="12" fill="#09090b" />
        <circle cx={cx} cy="62" r="6" fill="#18181b" stroke="#facc15" strokeWidth="1.5" />
        <rect x={cx - 1} y="52" width="2" height="4" fill="#facc15" opacity="0.6" />
      </g>
    ))}
  </svg>
);

export default function IllustratedVehiclesLoader({ setFinished }) {
  const container = useRef(null);
  const truckRef = useRef(null);
  const particleLayer = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(container.current, { opacity: 0, duration: 0.3, onComplete: () => setFinished(true) });
      },
    });

    gsap.set(truckRef.current, { x: "-60vw", xPercent: -50 });

    // Total Duration Logic: 0.3s (in) + 0.3s (wait) + 0.4s (out) = 1.0 Second
    tl.to(truckRef.current, {
      x: "0vw",
      duration: 0.3, // Accelerated entry
      ease: "back.out(1.2)",
      onUpdate: () => spawnLinearWhiteSmoke(false)
    })
    .to({}, { 
      duration: 0.6, // Shortened mid-pause
      onUpdate: () => spawnLinearWhiteSmoke(true, false, 0.4) 
    })
    .to(truckRef.current, {
      x: "115vw",
      duration: 0.4, // Fast exit
      ease: "power4.in",
      onStart: () => {
        for(let i=0; i<10; i++) {
          setTimeout(() => spawnLinearWhiteSmoke(true, true), i * 20);
        }
      },
      onUpdate: () => spawnLinearWhiteSmoke(true)
    });

    // Speed up wheel rotation to match faster ground speed
    gsap.to(".wheel-group", { rotation: 360, transformOrigin: "center center", duration: 0.2, repeat: -1, ease: "none" });
    gsap.to(".truck-unit", { y: -1.5, duration: 0.05, repeat: -1, yoyo: true, ease: "none" });

    function spawnLinearWhiteSmoke(isActive, isBurst = false, frequency = 0.5) {
      if (!particleLayer.current || (Math.random() > frequency && !isBurst)) return;
      const p = document.createElement("div");
      p.className = `absolute bg-white pointer-events-none opacity-60 blur-[1px] rounded-full`;
      const baseWidth = isBurst ? 40 : 20;
      const width = baseWidth + Math.random() * 30;
      p.style.width = `${width}px`;
      p.style.height = `1.5px`;
      const rect = truckRef.current.getBoundingClientRect();
      p.style.left = `${rect.left + (rect.width * 0.68)}px`;
      p.style.top = `${rect.top + 15 + (Math.random() * 6 - 3)}px`;
      particleLayer.current.appendChild(p);
      
      gsap.to(p, {
        x: -200 - (Math.random() * 100),
        y: -10 - (Math.random() * 10),
        scaleX: 0.1,
        opacity: 0,
        duration: 0.4, // Faster particle decay
        ease: "power1.out",
        onComplete: () => p.remove()
      });
    }
  }, []);

  return (
    <div ref={container} className="fixed inset-0 z-[999] bg-zinc-900 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden">
      <div ref={particleLayer} className="absolute inset-0 pointer-events-none" />
      
      <div className="relative w-full h-[240px] flex items-center justify-center">
        {/* Faster Road Animation */}
        <div className="absolute bottom-[54px] w-full h-[40px] bg-zinc-700 flex items-center overflow-hidden border-t border-white/5">
            <div className="flex gap-12 animate-[roadMove_0.2s_linear_infinite] whitespace-nowrap">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-16 h-[2px] bg-yellow-500/30 shrink-0" />
                ))}
            </div>
        </div>

        <div ref={truckRef} className="truck-unit relative w-[160px] h-[100px] z-10">
          <ConstructionTruck />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
  
        
        <div className="flex flex-col items-center group w-full px-4">
          <div className="flex items-center gap-2 md:gap-4 mb-2">
          
            <div className="flex flex-col items-center">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-light uppercase tracking-[0.2em] md:tracking-[0.3em] leading-none flex items-baseline">
                <span className="font-black text-yellow-600">RM</span>
                <span className="ml-1.5 md:ml-2 text-stone-500 font-medium">Construction</span>
              </h2>
            </div>
          </div>

          <div className="relative pt-1 overflow-hidden w-full max-w-[280px] sm:max-w-none flex flex-col items-center">
            <span className="text-yellow-600 text-[15px] md:text-2xl uppercase tracking-[0.5em] md:tracking-[0.8em] font-medium block animate-pulse text-center">
              Your Destination
            </span>
            <div className="mt-2 w-16 md:w-full h-[1px] bg-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-yellow-500/60 animate-[brandLine_1.0s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes roadMove { from { transform: translateX(0); } to { transform: translateX(-112px); } }
        @keyframes load { from { width: 0%; } to { width: 100%; } }
        @keyframes brandLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}