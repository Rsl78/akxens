import  { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Blog = () => {
  const blogs = [
    {
      name: "Everything",
      blog: [
        {
          id: 1,
          title: "The Future of Digital Innovation",
          content: "Emerging technologies shaping our future.",
          date: "March 5, 2025",
          image:
            "https://diffco.us/wp-content/uploads/2024/11/news_0013-2-812x360.png",
        },
        {
          id: 2,
          title: "AI in Everyday Life",
          content: "How AI is changing daily routines.",
          date: "March 3, 2025",
          image:
            "https://diffco.us/wp-content/uploads/2024/09/news_0013-812x360.png",
        },
        {
          id: 3,
          title: "Cybersecurity Trends",
          content: "Stay protected in the digital age.",
          date: "March 2, 2025",
          image:
            "https://diffco.us/wp-content/uploads/2024/08/Social-post-123-scaled-1-812x360.webp",
        },
        {
          id: 4,
          title: "Cloud Computing Evolution",
          content: "How businesses adapt to the cloud.",
          date: "March 1, 2025",
          image: "https://diffco.us/wp-content/uploads/2024/10/cloud-tech.jpg",
        },
        {
          id: 5,
          title: "Blockchain & Security",
          content: "Decentralization for safety.",
          date: "Feb 27, 2025",
          image: "https://diffco.us/wp-content/uploads/2024/10/blockchain.jpg",
        },
      ],
    },
    {
      name: "Podcasts and Interviews",
      blog: [
        {
          id: 6,
          title: "Tech Titans Talk",
          content: "Interviews with industry leaders.",
          date: "March 1, 2025",
          image: "/images/tech-titans.jpg",
        },
        {
          id: 7,
          title: "Marketing in Digital Age",
          content: "How digital marketing evolved.",
          date: "Feb 27, 2025",
          image: "/images/digital-marketing.jpg",
        },
        {
          id: 8,
          title: "Rise of Podcasting",
          content: "Podcasting is taking over.",
          date: "Feb 25, 2025",
          image: "/images/podcasting.jpg",
        },
      ],
    },
    {
      name: "Achievements",
      blog: [
        {
          id: 9,
          title: "Award-Winning Campaign",
          content: "Global recognition for our campaign.",
          date: "Feb 20, 2025",
          image: "/images/award-campaign.jpg",
        },
        {
          id: 10,
          title: "Breaking Sales Records",
          content: "Highest sales achievement.",
          date: "Feb 15, 2025",
          image: "/images/sales-record.jpg",
        },
        {
          id: 11,
          title: "Best Workplace Award",
          content: "Recognized as a top workplace.",
          date: "Feb 10, 2025",
          image: "/images/workplace-award.jpg",
        },
      ],
    },

    {
      name: "Achievement sdss",
      blog: [
        {
          id: 9,
          title: "Award-Winning Campaign",
          content: "Global recognition for our campaign.",
          date: "Feb 20, 2025",
          image: "/images/award-campaign.jpg",
        },
        {
          id: 10,
          title: "Breaking Sales Records",
          content: "Highest sales achievement.",
          date: "Feb 15, 2025",
          image: "/images/sales-record.jpg",
        },
        {
          id: 11,
          title: "Best Workplace Award",
          content: "Recognized as a top workplace.",
          date: "Feb 10, 2025",
          image: "/images/workplace-award.jpg",
        },
      ],
    },
    {
      name: "Acssshievement sdss",
      blog: [
        {
          id: 9,
          title: "Award-Winning Campaign",
          content: "Global recognition for our campaign.",
          date: "Feb 20, 2025",
          image: "/images/award-campaign.jpg",
        },
        {
          id: 10,
          title: "Breaking Sales Records",
          content: "Highest sales achievement.",
          date: "Feb 15, 2025",
          image: "/images/sales-record.jpg",
        },
        {
          id: 11,
          title: "Best Workplace Award",
          content: "Recognized as a top workplace.",
          date: "Feb 10, 2025",
          image: "/images/workplace-award.jpg",
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(blogs[0].name);

  return (
    <div className="container mx-auto py-20">
      {/* Page Title */}
      <h1 className="text-4xl text-center font-bold py-8">
        Browse our latest{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FAA818] via-[#E0403B] to-[#CE22E0]">
          blog
        </span>{" "}
        articles
      </h1>

      {/* Category Tabs */}
      <div className="flex space-x-12 pb-3 lg:justify-center overflow-x-auto no-scrollbar">
        {blogs.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveTab(category.name)}
            className={`relative text-sm font-semibold whitespace-nowrap transition duration-300 pb-3 after:content-['']  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-500 ${
              activeTab === category.name
                ? "text-zinc-950 after:w-full after:bg-[#FAA818]"
                : "text-gray-500 hover:text-zinc-950 after:w-0 after:bg-transparent"
            }
        `}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Blog Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 }, // Show 2 slides on tablets
          1024: { slidesPerView: 3 }, // Show 3 slides on desktops
        }}
        navigation
        //pagination={{ clickable: true }}
        // autoplay={{ delay: 4000 }}
        className="mt-8"
      >
        {blogs
          .find((category) => category.name === activeTab)
          ?.blog.map((post) => (
            <SwiperSlide key={post.id}>
              <div
                key={post.id}
                className="relative  bg-opacity-90 backdrop-blur-lg  rounded-sm overflow-hidden "
              >
                <img
                  className="w-full h-52 object-cover"
                  src={post.image}
                  alt={post.title}
                />
                <div className="pt-4">
                  <p className="text-gray-500 text-sm">{post.date}</p>
                  <h3 className="text-xl font-bold text-gray-800">
                    {post.title}
                  </h3>

                  <p className="text-gray-800 mt-1">{post.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Blog;
