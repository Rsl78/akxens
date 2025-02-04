import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ServiceSection from "./components/ServiceSection";
// import TransformationSolutionSection from "./components/TransformationSolutionSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mx-auto px-3 md:px-0">
        <AboutUs/>
        {/* <TransformationSolutionSection/> */}
        <ServiceSection/>

      </div>
        <Footer />
  
      <div className="container mx-auto"></div>
    </>
  );
};

export default App;
