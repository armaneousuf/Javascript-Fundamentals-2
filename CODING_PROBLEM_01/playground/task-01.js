/* ================================
   Task 1: inchesToFeet()
   Convert inches to feet and inches.
=============================== */

function inchsToFeet(inches) {
  const result = inches / 12;
  return `${Math.floor(result)} feet ${inches % 12} inches`;
}

console.log(inchsToFeet(65));
