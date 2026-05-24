"use client";

import Link from "next/link";
import Image from "next/image";
import { slugify } from "@/lib/utils";
import type { BehanceProject } from "@/types/behance";

interface ProjectCardProps {
  project: BehanceProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const coverUrl =
    project.covers.original ||
    project.covers["404"] ||
    project.covers["230"] ||
    "";

  const slug = slugify(project.name);

  return (
    <Link href={`/${slug}`} className="block">
      <div className="relative aspect-[4/3] overflow-hidden group cursor-pointer">
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="w-full h-full bg-secondary/20" />
        )}

        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
          <h3 className="text-bg text-xl md:text-2xl font-bold text-center leading-snug">
            {project.name}
          </h3>
        </div>
      </div>
    </Link>
  );
}
