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

    const numberValue = Number(value);
    if (isNaN(numberValue)) return "";

    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits,
        maximumFractionDigits,
    }).format(numberValue);
}
