import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Home } from '../pages/Home/Home';
import IllustratedCraneLoader from '../components/Loader';
import HomeFooter from '../components/Footer';
import { About } from '../pages/About/About';

const PageWrapper = ({ title }) => (
  <div className="min-h-screen pt-32 flex flex-col items-center justify-center bg-[#F9F7F2] text-stone-900">
    <h1 className="text-5xl font-black uppercase tracking-tighter text-center">
      {title}
    </h1>
    <div className="mt-4 w-20 h-1 bg-[#8B5E3C]"></div>
  </div>
);

const MainLayout = () => {
  const [finished, setFinished] = useState(false);
  const [shouldRenderContent, setShouldRenderContent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // 1. Reset states on every path change
    setFinished(false);
    setShouldRenderContent(false);
    
    // 2. Immediate scroll to top
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // 3. Effect to trigger content mounting only after animation finishes
  useEffect(() => {
    if (finished) {
      setShouldRenderContent(true);
    }
  }, [finished]);

  return (
    <div className="relative w-full bg-[#F9F7F2] min-h-screen selection:bg-[#8B5E3C] selection:text-white">
      
      {/* Loader always mounts with a new key on route change */}
      {!finished && (
        <IllustratedCraneLoader 
          key={location.pathname} 
          setFinished={setFinished} 
        />
      )}

      <Navbar />

      {/* Logic: We only render the <main> block when shouldRenderContent is true.
          This prevents the "Home" or "About" page from starting their logic/animations
          while the crane is still moving.
      */}
      {shouldRenderContent && (
        <main className={`w-full transition-opacity duration-1000 opacity-100`}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/projects" element={<PageWrapper title="Our Projects" />} />
            <Route path="/services" element={<PageWrapper title="Our Services" />} />
            <Route path="/gallery" element={<PageWrapper title="Gallery" />} />
            <Route path="/contact" element={<PageWrapper title="Contact Us" />} />
          </Routes>
          <HomeFooter/>
        </main>
      )}
    </div>
  );
};

export default MainLayout;