import {  useState } from "react";
import PropTypes from "prop-types";

import LinkedInIcon from "../../assets/icon/linkedinDark.svg";
import FacebookIcon from "../../assets/icon/facebookDark.svg";
import InstagramIcon from "../../assets/icon/instagramDark.svg";

const icons = [
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    href: "",
  },
  {
    icon: InstagramIcon,
    label: "instagram",
    href: "",
  },
  {
    icon: FacebookIcon,
    label: "facebook",
    href: "",
  },
];

const IconCircle = ({ icon, isActive, onHover }) => {
  return (
    <a
      href={icon.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onHover}
      className="group inline-block"
    >
      <div
        className={`flex items-center h-11 border-3  rounded-full transition-all duration-300 overflow-hidden ${
          isActive ? "w-30" : "w-11"
        }`}
      >
        <div className="flex-shrink-0  pr-1 flex items-center justify-center w-11 h-11 ">
          <img
            src={icon.icon}
            alt={icon.label}
            className="w-8 h-8 p-1"
          />
        </div>
        <span
          className={` font-bold text-sm  transition-all duration-300 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          {icon.label}
        </span>
      </div>
    </a>
  );
};

const IconLine = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex items-center pt-3 space-x-4">
      {icons.map((icon, index) => (
        <IconCircle
          key={index}
          icon={icon}
          isActive={activeIndex === index}
          onHover={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

IconCircle.propTypes = {
  icon: PropTypes.object,
  isActive: PropTypes.bool,
  onHover: PropTypes.func,
};
export default IconLine;
