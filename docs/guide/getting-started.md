# Getting Started

## Installation

Install `js-utility-method` using your preferred package manager:

```bash
npm install js-utility-method
```

```bash
yarn add js-utility-method
```

```bash
pnpm add js-utility-method
```

## Usage

Import the functions you need directly from the package:

```javascript
import { isArray, convertArrayToCSV } from "js-utility-method";

// Check if value is array
console.log(isArray([1, 2, 3])); // true

// Convert array to CSV
const data = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
console.log(convertArrayToCSV(data));
// name,age
// Alice,25
// Bob,30
```
