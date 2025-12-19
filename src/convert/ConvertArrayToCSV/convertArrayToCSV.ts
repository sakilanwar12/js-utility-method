
export function convertArrayToCSV(data, options = {}) {
    if (!Array.isArray(data) || data.length === 0) {
        throw new Error("Input must be a non-empty array");
    }

    const { headers = true } = options;

    const escapeValue = (value) => {
        if (value === null || value === undefined) return "";
        const str = String(value);
        return /[",\n]/.test(str)
            ? `"${str.replace(/"/g, '""')}"`
            : str;
    };

    let rows = [];

    if (Array.isArray(data[0])) {
        rows = data.map(row => row.map(escapeValue).join(","));
    } else if (typeof data[0] === "object") {
        const keys = Object.keys(data[0]);

        if (headers) {
            rows.push(keys.map(escapeValue).join(","));
        }

        for (const item of data) {
            rows.push(
                keys.map(key => escapeValue(item[key])).join(",")
            );
        }
    } else {
        throw new Error("Array elements must be objects or arrays");
    }

    return rows.join("\n");
}