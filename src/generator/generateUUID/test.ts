import { generateUUID } from "./generateUUID";

describe("generateUUID", () => {
  it("should generate a string", () => {
    const uuid = generateUUID();
    expect(typeof uuid).toBe("string");
  });

  it("should generate a valid UUID v4 format", () => {
    const uuid = generateUUID();
    const uuidV4Regex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    expect(uuidV4Regex.test(uuid)).toBe(true);
  });

  it("should generate unique values on multiple calls", () => {
    const uuids = Array.from({ length: 10 }, () => generateUUID());
    const uniqueSet = new Set(uuids);
    expect(uniqueSet.size).toBe(10);
  });
});
