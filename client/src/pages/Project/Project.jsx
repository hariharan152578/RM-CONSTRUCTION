import React from 'react'
import ProjectHero from './Section/ProjectHero'
import ProjectCategories from './Section/ProjectCategories'
import ProjectMajorWorks from './Section/ProjectMajorWorks'
export const Project = ({ isFinished }) => { 
  return (
    <div className="w-full bg-zinc-950">
      {/* Passing isFinished to ensure animations sync with your loader */}
      <ProjectHero isFinished={isFinished} />
      <ProjectCategories isFinished={isFinished} />
      <ProjectMajorWorks isFinished={isFinished} />
    </div>
  )
}