/* 
You are given an array of numbers.
Write a function to find the maximum number in the array.

Sample Input:
[-10, -3, -25, -1, -50, -7]

Sample Output:
-1
*/

function findMax(number) {
    let max = number[0];

    for (const num of number) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
const arrOfMax = [-10, -3, -25, -1, -50, -7];
console.log(findMax(arrOfMax))