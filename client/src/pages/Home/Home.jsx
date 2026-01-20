import React from 'react';
import HomeHero from './Section/HomeHero';
import HomeAbout from './Section/HomeAbout';
import HomeServices from './Section/HomeServices';
import HomeFeatures from './Section/HomeFeatures';
export const Home = () => {
  return (
    <div className="w-full">
      <HomeHero />
      <HomeAbout/> 
      <HomeServices/>
      <HomeFeatures/> 
    </div>
  );
};