import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      feedback:
        "Exceptional service! The team went above and beyond to ensure our project was a success. Highly professional and reliable.",
      position: "CEO",
      company: "Tech Solutions Inc.",
      bgclass: "bg-[#7C42DA]",
      logo: "https://nuspay.com/images/logo_white.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback:
        "The experience was seamless from start to finish. Their expertise and commitment made a huge impact on our business growth.",
      position: "CTO",
      company: "InnovateX",
      bgclass: "bg-[#4252DA]",
      logo: "https://nuspay.com/images/logo_white.png",
    },
    {
      id: 3,
      name: "Michael Johnson",
      feedback:
        "A top-notch team that delivers outstanding results. Their dedication and creativity truly set them apart.",
      position: "Managing Director",
      company: "Global Ventures",
      bgclass: "bg-[#429ADA]",
      logo: "https://nuspay.com/images/logo_white.png",
    },
    {
      id: 4,
      name: "Emily Davis",
      feedback:
        "I highly recommend them! Their innovative approach and customer-first mindset make them a valuable partner.",
      position: "Marketing Head",
      company: "Creative Minds",
      bgclass: "bg-yellow-300",
      logo: "https://nuspay.com/images/logo_white.png",
    },
  ];


  return (
    <div className="bg-[#0D161A] backdrop-blur-3xl py-10 md:py-20  text-white rounded-t-4xl">
      <h1 className="font-bold text-center text-4xl">
        What Our{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FAA818] via-[#E0403B] to-[#CE22E0]">
          Clients
        </span>{" "}
        Say About Us
      </h1>

      <div className="max-w-[1350px] mx-auto pt-8">
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
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
