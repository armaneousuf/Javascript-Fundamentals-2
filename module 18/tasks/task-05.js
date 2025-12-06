// Task 5
// Copy the given array into another array so that changing the copy does not affect the original.
// Then, change the first element of the copied array to 99.
//
// Input:
// const arr = [1, 2, 3];
//
// Expected Output:
// Original: [1, 2, 3]
// Copy: [99, 2, 3]


const arr = [1, 2, 3];
const copy = arr.concat();

copy[0] = 99;
console.log(copy);
console.log(arr);