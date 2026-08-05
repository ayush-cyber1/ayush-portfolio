import Reveal from "./Reveal.jsx";
import "./Certificates.css";

// Eagerly imports every image in src/assets/certificates/ so a certificate
// in certificates.js can reference one by filename only, e.g.
// image: "oracle-agentic-ai.jpg" — drop a new file in that folder and
// reference its name the same way to attach an image to any certificate.
const certificateImages = import.meta.glob("../assets/certificates/*", {
  eager: true,
  import: "default",
});

function resolveImage(filename) {
  if (!filename) return null;
  const match = Object.entries(certificateImages).find(([path]) => path.endsWith(`/${filename}`));
  return match ? match[1] : null;
}

export default function CertificateCard({ certificate, delay = 0 }) {
  const imageSrc = resolveImage(certificate.image);

  if (imageSrc) {
    return (
      <Reveal delay={delay} className="certificate-card certificate-card--with-image">
        <div className="certificate-card__banner">
          <img src={imageSrc} alt={`${certificate.title} certificate`} loading="lazy" />
        </div>
        <div className="certificate-card__banner-body">
          <h3 className="certificate-card__title">{certificate.title}</h3>
          <p className="certificate-card__issuer">{certificate.issuer}</p>
          {certificate.date && <span className="certificate-card__date">{certificate.date}</span>}
          {certificate.credentialId && <div className="certificate-card__id">ID: {certificate.credentialId}</div>}
          {certificate.credentialUrl && (
            <a href={certificate.credentialUrl} target="_blank" rel="noreferrer" className="certificate-card__link">view credential →</a>
          )}
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal delay={delay} className="certificate-card">
      <div className="certificate-card__icon" aria-hidden="true">🏅</div>
      <div>
        <h3 className="certificate-card__title">{certificate.title}</h3>
        <p className="certificate-card__issuer">{certificate.issuer}</p>
        {certificate.date && <span className="certificate-card__date">{certificate.date}</span>}
        {certificate.credentialId && <div className="certificate-card__id">ID: {certificate.credentialId}</div>}
        {certificate.credentialUrl && (
          <a href={certificate.credentialUrl} target="_blank" rel="noreferrer" className="certificate-card__link">view credential →</a>
        )}
      </div>
    </Reveal>
  );
}
