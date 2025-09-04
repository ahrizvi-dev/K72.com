import React, { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString(); // e.g. 10:25:30 PM
      setTime(formatted);
    };

    updateTime(); // initial call
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:flex md:items-end  md:gap-[15rem]">
      <div className="flex justify-start items-center pl-4 gap-2 text-white pb-4">
        <Globe /> {time} 2025 Pakistan
      </div>
      <div className="text-white flex gap-12 ">
        <Link to={"/projects"} className="text-[4vw] font-[font500] border-2 border-white px-8 rounded-full uppercase leading-tight">
          Projects
        </Link>
        <Link to={"/agence"} className="text-[4vw] font-[font500] border-2 border-white px-8  rounded-full uppercase leading-tight">
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
