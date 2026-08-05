import useSEO from "../hooks/useSEO.js";
import profile from "../data/profile.js";
import projects from "../data/projects.js";
import PageHeader from "../components/PageHeader.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import EmptyState from "../components/EmptyState.jsx";
import Reveal from "../components/Reveal.jsx";
import "../components/Projects.css";

export default function Projects() {
  useSEO({ title: `Projects | ${profile.name}`, description: `Data science and web development projects by ${profile.name}.` });
  return (
    <>
      <PageHeader eyebrow="projects" title="Things I've built" subtitle="End-to-end data and web projects — each one links out to its source code on GitHub." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {projects.length > 0 ? (
            <div className="projects__grid">
              {projects.map((project, index) => <ProjectCard project={project} key={project.id} delay={index * 80} />)}
            </div>
          ) : (
            <Reveal>
              <EmptyState icon="{ }" title="No projects published yet" text="This page renders straight from src/data/projects.js." hint="src/data/projects.js" />
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
