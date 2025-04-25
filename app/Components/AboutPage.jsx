import React from "react";

const AboutPage = () => {
  return (
    <div id="about" className="px-6 md:px-16 min-h-[100dvh]">
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
            src="https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/471270892_1735936640313368_6666737061056396940_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFpvDfxpsRuC588YkiFOBLFVBEaOWBHz8JUERo5YEfPwga2ALnm1TvrTyJJcPD3PwuFTxNvGw9vcXXZVvb3nfDt&_nc_ohc=iuc3De6-Fh0Q7kNvwH4Ygek&_nc_oc=AdlUFpLPdaFgcCUe3e5RMxxMyTxnwYWMpowJPaWu47Vrw9GwWdC_9_R9_SXYT9fZQtZjr28ULwI4ydJyZDKpFccG&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=tmUdelkyUlFeTFpsuF3MdA&oh=00_AfFMEXvwXpuw4W8r-RwyGEsFvn5pfbJXHpi4nuFyW2EhAg&oe=68112D67"
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
    </div>
  );
};

export default AboutPage;
