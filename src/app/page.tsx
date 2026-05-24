import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import siteConfig from "@/config/site";

/*
  To add a new section, create a component in src/components/sections/
  and import + render it below.
*/
export default function Home() {
  return (
    <main>
      <HeroSection
        name={siteConfig.name}
        headings={siteConfig.headings}
        heroImage={siteConfig.heroImage}
      />
      <ProjectsSection />
    </main>
  );
}
