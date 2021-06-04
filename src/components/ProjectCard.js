import React from "react";
import ImageCarousel from "./ImageCarousel";

const ProjectCard = ({ project }) => {
  console.log(project.image);
  return (
    <div className="col-md-6 projectCard">
      <div className="container ">
        <h3>{project.title}</h3>
        <div>
          {project.image.length > 1 ? (
            <ImageCarousel images={[project.image]} />
          ) : (
            <img className="projectImage" src={project.image} />
          )}
        </div>
        <div className="project-links">
          {project.deployedLink === "" ? <a href="">Deployed site</a> : null}
          <a href="">GitHub Repo</a>
        </div>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
