import { NavLink } from "react-router-dom";
import projects from "../data/projects.js";
import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";
import EmptyState from "./EmptyState.jsx";
import Reveal from "./Reveal.jsx";
import "./Projects.css";

export default function ProjectsPreview() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const shown = featured.length > 0 ? featured : projects.slice(0, 3);

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading eyebrow="projects" title="Selected work" subtitle="A few things I've built, end to end — from raw data to a working, shareable result." />
        {shown.length > 0 ? (
          <>
            <div className="projects__grid">{shown.map((project, index) => <ProjectCard project={project} key={project.id} delay={index * 100} />)}</div>
            <div className="projects__footer-cta"><NavLink to="/projects" className="btn">view all projects →</NavLink></div>
          </>
        ) : (
          <Reveal>
            <EmptyState icon="{ }" title="Projects are on their way" text="Add entries to src/data/projects.js any time to publish them here." hint="src/data/projects.js" />
          </Reveal>
        )}
      </div>
    </section>
  );
}
