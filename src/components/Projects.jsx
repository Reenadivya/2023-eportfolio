import React from "react";
import { Link } from "react-router-dom";
import Project from "./ui/Project";
import { projects } from "../Data.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section__title">Featured Projects</h1>
        </div>

        <ul className="project__list">
          {projects?.slice(0, 4).map((project) => (
            <Project project={project} key={project?.id} />
          ))}
        </ul>
      </div>
      <Link to="/projects" className="link__btn projects__btn">
        <button className="btn">
          More Projects
          <span>
            {" "}
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </Link>
    </section>
  );
}

export default Projects;
