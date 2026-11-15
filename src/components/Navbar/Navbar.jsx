import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <nav className="nav-container container">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          MaalikKhan<span>.dev</span>
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={closeMenu}>
              {link.name}
            </a>
          ))}

          <a
            href="/resume/Abdul-Maalik-Khan-Resume.pdf"
            download="Abdul-Maalik-Khan-Resume.pdf"
            className="nav-resume"
            onClick={closeMenu}
          >
            Resume <ArrowUpRight size={15} />
          </a>
        </div>

        <a href="#contact" className="nav-cta" onClick={closeMenu}>
          Let's Talk <ArrowUpRight size={16} />
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
