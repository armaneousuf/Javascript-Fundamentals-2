/* 
Task-1:
Find the lowest number in the array below.

Input:
const heights2 = [167, 190, 120, 165, 137];

Goal:
Write a function that returns the lowest number from the array.
*/

function lowest(number) {
    let min = number[0];
    for (const num of number) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

const heights2 = [167, 190, 120, 165, 137];
console.log(lowest(heights2));