import profile from "../data/profile.js";
import "./Footer.css";

const SOCIAL_LABELS = { github: "GitHub", linkedin: "LinkedIn", twitter: "Twitter / X", kaggle: "Kaggle", leetcode: "LeetCode" };

export default function Footer() {
  const activeSocials = Object.entries(profile.socials).filter(([, url]) => url);
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__text">© {year} {profile.name}. Built with React &amp; a lot of coffee.</p>
        {activeSocials.length > 0 && (
          <div className="footer__links">
            {activeSocials.map(([key, url]) => <a key={key} href={url} target="_blank" rel="noreferrer">{SOCIAL_LABELS[key] ?? key}</a>)}
          </div>
        )}
      </div>
    </footer>
  );
}
