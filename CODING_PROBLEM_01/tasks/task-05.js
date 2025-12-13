/* 
Task-5: 
Generate a random number between 10 and 20.

Example Output:
12
17
10
*/

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomNumber(12, 15));