import React from 'react'
import { TextShimmer } from './textshimmer'
 import { WordPullUp } from './WordPullUp'

export const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen  bg-gradient-to-r from-zinc-800 to-gray-400">
  <div className="text-center text-white  px-6 md:px-12">
    <TextShimmer
    as='h1'
    duration={1.5}
    className="text-5xl md:text-6xl font-bold tracking-tight mb-4 p-6">
      
      Rifky Ahamed
   
    </TextShimmer>

     <WordPullUp className="text-xl font-medium tracking-wide text-black dark:text-white md:text-2xl md:leading-tight"
      words="MERN Stack Developer | Cybersecurity Enthusiast"
    /> 
     <WordPullUp className="text-xl font-medium tracking-wide text-black dark:text-white md:text-2xl md:leading-tight"
      words="Building Scalable, Secure, and Performant Web Applications"
    /> 
  
    {/* <p className="text-lg md:text-3xl font-light leading-relaxed max-w-2xl mx-auto">
      MERN Stack Developer | Cybersecurity Enthusiast  
      <br />
      <span className="text-gray-300">
        Building Scalable, Secure, and Performant Web Applications
      </span>
    </p> */}
  </div>
</div>

  )
}
