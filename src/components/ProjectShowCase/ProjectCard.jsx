

const ProjectCard = ({ project, style, zIndex }) => {
  return (
    <div
      style={{ zIndex, left: "50%", top: "50%", ...style }}
      className={`absolute min-w-[1350px] h-4/5 transition-all duration-500 ease-out ${project.bgColor}`}
    >
      <div className="p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-700">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
