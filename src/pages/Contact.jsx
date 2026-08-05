import { useState } from "react";
import useSEO from "../hooks/useSEO.js";
import profile from "../data/profile.js";
import PageHeader from "../components/PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import "./Contact.css";

const SOCIAL_LABELS = { github: "GitHub", linkedin: "LinkedIn", twitter: "Twitter / X", kaggle: "Kaggle", leetcode: "LeetCode" };

export default function Contact() {
  useSEO({ title: `Contact | ${profile.name}`, description: `Get in touch with ${profile.name} for data science and analytics opportunities.` });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const activeSocials = Object.entries(profile.socials).filter(([, url]) => url);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client…");
  }

  return (
    <>
      <PageHeader eyebrow="contact" title="Let's talk data" subtitle="Whether it's an internship, a project, or just a question about one of my projects — my inbox is open." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact__grid">
            <Reveal>
              <div className="contact__info-item"><div className="contact__info-label">email</div><div className="contact__info-value"><a href={`mailto:${profile.email}`}>{profile.email}</a></div></div>
              {profile.phone && <div className="contact__info-item"><div className="contact__info-label">phone</div><div className="contact__info-value"><a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></div></div>}
              <div className="contact__info-item"><div className="contact__info-label">location</div><div className="contact__info-value">{profile.location}</div></div>
              {activeSocials.length > 0 && (
                <div className="contact__info-item">
                  <div className="contact__info-label">elsewhere</div>
                  <div className="contact__socials">{activeSocials.map(([key, url]) => <a key={key} href={url} target="_blank" rel="noreferrer" className="btn">{SOCIAL_LABELS[key] ?? key}</a>)}</div>
                </div>
              )}
            </Reveal>

            <Reveal delay={100}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row"><label htmlFor="name">your name</label><input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Jane Doe" /></div>
                <div className="contact-form__row"><label htmlFor="email">your email</label><input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@example.com" /></div>
                <div className="contact-form__row"><label htmlFor="message">message</label><textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange} placeholder="Tell me a bit about the opportunity or project…" /></div>
                <button type="submit" className="btn btn-primary">send message →</button>
                {status && <p className="contact-form__status">{status}</p>}
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
