import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import ProjectModule from "@/components/ProjectModule";
import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ project: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { project: slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { project: slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const otherProjects = getAllProjects()
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <div className="max-w-200 mx-auto px-8 md:px-16 pt-12 pb-10">
        {project.fields && (
          <p className="text-sm text-secondary/50 tracking-widest uppercase mb-3">
            {project.fields}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl font-bold text-secondary leading-tight">
          {project.name}
        </h1>
        {project.description && (
          <p
            className="mt-4 text-base md:text-lg text-secondary/60 max-w-2xl leading-relaxed"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        )}
      </div>

      {/* Modules */}
      <div className="max-w-200 mx-auto pb-24">
        {project.modules.map((module, i) => (
          <ProjectModule key={i} slug={project.slug} module={module} />
        ))}
      </div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div className="max-w-360 mx-auto px-8 md:px-16 pb-6">
          <h2 className="text-center font-bold tracking-widest uppercase text-secondary/50 mb-6">
            Other Projects
          </h2>
        </div>
      )}
      {otherProjects.length > 0 && (
        <div className="max-w-200 mx-auto px-8 md:px-16 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} rounded />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
