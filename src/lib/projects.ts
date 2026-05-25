import fs from "fs";
import path from "path";
import type { Project, ProjectModule } from "@/types/project";

interface ProjectJson {
  name: string;
  description?: string;
  cover: string;
  year?: number;
  fields?: string;
  modules: ProjectModule[];
}

const DATA_DIR = path.join(process.cwd(), "src", "data", "projects");

export function getAllProjects(): Project[] {
  const files = fs
    .readdirSync(DATA_DIR)
    .filter((f) => f.endsWith(".json"))
    .sort();

  return files.map((file) => {
    const slug = file.replace(/\.json$/, "");
    const raw = fs.readFileSync(path.join(DATA_DIR, file), "utf-8");
    const data = JSON.parse(raw) as ProjectJson;
    return { ...data, slug };
  });
}

export function getProjectBySlug(slug: string): Project | null {
  const filePath = path.join(DATA_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw) as ProjectJson;
  return { ...data, slug };
}
