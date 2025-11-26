<a name="generateStrongPassword"></a>

## generateStrongPassword() ⇒ <code>String</code>

Generates a strong, randomized password with customizable character types.  
Includes options for numbers, lowercase, uppercase, and symbols.

### Parameters

| Name | Type | Description |
|------|------|-------------|
| length | <code>number</code> *(optional)* | Length of the generated password (default: `12`). |
| numbers | <code>boolean</code> *(optional)* | Include numeric characters (default: `true`). |
| lowercase | <code>boolean</code> *(optional)* | Include lowercase letters (default: `true`). |
| uppercase | <code>boolean</code> *(optional)* | Include uppercase letters (default: `true`). |
| symbols | <code>boolean</code> *(optional)* | Include symbol characters (default: `true`). |

### Example
```js
import { generateStrongPassword } from 'js-utility-method';
```
```js
generateStrongPassword();
// => "aK#9gT!2Lm$P"

generateStrongPassword({ length: 16 });
// => "Tp9!fZ@#wG7b$kQ1"

generateStrongPassword({ numbers: false, symbols: false });
// => "aBcDeFgHiJKlMnO"

```js

