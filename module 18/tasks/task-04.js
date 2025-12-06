// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the words will be reversed.
//
// Input:
// const statement = 'I am a hard working person';
//
// Expected Output:
// 'person working hard a am I'

const statement = "I am a hard working person";

const reversed = statement.split(' ').reverse().join(' ');
console.log(reversed);
