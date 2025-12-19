# Array Methods

## isArray

Checks whether the given value is an array.

### Usage

```javascript
import { isArray } from "js-utility-method";

isArray([1, 2, 3]); // true
isArray("hello"); // false
```

## convertArrayToCSV

Converts an array of objects or an array of arrays into a CSV string.

### Usage

```javascript
import { convertArrayToCSV } from "js-utility-method";

const data = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
];

const csv = convertArrayToCSV(data);
// name,age
// John,30
// Jane,25
```
