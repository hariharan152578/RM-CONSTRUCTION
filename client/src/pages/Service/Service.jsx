import React, { useState, useEffect } from 'react';
import ServiceHero from './Section/ServiceHero';
import ServiceList from './Section/ServiceList';
import ExecutionCapabilities from './Section/ExecutionCapabilities';
import OtherVentures from './Section/OtherVentures';


const Service = ({ isFinished }) => {
  return (
    <main className="bg-[#F9F7F2] min-h-screen overflow-hidden">
      <ServiceHero isFinished={isFinished} />
      <ServiceList isFinished={isFinished} />
      <ExecutionCapabilities isFinished={isFinished} />
      <OtherVentures isFinished={isFinished} />
    </main>
  );
};

export default Service;