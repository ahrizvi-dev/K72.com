import Video from "../components/home/Video";
import HomeTopText from "../components/home/HomeTopText";
import HomeBottomText from "../components/home/HomeBottomText";

const Home = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="fixed h-screen w-screen ">
        <Video />
      </div>

      <div className="relative h-screen w-screen flex flex-col justify-end md:flex md:flex-col md:justify-between gap-4">
        <HomeTopText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
