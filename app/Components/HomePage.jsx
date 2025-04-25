import { Github, Instagram } from "lucide-react";

const HomePage = () => {
  return (
    <div className="h-[82dvh]  flex justify-center gap-6 md:gap-12 items-center flex-col lg:flex-row pb-8">
      <div className="flex justify-center items-center">
        <img
          src="https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/476838704_1768094380430927_7439476772954011060_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFEziTqjMma5Vod5VQaq1EL1dOVukguv77V05W6SC6_vg0Q-UflAMOeIPUZHRL20OYdSSySdDpvk-IuLwfGcjPH&_nc_ohc=CjkBX4Z1AvAQ7kNvwGGHcWu&_nc_oc=AdmalhMKxaHfcY_omus_4Dzt_rDHwHgqly5Zfkj1TYnPBTc2VT_964s2gvTw5yzxHCIqaOOLZy_TP6x_htXLrEYJ&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=h2hOxYxMKSDmuNmkK9TkTQ&oh=00_AfEmfubaV2iUCVGKBqEUyKZZDJXU3YLChYbLiEHeITfEwQ&oe=68112BD6"
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
          <button className="cursor-pointer p-3 border border-solid border-gray-700 rounded-2xl w-[10rem] my-3 hover:scale-[0.9] transition-all duration-200 font-semibold text-gray-100 bg-gray-600"> Contact Info</button>
        </div>
        <div  className="flex flex-row gap-2 justify-center items-center">
         <button className="bg-[black] cursor-pointer text-gray-200 p-[.55rem] rounded-full"> <Github/></button>
          <button className="bg-[black] cursor-pointer text-gray-200 p-[.55rem] rounded-full"><Instagram/></button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
