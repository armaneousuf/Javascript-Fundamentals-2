function noDuplicate(numbers) {
    // console.log(numbers);
    const unique = [];

    for (const number of numbers) {
        // console.log(number);
        if (unique.includes(number) === false) {
            unique.push(number);
        }
    }
    return unique;
}

const arr = [1, 2, 3, 3, 2, 5, 8]
console.log(noDuplicate(arr));