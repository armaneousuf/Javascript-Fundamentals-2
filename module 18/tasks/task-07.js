// Task 7
// Given a 2D array, update the value at second row, first item to 99
// and print the updated array.
//
// Input:
const arr2D = [
  [1, 2],
  [3, 4],
  [5, 6]
];
//
// Expected Output:
// [
//   [1, 2],
//   [99, 4],
//   [5, 6]
// ]

arr2D[1][0] = 99;
console.log(arr2D);