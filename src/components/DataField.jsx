import { useEffect, useRef } from "react";

/**
 * DataField — signature animated background: a quiet field of drifting
 * nodes that connect with faint lines when close, evoking a scatter plot
 * / neural network. Pauses fully under prefers-reduced-motion.
 */
export default function DataField({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    let width = 0, height = 0, nodes = [], animationFrameId;
    const COLORS = ["#ff6b4a", "#4ad8ff"];

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width; height = rect.height;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

      const count = Math.min(70, Math.floor((width * height) / 14000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width, y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 1, color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    }

    function drawStatic() {
      ctx.clearRect(0, 0, width, height);
      nodes.forEach((n) => {
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.color; ctx.globalAlpha = 0.6; ctx.fill();
      });
      ctx.globalAlpha = 1;
    }

    function tick() {
      ctx.clearRect(0, 0, width, height);
      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      });
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = "#232b38"; ctx.globalAlpha = 1 - dist / 140; ctx.lineWidth = 1; ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      nodes.forEach((n) => {
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.color; ctx.globalAlpha = 0.7; ctx.fill();
      });
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(tick);
    }

    resize();
    if (prefersReducedMotion) drawStatic(); else tick();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
