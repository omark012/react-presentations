import React from "react";

const Featured = () => {
  return (
    <div className="w-full py-20">
      <div className=" px-20 ">
        <h1 className="text-5xl font-['Neue_Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>

      <div className="cards relative grid md:grid-cols-2 gap-10 border-t-[1px] border-zinc-700 mt-14 py-14 px-20">
        <div className="cardContainer h-[80vh] rounded-xl overflow-hidden">
          <div className="card w-full h-full ">
            {/* <h1 className="heading font-['Neue_Montreal'] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] uppercase text-8xl leading-none font-semibold tracking-tighter z-[9] text-[#cdea68] ">
              {"FYDE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1> */}
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt="picture here"
            />
          </div>
        </div>
        <div className="cardContainer border-[1px] border-zinc-800 h-[80vh] rounded-xl overflow-hidden">
          <div className="card w-full h-full ">
            <h1 className="heading font-['Neue_Montreal'] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] uppercase text-8xl leading-none font-semibold tracking-tighter z-[9] text-[#cdea68] ">
              {"VISE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>

            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt="picture here"
            />
          </div>
        </div>
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
