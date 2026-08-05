import skills from "../data/skills.js";
import SectionHeading from "./SectionHeading.jsx";
import useReveal from "../hooks/useReveal.js";
import "./Skills.css";

function SkillCard({ category, items, delay }) {
  const [ref, isVisible] = useReveal();
  return (
    <div ref={ref} className={`skills__card reveal ${isVisible ? "is-visible" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      <h3 className="skills__card-title">// {category.toLowerCase()}</h3>
      {items.map((item) =>
        typeof item.level === "number" ? (
          <div className="skills__item" key={item.name}>
            <div className="skills__item-top"><span className="skills__item-name">{item.name}</span><span>{item.level}%</span></div>
            <div className="skills__bar-track"><div className="skills__bar-fill" style={{ width: isVisible ? `${item.level}%` : "0%" }} /></div>
          </div>
        ) : (
          <span className="skills__pill" key={item.name}>{item.name}</span>
        )
      )}
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="skills"
          title="Tools I reach for"
          subtitle="A snapshot of what I currently work with, grouped the way I actually use them. Edit src/data/skills.js to change any of this yourself."
        />
        <div className="skills__grid">
          {skills.map((group, index) => (
            <SkillCard key={group.category} category={group.category} items={group.items} delay={index * 60} />
          ))}
        </div>
        <p className="skills__note">skills are self-reported and updated as I learn — src/data/skills.js</p>
      </div>
    </section>
  );
}
