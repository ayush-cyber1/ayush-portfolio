import Reveal from "./Reveal.jsx";
import "./Timeline.css";

export default function TimelineItem({ item, delay = 0 }) {
  return (
    <Reveal delay={delay} className="timeline-item">
      <div className="timeline-item__dates">{item.duration}</div>
      <h3 className="timeline-item__role">{item.role}</h3>
      <p className="timeline-item__company">{item.company}{item.location ? ` · ${item.location}` : ""}</p>
      {item.description && <p className="timeline-item__description">{item.description}</p>}
      {item.highlights?.length > 0 && (
        <ul className="timeline-item__highlights">{item.highlights.map((point) => <li key={point}>{point}</li>)}</ul>
      )}
    </Reveal>
  );
}
