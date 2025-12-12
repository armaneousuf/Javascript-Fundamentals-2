/* ================================
   Task 2
   Write a function called feetToInches().
   It should take two parameters: feet and inches.
   Return the total number of inches.
=============================== */

function feetToInches(feet, inches) {
    const inc = feet * 12;
    return inc + inches;

}

const RESULT = feetToInches(5, 1.3);
console.log(RESULT);