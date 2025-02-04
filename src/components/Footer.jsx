import Logo from "../assets/logoWhite.svg";
const Footer = () => {
    return (
      // className="bg-[#21262C] "
      <div className="bg-[#21262C] ">
        <footer className="container mx-auto footer sm:footer-horizontal text-white font-semibold p-10">
          <aside>
            <img src={Logo} alt="" width={120} />
            <p>
              © 2023 Akxens.
              <br />
              All rights reserved.
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Get In Touch</h6>
            <p className="gap-2">
              Moonshine St. 14/05
              <br />
              Light City, London,
              <br />
              United Kingdom
            </p>
          </nav>
          <nav>
            <h6 className="footer-title">Learn More</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Our Story</a>
            <a className="link link-hover">Projects</a>
            <a className="link link-hover">Terms of us</a>
            <a className="link link-hover">Privacy Policy</a>
          </nav>
          <form>
            <h6 className="footer-title">Our Newsletter</h6>
            <fieldset className="w-80">
              {/* <label className="borer">
                
              </label> */}
              <p>
                Subscribe to our newsletter to get our news & deals delivered to
                you.
              </p>
              <div className="mt-8 flex gap-2 join">
                <label className="input floating-label ">
                  <span>Enter your mail</span>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="input input-md"
                  />
                </label>
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
    );
};

export default Footer;