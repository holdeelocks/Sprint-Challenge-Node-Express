import React from "react";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="list">
      {projects &&
        projects.map((project, i) => (
          <div key={i}>
            <Link to="/">{project.name}</Link>
            {project.description}
          </div>
        ))}
    </div>
  );
};

export default ProjectList;
