## convertArrayToCSV() ⇒ <code>string</code>

Converts an array of objects or an array of arrays into a CSV string. Handles special characters (quotes, commas, newlines) by escaping values.

### Parameters

| Name            | Type                              | Description                                                                                                     |
| --------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| data            | <code>Array</code>                | The array of data to convert. Can be an array of objects or an array of arrays.                                 |
| options         | <code>Object</code> _(optional)_  | Configuration options.                                                                                          |
| options.headers | <code>boolean</code> _(optional)_ | Whether to include headers in the CSV output (default: `true`). Only applies when input is an array of objects. |

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
