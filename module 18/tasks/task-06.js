// Task 6
// Given an array of student objects, print each student’s name and marks.
//
// Input:
// const students = [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ];
//
// Expected Output:
// John scored 85
// Alice scored 90

const students = [
   { name: "John", marks: 85 },
   { name: "Alice", marks: 90 }
];
 
const first = students[0].name + " scored " + students[0].marks;
const second = students[1].name + " scored " + students[1].marks;
console.log(first);
console.log(second);

