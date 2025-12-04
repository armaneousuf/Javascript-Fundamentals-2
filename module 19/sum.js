// function sumOfNumbers(numbers) {
//     let sum = 0;
//     for (const number of numbers) {
//         console.log(number);
//         sum = sum + number;
//     }

//     return sum;
// }

// const nums = [2, 4, 6, 8, 10];
// const sum = sumOfNumbers(nums);
// console.log("The sum of numbers is ", sum);


function productOfNumbers(numbers) {
  let product = 1;
  for (const number of numbers) {
    console.log(number);
    product = product * number;
  }

  return product;
}

const product = productOfNumbers([2, 3, 4]);
console.log("The product of number is ", product);

