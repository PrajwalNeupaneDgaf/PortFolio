import Link from "next/link";
import GoBelow from "./GoBelow";
import { Instagram, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="px-6 md:px-16 min-h-[70dvh] relative">
      <div className="text-center py-6">
        <h4 className="text-md font-normal text-gray-600">Get in Touch</h4>
        <h1 className="font-[HeadFont1] text-[2.8rem] text-gray-950 py-1">
          Contact Me
        </h1>
      </div>

      <div className="flex justify-center items-center py-8">
        <div className="flex flex-col gap-4 md:flex-row min-w-[20rem] max-w-[41rem] my-auto p-2 py-6 px-8 border rounded-2xl border-solid border-gray-800">
          <Link
            target="_blank"
            href={"https://www.instagram.com/the.prajwalll/?__pwa=1"}
            className="flex flex-row gap-1 justify-center items-center"
          >
            <Instagram />
            <span className="font-[HeadFont] text-gray-800 py-1  text-lg hover:border-gray-700 hover:border-b-2 transition-all duration-200 hover:text-gray-700 hover:border-solid">
              {" "}
              Prajwal Neupane
            </span>
          </Link>
          <Link
            target="_blank"
            href={"mailto:sirprajwalneupane@gmail.com"}
            className="flex flex-row gap-1 justify-center items-center"
          >
            <Mail />
            <span className="font-[HeadFont] text-gray-800 py-1  text-lg hover:border-gray-700 hover:border-b-2 transition-all duration-200 hover:text-gray-700 hover:border-solid">
              {" "}
              sirprajwalneupane@gmail.com
            </span>
          </Link>
        </div>
      </div>
      <div className="pt-6 text-center w-full font-[HeadFont] text-lg text-gray-700">
      Copyright © 2025 Prajwal Neupane. All Rights Reserved.
      </div>
      <GoBelow link={"#"} isUpward={true} />
    </div>
  );
};

export default Contact;
