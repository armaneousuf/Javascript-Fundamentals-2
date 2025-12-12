/* ================================
   Task 4
   Write a function called poundsToKg().
   It should take pounds as a parameter.
   Convert it to kilograms (1 pound = 0.453592 kg).
   Return the result rounded to 2 decimal places.
=============================== */

function poundsToKg(pound) {
    return (pound * 0.453592).toFixed(2);
}
console.log(poundsToKg(333));