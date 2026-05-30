import Image from "next/image";
import { imgPath } from "@/lib/utils";
import type { ProjectModule as Module } from "@/types/project";

interface ProjectModuleProps {
  module: Module;
  slug: string;
}

function vimeoEmbedUrl(url: string): string {
  const match = url.match(/vimeo\.com\/(\d+)/);
  const id = match?.[1];
  return id ? `https://player.vimeo.com/video/${id}?autoplay=0&title=0&byline=0&portrait=0` : url;
}

export default function ProjectModule({ module, slug }: ProjectModuleProps) {
  if (module.type === "image") {
    return (
      <div className="px-8 md:px-16">
        <Image
          src={imgPath(slug, module.src)}
          alt=""
          width={800}
          height={600}
          style={{ width: "100%", height: "auto" }}
          sizes="(max-width: 800px) 100vw, 800px"
        />
      </div>
    );
  }

  if (module.type === "gif") {
    return (
      <div className="px-8 md:px-16">
        <Image
          src={imgPath(slug, module.src)}
          alt=""
          width={800}
          height={600}
          unoptimized
          style={{ width: "100%", height: "auto" }}
          sizes="(max-width: 800px) 100vw, 800px"
        />
      </div>
    );
  }

  if (module.type === "images") {
    return (
      <div className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-2">
        {module.srcs.map((src, i) => (
          <Image
            key={i}
            src={imgPath(slug, src)}
            alt=""
            width={400}
            height={300}
            style={{ width: "100%", height: "auto" }}
            sizes="(max-width: 768px) 100vw, 400px"
          />
        ))}
      </div>
    );
  }

  if (module.type === "video") {
    return (
      <div className="px-8 md:px-16 py-4">
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src={vimeoEmbedUrl(module.url)}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  if (module.type === "columns") {
    return (
      <div className="px-8 md:px-16 py-10 flex flex-wrap gap-10">
        {module.columns.map((col, i) => (
          <div key={i} className="flex-1 min-w-0">
            <p className="text-xs tracking-widest uppercase text-secondary/40 mb-3">
              {col.title}
            </p>
            <ul className="space-y-1">
              {col.items.map((item, j) => (
                <li key={j} className="text-sm text-secondary/70">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  if (module.type === "text") {
    return (
      <div
        className="prose max-w-none px-8 md:px-16 py-8 text-secondary"
        dangerouslySetInnerHTML={{ __html: module.content }}
      />
    );
  }

  return null;
}
