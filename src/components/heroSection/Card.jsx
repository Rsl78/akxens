import AiIcon from "../../assets/icon/ai.svg";
import ArrowIcon from "../../assets/icon/arrow.svg";
import PropTypes from "prop-types";


const Card = ({title, description}) => {
    const words = title.split(" ");
    const half = Math.ceil(words.length / 2);
    const firstHalf = words.slice(0, half).join(" ");
    const secondHalf = words.slice(half).join(" ");
  return (
    <div className="text-white  min-w-full xl:w-[440px] bg-black/20 backdrop-blur-md py-5  rounded-xl flex lg:flex-col justify-between ">
      

      <div className="flex items-center lg:flex-col gap-3 lg:gap-0">
        <div className="lg:hidden">
          <img className="h-20" src={AiIcon} alt="" />
        </div>
        <div>
          <h2 className="font-bold text-xl lg:pb-5">
            {firstHalf}
            <br />
            {secondHalf}
          </h2>
          <p className="text-m lg:pb-5">{description}</p>
        </div>
      </div>

      <div className="hidden lg:flex  justify-between px-10 items-center pt-5">
        <img className="h-20" src={AiIcon} alt="" />

        <div className="bg-white/20 p-1 rounded-full">
          <img className="h-7" src={ArrowIcon} alt="" />
        </div>
      </div>
      <div className="flex items-center lg:hidden justify-between pr-2 lg:pr-0">
        <div className="bg-white/20 w-8 h-8 flex items-center justify-center rounded-full">
          <img className="h-4 w-4" src={ArrowIcon} alt="" />
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
