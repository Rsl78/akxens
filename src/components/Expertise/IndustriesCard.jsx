import Icon from "../../assets/icon/locationDark.svg";
import DiagonalArrowIcon from "../../assets/icon/diagonalArrow.svg";

const IndustriesCard = () => {
  return (
    <div className="group rounded-2xl shadow bg-white text-black w-85 flex-shrink-0">
      {/* Apply rounded-2xl on the container with overflow-hidden */}
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="w-full h-auto transition-transform duration-800 group-hover:scale-110"
        />
        {/* Dark overlay appears on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition duration-500"></div>
        {/* Icon overlay at the top right */}
        <div className="absolute top-3 right-3">
          <img src={Icon} alt="icon" className="w-6 h-6" />
        </div>
        {/* Title overlay remains at the bottom left */}
        <h3 className="absolute bottom-2 left-3 text-white text-xl font-bold bg-opacity-50 px-2 py-1 rounded group-hover:text-[#F9A61A]">
          Industry Title
        </h3>
      </div>
      <div className="px-5 pt-5 pb-4">
        <p className="text-sm text-gray-800">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          neque blanditiis architecto adipisci debitis repudiandae recusandae,
          fugiat natus eius non.
        </p>
      </div>

      <div className="pl-5 pb-6 text-sm font-semibold flex items-center gap-5">
        <p>LEARN MORE</p>
        <img className="h-7 w-7 border border-amber-600 group-hover:bg-amber-600 p-1 rounded-full" src={DiagonalArrowIcon} alt="" />
      </div>
    </div>
  );
};

export default IndustriesCard;
