// Problem 1
// Write a JavaScript program to find the largest number in an array using a loop.
//
// Input:
const numbers = [23, 56, 12, 78, 34, 89, 2];
//
// Expected Output:
// 89

let result = numbers[0];

for (const num of numbers) {
    if (num > result) {
        result = num;
    }
}

console.log(result);