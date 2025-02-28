import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { TextShimmer } from "./textshimmer";
import { WordPullUp } from "./WordPullUp";
import { ShootingStars } from "./shooting"; // Assuming this is the correct import path

export const Home = () => {
  return (
    <div className="relative h-screen w-screen">
      {/* Shooting Stars Animation */}
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#FF0099"
        trailColor="#FFB800"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <ShootingStars
        starColor="#00FF9E"
        trailColor="#00B8FF"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />

      {/* Stars Background */}
      {/* <div className="absolute inset-0 stars opacity-50 z-0"> */}
        {/* Main Content */}
        <div className="stars relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 md:px-12">
          {/* Shimmer effect on name */}
          <TextShimmer
            as="h1"
            duration={1.5}
            className="text-9xl md:text-6xl font-bold tracking-tight mb-4 p-6"
          >
            Rifky Ahamed
          </TextShimmer>

          {/* Pull-up effect for professional title */}
          <WordPullUp
            className="text-xl font-medium tracking-wide text-black dark:text-white md:text-2xl md:leading-tight"
            words="MERN Stack Developer | Cybersecurity Enthusiast"
          />

          {/* Pull-up effect for description */}
          <WordPullUp
            className="text-xl font-medium tracking-wide text-black dark:text-white md:text-2xl md:leading-tight"
            words="Building Scalable, Secure, and Performant Web Applications"
          />

          <div className="relative inline-flex group mt-16">
            {/* Gradient Background */}
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

            {/* Button with GitHub Icon and Text */}
            <a
              href="https://github.com/your-github-profile" // Update with your GitHub URL
              title="Star Me on Github"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" /> ⭐ Star Me On
              Github
            </a>
          </div>
        </div>
      </div>
    // </div>
  );
};
