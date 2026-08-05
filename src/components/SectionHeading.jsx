import Reveal from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Reveal>
  );
}
