import { useState, useRef, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  // Define your testimonials as an array.
  const testimonials = [
    { id: 0, bgColor: "bg-[#2494B4]" },
    { id: 1 },
    { id: 2, bgColor: "bg-[#CF4292]" },
    { id: 3, bgColor: "bg-[#2494B4]" },
    { id: 4 },
    { id: 5, bgColor: "bg-[#CF4292]" },
  ];

  // currentIndex now represents the left-most visible card index.
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [cardWidth, setCardWidth] = useState(0);
  // Total scroll steps = total cards - visibleCards + 1 (minimum of 1)
  const [numPages, setNumPages] = useState(1);
  // Flag to prevent scroll handler interference during programmatic scroll.
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  // For dragging
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragStartScrollLeft, setDragStartScrollLeft] = useState(0);

  // Ref to our scrollable container
  const scrollRef = useRef(null);

  // Calculate dimensions: card width, how many cards fit, and total scroll steps.
  const calculateDimensions = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const firstCard = scrollRef.current.firstElementChild;
      let computedCardWidth = firstCard.getBoundingClientRect().width;
      // Include gap between cards if available
      if (scrollRef.current.children.length > 1) {
        const secondCard = scrollRef.current.children[1];
        const gap =
          secondCard.getBoundingClientRect().left -
          firstCard.getBoundingClientRect().right;
        computedCardWidth += gap;
      }
      setCardWidth(computedCardWidth);

      // Use 1350px as the container width for large screens; otherwise, use the actual container width.
      const actualContainerWidth = scrollRef.current.clientWidth;
      const containerWidth =
        window.innerWidth > 1350 ? 1350 : actualContainerWidth;

      const visible = Math.floor(containerWidth / computedCardWidth) || 1;
      setVisibleCards(visible);

      // Calculate total scroll steps so that the last step shows a full set of cards.
      const pages = Math.max(testimonials.length - visible + 1, 1);
      setNumPages(pages);
    }
  };

  // Run calculations on mount and on window resize.
  useEffect(() => {
    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);
    return () => window.removeEventListener("resize", calculateDimensions);
  }, [testimonials.length]);

  // Drag/scroll handlers
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

  // Update the current index based on scroll position.
  const handleScroll = () => {
    // Do not update state if we're programmatically scrolling.
    if (isAutoScrolling || !scrollRef.current || !cardWidth) return;

    const maxScrollLeft = (testimonials.length - visibleCards) * cardWidth;
    const currentScroll = scrollRef.current.scrollLeft;
    if (currentScroll >= maxScrollLeft - cardWidth * 0.1) {
      setCurrentIndex(numPages - 1);
    } else {
      const newIndex = Math.round(currentScroll / cardWidth);
      setCurrentIndex(newIndex);
    }
  };

  // Scroll to a specific card index with a smooth transition.
  const scrollToCard = (index) => {
    if (scrollRef.current && cardWidth) {
      const cappedIndex = Math.min(index, numPages - 1);
      const maxScrollLeft = (testimonials.length - visibleCards) * cardWidth;
      setIsAutoScrolling(true);
      if (cappedIndex === numPages - 1) {
        // Force the scroll position to maxScrollLeft for the last page.
        scrollRef.current.scrollTo({
          left: maxScrollLeft,
          behavior: "smooth",
        });
        setTimeout(() => {
          setCurrentIndex(numPages - 1);
          setIsAutoScrolling(false);
        }, 300);
        return;
      }
      const targetScrollLeft = cappedIndex * cardWidth;
      scrollRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
      setTimeout(() => {
        setCurrentIndex(cappedIndex);
        setIsAutoScrolling(false);
      }, 300);
    }
  };

  // Arrow navigation scrolls one card at a time.
  const scrollNext = () => {
    if (currentIndex < numPages - 1) {
      scrollToCard(currentIndex + 1);
    } else {
      setCurrentIndex(numPages - 1);
    }
  };

  const scrollPrev = () => {
    if (currentIndex > 0) {
      scrollToCard(currentIndex - 1);
    } else {
      setCurrentIndex(0);
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
            {/* Left Arrow Button - hidden when on the first card */}
            {currentIndex > 0 && (
              <button
                onClick={scrollPrev}
                className="flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 text-5xl text-[#FAA818] hover:text-[#E0403B] w-10 h-10 transition-colors z-10"
              >
                &lt;
              </button>
            )}
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
            {/* Right Arrow Button - hidden when on the last card */}
            {currentIndex < numPages - 1 && (
              <button
                onClick={scrollNext}
                className="flex items-center justify-center absolute right-2 lg:right-[calc((100vw-1350px)/2)] top-1/2 -translate-y-1/2 text-[#FAA818] w-15 h-15 transition-colors z-10 text-5xl hover:text-[#E0403B]"
              >
                &gt;
              </button>
            )}
          </div>
          {/* Pagination Indicator (one for each scroll step) */}
          <div className="mt-5 flex justify-center">
            {Array.from({ length: numPages }).map((_, index) => (
              <div
                key={index}
                onClick={() => scrollToCard(index)}
                className={`w-40 h-0.5 cursor-pointer transition-colors ${
                  currentIndex === index ? "bg-[#FAA818]" : "bg-gray-300"
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
