// HARD WAY but efficient for larger arrays
/*
const numbers = [1, 2, 3, 4, 5];
const reversed = [];

for (let i = numbers.length - 1; i >= 0; i--) {
    reversed.push(numbers[i])
    
}
console.log(reversed); 
*/

// EASY WAY but slow for larger arrays
/*
const num = [6, 7, 8, 9, 0];
const reversed = [];

for (let j = 0; j < num.length; j++){
    reversed.unshift(num[j]);
}
console.log(reversed); 
*/

// VERY EASY but mutate the main array

const numbers = [1, 2, 3, 4, 5];
const reversed = [...numbers].reverse(); // make a copy first so the real array doesn't mutate
console.log(reversed); // reversed array
console.log(numbers); // original array stays same