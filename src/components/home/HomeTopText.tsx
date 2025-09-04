import React from "react";
import Video from "./Video";

const HomeTopText = () => {
  return (
    <div className="text-white font-[font300] text-center">
      <div className="text-[10vw] leading-[10vw] uppercase">Wébsité</div>
      <div className="text-[10vw] leading-[10vw] uppercase flex justify-center items-center">
        F
        <div className="h-[7vw] w-[15vw] rounded-full overflow-hidden shadow-[0_1px_5px_#D3FD50]">
          <Video />
        </div>
        r anmation
      </div>
      <div className="text-[10vw] leading-[10vw] uppercase">Practicé</div>
      <div className=" flex justify-end pr-4 mt-8">
        <h3 className="w-[60vw] md:w-[15vw] text-start font-[font300] ">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This practice website is built to explore creativity through
          animation. Not just for today, but as a skill that grows tomorrow, in
          five months, and in five years. We look for the spark that turns
          simple practice into inspiration.
        </h3>
      </div>
    </div>
  );
};

export default HomeTopText;
