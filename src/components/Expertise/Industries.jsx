import { useRef, useState } from "react";
import Button from "../common/Button";
import IndustriesCard from "./IndustriesCard";

const Industries = () => {
  // For clicking + dragging
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Ref to our scrollable container
  const scrollRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDown(true);
    // Mouse’s X position relative to container
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    // Current scrollLeft so we know our baseline
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    // How far the mouse has moved since the initial click
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    // Invert direction so it feels natural
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // 31363F
  // 040D12
  // 1B2430
  // 222831

  return (
    // <div className="bg-[url('/img2.jpg')]  bg-cover bg-center  backdrop-blur-3xl shadow pb-10 mb-20 rounded-4xl text-white">
    // <div className="bg-gradient-to-r from-[#FCF6F2] via-[#FDFAFE] to-[#F9F2FC]   backdrop-blur-3xl shadow pb-10 mb-20 rounded-4xl ">
    <div className="bg-[#040D12]  backdrop-blur-3xl shadow pb-10 mb-20 text-white rounded-4xl ">
      <h2 className="text-center  text-4xl font-bold py-10">
        Our Expertise for Your <br /> <span className="">Success</span>
      </h2>
      <hr className="mx-[calc((100vw-1350px)/2)] border-0 h-[1px] bg-gray-800" />
      <div className=" border-gray-300 h-96 grid grid-cols-7 mb-20">
        {/* Left column: text + button */}
        <div className="col-span-2 ml-[calc((100vw-1350px)/2)] border-r border-gray-800  p-4">
          <p className="py-10 pr-3 text-m ">
            Akxens is your one-stop software development company, offering a
            full range of services for all industries. We drive your business
            progress with smart tech decisions tailored to a specific field.
          </p>
          <Button title="Learn More" />
        </div>

        {/* Right column: horizontally scrollable row of cards */}
        <div className="col-span-5 pt-15 ">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex flex-nowrap space-x-5 overflow-x-scroll 
                     no-scrollbar cursor-grab active:cursor-grabbing 
                     w-full h-full pl-20 pr-[calc((100vw-1350px)/2)]"
          >
            <IndustriesCard className="w-72 flex-shrink-0" />
            <IndustriesCard className="w-72 flex-shrink-0" />
            <IndustriesCard className="w-72 flex-shrink-0" />
            <IndustriesCard className="w-72 flex-shrink-0" />
            <IndustriesCard className="w-72 flex-shrink-0" />
            <IndustriesCard className="w-72 flex-shrink-0" />
            {/* etc. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
