import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OurPrograms from "./components/OurPrograms";
import Overview from "./components/Overview";
import RegisterHere from "./components/RegisterHere/RegisterHere";
import Slider from "./components/Slider";
import Venue from "./components/Venue/Venue";
import WatchVideo from "./components/WatchVideo";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer/Footer";

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
      <Accordion />
      <Venue />
      <ContactUs />
      <Footer />
    </>
  );
};
export default Home;
