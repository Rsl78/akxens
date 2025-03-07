import PropTypes from "prop-types";
import Logo from "../../assets/logoBlack.svg";
import Img from "../../assets/img/HowWeBuild.webp";
import QuoteIcon from "../../assets/icon/quote.svg";

const TestimonialCard = ({ bgColor = "bg-red-300" }) => {
  return (
    <div
      className={`group rounded-2xl shadow ${bgColor} text-black w-120 h-96 flex-shrink-0 p-10`}
    >
      <div className="">
        <img className="w-30 " src={Logo} alt="" />
      </div>

      <div className="flex items-start space-x-3">
        <img className="w-20 h-auto" src={QuoteIcon} alt="" />
        <p className="text-gray-800 leading-relaxed">
          Amazing team towork with! I have collaborated with team on multiple
          projects and they have always delivered on time and with high quality.
          They Provide great communication and are always available to answer
          any questions. I highly recommend them for any project.
        </p>
      </div>

      <div className="flex items-center mt-5 gap-3">
        <img className="h-10 w-10 rounded-sm" src={Img} alt="" />
        <div>
          <h3 className="font-bold text-lg">John Doe</h3>
          <p className="font-bold text-sm">CEO- Company Name</p>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  bgColor: PropTypes.string,
};

export default TestimonialCard;
