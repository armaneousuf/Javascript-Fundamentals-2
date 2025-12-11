/* ================================
   Task-2
   Write a function that takes a number as parameter.
   If the number is odd, multiply it by 2 and return the result.
   If the number is even, divide it by 2 and return the result.
=============================== */

function condition(number) {
    if (number % 2 === 1) {
        return number * 2;
    } else {
        return number / 2;
    }
}

console.log(condition(41));
console.log(condition(20));