# String Methods

## capitalize

Capitalizes the first letter of a string.

### Parameters

| Name  | Type     | Description               |
| ----- | -------- | ------------------------- |
| `str` | `string` | The string to capitalize. |

### Returns

`string` — Returns the string with the first letter capitalized, or an empty string if the input is empty or not a string.

### Example

```javascript
import { capitalize } from "js-utility-method";

capitalize("hello"); // => "Hello"
capitalize("world"); // => "World"
capitalize(""); // => ""
capitalize("a"); // => "A"
capitalize("Hello"); // => "Hello"
```

---

## camelCase

Converts a string to camelCase format.

### Parameters

| Name  | Type     | Description                         |
| ----- | -------- | ----------------------------------- |
| `str` | `string` | The string to convert to camelCase. |

### Returns

`string` — Returns the string in camelCase format, or an empty string if the input is empty or not a string.

### Example

```javascript
import { camelCase } from "js-utility-method";

camelCase("hello world"); // => "helloWorld"
camelCase("foo-bar-baz"); // => "fooBarBaz"
camelCase("hello_world"); // => "helloWorld"
camelCase("Hello World"); // => "helloWorld"
camelCase("PascalCase"); // => "pascalCase"
camelCase(""); // => ""
```

---

## removeSpaces

Removes all spaces from a string.

### Parameters

| Name  | Type     | Description                       |
| ----- | -------- | --------------------------------- |
| `str` | `string` | The string to remove spaces from. |

### Returns

`string` — Returns the string with all spaces removed.

### Example

```javascript
import { removeSpaces } from "js-utility-method";

removeSpaces("hello world"); // => "helloworld"
removeSpaces("  foo  bar  "); // => "foobar"
removeSpaces("no spaces here"); // => "nospaceshere"
```

---

## slugify

Converts a string to a URL-friendly slug.

### Parameters

| Name  | Type     | Description                      |
| ----- | -------- | -------------------------------- |
| `str` | `string` | The string to convert to a slug. |

### Returns

`string` — Returns a URL-friendly slug.

### Example

```javascript
import { slugify } from "js-utility-method";

slugify("Hello World"); // => "hello-world"
slugify("JavaScript is Awesome"); // => "javascript-is-awesome"
slugify("foo_bar"); // => "foo-bar"
slugify("  Multiple   Spaces  "); // => "multiple-spaces"
```

---

## truncate

Truncates a string to a specified length with an optional suffix.

### Parameters

| Name     | Type     | Description                                     |
| -------- | -------- | ----------------------------------------------- |
| `str`    | `string` | The string to truncate.                         |
| `length` | `number` | Maximum length of the string.                   |
| `suffix` | `string` | _(optional)_ Suffix to append. Default: `"..."` |

### Returns

`string` — Returns the truncated string with suffix if applicable.

### Example

```javascript
import { truncate } from "js-utility-method";

truncate("Hello World", 5); // => "Hello..."
truncate("JavaScript", 10); // => "JavaScript"
truncate("Long text here", 8, "..."); // => "Long tex..."
truncate("Short", 10); // => "Short"
```
