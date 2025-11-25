
import { checkIsNumber } from "../../number/checkIsNumber/checkIsNumber";
import { throwErrorOnInvalidNumber } from "../../number/throwErrorOnInvalidNumber";

type TConvertToNumberProps = {
  value: unknown;
  digit?: number;
  fallback?: number;
};

export function convertToNumber({
  value,
  digit = 2,
  fallback = 0,
}: TConvertToNumberProps): number {
  try {
    throwErrorOnInvalidNumber(fallback, "fallback");
    if (typeof value !== "string" && typeof value !== "number") {
      return fallback;
    }

    const stringValue =
      typeof value === "string" ? value?.trim() : value?.toString();
    const numeric = parseFloat(stringValue);

    if (!checkIsNumber(numeric)) {
      return fallback;
    }

    return Number(numeric.toFixed(digit));
  } catch (error) {
    console.error("Error converting value to number:", error);
    return fallback;
  }
}
