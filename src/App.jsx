import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mx-auto">
        <AboutUs/>

      </div>
        <Footer />
  
      <div className="container mx-auto"></div>
    </>
  );
};

export default App;
