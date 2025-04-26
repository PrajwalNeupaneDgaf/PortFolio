import React from "react";
import GoBelow from "./GoBelow";
import { BadgeCheck } from "lucide-react";

const Experience = () => {
  const frontend = [
    { Tool: "React.js", Level: "Experienced" },
    { Tool: "Next.js", Level: "Intermediate" },
    { Tool: "Context API", Level: "Intermediate" },
    { Tool: "Tailwind CSS", Level: "Experienced" },
    { Tool: "Chakra UI", Level: "Intermediate" },
    { Tool: "Vite", Level: "Experienced" },
    { Tool: "Framer", Level: "Intermediate" },
    { Tool: "Zustand", Level: "Intermediate" },
  ];

  const Backend = [
    { Tool: "Node.js", Level: "Experienced" },
    { Tool: "Express.js", Level: "Experienced" },
    { Tool: "Socket.io", Level: "Intermediate" },
    { Tool: "MongoDB", Level: "Experienced" },
    { Tool: "Mongoose", Level: "Intermediate" },
    { Tool: "Prisma", Level: "Intermediate" },
    { Tool: "PostgreSQL", Level: "Intermediate" },
  ];
  return (
    <div id="experience" className="px-6 md:px-16 min-h-[100dvh] relative pb-12">
      <div className="text-center py-6">
        <h4 className="text-md font-normal text-gray-600">Explore My</h4>
        <h1 className="font-[HeadFont1] text-[2.8rem] text-gray-950 py-1">
          Experience
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:pt-12 gap-5">
        <div className="border border-solid border-gray-700 rounded-xl  p-4 md:p-6 min-w-[21rem] w-full">
          <h1 className="font-[HeadFont] font-bold text-[1.3rem] md:text-[1.55rem] text-center w-full text-gray-700">
            Frontend Development
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 p-4 justify-center gap-2 items-center">
            {frontend.map((itm, idx) => {
              return <Details key={idx} Tool={itm.Tool} Level={itm.Level} />;
            })}
          </div>
        </div>
        <div className="border border-solid border-gray-700 rounded-xl  p-4 md:p-6 min-w-[21rem] w-full">
          <h1 className="font-[HeadFont] font-bold text-[1.3rem] md:text-[1.55rem] text-center w-full text-gray-700">
            Backend Development
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 p-4 justify-center gap-2 items-center">
            {Backend.map((itm, idx) => {
              return <Details key={idx} Tool={itm.Tool} Level={itm.Level} />;
            })}
          </div>
        </div>
      </div>
      <GoBelow link={"#projects"} />
    </div>
  );
};

export default Experience;

const Details = ({ Tool, Level }) => {
  return (
    <div className="flex flex-row gap-3">
      <button className="">
        <BadgeCheck size={"1.7rem"} strokeWidth={"3px"} />
      </button>
      <div className="flex flex-col">
        <h3 className="font-bold text-lg">{Tool}</h3>
        <p className="font-light text-gray-600 text-sm">{Level}</p>
      </div>
    </div>
  );
};
