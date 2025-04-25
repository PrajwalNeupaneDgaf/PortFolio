"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const arr = [
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Experience",
      path: "#experience",
    },
    {
      name: "Projects",
      path: "#projects",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];

  const [isShown, setisShown] = useState(false);
  return (
    <nav className="flex justify-between px-6 md:px-8  lg;px-24 max-w-[80rem] mx-auto py-8 items-center z-40">
      <Link
        href={"/"}
        className=" text-[1.6rem] md:text-[1.8rem] lg:text-[2.1rem] font-[HeadFont] text-gray-900 cursor-pointer select-none"
      >
        Prajwal Neupane
      </Link>
      <nav className="hidden md:flex flex-row justify-center items-center">
        {arr.map((itm, idx) => {
          return (
            <Link
              href={itm.path}
              key={idx}
              className="font-[HeadFont] text-gray-700 text-xl hover:text-gray-600 transition-all duration-100 py-2 px-4 delay-100 origin-top hover:border-b-2 hover:border-solid hover:border-gray-500"
            >
              {itm?.name}
            </Link>
          );
        })}
      </nav>
      <button className="md:hidden block">
        <Menu
          onClick={() => {
            setisShown(true);
          }}
          size={"2.1rem"}
          className="text-gray-700 active:text-gray-500 transition-all duration-150 cursor-pointer active:scale-[.6]"
        />
      </button>
      {isShown && (
        <div className="md:hidden block fixed z-50 top-0 bottom-0 right-0 w-[21rem] max-w-[70vw] bg-white shadow-xl">
          <div className="flex justify-end items-end p-2 pt-4 pr-4 ">
            <X
              onClick={() => {
                setisShown(false);
              }}
              size={"2.2rem"}
              fontWeight={700}
              className="cursor-pointer active:scale-[.7] text-gray-700 active:text-gray-500 font-extrabold"
            />
          </div>
          <nav className="flex flex-col gap-6 p-6">
            {arr.map((itm, idx) => {
              return (
                <Link
                  onClick={() => {
                    setisShown(false);
                  }}
                  href={itm.path}
                  key={idx}
                  className="font-[HeadFont] text-gray-600 hover:text-gray-500 text-[1.3rem]"
                >
                  {itm?.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
