import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen text-white">
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}