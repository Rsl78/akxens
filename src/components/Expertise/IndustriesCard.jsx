import Icon from "../../assets/icon/locationDark.svg";

const IndustriesCard = () => {
  return (
    <div className="group rounded-2xl border border-gray-300 bg-white w-80 flex-shrink-0">
      <div className="relative">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl w-full h-auto"
        />
        {/* Icon overlay at the top right of the image */}
        <div className="absolute top-3 right-3">
          <img src={Icon} alt="icon" className="w-6 h-6" />
        </div>
        {/* Title overlay remains at the bottom left */}
        <h3 className="absolute bottom-2 left-2 text-white text-xl font-bold bg-opacity-50 px-2 py-1 rounded group-hover:text-[#F9A61A]">
          Industry Title
        </h3>
      </div>
      <div className="p-4">
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          neque blanditiis architecto adipisci debitis repudiandae recusandae,
          fugiat natus eius non.
        </p>
      </div>
    </div>
  );
};

export default IndustriesCard;
