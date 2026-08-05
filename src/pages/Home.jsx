import useSEO from "../hooks/useSEO.js";
import profile from "../data/profile.js";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import ProjectsPreview from "../components/ProjectsPreview.jsx";
import ContactCta from "../components/ContactCta.jsx";

export default function Home() {
  useSEO({ title: `${profile.name} | Data Scientist & Data Analyst Portfolio`, description: profile.tagline });
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectsPreview />
      <ContactCta />
    </>
  );
}
