import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Code2,
  Lightbulb,
  Rocket,
  GraduationCap,
} from 'lucide-react';

import './About.css';

const highlights = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building responsive and user-friendly web applications.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Breaking down problems and finding practical solutions.',
  },
  {
    icon: Rocket,
    title: 'Continuous Learning',
    description: 'Exploring new technologies and improving through projects.',
  },
];

function About() {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">GET TO KNOW ME</span>

          <h2>
            About <span className="gradient-text">Me.</span>
          </h2>

          <p>A little about my journey, mindset and passion.</p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-main-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="about-card-label">WHO I AM</span>

            <h3>
              Turning ideas into
              <span className="gradient-text"> digital experiences.</span>
            </h3>

            <p>
              I'm Abdul Maalik Khan, a Computer Applications graduate
              currently pursuing MCA at DAVV, Indore. I'm passionate
              about web development and building useful digital products.
            </p>

            <p>
              My technical interests include HTML, CSS, JavaScript,
              React, Node.js, Express.js and MongoDB. I enjoy working
              on both frontend interfaces and backend functionality.
            </p>

            <p>
              I believe in learning by building. Through personal
              projects and internship experiences, I'm continuously
              improving my development skills and understanding of
              real-world applications.
            </p>

            <a href="#projects" className="about-link">
              Explore my projects
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <div className="about-side">
            <motion.div
              className="about-education-card"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="about-icon">
                <GraduationCap size={23} />
              </div>

              <span className="about-card-label">CURRENT EDUCATION</span>

              <h3>Master of Computer Applications</h3>

              <p>MCA Student · DAVV, Indore</p>
            </motion.div>

            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="about-highlight-card"
                  key={item.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                >
                  <div className="about-icon">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
