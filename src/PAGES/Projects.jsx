import { useState } from "react";
import "./Projects.css";
import projectData from "../JSON/Project.json";
import { KnowMore } from "../KnowMore";
import { NavLink } from "react-router-dom";

export const Projects = () => {
  // 1. React State to track which project is currently clicked
  const [selectedProject, setSelectedProject] = useState(null);

  // 2. You don't need useEffect!
  // Since projectData is imported directly, you can just assign it to state once.
  const [data] = useState(projectData);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="project-grid">
          {/* 3. The Map Function renders all cards automatically */}
          {data.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="card-image-wrapper">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.shortDesc}</p>

                <div className="project-links">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    GitHub
                  </a>
                </div>

                {/* Just a standard button. NavLink would navigate away and break the modal popup. */}
                <NavLink
                  to={`/projects/${project.id}`}
                  className="btn-know-more"
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="strong"
                  >
                    <strong>Know More</strong>
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
          <KnowMore
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        )}
      </div>
    </section>
  );
};
