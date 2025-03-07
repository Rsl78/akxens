import MobileAppIcon from "../../assets/icon/mobileApp.svg";
import MobileAppColorIcon from "../../assets/icon/mobileAppColor.svg";

const CustomDevelopmentCard = () => {
  return (
    <div className="group w-95 p-5 border-t-3 border-l-2 border-r-2 border-transparent hover:border-t-3 hover:border-l-2 hover:border-r-2 hover:rounded-tl-xl hover:rounded-tr-[100px] hover:rounded-bl-lg hover:rounded-br-lg hover:border-[#F9A41B]">
      {/* Title row */}
      <div className="flex items-center space-x-4 mb-1">
        {/* Default icon (visible when not hovered) */}
        <img
          className="h-10 w-10 group-hover:hidden"
          src={MobileAppIcon}
          alt=""
        />
        {/* Icon shown on hover */}
        <img
          className="h-10 w-10 hidden group-hover:block"
          src={MobileAppColorIcon}
          alt=""
        />
        <h1 className="font-bold text-xl">Mobile App Development</h1>
      </div>

      {/* "Thin–fat–thin" glow line */}
      <div className="ml-10 mb-5">
        <div
          style={{
            width: "70px",
            height: "2px",
            background: `
          radial-gradient(
            ellipse at center,
            rgba(249, 164, 27, 1) 20%,
            rgba(249, 164, 27, 0) 90%
          )
        `,
          }}
        />
      </div>

      {/* Description text */}
      <div className="text-sm">
        Experience greater customer engagement and scalability with top-rated
        cross-platform mobile app development services.
      </div>
    </div>
  );
};

export default CustomDevelopmentCard;
