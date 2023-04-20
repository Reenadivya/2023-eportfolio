import React from "react";
import Project from "../components/ui/Project";
import { projects } from "../Data.jsx";

function ProjectsInfo() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="projects__title">All Projects</h1>
        </div>
        <ul className="project__list">
          {projects?.map((project) => (
            <Project project={project} key={project?.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectsInfo;
