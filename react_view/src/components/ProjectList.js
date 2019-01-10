import React from "react";
import { Link, NavLink } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="list">
      <nav>
        <NavLink to="/" className="navlink">
          Home
        </NavLink>
      </nav>
      {projects &&
        projects.map((project, i) => (
          <div key={i}>
            <Link to={`/projects/${project.id}`}>{project.name}</Link>
            {project.description}
          </div>
        ))}
    </div>
  );
};

export default ProjectList;
