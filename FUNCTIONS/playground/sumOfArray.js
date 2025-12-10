function sumOfArray(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum = sum + number;
    }
    return sum;
}

const arr = [1, 2, 3, 4, 5];
console.log(sumOfArray(arr));
console.log(sumOfArray(arr));
console.log(sumOfArray(arr));