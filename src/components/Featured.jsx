import { motion, useAnimation } from "framer-motion";
import React from "react";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ display: "block" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ display: "none" });
  };

  return (
    <div className="w-full py-20">
      <div className=" px-5 md:px-20 ">
        <h1 className="text-4xl font-['Neue_Montreal'] tracking-tight md:text-5xl">
          Featured projects
        </h1>
      </div>

      {/* Cards */}
      <div className="cards relative grid md:grid-cols-2 gap-16 border-t-[1px] border-zinc-700 mt-14 py-14 px-5 md:px-20 md:gap-10">
        <motion.div
          className="card-1 w-full h-auto rounded-xl cursor-pointer   overflow-hidden"
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
        >
          <h1 className="heading absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex font-['Neue_Montreal']  uppercase text-8xl leading-none font-semibold tracking-tighter z-[9] text-[#cdea68] ">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ display: "none" }}
                animate={cards[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <img
            className="w-full h-full bg-cover"
            src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
            alt="picture here"
          />
        </motion.div>
        <motion.div
          className="card-2 w-full h-auto border-[1px] border-zinc-800 rounded-xl cursor-pointer   overflow-hidden"
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
        >
          <h1 className="heading absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex font-['Neue_Montreal']  uppercase text-8xl leading-none font-semibold tracking-tighter z-[9] text-[#cdea68] ">
            {"VISE".split("").map((item, index) => (
              <motion.span
                initial={{ display: "none" }}
                animate={cards[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <img
            className="w-full h-full bg-cover"
            src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
            alt="picture here"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Featured;

<div className="cards grid md:grid-cols-2 gap-10 border-t-[1px] border-zinc-700 mt-14 py-14 px-20">
  <div className="card h-[80vh] bg-red-600 rounded-xl overflow-hidden">
    <img
      className="w-full h-full bg-cover"
      src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
      alt="Picture here"
    />
  </div>

  <div className="card h-[80vh] bg-red-600 rounded-xl overflow-hidden">
    <img
      className="w-full h-full bg-cover"
      src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
      alt="Picture here"
    />
  </div>
</div>;
