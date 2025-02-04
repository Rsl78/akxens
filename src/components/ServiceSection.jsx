import { useState } from "react";
import {motion} from "framer-motion";
import { servicesData } from "../data/index";

const ServiceSection = () => {
  

  const [selectedService, setSelectedService] = useState(servicesData[0]);
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: false }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 "
    >
      <aside className="md:col-span-1">
        <h1 className="font-bold text-5xl">Services</h1>
        <p className="pt-5  font-medium text-lg leading-7 ">
          We ignite transformation by combining industry expertise, cutting-edge
          technologies, top-tier talent, and advanced digital practices to
          deliver tailored software solutions that unlock new value for your
          unique needs.
        </p>
      </aside>

      <div className="md:col-span-2 grid  grid-cols-1 md:grid-cols-2  md:ml-10 pt-3">
        <div className="flex flex-col gap-2 md:flex-row justify-between min-w-full col-span-2 md:h-9 ">
          {servicesData.map((service) => (
            <h2
              key={service.id}
              className={`font-bold text-xl cursor-pointer ${
                selectedService.id === service.id
                  ? "border-b-4 border-blue-500"
                  : ""
              }`}
              onClick={() => handleServiceClick(service)}
            >
              {service.title}
            </h2>
          ))}
        </div>
        <div className="flex px-2 lg:px-0 flex-col lg:flex-row gap-4 lg:gap-20 lg:h-60 col-span-2 pt-5">
          <div className="text-justify leading-7 text-lg font-medium ">
            {selectedService.description}
          </div>
          <div className="flex flex-col lg:inline gap-0 ">
            {selectedService.subServices.map((subService, index) => (
              <a className="text-lg py-1 lg:py-5 text-gray-600" key={index}>
                {subService}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceSection;
