import ServiceCard from "./ServiceCard";

const ServiceWeProvideSection = () => {
    return (
        <div>
            <h1 className="text-4xl text-center font-bold py-20">Services we provide</h1>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
            </div>
        </div>
    );
};

export default ServiceWeProvideSection;