import { ArrowUp, ArrowUpRight, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./Footer.css";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          {/* Brand */}

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              MaalikKhan<span>.dev</span>
            </a>

            <p>
              Building digital experiences with creativity, clean code and
              modern web technologies.
            </p>

            <div className="footer-socials">
              <a
                href="https://github.com/Maalikkhan01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/abdul-maalik-khan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}

          <div className="footer-navigation">
            <h4>Quick Links</h4>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>
                    {link.name}
                    <ArrowUpRight size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Availability */}

          <div className="footer-availability">
            <h4>Let's Connect</h4>

            <p>
              Open to internship opportunities, entry-level roles and exciting
              projects.
            </p>

            <a href="#contact" className="footer-contact-link">
              Get in touch
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} MaalikKhan.dev. All rights reserved.</p>

          <p className="footer-made">
            Made with <Heart size={14} /> and React
          </p>

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
