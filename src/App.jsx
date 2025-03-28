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
// import CardScrollAnimation from "./components/About/CardScrollAnimation";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <CustomDevelopmentSection />
      <div className="bg-[#F5F5FB] ">
        <ScrollIconLine baseVelocity={5} direction="topToBottom" />
        <div className="max-w-[1350px] mx-auto ">
          <BestResultSection />
          <HowWeBuild />
        </div>
        <ScrollIconLine baseVelocity={-5} direction="bottomToTop" />
        <Industries />
        <ProjectShowcase />
        <div className="max-w-[1350px] mx-auto">
          <Blog />
          <ContactMeSection />
        </div>
        <TestimonialSection />
        {/* <CardScrollAnimation/> */}

        <Footer />
      </div>
      <div className="container mx-auto"></div>
    </>
  );
};

export default App;
