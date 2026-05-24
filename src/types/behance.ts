export interface BehanceCover {
  "115"?: string;
  "202"?: string;
  "230"?: string;
  "404"?: string;
  original?: string;
}

export interface BehanceOwner {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  url: string;
  images: { "50": string; "100": string };
}

export interface BehanceProject {
  id: number;
  name: string;
  published_on: number;
  created_on: number;
  modified_on: number;
  url: string;
  covers: BehanceCover;
  mature_content: boolean;
  fields: string[];
  owners: BehanceOwner[];
  stats: { views: number; appreciations: number; comments: number };
}

export interface BehanceModuleImageComponent {
  src: string;
  width: number;
  height: number;
  url?: string;
}

export interface BehanceModule {
  id?: number;
  type: "image" | "text" | "media_collection" | "embed" | "video";
  src?: string;
  width?: number;
  height?: number;
  text?: string;
  url?: string;
  components?: BehanceModuleImageComponent[];
}

export interface BehanceProjectDetail extends BehanceProject {
  description: string;
  modules: BehanceModule[];
  copyright: {
    license: string;
    description: string;
    license_id: number;
  };
}
