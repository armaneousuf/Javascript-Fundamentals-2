> leap year method;
> — if a year is divisible by 4 then it's simply a leap year.
> — but, if the same year is divisible by 4 but also 100 then it's not a leap year anymore.
> — on the otherhand, a year divisible by 400 is also leap year.

```js
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    // your result goes here;
}
```
---
> remove duplicate items from an array
> use `includes(item) === false` to get the items once
---

> the formula to generate random number between two numbers are `Math.floor(Math.random() * (max - min + 1) + min)`
> have to take two parameters and set two arguments.