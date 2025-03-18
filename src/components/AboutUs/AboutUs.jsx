import Button from "../common/Button";
import AboutUsCard from "./AboutUsCard";

const AboutUs = () => {
  return (
    <div className="bg-[#0D161A]   text-white pt-25 pb-5 md:pb-10">
      {/* Top section */}
      <div className="w-full text-center">
        <h2 className="text-4xl  font-bold pb-10">
          How we build the <br />software development process
        </h2>
      </div>
      {/* <div className="flex flex-col lg:flex-row max-w-[1350px] mx-auto gap-2 px-4 sm:px-5">
        <div className="lg:w-[45%] font-bold text-4xl sm:text-5xl pb-5">
          How we build the software development process
        </div>
        <div className="lg:w-[55%] space-y-6">
          <p className="text-lg">
            We’ll turn your custom tech solutions into powerful brands by
            crafting unique customer experiences at every digital touchpoint
            with:
          </p>
        </div>
      </div> */}
      <hr className="mx-2 xl:mx-[calc((100vw-1350px)/2)] border-0 h-[1px] bg-gray-800" />

      {/* Bottom section */}
      <div className="w-full px-4 sm:px-8 bg-[#0D161A]">
        <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-7 border-gray-300">
          {/* Left column: text + button */}
          <div className="col-span-1 lg:col-span-2 border-b lg:border-b-0 lg:border-r border-gray-800 p-4">
            <p className="py-10 text-base sm:text-lg">
              Akxens is your one-stop software development company, offering a
              full range of services for all industries. We drive your business
              progress with smart tech decisions tailored to a specific field.
            </p>
            <Button title="Learn More" />
          </div>

          {/* Right column: responsive grid of cards */}
          <div className="col-span-1 lg:col-span-5 pt-10 lg:pt-15 px-4 sm:px-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <AboutUsCard />
              <AboutUsCard />
              <AboutUsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
