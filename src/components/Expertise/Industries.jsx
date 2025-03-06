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

  return (
    <>
      <hr className="mx-[calc((100vw-1350px)/2)] border-0 h-[1px] bg-gray-200" />
      <div className=" border-gray-300 h-96 grid grid-cols-6 mb-10">
        {/* Left column: text + button */}
        <div className="col-span-2 ml-[calc((100vw-1350px)/2)] border-r border-gray-300 p-4">
          <p className="py-10 pr-3 text-lg">
            Wezom is your one-stop software development company, offering a full
            range of services for all industries. We drive your business
            progress with smart tech decisions tailored to a specific field.
          </p>
          <Button title="Learn More" />
        </div>

        {/* Right column: horizontally scrollable row of cards */}
        <div className="col-span-4 pt-10 ">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex flex-nowrap space-x-4 overflow-x-scroll 
                     no-scrollbar cursor-grab active:cursor-grabbing 
                     w-full h-full pl-10 pr-[calc((100vw-1350px)/2)]"
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
    </>
  );
};

export default Industries;
