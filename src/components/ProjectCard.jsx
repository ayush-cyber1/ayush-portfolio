import Reveal from "./Reveal.jsx";
import "./Projects.css";

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal delay={delay} className="project-card">
      <div className="project-card__media">
        {project.image ? <img src={project.image} alt={project.title} loading="lazy" /> : <span>preview image goes here</span>}
      </div>
      <div className="project-card__body">
        {project.featured && <span className="project-card__featured-badge">featured</span>}
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        {project.tags?.length > 0 && (
          <div className="project-card__tags">{project.tags.map((tag) => <span className="project-card__tag" key={tag}>{tag}</span>)}</div>
        )}
        <div className="project-card__links">
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn">live demo</a>}
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn">source</a>}
        </div>
      </div>
    </Reveal>
  );
}
