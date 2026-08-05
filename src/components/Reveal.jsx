import useReveal from "../hooks/useReveal.js";

export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const [ref, isVisible] = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${isVisible ? "is-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
