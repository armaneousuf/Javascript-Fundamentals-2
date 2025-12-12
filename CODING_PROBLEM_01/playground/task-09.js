/* Task 9:  
Write a function that returns a random integer between two given numbers, min and max.  
Use Math.random(), Math.floor(), and the formula for ranges.
*/

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
console.log(randomInt(22, 102));