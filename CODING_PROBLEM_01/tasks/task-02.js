/* 
Task-2: 
You are given an array of numbers. Count how many times a number is repeated in the array.

Sample Input 1:
numbers = [5, 6, 11, 12, 98, 5]
find = 5
Output: 2

Sample Input 2:
numbers = [5, 6, 11, 12, 98, 5]
find = 25
Output: 0
*/


function countRepetedNums(numbers, find) {
    let count = 0;
    for (const number of numbers) {
        if (number === find) {
            count++;
        }
    }
    return count;
}

const originialNumbers = [5, 6, 11, 12, 98, 5];
console.log(countRepetedNums(originialNumbers, 5));