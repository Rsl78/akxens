import HealthCareIcon from "../../assets/icon/HealthCare.svg";
import FinanceIcon from "../../assets/icon/Finance.svg";
import TechnologyIcon from "../../assets/icon/Technology.svg";
import RetailIcon from "../../assets/icon/Retail.svg";
import SaaSIcon from "../../assets/icon/SaaS.svg";
import BusinessIcon from "../../assets/icon/BusinessService.svg";
import MediaIcon from "../../assets/icon/Media.svg";
import ArtificialIcon from "../../assets/icon/Artificial.svg";

const Expertise = () => {
  return (
    <div className="py-10 px-2 md:px-0">
      <h1 className="text-4xl font-bold text-center ">
        Our Expertise for Your Success
      </h1>
      <p className="text-center text-lg pt-5">
        Using powerful, industry-specific software solutions, our team can help
        you achieve your business goals.
      </p>

      {/* Outer container for horizontal scroll */}
      <div className="overflow-x-auto whitespace-nowrap px-4 no-scrollbar pt-12 py-20">
        {/* Inner flex container; flex-nowrap keeps items in one row */}
        <div className="flex flex-nowrap gap-10 justify-start items-start">
          {/* Each item is flex-none so it won't shrink off-screen; 
              a fixed or min-width ensures consistent spacing */}
          <div className="flex-none w-36 flex flex-col items-center">
            <img src={HealthCareIcon} alt="Healthcare" className="mb-2" />
            <h2 className="font-semibold">Healthcare</h2>
          </div>

          <div className="flex-none w-36 flex flex-col items-center">
            <img src={FinanceIcon} alt="Finance" className="mb-2" />
            <h2 className="font-semibold">Finance</h2>
          </div>

          <div className="flex-none w-36 flex flex-col items-center">
            <img src={TechnologyIcon} alt="Technology" className="mb-2" />
            <h2 className="font-semibold">Technology</h2>
          </div>

          <div className="flex-none w-36 flex flex-col items-center">
            <img src={RetailIcon} alt="Retail & E-commerce" className="mb-2" />
            <h2 className="font-semibold text-center">
              Retail &amp;
              <br />
              E-commerce
            </h2>
          </div>

          <div className="flex-none w-36 flex flex-col items-center">
            <img src={SaaSIcon} alt="SaaS" className="mb-2" />
            <h2 className="font-semibold">SaaS</h2>
          </div>

          <div className="flex-none w-36 flex flex-col items-center">
            <img src={BusinessIcon} alt="Business Services" className="mb-2" />
            <h2 className="font-semibold">Business Services</h2>
          </div>

          <div className="flex-none w-36 flex flex-col items-center">
            <img src={MediaIcon} alt="Media & Entertainment" className="mb-2" />
            <h2 className="font-semibold text-center">
              Media &amp;
              <br />
              Entertainment
            </h2>
          </div>

          <div className="flex-none w-36 flex flex-col items-center">
            <img src={ArtificialIcon} alt="AI" className="mb-2" />
            <h2 className="font-semibold">AI</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
