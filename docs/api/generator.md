# Generator Methods

## generateCode

Generates a random code — numeric, alphabetic, or alphanumeric — with a customizable length. Useful for creating OTPs, verification codes, or short unique identifiers.

### Parameters

| Name   | Type                                             | Description                                                  |
| ------ | ------------------------------------------------ | ------------------------------------------------------------ |
| type   | `"number"` \| `"string"` \| `"all"` _(optional)_ | Type of characters to include in the code. Default: `"all"`. |
| length | `number` _(optional)_                            | Length of the generated code. Default: `6`.                  |

### Returns

`string` — The generated random code.

### Example

```javascript
import { generateCode } from "js-utility-method";

generateCode(); // => "aZ3kLp"
generateCode({ type: "number" }); // => "482193"
generateCode({ type: "string", length: 8 }); // => "aBcDeFgH"
generateCode({ type: "all", length: 10 }); // => "Ab92dLzPq7"
```

---

## generateStrongPassword

Generates a strong, randomized password with customizable character types. Includes options for numbers, lowercase, uppercase, and symbols.

### Parameters

| Name      | Type                   | Description                                       |
| --------- | ---------------------- | ------------------------------------------------- |
| length    | `number` _(optional)_  | Length of the generated password (default: `12`). |
| numbers   | `boolean` _(optional)_ | Include numeric characters (default: `true`).     |
| lowercase | `boolean` _(optional)_ | Include lowercase letters (default: `true`).      |
| uppercase | `boolean` _(optional)_ | Include uppercase letters (default: `true`).      |
| symbols   | `boolean` _(optional)_ | Include symbol characters (default: `true`).      |

### Returns

`string` — The generated strong password.

### Example

```javascript
import { generateStrongPassword } from "js-utility-method";

generateStrongPassword();
// => "aK#9gT!2Lm$P"

generateStrongPassword({ length: 16 });
// => "Tp9!fZ@#wG7b$kQ1"

generateStrongPassword({ numbers: false, symbols: false });
// => "aBcDeFgHiJKlMnO"
```

---

## generateUUID

Generates a random UUID v4 string — ideal for creating unique identifiers, temporary IDs, or tracking tokens. Lightweight and dependency-free, follows the standard UUID v4 format.

### Parameters

This method does not require any parameters.

### Returns

`string` — A UUID v4 string in the format `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.

### Example

```javascript
import { generateUUID } from "js-utility-method";

generateUUID();
// => "3b12f1df-5232-4e8b-9b2f-7f6d9f8c8e9a"

generateUUID();
// => "a7f9c1d2-3b5e-4c7d-8a1f-2b6d9e0f3a4b"
```
