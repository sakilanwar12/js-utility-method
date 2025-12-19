type TConvertArrayToCSVOptions = {
  headers?: boolean;
};

export function convertArrayToCSV(
  data: unknown[],
  options: TConvertArrayToCSVOptions = {}
): string {
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("Input must be a non-empty array");
  }

  const { headers = true } = options;

  const escapeValue = (value: unknown): string => {
    if (value === null || value === undefined) return "";
    const str = String(value);
    return /[",\n]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
  };

  let rows: string[] = [];

  if (Array.isArray(data[0])) {
    rows = (data as unknown[][]).map((row) => row.map(escapeValue).join(","));
  } else if (typeof data[0] === "object" && data[0] !== null) {
    const keys = Object.keys(data[0] as object);

    if (headers) {
      rows.push(keys.map(escapeValue).join(","));
    }

    for (const item of data as Record<string, unknown>[]) {
      rows.push(keys.map((key) => escapeValue(item[key])).join(","));
    }
  } else {
    throw new Error("Array elements must be objects or arrays");
  }

  return rows.join("\n");
}
