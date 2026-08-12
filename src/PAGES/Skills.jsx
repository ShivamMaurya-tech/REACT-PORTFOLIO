import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import brand icons
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faJava,
  faGitAlt,
  faGithub,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
// Import solid icons
import { faCode } from "@fortawesome/free-solid-svg-icons";

import "./Skills.css";

export const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="skills-grid">
          <div className="skill-card">
            {/* Added 'html' class */}
            <FontAwesomeIcon icon={faHtml5} className="skill-icon html" />
            <h3>HTML5</h3>
          </div>

          <div className="skill-card">
            {/* Added 'css' class */}
            <FontAwesomeIcon icon={faCss3Alt} className="skill-icon css" />
            <h3>CSS3</h3>
          </div>

          <div className="skill-card">
            {/* Added 'js' class */}
            <FontAwesomeIcon icon={faJs} className="skill-icon js" />
            <h3>JavaScript</h3>
          </div>

          <div className="skill-card">
            {/* Added 'react' class */}
            <FontAwesomeIcon icon={faReact} className="skill-icon react" />
            <h3>React</h3>
          </div>

          <div className="skill-card">
            {/* Added 'java' class */}
            <FontAwesomeIcon icon={faJava} className="skill-icon java" />
            <h3>Java</h3>
          </div>

          <div className="skill-card">
            {/* Added 'git' class */}
            <FontAwesomeIcon icon={faGitAlt} className="skill-icon git" />
            <h3>Git</h3>
          </div>

          <div className="skill-card">
            {/* Added 'github' class */}
            <FontAwesomeIcon icon={faGithub} className="skill-icon github" />
            <h3>GitHub</h3>
          </div>

          <div className="skill-card">
            {/* Added 'vscode' class */}
            <FontAwesomeIcon icon={faCode} className="skill-icon vscode" />
            <h3>VS Code</h3>
          </div>

          <div className="skill-card">
            {/* Added 'python' class */}
            <FontAwesomeIcon icon={faPython} className="skill-icon python" />
            <h3>Python</h3>
          </div>
        </div>
      </div>
    </section>
  );
};