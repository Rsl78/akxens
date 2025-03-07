import ResultCard from "./ResultCard";
import IcHelp1 from "../../assets/icon/ic_help_1.svg";
import IcHelp2 from "../../assets/icon/ic_help_2.svg";
import IcHelp3 from "../../assets/icon/ic_help_3.svg";


const BestResultSection = () => {
    const cards = [
      {
        id: 1,
        title: "Clear communication",
        description:
          "We build relationships based on integrity and trust, deliver on our promises, and always maintain clear communication.",
        bgColor: "bg-[#7C42DA]",
        rotateClass: "lg:rotate-[4deg] rotate-0", // store the entire class here
        icon: IcHelp1,
      },
      {
        id: 2,
        title: "Customer-Centric Approach",
        description:
          "We prioritize our client’s success, understand your unique needs, and deliver tailored solutions that drive your business growth.",
        bgColor: "bg-[#4252DA]",
        rotateClass: "lg:rotate-[-2deg] rotate-0",
        icon: IcHelp2,
      },
      {
        id: 3,
        title: "Innovation and Excellence",
        description:
          "We consistently deliver innovative, high-quality solutions as a team on the cutting edge of technology trends.",
        bgColor: "bg-[#429ADA]",
        rotateClass: "lg:rotate-[3deg] rotate-0",
        icon: IcHelp3,
      },
    ];
    return (
      <div>
        <h1 className="text-4xl pb-10 font-bold text-center">How Akxens helps you <br /> deliver the best results</h1>
        <div className="px-2 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-0.5 ">
          {cards.map((card) => (
            <ResultCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    );
};

export default BestResultSection;