
## convertToNumber() ⇒ <code>Number</code>

Safely converts a value (string or number) into a valid number with optional decimal precision and fallback.
If the value is invalid or not convertible, returns the provided fallback value.

### Parameters

| Name     | Type                                                             | Description                                                   |
| -------- | ---------------------------------------------------------------- | ------------------------------------------------------------- |
| value    | <code>string</code> | <code>number</code> | <code>unknown</code> | The value to convert into a number.                           |
| digit    | <code>number</code> *(optional)*                                 | Number of decimal places to keep (default: `2`).              |
| fallback | <code>number</code> *(optional)*                                 | Fallback value returned when conversion fails (default: `0`). |

### Example

```
import {convertToNumber} from 'js-utility-method'
```
```
convertToNumber({ value: "42.5678" });        // => 42.57
convertToNumber({ value: "100.12345", digit: 3 }); // => 100.123
convertToNumber({ value: "abc", fallback: 10 });   // => 10
convertToNumber({ value: 99.9999, digit: 1 });     // => 100.0
convertToNumber({ value: null });                  // => 0
```