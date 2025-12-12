/* Write a function that takes a number and returns:
   - The rounded value (using Math.round)
   - The value rounded up (Math.ceil)
   - The value rounded down (Math.floor)
   Return them in an object.
*/

// Rounded
function rounded(number) {
    return Math.round(number);
}
console.log(rounded(1.65));

// Rounded up
function roundedUp(number) {
  return Math.ceil(number);
}
console.log(roundedUp(25.33));

// Rounded down
function roundedDown(number) {
  return Math.floor(number);
}
console.log(roundedDown(100.89));