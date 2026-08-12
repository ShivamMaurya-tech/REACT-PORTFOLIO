import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css"; // Ensure this matches your CSS file name

export const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-wrapper grid-two-column">
          {/* LEFT SIDE: Contact Info */}
          <div className="contact-info">
            <h3>Let's Work Together 🚀</h3>
            <p>
              I'm always interested in new opportunities, internships, and
              exciting web development projects.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <span>shivammaurya224466@gmail.com</span>
              </div>

              <div className="contact-item">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <span>Lucknow, Uttar Pradesh, India</span>
              </div>

              <div className="contact-item">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <span>+91-6388959241</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Glassmorphism Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input type="text" placeholder="Your Name" required />
              </div>

              <div className="input-group">
                <input type="email" placeholder="Your Email" required />
              </div>

              <div className="input-group">
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              {/* Using the same primary button class from your Hero section! */}
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
