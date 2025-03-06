import BridgeIcon from "../../assets/icon/bridge.svg";
import AmericanExpressLogo from "../../assets/logo/american-express.svg";
import MultiverseLogo from "../../assets/logo/multiverse.svg";
import WholeFoodMarketLogo from "../../assets/logo/whole-foods-market.svg";
import StarbucksLogo from "../../assets/logo/starbucks.svg";
import MarsLogo from "../../assets/logo/mars.svg";
import HiltonLogo from "../../assets/logo/hilton.svg";
import ChemtreatLogo from "../../assets/logo/chemtreat.svg";

import bgVideo from "../../assets/video/bg.mp4";

import Card from "./Card";

const Hero = () => {
  const cardData = [
    {
      title: "Staff Augmentation",
      description: "Enabling your team to reach project goals.",
    },
    {
      title: "Custom Software Development",
      description: "Build software tailored to your business",
    },
    {
      title: "AI development",
      description: "Get expert advice to make informed decisions",
    },
  ];
  return (
    <div className="hero relative min-h-screen hero-section mb-5">
      <video
        src={bgVideo}
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      <div className="hero-content flex w-full h-full justify-start  items-start">
        <div>
          <div className="pb-2 mt-12 lg:mt-20">
            <p className="inline-flex items-center text-white px-3 py-0.5 gap-3  border rounded-full">
              <img className="h-6" src={BridgeIcon} alt="" />
              <span>
                Based in <span className="font-bold">Silicon Valley</span>.
                Operate <span className="font-bold">worldwide</span>
              </span>
            </p>
          </div>
          <h1 className="pb-7 text-xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-bold">
            Empower your business <br /> with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FAA818] via-[#E0403B] to-[#CE22E0]">
              top-class software development
            </span>{" "}
          </h1>

          <div className="absolute bottom-0 left-0 right-0">
            {/* Card */}
            <div className="max-w-[1350px] mx-auto gap-1 lg:gap-4 grid grid-cols-1 lg:grid-cols-3  mb-26 lg:mb-25 px-2 lg:px-0">
              {cardData.map((data, index) => (
                <Card
                  key={index}
                  title={data.title}
                  description={data.description}
                />
              ))}
            </div>

            {/* logo */}

            <div className="hero-overlay bg-black/20 backdrop-blur-md h-25 lg:h-18 absolute bottom-0 left-0 right-0 flex items-center">
              <div className="flex flex-col lg:flex-row justify-between items-center max-w-[1350px] mx-auto w-full">
                <h1 className="text-white text-sm font-semibold leading-tight lg:max-w-30">
                  TRUSTED BY LEADING BRANDS AND STARTUPS
                </h1>
                <div className="flex  overflow-x-auto whitespace-nowrap no-scrollbar">
                  <img src={AmericanExpressLogo} alt="" />
                  <img src={MultiverseLogo} alt="" />
                  <img src={WholeFoodMarketLogo} alt="" />
                  <img src={StarbucksLogo} alt="" />
                  <img src={MarsLogo} alt="" />
                  <img src={HiltonLogo} alt="" />
                  <img src={ChemtreatLogo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
