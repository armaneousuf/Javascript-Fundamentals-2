function noDuplicate(numbers) {
    const unique = [];
    for (const item of numbers) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }

    return unique;
}

const answer = noDuplicate([1, 3, 2, 1, 68, 48, 68]);
console.log(answer);


