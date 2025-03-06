

const ResultCard = ({ card }) => {
  const { rotateClass, bgColor, title, description } = card;
  return (
    <div
      className={`text-white shadow-md p-4 h-80 rounded-xl ${rotateClass} hover:rotate-0 transition-transform duration-300 ${bgColor}`}
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default ResultCard;