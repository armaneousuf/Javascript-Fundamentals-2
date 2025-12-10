function sumOfEvneNumbers(numbers) {
    const evenArr = [];
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            evenArr.push(number);
            sum = sum + number;
        }
    }

    return {
        'even numbers': evenArr, 
        total: sum
    }

}

console.log(sumOfEvneNumbers([25, 20, 30, 21, 33]));