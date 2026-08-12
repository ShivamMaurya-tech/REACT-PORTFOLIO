import { NavLink } from "react-router-dom";
import { useContext } from "react";
// Adjust path if necessary
import "../components/Header.css";
import { ThemeContext } from "../ThemeContext";

export const Header = () => {
  // Pulling the theme state from your Context API!
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="navbar">
          {/* Logo Section */}
          <div className="logo">
            <NavLink to="/">
              <span className="logo-text">
                Portfolio<span className="logo-accent"></span>
              </span>
            </NavLink>
          </div>

          {/* Navigation Links */}
          <nav className="nav-menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/skills">Skills</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          {/* Theme Toggle Button */}
          <div className="header-actions">
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
