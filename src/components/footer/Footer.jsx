import  { useState } from "react";
import AkxensLogo from "../../assets/logoBlack.svg";
import LinkedInIcon from "../../assets/icon/linkedin.svg";
import FacebookIcon from "../../assets/icon/facebook.svg";
import InstagramIcon from "../../assets/icon/instagram.svg";

import LinkedInDarkIcon from "../../assets/icon/linkedinDark.svg";
import FacebookDarkIcon from "../../assets/icon/facebookDark.svg";
import InstagramDarkIcon from "../../assets/icon/instagramDark.svg";

const Footer = () => {
  // Track which section is currently expanded in mobile view
  const [activeSection, setActiveSection] = useState("");

  // Toggles the active section. If the same section is clicked again, close it.
  const handleToggle = (sectionName) => {
    setActiveSection((prev) => (prev === sectionName ? "" : sectionName));
  };

  return (
    <>
      <hr className="border-0 h-[1px] bg-gray-200" />
      <footer
        className="
          w-full 
          bg-gradient-to-r from-[#FCF6F2] via-[#FDFAFE] to-[#F9F2FC] 
          text-gray-800
        "
      >
        {/* Upper section: four columns */}
        <div className="max-w-7xl mx-auto px-6 py-15">
          {/* 
            Here we treat each column as an accordion panel on mobile:
            - Heading is clickable on < sm
            - On sm+ screens, they're always open
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-25">
            {/* COLUMN 1: Our services */}
            <div>
              {/* Heading for smaller screens (turns into a button) */}
              <button
                className="flex justify-between items-center w-full sm:block text-left sm:text-base font-semibold text-xl mb-4"
                onClick={() => handleToggle("services")}
              >
                Our services
                {/* Optional caret/arrow icon for mobile */}
                <span className="sm:hidden">
                  {activeSection === "services" ? "▲" : "▼"}
                </span>
              </button>

              {/* Content - hidden on mobile if not active; always shown on sm+ */}
              <ul
                className={`
                  space-y-5
                  ${activeSection === "services" ? "block" : "hidden"}
                  sm:block
                `}
              >
                <li>Team augmentation</li>
                <li>Mobile Development</li>
                <li>Back-end Development</li>
                <li>AI Development</li>
                <li>Front-end Development</li>
                <li>Web Development</li>
              </ul>
            </div>

            {/* COLUMN 2: Solutions */}
            <div>
              <button
                className="flex justify-between items-center w-full sm:block text-left sm:text-base font-semibold text-xl mb-4"
                onClick={() => handleToggle("solutions")}
              >
                Solutions
                <span className="sm:hidden">
                  {activeSection === "solutions" ? "▲" : "▼"}
                </span>
              </button>
              <ul
                className={`
                  space-y-5
                  ${activeSection === "solutions" ? "block" : "hidden"}
                  sm:block
                `}
              >
                <li>AI-driven software</li>
                <li>Enterprise development</li>
                <li>Custom Development</li>
                <li>Healthcare Development</li>
              </ul>
            </div>

            {/* COLUMN 3: Cases */}
            <div>
              <button
                className="flex justify-between items-center w-full sm:block text-left sm:text-base font-semibold text-xl mb-4"
                onClick={() => handleToggle("cases")}
              >
                Cases
                <span className="sm:hidden">
                  {activeSection === "cases" ? "▲" : "▼"}
                </span>
              </button>
              <ul
                className={`
                  space-y-5
                  ${activeSection === "cases" ? "block" : "hidden"}
                  sm:block
                `}
              >
                <li>Social media iOS app</li>
                <li>Android app for fast delivery services</li>
                <li>Enterprise SaaS website</li>
                <li>ERP for new-gen real estate</li>
                <li>Computer vision for ID recognition</li>
                <li>See more cases</li>
              </ul>
            </div>

            {/* COLUMN 4: Company */}
            <div>
              <button
                className="flex justify-between items-center w-full sm:block text-left sm:text-base font-semibold text-xl mb-4"
                onClick={() => handleToggle("company")}
              >
                Company
                <span className="sm:hidden">
                  {activeSection === "company" ? "▲" : "▼"}
                </span>
              </button>
              <ul
                className={`
                  space-y-5
                  ${activeSection === "company" ? "block" : "hidden"}
                  sm:block
                `}
              >
                <li>Who we are</li>
                <li>Clients</li>
                <li>Jobs</li>
                <li>Blog</li>
                <li>Contacts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lower section: brand, contact, icons, etc. */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
            {/* Left side: logo + phone + address */}
            <div className="flex flex-col md:flex-row items-center md:space-x-4 text-sm text-gray-500">
              <img src={AkxensLogo} alt="Akxens Logo" className="h-6 mr-2" />
              <span>| +1 (415) 655-1002</span>
              <span>
                | 333 W San Carlos St Suite 600, San Jose, CA, USA, 95110
              </span>
            </div>

            {/* Middle: social icons */}
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <a href="#" className="relative group w-5 h-5">
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn"
                  className="absolute top-0 left-0 w-full h-full group-hover:hidden"
                />
                <img
                  src={LinkedInDarkIcon}
                  alt="LinkedIn (hover)"
                  className="hidden group-hover:block w-full h-full"
                />
              </a>
              <a href="#" className="relative group w-5 h-5">
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="absolute top-0 left-0 w-full h-full group-hover:hidden"
                />
                <img
                  src={FacebookDarkIcon}
                  alt="Facebook (hover)"
                  className="hidden group-hover:block w-full h-full"
                />
              </a>
              <a href="#" className="relative group w-5 h-5">
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="absolute top-0 left-0 w-full h-full group-hover:hidden"
                />
                <img
                  src={InstagramDarkIcon}
                  alt="Instagram (hover)"
                  className="hidden group-hover:block w-full h-full"
                />
              </a>
            </div>

            {/* Right side: policy + copyright */}
            <div className="mt-4 md:mt-0 flex items-center space-x-4 text-sm text-gray-500">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <span>© 2025, Akxens Inc.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
