import { NavLink } from "react-router-dom";
import profile from "../data/profile.js";
import Reveal from "./Reveal.jsx";
import "./ContactCta.css";

export default function ContactCta() {
  return (
    <section className="section" id="contact-cta">
      <div className="container">
        <Reveal className="contact-cta">
          <span className="eyebrow" style={{ justifyContent: "center" }}>get in touch</span>
          <h2 className="contact-cta__title">Let&apos;s work with data together.</h2>
          <p className="contact-cta__text">Have a role, a project, or a dataset that needs a closer look? I&apos;d love to hear about it.</p>
          <div className="contact-cta__actions">
            <NavLink to="/contact" className="btn btn-primary">say hello</NavLink>
            <a href={`mailto:${profile.email}`} className="btn">{profile.email}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
