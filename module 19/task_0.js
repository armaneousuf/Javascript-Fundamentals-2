function checkNumber(number) {
    // const number = 10;
    if (number > 0) {
        return 'Positive';
    }

    else if (number < 0) {
        return 'Negetive';
    }

    else {
        return 'Zero';
    }
}

const result = checkNumber(10);
console.log(result);