import { useRef, useState, useEffect } from "react";
import Button from "../common/Button";
import IndustriesCard from "./IndustriesCard";

const Industries = () => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Scroll container ref
  const scrollRef = useRef(null);

  // 1) Handle automatic scrolling via requestAnimationFrame
  useEffect(() => {
    let animationId;
    const scrollSpeed = 1; // Increase for faster scrolling

    function autoScroll() {
      // Only auto-scroll if user isn't dragging
      if (!isDown && scrollRef.current) {
        const container = scrollRef.current;
        // Move scroll to the right by `scrollSpeed`
        container.scrollLeft += scrollSpeed;

        // If we've reached the far right, jump back to the left
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScrollLeft) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    }

    // Start animating
    animationId = requestAnimationFrame(autoScroll);

    // Cleanup on unmount
    return () => cancelAnimationFrame(animationId);
  }, [isDown]);

  // 2) Mouse/touch drag logic
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
    <>
      {/* Horizontal line full-width, but aligned to your 1350px container */}
      <hr className="mx-[calc((100vw-1350px)/2)] border-0 h-[1px] bg-gray-200" />

      {/* Outer grid, 6 columns => left (2), right (4) */}
      <div className="border-gray-300  h-96 grid grid-cols-6 mb-10">
        {/* Left column */}
        <div className="col-span-2 ml-[calc((100vw-1350px)/2)] border-r border-gray-300 py-4">
          <p className="py-10 pr-8 text-lg">
            Wezom is your one-stop software development company, offering a full
            range of services for all industries. We drive your business
            progress with smart tech decisions tailored to a specific field.
          </p>
          <Button title="Learn More" />
        </div>

        {/* Right column: auto-scrolling, draggable */}
        <div className="col-span-4 pt-10">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="
              flex flex-nowrap space-x-4 overflow-x-scroll no-scrollbar
              cursor-grab active:cursor-grabbing w-full h-full
              pl-10 pr-[calc((100vw-1350px)/2)]
            "
          >
            <IndustriesCard/>
            <IndustriesCard/>
            <IndustriesCard/>
            <IndustriesCard/>
            <IndustriesCard/>
            <IndustriesCard/>
            {/* etc. */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;
