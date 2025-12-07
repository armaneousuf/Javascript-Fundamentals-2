// Problem 3
// Write a JavaScript program to count how many even numbers are in an array.
//
// Input:
const numbers = [10, 21, 4, 7, 18, 23, 42];
//
// Expected Output:
// 4

let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        count++;
    }
}
console.log(count);

