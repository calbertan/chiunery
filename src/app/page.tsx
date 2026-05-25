import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

/*
  To add a new section, create a component in src/components/sections/
  and import + render it below.
*/
export default function Home() {
  return (
    <main>
      {/* sticky hero — stays behind while projects scroll over it */}
      <div className="sticky top-16 h-[calc(100vh-4rem)]">
        <HeroSection />
      </div>

      {/* content scrolls on top of the hero */}
      <div className="relative z-10 bg-bg">
        <ProjectsSection />
      </div>
    </main>
  );
}
