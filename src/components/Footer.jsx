import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Brand Name */}
        <h2 className="footer-brand">
          Frontend Developer<span className="accent"></span>
        </h2>

        {/* Subtitle / Tagline */}
        <p className="footer-subtitle">
          Web Developer <span className="separator">|</span> Java Programmer{" "}
          <span className="separator">|</span> Problem Solver
        </p>

        {/* Social Icons */}
        <div className="footer-socials">
          <a
            href="https://github.com/ShivamMaurya-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.linkedin.com/in/shivam-maurya-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        <div className="footer-divider"></div>

        {/* Dynamic Copyright */}
        <p className="copyright">
          © {new Date().getFullYear()} Shivam Maurya. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
