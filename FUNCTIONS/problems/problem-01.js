/* ================================
   Problem 1
   Write a function called double_or_square().
   It should take a number as a parameter.
   - If the number is even, return its square.
   - If the number is odd, return double the number.
=============================== */

function double_or_square(number) {
    if (number % 2 === 0) {
        return number * number;
    } 
    else {
        return number * 2;
    }
}

console.log(double_or_square(10));
console.log(double_or_square(55));