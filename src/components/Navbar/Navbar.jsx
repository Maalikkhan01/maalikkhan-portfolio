import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
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

        <div id="nav-menu" className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={closeMenu}>
              {link.name}
            </a>
          ))}

          <a
            href="/resume/Abdul_Maalik_Khan.pdf"
            download="Abdul_Maalik_Khan.pdf"
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
          type="button"
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
