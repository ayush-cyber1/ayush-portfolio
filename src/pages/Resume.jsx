import useSEO from "../hooks/useSEO.js";
import profile from "../data/profile.js";
import PageHeader from "../components/PageHeader.jsx";
import EmptyState from "../components/EmptyState.jsx";
import Reveal from "../components/Reveal.jsx";
import "./Resume.css";

export default function Resume() {
  useSEO({ title: `Resume | ${profile.name}`, description: `View and download ${profile.name}'s resume.` });

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const resumeUrl = profile.resumeUrl ? `${base}${profile.resumeUrl}` : null;

  return (
    <>
      <PageHeader eyebrow="resume" title="My resume" subtitle="Preview it below, or download the PDF directly." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {resumeUrl ? (
            <>
              <Reveal className="resume-page__actions">
                <a href={resumeUrl} download className="btn btn-primary">download PDF ↓</a>
                <a href={resumeUrl} target="_blank" rel="noreferrer" className="btn">open in new tab</a>
              </Reveal>

              <Reveal delay={100}>
                <div className="resume-page__viewer">
                  <iframe src={resumeUrl} title={`${profile.name} resume`} />
                </div>
                <p className="resume-page__fallback">
                  Preview not loading (common on some mobile browsers)? Use the buttons above instead.
                </p>
              </Reveal>
            </>
          ) : (
            <Reveal>
              <EmptyState icon="📄" title="Resume not added yet" text="Set resumeUrl in src/data/profile.js to enable this page." hint="src/data/profile.js" />
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}