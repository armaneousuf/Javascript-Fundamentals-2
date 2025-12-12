const arr = [1, 5, 22, 55, 4];

function avgOfOdd(numbers) {
    let sum = 0;
    let count = 0;
  for (const number of numbers) {
      if (number % 2 === 1) {
          sum = sum + number;
          count++;
    }
  }
  return (sum / count).toFixed(2);
}

console.log(avgOfOdd(arr));

