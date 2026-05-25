"use client";

import Link from "next/link";
import Image from "next/image";
import { imgPath } from "@/lib/utils";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  rounded?: boolean;
}

export default function ProjectCard({ project, rounded }: ProjectCardProps) {
  const coverUrl = imgPath(project.slug, project.cover);
  const roundedClass = rounded ? "rounded-2xl" : "";

  return (
    <Link href={`/${project.slug}`} className={`block overflow-hidden ${roundedClass}`}>
      <div className="relative aspect-[4/3] overflow-hidden group cursor-pointer">
        <Image
          src={coverUrl}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-95 transition-opacity duration-300" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
          <h3 className="text-bg text-xl md:text-2xl font-bold text-center leading-snug">
            {project.name}
          </h3>
        </div>
      </div>
    </Link>
  );
}
