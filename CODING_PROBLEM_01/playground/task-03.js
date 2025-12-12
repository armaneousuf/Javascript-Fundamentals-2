/* ================================
   Task 3
   Write a function called kmToMiles().
   It should take kilometers as a parameter.
   Convert it to miles (1 km = 0.621371 miles).
   Return the result rounded to 2 decimal places.
=============================== */

function kmToMiles(km) {
    return (km * 0.621371).toFixed(2);
}

console.log(kmToMiles(30));