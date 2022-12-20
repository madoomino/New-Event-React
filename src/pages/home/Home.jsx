import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OurPrograms from "./components/OurPrograms";
import Overview from "./components/Overview";
import RegisterHere from "./components/RegisterHere/RegisterHere";
import Slider from "./components/Slider";
import WatchVideo from "./components/WatchVideo";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Overview />
      <WatchVideo />
      <Slider />
      <OurPrograms />
      <RegisterHere />
    </>
  );
};
export default Home;
