import { getAllProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
  const projects = getAllProjects();

  return (
    <section id="projects" className="py-8 px-4 md:px-8">
      <div className="max-w-250 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} rounded />
          ))}
        </div>
      </div>
    </section>
  );
}
