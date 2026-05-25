/** Resolves a project image filename to its public URL.
 *  Images live at public/{slug}/{filename}, served as /{slug}/{filename}.
 */
export function imgPath(slug: string, filename: string): string {
  return `/${encodeURIComponent(slug)}/${filename.split("/").map(encodeURIComponent).join("/")}`;
}
