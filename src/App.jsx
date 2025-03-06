// import AboutUs from "./components/AboutUs";
// import ContactUs from "./components/ContactUs";
// import Footer from "./components/Footer";
import BestResultSection from "./components/BestResult/BestResultSection";
import Footer from "./components/footer/Footer";
import Hero from "./components/heroSection/Hero";
import HowWeBuild from "./components/HowWeBuild/HowWeBuild";
import Navbar from "./components/Navbar/Navbar";
import ServiceWeProvideSection from "./components/serviceWeProvide/ServiceWeProvideSection";
// import ServiceSection from "./components/ServiceSection";
// import TransformationSolutionSection from "./components/TransformationSolutionSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* bg-[#F5F5FB] */}
      <div className="bg-[#F5F5FB]">
        <div className="max-w-[1350px] mx-auto ">
          <ServiceWeProvideSection />
          <BestResultSection />
          <HowWeBuild/>
        </div>
          <Footer/>
      </div>
      
  

      <div className="container mx-auto"></div>
    </>
  );
};

export default App;
