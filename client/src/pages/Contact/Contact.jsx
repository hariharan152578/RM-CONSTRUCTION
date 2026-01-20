import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactPageMimic = ({ isFinished }) => {
  const containerRef = useRef();

  useGSAP(() => {
    // We only trigger if the page transition is finished
    if (!isFinished) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // Animate the Hero content: Title, dots, and description
    tl.from(".banner-content *", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power4.out"
    })
    // Animate the three contact cards popping up
    .from(".info-card", {
      y: 60,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.4");

  }, { scope: containerRef, dependencies: [isFinished] });

  return (
    <div ref={containerRef} className="bg-white font-sans overflow-hidden">
      
      {/* 1. HERO BANNER SECTION (Mimicking the City Background) */}
      <div className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background Overlay Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2000" 
            alt="City Architecture" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          {/* Dark gradient for text legibility */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="banner-content relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-black text-yellow-600 uppercase tracking-[0.2em] mb-4">
            CONTACT US
          </h1>
          
          {/* Decorative six dots from reference */}
          <div className="flex justify-center gap-1.5 mb-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/60" />
            ))}
          </div>

          <p className="text-white text-lg md:text-2xl font-semibold leading-relaxed tracking-tight max-w-3xl mx-auto">
            Need an expert? You are more than welcomed to leave your contact <br className="hidden md:block"/>
            info and we will be in touch shortly
          </p>
        </div>
      </div>

      {/* 2. CONTACT INFO SECTION (Three White Columns) */}
      <div className="max-w-7xl mx-auto py-28 px-6">
        <div className="grid md:grid-cols-3 gap-0 border border-zinc-100 rounded-sm shadow-sm">
          
          {/* VISIT US CARD */}
          <div className="info-card group p-12 text-center border-b md:border-b-0 md:border-r border-zinc-100 transition-all duration-500 hover:shadow-xl hover:z-10 bg-white">
            <div className="mb-8 flex justify-center">
              <div className="text-yellow-600 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L4 9v12h5v-7h6v7h5V9l-8-6z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-extrabold text-zinc-800 uppercase tracking-widest mb-6">VISIT US</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 min-h-[60px]">
              H 94, C Block, TNHB, Green Park Avenue, <br />
              Salem - 7, Tamil Nadu, India
            </p>
            <p className="text-yellow-600 font-black text-sm tracking-widest uppercase">
              Salem, Tamil Nadu, IN
            </p>
          </div>

          {/* CALL US CARD */}
          <div className="info-card group p-12 text-center border-b md:border-b-0 md:border-r border-zinc-100 transition-all duration-500 hover:shadow-xl hover:z-10 bg-white">
            <div className="mb-8 flex justify-center">
              <div className="text-yellow-600 transform group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-extrabold text-zinc-800 uppercase tracking-widest mb-6">CALL US</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 min-h-[60px]">
              Our engineering team is available for <br /> project enquiries and discussions.
            </p>
            <div className="text-yellow-600 font-black text-sm tracking-widest flex flex-col gap-1">
              <span>+91 94432 55192</span>
              <span>+91 94425 15091</span>
            </div>
          </div>

          {/* CONTACT US (EMAIL) CARD */}
          <div className="info-card group p-12 text-center transition-all duration-500 hover:shadow-xl hover:z-10 bg-white">
            <div className="mb-8 flex justify-center">
              <div className="text-yellow-600 transform group-hover:-translate-y-2 transition-transform duration-300">
                <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-extrabold text-zinc-800 uppercase tracking-widest mb-6">CONTACT US</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 min-h-[60px]">
              For business partnerships and strategic inquiries, email us directly.
            </p>
            <p className="text-yellow-600 font-black text-sm tracking-widest lowercase">
              rmcompany1948@gmail.com
            </p>
          </div>

        </div>
      </div>

      {/* 3. MAP SECTION (Grayscale to Color) */}
      <div className="w-full h-[500px] bg-zinc-200 relative grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
        <iframe 
          title="RM and Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125061.38556754025!2d78.07922442436173!3d11.648873087053531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1bb59411ebb%3A0x1493997bed5c67c!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* 4. MINIMAL SOCIAL FOOTER */}
      <div className="bg-zinc-950 py-16 flex flex-col items-center">
        <div className="flex justify-center gap-8 mb-8">
          {['facebook', 'twitter', 'google', 'pinterest', 'instagram'].map((social) => (
            <button 
              key={social}
              className="w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center text-zinc-400 hover:bg-[#FF5722] hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <div className="w-5 h-5 bg-current rounded-full" /> {/* Placeholder for icons */}
            </button>
          ))}
        </div>
        <p className="text-zinc-600 text-[10px] uppercase tracking-[0.4em] font-bold">
          RM and Company © 1948 — 2026 
        </p>
      </div>
    </div>
  );
};

export default ContactPageMimic;