const numbers = [1, 3, 5, 89, 100, 24, 35];
const sortedNum = numbers.sort(function (a, b) { return a - b }); // ASCENDING 
console.log(sortedNum);

const sortedNumDesc = numbers.sort(function (a, b) { return b - a }); // DESCENDING
console.log(sortedNumDesc);