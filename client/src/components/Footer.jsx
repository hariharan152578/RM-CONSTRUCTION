import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HomeFooter = () => {
  const footerRef = useRef();

  useGSAP(() => {
    // Reveal animation: Footer appears to be uncovered
    gsap.fromTo(".footer-content", 
      { y: -100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        ease: "power4.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        }
      }
    );

    // Staggered links reveal
    gsap.fromTo(".footer-link-col", 
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="relative bg-zinc-950 text-white pt-24 pb-12 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      
      <div className="footer-content max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand & Credential Column */}
          <div className="lg:col-span-5 footer-link-col">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">
              RM AND <span className="text-yellow-500 italic font-light">COMPANY</span>
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed max-w-sm mb-8">
              A Class I PWD & Highways Engineering firm dedicated to building the future of Tamil Nadu through disciplined execution and technical mastery.
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Class I PWD Licensed</span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2 footer-link-col">
            <h4 className="text-yellow-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-zinc-400 font-light">
              <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Projects</li>
              <li className="hover:text-white transition-colors cursor-pointer">Services</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          <div className="lg:col-span-2 footer-link-col">
            <h4 className="text-yellow-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Expertise</h4>
            <ul className="space-y-4 text-sm text-zinc-400 font-light">
              <li>Highways</li>
              <li>Bridge Engineering</li>
              <li>Drainage Systems</li>
              <li>Civil Infrastructure</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 footer-link-col">
            <h4 className="text-yellow-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Get In Touch</h4>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] text-zinc-500 uppercase mb-1">Office Address</p>
                <p className="text-sm font-light text-zinc-300">
                  Headquarters, Tamil Nadu, India
                </p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase mb-1">Inquiries</p>
                <p className="text-sm font-light text-zinc-300 hover:text-yellow-500 transition-colors cursor-pointer">
                  contact@rmandcompany.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[10px] uppercase tracking-widest">
            © 2026 RM and Company. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-zinc-600 text-[10px] uppercase tracking-widest hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-zinc-600 text-[10px] uppercase tracking-widest hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Large Watermark Text */}
      <div className="absolute bottom-[-20%] left-0 w-full text-center text-white/[0.02] text-[20vw] font-bold pointer-events-none select-none">
        RM & CO
      </div>
    </footer>
  );
};

export default HomeFooter;