import Img1 from "../../assets/img/s3.svg";
import ArrowIcon from "../../assets/icon/arrow.svg";

const ServiceCard = () => {
  return (
    // Make the entire card a "group" to detect hover state
    <div className="group flex bg-white    rounded-2xl overflow-hidden">
      {/* Left side content with "slide up" on hover */}
      <div className="relative w-[65%] pt-10 pb-1 pl-8 transition-all duration-300 group-hover:-translate-y-3">
        <h2 className="card-title text-xl font-bold pb-3">
          Staff Augmentation
        </h2>
        <p className="text-sm text-[#6B7280]">
          We provide skilled engineers or dedicated teams tailored to your
          project, seamlessly aligning with your goals and company culture. Our
          experts work closely with you, becoming an integral part of your team.
        </p>

        {/* Tags */}
        <div className="flex gap-1 flex-wrap">
          <div className="bg-[#F9F9F9] px-2 py-0.5 rounded-full text-xs font-semibold mt-3">
            Cultural Fit
          </div>
          <div className="bg-[#F9F9F9] px-2 py-0.5 rounded-full text-xs font-semibold mt-3">
            Top 1%
          </div>
          <div className="bg-[#F9F9F9] px-2 py-0.5 rounded-full text-xs font-semibold mt-3">
            Instat hire
          </div>
        </div>

        {/* Button: hidden by default, slides up on hover */}
        <button
          className="
            bg-[#1C1D2E] hover:bg-[#424351] text-white inline-flex items-center gap-1 px-3 py-1 rounded-md mt-3
            opacity-0 translate-y-4
            transition-all duration-300
            group-hover:opacity-100 group-hover:translate-y-0
          "
        >
          Let&apos;s Chat
          <span>
            <img className="h-5 w-5" src={ArrowIcon} alt="Arrow" />
          </span>
        </button>
      </div>

      {/* Right side content (image) with zoom on hover */}
      <div className="w-[35%] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <img className="max-w-full h-auto" src={Img1} alt="Movie" />
      </div>
    </div>
  );
};

export default ServiceCard;
