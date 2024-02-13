import React from "react";

const Cards = () => {
  return (
    <div className=" w-full h-auto md:h-screen grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-5 md:gap-5 md:px-20">
      <div className="cardContainer h-[50vh]">
        <div className="card relative flex items-center justify-center rounded-xl h-full bg-[#004d43]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="logo here"
          />
          <button className="px-4 py-1 absolute bottom-[20px] left-[20px] rounded-full text-[#cdea68] border-[1px] border-[#cdea68] ">
            ©2019–2022
          </button>
        </div>
      </div>
      <div className="cardContainer grid grid-cols-1 md:grid-cols-2 items-center gap-10 h-[100vh] md:gap-5 md:h-[50vh]">
        <div className="card relative flex items-center justify-center rounded-xl h-full bg-[#192826]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="logo here"
          />
          <button className="px-4 py-1 absolute bottom-[20px] left-[20px] rounded-full text-[#f1f1f1] border-[1px] border-[#f1f1f1] ">
            Rating 5.0 on Clutch
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl h-full bg-[#192826]">
          <img
            width={70}
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="logo here"
          />
          <button className="px-4 py-1 absolute bottom-[20px] left-[20px] rounded-full text-[#f1f1f1] border-[1px] border-[#f1f1f1] ">
            Business Bootcamp Alumni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
