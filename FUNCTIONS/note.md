> 19-4
// age difference 
// arguments
// debug using f10 and f11; 

> 19-5
// in functions `return` means you can store, reuse or pass to other functions
// but, you can't do the same with `console.log`. `console.log` will only print the result once.

> 19-8
// sum of all numbers in an array
// Avoid modifying global variables;
// Always keep modifiable variables inside the function 
```js
function sumOfArray(numbers) {
    let sum = 0; // fresh every call
    for (const number of numbers) {
        sum += number;
    }
    return sum;
}
```
