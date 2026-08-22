import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import profile from "../data/profile.js";
import "./Navbar.css";

const NAV_ITEMS = [
  { to: "/", label: "home" },
  { to: "/projects", label: "projects" },
  { to: "/certificates", label: "certificates" },
  { to: "/experience", label: "experience" },
  { to: "/resume", label: "resume" },
  { to: "/contact", label: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__logo">
          <span className="navbar__logo-mark">{profile.initials}</span>
          {profile.name}
        </NavLink>

        <nav className="navbar__links">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className={({ isActive }) => `navbar__link ${isActive ? "is-active" : ""}`}>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn btn-primary navbar__cta">let's talk</NavLink>
        </nav>

        <button type="button" className="navbar__toggle" aria-label="Toggle navigation menu" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((v) => !v)}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="container">
          <div className="navbar__mobile-panel">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"} onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `navbar__link ${isActive ? "is-active" : ""}`}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
