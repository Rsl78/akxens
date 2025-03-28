import PropTypes from "prop-types";
import Img from "../../assets/img/HowWeBuild.webp";
import QuoteIcon from "../../assets/icon/quote.svg";
const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className={`group h-96 rounded-xl shadow ${testimonial.bgclass} flex flex-col  text-white justify-between flex-shrink-0 px-10 py-15 `}
    >
      <div className="">
        <img className=" w-30 pb-6" src={testimonial.logo} alt="" />
      </div>

      <div
        className="flex items-start space-x-3 bg-contain bg-no-repeat  bg-left-top text-white "
        style={{
          backgroundImage: `url("${QuoteIcon}")`,
          backgroundSize: "40px 40px",
          backgroundPosition: "0px -10px",
        }}
      >
        {/* <img className="w-20 h-auto bg-[url(QuoteIcon})]" src={QuoteIcon} alt="" /> */}
        <p
          className="text-white leading-relaxed  indent-9 font-medium max-w-[400px]
"
        >
          {testimonial.feedback}
        </p>
      </div>

      <div className="flex items-center mt-5 gap-3">
        <img className="h-10 w-10  rounded-full" src={Img} alt="" />
        <div>
          <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
          <p className="font-semibold text-sm text-white ">
           {testimonial.position} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );

};



TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    feedback: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    bgclass: PropTypes.string.isRequired,
  }).isRequired,
};

export default TestimonialCard;
