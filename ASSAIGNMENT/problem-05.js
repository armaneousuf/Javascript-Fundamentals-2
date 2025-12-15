/* =========================================
Problem-05: Exam Result Report Generator
========================================
You need to create a function named `resultReport` that takes an array of numbers as input. Each number represents a student's marks in a subject.
The function should return an object containing three properties:
1. `finalScore` : The average of all marks, **rounded to the nearest integer**.
2. `pass`       : The number of subjects where marks are **40 or above**.
3. `fail`       : The number of subjects where marks are **below 40**.
📥 Input:
* An array of numbers representing marks in each subject.
🚀 Output:
* An object with the properties: `finalScore`, `pass`, `fail`.
* If the input is not an array, return `"Invalid"`.

SAMPLE INPUT / OUTPUT:
[]
{ finalScore: 0, pass: 0, fail: 0 }
[98, 87, 67, 91, 92, 33, 87]
{ finalScore: 79, pass: 6, fail: 1 }
[99, 87, 67, 12, 87]
{ finalScore: 70, pass: 4, fail: 1 }
[99]
{ finalScore: 99, pass: 1, fail: 0 }
100
"Invalid"
========================================= */

function resultReport(arrayOfNumbers) {
  let total = 0;
  let passCount = 0;
  let failCount = 0;

  if (!Array.isArray(arrayOfNumbers)) {
    return "Invalid";
  }

  for (const number of arrayOfNumbers) {
    // console.log(number);
    total = total + number;
    if (number >= 40) {
      passCount++;
    } else {
      failCount++;
    }
  }
  return {
    finalScore: Math.round(total / arrayOfNumbers.length),
    pass: passCount,
    fail: failCount,
  };
}

console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([99, 87, 67, 12, 87]));
console.log(resultReport([99]));
console.log(resultReport(100));
