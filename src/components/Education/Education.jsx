import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  BookOpen,
  CalendarDays,
  Award,
} from "lucide-react";

import "./Education.css";

const educationData = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Devi Ahilya Vishwavidyalaya (DAVV)",
    location: "School of Computer Science & IT, Indore",
    duration: "2026 – Present",
    description:
      "Currently pursuing MCA, focusing on advanced computer applications, software development and modern technologies.",
    status: "Currently Pursuing",
    icon: GraduationCap,
    featured: true,
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Jagran Lakecity University",
    location: "Bhopal, Madhya Pradesh",
    duration: "2023 – 2026",
    description:
      "Completed undergraduate studies in Computer Applications, building a foundation in programming, databases, software development and web technologies.",
    status: "Graduated",
    icon: GraduationCap,
    featured: false,
  },
  {
    id: 3,
    degree: "Higher Secondary Education (Class 12)",
    institution: "Government Excellence School",
    location: "Pandhurna, Madhya Pradesh",
    duration: "2022 – 2023",
    description:
      "Completed higher secondary education under the Madhya Pradesh Board of Secondary Education.",
    status: "Completed",
    icon: BookOpen,
    featured: false,
  },
  {
    id: 4,
    degree: "Secondary Education (Class 10)",
    institution: "Government Excellence School",
    location: "Pandhurna, Madhya Pradesh",
    duration: "2020 – 2021",
    description:
      "Completed secondary education under the Madhya Pradesh Board of Secondary Education.",
    status: "Completed",
    icon: School,
    featured: false,
  },
];

function Education() {
  return (
    <section className="education-section section-padding" id="education">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">MY BACKGROUND</span>

          <h2>
            Education <span className="gradient-text">Journey.</span>
          </h2>

          <p>My academic journey and educational foundation.</p>
        </motion.div>

        <div className="education-timeline">
          {educationData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="education-item"
                key={item.id}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.15,
                }}
              >
                <div className="education-marker">
                  <Icon size={21} />
                </div>

                <div className="education-card">
                  <div className="education-card-top">
                    <span className="education-duration">
                      <CalendarDays size={14} />
                      {item.duration}
                    </span>

                    <span
                      className={`education-status ${
                        item.featured ? "current" : ""
                      }`}
                    >
                      {item.featured && <Award size={13} />}
                      {item.status}
                    </span>
                  </div>

                  <h3>{item.degree}</h3>
                  <h4>{item.institution}</h4>

                  <span className="education-location">{item.location}</span>

                  <p>{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;
