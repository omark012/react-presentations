import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]">
      <div className="text flex gap-[10vw] items-center whitespace-nowrap overflow-hidden border-t-[1px] border-b-[1px] border-zinc-300">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[15vw] leading-none font-[Founders_Grotesk ] uppercase font-semibold -pt-[1vw] -my-[1vw]"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[15vw] leading-none font-[Founders_Grotesk ] uppercase font-semibold -pt-[1vw] -my-[1vw]"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[15vw] leading-none font-[Founders_Grotesk ] uppercase font-semibold -pt-[1vw] -my-[1vw]"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[15vw] leading-none font-[Founders_Grotesk ] uppercase font-semibold -pt-[1vw] -my-[1vw]"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
