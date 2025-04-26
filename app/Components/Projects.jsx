import Link from "next/link";
import GoBelow from "./GoBelow";

const Projects = () => {
  return (
    <div
      id="projects"
      className="px-6 md:px-16 min-h-[100dvh] relative pb-12"
    >
      <div className="text-center py-6">
        <h4 className="text-md font-normal text-gray-600">Browse My Recent</h4>
        <h1 className="font-[HeadFont1] text-[2.8rem] text-gray-950 py-1">
          Projects
        </h1>
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center pt-3">
        <ProjectCard Image={'/Social.webp'} Name={'The Social Media'} PLink={"https://parrotp1.netlify.app/"} Github={"https://github.com/PrajwalNeupaneDgaf"}/>
        <ProjectCard Image={'/AskAi.webp'} Name={'Chatgpt Remake'} PLink={"https://askhomeworkai.netlify.app/"} Github={"https://github.com/PrajwalNeupaneDgaf"}/>
        <ProjectCard Image={'/Poets.webp'} Name={'Poet Hub'} PLink={"https://mypoems.netlify.app"} Github={"https://github.com/PrajwalNeupaneDgaf"}/>
       
      </div>
      <GoBelow link={"#contact"}/>
    </div>
  );
};

export default Projects;


const ProjectCard = ({Image,Name,Github,PLink})=>{
    return(
        <div className="max-w-[21rem] w-[100vw] border p-4 border-solid border-gray-600 rounded-xl min-h-[26rem]">
            <div className="w-full overflow-hidden h-[20rem] rounded-3xl">
                <img src={Image} alt="Project Image"  className="h-full w-full object-cover bg-gray-500"/>
            </div>
            <div className="flex flex-col justify-center items-center pt-4">
                <h1 className="font-[HeadFont] text-[1.3rem] font-bold text-gray-900">
                    {Name}
                </h1>
                <div className="w-full flex justify-between px-6 py-3">
                    <Link target="_blank" href={Github} className="font-semibold hover:bg-gray-700 hover:text-gray-100 transition-all duration-200 hover:border-gray-700 p-3 w-[7.6rem] flex justify-center items-center border border-solid border-black rounded-2xl">
                    Github
                    </Link>
                    <Link target="_blank" href={PLink} className="font-semibold hover:bg-gray-700 hover:text-gray-100 transition-all duration-200 hover:border-gray-700 p-3 w-[7.6rem] flex justify-center items-center border border-solid border-black rounded-2xl">
                    View Live
                    </Link>
                </div>
            </div>
        </div>
    )
}