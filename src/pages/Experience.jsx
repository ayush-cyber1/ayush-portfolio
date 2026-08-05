import useSEO from "../hooks/useSEO.js";
import profile from "../data/profile.js";
import experience from "../data/experience.js";
import PageHeader from "../components/PageHeader.jsx";
import TimelineItem from "../components/TimelineItem.jsx";
import EmptyState from "../components/EmptyState.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Experience() {
  useSEO({ title: `Experience | ${profile.name}`, description: `Internships and work experience of ${profile.name}.` });
  return (
    <>
      <PageHeader eyebrow="experience" title="Where I've worked" subtitle="Project-based internships where I applied my data and software skills to real work." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {experience.length > 0 ? (
            <div className="timeline">
              {experience.map((item, index) => <TimelineItem item={item} key={item.id} delay={index * 80} />)}
            </div>
          ) : (
            <Reveal>
              <EmptyState icon="💼" title="No experience added yet" text="Add an entry to src/data/experience.js to publish one." hint="src/data/experience.js" />
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
