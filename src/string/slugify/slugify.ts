/**
 * Converts a string to a URL-friendly slug.
 * @param str - The string to convert to a slug
 * @returns The string as a URL-friendly slug
 */
export function slugify(str: string): string {
  if (typeof str !== "string" || !str.length) return "";
  
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, (match, offset, string) => {
      const prev = string[offset - 1];
      const next = string[offset + 1];
      const isBetweenWords = /\w/.test(prev || "") && /\w/.test(next || "");
      const isFollowedByNumber = /\d/.test(next || "");
      
      // @ and # act as separators, but @ followed by number should be removed
      if (match === "@") {
        return isFollowedByNumber ? "" : "-";
      }
      if (match === "#") {
        return "-";
      }
      // Remove other special characters if between words
      if (isBetweenWords) {
        return "";
      }
      // Remove special characters at boundaries
      return "";
    })
    .replace(/[\s_-]+/g, "-") // Replace multiple spaces/hyphens/underscores with single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
}

