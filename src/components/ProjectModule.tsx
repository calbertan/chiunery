import Image from "next/image";
import type { BehanceModule } from "@/types/behance";

interface ProjectModuleProps {
  module: BehanceModule;
}

export default function ProjectModule({ module }: ProjectModuleProps) {
  switch (module.type) {
    case "image":
      if (!module.src) return null;
      return (
        <div className="w-full">
          <div className="relative w-full" style={{ aspectRatio: module.width && module.height ? `${module.width}/${module.height}` : "16/9" }}>
            <Image
              src={module.src}
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 1440px) 100vw, 1440px"
            />
          </div>
        </div>
      );

    case "text":
      if (!module.text) return null;
      return (
        <div
          className="prose prose-secondary max-w-none px-8 md:px-16 py-6 text-secondary"
          dangerouslySetInnerHTML={{ __html: module.text }}
        />
      );

    case "media_collection":
      if (!module.components?.length) return null;
      return (
        <div className="grid grid-cols-1 md:grid-cols-2">
          {module.components.map((component, i) => (
            <div
              key={i}
              className="relative"
              style={{ aspectRatio: component.width && component.height ? `${component.width}/${component.height}` : "4/3" }}
            >
              <Image
                src={component.src}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      );

    case "embed":
      if (!module.url) return null;
      return (
        <div className="w-full px-8 md:px-16 py-6">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={module.url}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      );

    default:
      return null;
  }
}
