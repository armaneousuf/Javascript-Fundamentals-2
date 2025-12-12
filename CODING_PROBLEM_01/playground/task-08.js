/* Task 8:  
Write a function that returns a random integer between 1 and 6  
(simulating a dice roll) using Math.random()  
*/

function random() {
    return Math.floor(Math.random() * 6) + 1;
}

console.log(random());