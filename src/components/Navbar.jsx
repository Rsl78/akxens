const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 w-full text-white bg-transparent hover:bg-white hover:text-black p-5">
        <div className="flex justify-between items-center w-[90%] mx-auto">
          <div>
            {/* Company logo */}
            <h1>akxens</h1>
          </div>
          <div>
            <ul className="hidden md:flex gap-7 ">
              <li className="text-lg font-semibold py-1 hover:border-b-[3px] border-black group">
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
              <li className="text-lg font-semibold py-1 hover:border-b-[3px] border-black group">
                <a href="">
                  {/* navbar option name */}
                  <p>Industries</p>
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
              <li className="text-lg font-semibold py-1 hover:border-b-[3px] border-black">
                <a href="">
                  {/* navbar option name */}
                  <p>Case Study</p>
                  {/* mega bar options */}
                </a>
              </li>
              <li className="text-lg font-semibold py-1 hover:border-b-[3px] border-black">
                <a href="">
                  {/* navbar option name */}
                  <p>Insighs</p>
                  {/* mega bar options */}
                </a>
              </li>
              <li className="text-lg font-semibold py-1 hover:border-b-[3px] border-black">
                <a href="">
                  {/* navbar option name */}
                  <p>Company</p>
                  {/* mega bar options */}
                </a>
              </li>

              <li>
                <a href="">
                  <button className="bg-blue-500 text-white px-5 py-1 mt-1 rounded-2xl">
                    Contact Us
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;