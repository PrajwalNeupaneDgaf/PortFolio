import { Github, Instagram } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="h-[82dvh]  flex justify-center gap-6 md:gap-12 items-center flex-col lg:flex-row pb-8">
      <div className="flex justify-center items-center">
        <img
          src="/Home.jpg"
          alt="Error Image"
          className=" h-64 w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 border-solid border-2 border-gray-400 rounded-full"
        />
      </div>
      <div className=" flex justify-center flex-col items-center text-center font-[HeadFont]">
        <h3 className="text-md font-semibold text-gray-700 font-[HeadFont]">Hello, i'm</h3>
        <h1 className="text-[2.1rem] md:text-[2.5rem] text-gray-950 font-bold">Prajwal Neupane</h1>
        <h2 className="text-[1.2rem] font-semibold text-gray-800">FullStack Developer</h2>
        <div className="flex flex-row gap-2 justify-center items-center">
          <button className="cursor-pointer p-3 border border-solid border-gray-700 rounded-2xl w-[10rem] my-3 hover:scale-[0.9] transition-all duration-200 font-semibold hover:bg-gray-600 hover:text-gray-100 origin-bottom-right">Download CV</button>
          <Link href={"#contact"} className="cursor-pointer p-3 border border-solid border-gray-700 rounded-2xl w-[10rem] my-3 hover:scale-[0.9] transition-all duration-200 font-semibold text-gray-100 bg-gray-600"> Contact Info</Link>
        </div>
        <div  className="flex flex-row gap-2 justify-center items-center">
         <Link href={'https://github.com/PrajwalNeupaneDgaf'} target="_blank" className="bg-[black] cursor-pointer text-gray-200 p-[.55rem] rounded-full"> <Github/></Link>
          <Link href={'https://www.instagram.com/the.prajwalll/?__pwa=1'} target="_blank" className="bg-[black] cursor-pointer text-gray-200 p-[.55rem] rounded-full"><Instagram/></Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
