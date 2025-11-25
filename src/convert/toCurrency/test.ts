import { toCurrency } from "./toCurrency";

describe("toCurrency", () => {
    test("formats USD by default", () => {
        expect(toCurrency(1200)).toBe("$1,200.00");
    });

    test("formats EUR currency", () => {
        expect(
            toCurrency(5000, {
                currency: "EUR",
            })
        ).toBe("€5,000.00");
    });

    test("formats BDT currency with Bengali locale", () => {
        expect(
            toCurrency(9800.5, {
                locale: "bn-BD",
                currency: "BDT",
            })
        ).toBe("৯,৮০০.৫০৳");
    });

    test("handles string numbers", () => {
        expect(toCurrency("1500")).toBe("$1,500.00");
    });

    test("handles null/undefined/empty string", () => {
        expect(toCurrency(null as unknown as number)).toBe("");
        expect(toCurrency(undefined as unknown as number)).toBe("");
        expect(toCurrency("")).toBe("");
    });

    test("handles invalid numbers", () => {
        expect(toCurrency("abc")).toBe("");
    });

    test("respects fraction digits", () => {
        expect(
            toCurrency(15000.999, {
                maximumFractionDigits: 0,
            })
        ).toBe("$15,001");
    });
});