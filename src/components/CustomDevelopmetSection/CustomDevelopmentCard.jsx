import MobileAppIconWhite from "../../assets/icon/mobileAppWhite.svg";
import MobileAppColorIcon from "../../assets/icon/mobileAppColor.svg";

const CustomDevelopmentCard = () => {
  return (
    // border-transparent
    // <div className="group max-w-90 p-5 text-white border rounded-tr-[100px] "
    // >
    // {/* <div className="group max-w-90 p-5 border-t-3 border-l-2 border-r-2  border-transparent hover:border-t-3 hover:border-l-2 hover:border-r-2 hover:rounded-tl-xl hover:rounded-tr-[100px] hover:rounded-bl-lg hover:rounded-br-lg hover:border-[#2F80ED] text-white  "> */}
    //   {/* Title row */}
    //   <div className="flex items-center space-x-4 mb-1">
    //     {/* Default icon (visible when not hovered) */}
    //     <img
    //       className="h-10 w-10 group-hover:hidden"
    //       src={MobileAppIconWhite}
    //       alt=""
    //     />
    //     {/* Icon shown on hover */}
    //     <img
    //       className="h-10 w-10 hidden group-hover:block"
    //       src={MobileAppColorIcon}
    //       alt=""
    //     />
    //     <h1 className="font-bold text-xl">Mobile App Development</h1>
    //   </div>

    //   {/* "Thin–fat–thin" glow line */}
    //   <div className="ml-10 mb-5">
    //     <div
    //       style={{
    //         width: "70px",
    //         height: "2px",
    //         background: `
    //       radial-gradient(
    //         ellipse at center,
    //         #2F80ED 20%,
    //         rgba(249, 164, 27, 0) 90%
    //       )
    //     `,
    //       }}
    //     />
    //   </div>

    //   {/* Description text */}
    //   <div className="text-sm">
    //     Experience greater customer engagement and scalability with top-rated
    //     cross-platform mobile app development services.
    //   </div>
    // </div>

    <div className="group relative max-w-90">
      {/* Outer wrapper simulating the gradient border */}
      <div
        className="relative px-[1.5px] pt-[4px] rounded-tl-xl rounded-tr-[100px] rounded-bl-lg rounded-br-lg 
      bg-transparent transition-colors duration-300 
      group-hover:bg-gradient-to-r group-hover:from-[#667eea] group-hover:to-[#764ba2] "
      >
        {/* Inner card with same rounded corners */}
        <div className="relative z-10 p-5 bg-[#0D161A] rounded-tl-xl rounded-tr-[100px] rounded-bl-lg rounded-br-lg text-white">
          {/* Title row */}
          <div className="flex items-center space-x-4 mb-1">
            <img
              className="h-10 w-10 group-hover:hidden"
              src={MobileAppIconWhite}
              alt=""
            />
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
                background: `radial-gradient(
              ellipse at center,
              #2F80ED 20%,
              rgba(249, 164, 27, 0) 90%
            )`,
              }}
            />
          </div>

          {/* Description */}
          <div className="text-sm">
            Experience greater customer engagement and scalability with
            top-rated cross-platform mobile app development services.
          </div>
        </div>

        {/* Bottom cover to hide the gradient border on the bottom */}
        <div
          className="absolute bottom-0 left-0 right-0  bg-[#0D161A] 
      rounded-bl-lg rounded-br-lg pointer-events-none"
        />
      </div>
    </div>
  );
};

export default CustomDevelopmentCard;
