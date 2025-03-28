import { useRef, useState } from "react";
import Button from "../common/Button";
import IndustriesCard from "./IndustriesCard";

const industries = [
  {
    id: 1,
    name: "Finance & Banking",
    description: "Secure and scalable financial solutions tailored for banking and fintech companies.",
    image: "https://www.loyensloeff.com/contentassets/7ca5076ac555499c84ceedf4553233de/money-2.jpg?width=580&height=387"
  },
  {
    id: 2,
    name: "Healthcare",
    description: "Innovative healthcare solutions for patient management, telemedicine, and data security.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHEQpJFwuuCKZS7lpYpukxVxGwSPhgSld_g&s"
  },
  {
    id: 3,
    name: "E-commerce",
    description: "Custom e-commerce platforms with seamless payment integration and user experience.",
    image: "https://www.indiafilings.com/learn/wp-content/uploads/2024/11/What-is-E-Commerce-Business.jpg"
  },
  {
    id: 4,
    name: "Education & E-learning",
    description: "Advanced e-learning platforms for interactive learning and student engagement.",
    image: "https://www.swiftnlift.in/wp-content/uploads/2023/10/unnamed-2-1.jpg"
  },
  {
    id: 5,
    name: "Real Estate",
    description: "Smart property management and real estate solutions powered by AI and analytics.",
    image: "img2.jpg"
  },
  {
    id: 6,
    name: "Retail",
    description: "Omnichannel retail solutions, inventory management, and digital storefronts.",
    image: "img2.jpg"
  },
  {
    id: 7,
    name: "Logistics & Transportation",
    description: "Efficient supply chain and logistics solutions with real-time tracking.",
    image: "img2.jpg"
  },
  {
    id: 8,
    name: "Manufacturing",
    description: "Industry 4.0 solutions for process automation, IoT integration, and quality control.",
    image: "img2.jpg"
  },
  {
    id: 9,
    name: "Entertainment & Media",
    description: "Digital media platforms, content streaming, and immersive entertainment solutions.",
    image: "img2.jpg"
  },
  {
    id: 10,
    name: "Automotive",
    description: "Automotive software for vehicle diagnostics, fleet management, and autonomous technology.",
    image: "img2.jpg"
  }
];

const Industries = () => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="bg-[#0D161A] backdrop-blur-3xl shadow pb-5 md:pb-20  text-white">
      <div className="w-full text-center">
        <h2 className="text-4xl  font-bold py-10">
          Our Expertise for Your <br /> <span className="">Success</span>
        </h2>
      </div>
      <hr className="mx-2 xl:mx-[calc((100vw-1350px)/2)] border-0 h-[1px] bg-gray-800" />
      {/* <div className="border-gray-300 h-auto md:h-96 grid grid-cols-1 md:grid-cols-7 2xl:grid-cols-8 mb-20"> */}
      <div className="border-gray-300 h-auto md:h-96 flex flex-col md:flex-row  mb-20">
        {/* <div className="col-span-1 md:col-span-2 2xl:col-span-3 md:ml-[calc((100vw-1350px)/2)] border-b md:border-b-0 md:border-r border-gray-800 p-4"> */}
        <div className="md:w-35% w-full md:ml-[calc((100vw-1350px)/2)] border-b md:border-b-0 md:border-r border-gray-800 p-4">
          <p className="py-10 pr-3 text-m">
            Akxens is your one-stop software development company, offering a
            full range of services for all industries. We drive your business
            progress with smart tech decisions tailored to a specific field.
          </p>
          <Button title="Learn More" />
        </div>
        {/* <div className="col-span-1 md:col-span-5 2xl:col-span-5 pt-10 md:pt-15"> */}
        <div className="md:w-[65%] w-full pt-10 md:pt-15">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex flex-nowrap space-x-5 overflow-x-scroll 
                     no-scrollbar cursor-grab active:cursor-grabbing 
                     w-full h-full py-3  pl-3 md:pl-20 pr-3 md:pr-[calc((100vw-1350px)/2)]  "
          >
            {industries.map((industry) => (
              <IndustriesCard
                key={industry.id}
                className="w-72 flex-shrink-0"
                name={industry.name}
                description={industry.description}
                image={industry.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
