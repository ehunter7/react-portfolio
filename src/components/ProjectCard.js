import React from "react";
import ImageCarousel from "./ImageCarousel";

const ProjectCard = ({ project }) => {
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
          {project.deployedLink !== "" ? (
            <a className="project-link" href={project.deployedLink}>
              Deployed site
            </a>
          ) : null}
          <a className="project-link" href={project.gitHubLink}>
            GitHub Repo
          </a>
        </div>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
