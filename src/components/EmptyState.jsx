import "./EmptyState.css";

export default function EmptyState({ icon = "＋", title, text, hint }) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon" aria-hidden="true">{icon}</div>
      <p className="empty-state__title">{title}</p>
      <p className="empty-state__text">{text}</p>
      {hint && <span className="empty-state__hint">{hint}</span>}
    </div>
  );
}
