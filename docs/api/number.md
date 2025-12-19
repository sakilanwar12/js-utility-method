# Number Methods

## isEven

Checks whether a given number is even.

### Parameters

| Name  | Type     | Description          |
| ----- | -------- | -------------------- |
| `num` | `number` | The number to check. |

### Returns

`boolean` — Returns true if the number is even, otherwise false.

### Example

```javascript
import { isEven } from "js-utility-method";

isEven(2); // => true
isEven(10); // => true
isEven(7); // => false
isEven(-4); // => true
isEven(0); // => true
```

---

## isOdd

Checks whether a given number is odd.

### Parameters

| Name  | Type     | Description          |
| ----- | -------- | -------------------- |
| `num` | `number` | The number to check. |

### Returns

`boolean` — Returns true if the number is odd, otherwise false.

### Example

```javascript
import { isOdd } from "js-utility-method";

isOdd(1); // => true
isOdd(7); // => true
isOdd(10); // => false
isOdd(-3); // => true
isOdd(0); // => false
```

---

## multiply

Calculates the product of two numbers.

### Parameters

| Name | Type     | Description        |
| ---- | -------- | ------------------ |
| `a`  | `number` | The first number.  |
| `b`  | `number` | The second number. |

### Returns

`number` — The result of multiplying `a` by `b`.

### Example

```javascript
import { multiply } from "js-utility-method";

multiply(2, 3); // => 6
multiply(-4, 5); // => -20
multiply(0, 10); // => 0
multiply(3.5, 2); // => 7
```

---

## average

Calculates the average of an array of numbers. Returns 0 if the array is empty.

### Parameters

| Name      | Type       | Description                 |
| --------- | ---------- | --------------------------- |
| `numbers` | `number[]` | An array of numeric values. |

### Returns

`number` — The average of the numbers.

### Example

```javascript
import { average } from "js-utility-method";

average([5, 10, 50, -45, 6, 7]); // => 5.5
average([1, 2, 3, 4, 5]); // => 3
average([]); // => 0
average([100]); // => 100
average([-10, 10]); // => 0
```

---

## checkIsNumber

Checks whether a given value is a valid number. Optionally, it can verify if the number is finite (not Infinity, -Infinity, or NaN).

### Parameters

| Name                   | Type      | Default | Description                                                                                    |
| ---------------------- | --------- | ------- | ---------------------------------------------------------------------------------------------- |
| `value`                | `unknown` | —       | The value to check.                                                                            |
| `checkForFiniteNumber` | `boolean` | `false` | If `true`, ensures the value is a finite number (excludes `Infinity`, `-Infinity`, and `NaN`). |

### Returns

`boolean` — Returns true if the value is a valid number.

### Example

```javascript
import { checkIsNumber } from "js-utility-method";

checkIsNumber(42); // => true
checkIsNumber("42"); // => false
checkIsNumber(NaN); // => false
checkIsNumber(Infinity); // => true
checkIsNumber(Infinity, true); // => false
checkIsNumber(3.14, true); // => true
checkIsNumber(undefined); // => false
```

---

## checkIsPositiveNumber

Checks whether a given value is a positive number (> 0).

### Parameters

| Name    | Type      | Description         |
| ------- | --------- | ------------------- |
| `value` | `unknown` | The value to check. |

### Returns

`boolean` — Returns true if the value is a valid positive number, otherwise false.

### Example

```javascript
import { checkIsPositiveNumber } from "js-utility-method";

checkIsPositiveNumber(10); // => true
checkIsPositiveNumber(0); // => false
checkIsPositiveNumber(-5); // => false
checkIsPositiveNumber("10"); // => false
checkIsPositiveNumber(NaN); // => false
checkIsPositiveNumber(Infinity); // => true
```

---

## checkIsValidRange

Checks whether a given value is a number within a specified range (inclusive).

### Parameters

| Name    | Type      | Description                            |
| ------- | --------- | -------------------------------------- |
| `value` | `unknown` | The value to check.                    |
| `min`   | `number`  | The minimum allowed value (inclusive). |
| `max`   | `number`  | The maximum allowed value (inclusive). |

### Returns

`boolean` — Returns true if the value is a valid number and lies within the specified range (inclusive), otherwise false.

### Example

```javascript
import { checkIsValidRange } from "js-utility-method";

checkIsValidRange(10, 0, 20); // => true
checkIsValidRange(25, 0, 20); // => false
checkIsValidRange(-5, -10, 0); // => true
checkIsValidRange("10", 0, 20); // => false
checkIsValidRange(NaN, 0, 20); // => false
checkIsValidRange(5, 5, 5); // => true
```

---

## randomInRange

Generates a random number within a specified range. By default, it returns a number between 0 and 1.

### Parameters

| Name  | Type     | Default | Description                                 |
| ----- | -------- | ------- | ------------------------------------------- |
| `min` | `number` | `0`     | The minimum value of the range (inclusive). |
| `max` | `number` | `1`     | The maximum value of the range (inclusive). |

### Returns

`number` — A random number between `min` and `max`.

### Example

```javascript
import { randomInRange } from "js-utility-method";

randomInRange(); // => 0.374 (example output, varies)
randomInRange(5, 10); // => 7.283 (example output, varies)
randomInRange(-10, 10); // => 3.567 (example output, varies)
randomInRange(100, 100); // => 100
```
