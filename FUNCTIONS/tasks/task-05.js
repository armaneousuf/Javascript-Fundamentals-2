/* ================================
   Task-5
   Write a function called odd_even().
   It should take an integer as a parameter.
   If the value is even, return "Even".
   If the value is odd, return "Odd".
=============================== */

function odd_even(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(odd_even(5));