import { useState } from "react";
import {motion} from "framer-motion";

const ServiceSection = () => {
  const servicesData = [
    {
      id: 1,
      title: "Development",
      description:
        "We combine customer-centric methodologies and agile processes with cutting-edge technologies to deliver comprehensive software engineering expertise. Our innovative solutions empower enterprises and startups to enhance operational efficiency, reduce costs, increase revenue, and tackle their most critical challenges",
      subServices: [
        "eCommerce Website Development",
        "Mobile Application Development",
        "Enterprise Application Development",
        "Agile Software Development",
        "Custom Software Development",
      ],
    },
    {
      id: 2,
      title: "Design",
      description:
        "We create groundbreaking products and services that captivate and delight users. For us, design is about enhancing life experiences, facilitating connection, communication, and learning. We tailor our design strategy to address user needs, global trends, and local nuances, delivering a dynamic and engaging user experience in today’s evolving digital landscape.",
      subServices: [
        "Website Design",
        "Brand Identity Design",
        "UI/UX Prototyping",
        "User Experience Design",
      ],
    },
    {
      id: 3,
      title: "Growth",
      description:
        "We integrate customer-centric methodologies and agile processes with cutting-edge technologies to deliver comprehensive software engineering expertise. Our innovative solutions enhance operational efficiency, reduce costs, increase revenue, and address critical challenges for both enterprises and startups.",
      subServices: [
        "Digital Marketing",
        "SEO Optimization",
        "Social Media Marketing",
        "Content Writing",
        "Business Documentation",
      ],
    },
    {
      id: 4,
      title: "Consultancy",
      description:
        "Our digital marketing services cut through the noise and give you a competitive edge. We deliver targeted content, hyper-personalized experiences, and data-driven insights to boost conversions, achieve superior ROI, and minimize customer acquisition costs.",
      subServices: [
        "Business Strategy Consultation",
        "Digital Transformation Strategy",
        "Data Analysis & Result",
        "Technolohy Assessment",
      ],
    },
  ];

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
      className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 bg-gray-50"
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
