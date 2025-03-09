import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";



const ProjectShowcase = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Dummy data for demonstration.
  const projects = [
    {
      id: 1,
      businessType: ["Ecommerce"],
      title: "Project Alpha",
      description:
        "WEZOM's team developed a custom B2B web portal for a manufacturer of medical rehabilitation equipment. Our primary goal was to streamline order processing and cut down the management team's workload. This new platform replaces the former order system, enabling customers to access the product catalog, view order history, review documentation, and track payment statuses faster.",
      img: "https://wezom.com/storage/cases/small/2QWqUuz7107XAyGIpCHkYNh1CFWFaAd3rfggRRSQ.png.webp?v=1740504230",
      service: "Custom Software",
    },
    {
      id: 2,
      businessType: ["Ecommerce", "Menufacturing"],
      title: "Project Alpha",
      description:
        "WEZOM's team developed a custom B2B web portal for a manufacturer of medical rehabilitation equipment. Our primary goal was to streamline order processing and cut down the management team's workload. This new platform replaces the former order system, enabling customers to access the product catalog, view order history, review documentation, and track payment statuses faster.",
      img: "https://wezom.com/storage/cases/small/E7Y4HeCkXh0Oi1TuOjy7dJ7XqSXcHYQ34Hyeus94.png.webp?v=1737118713",
      service: "Custom Software",
    },
    {
      id: 3,
      businessType: ["Ecommerce", "Menufacturing"],
      title: "Project Alpha",
      description:
        "WEZOM's team developed a custom B2B web portal for a manufacturer of medical rehabilitation equipment. Our primary goal was to streamline order processing and cut down the management team's workload. This new platform replaces the former order system, enabling customers to access the product catalog, view order history, review documentation, and track payment statuses faster.",
      img: "https://wezom.com/storage/cases/small/TPPhqBhChVYPOq17I1HdFSHf8hNVBIPo1ufA2J17.png.webp?v=1691049593",
      service: ["Web Development", "Custom Software"],
    },
    {
      id: 4,
      businessType: ["Ecommerce", "Menufacturing"],
      title: "Project Alpha",
      description:
        "WEZOM's team developed a custom B2B web portal for a manufacturer of medical rehabilitation equipment. Our primary goal was to streamline order processing and cut down the management team's workload. This new platform replaces the former order system, enabling customers to access the product catalog, view order history, review documentation, and track payment statuses faster.",
      img: "https://wezom.com/storage/cases/small/Ma528qUFRb76OWmFTUph1dPysfI3J06ne6JR22Tm.png.webp?v=1731940495",
      service: [
        "Mobile App",
        "Web Development",
        "UI/UX Design",
        "Custom Software",
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerTop = containerRef.current.getBoundingClientRect().top;
        const newProgress = Math.min(
          Math.max(-containerTop / window.innerHeight, 0),
          projects.length
        );
        setProgress(newProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [projects.length]);

  // Determine the active card index and fractional progress.
  const activeIndex = Math.floor(progress);
  const fraction = progress - activeIndex;
  const offset = window.innerHeight; // Full viewport height offset

  const getCardStyle = (index) => {
    // All transforms now start with centering via translate(-50%, -50%)
    if (index < activeIndex) {
      // Already transitioned out.
      return {
        transform: `translate(-50%, -50%) translateY(0px) scale(1)`,
        opacity: 0,
      };
    } else if (index === activeIndex) {
      // Active card (background) fades and scales down—unless it's the last card.
      if (index === projects.length - 1) {
        return {
          transform: `translate(-50%, -50%) translateY(0px) scale(1)`,
          opacity: 1,
        };
      }
      const fadeThreshold = 0.3;
      let opacity = 1;
      if (fraction > fadeThreshold) {
        opacity = Math.max(
          1 - (fraction - fadeThreshold) / (1 - fadeThreshold),
          0
        );
      }
      const scale = 1 - 0.2 * fraction;
      return {
        transform: `translate(-50%, -50%) translateY(0px) scale(${scale})`,
        opacity,
      };
    } else if (index === activeIndex + 1) {
      // Entering card slides upward from below (while remaining fully opaque).
      return {
        transform: `translate(-50%, -50%) translateY(${
          offset * (1 - fraction)
        }px) scale(1)`,
        opacity: 1,
      };
    } else {
      // Cards further down remain offscreen.
      return {
        transform: `translate(-50%, -50%) translateY(${offset}px) scale(1)`,
        opacity: 0,
      };
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${projects.length * 100}vh` }}
    >
      {/* Sticky container with bg-black that fills the viewport */}
      <div className="sticky top-0 h-screen mx-auto bg-black">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            zIndex={index + 1}
            style={getCardStyle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
