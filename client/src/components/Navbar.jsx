import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Construction', href: '/' },
    { name: 'About', href: '/About' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contacts', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full top-0 left-0 z-[100] transition-all duration-700 ${
        scrolled 
          ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/10' 
          : 'py-10 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-white/5 rounded-full backdrop-blur-md border border-white/20 group-hover:rotate-90 transition-transform duration-700"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.6)]"></div>
            </div>
            <div className="flex flex-col">
                <h1 className="text-xl font-black text-white tracking-tighter uppercase italic leading-none">
                  RM<span className="text-yellow-500">SITE</span>
                </h1>
                <span className="text-[7px] text-zinc-500 uppercase tracking-[0.3em] mt-1 font-bold">Premium Build</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center bg-white/[0.03] border border-white/10 backdrop-blur-md px-8 py-2.5 rounded-full space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[10px] uppercase tracking-[0.25em] transition-all duration-300 font-bold relative group ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-yellow-500"></span>
                  )}
                  {!isActive && (
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/50 transition-all duration-300 group-hover:w-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md text-white"
            >
              <span className={`h-[1px] bg-current transition-all duration-300 ${isOpen ? 'w-5 rotate-45 translate-y-[3.5px]' : 'w-5'}`}></span>
              <span className={`h-[1px] bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-3'}`}></span>
              <span className={`h-[1px] bg-current transition-all duration-300 ${isOpen ? 'w-5 -rotate-45 -translate-y-[3px]' : 'w-5'}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-zinc-950/95 backdrop-blur-2xl border-l border-white/10 transform transition-transform duration-500 ease-in-out md:hidden z-[101] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-12 space-y-8 pt-32">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-bold transition-colors tracking-[0.3em] uppercase border-b border-white/5 pb-4 ${
                location.pathname === link.href ? 'text-yellow-500' : 'text-zinc-300 hover:text-yellow-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;