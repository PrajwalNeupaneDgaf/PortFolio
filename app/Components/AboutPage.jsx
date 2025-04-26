import React from "react";
import GoBelow from "./GoBelow";

const AboutPage = () => {
  return (
    <div id="about" className="px-6 md:px-16 min-h-[100dvh] relative pb-12">
      {/* Heading  */}
      <div className="text-center py-6">
        <h4 className="text-md font-normal text-gray-600">Get To Know More</h4>
        <h1 className="font-[HeadFont1] text-[2.8rem] text-gray-950 py-1">
          About Me
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-16 justify-center w-full md:pt-12 items-center">
        <div>
          <img
            src="/About.jpg"
            alt="About Prajwal Neupane"
            className="h-64 w-64  md:h-88 md:w-88 rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-5 justify-center items-center w-full lg:w-[60%]">
          <div className="flex md:flex-row flex-col w-full justify-between gap-6 items-center ">
            <div className="border border-solid p-4 px-5 border-gray-700 rounded-xl gap-1 w-full flex flex-col justify-center items-center">
              <h2 className="font-[HeadFont1] text-xl">Experience</h2>
              <h6 className="font-[HeadFont] text-gray-700">1 Years +</h6>
              <h6 className="font-[HeadFont] text-gray-700">
                Fullstack Developer
              </h6>
            </div>
            <div className="border border-solid p-4 px-5 border-gray-700 rounded-xl gap-2 w-full flex flex-col justify-center items-center">
              <h2 className="font-[HeadFont1] text-xl">Education</h2>
              <h6 className="font-[HeadFont] text-gray-700">Diploma in IT</h6>
              <h6 className="font-[HeadFont] text-gray-700">
                Mechinagar Polytechnic
              </h6>
            </div>
          </div>
          <p className="text-gray-600 font-light text-sm md:text-lg font-[HeadFont] text-justify">
          Hi, I’m Prajwal Neupane — a passionate full-stack developer with a love for building clean, responsive, and dynamic web apps. I specialize in Next.js, the MERN stack, and Tailwind CSS, turning ideas into fast, functional, and beautiful digital experiences. I’m always learning, always building, and always up for a challenge.
          </p>
        </div>
      </div>
      <GoBelow link={'#experience'}/>
    </div>
  );
};

export default AboutPage;
