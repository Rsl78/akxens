import ResultCard from "./ResultCard";


const BestResultSection = () => {
    const cards = [
      {
        id: 1,
        title: "Clear communication",
        description:
          "We build relationships based on integrity and trust, deliver on our promises, and always maintain clear communication.",
        bgColor: "bg-purple-500",
        rotateClass: "rotate-[4deg]", // store the entire class here
      },
      {
        id: 2,
        title: "Customer-Centric Approach",
        description:
          "We prioritize our client’s success, understand your unique needs, and deliver tailored solutions that drive your business growth.",
        bgColor: "bg-blue-600",
        rotateClass: "rotate-[-2deg]",
      },
      {
        id: 3,
        title: "Innovation and Excellence",
        description:
          "We consistently deliver innovative, high-quality solutions as a team on the cutting edge of technology trends.",
        bgColor: "bg-sky-500",
        rotateClass: "rotate-[3deg]",
      },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 ">
            {cards.map((card) => (
                <ResultCard key={card.id} card={card} />
            ))}

        </div>
    );
};

export default BestResultSection;