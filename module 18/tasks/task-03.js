// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.
//
// Input:
// const words = ['Tom', 'Tim', 'Tin', 'Tik'];
//
// Expected Output:
// 'TomTimTinTik'

const words = ["Tom", "Tim", "Tin", "Tik"];

let result = "";
for (const word of words) {
//   result.concat(word);
  result += word;
}

console.log(result);

