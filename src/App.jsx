import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/heroSection/Hero";
import Navbar from "./components/Navbar";
import ServiceSection from "./components/ServiceSection";
// import TransformationSolutionSection from "./components/TransformationSolutionSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container  mx-auto px-3 md:px-0">
        <AboutUs />
        {/* <TransformationSolutionSection/> */}
        <ServiceSection />
      </div>
      <ContactUs />
      <Footer />

      <div className="container mx-auto"></div>
    </>
  );
};

export default App;
