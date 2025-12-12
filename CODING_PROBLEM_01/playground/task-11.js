/* Task 6:
Generate a random number between 1 and 10.
Write a function that takes a guess as a parameter and returns:
- "Too High" if guess > random number
- "Too Low" if guess < random number
- "Correct!" if guess === random number
*/

const value = Math.floor(Math.random() * 10) + 1;
function generateRandNumber(number) {
  if (number > value) {
    return "Too High";
  } else if (number < value) {
    return "Too Low";
  } else if (number === value) {
    return "Correct";
  }
}
console.log(generateRandNumber(4));
