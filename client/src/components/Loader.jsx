import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function IllustratedCraneLoader({ setFinished }) {
  const container = useRef();
  const trolleyRef = useRef();
  const hookRef = useRef();
  const goodsRef = useRef();
  const goodsInnerRef = useRef(); // For the swinging effect
 
  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(container.current, {
          scale: 1.1,
          opacity: 0,
          duration: 0.8,
          ease: "power4.in",
          onComplete: () => setFinished(true),
        });
      },
    });

    // Initial Setup
    gsap.set(goodsRef.current, { x: -140, y: 0 });
    gsap.set(trolleyRef.current, { x: -140 });
    gsap.set(hookRef.current, { height: 20 });
    gsap.set(goodsInnerRef.current, { transformOrigin: "top center" });

    // 1. Lower the hook precisely to the crate's handle
    tl.to(hookRef.current, { 
      height: 130, 
      duration: 1.5, 
      ease: "power2.inOut" 
    })
    
    // 2. Lift Phase
    .to(goodsRef.current, { 
      y: -100, 
      duration: 1.2, 
      ease: "power3.out" 
    }, "lift")
    .to(hookRef.current, { 
      height: 48, 
      duration: 1.2, 
      ease: "power3.out" 
    }, "lift")

    // 3. Transit Phase with Swing Effect
    .to([trolleyRef.current, goodsRef.current], { 
      x: 140, 
      duration: 2.5, 
      ease: "sine.inOut" 
    }, "move")
    .to(goodsInnerRef.current, { 
      rotation: 5, 
      duration: 1, 
      ease: "power1.inOut" 
    }, "move")
    .to(goodsInnerRef.current, { 
      rotation: 0, 
      duration: 1.5, 
      ease: "elastic.out(1, 0.3)" 
    }, "move+=1")

    // 4. Drop Phase
    .to(goodsRef.current, { 
      y: 0, 
      duration: 1, 
      ease: "bounce.out" 
    }, "drop")
    .to(hookRef.current, { 
      height: 150, 
      duration: 1, 
      ease: "bounce.out" 
    }, "drop")

    // 5. Retract hook and exit
    .to(hookRef.current, { 
      height: 10, 
      duration: 0.8, 
      ease: "power2.in" 
    }, "+=0.3");

  }, { scope: container });

  return (
    <div ref={container} className="fixed inset-0 z-[999] bg-zinc-950 flex flex-col items-center justify-center overflow-hidden font-sans">
      
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative w-[600px] h-[350px] border-b-2 border-zinc-800/80">
        
        {/* Static Crane Mast */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-12 h-[92%] bg-zinc-900 border-x-2 border-zinc-800 flex flex-col justify-around opacity-60">
            {[...Array(8)].map((_,i) => <div key={i} className="w-full h-10 border-b border-zinc-700/30 -rotate-12" />)}
        </div>

        {/* The Jib (Horizontal Arm) */}
        <div className="absolute top-10 left-0 w-full h-6 bg-zinc-900 border-y-2 border-zinc-800 shadow-2xl">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_15px,rgba(234,179,8,0.05)_15px,rgba(234,179,8,0.05)_30px)]" />
        </div>

        {/* The Trolley & Hook Assembly */}
        <div ref={trolleyRef} className="absolute top-[58px] left-1/2 -translate-x-1/2 flex flex-col items-center z-30">
            {/* Trolley Box */}
            <div className="w-16 h-7 bg-yellow-500 rounded-sm shadow-xl flex items-center justify-center border-b-4 border-yellow-700 relative">
              <div className="absolute -top-1 w-full h-1 bg-yellow-400" />
              <div className="w-10 h-1.5 bg-black/20 rounded-full" />
            </div>
            
            {/* Moving Cable */}
            <div ref={hookRef} className="w-[3px] bg-zinc-400 origin-top shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
            
            {/* Lifting Hook */}
            <div className="relative -mt-1.5">
                <svg width="32" height="32" viewBox="0 0 24 24" className="text-yellow-500 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                    <path fill="currentColor" d="M12 2a2 2 0 0 0-2 2v8h4V4a2 2 0 0 0-2-2m0 12c-1.1 0-2 .9-2 2v2a2 2 0 0 1-2 2c-1.1 0-2-.9-2-2h-2c0 2.2 1.8 4 4 4s4-1.8 4-4v-2c0-1.1-.9-2-2-2Z" />
                </svg>
            </div>
        </div>

        {/* The Goods (Crate) */}
        <div ref={goodsRef} className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20">
            <div ref={goodsInnerRef} className="flex flex-col items-center">
                {/* Attachment Loop */}
                <div className="w-7 h-7 border-[3px] border-zinc-500 rounded-full -mb-3 relative z-10 shadow-inner" />
                
                {/* Main Crate Body */}
                <div className="w-24 h-24 bg-[#3d2b1f] border-4 border-[#241a13] rounded shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center relative overflow-hidden">
                    {/* Wood Texture Slats */}
                    <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_22px,#000_22px,#000_24px)]" />
                    
                    {/* ATTRACTIVE BRAND TEXT */}
                    <div className="relative z-10 flex flex-col items-center">
                        <span className="text-yellow-500 font-black text-xs tracking-[0.2em] drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]">
                            RM
                        </span>
                        <div className="w-12 h-[1px] bg-yellow-500/50 mt-1" />
                        <span className="text-[7px] text-zinc-400 font-mono mt-1 tracking-widest uppercase">
                            Premium Asset
                        </span>
                    </div>

                    {/* Industrial Protection Bars */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-2 bg-black/20" />
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-black/20" />
                        {/* Diagonal Caution Straps */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-4 bg-yellow-500/10 -rotate-45 border-y border-yellow-500/20" />
                    </div>

                    {/* Corner Rivets */}
                    <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-zinc-600/50" />
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-zinc-600/50" />
                    <div className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full bg-zinc-600/50" />
                    <div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-zinc-600/50" />
                </div>
            </div>
        </div>
      </div>

      {/* Loading Info Section */}
      <div className="mt-16 text-center space-y-6">
        <div className="flex flex-col items-center">
            <h1 className="text-white font-black text-3xl md:text-5xl tracking-tighter uppercase italic">
              RM <span className="text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">& COMPANY</span>
            </h1>
            <div className="w-56 h-1.5 bg-zinc-900 mt-4 relative overflow-hidden rounded-full border border-zinc-800">
                <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-yellow-600 to-yellow-400 w-1/3 animate-[loading_1.5s_infinite_ease-in-out]" />
            </div>
        </div>
        
        <div className="flex items-center gap-4 justify-center bg-zinc-900/50 px-6 py-2 rounded-full border border-zinc-800">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse [animation-delay:200ms]" />
              <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse [animation-delay:400ms]" />
            </div>
            <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-[0.4em]">
                Initializing System Protocol
            </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); width: 10%; }
          50% { width: 40%; }
          100% { transform: translateX(400%); width: 10%; }
        }
      `}</style>
    </div>
  );
}