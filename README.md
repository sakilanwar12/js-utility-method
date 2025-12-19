# js-utility-method

A lightweight collection of standalone JavaScript utility functions — easy to use, adapt, and extend. Organized by purpose (e.g. arrays, strings, numbers), each method is designed for clarity, flexibility, and direct integration into any project.

🚀 **[View Official Documentation](https://sakilanwar12.github.io/js-utility-method/)**

## Contributing

Contributions are welcome! 🎉

Please read [CONTRIBUTING.md](https://github.com/sakilanwar12/js-utility-method?tab=contributing-ov-file) before submitting a pull request.  
It explains how to contribute, report issues, and follow best practices.

## Installation

Using npm:

```bash
npm install js-utility-method
```

Using yarn:

```bash
yarn add js-utility-method
```

Using pnpm:

```bash
pnpm add js-utility-method
```

## Table of Contents

### Generator

| Name                                                                                          | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [generateCode](https://sakilanwar12.github.io/js-utility-method/api/generator.html)           | Generates a random code (numeric, alphabetic, or alphanumeric) — ideal for creating OTPs, verification codes, or temporary identifiers. |
| [generateStrongPassword](https://sakilanwar12.github.io/js-utility-method/api/generator.html) | Generates a strong, secure password with customizable length and character types.                                                       |
| [generateUUID](https://sakilanwar12.github.io/js-utility-method/api/generator.html)           | Generates a random UUID v4 string — ideal for creating unique identifiers.                                                              |

### Number

| Name                                                                                      | Description                                              |
| ----------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [average](https://sakilanwar12.github.io/js-utility-method/api/number.html)               | Calculates the average of a set of numbers.              |
| [checkIsNumber](https://sakilanwar12.github.io/js-utility-method/api/number.html)         | Checks if a value is a valid number (optionally finite). |
| [checkIsPositiveNumber](https://sakilanwar12.github.io/js-utility-method/api/number.html) | Checks if a value is a positive number.                  |
| [checkIsValidRange](https://sakilanwar12.github.io/js-utility-method/api/number.html)     | Validates if a number falls within a given range.        |
| [isOdd](https://sakilanwar12.github.io/js-utility-method/api/number.html)                 | Checks if a number is odd.                               |
| [multiply](https://sakilanwar12.github.io/js-utility-method/api/number.html)              | Multiplies two numbers.                                  |
| [randomInRange](https://sakilanwar12.github.io/js-utility-method/api/number.html)         | Generates a random number between a given min and max.   |

### Object

| Name                                                                         | Description                                                                          |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [pickKeys](https://sakilanwar12.github.io/js-utility-method/api/object.html) | Returns a new object composed of the specified keys from the source object.          |
| [omitKeys](https://sakilanwar12.github.io/js-utility-method/api/object.html) | Returns a new object with all keys from the source object except the specified keys. |

### Array

| Name                                                                       | Description                                 |
| -------------------------------------------------------------------------- | ------------------------------------------- |
| [isArray](https://sakilanwar12.github.io/js-utility-method/api/array.html) | Checks whether the given value is an array. |

### String

| Name                                                                             | Description                                                       |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [capitalize](https://sakilanwar12.github.io/js-utility-method/api/string.html)   | Capitalizes the first letter of a string.                         |
| [camelCase](https://sakilanwar12.github.io/js-utility-method/api/string.html)    | Converts a string to camelCase format.                            |
| [removeSpaces](https://sakilanwar12.github.io/js-utility-method/api/string.html) | Removes all spaces from a string.                                 |
| [slugify](https://sakilanwar12.github.io/js-utility-method/api/string.html)      | Converts a string to a URL-friendly slug.                         |
| [truncate](https://sakilanwar12.github.io/js-utility-method/api/string.html)     | Truncates a string to a specified length with an optional suffix. |

### Convert

| Name                                                                                   | Description                                                              |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [convertArrayToCSV](https://sakilanwar12.github.io/js-utility-method/api/convert.html) | Converts an array of objects or an array of arrays into a CSV string.    |
| [convertToNumber](https://sakilanwar12.github.io/js-utility-method/api/convert.html)   | Converts a value to a number with optional rounding and fallback.        |
| [toCurrency](https://sakilanwar12.github.io/js-utility-method/api/convert.html)        | Converts a number to a currency format with locale and currency options. |

## License

[The MIT License (MIT)](https://github.com/sakilanwar12/js-utility-method/blob/master/LICENSE)
