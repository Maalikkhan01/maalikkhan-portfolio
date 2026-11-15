import { motion } from "framer-motion";
import { CalendarDays, MapPin, Code2, Database } from "lucide-react";

import "./Experience.css";

const experienceData = [
  {
    id: 1,
    company: "ElevanceSkills",
    role: "Full Stack Web Development Intern",
    duration: "Jan 2026 – Apr 2026",
    type: "3 Months",
    location: "Remote",
    description:
      "Completed a full stack web development internship, gaining practical exposure to web development and modern application technologies.",
    icon: Code2,
    skills: ["Web Development", "Frontend", "Backend"],
  },
  {
    id: 2,
    company: "ShadowFox",
    role: "Data Science Intern",
    duration: "Mar 2026",
    type: "1 Month",
    location: "Virtual Internship",
    description:
      "Completed a virtual internship in Data Science, gaining exposure to data analysis and working with data-driven projects.",
    icon: Database,
    skills: ["Data Science", "Data Analysis"],
  },
];

function Experience() {
  return (
    <section className="experience-section section-padding" id="experience">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">PROFESSIONAL JOURNEY</span>

          <h2>
            Internship <span className="gradient-text">Experience.</span>
          </h2>

          <p>My practical learning experiences and professional exposure.</p>
        </motion.div>

        <div className="experience-grid">
          {experienceData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="experience-card"
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.15,
                }}
              >
                <div className="experience-card-header">
                  <div className="experience-icon">
                    <Icon size={23} />
                  </div>

                  <span className="experience-duration">{item.type}</span>
                </div>

                <h3>{item.role}</h3>

                <h4>{item.company}</h4>

                <div className="experience-meta">
                  <span>
                    <CalendarDays size={14} />
                    {item.duration}
                  </span>

                  <span>
                    <MapPin size={14} />
                    {item.location}
                  </span>
                </div>

                <p className="experience-description">{item.description}</p>

                <div className="experience-skills">
                  {item.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
