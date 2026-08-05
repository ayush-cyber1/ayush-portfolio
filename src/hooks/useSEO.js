import { useEffect } from "react";

export default function useSEO({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      const previous = tag.getAttribute("content");
      tag.setAttribute("content", description);
      return () => { if (previous) tag.setAttribute("content", previous); };
    }
    return undefined;
  }, [title, description]);
}
