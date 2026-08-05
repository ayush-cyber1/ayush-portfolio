import Reveal from "./Reveal.jsx";
import "./PageHeader.css";

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="container page-header">
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="page-header__title">{title}</h1>
        {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
      </Reveal>
    </div>
  );
}
