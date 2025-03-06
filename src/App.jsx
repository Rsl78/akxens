// import AboutUs from "./components/AboutUs";
// import ContactUs from "./components/ContactUs";
// import Footer from "./components/Footer";
import BestResultSection from "./components/BestResult/BestResultSection";
import Hero from "./components/heroSection/Hero";
import Navbar from "./components/Navbar";
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
        </div>
      </div>
      
  

      <div className="container mx-auto"></div>
    </>
  );
};

export default App;
