
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Send,
  MessageCircle,
} from 'lucide-react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

// Replace this with your actual email later.
const CONTACT_EMAIL = 'abdulmaalikkhan1010@gmail.com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const contactLinks = [
    {
      icon: Mail,
      title: 'Email',
      value: 'abdulmaalikkhan1010@gmail.com',
      link: `mailto:${CONTACT_EMAIL}`,
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Madhya Pradesh, India',
      link: null,
    },
  ];

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-eyebrow">
            GET IN TOUCH
          </span>

          <h2>
            Let's Work <span className="gradient-text">Together.</span>
          </h2>

          <p>
            Have an opportunity or an interesting project?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-grid">

          {/* Contact Information */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="contact-intro">
              <div className="contact-icon">
                <MessageCircle size={25} />
              </div>

              <h3>Let's start a conversation.</h3>

              <p>
                I'm currently open to internships,
                entry-level opportunities and
                collaborative development projects.
              </p>
            </div>

            <div className="contact-details">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="contact-detail" key={item.title}>
                    <div className="contact-detail-icon">
                      <Icon size={19} />
                    </div>

                    <div>
                      <span>{item.title}</span>

                      {item.link ? (
                        <a href={item.link}>
                          {item.value}
                        </a>
                      ) : (
                        <p>{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="contact-socials">
              <span>CONNECT WITH ME</span>

              <div className="social-links">
                <a
                  href="https://github.com/Maalikkhan01"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub size={19} />
                </a>

                <a
                  href="https://www.linkedin.com/in/abdul-maalik-khan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={19} />
                </a>
              </div>
            </div>

            <div className="availability-card">
              <span className="availability-dot"></span>
              <div>
                <strong>Available for opportunities</strong>
                <p>Open to internships and entry-level roles.</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Send me a message</h3>

            <p className="form-description">
              Fill out the form and let's connect.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit">
                Send Message
                <Send size={17} />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
