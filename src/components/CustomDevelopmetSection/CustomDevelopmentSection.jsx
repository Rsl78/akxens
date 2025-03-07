import CustomDevelopmentCard from "./CustomDevelopmentCard";

const CustomDevelopmentSection = () => {
  return (
    <div className="bg-[#0D161A] p-10 rounded-b-4xl">
      <div className="max-w-[1350px] mx-auto ">
        <h1 className="text-white text-2xl md:text-4xl font-bold text-center pb-15 ">
          Tailored Custom Development <br /> Solutions{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FAA818] via-[#E0403B] to-[#CE22E0]">
            for Your Business
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 ">
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
