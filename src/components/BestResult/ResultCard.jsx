import PropTypes from "prop-types";

const ResultCard = ({ card }) => {
  const { rotateClass, bgColor, title, description, icon } = card;
  const words = title.split(" ");
  const half = Math.floor(words.length / 2);
  const firstHalf = words.slice(0, half).join(" ");
  const secondHalf = words.slice(half).join(" ");
  return (
    <div
      className={`text-white shadow-md p-10 h-70 rounded-xl ${rotateClass} hover:rotate-0 transition-transform duration-300 ${bgColor}`}
    >
      <img className="pb-4" src={icon} alt="" />
      <h2 className="text-2xl font-bold pb-4">{firstHalf} <br /> {secondHalf}</h2>
      <p className="mt-2">{description}</p>
    </div>
  );
};

ResultCard.propTypes = {
  card: PropTypes.object,
};

export default ResultCard;
