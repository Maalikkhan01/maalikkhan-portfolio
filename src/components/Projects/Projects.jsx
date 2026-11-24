import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
  ShoppingCart,
  BrainCircuit,
  MessageCircle,
  Repeat2,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import "./Projects.css";

const projects = [
  {
    id: "ame",
    number: "01",
    name: "AME Billing ERP",
    category: "RETAIL BUSINESS MANAGEMENT SYSTEM",
    description:
      "A full-stack billing and business management system built for small retail shops. It helps manage daily billing operations, customers, inventory, payments and business reports through a centralized application.",
    features: [
      "Billing & Invoice Generation",
      "Customer & Ledger Management",
      "Inventory Management",
      "Sales & Due Reports",
      "Payment & Return Management",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    icon: ShoppingCart,
    featured: true,
    status: "Featured Project",
    theme: "ame",
    github: "https://github.com/Maalikkhan01/ame-billing-erp",
    demo: "",
  },
  {
    id: "twiller",
    number: "03",
    name: "Twiller",
    category: "SOCIAL MEDIA APPLICATION",
    description:
      "A Twitter-inspired social media application developed to explore modern web technologies, authentication, backend integration and real-time communication.",
    features: [
      "Social Media Interface",
      "Firebase Admin Integration",
      "Real-time Notifications",
    ],
    technologies: ["Next.js", "Firebase", "Socket.io"],
    icon: MessageCircle,
    featured: true,
    status: "Development Project",
    theme: "twiller",
    github: "https://github.com/Maalikkhan01/Twiller",
    demo: "",
  },
  {
    id: "skillxchange",
    number: "04",
    name: "SkillXchange",
    category: "COMMUNITY PLATFORM",
    description:
      "A Django-based skill exchange platform concept that allows people to connect with others, share their abilities and exchange knowledge.",
    features: [
      "User Profiles",
      "Skill Management",
      "Skill Matching",
      "Community Interaction",
    ],
    technologies: ["Python", "Django", "SQLite"],
    icon: Repeat2,
    featured: false,
    status: "Development Project",
    theme: "skillxchange",
    github:
      "https://github.com/Maalikkhan01/SkillXchange-Local-Telent-Barter-Hub-",
    demo: "",
  },
];

function ProjectVisual({ project }) {
  const Icon = project.icon;

  return (
    <div className={`project-visual ${project.theme}`}>
      <div className="project-visual-glow" />

      <div className="project-window">
        <div className="project-window-top">
          <div className="window-dots">
            <span />
            <span />
            <span />
          </div>
          <span>{project.name}</span>
          <Layers3 size={16} />
        </div>

        <div className="project-window-body">
          <div className="project-preview-icon">
            <Icon size={34} />
          </div>

          <span className="preview-label">{project.category}</span>

          <h3>{project.name}</h3>

          <div className="preview-lines">
            <span />
            <span />
            <span />
          </div>

          <div className="preview-blocks">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      <div className="project-floating-label">
        <span className="project-floating-dot" />
        {project.status}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={`project-card ${project.featured ? "featured-project" : ""}`}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
    >
      <ProjectVisual project={project} />

      <div className="project-content">
        <div className="project-meta">
          <span>{project.number} / PROJECT</span>
          <span>{project.status}</span>
        </div>

        <h3>{project.name}</h3>

        <p className="project-description">{project.description}</p>

        <div className="project-features">
          {project.features.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>

        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaGithub size={17} />
              Source Code
              <ArrowUpRight size={15} />
            </a>
          ) : (
            <span className="project-link unavailable">
              <FaGithub size={17} />
              Source link pending
            </span>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-demo"
            >
              Live Demo <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <section className="projects-section section-padding" id="projects">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">SELECTED WORK</span>

          <h2>
            Featured <span className="gradient-text">Projects.</span>
          </h2>

          <p>A collection of applications and ideas I've worked on.</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="projects-footer">
          <span>More projects and experiments coming soon.</span>
        </div>
      </div>
    </section>
  );
}

export default Projects;
