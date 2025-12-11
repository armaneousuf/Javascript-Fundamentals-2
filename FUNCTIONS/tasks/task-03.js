/* ================================
   Task-3
   Write a function called make_avg().
   It should take an array of integers and the size of that array as parameters.
   Return the average of the values in the array.
=============================== */

function make_avg(numbersOfArr) {
    let sum = 0;
    let avg;
    for (const number of numbersOfArr) {
        sum = sum + number;
    }
    avg = sum / numbersOfArr.length;
    return {
        average: avg, 
        length: numbersOfArr.length
    }
}

const numbersOfArr = [100, 200, 300, 400, 500];
console.log(make_avg(numbersOfArr));

