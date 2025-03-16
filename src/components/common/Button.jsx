import ArrowIcon from "../../assets/icon/arrow.svg";
import PropTypes from "prop-types";

const Button = ({ title }) => {
  return (
    <button className="bg-gradient-to-r from-[#2F80ED] via-[#9B51E0] to-[#E0403B] font-bold hover:to-[#9B51E0] text-white inline-flex items-center gap-1 px-4 py-2 rounded-md">
      {title}
      <span>
        <img className="h-5 w-5" src={ArrowIcon} alt="Arrow" />
      </span>
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
