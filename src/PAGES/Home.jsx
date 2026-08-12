import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faJava,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

import "./Home.css";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-container grid grid-two-column">
          {/* LEFT SIDE: Text & Buttons */}
          <div className="hero-data">
            <p className="hero-greeting">Hi, my name is</p>
            <h2 className="hero-name">
              {/* Added a period inside the span so the purple accent shows up! */}
              Shivam Maurya<span className="accent"></span>
            </h2>

            <h1 className="hero-headline">
              I build data-driven digital experiences.
            </h1>
            <p className="hero-subheadline">
              I'm a Front-End Developer bridging the gap between seamless UI and
              analytical logic. I love transforming complex problems into
              intuitive, high-performance web applications.
            </p>

            <div className="hero-buttons">
              <NavLink to="/projects" className="btn btn-primary">
                View Projects
              </NavLink>

              <a
                href="/Shivam_Maurya_ATS_Resume_90plus_ATS.pdf"
                download="ShivamMaurya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Profile Image with Orbiting Icons */}
          <div className="hero-image-container">
            {/* The Orbiting Icons */}
            <div className="orbit-icon html-icon">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="orbit-icon css-icon">
              <FontAwesomeIcon icon={faCss3Alt} />
            </div>
            <div className="orbit-icon js-icon">
              <FontAwesomeIcon icon={faJs} />
            </div>
            <div className="orbit-icon react-icon">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="orbit-icon java-icon">
              <FontAwesomeIcon icon={faJava} />
            </div>
            <div className="orbit-icon python-icon">
              <FontAwesomeIcon icon={faPython} />
            </div>

            {/* Your Profile Image */}
            <img
              src="/Image.jpg"
              alt="Portrait of Shivam Maurya"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <Skills />
      <Projects />
      <Contact />
    </>
  );
};
