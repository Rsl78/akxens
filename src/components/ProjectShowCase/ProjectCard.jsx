import PropTypes from "prop-types";

const ProjectCard = ({ project, style, zIndex }) => {
  const { businessType, title, description, img, service } = project;
  console.log(service);

  return (
    <div
      style={{ zIndex, left: "50%", top: "50%", ...style }}
      className={`absolute w-[95%] bg-[#212121] max-w-[1350px]  transition-trans duration-500 ease-out rounded-2xl text-white`}
    >
      <div className="rounded-lg shadow-lg">
        <div className="flex md:flex-row flex-col">
          <div className=" md:w-[30%] px-6 pt-5">
            <h1 className="text-sm font-medium pb-3">
              {Array.isArray(businessType)
                ? businessType.join(", ")
                : businessType}
            </h1>
            <h2 className="text-4xl font-bold mb-5">{title}</h2>
            <p className="leading-relaxed">{description}</p>
          </div>
          <div className="m-3 relative md:w-[70%]">
            <div className="absolute flex flex-wrap gap-2 top-4 right-4  ">
              {Array.isArray(service) ? (
                service.map((item, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 bg-black/20 backdrop-blur-md text-sm rounded-full shadow"
                  >
                    {item}
                  </div>
                ))
              ) : (
                <div className="px-3 py-1 bg-black/20 backdrop-blur-md text-sm rounded-full shadow">
                  {service}
                </div>
              )}
            </div>

            <img
              className="h-full w-full object-cover rounded-2xl"
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  zIndex: PropTypes.number.isRequired,
};

export default ProjectCard;
