/**
 * Truncates a string to a specified length with an optional suffix.
 * @param str - The string to truncate
 * @param length - The maximum length of the truncated string
 * @param suffix - Optional suffix to append (default: "...")
 * @returns The truncated string
 */
export function truncate(
  str: string,
  length: number,
  suffix: string = "..."
): string {
  if (typeof str !== "string" || !str.length) return "";
  if (typeof length !== "number" || length < 0) return str;
  if (str.length <= length) return str;
  
  return str.slice(0, length) + suffix;
}

