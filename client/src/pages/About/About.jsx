import React from 'react'
import AboutHero from './Section/AboutHero'
import AboutAbout from './Section/AboutAbout'

export const About = ({ isFinished }) => { // Accept the prop here
  return (
    <div className="w-full">
      <AboutHero isFinished={isFinished} />
      <AboutAbout isFinished={isFinished} />
    </div>
  )
}