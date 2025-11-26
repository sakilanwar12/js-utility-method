<a name="generateUUID"></a>

## generateUUID() ⇒ <code>String</code>

Generates a random UUID v4 string — ideal for creating unique identifiers, temporary IDs, or tracking tokens.
Lightweight and dependency-free, follows the standard UUID v4 format.

## Parameters

This method does not require any parameters.

| Name | Type | Description                                                                      |
| ---- | ---- | -------------------------------------------------------------------------------- |
| —    | —    | Generates a UUID v4 string in the format `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`. |


## Example

```js
import { generateUUID } from 'js-utility-method';
```

```js
generateUUID();
// => "3b12f1df-5232-4e8b-9b2f-7f6d9f8c8e9a"

generateUUID();
// => "a7f9c1d2-3b5e-4c7d-8a1f-2b6d9e0f3a4b"

```