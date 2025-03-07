import CustomDevelopmentCard from "./CustomDevelopmentCard";

const CustomDevelopmentSection = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
        <CustomDevelopmentCard/>
        <CustomDevelopmentCard/>
        <CustomDevelopmentCard/>
        <CustomDevelopmentCard/>
        <CustomDevelopmentCard/>
        <CustomDevelopmentCard/>
      </div>
    );
};

export default CustomDevelopmentSection;