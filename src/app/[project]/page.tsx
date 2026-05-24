import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getUserProjects, getProjectById } from "@/lib/behance";
import { slugify } from "@/lib/utils";
import ProjectModule from "@/components/ProjectModule";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ project: string }>;
}

async function resolveProject(slug: string) {
  const projects = await getUserProjects();
  return projects.find((p) => slugify(p.name) === slug) ?? null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { project: slug } = await params;
  try {
    const match = await resolveProject(slug);
    if (!match) return { title: "Not Found" };
    return { title: match.name };
  } catch {
    return { title: "Project" };
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { project: slug } = await params;

  let match;
  try {
    match = await resolveProject(slug);
  } catch (err) {
    return (
      <main className="min-h-screen bg-bg flex items-center justify-center">
        <p className="text-secondary/50">
          {err instanceof Error ? err.message : "Failed to load project."}
        </p>
      </main>
    );
  }

  if (!match) notFound();

  let project;
  try {
    project = await getProjectById(match.id);
  } catch (err) {
    return (
      <main className="min-h-screen bg-bg flex items-center justify-center">
        <p className="text-secondary/50">
          {err instanceof Error ? err.message : "Failed to load project."}
        </p>
      </main>
    );
  }

  const coverUrl =
    project.covers.original || project.covers["404"] || project.covers["230"] || "";

  return (
    <main className="min-h-screen bg-bg">
      {/* Hero */}
      {coverUrl && (
        <div className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden">
          <Image
            src={coverUrl}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/40" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 pb-10">
              <h1 className="text-4xl md:text-6xl font-bold text-bg leading-tight">
                {project.name}
              </h1>
            </div>
          </div>
        </div>
      )}

      {/* Back link */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-8">
        <Link
          href="/#projects"
          className="text-sm text-secondary/60 hover:text-primary transition-colors duration-200 tracking-widest uppercase"
        >
          ← Back
        </Link>
      </div>

      {/* Project title if no cover */}
      {!coverUrl && (
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 pt-8 pb-4">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary">
            {project.name}
          </h1>
        </div>
      )}

      {/* Modules */}
      <div className="max-w-[1440px] mx-auto pb-24">
        {project.modules?.map((module, i) => (
          <ProjectModule key={module.id ?? i} module={module} />
        ))}
      </div>
    </main>
  );
}
