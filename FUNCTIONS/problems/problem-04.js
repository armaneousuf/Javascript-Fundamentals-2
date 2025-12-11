/* ================================
   Challenge 4
   Write a function called max_in_array().
   It should take an array of numbers as a parameter.
   Return the largest number in the array.
=============================== */

const numbersArray = [10, 25, 7, 99, 42];

function max_in_array(numbers) {
  let maxNumber = 0;

    for (const number of numbers) {
        if (number > maxNumber) {
            maxNumber = number;
      }
  }
  return maxNumber;
}

console.log(max_in_array(numbersArray));