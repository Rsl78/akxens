
import { useState } from "react";
import EmailIconDark from "../../assets/icon/emailDark.svg";
import PhoneIconDark from "../../assets/icon/phoneDark.svg";
import LocationIconDark from "../../assets/icon/locationDark.svg";
import IconLine from "./IconLine";


const ContactMeSection = () => {
  const [fieldValue, setFieldValue] = useState({
    id: crypto.randomUUID(),
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFieldValue({
      ...fieldValue,
      [e.target.name]: e.target.value,
    });
  };

 

  return (
    <>
      <section
        className=" grid grid-cols-1 md:grid-cols-11 py-10 mx-auto container"
        id="contact"
      >
        {/* Other content */}
        <aside className="md:col-span-5 w-[95%] gap-4 pb-5">
          <div className="pb-2">
            <h2 className=" font-primary font-bold text-3xl">drop me a line</h2>
            <div className="w-20 my-1 h-1 bg-[#F89F20]"></div>
            <p className="pt-2 text-lg leading-7 tracking-tight whitespace-pre-line ">
              Share your thoughts, projects, or just say hi using the form below
              I&apos;ll get back to you soon! To know more about me, visit my
              social profile.
            </p>
          </div>

          {/* Email */}
          <div className=" flex  items-center space-x-2 ">
            <img
              className="  border-2 rounded-full w-8 h-8 p-1 "
              src={EmailIconDark}
              alt="email"
            />

            <div>
              <h3 className="font-bold text-lg  ">Email</h3>
              <h4 className="text-base ">roknuzzaman.rasel78@gmail.com</h4>
            </div>
          </div>

          {/* Phone */}
          <div className="py-1 flex  items-center space-x-2 ">
            <img
              className=" border-2 rounded-full w-8 h-8 p-1 "
              src={PhoneIconDark}
              alt="Phone"
            />

            <div>
              <h3 className="font-bold text-lg  ">Phone</h3>
              <h4 className="text-base ">+880 1762-888622</h4>
            </div>
          </div>

          {/* Location */}
          <div className=" flex  items-center space-x-2 ">
            <img
              className="  border-2 rounded-full w-8 h-8 p-1 "
              src={LocationIconDark}
              alt="location"
            />

            <div>
              <h3 className="font-bold text-lg  ">Location</h3>
              <h4 className="text-base ">
                72, North Road, Dhanmondi, Dhaka, Bangladesh
              </h4>
            </div>
          </div>
          <div>
            <IconLine />
          </div>
        </aside>

        {/* Contact form */}
        <div className="pt-3 md:col-span-6 justify-items-end">
          <form className="space-y-4 w-full">
            {/* First row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name Field */}
              <div className="flex flex-col w-full">
                <label className="relative w-full" htmlFor="name">
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={fieldValue.name}
                    onChange={handleChange}
                    className="w-full px-2.5 py-2 text-lg outline-none border-gray-300 dark:border-[#6e6a6a33] rounded hover:border-[#F9A51A] duration-200 peer focus:border-[#F9A51A] bg-inherit"
                  />
                  <span className="absolute left-0 top-[23%] px-1 tracking-wide pointer-events-none duration-200 ml-2 bg-[#F5F5FB]  peer-focus:-translate-y-5.5 peer-valid:text-sm peer-valid:-translate-y-5.5">
                    Name *
                  </span>
                </label>
              </div>

              {/* Email Field */}
              <div className="flex flex-col w-full">
                <label className="relative w-full" htmlFor="email">
                  <input
                    required
                    type="text"
                    id="email"
                    name="email"
                    value={fieldValue.email}
                    onChange={handleChange}
                    className="w-full px-2.5 py-2 text-lg outline-none border-gray-300  rounded hover:border-[#F9A51A] duration-200 peer focus:border-[#F9A51A] bg-inherit"
                  />
                  <span className="absolute left-0 top-[23%] px-1 tracking-wide pointer-events-none duration-200 ml-2 bg-[#F5F5FB]  peer-focus:-translate-y-5.5 peer-valid:text-sm peer-valid:-translate-y-5.5">
                    Email *
                  </span>
                </label>
              </div>
            </div>

            {/* Second row - Phone */}
            <div className="flex flex-col items-center justify-center w-full">
              <label className="relative w-full" htmlFor="phone">
                <input
                  required
                  type="text"
                  id="phone"
                  name="phone"
                  value={fieldValue.phone}
                  onChange={handleChange}
                  autoComplete="off"
                  className="w-full px-2.5 py-2 text-lg outline-none border-gray-300 dark:border-[#6e6a6a33] rounded hover:border-[#F9A51A] duration-200 peer focus:border-[#F9A51A] bg-inherit"
                />
                <span className="absolute left-0 top-[23%] px-1 tracking-wide pointer-events-none duration-200 ml-2 bg-[#F5F5FB]  peer-focus:-translate-y-5.5 peer-valid:text-sm peer-valid:-translate-y-5.5">
                  Phone *
                </span>
              </label>
            </div>

            {/* Third row - Message */}
            <div className="flex flex-col items-center justify-center w-full">
              <label className="relative w-full" htmlFor="message">
                <textarea
                  required
                  id="message"
                  name="message"
                  value={fieldValue.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder=" "
                  className="w-full px-2.5 py-3 text-lg outline-none border-gray-300 dark:border-[#6e6a6a33] rounded hover:border-[#F9A51A] duration-200 peer focus:border-[#F9A51A] bg-inherit"
                ></textarea>
                <span className="absolute left-0 top-3 px-1 tracking-wide pointer-events-none duration-200 ml-2 bg-[#F5F5FB]  peer-focus:-translate-y-5.5 peer-valid:text-sm peer-valid:-translate-y-5.5">
                  Message *
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button className="py-2 w-full border-2  hover:text-[#F9A51A] font-bold text-xl  hover:border-[#F9A51A] rounded">
              Contact Us
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactMeSection;
