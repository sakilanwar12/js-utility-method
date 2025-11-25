export interface ToCurrencyOptions {
    locale?: string;
    currency?: string;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
}

/**
 * Convert a number into a formatted currency string.
 *
 * @param value - The number to format.
 * @param options - Formatting options.
 * @returns Formatted currency string.
 */
export function toCurrency(
    value: number | string,
    {
        locale = "en-US",
        currency = "USD",
        minimumFractionDigits = 2,
        maximumFractionDigits = 2,
    }: ToCurrencyOptions = {}
): string {
    if (value === null || value === undefined || value === "") {
        return "";
    }

    const numberValue = typeof value === "string" ? Number(value.trim()) : value;
    if (isNaN(numberValue)) {
        return "";
    }

    // Normalize fraction digits to avoid RangeError
    let minDigits = minimumFractionDigits;
    let maxDigits = maximumFractionDigits;

    if (minDigits > maxDigits) {
        minDigits = maxDigits; // ensure min ≤ max
    }

    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits: minDigits,
        maximumFractionDigits: maxDigits,
    }).format(numberValue);
}