import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";



const ProjectShowcase = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Dummy data for demonstration.
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description:
        "A groundbreaking project that explores advanced algorithms in artificial intelligence and machine learning.",
      bgColor: "bg-red-800",
    },
    {
      id: 2,
      title: "Project Beta",
      description:
        "A creative approach to UI/UX design with a focus on responsive and user-friendly web interfaces.",
      bgColor: "bg-blue-800",
    },
    {
      id: 3,
      title: "Project Gamma",
      description:
        "An innovative solution to automate workflows and improve productivity in enterprise systems.",
      bgColor: "bg-green-800",
    },
    {
      id: 4,
      title: "Project Delta",
      description:
        "A next-level concept integrating IoT devices to streamline daily activities and processes.",
      bgColor: "bg-purple-800",
    },
    {
      id: 5,
      title: "Project Epsilon",
      description:
        "A platform that harnesses cloud computing for seamless data storage and analytics.",
      bgColor: "bg-indigo-800",
    },
    {
      id: 6,
      title: "Project Zeta",
      description:
        "An advanced microservices architecture that optimizes scalability and maintainability.",
      bgColor: "bg-yellow-800",
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
      <div className="sticky top-0 h-screen bg-black">
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
