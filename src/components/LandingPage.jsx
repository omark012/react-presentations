import { motion } from "framer-motion";
import React from "react";
import { IoArrowUpOutline } from "react-icons/io5";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-52 px-20">
        {["We create", "Eye-opening", "Presentations"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex items-center">
              {index == 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "8vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                  className=" mr-[1vw] w-[8vw] h-full rounded-md overflow-hidden"
                >
                  <img
                    className="h-full w-full bg-cover"
                    src="https://images.unsplash.com/photo-1704230972956-21ec325a910d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </motion.div>
              )}
              <h1 className="leading-[6.3vw] uppercase font-['Founders_Grotesk'] text-[7.2vw] tracking-tighter font-medium flex items-center">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-[1px] mt-20 border-zinc-700 flex justify-between items-center py-3 px-20">
        {/* Creating 2 paragraph here */}
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}

        <div className="start-btn flex items-center gap-2 ">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full uppercase font-light text-sm">
            Start The Project
          </div>

          <div className="w-9 h-9 border-[1px] border-zinc-400 rounded-full flex items-center justify-center text-xl">
            <span className="rotate-[45deg]">
              <IoArrowUpOutline />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
