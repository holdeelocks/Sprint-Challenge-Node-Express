import React from "react";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="projectlist">
      {projects &&
        projects.map((project, i) => (
          <div key={i}>
            <Link to={`/projects/${project.id}`}>{project.name}</Link>
            <p>{project.description}</p>
          </div>
        ))}
    </div>
  );
};

export default ProjectList;
