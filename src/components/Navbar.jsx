import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LogoBlack from "../assets/logoBlack.svg";
import LogoWhite from "../assets/logoWhite.svg";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight =
        document.querySelector(".hero-section").offsetHeight;
      if (window.scrollY > heroSectionHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      // className={`fixed top-0 left-0 w-full text-white bg-transparent hover:text-black p-5`}
      className={`fixed top-0 left-0 w-full bg-black/20 backdrop-blur-sm  px-5 py-2.5 duration-300 z-50 ${
        isHovered || isScrolled
          ? "bg-white text-black"
          : "bg-transparent text-white transition-colors duration-300"
      }`}
    >
      <div className="flex justify-between items-center max-w-[1350px] mx-auto">
        <div>
          {/* Company logo */}
          <img
            src={isHovered || isScrolled ? LogoBlack : LogoWhite}
            alt="logo"
            className="w-30"
          />
        </div>
        <div>
          <ul className="hidden lg:flex gap-10 ">
            {/* About us */}
            <li className="text-sm font-semibold py-1 ">
              <a href="">
                {/* navbar option name */}
                <p>About Us</p>
                {/* mega bar options */}
              </a>
            </li>

            {/* Cases */}
            <li className="text-sm font-semibold py-1 ">
              <a href="">
                {/* navbar option name */}
                <p>Cases</p>
                {/* mega bar options */}
              </a>
            </li>

            {/* Services */}
            <li
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="text-sm font-semibold py-1 group"
            >
              <a href="">
                {/* navbar option name */}
                <p>Service</p>
                {/* mega bar options */}

                <div className="absolute top-full left-0 w-full min-h-screen bg-black/80 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300">
                  <div className="grid grid-cols-5 gap-5 px-40 py-10 bg-white">
                    <a href="" className="font-semibold space-y-5">
                      {/* megabar inside title */}
                      <h1 className="hover:opacity-50">Service</h1>

                      {/* options */}
                      <div className="space-y-3">
                        <p className="text-sm opacity-70 hover:opacity-100">
                          It consulting
                        </p>
                        <p className="text-sm opacity-70 hover:opacity-100">
                          Software Engineering
                        </p>
                        <p className="text-sm opacity-70 hover:opacity-100">
                          Application Services
                        </p>
                        <p className="text-sm opacity-70 hover:opacity-100">
                          Manage It Services
                        </p>
                        <p className="text-sm opacity-70 hover:opacity-100">
                          DevOps
                        </p>
                        <p className="text-sm opacity-70 hover:opacity-100">
                          Quality Assurance & Testing
                        </p>
                        <p className="text-sm opacity-70 hover:opacity-100">
                          Maintance & Support
                        </p>
                        <p className="text-sm opacity-70 hover:opacity-100">
                          Smart teams
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </a>
            </li>

            {/* Solutions */}
            <li
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="text-sm font-semibold py-1  group"
            >
              <a href="">
                {/* navbar option name */}
                <p>Solutions</p>
                {/* mega bar options */}
                <div className="absolute top-full left-0 w-full min-h-screen bg-black/80 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300">
                  <div className="grid grid-cols-5 gap-5 px-40 py-10 bg-white">
                    <a href="" className="font-semibold space-y-5">
                      {/* megabar inside title */}
                      <h1 className="hover:opacity-50">Industries</h1>

                      {/* options */}
                      <div className="space-y-3">
                        <p className="text-sm opacity-70 hover:opacity-100">
                          It consulting
                        </p>
                        <p className="text-sm opacity-70 hover:opacity-100">
                          Software Engineering
                        </p>
                        <p className="text-sm opacity-70 hover:opacity-100">
                          Application Services
                        </p>
                        <p className="text-sm opacity-70 hover:opacity-100">
                          Manage It Services
                        </p>
                        <p className="text-sm opacity-70 hover:opacity-100">
                          DevOps
                        </p>
                        <p className="text-sm opacity-70 hover:opacity-100">
                          Quality Assurance & Testing
                        </p>
                        <p className="text-sm opacity-70 hover:opacity-100">
                          Maintance & Support
                        </p>
                        <p className="text-sm opacity-70 hover:opacity-100">
                          Smart teams
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </a>
            </li>

            {/* Clients */}
            <li className="text-sm font-semibold py-1">
              <a href="">
                {/* navbar option name */}
                <p>Clients</p>
                {/* mega bar options */}
              </a>
            </li>

            {/* blog */}
            <li className="text-sm font-semibold py-1 ">
              <a href="">
                {/* navbar option name */}
                <p>Blog</p>
                {/* mega bar options */}
              </a>
            </li>

            {/* contact */}
            <li className="text-sm font-semibold py-1 ">
              <a href="">
                {/* navbar option name */}
                <p>Contacts</p>
                {/* mega bar options */}
              </a>
            </li>

            {/* <li>
              <a href="">
                <button className=" p-2 px-5 rounded-sm font-extrabold bg-[#F8B000] text-black  hover:border  hover:bg-[#FFFFFF]  rounded-pill">
                  Let&apos;s Chat
                </button>
              </a>
            </li> */}
          </ul>
        </div>

        <div>
          <a href="">
            <button className=" p-2 px-5 rounded-sm font-extrabold bg-[#F8B000] text-black  hover:border  hover:bg-[#FFFFFF]  rounded-pill">
              Let&apos;s Chat
            </button>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
