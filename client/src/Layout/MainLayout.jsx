// import React, { useState, useEffect } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import { Home } from '../pages/Home/Home';
// import IllustratedCraneLoader from '../components/Loader';
// import HomeFooter from '../components/Footer';
// import { About } from '../pages/About/About';
// import { Project } from '../pages/Project/Project';
// import Service from '../pages/Service/Service';
// import Gallery from '../pages/Gallery/Gallery';
// import Contact from '../pages/Contact/Contact';

// const PageWrapper = ({ title }) => (
//   <div className="min-h-screen pt-32 flex flex-col items-center justify-center bg-[#F9F7F2] text-stone-900">
//     <h1 className="text-5xl font-black uppercase tracking-tighter text-center">
//       {title}
//     </h1>
//     <div className="mt-4 w-20 h-1 bg-[#8B5E3C]"></div>
//   </div>
// );

// const MainLayout = () => {
//   const [finished, setFinished] = useState(false);
//   const [shouldRenderContent, setShouldRenderContent] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     // 1. Reset states on every path change
//     setFinished(false);
//     setShouldRenderContent(false);
    
//     // 2. Immediate scroll to top
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   // 3. Effect to trigger content mounting only after animation finishes
//   useEffect(() => {
//     if (finished) {
//       setShouldRenderContent(true);
//     }
//   }, [finished]);

//   return (
//     <div className="relative w-full bg-[#F9F7F2] min-h-screen selection:bg-[#8B5E3C] selection:text-white">
      
//       {/* Loader always mounts with a new key on route change */}
//       {!finished && (
//         <IllustratedCraneLoader 
//           key={location.pathname} 
//           setFinished={setFinished} 
//         />
//       )}

//       <Navbar />

//       {/* Logic: We only render the <main> block when shouldRenderContent is true.
//           This prevents the "Home" or "About" page from starting their logic/animations
//           while the crane is still moving.
//       */}
//       {shouldRenderContent && (
//         <main className={`w-full transition-opacity duration-1000 opacity-100`}>
//           <Routes location={location}>
//             <Route path="/" element={<Home />} />
//             <Route path="/About" element={<About />} />
//             <Route path="/projects" element={<Project/>} />
//             <Route path="/services" element={<Service/>} />
//             <Route path="/gallery" element={<Gallery/>} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//           <HomeFooter/>
//         </main>
//       )}
//     </div>
//   );
// };

// export default MainLayout;


import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Home } from '../pages/Home/Home';
import IllustratedCraneLoader from '../components/Loader'; // The Crane version
import IllustratedVehiclesLoader from '../components/VehicleLoad'; // The Vehicle version
import HomeFooter from '../components/Footer';
import { About } from '../pages/About/About';
import { Project } from '../pages/Project/Project';
import Service from '../pages/Service/Service';
import Gallery from '../pages/Gallery/Gallery';
import Contact from '../pages/Contact/Contact';

const PageWrapper = ({ title }) => (
  <div className="min-h-screen pt-32 flex flex-col items-center justify-center bg-[#F9F7F2] text-stone-900">
    <h1 className="text-5xl font-black uppercase tracking-tighter text-center">{title}</h1>
    <div className="mt-4 w-20 h-1 bg-[#8B5E3C]"></div>
  </div>
);

const MainLayout = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [finished, setFinished] = useState(false);
  const [shouldRenderContent, setShouldRenderContent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top and reset finish state on every route change
    window.scrollTo(0, 0);
    setFinished(false);
    setShouldRenderContent(false);
  }, [location.pathname]);

  useEffect(() => {
    if (finished) {
      // Once the loader finishes, we mark that first load is over
      if (isFirstLoad) setIsFirstLoad(false);
      setShouldRenderContent(true);
    }
  }, [finished, isFirstLoad]);

  return (
    <div className="relative w-full bg-[#F9F7F2] min-h-screen selection:bg-[#8B5E3C] selection:text-white">
      
      {/* LOGIC: 
          If isFirstLoad is true, use the Crane Loader.
          If isFirstLoad is false (subsequent navigation), use the Vehicle Loader.
      */}
      {!finished && (
        isFirstLoad ? (
          <IllustratedCraneLoader 
            key="initial-crane" 
            setFinished={setFinished} 
          />
        ) : (
          <IllustratedVehiclesLoader 
            key={location.pathname} 
            setFinished={setFinished} 
          />
        )
      )}

      <Navbar />

      {shouldRenderContent && (
        <main className="w-full transition-opacity duration-1000 opacity-100">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/services" element={<Service />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <HomeFooter/>
        </main>
      )}
    </div>
  );
};

export default MainLayout;