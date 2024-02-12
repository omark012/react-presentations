import React, { useState, useEffect } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      // let { mouseX, mouseY } = [event.clientX, event.clientY];

      // These values indicate the position of mouse pointer on screen along X & Y axis
      let mouseX = event.clientX;
      let mouseY = event.clientY;
      console.log(mouseX, mouseY);

      // finding the center of the screen by window.innerWidth/2 & window.innerHeight/2

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
      setRotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden ">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/3 flex items-center text-white justify-between">
          <div className="eye-1 w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-[#f4f4f4]">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <p className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] uppercase text-xl">
                Eye
              </p>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="eye-2 w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-[#f4f4f4]">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <p className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] uppercase text-xl">
                Eye
              </p>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line rotate-[50deg] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
