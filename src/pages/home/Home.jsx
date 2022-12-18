import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Overview />
    </>
  );
};
export default Home;
