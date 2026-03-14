/**
 * Converts a string to camelCase.
 * @param str - The string to convert
 * @returns The string in camelCase format
 */
export function camelCase(str: string): string {
  if (typeof str !== "string" || !str.length) return "";
  
  // Split on spaces, hyphens, underscores, and capital letters
  const words = str
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capital letters in camelCase
    .replace(/[^\w\s-]/g, " ") // Replace special characters with spaces
    .split(/[\s_-]+/)
    .filter(word => word.length > 0);
  
  return words
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

