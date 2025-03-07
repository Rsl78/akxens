import { useRef, useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
const TestimonialSection = () => {
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

      <div className="bg-[#040D12] backdrop-blur-3xl shadow py-5 md:py-15 mb-20 text-white rounded-4xl">
        <h1 className="font-bold text-center text-4xl">What Our Clients Say About Us</h1>
        <div className="border-gray-300  h-96 grid grid-cols-6 mb-10 ml-[calc((100vw-1350px)/2)]  ">
          <div className="col-span-6 pt-10">
            <div
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className="
                  flex flex-nowrap space-x-4 overflow-x-scroll no-scrollbar
                  cursor-grab active:cursor-grabbing w-full h-full
                  px-[calc((100vw-1350px)/2)]
                "
            >
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              {/* etc. */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
