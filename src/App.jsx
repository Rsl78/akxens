import BestResultSection from "./components/BestResult/BestResultSection";
import ContactMeSection from "./components/ContactUs/ContactMeSection";
import Expertise from "./components/Expertise/Expertise";
import Industries from "./components/Expertise/Industries";
import Footer from "./components/footer/Footer";
import Hero from "./components/heroSection/Hero";
import HowWeBuild from "./components/HowWeBuild/HowWeBuild";
import Navbar from "./components/Navbar/Navbar";
import ServiceWeProvideSection from "./components/serviceWeProvide/ServiceWeProvideSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="bg-[#F5F5FB]">
        <div className="max-w-[1350px] mx-auto ">
          <ServiceWeProvideSection />
          <Expertise />
          <BestResultSection />
          <HowWeBuild />
          <ContactMeSection />
        </div>
        <div className="max-w-[1350px] mx-auto"></div>
        <Industries />
        <Footer />
      </div>
      <div className="container mx-auto"></div>
    </>
  );
};

export default App;
