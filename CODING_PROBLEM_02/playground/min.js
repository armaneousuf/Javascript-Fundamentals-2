/* 
You are given an array of numbers.
Write a function to find the minimum number in the array.

Sample Input:
[45, 12, 78, 3, 90, 26, 54]

Sample Output:
3
*/

const arrOfMin = [45, 12, 78, 3, 90, 26, 54];
function findMin(number) {
    // console.log(number);
    let min = number[0];
    for (const num of number) {
        // console.log(num);
        if (num < min) {
            min = num;
        }
    }
    return min;
}
const result = findMin(arrOfMin);
console.log(result);