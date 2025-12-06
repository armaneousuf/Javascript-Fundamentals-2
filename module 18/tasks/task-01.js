// Task 1
// Write JavaScript code to reverse the array colors WITHOUT using the reverse() method.
//
// Input:
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
//
// Expected Output:
// ['orange', 'yellow', 'green', 'blue', 'red']

const reversed = [];

for (let i = 0; i <colors.length; i++){
    reversed.unshift(colors[i]);
}
console.log(reversed);