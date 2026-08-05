import { NavLink } from "react-router-dom";
import useSEO from "../hooks/useSEO.js";
import Reveal from "../components/Reveal.jsx";

export default function NotFound() {
  useSEO({ title: "Page not found | Ayush Sharma" });
  return (
    <section className="section container" style={{ minHeight: "70vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", paddingTop: 140 }}>
      <Reveal>
        <span className="eyebrow">404</span>
        <h1 className="section-title">This page doesn&apos;t exist in the dataset.</h1>
        <p className="section-subtitle">The page you're looking for was moved, renamed, or never existed. Let's get you back on track.</p>
        <NavLink to="/" className="btn btn-primary">back to home →</NavLink>
      </Reveal>
    </section>
  );
}
