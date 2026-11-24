import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Code2, Sparkles } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="availability-dot" />
          Open to Internship & Entry-Level Opportunities
        </motion.div>

        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          HELLO, I'M
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          Abdul Maalik
          <br />
          <span className="gradient-text">Khan.</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          MERN Stack Developer
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          I build responsive web experiences and practical applications using
          React, Node.js and MongoDB. Passionate about turning ideas into useful
          digital products.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          <a href="#projects" className="primary-btn">
            Explore My Work <ArrowUpRight size={18} />
          </a>

          <a href="#contact" className="secondary-btn">
            Let's Connect
          </a>

          <a
            href="/resume/Abdul_Maalik_Khan.pdf"
            download="Abdul_Maalik_Khan.pdf"
            className="secondary-btn"
          >
            Download Resume <ArrowUpRight size={18} />
          </a>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span>FIND ME ON</span>

          <a
            href="https://github.com/Maalikkhan01"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub size={19} />
          </a>

          <a
            href="https://www.linkedin.com/in/abdul-maalik-khan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin size={19} />
          </a>

          <span className="social-divider" />
          <span className="hero-tech">
            <Code2 size={17} /> React · Node.js · MongoDB
          </span>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.9, x: 30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        <div className="hero-glow" />

        <div className="hero-image-card">
          <div className="image-placeholder">
            <img
              src="/images/maalik-profile.png"
              alt="Abdul Maalik Khan - Full Stack Web Developer"
              className="hero-profile-image"
            />
          </div>

          <div className="image-card-bottom">
            <div>
              <span>DEVELOPER</span>
              <h3>Building Digital Ideas.</h3>
            </div>
            <Sparkles size={23} />
          </div>
        </div>

        <div className="floating-card floating-code">
          <Code2 size={20} />
          <div>
            <strong>Clean Code</strong>
            <span>Built with purpose</span>
          </div>
        </div>

        <div className="floating-card floating-stack">
          <span className="stack-dot" />
          <div>
            <strong>MERN Stack</strong>
            <span>My tech focus</span>
          </div>
        </div>

        <a href="#about" className="scroll-indicator">
          <ArrowDown size={16} />
          SCROLL TO EXPLORE
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
