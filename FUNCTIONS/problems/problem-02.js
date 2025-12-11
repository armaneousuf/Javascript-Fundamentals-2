/* ================================
   Problem 2
   Write a function called sum_odd_numbers().
   It should take an array of numbers as a parameter.
   Return the sum of all odd numbers in the array.
=============================== */

const numbers = [1, 2, 3, 4, 5];
function sum_odd_numbers(numbers) {
    let sum = 0;

    for (const number of numbers) {
        if (number % 2 === 1) {
            sum = sum + number;
        }
    }

    return sum;
}

console.log(sum_odd_numbers(numbers));