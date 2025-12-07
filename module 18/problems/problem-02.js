// Problem 2
// Write a JavaScript program to find the sum of all numbers in an array using a loop.
//
// Input:
const numbers = [5, 12, 8, 20, 7];
//
// Expected Output:
// 52

let sum = 0;

for (const num of numbers) {
    sum = sum + num;
}

console.log(sum);

console.log('hello world');