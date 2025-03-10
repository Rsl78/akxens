import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  return (
    <div className="bg-[#0D161A] backdrop-blur-3xl py-10 md:py-20 mb-20 text-white ">
      <h1 className="font-bold text-center text-4xl">
        What Our{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FAA818] via-[#E0403B] to-[#CE22E0]">
          Clients
        </span>{" "}
        Say About Us
      </h1>

      <div className="max-w-[1350px] mx-auto pt-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          // autoplay={{ delay: 3000 }}
          navigation
          pagination={{ clickable: true }}
          className="px-5 p-5"
        >
          {[...Array(6)].map((_, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
