import { convertArrayToCSV } from "./convertArrayToCSV";

describe("convertArrayToCSV", () => {
  it("converts an array of objects to CSV with headers", () => {
    const data = [
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
    ];
    const expected = "name,age\nJohn,30\nJane,25";
    expect(convertArrayToCSV(data)).toBe(expected);
  });

  it("converts an array of objects to CSV without headers", () => {
    const data = [
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
    ];
    const expected = "John,30\nJane,25";
    expect(convertArrayToCSV(data, { headers: false })).toBe(expected);
  });

  it("converts an array of arrays to CSV", () => {
    const data = [
      ["Name", "Age"],
      ["John", 30],
      ["Jane", 25],
    ];
    const expected = "Name,Age\nJohn,30\nJane,25";
    expect(convertArrayToCSV(data)).toBe(expected);
  });

  it("handles special characters by escaping quotes", () => {
    const data = [{ quote: 'He said "Hello"' }];
    const expected = 'quote\n"He said ""Hello"""';
    expect(convertArrayToCSV(data)).toBe(expected);
  });

  it("handles commas in values", () => {
    const data = [{ location: "New York, NY" }];
    const expected = 'location\n"New York, NY"';
    expect(convertArrayToCSV(data)).toBe(expected);
  });

  it("handles newlines in values", () => {
    const data = [{ text: "Line 1\nLine 2" }];
    const expected = 'text\n"Line 1\nLine 2"';
    expect(convertArrayToCSV(data)).toBe(expected);
  });

  it("throws an error for empty array", () => {
    expect(() => convertArrayToCSV([])).toThrow(
      "Input must be a non-empty array"
    );
  });

  it("throws an error for non-array input", () => {
    expect(() => convertArrayToCSV("invalid" as any)).toThrow(
      "Input must be a non-empty array"
    );
  });

  it("throws an error for mixed content (not object or array elements)", () => {
    expect(() => convertArrayToCSV([1, 2, 3] as any)).toThrow(
      "Array elements must be objects or arrays"
    );
  });

  it("handles null and undefined values gracefully", () => {
    const data = [{ name: "John", age: null }, { name: "Jane" }];
    const expected = "name,age\nJohn,\nJane,";
    expect(convertArrayToCSV(data)).toBe(expected);
  });
});
