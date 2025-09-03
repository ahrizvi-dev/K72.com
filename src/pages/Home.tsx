import React from "react";
import Video from "../components/home/Video";
import HomeTopText from "../components/home/HomeTopText";
import HomeBottomText from "../components/home/HomeBottomText";

const Home = () => {
  return (
    <div>
      <div className="fixed h-screen w-screen bg-red-700">
        <Video />
      </div>

      <div className="relative h-screen w-screen flex flex-col justify-between">
        <HomeTopText/>
        <HomeBottomText/>
      </div>
    </div>
  );
};

export default Home;
