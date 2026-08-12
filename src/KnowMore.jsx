import { useParams, useNavigate } from "react-router-dom";
import projectData from "./JSON/Project.json"; // Import your JSON directly
import "./KnowMore.css";

export const KnowMore = () => {
  const { id } = useParams(); // Grabs the project ID from the URL
  const navigate = useNavigate();

  // Find the exact project from the JSON that matches the URL ID
  const project = projectData.find((p) => String(p.id) === String(id));

  // If a user types a wrong URL, show a fallback message
  if (!project) return null;

  // Notice we now use `project.title`, `project.image` instead of `selectedProject`
  return (
    <section className="knowmore-standalone-section">
      <div className="container">
        <div className="knowmore-card">
          {/* Project Image */}
          <div className="knowmore-image-wrapper">
            <img
              src={project.image}
              alt={project.title}
              className="knowmore-img"
            />
          </div>

          {/* Project Content */}
          <div className="knowmore-content">
            <h2 className="knowmore-title">{project.title}</h2>
            <p className="knowmore-desc">{project.longDesc}</p>

            {/* === STATIC METERS SECTION === */}
            {project.meters && project.meters.length > 0 && (
              <div className="knowmore-meters-container">
                <h4 className="meters-title">
                  Tech Proficiency & Implementation
                </h4>
                {project.meters.map((meter, index) => (
                  <div key={index} className="static-meter">
                    <div className="meter-label-row">
                      <span className="meter-name">{meter.label}</span>
                      <span className="meter-percent">{meter.percentage}%</span>
                    </div>
                    <div className="meter-track">
                      <div
                        className="meter-fill"
                        style={{ width: `${meter.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Links & Navigation */}
            <div className="knowmore-actions">
              <div className="project-links">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    GitHub
                  </a>
                )}
              </div>

              {/* Go Back Button */}
              <div className="back-btn-wrapper">
                <button
                  className="btn btn-outline go-back-btn"
                  onClick={() => navigate(-1)}
                >
                  &larr; Go Back to Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
