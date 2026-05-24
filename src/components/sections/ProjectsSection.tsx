import { getUserProjects } from "@/lib/behance";
import ProjectCard from "@/components/ProjectCard";

export default async function ProjectsSection() {
  let projects;
  try {
    projects = await getUserProjects();
  } catch (err) {
    return (
      <section id="projects" className="py-16 px-8 md:px-16 max-w-[1440px] mx-auto">
        <p className="text-secondary/50 text-sm">
          {err instanceof Error ? err.message : "Failed to load projects."}
        </p>
      </section>
    );
  }

  return (
    <section id="projects">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
