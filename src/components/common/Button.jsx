import ArrowIcon from "../../assets/icon/arrow.svg";
const Button = ({ title }) => {
  return (
    

    <button className="bg-gradient-to-r from-[#CE22E0]  to-[#E0403B] font-bold hover:to-[#880496] text-white inline-flex items-center gap-1 px-5 py-3 rounded-md">
      {title}
      <span>
        <img className="h-5 w-5" src={ArrowIcon} alt="Arrow" />
      </span>
    </button>
  );
};

export default Button;
