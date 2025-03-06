import ServiceCard from "./ServiceCard";
import Button from "../common/Button";

const ServiceWeProvideSection = () => {
    return (
      <div className="pb-20">
        <h1 className="text-4xl text-center font-bold py-20">
          Services we provide
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
        <div className="flex justify-center mt-5">
          <Button title="Request a quest" />
        </div>
      </div>
    );
};

export default ServiceWeProvideSection;