import React from 'react'
import AboutHero from './Section/AboutHero'
import AboutAbout from './Section/AboutAbout'
import AboutLeaders from './Section/AboutLeaders'
import AboutPillars from './Section/AboutPillars'

export const About = ({ isFinished }) => { // Accept the prop here
  return (
    <div className="w-full">
      <AboutHero isFinished={isFinished} />
      <AboutAbout isFinished={isFinished} />
      <AboutLeaders isFinished={isFinished} />
      <AboutPillars isFinished={isFinished} />
    </div>
  )
}