## toCurrency() ⇒ String

Formats a number or numeric string into a properly formatted currency string using Intl.NumberFormat.
If the value is invalid or not convertible, it returns an empty string.

### Parameters

| Name                          | Type                            | Description                                      |
| ----------------------------- | ------------------------------- | ------------------------------------------------ |
| value                         | `string` | `number` | `unknown` | The value to format as currency.                 |
| options                       | `object` *(optional)*           | Additional formatting options.                   |
| options.locale                | `string` *(optional)*           | Locale for formatting (default: `"en-US"`).      |
| options.currency              | `string` *(optional)*           | Currency code (default: `"USD"`).                |
| options.minimumFractionDigits | `number` *(optional)*           | Minimum number of decimal places (default: `2`). |
| options.maximumFractionDigits | `number` *(optional)*           | Maximum number of decimal places (default: `2`). |


### Example

```js
import { toCurrency } from "js-utility-method";
```

```js
toCurrency(1200);
// => "$1,200.00"

toCurrency(5000, { currency: "EUR" });
// => "€5,000.00"

toCurrency(9800.5, { locale: "bn-BD", currency: "BDT" });
// => "৳৯,৮০০.৫০"

toCurrency("15000.999", { maximumFractionDigits: 0 });
// => "$15,001"

toCurrency(null);
// => ""
```
