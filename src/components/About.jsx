import profile from "../data/profile.js";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import ayushPhoto from "../assets/ayush-photo.jpg";
import "./About.css";

const SOCIAL_LABELS = { github: "GitHub", linkedin: "LinkedIn", twitter: "Twitter / X", kaggle: "Kaggle", leetcode: "LeetCode" };

export default function About() {
  const activeSocials = Object.entries(profile.socials).filter(([, url]) => url);

  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="about"
          title="A little about how I work"
          subtitle="The short version: curious about data, comfortable with code, focused on outcomes that make sense to non-technical people too."
        />

        <div className="about__grid">
          <Reveal className="about__body" delay={80}>
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={160}>
            <div className="about__panel">
              <div className="about__panel-avatar"><img src={ayushPhoto} alt={profile.name} /></div>
              <div className="about__panel-row"><span className="about__panel-label">based in</span><span className="about__panel-value">{profile.location}</span></div>
              <div className="about__panel-row"><span className="about__panel-label">focus</span><span className="about__panel-value">Data Science / Analytics</span></div>
              <div className="about__panel-row"><span className="about__panel-label">education</span><span className="about__panel-value">{profile.education.degree}</span></div>
              <div className="about__panel-row"><span className="about__panel-label">university</span><span className="about__panel-value">{profile.education.institution}</span></div>
              <div className="about__panel-row"><span className="about__panel-label">email</span><span className="about__panel-value">{profile.email}</span></div>
              <div className="about__panel-row"><span className="about__panel-label">status</span><span className="about__panel-value">open to internships</span></div>

              {activeSocials.length > 0 && (
                <div className="about__socials">
                  {activeSocials.map(([key, url]) => (
                    <a key={key} href={url} target="_blank" rel="noreferrer" className="btn">{SOCIAL_LABELS[key] ?? key}</a>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
