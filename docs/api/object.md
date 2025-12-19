# Object Methods

## pickKeys

Creates a new object composed of the specified keys from the given object. If a key does not exist in the source object, it will be ignored.

### Parameters

| Name   | Type       | Description                                    |
| ------ | ---------- | ---------------------------------------------- |
| `obj`  | `object`   | The source object to pick keys from.           |
| `keys` | `string[]` | An array of keys to include in the new object. |

### Returns

`object` — A new object containing only the specified keys.

### Example

```javascript
import { pickKeys } from "js-utility-method";

pickKeys({ id: 1, name: "Sakil", role: "admin" }, ["name", "role"]);
// => { name: "Sakil", role: "admin" }

pickKeys({ a: 10, b: 20, c: 30 }, ["a", "c"]);
// => { a: 10, c: 30 }

pickKeys({ x: 1, y: 2 }, ["z"]);
// => {}
```

---

## omitKeys

Creates a new object composed of all keys from the given object except the specified keys. If a key does not exist in the source object, it will be ignored.

### Parameters

| Name   | Type       | Description                                      |
| ------ | ---------- | ------------------------------------------------ |
| `obj`  | `object`   | The source object to omit keys from.             |
| `keys` | `string[]` | An array of keys to exclude from the new object. |

### Returns

`object` — A new object excluding the specified keys.

### Example

```javascript
import { omitKeys } from "js-utility-method";

omitKeys({ id: 1, name: "Sakil", role: "admin" }, ["name", "role"]);
// => { id: 1 }

omitKeys({ a: 10, b: 20, c: 30 }, ["a", "c"]);
// => { b: 20 }

omitKeys({ x: 1, y: 2 }, ["z"]);
// => { x: 1, y: 2 }
```
