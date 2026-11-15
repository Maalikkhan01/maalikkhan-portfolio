import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Code2,
  Database,
  Terminal,
  GraduationCap,
  ExternalLink,
} from "lucide-react";

import "./Certificates.css";

const certificatesData = [
  {
    id: 1,
    title: "Cyber Security and Privacy",
    organization: "NPTEL – IIT Madras",
    category: "Cyber Security",
    year: "2025",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Full Stack Web Development Internship",
    organization: "ElevanceSkills",
    category: "Internship",
    year: "2026",
    icon: Code2,
  },
  {
    id: 3,
    title: "Data Science Internship",
    organization: "ShadowFox",
    category: "Internship",
    year: "2026",
    icon: Database,
  },
  {
    id: 4,
    title: "National Student Paryavaran Competition",
    organization: "DAVV – SCSIT",
    category: "Silver Achievement",
    year: "2026",
    icon: Award,
  },
  {
    id: 5,
    title: "Viksit Bharat Young Leaders Dialogue",
    organization: "MY Bharat",
    category: "Participation",
    year: "2026",
    icon: GraduationCap,
  },
  {
    id: 6,
    title: "Linux for Absolute Beginners",
    organization: "KodeKloud",
    category: "Linux",
    year: "2025",
    icon: Terminal,
  },
  {
    id: 7,
    title: "Basics of Cisco Networking",
    organization: "Coursera – LearnQuest",
    category: "Networking",
    year: "2024",
    icon: Database,
  },
  {
    id: 8,
    title: "English Communication Skills",
    organization: "Coursera – Georgia Institute of Technology",
    category: "Communication",
    year: "2023",
    icon: GraduationCap,
  },
  {
    id: 9,
    title: "Professional ePortfolio in English",
    organization: "Coursera – Georgia Institute of Technology",
    category: "Professional Development",
    year: "2023",
    icon: GraduationCap,
  },
];

function Certificates() {
  return (
    <section className="certificates-section section-padding" id="certificates">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">ACHIEVEMENTS & LEARNING</span>

          <h2>
            Certifications <span className="gradient-text">& Awards.</span>
          </h2>

          <p>Certifications and achievements from my learning journey.</p>
        </motion.div>

        <div className="certificates-grid">
          {certificatesData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="certificate-card"
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.1,
                }}
              >
                <div className="certificate-card-top">
                  <div className="certificate-icon">
                    <Icon size={23} />
                  </div>

                  <span className="certificate-year">{item.year}</span>
                </div>

                <span className="certificate-category">{item.category}</span>

                <h3>{item.title}</h3>

                <p>{item.organization}</p>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-footer"
                    aria-label={`View ${item.title} certificate`}
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <div className="certificate-footer unavailable">
                    <span>Certificate link unavailable</span>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
