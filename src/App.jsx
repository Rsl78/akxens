import BestResultSection from "./components/BestResult/BestResultSection";
import Blog from "./components/Blog/Blog";
import ContactMeSection from "./components/ContactUs/ContactMeSection";
import CustomDevelopmentSection from "./components/CustomDevelopmetSection/CustomDevelopmentSection";
import Expertise from "./components/Expertise/Expertise";
import Industries from "./components/Expertise/Industries";
import Footer from "./components/footer/Footer";
import Hero from "./components/heroSection/Hero";
import HowWeBuild from "./components/HowWeBuild/HowWeBuild";
import Navbar from "./components/Navbar/Navbar";
import ProjectShowcase from "./components/ProjectShowCase/ProjectShowCase";
import ServiceWeProvideSection from "./components/serviceWeProvide/ServiceWeProvideSection";
import Testimonial from "./components/TestimonialSection/Testimonial";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import CardScrollAnimation from "./components/About/CardScrollAnimation";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CustomDevelopmentSection />
      <div className="bg-[#F5F5FB]">
        <div className="max-w-[1350px] mx-auto ">
          <Expertise />
          <ServiceWeProvideSection />
        </div>
        <Industries />
        <ProjectShowcase/>
        <div className="max-w-[1350px] mx-auto">
          <BestResultSection />
          <HowWeBuild />
          <Blog />
          <ContactMeSection />
        </div>
        <TestimonialSection/>
        <Testimonial/>
        <div className="max-w-[1350px] mx-auto">
        <CardScrollAnimation/>
        </div>
        <Footer />
      </div>
      <div className="container mx-auto"></div>
    </>
  );
};

export default App;
