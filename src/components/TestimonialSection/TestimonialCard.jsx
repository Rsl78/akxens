import PropTypes from "prop-types";
import Logo from "../../assets/logoBlack.svg";
import Img from "../../assets/img/HowWeBuild.webp";
import QuoteIcon from "../../assets/icon/quote.svg";
const TestimonialCard = ({ bgColor = "bg-[#FFE060]" }) => {
  return (
    <div
      className={`group rounded-xl shadow ${bgColor} text-black  flex-shrink-0 px-10 py-8`}
    >
      <div className="">
        <img className=" w-30 pb-6" src={Logo} alt="" />
      </div>

      <div
        className="flex items-start space-x-3 bg-contain bg-no-repeat  bg-left-top"
        style={{
          backgroundImage: `url("${QuoteIcon}")`,
          backgroundSize: "40px 40px",
          backgroundPosition: "0px -10px",
        }}
      >
        {/* <img className="w-20 h-auto bg-[url(QuoteIcon})]" src={QuoteIcon} alt="" /> */}
        <p
          className="text-zinc-950 leading-relaxed  indent-9 font-medium
"
        >
          Amazing team towork with! I have collaborated with team on multiple
          projects and they have always delivered on time and with high quality.
          They Provide great communication and are always available to answer
          any questions. I highly recommend them for any project.
        </p>
      </div>

      <div className="flex items-center mt-5 gap-3">
        <img className="h-10 w-10  rounded-full" src={Img} alt="" />
        <div>
          <h3 className="text-xl font-bold text-zinc-950">John Doe</h3>
          <p className="font-semibold text-sm text-zinc-800 ">
            CEO- Company Name
          </p>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  bgColor: PropTypes.string,
};

export default TestimonialCard;
