
import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  Wrench,
  Terminal,
} from 'lucide-react';
import './Skills.css';

const skillGroups = [
  {
    title: 'Frontend Development',
    subtitle: 'Building user interfaces',
    icon: Code2,
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'Responsive Design',
      'DOM Manipulation',
    ],
  },
  {
    title: 'Backend Development',
    subtitle: 'Application logic and APIs',
    icon: Server,
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'API Integration',
    ],
  },
  {
    title: 'Database Management',
    subtitle: 'Data storage and management',
    icon: Database,
    skills: [
      'MongoDB',
      'MySQL',
      'DBMS Concepts',
    ],
  },
  {
    title: 'Tools & Programming',
    subtitle: 'Development workflow',
    icon: Wrench,
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'C',
      'C++',
      'Python Basics',
      'Java Basics',
      'Linux Basics',
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section section-padding" id="skills">
      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">MY TECH STACK</span>

          <h2>
            Technical <span className="gradient-text">Skills.</span>
          </h2>

          <p>
            Technologies and tools I use to build digital products.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                className="skill-card"
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -7 }}
              >
                <div className="skill-card-top">
                  <div className="skill-icon">
                    <Icon size={23} />
                  </div>

                  <span className="skill-number">
                    0{index + 1}
                  </span>
                </div>

                <h3>{group.title}</h3>
                <p className="skill-subtitle">{group.subtitle}</p>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="skills-note"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Terminal size={19} />
          <p>
            Continuously learning, building and improving my
            development skills.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;
