import { convertToNumber } from "./convertToNumber";

describe("convertToNumber", () => {
  it("converts string number to number with default digit", () => {
    expect(convertToNumber({ value: "3.14159" })).toBe(3.14);
  });

  it("converts number to rounded value with custom digit", () => {
    expect(convertToNumber({ value: 2.71828, digit: 3 })).toBe(2.718);
  });

  it("returns fallback for non-numeric string", () => {
    expect(convertToNumber({ value: "abc", fallback: 99 })).toBe(99);
  });

  it("returns fallback for null and undefined", () => {
    expect(convertToNumber({ value: null, fallback: -1 })).toBe(-1);
    expect(convertToNumber({ value: undefined, fallback: -1 })).toBe(-1);
  });

  it("returns fallback for NaN", () => {
    expect(convertToNumber({ value: NaN, fallback: 0 })).toBe(0);
  });

  it("handles integer conversion correctly", () => {
    expect(convertToNumber({ value: "42" })).toBe(42);
  });
});
