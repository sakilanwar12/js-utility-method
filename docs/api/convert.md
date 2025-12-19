# Convert Methods

## convertToNumber

Safely converts a value (string or number) into a valid number with optional decimal precision and fallback. If the value is invalid or not convertible, returns the provided fallback value.

### Parameters

| Name     | Type                              | Description                                                   |
| -------- | --------------------------------- | ------------------------------------------------------------- |
| value    | `string` \| `number` \| `unknown` | The value to convert into a number.                           |
| digit    | `number` _(optional)_             | Number of decimal places to keep (default: `2`).              |
| fallback | `number` _(optional)_             | Fallback value returned when conversion fails (default: `0`). |

### Returns

`number` — The converted number or fallback value.

### Example

```javascript
import { convertToNumber } from "js-utility-method";

convertToNumber({ value: "42.5678" }); // => 42.57
convertToNumber({ value: "100.12345", digit: 3 }); // => 100.123
convertToNumber({ value: "abc", fallback: 10 }); // => 10
convertToNumber({ value: 99.9999, digit: 1 }); // => 100.0
convertToNumber({ value: null }); // => 0
```

---

## convertArrayToCSV

Converts an array of objects or an array of arrays into a CSV string. Handles special characters (quotes, commas, newlines) by escaping values.

### Parameters

| Name            | Type                   | Description                                                                                                     |
| --------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------- |
| data            | `Array`                | The array of data to convert. Can be an array of objects or an array of arrays.                                 |
| options         | `Object` _(optional)_  | Configuration options.                                                                                          |
| options.headers | `boolean` _(optional)_ | Whether to include headers in the CSV output (default: `true`). Only applies when input is an array of objects. |

### Returns

`string` — The CSV formatted string.

### Example

```javascript
import { convertArrayToCSV } from "js-utility-method";

// Array of objects
const data = [
  { name: "John", age: 30, city: "New York" },
  { name: "Jane", age: 25, city: "Los Angeles" },
];

convertArrayToCSV(data);
// Output:
// name,age,city
// John,30,New York
// Jane,25,Los Angeles

// Array of arrays
const arrayData = [
  ["Name", "Age"],
  ["John", 30],
  ["Jane", 25],
];

convertArrayToCSV(arrayData);
// Output:
// Name,Age
// John,30
// Jane,25

// Handling special characters
const specialData = [{ id: 1, comment: 'He said "Hello"' }];

convertArrayToCSV(specialData);
// Output:
// id,comment
// 1,"He said ""Hello"""
```

---

## toCurrency

Formats a number or numeric string into a properly formatted currency string using Intl.NumberFormat. If the value is invalid or not convertible, it returns an empty string.

### Parameters

| Name                          | Type                              | Description                                      |
| ----------------------------- | --------------------------------- | ------------------------------------------------ |
| value                         | `string` \| `number` \| `unknown` | The value to format as currency.                 |
| options                       | `object` _(optional)_             | Additional formatting options.                   |
| options.locale                | `string` _(optional)_             | Locale for formatting (default: `"en-US"`).      |
| options.currency              | `string` _(optional)_             | Currency code (default: `"USD"`).                |
| options.minimumFractionDigits | `number` _(optional)_             | Minimum number of decimal places (default: `2`). |
| options.maximumFractionDigits | `number` _(optional)_             | Maximum number of decimal places (default: `2`). |

### Returns

`string` — The formatted currency string.

### Example

```javascript
import { toCurrency } from "js-utility-method";

toCurrency(1200);
// => "$1,200.00"

toCurrency(5000, { currency: "EUR" });
// => "€5,000.00"

toCurrency(9800.5, { locale: "bn-BD", currency: "BDT" });
// => "৳৯,৮০০.৫০"

toCurrency("15000.999", { maximumFractionDigits: 0 });
// => "$15,001"

toCurrency(null);
// => ""
```
