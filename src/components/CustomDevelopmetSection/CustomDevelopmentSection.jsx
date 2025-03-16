import CustomDevelopmentCard from "./CustomDevelopmentCard";

const CustomDevelopmentSection = () => {
  
  return (
    <div className="bg-[#0D161A]   sm:py-20 sm:p-10 ">
      <div className="max-w-[1350px] mx-auto ">
        <h1 className="text-white text-2xl md:text-4xl font-bold text-center  pb-10">
          Tailored Custom Development <br /> Solutions{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2F80ED] via-[#9B51E0] to-[#E0403B]">
            for Your Business
          </span>
        </h1>
        <div className="grid justify-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
          <CustomDevelopmentCard />
          <CustomDevelopmentCard />
          <CustomDevelopmentCard />
          <CustomDevelopmentCard />
          <CustomDevelopmentCard />
          <CustomDevelopmentCard />
        </div>
      </div>
    </div>
  );
};

export default CustomDevelopmentSection;
