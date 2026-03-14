export function randomInRange(min: number = 0, max: number = 1): number {
  return Math.random() * (max - min + 1) + min;
}