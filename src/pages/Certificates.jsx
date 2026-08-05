import useSEO from "../hooks/useSEO.js";
import profile from "../data/profile.js";
import certificates from "../data/certificates.js";
import PageHeader from "../components/PageHeader.jsx";
import CertificateCard from "../components/CertificateCard.jsx";
import EmptyState from "../components/EmptyState.jsx";
import Reveal from "../components/Reveal.jsx";
import "../components/Certificates.css";

export default function Certificates() {
  useSEO({ title: `Certificates | ${profile.name}`, description: `Courses and certifications completed by ${profile.name}.` });
  return (
    <>
      <PageHeader eyebrow="certificates" title="Courses & certifications" subtitle="Formal learning I've completed alongside my own project-based practice." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {certificates.length > 0 ? (
            <div className="certificates__grid">
              {certificates.map((certificate, index) => <CertificateCard certificate={certificate} key={certificate.id} delay={index * 60} />)}
            </div>
          ) : (
            <Reveal>
              <EmptyState icon="🏅" title="No certificates added yet" text="Add an entry to src/data/certificates.js to publish one." hint="src/data/certificates.js" />
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
