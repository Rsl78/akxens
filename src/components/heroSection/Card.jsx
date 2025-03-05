import AiIcon from "../../assets/icon/ai.svg";
import ArrowIcon from "../../assets/icon/arrow.svg";
import PropTypes from "prop-types";


const Card = ({title, description}) => {
    const words = title.split(" ");
    const half = Math.ceil(words.length / 2);
    const firstHalf = words.slice(0, half).join(" ");
    const secondHalf = words.slice(half).join(" ");
  return (
    <div className="text-white h-70 w-[440px] bg-white/10 backdrop-blur-md p-7 rounded-xl flex flex-col justify-between">
      <div>
        <h2 className="font-bold text-xl pb-3">
          {firstHalf}
          <br />
          {secondHalf}
        </h2>
        <p className="text-m">{description}</p>
      </div>

      <div className="flex justify-between items-center pt-5">
        <img className="h-20" src={AiIcon} alt="" />

        <div className="bg-white/20 p-1 rounded-full">
          <img className="h-7" src={ArrowIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Card;
