/* ================================
   Task 5
   Write a function called celsiusToFahrenheit().
   It should take Celsius as a parameter.
   Convert it to Fahrenheit using the formula:
   F = C * 9/5 + 32
   Return the result rounded to 2 decimal places.
=============================== */

function celsiusToFahrenheit(celsius) {
    return ((celsius * 9) / 5 + 32).toFixed(2);
}

console.log(celsiusToFahrenheit(11));