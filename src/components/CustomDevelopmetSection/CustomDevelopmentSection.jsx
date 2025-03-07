import CustomDevelopmentCard from "./CustomDevelopmentCard";

const CustomDevelopmentSection = () => {
  return (
    <div className="bg-[#040D12] p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 max-w-[1350px] mx-auto ">
        <CustomDevelopmentCard />
        <CustomDevelopmentCard />
        <CustomDevelopmentCard />
        <CustomDevelopmentCard />
        <CustomDevelopmentCard />
        <CustomDevelopmentCard />
      </div>
    </div>
  );
};

export default CustomDevelopmentSection;
