import type { BehanceProject, BehanceProjectDetail } from "@/types/behance";
import siteConfig from "@/config/site";

const BASE = "https://api.behance.net/v2";

function apiKey(): string {
  const key = process.env.BEHANCE_API_KEY;
  if (!key) throw new Error("BEHANCE_API_KEY is not set");
  return key;
}

export async function getUserProjects(): Promise<BehanceProject[]> {
  const res = await fetch(
    `${BASE}/users/${siteConfig.behanceUsername}/projects?client_id=${apiKey()}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error(`Behance API error ${res.status}`);
  const data = await res.json();
  return (data.projects as BehanceProject[]) ?? [];
}

export async function getProjectById(id: number): Promise<BehanceProjectDetail> {
  const res = await fetch(
    `${BASE}/projects/${id}?client_id=${apiKey()}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error(`Behance API error ${res.status}`);
  const data = await res.json();
  return data.project as BehanceProjectDetail;
}
