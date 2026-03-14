/**
 * Removes all spaces from a string.
 * @param str - The string to remove spaces from
 * @returns The string with all spaces removed
 */
export function removeSpaces(str: string): string {
  if (typeof str !== "string") return "";
  return str.replace(/\s+/g, "");
}

