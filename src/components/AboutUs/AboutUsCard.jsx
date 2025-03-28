import DiagonalArrowIcon from "../../assets/icon/diagonalArrowDark.svg";

const AboutUsCard = () => {
  return (
    <div className="px-5 py-4 space-y-3 ">
      <div className="space-y-1">
        <h2 className="font-medium text-xl sm:text-2xl">Experience</h2>
        <hr className="border-gray-700" />
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-4xl sm:text-5xl">25+</h1>
        <img
          className="h-10 w-10"
          src={DiagonalArrowIcon}
          alt="Diagonal Arrow Icon"
        />
      </div>
      <p className="leading-relaxed text-sm">
        Years of active, market driven experience under our belt.
      </p>
    </div>
  );
};

export default AboutUsCard;
