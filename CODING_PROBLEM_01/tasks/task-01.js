/* 
Task-1: 
Write a function to convert temperature from Celsius to Fahrenheit.

Example:
celsiusToFahrenheit(0)   ➞ 32
celsiusToFahrenheit(100) ➞ 212
*/

function celsiusToFahrenheit(c) {
    return (c * 1.8) + 32;
}
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(10));