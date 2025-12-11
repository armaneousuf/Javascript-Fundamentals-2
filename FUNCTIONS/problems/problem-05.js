/* ================================
   Challenge 5
   Write a function called multiply_array().
   It should take an array of numbers as a parameter.
   Multiply all the numbers together and return the result.
=============================== */

const numbersArray = [2, 3, 4, 5];

function multiply_array(arr) {
    let total = 1;
    for (const arrys of arr) {
        total = total * arrys;
    }
    return total;
}

console.log(multiply_array(numbersArray));
