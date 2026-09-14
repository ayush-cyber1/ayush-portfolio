import Reveal from "./Reveal.jsx";
import "./Projects.css";

// Eagerly imports every image in src/assets/projects/ so a project
// in projects.js can reference one by filename only, e.g.
// image: "my-project.png" — drop a new file in that folder and
// reference its name the same way.
const projectImages = import.meta.glob("../assets/projects/*", {
  eager: true,
  import: "default",
});

function resolveImage(filename) {
  if (!filename) return null;
  const match = Object.entries(projectImages).find(([path]) => path.endsWith(`/${filename}`));
  return match ? match[1] : null;
}

export default function ProjectCard({ project, delay = 0 }) {
  const imageSrc = resolveImage(project.image);
  return (
    <Reveal delay={delay} className="project-card">
      <div className="project-card__media">
        {imageSrc ? <img src={imageSrc} alt={project.title} loading="lazy" /> : <span>preview image goes here</span>}
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
