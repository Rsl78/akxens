import { useState, useRef, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  // Define your testimonials as an array.
  const testimonials = [
    { id: 0, bgColor: "bg-[#2494B4]" },
    { id: 1,  },
    { id: 2, bgColor: "bg-[#CF4292]" },
    { id: 3, bgColor: "bg-[#2494B4]" },
    { id: 4,  },
    { id: 5, bgColor: "bg-[#CF4292]" },
  ];

  // Pagination states (now based on pages, not individual cards)
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [cardWidth, setCardWidth] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const [numPages, setNumPages] = useState(1);

  // For clicking + dragging
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragStartScrollLeft, setDragStartScrollLeft] = useState(0);

  // Ref to our scrollable container
  const scrollRef = useRef(null);

  // Calculate dimensions based on the first card and container width
  const calculateDimensions = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      // Measure one card's width
      const firstCard = scrollRef.current.firstElementChild;
      let computedCardWidth = firstCard.getBoundingClientRect().width;
      // Include gap between cards if there is more than one card
      if (scrollRef.current.children.length > 1) {
        const secondCard = scrollRef.current.children[1];
        const gap =
          secondCard.getBoundingClientRect().left -
          firstCard.getBoundingClientRect().right;
        computedCardWidth += gap;
      }
      setCardWidth(computedCardWidth);

      // Determine how many cards fit in the visible container
      const containerWidth = scrollRef.current.clientWidth;
      const visible = Math.floor(containerWidth / computedCardWidth) || 1;
      setVisibleCards(visible);

      // Calculate a page width (all visible cards' total width)
      const computedPageWidth = computedCardWidth * visible;
      setPageWidth(computedPageWidth);

      // Determine the total number of pages
      const pages = Math.ceil(testimonials.length / visible);
      setNumPages(pages);
    }
  };

  // Run calculations on mount and when window is resized
  useEffect(() => {
    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);
    return () => window.removeEventListener("resize", calculateDimensions);
  }, [testimonials.length]);

  // Drag/scroll event handlers
  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setDragStartScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = dragStartScrollLeft - walk;
  };

  // Update the current page based on the container's scroll position
  const handleScroll = () => {
    if (scrollRef.current && pageWidth) {
      const scrollPos = scrollRef.current.scrollLeft;
      const newPage = Math.round(scrollPos / pageWidth);
      setCurrentPage(newPage);
    }
  };

  // Scroll to a specific page (group of visible cards)
  const scrollToPage = (pageIndex) => {
    if (scrollRef.current && pageWidth) {
      scrollRef.current.scrollTo({
        left: pageIndex * pageWidth,
        behavior: "smooth",
      });
      setCurrentPage(pageIndex);
    }
  };

  // Arrow button navigation
  const scrollNext = () => {
    if (currentPage < numPages - 1) {
      scrollToPage(currentPage + 1);
    }
  };

  const scrollPrev = () => {
    if (currentPage > 0) {
      scrollToPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-[#0D161A] backdrop-blur-3xl shadow pb-5 md:pb-40 text-white rounded-t-4xl">
      <div className="border-gray-300 h-auto md:h-96 grid grid-cols-1 md:grid-cols-7 mb-20">
        <div className="col-span-1 md:col-span-7 pt-10 md:pt-15 lg:ml-[calc((100vw-1350px)/2)]">
          <h1 className="font-bold text-center text-4xl pb-10">
            What Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FAA818] via-[#E0403B] to-[#CE22E0]">
              Clients
            </span>{" "}
            Say About Us
          </h1>
          <div className="relative w-full">
            {/* Left Arrow Button */}
            <button
              onClick={scrollPrev}
              className="flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 text-5xl text-[#FAA818] hover:text-[#E0403B] w-10 h-10 transition-colors z-10"
            >
              &lt;
            </button>

            {/* Scrollable container */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className="flex flex-nowrap space-x-5 overflow-x-scroll no-scrollbar cursor-grab active:cursor-grabbing w-full h-full pr-3 md:pr-[calc((100vw-1350px)/2)]"
            >
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  bgColor={testimonial.bgColor}
                />
              ))}
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={scrollNext}
              className="flex items-center justify-center absolute right-2 lg:right-[calc((100vw-1350px)/2)] top-1/2 -translate-y-1/2 text-[#FAA818] w-15 h-15 transition-colors z-10 text-5xl hover:text-[#E0403B]"
            >
              &gt;
            </button>
          </div>

          {/* Pagination Indicator (one for each page) */}
          <div className="mt-5 flex justify-center ">
            {Array.from({ length: numPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                onClick={() => scrollToPage(pageIndex)}
                className={`w-40 h-0.5 cursor-pointer transition-colors ${
                  currentPage === pageIndex ? "bg-[#FAA818]" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
