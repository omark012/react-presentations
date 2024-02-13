import React from "react";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <div className="w-full rounded-tl-2xl rounded-tr-2xl py-20 text-black bg-[#cdea68] font-['Neue_Montreal,Roboto,sans-serif']">
      <h1 className="text-[8vw] px-5 leading-[8vw] md:text-[4vw] md:px-20 md:leading-[4.5vw]  tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.{" "}
      </h1>

      <div className="px-5 grid grid-cols-1 md:grid-cols-2 gap-10 w-full border-t-[1px] pt-10 mt-12 border-[#98ac52] md:px-20 ">
        {/* Content */}
        <div className="space-y-8">
          <h1 className="text-5xl">Our approach:</h1>
          <button className="uppercase flex items-center justify-center gap-10 px-6 py-3 bg-zinc-900 rounded-full text-white">
            Read More <div className="h-2 w-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        {/* Image */}
        <div className="w-full h-auto lg:h-[70vh]">
          <img
            className="w-full h-full rounded-xl"
            src={aboutImg}
            alt="About Image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
