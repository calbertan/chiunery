export type ModuleType = "image" | "images" | "text" | "gif" | "video" | "columns";

export interface ImageModule {
  type: "image";
  src: string;
}

export interface ImagesModule {
  type: "images";
  srcs: string[];
}

export interface TextModule {
  type: "text";
  content: string;
}

export interface GifModule {
  type: "gif";
  src: string;
}

export interface VideoModule {
  type: "video";
  url: string;
}

export interface CreditsColumn {
  title: string;
  items: string[];
}

export interface ColumnsModule {
  type: "columns";
  columns: CreditsColumn[];
}

export type ProjectModule = ImageModule | ImagesModule | TextModule | GifModule | VideoModule | ColumnsModule;

export interface Project {
  slug: string;
  name: string;
  description?: string;
  cover: string;
  year?: number;
  fields?: string;
  modules: ProjectModule[];
}
