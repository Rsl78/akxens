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
import ServiceWeProvideSection from "./components/serviceWeProvide/ServiceWeProvideSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";

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
        <div className="max-w-[1350px] mx-auto">
          <BestResultSection />
          <HowWeBuild />
          <Blog />
          <ContactMeSection />
        </div>
        <TestimonialSection/>
        <Footer />
      </div>
      <div className="container mx-auto"></div>
    </>
  );
};

export default App;
