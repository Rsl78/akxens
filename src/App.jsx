import BestResultSection from "./components/BestResult/BestResultSection";
import Blog from "./components/Blog/Blog";
import ContactMeSection from "./components/ContactUs/ContactMeSection";
import CustomDevelopmentSection from "./components/CustomDevelopmetSection/CustomDevelopmentSection";
// import Expertise from "./components/Expertise/Expertise";
import Industries from "./components/Expertise/Industries";
import Footer from "./components/footer/Footer";
import Hero from "./components/heroSection/Hero";
import HowWeBuild from "./components/HowWeBuild/HowWeBuild";
import Navbar from "./components/Navbar/Navbar";
import ProjectShowcase from "./components/ProjectShowCase/ProjectShowCase";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";

import ScrollIconLine from "./components/ScrollLine/ScrollIconLine";
import AboutUs from "./components/AboutUs/AboutUs";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <CustomDevelopmentSection />
      <div className="bg-[#F5F5FB]">
        <div className="max-w-[1350px] mx-auto ">
          <ScrollIconLine baseVelocity={5} />
          <BestResultSection />
          <HowWeBuild />
          <ScrollIconLine baseVelocity={-5} />
        </div>
        <Industries />
        <ProjectShowcase />
        <div className="max-w-[1350px] mx-auto">
          <Blog />
          <ContactMeSection />
        </div>
        <TestimonialSection />

        <Footer />
      </div>
      <div className="container mx-auto"></div>
    </>
  );
};

export default App;
