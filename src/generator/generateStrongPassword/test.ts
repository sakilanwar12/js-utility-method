import { generateStrongPassword } from "./generateStrongPassword";
describe("generateStrongPassword", () => {
    test("should generate a password with default settings (length 12)", () => {
        const pwd = generateStrongPassword();
        expect(typeof pwd).toBe("string");
        expect(pwd.length).toBe(12);
    });

    test("should generate a password with custom length", () => {
        const pwd = generateStrongPassword({ length: 20 });
        expect(pwd.length).toBe(20);
    });

    test("should include numbers when enabled", () => {
        const pwd = generateStrongPassword({ numbers: true });
        expect(/[0-9]/.test(pwd)).toBe(true);
    });

    test("should include lowercase when enabled", () => {
        const pwd = generateStrongPassword({ lowercase: true });
        expect(/[a-z]/.test(pwd)).toBe(true);
    });

    test("should include uppercase when enabled", () => {
        const pwd = generateStrongPassword({ uppercase: true });
        expect(/[A-Z]/.test(pwd)).toBe(true);
    });

    test("should include symbols when enabled", () => {
        const pwd = generateStrongPassword({ symbols: true });
        expect(/[!@#$%^&*()_+\-={}[\]|:;<>,.?/]/.test(pwd)).toBe(true);
    });

    test("should NOT include symbols when disabled", () => {
        const pwd = generateStrongPassword({ symbols: false });
        expect(/[!@#$%^&*()_+\-={}[\]|:;<>,.?/]/.test(pwd)).toBe(false);
    });

    test("should throw error if all character types are disabled", () => {
        expect(() =>
            generateStrongPassword({
                numbers: false,
                lowercase: false,
                uppercase: false,
                symbols: false,
            })
        ).toThrow("At least one character type must be enabled.");
    });

    test("should throw error for invalid length", () => {
        expect(() =>
            generateStrongPassword({ length: 0 })
        ).toThrow("Password length must be a positive number.");
    });

    test("should generate different passwords each time", () => {
        const pwd1 = generateStrongPassword();
        const pwd2 = generateStrongPassword();
        expect(pwd1).not.toBe(pwd2);
    });
});
