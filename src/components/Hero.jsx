import { NavLink } from "react-router-dom";
import profile from "../data/profile.js";
import useTypingEffect from "../hooks/useTypingEffect.js";
import DataField from "./DataField.jsx";
import ayushPhoto from "../assets/ayush-photo.jpg";
import "./Hero.css";

export default function Hero() {
  const typedRole = useTypingEffect(profile.roles);
  const visibleStats = profile.stats.filter((s) => s.value > 0);

  return (
    <section className="hero" id="top">
      <DataField className="hero__canvas" />

      <div className="container hero__inner">
        <div className="hero__layout">
          <div>
            <span className="hero__eyebrow">
              <span className="hero__eyebrow-dot" />
              open to data science / analyst internship roles
            </span>

            <h1 className="hero__title">
              Hi, I&apos;m {profile.name.split(" ")[0]}
              <br />
              <span className="hero__title-accent">I make data make sense.</span>
            </h1>

            <div className="hero__role">
              {typedRole}
              <span className="hero__role-cursor" aria-hidden="true" />
            </div>

            <p className="hero__tagline">{profile.tagline}</p>

            <div className="hero__actions">
              <NavLink to="/projects" className="btn btn-primary">view my work →</NavLink>
              <NavLink to="/contact" className="btn">get in touch</NavLink>
              {profile.resumeUrl && (
                <a href={profile.resumeUrl} className="btn" target="_blank" rel="noreferrer">download resume</a>
              )}
            </div>

            {visibleStats.length > 0 && (
              <div className="hero__stats">
                {visibleStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="hero__stat-value">{stat.value}+</div>
                    <div className="hero__stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="hero__portrait-wrap">
            <div className="hero__portrait-frame">
              <img src={ayushPhoto} alt={`${profile.name} portrait`} />
            </div>
            <span className="hero__portrait-tag">// {profile.location.split(",")[0]}</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">scroll<span /></div>
    </section>
  );
}
