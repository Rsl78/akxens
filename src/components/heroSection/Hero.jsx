import BridgeIcon from "../../assets/icon/bridge.svg";
import Card from "./Card";

const Hero = () => {
  const cardData = [
    {
      title: "Staff Augmentation",
      description: "Enabling your team to reach project goals."
    },
    {
      title: "Custom Software Development",
      description: "Build software tailored to your business"
    },
    {
      title: "AI development",
      description: "Get expert advice to make informed decisions"
    },
  ]
    return (
      <>
        <div
          className="hero relative min-h-screen hero-section mb-5"
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content flex items-start justify-start ">
            <div>
              <div className="pb-2">
                <p className="text-white flex pl-2 py-0.5 gap-1 max-w-[35%] border rounded-full">
                  <span>
                    <img className="h-6" src={BridgeIcon} alt="" />
                  </span>{" "}
                  Based in <span className="font-bold">Silicon Valley</span>.
                  operate <span className="font-bold">worldwide</span>{" "}
                </p>
              </div>
              <h1 className="pb-7 text-6xl text-white font-bold">
                Empower your business <br /> with{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FAA818] via-[#E0403B] to-[#CE22E0]">
                  top-class software development
                </span>{" "}
              </h1>

              {/* Card */}
              <div className="w-full  gap-4 grid grid-cols-3">
                {cardData.map((data, index) => (
                  <Card
                    key={index}
                    title={data.title}
                    description={data.description}
                  />
                ))}
              </div>

              {/* logo */}

              <div className="hero-overlay bg-white/10 backdrop-blur-md h-18 absolute bottom-0 left-0 right-0 flex items-center">
                <div className="flex justify-between items-center max-w-[1350px] mx-auto w-full">
                  <h1 className="text-white text-sm font-semibold leading-tight max-w-30">
                    TRUSTED BY LEADING BRANDS AND STARTUPS
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="hero-content text-neutral-content min-w-[90%] border ">
            <div className="max-w-full border">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div> */}
        </div>
      </>
    );
};

export default Hero;