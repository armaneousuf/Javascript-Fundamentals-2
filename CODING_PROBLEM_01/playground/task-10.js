/* Task 10:
Write a function that takes a number and rounds it to 2 decimal places.
Hint: multiply → round → divide OR use toFixed(2)
*/

function round(number) {
    return Math.round(number * 100) / 100;
}
console.log(round(55));