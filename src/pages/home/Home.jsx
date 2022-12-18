import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Slider from "./components/Slider/Slider";
import WatchVideo from "./components/WatchVideo/WatchVideo";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Overview />
      <WatchVideo />
      <Slider />
    </>
  );
};
export default Home;
